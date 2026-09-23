import React from 'react';
import { colors, font, radius, ease } from '../../tokens';
import { useHover } from '../../utils/useHover';

export type ButtonVariant = 'primary' | 'accent' | 'signal' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style. Pine `primary`; lime `accent` (the exclamation mark — the
   * main CTA, 8.95:1); red `signal` with ink text for the rare red button;
   * `outline` / `ghost` take their colour from the band they sit on.
   */
  variant?: ButtonVariant;
  /** Padding / font-size scale. */
  size?: ButtonSize;
  /** Render the small lime-ringed circle icon + gap before the label. */
  icon?: boolean;
  children?: React.ReactNode;
  /** Render as a same-styled `<a>` instead of a `<button>` — for real navigation. */
  href?: string;
}

/** Padding + font-size per size, ported from the source markup. */
const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { fontSize: 13, padding: '9px 18px' },
  md: { fontSize: 15, padding: '13px 26px' },
  lg: { fontSize: 17, padding: '16px 34px' },
};

/** When an icon is present the right/left padding tightens slightly. */
const iconPadding: Record<ButtonSize, string> = {
  sm: '9px 16px 9px 14px',
  md: '13px 24px 13px 22px',
  lg: '16px 32px 16px 30px',
};

const variantBase: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: colors.pine,
    color: colors.paper,
    border: 'none',
  },
  accent: {
    background: colors.lime,
    color: colors.pine,
    border: 'none',
  },
  signal: {
    background: colors.red,
    color: colors.ink,
    border: 'none',
  },
  outline: {
    background: 'transparent',
    color: 'var(--band-fg, #184A4F)',
    border: '2px solid var(--band-fg, #184A4F)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--band-fg, #184A4F)',
    border: 'none',
  },
};

const variantHover: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    transform: 'translateY(-3px)',
    boxShadow: '0 10px 22px rgba(24,74,79,.32)',
    background: '#13403F',
  },
  accent: {
    background: '#E8F77A',
  },
  signal: {
    background: '#F02F2F',
  },
  outline: {
    background: 'var(--band-fg, #184A4F)',
    color: 'var(--band-bg, #FBF9F5)',
  },
  ghost: {
    background: 'color-mix(in srgb, var(--band-fg, #184A4F) 10%, transparent)',
  },
};

const variantTransition: Record<ButtonVariant, string> = {
  primary: `transform .22s ${ease.out},box-shadow .22s ease,background .2s ease`,
  accent: `background .2s ${ease.out}`,
  signal: `background .2s ${ease.out}`,
  outline: `background .2s ${ease.out},color .2s ${ease.out}`,
  ghost: 'background .2s ease',
};

const disabledStyle: React.CSSProperties = {
  background: '#D9D3C8',
  color: '#9A9488',
  border: 'none',
  cursor: 'not-allowed',
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon = false,
  disabled = false,
  href,
  children,
  ...rest
}: ButtonProps) {
  const { isHovered, hoverProps } = useHover();

  const base: React.CSSProperties = {
    fontFamily: font.ui,
    fontWeight: 600,
    fontSize: sizeStyles[size].fontSize,
    borderRadius: radius.pill,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
    padding: icon ? iconPadding[size] : sizeStyles[size].padding,
    ...variantBase[variant],
    transition: variantTransition[variant],
    ...(icon
      ? { display: 'inline-flex', alignItems: 'center', gap: 9 }
      : {}),
  };

  const style: React.CSSProperties = disabled
    ? { ...base, ...disabledStyle }
    : { ...base, ...(isHovered ? variantHover[variant] : {}) };

  const icon_ = icon && (
    <span
      style={{
        display: 'inline-block',
        width: 16,
        height: 16,
        borderRadius: '50%',
        border: `2px solid ${colors.lime}`,
      }}
    />
  );

  if (href && !disabled) {
    return (
      <a href={href} {...hoverProps} style={style}>
        {icon_}
        {children}
      </a>
    );
  }

  return (
    <button
      {...rest}
      {...(disabled ? {} : hoverProps)}
      disabled={disabled}
      style={style}
    >
      {icon_}
      {children}
    </button>
  );
}
