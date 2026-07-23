import { useState } from 'react';
import { Button, StepProgress, TextInput, TextAreaField, colors, radius } from '5280-design-system';
import { StepShell } from './StepShell';
import { TeamGuide } from './TeamGuide';
import { analyzeSite, normalizeUrl, type BrandMirror } from './mirror';
import { matchCaseStudies } from './portfolio';
import { STEP_LABELS } from './flow';
import type { IntakeAnswers } from './types';

/**
 * Step 2 — "The Payoff". Give before asking: read their site back to them,
 * show the work that matches their position, then invite their inspiration.
 * No email is requested anywhere on this screen, by design.
 */
export interface StepMirrorProps {
  answers: IntakeAnswers;
  onChange: (patch: Partial<IntakeAnswers>) => void;
  onNext: () => void;
  onBack: () => void;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const panelStyle: React.CSSProperties = {
  background: '#fff',
  border: `1px solid ${colors.border}`,
  borderRadius: radius.lg,
  padding: 22,
};

const headingStyle: React.CSSProperties = {
  margin: '0 0 14px',
  fontFamily: 'var(--display)',
  fontSize: 26,
  lineHeight: 1.15,
  color: colors.ink,
};

const bodyStyle: React.CSSProperties = {
  fontFamily: 'var(--serif)',
  fontSize: 16,
  lineHeight: 1.55,
  color: colors.ink,
  margin: '0 0 10px',
};

export function StepMirror({ answers, onChange, onNext, onBack }: StepMirrorProps) {
  const [mirror, setMirror] = useState<BrandMirror | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const matches = matchCaseStudies(answers.path, answers.driver);

  async function run() {
    const url = normalizeUrl(answers.siteUrl ?? '');
    if (!url) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      setMirror(await analyzeSite(url, { path: answers.path, driver: answers.driver }));
      setStatus('idle');
    } catch {
      setStatus('error');
    }
  }

  return (
    <StepShell label="What we see">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <StepProgress current={2} total={3} labels={STEP_LABELS} />
      <TeamGuide
        name="Mandy Mays"
        role="Brand"
        line="Give us your site and we'll tell you what we read off it — before you tell us anything else."
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <TextInput
          label="Your website"
          placeholder="yourcompany.com"
          value={answers.siteUrl ?? ''}
          state={status === 'error' ? 'invalid' : 'default'}
          message={status === 'error' ? "That doesn't look like a URL we can read." : undefined}
          onChange={(e) => onChange({ siteUrl: e.currentTarget.value })}
          onKeyDown={(e) => {
            if (e.key === 'Enter') run();
          }}
        />
        <div>
          <Button variant="primary" onClick={run} disabled={status === 'loading'}>
            {status === 'loading' ? 'Reading…' : 'Read my site'}
          </Button>
        </div>
      </div>

      {mirror && (
        <div style={panelStyle}>
          <h2 style={headingStyle}>Here's what we see at {mirror.domain}.</h2>
          <p style={bodyStyle}>{mirror.northStar}</p>
          <p style={bodyStyle}>{mirror.voice}</p>
          <p style={bodyStyle}>{mirror.audience}</p>
          <p style={bodyStyle}>{mirror.visual}</p>
          {mirror.simulated && (
            <p
              style={{
                margin: '14px 0 0',
                fontFamily: 'var(--ui)',
                fontSize: 12,
                color: colors.muted,
              }}
            >
              Prototype preview — this read is generated locally from your answers, not from an actual
              crawl of your site yet.
            </p>
          )}
        </div>
      )}

      <div>
        <h2 style={headingStyle}>We've worked with people in your position.</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,240px),1fr))',
            gap: 12,
          }}
        >
          {matches.map((study) => (
            <a
              key={study.slug}
              href={`${base}/work/${study.slug}`}
              style={{ ...panelStyle, display: 'block', textDecoration: 'none' }}
            >
              <span
                style={{
                  fontFamily: 'var(--ui)',
                  fontSize: 12,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: colors.muted,
                }}
              >
                {study.client}
              </span>
              <p style={{ ...bodyStyle, margin: '8px 0 0', fontSize: 15 }}>{study.blurb}</p>
            </a>
          ))}
        </div>
      </div>

      <TextAreaField
        label="If these don't inspire you, what does?"
        placeholder="Paste links, name brands you envy, describe a thing you saw once and can't shake."
        rows={4}
        value={answers.inspiration ?? ''}
        onChange={(e) => onChange({ inspiration: e.currentTarget.value })}
      />

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <Button variant="primary" size="lg" onClick={onNext}>
          Keep going
        </Button>
        <Button variant="ghost" onClick={onBack}>
          Back
        </Button>
      </div>
      </div>
    </StepShell>
  );
}
