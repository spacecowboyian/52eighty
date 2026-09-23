import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '5280-design-system';

/** Re-exported from the design system; kept here so existing imports work. */
export const usePrefersReducedMotion = useReducedMotion;

/**
 * Scroll progress of an element through the viewport, from 0 (its top edge is
 * at the bottom of the screen) to 1 (its bottom edge is at the top). Drives the
 * parallax offsets in the intake showcase.
 *
 * Reads are batched into a rAF so a fast scroll doesn't thrash layout, and the
 * hook parks itself at 0.5 (the neutral, un-offset position) when the visitor
 * prefers reduced motion, so no transform ever gets applied.
 */
export function useScrollProgress(ref: React.RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0.5);
  const reduced = useReducedMotion();
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (reduced) {
      setProgress(0.5);
      return;
    }

    const measure = () => {
      frame.current = null;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const span = window.innerHeight + rect.height;
      if (span <= 0) return;
      const raw = (window.innerHeight - rect.top) / span;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame.current !== null) window.cancelAnimationFrame(frame.current);
    };
  }, [ref, reduced]);

  return progress;
}

/** Smooth-scroll to an element, honoring the reduced-motion preference. */
export function scrollToElement(node: HTMLElement | null, reduced: boolean) {
  if (!node) return;
  node.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}
