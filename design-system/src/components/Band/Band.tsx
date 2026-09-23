import React, { forwardRef } from 'react';
import { colors } from '../../tokens';

/**
 * A full-bleed colour field. The site is a sequence of these — one colour per
 * section, flooded edge to edge, content held to the reading column by the
 * page grid (`.page` / `.band` in theme.css). No borders, no card shells; the
 * transition between two bands *is* the colour change.
 */
export type BandTone = 'cream' | 'pine' | 'jade' | 'peri' | 'sky' | 'blush' | 'lime' | 'transparent';
export type BandPad = 'none' | 'sm' | 'md' | 'lg';
export type BandEdge = 'none' | 'arch';
export type BandFrame = 'sky' | 'blush';

export interface BandToneSpec {
  bg: string;
  /** Body / heading colour on this field. */
  fg: string;
  /** Secondary text on this field. */
  fgSoft: string;
  /** The one accent allowed on this field (eyebrows, numerals, highlighted words). */
  accent: string;
  /** What the glass header should read as when it sits over this field. */
  header: 'light' | 'dark';
}

/**
 * Verified pairings (WCAG contrast in the comments). Type on a field is
 * white / paper / lime only; lime on jade and peri clears 3:1 for display type
 * but not 4.5 for small text, so it stays display-only there.
 */
export const bandTones: Record<BandTone, BandToneSpec> = {
  cream: { bg: colors.cream, fg: colors.ink, fgSoft: colors.muted, accent: colors.pine, header: 'light' },
  pine: { bg: colors.pine, fg: '#FFFFFF', fgSoft: '#CFE2E0', accent: colors.lime, header: 'dark' }, // lime 8.95
  jade: { bg: colors.jade, fg: '#FFFFFF', fgSoft: 'rgba(255,255,255,.84)', accent: colors.lime, header: 'dark' }, // white 6.23, lime 5.66
  peri: { bg: colors.peri, fg: '#FFFFFF', fgSoft: 'rgba(255,255,255,.88)', accent: colors.lime, header: 'dark' }, // white 4.70, lime 4.27 (display only)
  sky: { bg: colors.sky, fg: colors.pine, fgSoft: colors.ink, accent: colors.pine, header: 'light' }, // pine 4.73, ink 7.93
  blush: { bg: colors.blush, fg: colors.pine, fgSoft: colors.ink, accent: colors.red, header: 'light' }, // pine 7.08; red = marks only
  lime: { bg: colors.lime, fg: colors.pine, fgSoft: colors.ink, accent: colors.red, header: 'light' }, // pine 8.95; red = marks only
  transparent: { bg: 'transparent', fg: colors.ink, fgSoft: colors.muted, accent: colors.pine, header: 'light' },
};

export interface BandProps extends Omit<React.HTMLAttributes<HTMLElement>, 'children'> {
  /** Element to render. */
  as?: 'section' | 'div' | 'article' | 'aside' | 'header' | 'footer';
  tone?: BandTone;
  /** Wrap the field in a sky/blush frame with a square-cornered inner field (guide pp3–6, 8). */
  frame?: BandFrame;
  /** `arch` domes the top edge over the band above it. */
  edge?: BandEdge;
  /** Vertical rhythm: same-colour neighbours `sm`; a colour seam `md` both sides; the reel's bottom `lg`. */
  pad?: BandPad;
  /** Override what the header reads as over this band (defaults from the tone). */
  headerTone?: 'light' | 'dark';
  /** Full-bleed layer behind the content — a photo + scrim. `aria-hidden`. */
  background?: React.ReactNode;
  /** Opt in to the one whole-block settle after a hard colour edge (PR 7). */
  reveal?: boolean;
  children?: React.ReactNode;
}

export const Band = forwardRef<HTMLElement, BandProps>(function Band(
  {
    as = 'section',
    tone = 'cream',
    frame,
    edge = 'none',
    pad = 'md',
    headerTone,
    background,
    reveal = false,
    className,
    style,
    children,
    ...rest
  },
  ref,
) {
  const spec = bandTones[tone];
  const vars = {
    '--band-bg': spec.bg,
    '--band-fg': spec.fg,
    '--band-fg-soft': spec.fgSoft,
    '--band-accent': spec.accent,
  } as React.CSSProperties;

  const classes = [
    'band',
    `band--${tone}`,
    `band--pad-${pad}`,
    edge !== 'none' ? `band--edge-${edge}` : '',
    background ? 'band--has-bg' : '',
    className ?? '',
  ]
    .filter(Boolean)
    .join(' ');

  const field = React.createElement(
    as,
    {
      ref,
      className: classes,
      'data-header-tone': headerTone ?? spec.header,
      'data-reveal': reveal ? '' : undefined,
      style: { background: spec.bg, color: spec.fg, ...vars, ...style },
      ...rest,
    },
    background ? (
      <div className="band__bg" aria-hidden="true">
        {background}
      </div>
    ) : null,
    children,
  );

  if (!frame) return field;

  return (
    <div className={`band band--frame band--frame-${frame}`} style={{ background: colors[frame] }}>
      {field}
    </div>
  );
});
