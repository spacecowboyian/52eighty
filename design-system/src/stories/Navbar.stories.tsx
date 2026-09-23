import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar/Navbar';

const SITE_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Our Work', href: '#work' },
];

const meta = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Navbar>;
export default meta;

type Story = StoryObj<typeof meta>;

/** Light desktop header: cream/white, underline-on-hover links, pine Contact pill. */
export const Light: Story = {
  args: { tone: 'light' },
  render: (args) => (
    <div style={{ padding: 30, background: '#FBF9F5' }}>
      <Navbar {...args} />
    </div>
  ),
};

/** Dark "over imagery" header: ink striped background, lime Contact pill. */
export const Dark: Story = {
  args: { tone: 'dark' },
  render: (args) => (
    <div style={{ padding: 30, background: '#FBF9F5' }}>
      <Navbar {...args} />
    </div>
  ),
};

/**
 * The header below the 640px breakpoint: wordmark + hamburger, with the links
 * and the Contact CTA in the drawer. Tap the hamburger to slide it in — Escape,
 * the backdrop, or the close button dismiss it.
 *
 * Needs a viewport narrower than 640px to show the toggle, so view this story
 * in Storybook's mobile viewport (or drag the preview pane narrow).
 */
export const Mobile: StoryObj = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  render: () => (
    <div style={{ background: '#FBF9F5', minHeight: 400 }}>
      <Navbar links={SITE_LINKS} contactHref="#start" chrome="flush" />
      <p style={{ padding: 24, fontFamily: 'Georgia, serif', color: '#5C6B68' }}>
        Page content sits behind the drawer, and stops scrolling while it's open.
      </p>
    </div>
  ),
};
