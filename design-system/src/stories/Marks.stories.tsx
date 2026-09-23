import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colors, font } from '../tokens';
import logo from '../assets/marks/logo-5280.svg?raw';
import squiggle from '../assets/marks/squiggle.svg?raw';
import starburst from '../assets/marks/starburst.svg?raw';
import heart from '../assets/marks/heart.svg?raw';

/**
 * The brand's hand-drawn marks, extracted as vector paths from the
 * 2026-06-22 brand guide (p1 logo, p2 squiggle, p7 starburst + heart).
 *
 * Every path is `fill="currentColor"`, so a mark takes the colour of its
 * parent; the logo's exclamation mark reads `var(--lime)` so it can stay lime
 * on any ground. PR 6 wraps these in `Arch` / `Squiggle` / `Starburst` /
 * `Wordmark` components; this story only proves the raw assets are clean.
 */
const meta = {
  title: 'Foundations/Marks',
  parameters: { layout: 'fullscreen' },
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const marks = [
  { name: 'Logo “5280!”', file: 'logo-5280.svg', svg: logo, color: '#FFFFFF' },
  { name: 'Squiggle', file: 'squiggle.svg', svg: squiggle, color: colors.sky },
  { name: 'Starburst', file: 'starburst.svg', svg: starburst, color: colors.lime },
  { name: 'Heart', file: 'heart.svg', svg: heart, color: colors.red },
];

const label: CSSProperties = {
  fontFamily: font.ui,
  fontSize: 12,
  letterSpacing: '.14em',
  textTransform: 'uppercase',
  opacity: 0.8,
  width: 140,
};

function Row({ size, bg, fg }: { size: number; bg: string; fg: string }) {
  return (
    <div style={{ background: bg, color: fg, padding: 32, display: 'grid', gap: 24 }}>
      {marks.map((m) => (
        <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <span style={label}>
            {m.name}
            <br />
            <code style={{ opacity: 0.6, textTransform: 'none', letterSpacing: 0 }}>{m.file}</code>
          </span>
          <span
            aria-hidden="true"
            style={{ color: m.color, display: 'inline-flex', height: size }}
            dangerouslySetInnerHTML={{ __html: m.svg.replace('<svg ', `<svg height="${size}" `) }}
          />
        </div>
      ))}
    </div>
  );
}

export const OnPine: Story = {
  render: () => <Row size={96} bg={colors.pine} fg="#FFFFFF" />,
};

export const Small: Story = {
  name: 'At 24px',
  render: () => <Row size={24} bg={colors.pine} fg="#FFFFFF" />,
};

export const Large: Story = {
  name: 'At 240px',
  render: () => <Row size={240} bg={colors.jade} fg="#FFFFFF" />,
};

export const Favicon: Story = {
  render: () => (
    <div style={{ padding: 32, display: 'flex', gap: 16, alignItems: 'center' }}>
      {[16, 32, 64, 128].map((s) => (
        <img key={s} src="/favicon.svg" width={s} height={s} alt={`favicon at ${s}px`} />
      ))}
    </div>
  ),
};
