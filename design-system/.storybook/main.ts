import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/stories/**/*.stories.@(ts|tsx)', '../src/stories/**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  // The site's public dir, so stories can reference real deployed assets (favicon).
  staticDirs: ['../../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
