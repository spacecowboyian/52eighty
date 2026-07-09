import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  ...(process.env.SITE && { site: process.env.SITE }),
  ...(process.env.BASE_PATH && { base: process.env.BASE_PATH }),
  outDir: './dist',
  output: 'static',
  integrations: [react()],
});
