import React from 'react';
import { colors, font } from '../../tokens';

export type SectionHeaderVariant = 'centered' | 'marker' | 'divider';

export interface SectionHeaderProps {
  /** Small uppercase kicker above the title. */
  eyebrow?: string;
  /** Main headline. */
  title?: string;
  /** Supporting lead paragraph (centered variant only). */
  subtitle?: string;
  /**
   * Layout:
   * - `centered` — centered eyebrow + headline + lead, on the page ground.
   * - `marker` — left-aligned eyebrow + headline.
   * - `divider` — a small uppercase label heading (uses `label`).
   */
  variant?: SectionHeaderVariant;
  /** Eyebrow color override (centered defaults to red, marker to pine). */
  tone?: string;
  /** @deprecated The marker bar is gone; kept so callers don't break. */
  barColor?: string;
  /** Center label on the `divider` variant. */
  label?: string;
}

/**
 * Section header: eyebrow + title + subtitle. Sits directly on whatever
 * ground it's placed on — no card shell, no rule.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = 'centered',
  tone,
  label = 'Mile 5,280',
}: SectionHeaderProps) {
  if (variant === 'divider') {
    // The dashed mile-marker rule is gone — a rule is a border by another
    // name. Until PR 6's `trail` variant, the label reads as a plain heading.
    return (
      <h2
        style={{
          fontFamily: font.ui,
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '.22em',
          textTransform: 'uppercase',
          color: colors.muted,
          margin: 0,
        }}
      >
        {label}
      </h2>
    );
  }

  if (variant === 'marker') {
    return (
      <div style={{ padding: '8px 0' }}>
        <div>
          <div
            style={{
              fontFamily: font.ui,
              fontSize: 12,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              color: tone ?? colors.pine,
              marginBottom: 6,
            }}
          >
            {eyebrow}
          </div>
          <h3
            style={{
              fontFamily: font.display,
              fontWeight: 800,
              fontSize: 28,
              margin: 0,
              letterSpacing: '-.01em',
            }}
          >
            {title}
          </h3>
        </div>
      </div>
    );
  }

  // centered
  return (
    <div style={{ padding: '8px 0', textAlign: 'center' }}>
      <div
        style={{
          fontFamily: font.ui,
          fontSize: 12,
          letterSpacing: '.24em',
          textTransform: 'uppercase',
          color: tone ?? colors.red,
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </div>
      <h3
        style={{
          fontFamily: font.display,
          fontWeight: 800,
          fontSize: 34,
          letterSpacing: '-.01em',
          margin: '0 0 12px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: font.serif,
          fontSize: 18,
          color: colors.muted,
          maxWidth: '54ch',
          margin: '0 auto',
          lineHeight: 1.5,
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}
