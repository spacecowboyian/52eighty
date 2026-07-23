import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChoiceGrid } from '../components/ChoiceGrid/ChoiceGrid';

const meta = {
  title: 'Components/ChoiceGrid',
  component: ChoiceGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof ChoiceGrid>;
export default meta;
type Story = StoryObj<typeof meta>;

const drivers = [
  { value: 'launch', label: 'Launching something new', hint: 'A product, a place, a whole company.' },
  { value: 'rebrand', label: 'Rebranding', hint: "What we look like stopped matching who we are." },
  { value: 'refresh', label: 'Refreshing what we have', hint: 'The bones are good. The skin is tired.' },
  { value: 'problem', label: 'Solving a specific problem', hint: 'Something is not landing and we know it.' },
  { value: 'scale', label: 'Scaling what already works', hint: 'More of the thing that is working.' },
];

export const SingleSelect: Story = {
  args: { options: drivers, legend: "What's driving this?" },
  render: (args) => {
    const [value, setValue] = useState<string>('rebrand');
    return <ChoiceGrid {...args} value={value} onChange={setValue} />;
  },
};

export const MultiSelect: Story = {
  args: {
    options: [
      { value: 'video', label: 'Video' },
      { value: 'brand', label: 'Brand identity' },
      { value: 'campaign', label: 'Campaign' },
      { value: 'social', label: 'Social' },
    ],
    multi: true,
    legend: 'What is on your mind?',
    minColumnWidth: 160,
  },
  render: (args) => {
    const [value, setValue] = useState<string[]>(['video']);
    return <ChoiceGrid {...args} value={value} onChange={setValue} />;
  },
};
