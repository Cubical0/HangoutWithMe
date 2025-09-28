'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue } from 'framer-motion';
import Lenis from 'lenis';

// Extend Window interface to include lenis
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function useLenisScroll(targetRef: React.RefObject<HTMLElement>) {
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (!targetRef.current) return;

      const rect = targetRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      
      // Calculate progress similar to Framer Motion's useScroll
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      let progress = 0;
      
      // Simple approach: start when element enters, finish when it exits
      if (elementBottom >= 0 && elementTop <= windowHeight) {
        // Element is visible in viewport
        const visibleHeight = Math.min(elementBottom, windowHeight) - Math.max(elementTop, 0);
        const totalPossibleVisible = elementHeight + windowHeight;
        const scrolled = windowHeight - elementTop;
        progress = Math.max(0, Math.min(1, scrolled / totalPossibleVisible));
      } else if (elementTop < 0) {
        // Element has scrolled past
        progress = 1;
      }
      

      
      scrollYProgress.set(progress);
    };

    // Initial calculation
    const initialTimeout = setTimeout(updateScrollProgress, 50);

    let cleanup: (() => void) | undefined;

    // Set up scroll listener
    const setupListener = () => {
      const lenis = window.lenis;
      if (lenis) {
        lenis.on('scroll', updateScrollProgress);
        cleanup = () => lenis.off('scroll', updateScrollProgress);
      } else {
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        cleanup = () => window.removeEventListener('scroll', updateScrollProgress);
      }
    };

    // Wait for Lenis to be ready
    const listenerTimeout = setTimeout(setupListener, 100);

    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(listenerTimeout);
      if (cleanup) cleanup();
    };
  }, [targetRef, scrollYProgress]);

  return scrollYProgress;
}