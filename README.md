# TSK Ceylon Website

Static brochure / lead-gen site for TSK Ceylon (fire extinguisher sales & servicing, Sri Lanka).
Astro + Tailwind v4, deployed free on GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run verify     # type-check + build + smoke test + link check
```

## Edit content

All company content is in `src/data/`:

- `site.ts` — name, phone, WhatsApp, email, address, hours, nav, Web3Forms key
- `products.ts` — extinguisher range
- `services.ts` — services offered

Replace every value marked `// PLACEHOLDER` with TSK Ceylon's real details, and set
`web3formsAccessKey` to a free key from https://web3forms.com (no account needed; submissions arrive by email).

## Deploy

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.

The site publishes at **`https://tsk-ceylon.github.io/`** — repo `tsk-ceylon/tsk-ceylon.github.io`, with GitHub Pages source set to **GitHub Actions** (Settings → Pages).

## SEO

All SEO surface area is centralised:

- `src/components/Seo.astro` — `<title>`, canonical, Open Graph, Twitter cards, JSON-LD (LocalBusiness / Organization / Product+Service ItemList / BreadcrumbList per `pageType`).
- `src/data/site.ts` — canonical URL, business details, opening hours, and opt-in slots for `googleSiteVerification` (Search Console HTML-tag meta) and `gtagId` (GA4 Measurement ID; loads only in production).
- `public/robots.txt` and the `@astrojs/sitemap` integration in `astro.config.mjs` generate `/sitemap-index.xml`; the 404 page is excluded.
