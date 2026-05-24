// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = process.env.SITE_URL ?? 'https://tsk-ceylon.github.io';
const PAGES_BASE = process.env.PAGES_BASE ?? '/';

const NOW = new Date();

export default defineConfig({
  site: SITE_URL,
  base: PAGES_BASE,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      changefreq: ChangeFreqEnum.MONTHLY,
      serialize(item) {
        item.lastmod = NOW.toISOString();
        if (item.url === `${SITE_URL}/`) {
          item.priority = 1.0;
          item.changefreq = ChangeFreqEnum.WEEKLY;
        } else if (item.url.endsWith('/contact') || item.url.endsWith('/contact/')) {
          item.priority = 0.9;
        } else {
          item.priority = 0.7;
        }
        return item;
      },
    }),
  ],
  // JSDoc `any` cast: @tailwindcss/vite's plugin type skews against the Vite
  // types bundled with this Astro version (ObjectHook/HotUpdatePluginContext).
  // Runtime is fine (dev server verified); this only silences `astro check`.
  vite: { plugins: [/** @type {any} */ (tailwindcss())] },
});
