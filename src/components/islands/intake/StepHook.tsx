import { useEffect, useRef } from 'react';
import { Button, ChoiceGrid, StepProgress, colors } from '5280-design-system';
import { PathShowcase } from './PathShowcase';
import { StepShell } from './StepShell';
import { FlowFooter } from './FlowFooter';
import { STEP_LABELS, driverOptions } from './flow';
import { SCREEN_ANCHORS, setHash } from './anchors';
import { scrollToElement, usePrefersReducedMotion } from './useParallax';
import type { Driver, IntakeAnswers, Path } from './types';

/**
 * Step 1 — "The Hook". Opens on a single-message screen whose only job is the
 * pitch: *why* this is worth doing at all (the anti-contact-form premise from
 * `website-intake-flow.md` — "light up their brain, show value before asking").
 * The one action is "Let's do this", which carries the visitor into the real
 * first question — "What's driving this?" — and from there down into the
 * discipline showcase, which shows the work instead of describing it. Every
 * screen is its own full-height moment and its own URL anchor (see `anchors.ts`).
 */
export interface StepHookProps {
  answers: IntakeAnswers;
  onChange: (patch: Partial<IntakeAnswers>) => void;
  onNext: () => void;
  /** Switch to the plain "doers" contact form. */
  onDirect: () => void;
}

/** Base path so the public hero asset resolves under the Pages subpath too. */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const introEyebrow: React.CSSProperties = {
  margin: 0,
  fontFamily: 'var(--ui)',
  fontSize: 12,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: colors.red,
};

/**
 * The opening headline is deliberately about half the size of the old hero
 * title — big enough to own the screen, small enough to sit above a couple of
 * sentences of lede rather than standing alone. Light, since it sits over the
 * darkened hero photo (a rider on 5280's River Bluff Trails Park work).
 */
const heroTitle: React.CSSProperties = {
  margin: '12px 0 0',
  fontFamily: 'var(--display)',
  fontSize: 'clamp(1.7rem, 1.2rem + 1.8vw, 2.6rem)',
  lineHeight: 1.08,
  color: '#FCFAF4',
  maxWidth: '18ch',
  textShadow: '0 1px 24px rgba(0,0,0,.38)',
};

const heroLede: React.CSSProperties = {
  margin: '18px 0 0',
  fontFamily: 'var(--serif)',
  fontSize: 'clamp(1.05rem, .98rem + .5vw, 1.35rem)',
  lineHeight: 1.55,
  color: 'rgba(255,255,255,.92)',
  maxWidth: '38rem',
  textShadow: '0 1px 18px rgba(0,0,0,.34)',
};

/** Full-bleed hero photo + legibility scrim, passed to the opening StepShell. */
const heroScrim: React.CSSProperties = {
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(180deg, rgba(16,33,31,.34) 0%, rgba(16,33,31,.62) 100%),' +
    'linear-gradient(90deg, rgba(16,33,31,.66) 0%, rgba(16,33,31,.20) 58%, rgba(16,33,31,0) 100%)',
};

const heroBackground = (
  <>
    <img
      src={`${base}/intake/river-bluff-hero-1280.jpg`}
      srcSet={
        `${base}/intake/river-bluff-hero-1280.jpg 1280w, ` +
        `${base}/intake/river-bluff-hero-2560.jpg 2560w`
      }
      sizes="100vw"
      alt=""
      loading="eager"
      decoding="async"
    />
    <div style={heroScrim} />
  </>
);

const questionStyle: React.CSSProperties = {
  margin: '0 0 16px',
  fontFamily: 'var(--display)',
  fontSize: 'clamp(1.6rem, 1.2rem + 1.4vw, 2.2rem)',
  lineHeight: 1.12,
  color: colors.ink,
};

export function StepHook({ answers, onChange, onNext, onDirect }: StepHookProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const drivingRef = useRef<HTMLElement | null>(null);
  const showcaseRef = useRef<HTMLElement | null>(null);
  const continueRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  // Deep-link: if the visitor arrived on a specific anchor, take them there
  // rather than always dropping them on the opening pitch.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) requestAnimationFrame(() => scrollToElement(target, true));
  }, []);

  const begin = () => {
    setHash(SCREEN_ANCHORS.driving);
    requestAnimationFrame(() => scrollToElement(drivingRef.current, reduced));
  };

  const chooseDriver = (driver: Driver) => {
    onChange({ driver });
    // Carry them into the showcase rather than making them go find it. The
    // showcase owns the discipline anchors from here (see PathShowcase).
    requestAnimationFrame(() => scrollToElement(showcaseRef.current, reduced));
  };

  const choosePath = (path: Path) => {
    onChange({ path });
    setHash(SCREEN_ANCHORS.ready);
    requestAnimationFrame(() => scrollToElement(continueRef.current, reduced));
  };

  return (
    <>
      <StepShell
        ref={heroRef}
        first
        onDark
        background={heroBackground}
        id={SCREEN_ANCHORS.start}
        label="Start your project"
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={introEyebrow}>Start your project</p>
          <h1 style={heroTitle}>You&rsquo;ve got something you want to make.</h1>
          <p style={heroLede}>
            This isn&rsquo;t a contact form &mdash; it&rsquo;s the first half of a discovery call.
            Answer a few honest questions and you&rsquo;ll leave seeing your own project more clearly
            than when you showed up. No name, no email, until you actually want to give one.
          </p>

          <div style={{ marginTop: 28 }}>
            <Button variant="accent" size="lg" onClick={begin}>
              Let&rsquo;s do this &rarr;
            </Button>
          </div>

          <FlowFooter onDirect={onDirect} onDark />
        </div>
      </StepShell>

      <StepShell ref={drivingRef} id={SCREEN_ANCHORS.driving} label="What's driving this?">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <StepProgress current={1} total={3} labels={STEP_LABELS} />

          <div>
            <h2 style={questionStyle}>What&rsquo;s driving this?</h2>
            <ChoiceGrid
              legend="What's driving this?"
              options={driverOptions}
              value={answers.driver}
              onChange={chooseDriver}
            />
          </div>
        </div>
      </StepShell>

      <PathShowcase
        ref={showcaseRef}
        value={answers.path}
        onSelect={choosePath}
        onBackToTop={() => {
          setHash(SCREEN_ANCHORS.driving);
          scrollToElement(drivingRef.current, reduced);
        }}
      />

      <StepShell ref={continueRef} tone="surface" id={SCREEN_ANCHORS.ready} label="Ready to continue">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {answers.path ? (
            <>
              <h2 style={questionStyle}>Good pick. Let&rsquo;s take a look at you.</h2>
              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(1rem, .95rem + .3vw, 1.2rem)',
                  lineHeight: 1.55,
                  color: colors.ink,
                  maxWidth: '34rem',
                }}
              >
                Next we&rsquo;ll read your site back to you &mdash; before you tell us anything else.
              </p>
              <div>
                <Button variant="accent" size="lg" onClick={onNext}>
                  Show me what you see
                </Button>
              </div>
            </>
          ) : (
            <p style={{ margin: 0, fontFamily: 'var(--ui)', fontSize: 14, color: colors.muted }}>
              Pick a lane above when one feels right — or start from “not sure yet”.
            </p>
          )}
        </div>
      </StepShell>
    </>
  );
}
