import { Button, TextInput, TextAreaField, colors } from '5280-design-system';
import type { IntakeAnswers } from './types';

/**
 * The "doers" door. The 2026-07-07 call notes call for two distinct paths:
 * dreamers get the guided experience, doers get a plain contact form. Anyone
 * who wants to skip the questions should be able to, immediately.
 */
export interface DirectFormProps {
  answers: IntakeAnswers;
  onChange: (patch: Partial<IntakeAnswers>) => void;
  onSubmit: () => void;
  onSwitch: () => void;
}

export function DirectForm({ answers, onChange, onSubmit, onSwitch }: DirectFormProps) {
  const canSubmit = Boolean(answers.name?.trim() && answers.email?.trim());

  return (
    <div style={{ display: 'grid', gap: 14 }}>
      <p
        style={{
          margin: 0,
          fontFamily: 'var(--serif)',
          fontSize: 17,
          lineHeight: 1.5,
          color: colors.ink,
        }}
      >
        Straight to it, then. Tell us what you need and who to call.
      </p>
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
      <TextAreaField
        label="What do you need?"
        rows={4}
        value={answers.inspiration ?? ''}
        onChange={(e) => onChange({ inspiration: e.currentTarget.value })}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <Button variant="primary" onClick={onSubmit} disabled={!canSubmit}>
          Send it
        </Button>
        <Button variant="ghost" onClick={onSwitch}>
          Actually, walk me through it
        </Button>
      </div>
    </div>
  );
}
