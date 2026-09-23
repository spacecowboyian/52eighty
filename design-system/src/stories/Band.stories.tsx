import type { Meta, StoryObj } from '@storybook/react';
import { Band, bandTones, type BandTone } from '../components/Band/Band';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { Button } from '../components/Button/Button';
import { text } from '../tokens';

const TONES = Object.keys(bandTones) as BandTone[];

const meta = {
  title: 'Layout/Band',
  component: Band,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    tone: { control: 'select', options: TONES },
    pad: { control: 'inline-radio', options: ['none', 'sm', 'md', 'lg'] },
    edge: { control: 'inline-radio', options: ['none', 'arch'] },
    frame: { control: 'inline-radio', options: [undefined, 'sky', 'blush'] },
  },
  // Bands are grid items of the page grid; the story supplies the page.
  decorators: [(Story) => <div className="page">{Story()}</div>],
} satisfies Meta<typeof Band>;
export default meta;
type Story = StoryObj<typeof meta>;

function Copy({ tone }: { tone: BandTone }) {
  return (
    <>
      <SectionHeader
        variant="marker"
        title={`${tone} field`}
        eyebrow="Allowed type on this ground"
      />
      <p style={{ ...text.body, color: 'var(--band-fg-soft)', maxWidth: '54ch', margin: '18px 0 0' }}>
        Body copy in the soft foreground. Headings in the foreground. The accent is reserved for
        eyebrows, numerals and one highlighted word.
      </p>
    </>
  );
}

export const Playground: Story = {
  args: { tone: 'pine', pad: 'md', edge: 'none' },
  render: (args) => (
    <Band {...args}>
      <Copy tone={args.tone ?? 'cream'} />
    </Band>
  ),
};

export const AllTones: Story = {
  render: () => (
    <>
      {TONES.filter((t) => t !== 'transparent').map((tone) => (
        <Band key={tone} tone={tone} pad="md">
          <Copy tone={tone} />
        </Band>
      ))}
    </>
  ),
};

export const AllTonesMobile: Story = {
  ...AllTones,
  parameters: { viewport: { defaultViewport: 'mobile1' } },
};

export const AllTonesTablet: Story = {
  ...AllTones,
  parameters: { viewport: { defaultViewport: 'tablet' } },
};

export const Seams: Story = {
  name: 'Seams: colour → arch → hard edge',
  render: () => (
    <>
      <Band tone="pine" pad="lg">
        <Copy tone="pine" />
      </Band>
      <Band tone="jade" pad="md">
        <Copy tone="jade" />
      </Band>
      <Band tone="peri" pad="lg" edge="arch">
        <Copy tone="peri" />
        <p style={{ margin: '24px 0 0' }}>
          <Button variant="accent" size="lg">
            Start your project
          </Button>
        </p>
      </Band>
      <Band tone="pine" pad="md">
        <Copy tone="pine" />
      </Band>
    </>
  ),
};

export const Framed: Story = {
  render: () => (
    <>
      <Band tone="pine" frame="sky" pad="lg">
        <Copy tone="pine" />
      </Band>
      <Band tone="cream" frame="blush" pad="lg">
        <Copy tone="cream" />
      </Band>
    </>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <Band
      tone="transparent"
      headerTone="dark"
      pad="lg"
      style={{ minHeight: '70vh', alignContent: 'end' }}
      background={
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, #184A4F 0%, rgba(24,74,79,.2) 60%), radial-gradient(circle at 70% 30%, #8CB6F2, #096D61)',
          }}
        />
      }
    >
      <h2 style={{ ...text.displayLG, color: '#fff', margin: 0 }}>Photo, then pine.</h2>
      <p style={{ ...text.lead, color: 'rgba(255,255,255,.88)', maxWidth: '40ch' }}>
        The scrim's last stop is the next band's colour, so the seam is a resolve, not a line.
      </p>
    </Band>
  ),
};
