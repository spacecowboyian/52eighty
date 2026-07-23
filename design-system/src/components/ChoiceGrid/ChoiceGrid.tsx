import React from 'react';
import { colors, radius, spring } from '../../tokens';

export interface ChoiceOption {
  /** Stable value written into form state. */
  value: string;
  /** Option headline. */
  label: string;
  /** Optional one-line clarifier under the label. */
  hint?: string;
}

export interface ChoiceGridProps {
  options: ChoiceOption[];
  /** Selected value(s). A string in single mode, an array in multi mode. */
  value?: string | string[];
  /** Allow more than one selection. */
  multi?: boolean;
  /** Fires with the next selection — a string in single mode, an array in multi. */
  onChange?: (next: any) => void;
  /** Accessible group label (rendered visually hidden). */
  legend?: string;
  /** Minimum column width before the grid wraps. Lower it for short labels. */
  minColumnWidth?: number;
}

const cardBase: React.CSSProperties = {
  textAlign: 'left',
  background: '#fff',
  border: `1.5px solid ${colors.border}`,
  borderRadius: radius.md,
  padding: '16px 18px',
  cursor: 'pointer',
  fontFamily: 'var(--ui)',
  color: colors.ink,
  transition: `transform .2s ${spring},border-color .2s ease,box-shadow .2s ease,background .2s ease`,
};

const cardSelected: React.CSSProperties = {
  borderColor: colors.pine,
  background: colors.surface,
  boxShadow: '0 0 0 3px rgba(24,74,79,.14)',
  transform: 'translateY(-2px)',
};

const labelStyle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  lineHeight: 1.3,
};

const hintStyle: React.CSSProperties = {
  marginTop: 6,
  fontFamily: 'var(--serif)',
  fontSize: 14,
  lineHeight: 1.4,
  color: colors.muted,
};

/**
 * Grid of selectable option cards — the low-friction alternative to a select
 * menu when the answer set is short and worth reading. Single-select by
 * default (radio semantics), `multi` switches it to checkbox semantics.
 *
 * Mobile-first: one column at the smallest width, filling in wider columns
 * automatically via `auto-fit`/`minmax` rather than a media query.
 */
export function ChoiceGrid({
  options,
  value,
  multi = false,
  onChange,
  legend,
  minColumnWidth = 220,
}: ChoiceGridProps) {
  const selected = multi
    ? Array.isArray(value)
      ? value
      : []
    : typeof value === 'string'
      ? [value]
      : [];

  const toggle = (optionValue: string) => {
    if (!onChange) return;
    if (!multi) {
      onChange(optionValue);
      return;
    }
    onChange(
      selected.includes(optionValue)
        ? selected.filter((v) => v !== optionValue)
        : [...selected, optionValue],
    );
  };

  return (
    <div
      role={multi ? 'group' : 'radiogroup'}
      aria-label={legend}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit,minmax(min(100%,${minColumnWidth}px),1fr))`,
        gap: 12,
      }}
    >
      {options.map((option) => {
        const isSelected = selected.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            role={multi ? 'checkbox' : 'radio'}
            aria-checked={isSelected}
            // Name the control explicitly: the label/hint live in nested spans,
            // and the computed name came back empty in the accessibility tree.
            aria-label={option.hint ? `${option.label} — ${option.hint}` : option.label}
            onClick={() => toggle(option.value)}
            style={{ ...cardBase, ...(isSelected ? cardSelected : {}) }}
          >
            <span style={labelStyle}>{option.label}</span>
            {option.hint && <span style={{ ...hintStyle, display: 'block' }}>{option.hint}</span>}
          </button>
        );
      })}
    </div>
  );
}
