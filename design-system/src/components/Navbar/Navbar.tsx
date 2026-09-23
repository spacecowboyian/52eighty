import { useEffect, useId, useState } from 'react';
import type { CSSProperties } from 'react';
import { colors, font, radius, ease } from '../../tokens';
import { useHover } from '../../utils/useHover';
import { MobileMenu } from './MobileMenu';

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
    transition: `transform .2s ${ease.out}`,
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
          fontWeight: 400,
          fontSize: 18,
          color: colors.paper,
          letterSpacing: '.02em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
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
          fontWeight: 400,
          fontSize: 13,
        }}
      >
        52
      </div>
      <span
        style={{
          fontFamily: font.display,
          fontWeight: 400,
          fontSize: 18,
          letterSpacing: '.02em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        52Eighty Creative
      </span>
    </div>
  );
}

/** The hamburger that opens the drawer. Only rendered below the 640px breakpoint. */
function MenuToggle({
  open,
  onClick,
  controls,
  tone,
}: {
  open: boolean;
  onClick: () => void;
  controls: string;
  tone: NavbarTone;
}) {
  const bar: CSSProperties = {
    display: 'block',
    width: 20,
    height: 2,
    borderRadius: 2,
    background: tone === 'dark' ? colors.paper : colors.ink,
    transition: 'transform .2s ease, opacity .2s ease',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      aria-expanded={open}
      aria-controls={controls}
      className="sc-navbar-toggle"
      style={{
        width: 44,
        height: 44,
        borderRadius: radius.sm,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        // Center the bars and space them without a gap that shifts on animate.
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        padding: 0,
      }}
    >
      <span style={{ ...bar, transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
      <span style={{ ...bar, opacity: open ? 0 : 1 }} />
      <span style={{ ...bar, transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
    </button>
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  // Widening past the breakpoint hides the toggle, so close the drawer with it
  // — otherwise it hangs over the desktop header with nothing that opened it.
  useEffect(() => {
    const query = window.matchMedia('(min-width: 640px)');
    const sync = () => {
      if (query.matches) setMenuOpen(false);
    };
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

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
          <div className="sc-navbar-links">
            {resolvedLinks.map((link) => (
              <NavLink key={link.label} {...link} tone={tone} />
            ))}
          </div>
          <div className="sc-navbar-cta">
            {tone === 'dark' ? (
              <ContactPillDark href={contactHref} />
            ) : (
              <ContactPillLight href={contactHref} />
            )}
          </div>
          <MenuToggle
            open={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            controls={menuId}
            tone={tone}
          />
        </div>
      </div>

      <MobileMenu
        id={menuId}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={resolvedLinks}
        contactHref={contactHref}
      />
      {/*
        Mobile-first: below 640px the header is wordmark + hamburger, and the
        links and Contact CTA both live in the drawer — at 375px the wordmark
        (~205px) plus the Contact pill (~110px) plus a 44px toggle already
        overflows once padding is counted, so the pill can't stay out here.
        Base state is the narrow one; min-width queries layer the desktop row on.
      */}
      <style>{`
        .sc-navbar-links {
          display: none;
          align-items: center;
          gap: 26px;
        }
        .sc-navbar-cta {
          display: none;
        }
        .sc-navbar-toggle {
          display: flex;
        }
        @media (min-width: 640px) {
          .sc-navbar-links {
            display: flex;
          }
          .sc-navbar-cta {
            display: block;
          }
          .sc-navbar-toggle {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
