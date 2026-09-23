import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';
import { useInView } from '../../utils/useInView';
import { useReducedMotion } from '../../utils/useReducedMotion';
import { ease } from '../../tokens';
import raw from '../../assets/marks/squiggle.svg?raw';

const VIEWBOX = /viewBox="([^"]+)"/.exec(raw)?.[1] ?? '0 0 402.4 182.1';
const PATH = /d="([^"]+)"/.exec(raw)?.[1] ?? '';

/**
 * The hand-drawn loop from the guide (p2) — reads as a trail on a map. It's
 * a filled ribbon in the source, not a stroke, so `draw` sweeps it in with a
 * clip rather than a dash offset: 1.1s, once, when it scrolls into view.
 * Skipped (fully drawn from the start) under reduced motion.
 */
export interface SquiggleProps {
  /** Draw itself on first view. */
  draw?: boolean;
  /** Rendered width; height follows the 2.21:1 ratio. */
  width?: number | string;
  className?: string;
  style?: CSSProperties;
}

export function Squiggle({ draw = false, width = 200, className, style }: SquiggleProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>(0.25);
  const [drawn, setDrawn] = useState(!draw);

  useEffect(() => {
    if (!draw) return;
    if (reduced || inView) {
      setDrawn(true);
      return;
    }
    // Never leave it invisible: if the observer hasn't fired (partially
    // on-screen at load, or no IO), draw anyway after a beat.
    const t = window.setTimeout(() => setDrawn(true), 1500);
    return () => window.clearTimeout(t);
  }, [draw, reduced, inView]);

  return (
    <span
      ref={ref}
      className={className}
      aria-hidden="true"
      style={{ display: 'inline-block', width, lineHeight: 0, ...style }}
    >
      <svg viewBox={VIEWBOX} width="100%" style={{ display: 'block', overflow: 'visible' }}>
        <path
          d={PATH}
          fill="currentColor"
          style={{
            clipPath: drawn ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
            transition: draw && !reduced ? `clip-path 1.1s ${ease.out}` : 'none',
          }}
        />
      </svg>
    </span>
  );
}
