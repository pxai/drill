// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// In CI the workflow sets SITE and BASE_PATH env vars.
// Locally, the site defaults to localhost with no base prefix.
export default defineConfig({
  site: process.env.SITE ?? 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  integrations: [tailwind()],
});
