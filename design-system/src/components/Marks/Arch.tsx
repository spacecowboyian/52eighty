import type { CSSProperties, ReactNode } from 'react';
import { bandTones, type BandTone } from '../Band/Band';

/**
 * The guide's arch/dome: a true semicircle top at any width, square bottom.
 * Pure CSS (`border-radius: 999px 999px 0 0` + `aspect-ratio`), so it's
 * animatable and needs no SVG. Put a photo in it, or leave it as a colour
 * field until one exists — a trailhead, or the sun on a ridge.
 */
export interface ArchProps {
  children?: ReactNode;
  /** CSS `aspect-ratio`. Default 4 / 5 (portrait). */
  ratio?: string;
  /** Colour field behind (or instead of) the content. */
  tone?: BandTone;
  className?: string;
  style?: CSSProperties;
}

export function Arch({ children, ratio = '4 / 5', tone = 'sky', className, style }: ArchProps) {
  return (
    <div
      className={className}
      style={{
        aspectRatio: ratio,
        width: '100%',
        overflow: 'hidden',
        borderRadius: '999px 999px 0 0',
        background: bandTones[tone].bg,
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Style for an `<img>` / `<video>` placed inside an Arch. */
export const archMedia: CSSProperties = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};
