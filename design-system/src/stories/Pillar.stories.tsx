import type { Meta, StoryObj } from '@storybook/react';
import { Pillar } from '../components/Pillar/Pillar';
import { Band } from '../components/Band/Band';

const meta = {
  title: 'Components/Pillar',
  component: Pillar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  decorators: [(Story) => <div className="page">{Story()}</div>],
} satisfies Meta<typeof Pillar>;
export default meta;
type Story = StoryObj<typeof meta>;

const one = {
  index: 1,
  title: 'Below the surface',
  lead: 'We believe the best creative work starts below the obvious answer.',
  keyIdea: 'Better questions create better brands.',
  points: [
    'We dig deeper than logos and taglines',
    'We uncover the emotional core behind the work',
    'We believe meaningful creative starts with curiosity',
  ],
};

export const OnJade: Story = {
  args: one,
  render: (args) => (
    <Band tone="jade" frame="sky" pad="lg">
      <div style={{ display: 'grid', gap: 40, gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))' }}>
        <Pillar {...args} />
        <Pillar {...args} index={2} title="Work people can feel" keyIdea="Emotion creates connection." />
        <Pillar {...args} index={3} title="Relationships. Not projects." keyIdea="Strong relationships create stronger creative." />
      </div>
    </Band>
  ),
};

export const OnCream: Story = {
  args: one,
  render: (args) => (
    <Band tone="cream" pad="md">
      <Pillar {...args} />
    </Band>
  ),
};
