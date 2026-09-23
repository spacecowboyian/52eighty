import React from 'react';
import { colors, font } from '../../tokens';
import { useHover } from '../../utils/useHover';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Destination URL. */
  href: string;
  children?: React.ReactNode;
}

/** Underlined text link: jade → deep red on hover (red as small text needs the 4.85:1 shade). */
export function Link({ href, children, style, ...rest }: LinkProps) {
  const { isHovered, hoverProps } = useHover();

  const base: React.CSSProperties = {
    fontFamily: font.ui,
    fontWeight: 600,
    fontSize: 15,
    color: colors.jade,
    textDecoration: 'none',
    borderBottom: `2px solid ${colors.jade}`,
    paddingBottom: 2,
    transition: 'color .2s ease,border-color .2s ease',
  };

  const hover: React.CSSProperties = {
    color: colors.redDeep,
    borderColor: colors.redDeep,
  };

  return (
    <a
      {...rest}
      {...hoverProps}
      href={href}
      style={{ ...base, ...(isHovered ? hover : {}), ...style }}
    >
      {children}
    </a>
  );
}
