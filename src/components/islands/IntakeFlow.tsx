import { useState } from 'react';

/**
 * Placeholder for the branching 3-step intake flow ("anti-contact-form").
 * Design source: Brains projects/5280-creative/website-intake-flow.md.
 * React island so the interactive steps hydrate independently of the
 * statically-generated marketing pages around it.
 */
export default function IntakeFlow() {
  const [step, setStep] = useState(1);

  return (
    <div>
      <p>Step {step} of 3</p>
      {step < 3 && <button onClick={() => setStep(step + 1)}>Next</button>}
    </div>
  );
}
