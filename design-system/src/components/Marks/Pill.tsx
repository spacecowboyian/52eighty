import type { CSSProperties, ReactNode } from 'react';
import { colors, font, radius, ease } from '../../tokens';
import { useHover } from '../../utils/useHover';

/**
 * The guide's pill highlight ("HOW WE TALK", "HOW WE LOOK"): a small tilted
 * label that reads as a sticker, not a button. Tone pairs are the verified
 * ones — red carries ink at the default size and lime only at `lg`, where the
 * type is big enough for 3:1.
 */
export type PillTone = 'sky' | 'red' | 'lime' | 'pine' | 'blush' | 'peri';
export type PillSize = 'md' | 'lg';

export interface PillProps {
  children: ReactNode;
  tone?: PillTone;
  size?: PillSize;
  /** Degrees. Default −2; hover settles to 0. */
  rotate?: number;
  className?: string;
  style?: CSSProperties;
}

const PAIRS: Record<PillTone, { bg: string; fg: string; fgLg?: string }> = {
  sky: { bg: colors.sky, fg: colors.pine },
  red: { bg: colors.red, fg: colors.ink, fgLg: colors.lime },
  lime: { bg: colors.lime, fg: colors.pine },
  pine: { bg: colors.pine, fg: colors.paper },
  blush: { bg: colors.blush, fg: colors.pine },
  peri: { bg: colors.peri, fg: '#FFFFFF' },
};

export function Pill({ children, tone = 'sky', size = 'md', rotate = -2, className, style }: PillProps) {
  const { isHovered, hoverProps } = useHover();
  const pair = PAIRS[tone];
  return (
    <span
      {...hoverProps}
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: font.ui,
        fontWeight: 700,
        fontSize: size === 'lg' ? 20 : 14,
        lineHeight: 1,
        letterSpacing: '.06em',
        textTransform: 'uppercase',
        padding: size === 'lg' ? '14px 26px' : '8px 14px',
        borderRadius: radius.pill,
        background: pair.bg,
        color: size === 'lg' && pair.fgLg ? pair.fgLg : pair.fg,
        transform: `rotate(${isHovered ? 0 : rotate}deg)`,
        transition: `transform .3s ${ease.out}`,
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      {children}
    </span>
  );
}
