import { useRef } from 'react';
import { Button, ChoiceGrid, StepProgress, colors } from '5280-design-system';
import { TeamGuide } from './TeamGuide';
import { PathShowcase } from './PathShowcase';
import { StepShell } from './StepShell';
import { FlowFooter } from './FlowFooter';
import { STEP_LABELS, driverOptions } from './flow';
import { scrollToElement, usePrefersReducedMotion } from './useParallax';
import type { Driver, IntakeAnswers, Path } from './types';

/**
 * Step 1 — "The Hook". Two questions, both about the why rather than the
 * deliverable, each its own full-height screen: answering the first carries the
 * visitor down into the discipline showcase, which shows the work instead of
 * describing it. The answers set the branch used by steps 2-3.
 */
export interface StepHookProps {
  answers: IntakeAnswers;
  onChange: (patch: Partial<IntakeAnswers>) => void;
  onNext: () => void;
  /** Switch to the plain "doers" contact form. */
  onDirect: () => void;
}

const introEyebrow: React.CSSProperties = {
  margin: 0,
  fontFamily: 'var(--ui)',
  fontSize: 12,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  color: colors.red,
};

const introTitle: React.CSSProperties = {
  margin: '10px 0 0',
  fontFamily: 'var(--display)',
  fontSize: 'clamp(2.2rem, 1.4rem + 2.6vw, 3.4rem)',
  lineHeight: 1.04,
  color: colors.ink,
};

const questionStyle: React.CSSProperties = {
  margin: '0 0 16px',
  fontFamily: 'var(--display)',
  fontSize: 'clamp(1.6rem, 1.2rem + 1.4vw, 2.2rem)',
  lineHeight: 1.12,
  color: colors.ink,
};

export function StepHook({ answers, onChange, onNext, onDirect }: StepHookProps) {
  const topRef = useRef<HTMLElement | null>(null);
  const showcaseRef = useRef<HTMLElement | null>(null);
  const continueRef = useRef<HTMLElement | null>(null);
  const reduced = usePrefersReducedMotion();

  const chooseDriver = (driver: Driver) => {
    onChange({ driver });
    // Carry them into the showcase rather than making them go find it.
    // Deferred a frame so layout has settled before the scroll starts.
    requestAnimationFrame(() => scrollToElement(showcaseRef.current, reduced));
  };

  const choosePath = (path: Path) => {
    onChange({ path });
    requestAnimationFrame(() => scrollToElement(continueRef.current, reduced));
  };

  return (
    <>
      <StepShell ref={topRef} first label="What's driving this?">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <p style={introEyebrow}>Start your project</p>
            <h1 style={introTitle}>Tell us your vision.</h1>
          </div>

          <StepProgress current={1} total={3} labels={STEP_LABELS} />

          <TeamGuide
            name="Miles Ramsay"
            role="Founder"
            line="No form yet. Just tell us what's going on — the rest follows from that."
          />

          <div>
            <h2 style={questionStyle}>What's driving this?</h2>
            <ChoiceGrid
              legend="What's driving this?"
              options={driverOptions}
              value={answers.driver}
              onChange={chooseDriver}
            />
          </div>

          <FlowFooter onDirect={onDirect} />
        </div>
      </StepShell>

      <PathShowcase
        ref={showcaseRef}
        value={answers.path}
        onSelect={choosePath}
        onBackToTop={() => scrollToElement(topRef.current, reduced)}
      />

      <StepShell ref={continueRef} tone="surface" label="Ready to continue">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {answers.path ? (
            <>
              <h2 style={questionStyle}>Good pick. Let's take a look at you.</h2>
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
                Next we'll read your site back to you — before you tell us anything else.
              </p>
              <div>
                <Button variant="primary" size="lg" onClick={onNext}>
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
