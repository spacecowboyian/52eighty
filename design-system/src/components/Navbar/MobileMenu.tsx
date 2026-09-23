import { useEffect, useRef } from 'react';
import type { CSSProperties } from 'react';
import { colors, font, radius, shadow } from '../../tokens';

export interface MobileMenuLink {
  label: string;
  href: string;
}

export interface MobileMenuProps {
  /** Whether the drawer is showing. */
  open: boolean;
  /** Called when the visitor dismisses the drawer (close button, backdrop, or Escape). */
  onClose: () => void;
  /** Navigation links to list in the drawer. */
  links: MobileMenuLink[];
  /** Destination for the Contact call to action. Omitted renders no CTA. */
  contactHref?: string;
  /** Ties the drawer to the toggle that controls it (`aria-controls`). */
  id?: string;
}

const TRANSITION_MS = 320;

/**
 * The off-canvas site menu for narrow viewports — a real full-height drawer,
 * not a fixed-size mockup. `Navbar` owns the open state and renders the toggle;
 * this component is only the panel.
 *
 * Stays mounted so it can animate both ways. When closed it's `visibility:
 * hidden`, which takes its links out of the tab order — `display: none` would
 * do that too but kills the transition, and leaving it merely translated
 * offscreen leaves focusable links sitting outside the viewport.
 */
export function MobileMenu({ open, onClose, links, contactHref, id }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Escape closes, from anywhere.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  // Hold focus inside the drawer while it's open: move focus in on open, and
  // wrap Tab at both ends. Without this, tabbing walks into the page behind it.
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button');
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  // Don't let the page scroll behind the drawer.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const backdrop: CSSProperties = {
    position: 'fixed',
    inset: 0,
    background: 'rgba(22,33,31,.5)',
    opacity: open ? 1 : 0,
    visibility: open ? 'visible' : 'hidden',
    transition: open
      ? `opacity ${TRANSITION_MS}ms ease, visibility 0s`
      : `opacity ${TRANSITION_MS}ms ease, visibility 0s linear ${TRANSITION_MS}ms`,
    zIndex: 40,
  };

  const panel: CSSProperties = {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: 'min(80vw, 320px)',
    background: colors.pine,
    boxShadow: shadow.lg,
    transform: open ? 'translateX(0)' : 'translateX(100%)',
    visibility: open ? 'visible' : 'hidden',
    transition: open
      ? `transform ${TRANSITION_MS}ms cubic-bezier(.4,0,.2,1), visibility 0s`
      : `transform ${TRANSITION_MS}ms cubic-bezier(.4,0,.2,1), visibility 0s linear ${TRANSITION_MS}ms`,
    zIndex: 41,
    display: 'flex',
    flexDirection: 'column',
    padding: '18px 24px 32px',
    overflowY: 'auto',
  };

  return (
    <>
      <div
        style={backdrop}
        onClick={onClose}
        aria-hidden="true"
        className="sc-mobile-menu-backdrop"
      />
      <div
        ref={panelRef}
        id={id}
        style={panel}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        className="sc-mobile-menu"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close menu"
          style={{
            alignSelf: 'flex-end',
            width: 40,
            height: 40,
            borderRadius: radius.sm,
            background: 'none',
            border: 'none',
            color: colors.paper,
            fontSize: 26,
            lineHeight: 1,
            cursor: 'pointer',
            marginBottom: 16,
          }}
        >
          ×
        </button>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: font.display,
                fontWeight: 400,
                fontSize: 24,
                color: colors.paper,
                textDecoration: 'none',
                padding: '12px 0',
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {contactHref ? (
          <a
            href={contactHref}
            style={{
              marginTop: 24,
              fontFamily: font.ui,
              fontWeight: 600,
              fontSize: 15,
              background: colors.lime,
              color: colors.ink,
              padding: '14px 22px',
              borderRadius: radius.pill,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Contact
          </a>
        ) : null}
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .sc-mobile-menu,
          .sc-mobile-menu-backdrop {
            transition-duration: 0s !important;
          }
        }
      `}</style>
    </>
  );
}
