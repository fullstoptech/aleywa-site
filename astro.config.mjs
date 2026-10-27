import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  site: 'https://aleywa.com',
  integrations: [solid(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
