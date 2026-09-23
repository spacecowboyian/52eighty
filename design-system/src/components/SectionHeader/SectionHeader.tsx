import React from 'react';
import { colors, text } from '../../tokens';

export type SectionHeaderVariant = 'centered' | 'marker' | 'divider';

export interface SectionHeaderProps {
  /** Small uppercase label. Sits *below* the title, per the guide's composition. */
  eyebrow?: string;
  /** Main headline. */
  title?: string;
  /** Supporting lead paragraph (centered variant only). */
  subtitle?: string;
  /**
   * Layout:
   * - `centered` — centered headline + eyebrow + lead, on the page ground.
   * - `marker` — left-aligned headline + eyebrow.
   * - `divider` — a small uppercase label heading (uses `label`).
   */
  variant?: SectionHeaderVariant;
  /**
   * Heading level. `h1` uses the page-title display size, everything else the
   * section size. Default `h2`; pages pass `h1` for their title.
   */
  as?: 'h1' | 'h2' | 'h3';
  /** Eyebrow color override (defaults to pine). */
  tone?: string;
  /** @deprecated The marker bar is gone; kept so callers don't break. */
  barColor?: string;
  /** Center label on the `divider` variant. */
  label?: string;
}

/**
 * Section header: title + eyebrow + subtitle. Sits directly on whatever
 * ground it's placed on — no card shell, no rule. Display type is the
 * uppercase hand-drawn face at its single weight; text colour comes from the
 * surrounding band (`--band-fg`) so the same header works on any field.
 */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  variant = 'centered',
  as = 'h2',
  tone,
  label = 'Mile 5,280',
}: SectionHeaderProps) {
  const eyebrowStyle: React.CSSProperties = {
    ...text.eyebrow,
    color: tone ?? 'var(--band-accent, #184A4F)',
    marginTop: 10,
  };

  if (variant === 'divider') {
    // The dashed mile-marker rule is gone — a rule is a border by another
    // name. Until PR 6's `trail` variant, the label reads as a plain heading.
    return React.createElement(
      as,
      { style: { ...text.eyebrow, color: tone ?? 'var(--band-fg-soft, #5C6B68)', margin: 0 } },
      label,
    );
  }

  const titleStyle: React.CSSProperties = {
    ...(as === 'h1' ? text.displayLG : text.displayMD),
    color: 'var(--band-fg, #16211F)',
    margin: 0,
    textWrap: 'balance',
  } as React.CSSProperties;

  if (variant === 'marker') {
    return (
      <div style={{ padding: '8px 0' }}>
        {React.createElement(as, { style: titleStyle }, title)}
        {eyebrow && <div style={eyebrowStyle}>{eyebrow}</div>}
      </div>
    );
  }

  // centered
  return (
    <div style={{ padding: '8px 0', textAlign: 'center' }}>
      {React.createElement(as, { style: titleStyle }, title)}
      {eyebrow && <div style={eyebrowStyle}>{eyebrow}</div>}
      {subtitle && (
        <p
          style={{
            ...text.lead,
            color: 'var(--band-fg-soft, #5C6B68)',
            maxWidth: '54ch',
            margin: '18px auto 0',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
