# SK Ceylon Website

Static brochure / lead-gen site for SK Ceylon (fire extinguisher sales & servicing, Sri Lanka).
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

Replace every value marked `// PLACEHOLDER` with SK Ceylon's real details, and set
`web3formsAccessKey` to a free key from https://web3forms.com (no account needed; submissions arrive by email).

## Deploy

Pushing to `main` builds and deploys via `.github/workflows/deploy.yml`.

To publish at the clean URL `https://skceylon.github.io`:

1. Create a GitHub organisation named **`skceylon`** (github.com/organizations/new — manual; cannot be scripted).
2. Transfer this repo into it as `skceylon.github.io`:
   `gh api -X POST repos/ivantha/skceylon.github.io/transfer -f new_owner=skceylon`
3. In the new repo: Settings → Pages → Build and deployment → Source = **GitHub Actions**.

Until the move, deploys publish under `ivantha.github.io/skceylon.github.io/`; for that
URL to render correctly, set `PAGES_BASE: /skceylon.github.io/` in the workflow `build` job env.
