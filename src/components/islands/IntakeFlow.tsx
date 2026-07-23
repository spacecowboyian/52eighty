import { useState } from 'react';
import { StepHook } from './intake/StepHook';
import { StepMirror } from './intake/StepMirror';
import { StepClose } from './intake/StepClose';
import { Recap } from './intake/Recap';
import { DirectForm } from './intake/DirectForm';
import { submitIntake } from './intake/submit';
import { emptyAnswers, type IntakeAnswers, type Mode } from './intake/types';

/**
 * The branching 3-step intake flow ("anti-contact-form").
 * Design source: Brains projects/5280-creative/website-intake-flow.md.
 * React island so the interactive steps hydrate independently of the
 * statically-generated marketing pages around it.
 *
 * Every step — and every discipline option — presents as its own full-height
 * screen (see `intake/StepShell.tsx`), so the flow reads as a sequence of
 * moments rather than one long form. Progress and the escape hatches live
 * inside the individual screens rather than as outer chrome, so nothing eats
 * into a step's full height.
 *
 * Two doors: `guided` for the dreamers, `direct` for the doers. Prototype
 * scope — the step-2 site crawl and brief delivery sit behind swappable
 * interfaces (`intake/mirror.ts`, `intake/submit.ts`) and say so on screen
 * while unconfigured.
 */
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
    // Each step is its own screen: start the new one at the top.
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

  if (step === 2) {
    return <StepMirror answers={answers} onChange={patch} onNext={() => go(3)} onBack={() => go(1)} />;
  }

  if (step === 3) {
    return (
      <StepClose
        answers={answers}
        onChange={patch}
        onDetailChange={patchDetail}
        onSubmit={finish}
        onBack={() => go(2)}
      />
    );
  }

  return (
    <StepHook
      answers={answers}
      onChange={patch}
      onNext={() => go(2)}
      onDirect={() => setMode('direct')}
    />
  );
}
