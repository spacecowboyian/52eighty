import { Button, ChoiceGrid, colors } from '5280-design-system';
import { TeamGuide } from './TeamGuide';
import { driverOptions, pathOptions } from './flow';
import type { Driver, IntakeAnswers, Path } from './types';

/**
 * Step 1 — "The Hook". Two questions, one at a time (progressive profiling),
 * both about the why rather than the deliverable. The answers set the branch
 * used by steps 2 and 3.
 */
export interface StepHookProps {
  answers: IntakeAnswers;
  onChange: (patch: Partial<IntakeAnswers>) => void;
  onNext: () => void;
}

const questionStyle: React.CSSProperties = {
  margin: '0 0 14px',
  fontFamily: 'var(--display)',
  fontSize: 26,
  lineHeight: 1.15,
  color: colors.ink,
};

export function StepHook({ answers, onChange, onNext }: StepHookProps) {
  // The second question only appears once the first is answered — one
  // decision on screen at a time keeps the opening as light as possible.
  const showPath = Boolean(answers.driver);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
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
          onChange={(value: Driver) => onChange({ driver: value })}
        />
      </div>

      {showPath && (
        <div>
          <h2 style={questionStyle}>And what's on your mind to make?</h2>
          <ChoiceGrid
            legend="What's on your mind to make?"
            options={pathOptions}
            value={answers.path}
            onChange={(value: Path) => onChange({ path: value })}
            minColumnWidth={200}
          />
        </div>
      )}

      {answers.path && (
        <div>
          <Button variant="primary" size="lg" onClick={onNext}>
            Show me what you see
          </Button>
        </div>
      )}
    </div>
  );
}
