import { useEffect, useRef, useState } from 'react';

/** True when the visitor has asked for reduced motion. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = () => setReduced(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

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
  const reduced = usePrefersReducedMotion();
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

/**
 * Publish the sticky site header's real height as `--site-header-h`, so
 * anything pinning beneath it lands in the right place.
 *
 * A constant doesn't work: the header is taller on narrow screens where the
 * wordmark wraps to two lines, which left the showcase nav tucked underneath
 * it on mobile.
 */
export function useHeaderHeightVar() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const apply = () => {
      const { height } = header.getBoundingClientRect();
      document.documentElement.style.setProperty('--site-header-h', `${Math.round(height)}px`);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);
}

/** Smooth-scroll to an element, honoring the reduced-motion preference. */
export function scrollToElement(node: HTMLElement | null, reduced: boolean) {
  if (!node) return;
  node.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
}
