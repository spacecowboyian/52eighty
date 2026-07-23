import { Button, ChoiceGrid, StepProgress, TextInput, TextAreaField, colors } from '5280-design-system';
import { StepShell } from './StepShell';
import { TeamGuide } from './TeamGuide';
import { STEP_LABELS, detailQuestions, investmentOptions, timelineOptions } from './flow';
import type { IntakeAnswers } from './types';

/**
 * Step 3 — the close. Deeper questions selected by the step-1 branch, then
 * Miles's reframed money/time questions, then contact details last: the
 * design principle is that nothing is gated until after the payoff.
 */
export interface StepCloseProps {
  answers: IntakeAnswers;
  onChange: (patch: Partial<IntakeAnswers>) => void;
  onDetailChange: (id: string, value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const headingStyle: React.CSSProperties = {
  margin: '0 0 14px',
  fontFamily: 'var(--display)',
  fontSize: 22,
  lineHeight: 1.2,
  color: colors.ink,
};

export function StepClose({ answers, onChange, onDetailChange, onSubmit, onBack }: StepCloseProps) {
  const questions = detailQuestions(answers.path);
  const canSubmit = Boolean(answers.name?.trim() && answers.email?.trim());

  return (
    <StepShell label="Let's make it happen">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <StepProgress current={3} total={3} labels={STEP_LABELS} />
      <TeamGuide
        name="Andy Rivera"
        role="Production"
        line="Last stretch. Answer these and we walk into the first call already knowing your project."
      />

      {questions.map((question) => (
        <div key={question.id}>
          <h2 style={headingStyle}>{question.label}</h2>
          {question.kind === 'choice' ? (
            <ChoiceGrid
              legend={question.label}
              options={question.options ?? []}
              value={answers.detail[question.id]}
              onChange={(value: string) => onDetailChange(question.id, value)}
              minColumnWidth={200}
            />
          ) : (
            <TextAreaField
              rows={3}
              placeholder={question.placeholder}
              value={answers.detail[question.id] ?? ''}
              onChange={(e) => onDetailChange(question.id, e.currentTarget.value)}
            />
          )}
        </div>
      ))}

      <div>
        <h2 style={headingStyle}>What's a comfortable investment, if this solved the problem?</h2>
        <ChoiceGrid
          legend="Comfortable investment"
          options={investmentOptions}
          value={answers.investment}
          onChange={(value: string) => onChange({ investment: value })}
          minColumnWidth={180}
        />
      </div>

      <div>
        <h2 style={headingStyle}>When do you want people talking about this?</h2>
        <ChoiceGrid
          legend="Timeline"
          options={timelineOptions}
          value={answers.timeline}
          onChange={(value: string) => onChange({ timeline: value })}
          minColumnWidth={160}
        />
      </div>

      <div style={{ display: 'grid', gap: 14 }}>
        <h2 style={headingStyle}>Where do we send the thinking?</h2>
        <TextInput
          label="Name"
          value={answers.name ?? ''}
          onChange={(e) => onChange({ name: e.currentTarget.value })}
        />
        <TextInput
          label="Company"
          value={answers.company ?? ''}
          onChange={(e) => onChange({ company: e.currentTarget.value })}
        />
        <TextInput
          label="Email"
          type="email"
          value={answers.email ?? ''}
          onChange={(e) => onChange({ email: e.currentTarget.value })}
        />
        <TextInput
          label="Phone (optional)"
          type="tel"
          value={answers.phone ?? ''}
          onChange={(e) => onChange({ phone: e.currentTarget.value })}
        />
        <ChoiceGrid
          legend="Preferred way to hear back"
          options={[
            { value: 'email', label: 'By email' },
            { value: 'phone', label: 'By phone' },
            { value: 'text', label: 'By text' },
          ]}
          value={answers.preferredContact}
          onChange={(value: string) => onChange({ preferredContact: value })}
          minColumnWidth={120}
        />
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <Button variant="primary" size="lg" onClick={onSubmit} disabled={!canSubmit}>
          Send it over
        </Button>
        <Button variant="ghost" onClick={onBack}>
          Back
        </Button>
      </div>
      {!canSubmit && (
        <p style={{ margin: 0, fontFamily: 'var(--ui)', fontSize: 13, color: colors.muted }}>
          Name and email are the only two things we actually need.
        </p>
      )}
      </div>
    </StepShell>
  );
}
