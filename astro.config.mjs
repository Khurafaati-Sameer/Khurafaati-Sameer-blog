import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://khurafaatisameer.netlify.app',
  integrations: [sitemap()],
});
