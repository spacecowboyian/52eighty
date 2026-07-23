import type { Meta, StoryObj } from '@storybook/react';
import { StepProgress } from '../components/StepProgress/StepProgress';

const meta = {
  title: 'Components/StepProgress',
  component: StepProgress,
  tags: ['autodocs'],
} satisfies Meta<typeof StepProgress>;
export default meta;
type Story = StoryObj<typeof meta>;

const labels = ['The spark', 'What we see', "Let's make it happen"];

export const Default: Story = {
  args: { current: 1, total: 3, labels },
};

export const MidFlow: Story = {
  args: { current: 2, total: 3, labels },
};

export const CounterOnly: Story = {
  args: { current: 3, total: 3 },
};
