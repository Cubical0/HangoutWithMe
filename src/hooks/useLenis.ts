'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

// Extend Window interface to include lenis
declare global {
  interface Window {
    lenis?: Lenis;
  }
}

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Get the global Lenis instance if it exists
    const lenis = window.lenis;
    if (lenis) {
      lenisRef.current = lenis;
    }
  }, []);

  return lenisRef.current;
}

export function useLenisScroll(callback: (lenis: Lenis) => void, deps: React.DependencyList = []) {
  useEffect(() => {
    const lenis = window.lenis;
    if (lenis) {
      lenis.on('scroll', callback);
      return () => {
        lenis.off('scroll', callback);
      };
    }
  }, [callback, ...deps]);
}