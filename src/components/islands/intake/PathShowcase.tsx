import { forwardRef, useEffect, useRef, useState } from 'react';
import { Button, colors, radius } from '5280-design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { pathShowcase } from './flow';
import { useHeaderHeightVar, usePrefersReducedMotion, useScrollProgress } from './useParallax';
import type { Path } from './types';

/**
 * The "what's on your mind to make?" question, as a scrollable showcase
 * instead of a row of cards or a tab panel.
 *
 * Per the 2026-07-23 direction: the choices should *show the work*. Every
 * discipline gets its own full-height panel, stacked so you scroll past one
 * into the next, with a nav that tracks where you are — a floating rail beside
 * the panels on wide screens, a chip row pinned under the site header on
 * narrow ones. Layout lives in `global.css` (`.showcase*`) since it needs real
 * media queries.
 *
 * Browsing selects nothing. Only the button inside a panel commits.
 *
 * The reels don't exist yet (they depend on the media-index reel shortlist and
 * Miles's asset picks), so each panel renders a placeholder at the real 16:9.
 */
export interface PathShowcaseProps {
  value?: Path;
  onSelect: (path: Path) => void;
  /** Scrolls back up to the opening question. */
  onBackToTop: () => void;
}

const fullBleed: React.CSSProperties = {
  marginInline: 'calc(50% - 50vw)',
  paddingInline: 'clamp(1.5rem, 5vw, 4rem)',
  paddingBottom: 'clamp(2rem, 5vw, 4rem)',
  background: colors.cream,
  borderTop: `1px solid ${colors.border}`,
  scrollMarginTop: '4.5rem',
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: 'var(--display)',
  fontSize: 'clamp(2.1rem, 1.2rem + 3vw, 3.6rem)',
  lineHeight: 1.03,
  color: colors.ink,
};

const bodyStyle: React.CSSProperties = {
  margin: '1.1rem 0 0',
  fontFamily: 'var(--serif)',
  fontSize: 'clamp(1rem, .95rem + .35vw, 1.25rem)',
  lineHeight: 1.55,
  color: colors.ink,
  maxWidth: '34rem',
};

const proofStyle: React.CSSProperties = {
  margin: '1.25rem 0 0',
  fontFamily: 'var(--ui)',
  fontSize: 13,
  letterSpacing: '.06em',
  textTransform: 'uppercase',
  color: colors.muted,
};

/** 16:9 stand-in for the discipline reel that isn't cut yet. */
function ReelPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        aspectRatio: '16 / 9',
        width: '100%',
        borderRadius: radius.lg,
        background: colors.pine,
        color: colors.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        textAlign: 'center',
        padding: 24,
        boxShadow: '0 18px 40px rgba(22,33,31,.16)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 64,
          height: 64,
          borderRadius: radius.pill,
          border: `2px solid ${colors.lime}`,
          color: colors.lime,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 20,
        }}
      >
        <FontAwesomeIcon icon={faPlay} />
      </span>
      <span
        style={{
          fontFamily: 'var(--ui)',
          fontSize: 13,
          letterSpacing: '.1em',
          textTransform: 'uppercase',
        }}
      >
        {label} reel
      </span>
      <span style={{ fontFamily: 'var(--serif)', fontSize: 15, opacity: 0.75, maxWidth: '28rem' }}>
        Placeholder — the cut for this discipline hasn't been built yet.
      </span>
    </div>
  );
}

/**
 * One discipline, filling the window. The copy and the reel drift at different
 * rates as the panel crosses the viewport — the parallax. `useScrollProgress`
 * parks at 0.5 (zero offset) under `prefers-reduced-motion`, so this is a
 * no-op for those visitors.
 */
function Panel({
  entry,
  isPicked,
  onSelect,
  registerRef,
}: {
  entry: (typeof pathShowcase)[number];
  isPicked: boolean;
  onSelect: (path: Path) => void;
  registerRef: (path: Path, node: HTMLElement | null) => void;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const progress = useScrollProgress(ref);
  const drift = (progress - 0.5) * 2; // -1 … 1

  return (
    <article
      className="showcase__panel"
      data-path={entry.value}
      ref={(node) => {
        ref.current = node;
        registerRef(entry.value, node);
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,24rem),1fr))',
          gap: 'clamp(1.5rem, 3vw, 3rem)',
          alignItems: 'center',
        }}
      >
        <div style={{ transform: `translate3d(0, ${(-drift * 16).toFixed(2)}px, 0)` }}>
          <h2 style={titleStyle}>{entry.title}</h2>
          <p style={bodyStyle}>{entry.description}</p>
          <p style={proofStyle}>{entry.proof}</p>
          <div style={{ marginTop: '1.75rem' }}>
            <Button
              variant={isPicked ? 'outline' : 'primary'}
              size="lg"
              onClick={() => onSelect(entry.value)}
            >
              {isPicked ? 'Picked — keep going' : entry.cta}
            </Button>
          </div>
        </div>
        <div style={{ transform: `translate3d(0, ${(drift * 38).toFixed(2)}px, 0)` }}>
          <ReelPlaceholder label={entry.tabLabel} />
        </div>
      </div>
    </article>
  );
}

/** Rail/chip entry. Filled when it's the panel you're looking at. */
function NavButton({
  label,
  isActive,
  isPicked,
  onClick,
}: {
  label: string;
  isActive: boolean;
  isPicked: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-current={isActive ? 'true' : undefined}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        width: '100%',
        whiteSpace: 'nowrap',
        textAlign: 'left',
        cursor: 'pointer',
        fontFamily: 'var(--ui)',
        fontSize: 14,
        fontWeight: 600,
        padding: '10px 16px',
        borderRadius: radius.pill,
        border: `1.5px solid ${isActive ? colors.pine : 'transparent'}`,
        background: isActive ? colors.pine : 'transparent',
        color: isActive ? colors.paper : colors.muted,
        transition: 'background .2s ease,color .2s ease,border-color .2s ease',
      }}
    >
      {isPicked && (
        <span aria-hidden="true" style={{ color: isActive ? colors.lime : colors.jade, fontSize: 11 }}>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      )}
      {label}
    </button>
  );
}

export const PathShowcase = forwardRef<HTMLElement, PathShowcaseProps>(function PathShowcase(
  { value, onSelect, onBackToTop },
  ref,
) {
  const panelRefs = useRef(new Map<Path, HTMLElement>());
  const navRef = useRef<HTMLUListElement | null>(null);
  const [activeId, setActiveId] = useState<Path>(pathShowcase[0].value);
  const reduced = usePrefersReducedMotion();
  useHeaderHeightVar();

  const registerPanel = (path: Path, node: HTMLElement | null) => {
    if (node) panelRefs.current.set(path, node);
    else panelRefs.current.delete(path);
  };

  // Track which panel is centered in the viewport so the nav reflects where
  // the visitor actually is, whether they scrolled or jumped.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.getAttribute('data-path') as Path | null;
        if (id) setActiveId(id);
      },
      // A band across the middle of the screen: the panel occupying it is the
      // one being read.
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    );

    panelRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  // On narrow screens the nav is a scrolling chip row, so the active chip can
  // sit off-screen. Keep it in view — horizontally only, never scrolling the
  // page itself.
  useEffect(() => {
    const nav = navRef.current;
    const chip = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !chip || nav.scrollWidth <= nav.clientWidth) return;
    const target = chip.offsetLeft - (nav.clientWidth - chip.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, target), behavior: reduced ? 'auto' : 'smooth' });
  }, [activeId, reduced]);

  const jumpTo = (path: Path) => {
    panelRefs.current
      .get(path)
      ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section ref={ref} style={fullBleed} aria-label="What's on your mind to make?">
      <div className="showcase">
        <ul className="showcase__nav" ref={navRef}>
            <li className="showcase__nav-item" style={{ display: 'flex', alignItems: 'center' }}>
              <button
                type="button"
                onClick={onBackToTop}
                aria-label="Back up to the opening question"
                title="Back up to the opening question"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  width: 38,
                  height: 38,
                  borderRadius: radius.pill,
                  border: `1.5px solid ${colors.border}`,
                  background: 'transparent',
                  color: colors.pine,
                  cursor: 'pointer',
                  fontSize: 12,
                }}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </button>
            </li>
            {pathShowcase.map((entry) => (
            <li key={entry.value} className="showcase__nav-item">
              <NavButton
                label={entry.tabLabel}
                isActive={activeId === entry.value}
                isPicked={value === entry.value}
                onClick={() => jumpTo(entry.value)}
              />
            </li>
          ))}
        </ul>

        <div className="showcase__panels">
          {pathShowcase.map((entry) => (
            <Panel
              key={entry.value}
              entry={entry}
              isPicked={value === entry.value}
              onSelect={onSelect}
              registerRef={registerPanel}
            />
          ))}
        </div>
      </div>
    </section>
  );
});
