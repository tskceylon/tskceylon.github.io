# SK Ceylon Website — Design Spec

**Date:** 2026-05-19
**Status:** Approved (brainstorming complete, pending spec review)
**Repo:** `github.com/ivantha/skceylon.github.io` (to be moved — see Deployment)

## 1. Overview

A simple, fast, static **brochure / lead-generation website** for **SK Ceylon**, a fire
extinguisher sales and servicing company based in Sri Lanka. The site's job is
**credibility + an easy way to get in touch** (call / WhatsApp / inquiry form) — it does
**not** sell online. Hosted free on GitHub Pages.

## 2. Decisions Log

| Decision | Choice |
|---|---|
| Site purpose | Brochure / lead-gen (no e-commerce, no backend) |
| Maintenance | Developer-edited, infrequent |
| Language | English only |
| Hosting | Free `https://skceylon.github.io` (org-owned repo) |
| Stack | Astro (static) + Tailwind CSS v4 + TypeScript |
| Theme | Light, modern, professional |
| Palette | "L1-a" — slate text, red `#DC2626` as the single action color, deep navy `#14213D` as structural secondary |

## 3. Site Structure

Five pages, each targeting a distinct search intent, all funneling to the same goal
(call / WhatsApp / inquiry):

- **Home** — hero + primary CTA, trust strip, product categories, services overview, why-us, CTA band, footer
- **Products** — extinguisher types (DCP/dry powder, CO₂, foam, water, wet chemical), fire class / use case, typical sizes; card grid
- **Services** — refilling & recharging, annual maintenance & inspection, installation, fire-safety training *(see Open Items — drop if SK Ceylon does not service/refill)*
- **About** — company experience, certifications/standards (SLS/ISO), industries served
- **Contact** — inquiry form, phone, WhatsApp, email, address, business hours, Google Map embed

**Persistent lead-gen elements (all pages):** floating WhatsApp click-to-chat button,
click-to-call in header/footer, short inquiry form on Home + full form on Contact,
LocalBusiness structured data.

## 4. Visual & Brand Direction (L1-a)

Light canvas, slate structure, one disciplined red action color, deep navy as the
secondary for footer / section bands / strong headings. No playful rounding; restraint
and whitespace carry the "modern and professional" feel.

**Design tokens:**

| Role | Value |
|---|---|
| Action — solid (button background, white text on it) | `#DC2626` |
| Action — on-light (red text/links/icons on white) | `#B91C1C` (darker shade for WCAG AA contrast) |
| Structural secondary (footer, bands, headings) | `#14213D` |
| Ink / body text | `#1F2937` |
| Muted text | `#475569` |
| Surface base | `#FFFFFF` |
| Surface alt (section bands) | `#F6F8FB` |
| Hairline / border | `#E5E7EB` |

**Typography:** single self-hosted family — **Inter** (weights 400 / 600 / 800) via
`@fontsource` (no render-blocking external font request).

## 5. Technical Architecture

- **Astro** (latest, static output), **TypeScript**, **Tailwind CSS v4** with the L1-a
  palette as the theme token set.
- **Single source of truth for content:** `src/data/site.ts` holds company name, phone,
  WhatsApp number, email, address, hours, social links, and nav. `products.ts` and
  `services.ts` hold typed content arrays. Editing the site = editing one data file.

```
src/
  layouts/BaseLayout.astro        # <head>/SEO, header, footer, WhatsApp FAB
  components/  Header  Footer  Hero  SectionHeading  TrustStrip
               ProductCard  ServiceCard  CTABand  ContactForm
               WhatsAppFab  Seo (LocalBusiness JSON-LD)
  pages/       index  products  services  about  contact  404
  data/        site.ts  products.ts  services.ts
  styles/      global.css (design tokens)
public/        images, logo, favicon, robots.txt
.github/workflows/deploy.yml      # Astro build → Pages
```

## 6. Lead-Gen Mechanics

- **Contact form → Web3Forms** (free, unlimited, no backend, static-Pages friendly;
  honeypot + optional captcha). Posts via `fetch`; inline success/error states. Public
  access key only — no secrets in repo. *(Fallback option: Formspree free tier.)*
- **WhatsApp**: floating click-to-chat FAB on every page (`wa.me/<number>?text=…`) —
  the dominant lead channel in Sri Lanka.
- **Click-to-call**: `tel:` link in header (mobile) and footer.
- **Google Maps**: lazy-loaded `<iframe>` place embed on Contact (no API key).

## 7. SEO

Per-page `<title>` / meta description / Open Graph + Twitter tags via the `Seo`
component; `@astrojs/sitemap` → `sitemap.xml`; `robots.txt`; **LocalBusiness JSON-LD**
(name, address, geo, phone, opening hours, area served) for a rich Google local
listing. Semantic HTML; optimized images via `astro:assets`; ~0 JS shipped.

## 8. Hosting & Deployment

- Deploy via **GitHub Actions** (`withastro/action` + `actions/deploy-pages`); push to
  `main` builds and deploys. A failing build blocks deploy (acts as CI). Pages source
  set to "GitHub Actions".
- Target URL `https://skceylon.github.io` requires the repo to be owned by a GitHub
  account/org **named `skceylon`** and named `skceylon.github.io`.
- **Manual prerequisite (owner action — cannot be automated here):** create GitHub
  org `skceylon`, then transfer/move this repo into it as `skceylon.github.io`.
  Development and preview can proceed under `ivantha/` in the meantime.
- Because the target is an **org/user site at the domain root**, Astro needs
  `site: 'https://skceylon.github.io'` and **no `base`** — clean root paths, no
  base-path complexity. No custom domain → no `CNAME`, no DNS.

## 9. Testing / Pre-Launch Checklist

- [x] `astro build` passes — `npm run verify` exit 0; live deploy run succeeded
- [x] Lighthouse ≥ 90 — Performance **100**, Accessibility **91**, Best Practices **100**, SEO **100**
- [x] WCAG AA contrast audit — Header active/hover nav retuned `text-action` → `text-action-dark` (`#B91C1C`, ≈5.9:1); white-on-red only on solid buttons
- [~] `tel:` / `wa.me` / `mailto:` / map / nav links — targets & HTTP status verified by automation locally **and on the live site** (all 200 / correct trailing-slash redirects). On-device tap-through still recommended.
- [ ] **Real contact-form submission — NOT verified.** Requires the real Web3Forms key (currently a placeholder in `src/data/site.ts`). Owner action.
- [ ] **Responsive at mobile/tablet/desktop — NOT visually verified.** Standard Tailwind responsive utilities used; final visual pass recommended by owner.
- [x] 404 page renders — verified live (`https://skceylon.github.io/no-such` → custom 404)

## 10. Scope Guardrails & Open Items

**Out of scope (YAGNI):** online store / payments, blog, CMS, multi-language,
analytics dashboard, customer accounts.

**Open items:**
- **Services page is conditional** — drop entirely if SK Ceylon does not offer
  servicing/refilling. (Included by default; most SL extinguisher companies do.)
- **Real content pending from SK Ceylon:** company history, exact product range &
  specs, photos, real phone / WhatsApp / email / address / hours. Build uses clearly
  marked **placeholder** values in `src/data/*` so the swap-in is a one-file edit.
- Optional later: privacy-light analytics (Plausible/Umami/GA4), custom domain.

## 11. Next Step

Hand off to the `writing-plans` skill to produce a step-by-step implementation plan.
