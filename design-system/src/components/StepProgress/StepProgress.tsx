import React from 'react';
import { colors, radius } from '../../tokens';

export interface StepProgressProps {
  /** 1-based index of the active step. */
  current: number;
  /** Total number of steps. */
  total: number;
  /** Per-step short titles, rendered beside the counter when supplied. */
  labels?: string[];
}

const counterStyle: React.CSSProperties = {
  fontFamily: 'var(--ui)',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: colors.muted,
};

const titleStyle: React.CSSProperties = {
  fontFamily: 'var(--ui)',
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: '.06em',
  color: colors.pine,
};

/**
 * "Step 1 of 3" counter plus a segmented bar. Segments render as a flex row so
 * the bar fills whatever width it is given without a media query.
 */
export function StepProgress({ current, total, labels }: StepProgressProps) {
  const label = labels?.[current - 1];

  return (
    <div
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current}
      aria-valuetext={label ? `Step ${current} of ${total} — ${label}` : `Step ${current} of ${total}`}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          gap: 12,
          marginBottom: 8,
        }}
      >
        <span style={counterStyle}>
          Step {current} of {total}
        </span>
        {label && <span style={titleStyle}>{label}</span>}
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: radius.pill,
              background: i < current ? colors.pine : colors.border,
              transition: 'background .3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
