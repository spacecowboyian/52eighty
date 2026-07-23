import { useState } from 'react';
import { StepProgress, colors } from '5280-design-system';
import { StepHook } from './intake/StepHook';
import { StepMirror } from './intake/StepMirror';
import { StepClose } from './intake/StepClose';
import { Recap } from './intake/Recap';
import { DirectForm } from './intake/DirectForm';
import { STEP_LABELS } from './intake/flow';
import { submitIntake } from './intake/submit';
import { emptyAnswers, type IntakeAnswers, type Mode } from './intake/types';

/**
 * The branching 3-step intake flow ("anti-contact-form").
 * Design source: Brains projects/5280-creative/website-intake-flow.md.
 * React island so the interactive steps hydrate independently of the
 * statically-generated marketing pages around it.
 *
 * Two doors: `guided` for the dreamers, `direct` for the doers, plus an
 * escape hatch back to the work on every screen.
 *
 * Prototype scope — the two server-dependent pieces (the step-2 site crawl and
 * brief delivery) sit behind swappable interfaces in `intake/mirror.ts` and
 * `intake/submit.ts`, and say so on screen while unconfigured.
 */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export default function IntakeFlow() {
  const [mode, setMode] = useState<Mode>('guided');
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<IntakeAnswers>(emptyAnswers);
  const [done, setDone] = useState<{ delivered: boolean } | null>(null);

  const patch = (next: Partial<IntakeAnswers>) => setAnswers((prev) => ({ ...prev, ...next }));
  const patchDetail = (id: string, value: string) =>
    setAnswers((prev) => ({ ...prev, detail: { ...prev.detail, [id]: value } }));

  const go = (next: number) => {
    setStep(next);
    // Steps 2 and 3 are long: put the visitor at the top of the new question set.
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  async function finish() {
    setDone(await submitIntake(answers));
  }

  function restart() {
    setAnswers(emptyAnswers);
    setDone(null);
    setStep(1);
    setMode('guided');
  }

  if (done) {
    return <Recap answers={answers} delivered={done.delivered} onRestart={restart} />;
  }

  if (mode === 'direct') {
    return (
      <DirectForm
        answers={answers}
        onChange={patch}
        onSubmit={finish}
        onSwitch={() => setMode('guided')}
      />
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
      <StepProgress current={step} total={3} labels={STEP_LABELS} />

      {step === 1 && <StepHook answers={answers} onChange={patch} onNext={() => go(2)} />}
      {step === 2 && (
        <StepMirror answers={answers} onChange={patch} onNext={() => go(3)} onBack={() => go(1)} />
      )}
      {step === 3 && (
        <StepClose
          answers={answers}
          onChange={patch}
          onDetailChange={patchDetail}
          onSubmit={finish}
          onBack={() => go(2)}
        />
      )}

      {/* Escape hatches: a plain form for the doers, and a way back to the
          work for anyone who loses interest mid-flow. */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          paddingTop: 18,
          borderTop: `1px solid ${colors.border}`,
          fontFamily: 'var(--ui)',
          fontSize: 13,
        }}
      >
        <button
          type="button"
          onClick={() => setMode('direct')}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: colors.pine,
            fontFamily: 'inherit',
            fontSize: 'inherit',
            textDecoration: 'underline',
          }}
        >
          Rather just send a message?
        </button>
        <a href={`${base}/work`} style={{ color: colors.muted }}>
          Or go look at the work →
        </a>
      </div>
    </div>
  );
}
