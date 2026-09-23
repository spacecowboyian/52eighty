import type { ReactNode } from 'react';
import { font, text } from '../../tokens';

/**
 * One of the guide's messaging pillars (pp4–5): a lime numeral, a serif
 * sentence-case heading, the key idea, and the points beneath it. Colours
 * come from the band it sits on.
 */
export interface PillarProps {
  /** 1-based; rendered as "01." */
  index: number;
  title: string;
  /** The one-line belief the pillar opens with. */
  lead?: string;
  /** "Key idea: …" */
  keyIdea?: string;
  points?: string[];
  children?: ReactNode;
}

export function Pillar({ index, title, lead, keyIdea, points = [], children }: PillarProps) {
  return (
    <article style={{ color: 'var(--band-fg, #16211F)' }}>
      <div
        style={{
          fontFamily: font.ui,
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: '.04em',
          color: 'var(--band-accent, #184A4F)',
          marginBottom: 10,
        }}
      >
        {String(index).padStart(2, '0')}.
      </div>
      <h3 style={{ ...text.heading, margin: '0 0 12px', textWrap: 'balance' } as React.CSSProperties}>{title}</h3>
      {lead && <p style={{ ...text.body, margin: '0 0 10px' }}>{lead}</p>}
      {keyIdea && (
        <p style={{ ...text.body, fontStyle: 'italic', color: 'var(--band-fg-soft, #5C6B68)', margin: '0 0 14px' }}>
          Key idea: {keyIdea}
        </p>
      )}
      {points.length > 0 && (
        <ul style={{ ...text.body, fontSize: '1rem', color: 'var(--band-fg-soft, #5C6B68)', margin: 0, paddingLeft: '1.1em' }}>
          {points.map((p) => (
            <li key={p} style={{ marginBottom: 6 }}>
              {p}
            </li>
          ))}
        </ul>
      )}
      {children}
    </article>
  );
}
