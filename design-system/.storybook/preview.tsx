import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/styles/theme.css';
import { font, colors } from '../src/tokens';

// Same licensed-face tier the site layout links (see src/layouts/Layout.astro):
// set STORYBOOK_ADOBE_FONTS_KIT to see Crumb / Minion / Owners Narrow in
// Storybook; unset, the self-hosted stand-ins from theme.css render.
const adobeKit = import.meta.env.STORYBOOK_ADOBE_FONTS_KIT as string | undefined;
if (adobeKit && typeof document !== 'undefined') {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `https://use.typekit.net/${adobeKit}.css`;
  document.head.appendChild(link);
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'cream',
      values: [
        { name: 'cream', value: colors.cream },
        { name: 'surface', value: colors.surface },
        { name: 'pine', value: colors.pine },
        { name: 'ink', value: colors.ink },
      ],
    },
    layout: 'centered',
    controls: { expanded: true },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          fontFamily: font.ui,
          color: colors.ink,
          WebkitFontSmoothing: 'antialiased',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
