// @ts-check
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.loungefest.nl',
  base: process.env.BASE_PATH || '/loungefest-website-frontend/',
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()]
  }
});
