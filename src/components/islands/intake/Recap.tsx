import { Button, colors, radius } from '5280-design-system';
import { detailQuestions, investmentOptions, labelFor, timelineOptions } from './flow';
import type { IntakeAnswers } from './types';

/**
 * Closing screen: play the brief back so the visitor sees they produced
 * something, not that they filled in a form. Per the concept doc, this is
 * their first discovery meeting — the recap is the artifact of it.
 */
export interface RecapProps {
  answers: IntakeAnswers;
  delivered: boolean;
  onRestart: () => void;
}

const rowStyle: React.CSSProperties = {
  padding: '14px 0',
  borderBottom: `1px solid ${colors.border}`,
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--ui)',
  fontSize: 12,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: colors.muted,
};

const valueStyle: React.CSSProperties = {
  margin: '6px 0 0',
  fontFamily: 'var(--serif)',
  fontSize: 16,
  lineHeight: 1.5,
  color: colors.ink,
};

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div style={rowStyle}>
      <span style={labelStyle}>{label}</span>
      <p style={valueStyle}>{value}</p>
    </div>
  );
}

export function Recap({ answers, delivered, onRestart }: RecapProps) {
  const questions = detailQuestions(answers.path);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div>
        <h2
          style={{
            margin: 0,
            fontFamily: 'var(--display)',
            fontSize: 30,
            lineHeight: 1.1,
            color: colors.ink,
          }}
        >
          That's a brief, {answers.name?.split(' ')[0] ?? 'friend'}.
        </h2>
        <p style={{ ...valueStyle, marginTop: 10 }}>
          You just did the first half of a discovery call in about three minutes. Here it is back.
        </p>
      </div>

      <div
        style={{
          background: '#fff',
          border: `1px solid ${colors.border}`,
          borderRadius: radius.lg,
          padding: '4px 22px 18px',
        }}
      >
        <Row label="What's driving it" value={labelFor('driver', answers.driver)} />
        <Row label="What we're making" value={labelFor('path', answers.path)} />
        <Row label="Their site" value={answers.siteUrl} />
        {questions.map((question) => (
          <Row
            key={question.id}
            label={question.label}
            value={
              question.kind === 'choice'
                ? question.options?.find((o) => o.value === answers.detail[question.id])?.label
                : answers.detail[question.id]
            }
          />
        ))}
        <Row
          label="Comfortable investment"
          value={investmentOptions.find((o) => o.value === answers.investment)?.label}
        />
        <Row
          label="Timeline"
          value={timelineOptions.find((o) => o.value === answers.timeline)?.label}
        />
        <Row label="Inspiration" value={answers.inspiration} />
        <Row
          label="Reach them at"
          value={[answers.email, answers.phone].filter(Boolean).join(' · ') || undefined}
        />
      </div>

      {!delivered && (
        <p style={{ margin: 0, fontFamily: 'var(--ui)', fontSize: 13, color: colors.muted }}>
          Prototype — nothing was sent anywhere. Wiring a submit endpoint is what turns this into a
          real lead.
        </p>
      )}

      <div>
        <Button variant="outline" onClick={onRestart}>
          Start over
        </Button>
      </div>
    </div>
  );
}
