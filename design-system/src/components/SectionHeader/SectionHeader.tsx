import React from 'react';
import { colors, text } from '../../tokens';
import { Pill, type PillTone } from '../Marks/Pill';
import { Squiggle } from '../Marks/Squiggle';

export type SectionHeaderVariant = 'centered' | 'marker' | 'trail' | 'divider';

export interface SectionHeaderProps {
  /** Small label, rendered as a tilted Pill tucked under the title's last line (guide: "HOW WE TALK"). */
  eyebrow?: string;
  /** Pill colour for the eyebrow. Default sky. */
  eyebrowTone?: PillTone;
  /** Main headline. */
  title?: string;
  /** Supporting lead paragraph (centered variant only). */
  subtitle?: string;
  /**
   * Layout:
   * - `centered` — centered headline + eyebrow + lead, on the page ground.
   * - `marker` — left-aligned headline + eyebrow.
   * - `trail` — the squiggle (88px, peri) beside the title; replaces the old mile-marker.
   * - `divider` — alias of `trail`; kept for callers.
   */
  variant?: SectionHeaderVariant;
  /**
   * Heading level. `h1` uses the page-title display size, everything else the
   * section size. Default `h2`; pages pass `h1` for their title.
   */
  as?: 'h1' | 'h2' | 'h3';
  /** @deprecated Eyebrow colour is the Pill's; use `eyebrowTone`. */
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
  eyebrowTone = 'sky',
  label = 'Mile 5,280',
}: SectionHeaderProps) {
  // Tucked under the title's last line — the guide's sticker composition.
  const pill = eyebrow ? (
    <div style={{ marginTop: '-.4em', position: 'relative', zIndex: 1 }}>
      <Pill tone={eyebrowTone}>{eyebrow}</Pill>
    </div>
  ) : null;

  const titleStyle: React.CSSProperties = {
    ...(as === 'h1' ? text.displayLG : text.displayMD),
    color: 'var(--band-fg, #16211F)',
    margin: 0,
    textWrap: 'balance',
  } as React.CSSProperties;

  if (variant === 'trail' || variant === 'divider') {
    // The squiggle where the dashed mile-marker used to be: a trail on a map,
    // not a rule. `label` is the heading text when `title` isn't given.
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '8px 0' }}>
        <Squiggle width={88} style={{ color: colors.peri, flex: 'none' }} />
        <div>
          {React.createElement(as, { style: titleStyle }, title ?? label)}
          {pill}
        </div>
      </div>
    );
  }

  if (variant === 'marker') {
    return (
      <div style={{ padding: '8px 0' }}>
        {React.createElement(as, { style: titleStyle }, title)}
        {pill}
      </div>
    );
  }

  // centered
  return (
    <div style={{ padding: '8px 0', textAlign: 'center' }}>
      {React.createElement(as, { style: titleStyle }, title)}
      {pill}
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
