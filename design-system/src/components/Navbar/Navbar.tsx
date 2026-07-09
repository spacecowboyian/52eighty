import type { CSSProperties } from 'react';
import { colors, font, radius, spring } from '../../tokens';
import { useHover } from '../../utils/useHover';

export type NavbarTone = 'light' | 'dark';

export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  /** 'light' = cream/white header with underline-on-hover links + pine Contact pill.
   *  'dark'  = ink striped background, lime Contact pill ("Over imagery" variant). */
  tone?: NavbarTone;
  /** Nav links to render. Defaults to placeholder `#nav` anchors matching the source design. */
  links?: NavbarLink[];
  /** Destination for the Contact pill. Renders a `<button>` (no-op) when omitted. */
  contactHref?: string;
  /**
   * 'card' (default) — the floating bordered/rounded card, as shown in Storybook.
   * 'flush' — no background/border/radius of its own, for embedding in a
   * full-width sticky page header that supplies its own chrome. Light tone only.
   */
  chrome?: 'card' | 'flush';
}

const LIGHT_DEFAULT_LINKS: NavbarLink[] = [
  { label: 'About', href: '#nav' },
  { label: 'Our Work', href: '#nav' },
  { label: 'Newsletter', href: '#nav' },
];

const DARK_DEFAULT_LINKS: NavbarLink[] = [
  { label: 'About', href: '#nav' },
  { label: 'Our Work', href: '#nav' },
];

/** A nav link with the gold underline-on-hover (light tone only). */
function NavLink({ label, href, tone }: NavbarLink & { tone: NavbarTone }) {
  const { isHovered, hoverProps } = useHover();

  if (tone === 'dark') {
    return (
      <a
        href={href}
        style={{
          fontFamily: font.ui,
          fontWeight: 500,
          fontSize: 15,
          color: colors.paper,
          textDecoration: 'none',
        }}
      >
        {label}
      </a>
    );
  }

  const base: CSSProperties = {
    fontFamily: font.ui,
    fontWeight: 500,
    fontSize: 15,
    color: colors.ink,
    textDecoration: 'none',
    borderBottom: '2px solid transparent',
    paddingBottom: 3,
    transition: 'border-color .2s ease',
  };

  return (
    <a
      href={href}
      {...hoverProps}
      style={{ ...base, ...(isHovered ? { borderColor: colors.gold } : {}) }}
    >
      {label}
    </a>
  );
}

/** The pine "Contact" pill (light) — lifts on hover. Anchor when `href` is given, else a no-op button. */
function ContactPillLight({ href }: { href?: string }) {
  const { isHovered, hoverProps } = useHover();
  const base: CSSProperties = {
    fontFamily: font.ui,
    fontWeight: 600,
    fontSize: 14,
    background: colors.pine,
    color: colors.paper,
    border: 'none',
    padding: '10px 22px',
    borderRadius: radius.pill,
    cursor: 'pointer',
    transition: `transform .2s ${spring}`,
    textDecoration: 'none',
    display: 'inline-block',
  };
  const style = { ...base, ...(isHovered ? { transform: 'translateY(-2px)' } : {}) };
  return href ? (
    <a href={href} {...hoverProps} style={style}>
      Contact
    </a>
  ) : (
    <button {...hoverProps} style={style}>
      Contact
    </button>
  );
}

/** The lime "Contact" pill (dark variant). Anchor when `href` is given, else a no-op button. */
function ContactPillDark({ href }: { href?: string }) {
  const style: CSSProperties = {
    fontFamily: font.ui,
    fontWeight: 600,
    fontSize: 14,
    background: colors.lime,
    color: colors.ink,
    border: 'none',
    padding: '10px 22px',
    borderRadius: radius.pill,
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  };
  return href ? (
    <a href={href} style={style}>
      Contact
    </a>
  ) : (
    <button style={style}>Contact</button>
  );
}

/** The "52" circle badge + "52Eighty Creative" wordmark. */
function Wordmark({ tone }: { tone: NavbarTone }) {
  if (tone === 'dark') {
    // Dark variant shows the wordmark text only (no badge), per source.
    return (
      <span
        style={{
          fontFamily: font.display,
          fontWeight: 800,
          fontSize: 18,
          color: colors.paper,
          letterSpacing: '-.01em',
        }}
      >
        52Eighty Creative
      </span>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: '50%',
          background: colors.pine,
          color: colors.lime,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: font.display,
          fontWeight: 800,
          fontSize: 13,
        }}
      >
        52
      </div>
      <span
        style={{
          fontFamily: font.display,
          fontWeight: 800,
          fontSize: 18,
          letterSpacing: '-.01em',
        }}
      >
        52Eighty Creative
      </span>
    </div>
  );
}

/** The 52Eighty site header. */
export function Navbar({
  tone = 'light',
  links,
  contactHref,
  chrome = 'card',
}: NavbarProps) {
  const resolvedLinks =
    links ?? (tone === 'dark' ? DARK_DEFAULT_LINKS : LIGHT_DEFAULT_LINKS);

  const outer: CSSProperties =
    tone === 'dark'
      ? {
          borderRadius: 16,
          overflow: 'hidden',
          background: colors.ink,
          backgroundImage:
            'repeating-linear-gradient(45deg,#1c2a27 0 12px,#1a2724 12px 24px)',
        }
      : chrome === 'flush'
        ? { background: 'transparent' }
        : {
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: 16,
            overflow: 'hidden',
          };

  return (
    <div style={outer}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 28px',
        }}
      >
        <Wordmark tone={tone} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 26 }}>
          {resolvedLinks.map((link) => (
            <NavLink key={link.label} {...link} tone={tone} />
          ))}
          {tone === 'dark' ? (
            <ContactPillDark href={contactHref} />
          ) : (
            <ContactPillLight href={contactHref} />
          )}
        </div>
      </div>
    </div>
  );
}
