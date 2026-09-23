/**
 * 52Eighty Creative design tokens.
 * Source of truth for colors, typography, radii, spacing, and elevation.
 * Mirrors the CSS custom properties declared in styles/theme.css.
 */

import type React from 'react';

export const colors = {
  // Core
  pine: '#184A4F', // primary
  jade: '#096D61', // secondary
  ink: '#16211F', // text
  muted: '#5C6B68', // secondary text
  // Accents
  red: '#FF3B3B', // signal / energy — marks and ≥3:1 UI edges, never small text on a field
  redDeep: '#D92B2B', // red as *text* under 24px (4.85:1 on white)
  peri: '#5A70BB', // periwinkle
  gold: '#FBBA16', // highlight
  // Soft tints & neutrals
  blush: '#FFD0C7',
  sky: '#8CB6F2',
  lime: '#F0FC97',
  cream: '#FBF9F5', // page background
  surface: '#FFFFFF',
  border: '#E7E1D8',
  paper: '#F4F1EA', // light text on dark backgrounds
} as const;

export const font = {
  display: "'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",
  serif: "'Minion 3','Source Serif 4 Variable',Georgia,serif",
  ui: "'Owners Narrow','Acumin Pro Wide','Archivo Variable',system-ui,sans-serif",
} as const;

/**
 * Type scale. Display is the hand-drawn caps face at its single weight —
 * uppercase, leading near 0.95, a hair of *positive* tracking (negative
 * tracking collides the irregular strokes). Headings and body are the serif;
 * eyebrows the UI face. `text-transform` does the casing so CMS copy and
 * screen readers keep sentence case. Mirrored as `.t-*` classes in theme.css.
 */
export const text = {
  /** Hero only. */
  displayXL: {
    fontFamily: "'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",
    fontWeight: 400,
    textTransform: 'uppercase',
    fontSize: 'clamp(3rem, 9vw, 6.5rem)',
    lineHeight: 0.92,
    letterSpacing: '.01em',
  },
  /** Page h1. */
  displayLG: {
    fontFamily: "'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",
    fontWeight: 400,
    textTransform: 'uppercase',
    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
    lineHeight: 0.95,
    letterSpacing: '.02em',
  },
  /** Section h2. */
  displayMD: {
    fontFamily: "'Crumb','TAY Crumb','Lilita One','Display Fallback',system-ui,sans-serif",
    fontWeight: 400,
    textTransform: 'uppercase',
    fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
    lineHeight: 1,
    letterSpacing: '.02em',
  },
  /** h3 / pillar — the guide's pillars are Minion sentence case. */
  heading: {
    fontFamily: "'Minion 3','Source Serif 4 Variable',Georgia,serif",
    fontWeight: 700,
    fontOpticalSizing: 'auto',
    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
    lineHeight: 1.15,
  },
  /** Card title. */
  title: {
    fontFamily: "'Minion 3','Source Serif 4 Variable',Georgia,serif",
    fontWeight: 700,
    fontSize: '1.25rem',
    lineHeight: 1.2,
  },
  lead: {
    fontFamily: "'Minion 3','Source Serif 4 Variable',Georgia,serif",
    fontWeight: 400,
    fontSize: 'clamp(1.125rem, 1.5vw, 1.375rem)',
    lineHeight: 1.5,
  },
  body: {
    fontFamily: "'Minion 3','Source Serif 4 Variable',Georgia,serif",
    fontWeight: 400,
    fontSize: '1.0625rem',
    lineHeight: 1.65,
  },
  eyebrow: {
    fontFamily: "'Owners Narrow','Acumin Pro Wide','Archivo Variable',system-ui,sans-serif",
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: 1.2,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
  },
} as const satisfies Record<string, React.CSSProperties>;

export const radius = {
  sm: 6,
  md: 12,
  lg: 18,
  pill: 999,
} as const;

/** Vertical rhythm for bands: same-colour neighbours `sm`, a colour seam `md`, the reel's bottom `lg`. */
export const sectionSpace = {
  sm: 'clamp(3rem, 6vw, 4.5rem)',
  md: 'clamp(4rem, 9vw, 7rem)',
  lg: 'clamp(5rem, 12vw, 9rem)',
} as const;

/** 8-point spacing rhythm. */
export const space = [4, 8, 12, 16, 24, 32, 48] as const;

export const shadow = {
  sm: '0 1px 2px rgba(22,33,31,.06)',
  md: '0 6px 18px rgba(22,33,31,.10)',
  lg: '0 18px 40px rgba(22,33,31,.16)',
} as const;

/**
 * The one easing family. `out` is what the hero's arrival already used —
 * a fast start that settles without overshoot. Hand-drawn aliveness lives in
 * the marks, not in bouncing UI.
 */
export const ease = {
  out: 'cubic-bezier(.2,.7,.2,1)',
  inOut: 'cubic-bezier(.65,0,.35,1)',
} as const;

/** @deprecated The 56%-overshoot spring is retired; use `ease.out`. */
export const spring = ease.out;

export type ColorToken = keyof typeof colors;
