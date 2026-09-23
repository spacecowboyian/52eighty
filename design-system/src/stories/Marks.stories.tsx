import type { CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { colors, text } from '../tokens';
import { Band, bandTones, type BandTone } from '../components/Band/Band';
import { Arch, archMedia } from '../components/Marks/Arch';
import { Squiggle } from '../components/Marks/Squiggle';
import { Starburst } from '../components/Marks/Starburst';
import { Pill } from '../components/Marks/Pill';
import { Wordmark } from '../components/Marks/Wordmark';

/**
 * The brand's hand-drawn marks, extracted as vector paths from the
 * 2026-06-22 brand guide (p1 logo, p2 squiggle, p7 starburst + heart), and
 * the CSS arch. Marks are seasoning: at most one per viewport, two squiggles
 * per page. Every story renders on every band tone so the a11y addon sees
 * each pairing.
 */
const meta = {
  title: 'Foundations/Marks',
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div className="page">{Story()}</div>],
} satisfies Meta;
export default meta;
type Story = StoryObj<typeof meta>;

const TONES = (Object.keys(bandTones) as BandTone[]).filter((t) => t !== 'transparent');
const label: CSSProperties = { ...text.eyebrow, color: 'var(--band-fg-soft)', margin: '0 0 12px' };

function OnEveryTone({ render }: { render: (tone: BandTone) => React.ReactNode }) {
  return (
    <>
      {TONES.map((tone) => (
        <Band key={tone} tone={tone} pad="sm">
          <p style={label}>{tone}</p>
          {render(tone)}
        </Band>
      ))}
    </>
  );
}

export const Marks: Story = {
  render: () => (
    <OnEveryTone
      render={(tone) => (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 32 }}>
          <Wordmark tone={bandTones[tone].header} height={32} />
          <Squiggle width={120} style={{ color: tone === 'sky' ? colors.pine : colors.sky }} />
          <Starburst size={72} heart color={tone === 'lime' ? colors.pine : colors.lime} />
          <Pill tone={tone === 'sky' ? 'pine' : 'sky'}>How we talk</Pill>
          <Pill tone="red" size="lg">
            How we look
          </Pill>
        </div>
      )}
    />
  ),
};

export const ArchShape: Story = {
  name: 'Arch',
  render: () => (
    <OnEveryTone
      render={(tone) => (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 24, maxWidth: 720 }}>
          <Arch tone={tone === 'sky' ? 'pine' : 'sky'} />
          <Arch tone="blush" ratio="1 / 1" />
          <Arch tone="pine">
            <img src="/intake/river-bluff-hero-1280.jpg" alt="" style={archMedia} />
          </Arch>
        </div>
      )}
    />
  ),
};

export const SquiggleDraw: Story = {
  name: 'Squiggle (draws on view)',
  render: () => (
    <Band tone="jade" pad="lg">
      <h2 style={{ ...text.displayMD, color: '#fff', margin: 0, maxWidth: '12ch' }}>
        Go further. It’s less crowded.
      </h2>
      <Squiggle draw width={200} style={{ color: colors.sky, marginTop: -24, marginLeft: '40%' }} />
    </Band>
  ),
};

export const StarburstPulse: Story = {
  name: 'Starburst (pulses on mount)',
  render: () => (
    <Band tone="pine" pad="lg">
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        <Starburst size={72} heart pulse />
        <h1 style={{ ...text.displayXL, color: '#fff', margin: 0 }}>
          <span style={{ color: colors.blush }}>Creative</span> with a heartbeat
        </h1>
      </div>
    </Band>
  ),
};

export const Sizes: Story = {
  name: 'At 24px and 240px',
  render: () => (
    <Band tone="pine" pad="md">
      {[24, 240].map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 24, marginBottom: 24 }}>
          <Wordmark tone="dark" height={size} />
          <Squiggle width={size * 2} style={{ color: colors.sky }} />
          <Starburst size={size} heart />
        </div>
      ))}
    </Band>
  ),
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
