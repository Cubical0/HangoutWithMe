'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Get the global Lenis instance if it exists
    const lenis = (window as any).lenis;
    if (lenis) {
      lenisRef.current = lenis;
    }
  }, []);

  return lenisRef.current;
}

export function useLenisScroll(callback: (lenis: Lenis) => void, deps: any[] = []) {
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.on('scroll', callback);
      return () => {
        lenis.off('scroll', callback);
      };
    }
  }, deps);
}