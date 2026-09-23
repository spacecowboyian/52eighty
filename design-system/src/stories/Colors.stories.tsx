import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colors, font, text } from '../tokens';
import { Band, bandTones, type BandTone } from '../components/Band/Band';
import { Pill } from '../components/Marks/Pill';
import { contrastRatio, grade } from '../utils/contrast';

/**
 * The palette as it's actually used: whole fields, edge to edge, with the
 * type each field allows. Type on a field is white / paper / lime only; small
 * text on periwinkle is white only; red is never text on a field — it's a
 * mark or a 3:1 UI edge. Lime is the exclamation mark: the CTA, one
 * highlighted word, pillar numerals.
 */
const meta = {
  title: 'Foundations/Colors',
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div className="page">{Story()}</div>],
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

type Swatch = { name: string; hex: string; role?: string };
const swatches: Swatch[] = [
  { name: 'Pine', hex: colors.pine, role: 'primary field' },
  { name: 'Jade', hex: colors.jade, role: 'secondary field' },
  { name: 'Periwinkle', hex: colors.peri, role: 'the “alive” field' },
  { name: 'Sky', hex: colors.sky, role: 'light field · squiggle' },
  { name: 'Blush', hex: colors.blush, role: 'light field · frame' },
  { name: 'Lime', hex: colors.lime, role: 'the exclamation mark' },
  { name: 'Cream', hex: colors.cream, role: 'page ground' },
  { name: 'Ink', hex: colors.ink, role: 'text on light' },
  { name: 'Signal red', hex: colors.red, role: 'marks · 3:1 edges' },
  { name: 'Red (deep)', hex: colors.redDeep, role: 'red as small text' },
  { name: 'Gold', hex: colors.gold, role: 'selection · stars' },
  { name: 'Muted', hex: colors.muted, role: 'secondary text on light' },
];

const label: CSSProperties = { ...text.eyebrow, color: 'var(--band-fg-soft)', margin: 0 };

export const Palette: Story = {
  render: () => (
    <Band tone="cream" pad="md">
      <h1 style={{ ...text.displayLG, margin: '0 0 8px' } as CSSProperties}>Color palette</h1>
      <p style={{ ...text.lead, color: colors.muted, maxWidth: '60ch', margin: '0 0 32px' }}>
        Deep pine anchors the system; jade and periwinkle carry whole pages. Sky, blush and lime are
        light fields and marks. Every swatch is an arch — the guide's shape.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: 20 }}>
        {swatches.map((s) => (
          <div key={s.name}>
            <div
              style={{
                aspectRatio: '4 / 3',
                borderRadius: '999px 999px 0 0',
                background: s.hex,
                boxShadow: s.hex === colors.cream ? `inset 0 0 0 1px ${colors.border}` : undefined,
              }}
            />
            <div style={{ fontFamily: font.ui, fontWeight: 600, fontSize: 14, marginTop: 10 }}>{s.name}</div>
            <div style={{ fontFamily: font.ui, fontSize: 12, color: colors.muted }}>
              {s.hex}
              {s.role ? ` · ${s.role}` : ''}
            </div>
          </div>
        ))}
      </div>
    </Band>
  ),
};

const TONES = (Object.keys(bandTones) as BandTone[]).filter((t) => t !== 'transparent');

export const Fields: Story = {
  name: 'Fields (allowed type per tone)',
  render: () => (
    <>
      {TONES.map((tone) => {
        const spec = bandTones[tone];
        const smallAccentOk = contrastRatio(spec.accent, spec.bg) >= 4.5;
        return (
          <Band key={tone} tone={tone} pad="md">
            <p style={label}>
              {tone} · {spec.bg}
            </p>
            <h2 style={{ ...text.displayMD, margin: '12px 0 0' } as CSSProperties}>
              <span style={{ color: spec.accent }}>One word</span> in the accent.
            </h2>
            <h3 style={{ ...text.heading, margin: '20px 0 0' }}>A serif heading, sentence case.</h3>
            <p style={{ ...text.body, color: 'var(--band-fg-soft)', maxWidth: '54ch', margin: '10px 0 0' }}>
              Body copy in the soft foreground ({spec.fgSoft}). Small text in the accent is{' '}
              {smallAccentOk ? 'allowed' : 'display-only'} on this field (
              {contrastRatio(spec.accent, spec.bg).toFixed(2)}:1).
            </p>
            <div style={{ marginTop: 16 }}>
              <Pill tone={tone === 'sky' ? 'pine' : 'sky'}>Eyebrow pill</Pill>
            </div>
          </Band>
        );
      })}
    </>
  ),
};

const CANDIDATES: Array<[string, string]> = [
  ['white', '#FFFFFF'],
  ['paper', colors.paper],
  ['ink', colors.ink],
  ['pine', colors.pine],
  ['muted', colors.muted],
  ['lime', colors.lime],
  ['sky', colors.sky],
  ['red', colors.red],
  ['red deep', colors.redDeep],
];

export const Pairings: Story = {
  name: 'Pairings (WCAG)',
  render: () => (
    <Band tone="cream" pad="md">
      <h2 style={{ ...text.displayMD, margin: '0 0 16px' } as CSSProperties}>Type on field</h2>
      <p style={{ ...text.body, color: colors.muted, maxWidth: '60ch', margin: '0 0 24px' }}>
        AA = body text (≥4.5:1). AA large = display only (≥3:1). The same helper
        (`utils/contrast.ts`) backs these numbers.
      </p>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', fontFamily: font.ui, fontSize: 13, minWidth: 720 }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '8px 10px' }}>field</th>
              {CANDIDATES.map(([n]) => (
                <th key={n} style={{ textAlign: 'left', padding: '8px 10px' }}>
                  {n}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TONES.map((tone) => (
              <tr key={tone}>
                <td style={{ padding: '6px 10px', fontWeight: 600 }}>
                  <span
                    style={{
                      display: 'inline-block',
                      width: 14,
                      height: 14,
                      borderRadius: '50%',
                      background: bandTones[tone].bg,
                      marginRight: 8,
                      verticalAlign: 'middle',
                      boxShadow: `inset 0 0 0 1px ${colors.border}`,
                    }}
                  />
                  {tone}
                </td>
                {CANDIDATES.map(([n, hex]) => {
                  const r = contrastRatio(hex, bandTones[tone].bg);
                  const g = grade(r);
                  return (
                    <td
                      key={n}
                      style={{
                        padding: '6px 10px',
                        color: g === 'fail' ? colors.muted : colors.ink,
                        fontWeight: g === 'AA' || g === 'AAA' ? 600 : 400,
                      }}
                    >
                      {r.toFixed(2)} <span style={{ fontSize: 11, opacity: 0.7 }}>{g}</span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Band>
  ),
};
