import type { CSSProperties } from 'react';
import { colors } from '../../tokens';
import logo from '../../assets/marks/logo-5280.svg?raw';

/**
 * The "5280!" mark from the brand guide, inline so it takes colour from CSS.
 * The digits are `currentColor`; the exclamation mark reads `--lime`, which
 * is lime on a dark field (the guide) and red on a light one, where lime
 * would vanish. Carries its own accessible name — the brand's *name* is
 * 52Eighty Creative; the *mark* reads 5280!.
 */
export interface WordmarkProps {
  /** Rendered height in px; width follows the mark's 2.61:1 ratio. */
  height?: number;
  /** `dark` = paper digits + lime bang (over pine/photo). `light` = pine digits + red bang. */
  tone?: 'light' | 'dark';
  /** Optional link, usually the home page. */
  href?: string;
  className?: string;
  style?: CSSProperties;
}

const RATIO = 678.88 / 259.72;

export function Wordmark({ height = 26, tone = 'light', href, className, style }: WordmarkProps) {
  const dark = tone === 'dark';
  const wrap: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    height,
    width: Math.round(height * RATIO),
    color: dark ? '#FFFFFF' : colors.pine,
    ['--lime' as string]: dark ? colors.lime : colors.red,
    transition: 'color .3s cubic-bezier(.2,.7,.2,1)',
    textDecoration: 'none',
    flex: 'none',
    ...style,
  };
  const inner = (
    <>
      <span
        aria-hidden="true"
        style={{ display: 'contents' }}
        dangerouslySetInnerHTML={{ __html: logo.replace('<svg ', '<svg width="100%" height="100%" ') }}
      />
      <span className="sr-only">52Eighty Creative</span>
    </>
  );
  return href ? (
    <a href={href} className={className} style={wrap}>
      {inner}
    </a>
  ) : (
    <span className={className} style={wrap}>
      {inner}
    </span>
  );
}
