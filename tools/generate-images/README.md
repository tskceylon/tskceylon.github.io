# Image generation

One-off script that generates the artwork in `src/assets/images/` via Google's
Gemini image model.

## Setup

```
echo 'GEMINI_API_KEY=your_key_here' >> .env.local
```

The key is read at runtime; the file is gitignored.

## Run

```
npm run images                                 # generate missing files only
npm run images -- --force                      # regenerate everything
npm run images -- --only=products/dcp --force  # regenerate one image
npm run images -- --dry-run                    # list what would happen
```

Outputs WebP under `src/assets/images/<category>/<slug>.webp`. Astro's
`<Image />` from `astro:assets` handles responsive sizing at build time,
so one source-of-truth file per asset is enough.

## How it works

1. Reads `GEMINI_API_KEY` from `.env.local` (or process env).
2. Queries `GET /v1beta/models` and picks the newest model whose name
   contains `flash-image` and supports `generateContent`. Falls back to a
   hardcoded ID with a warning if discovery fails.
3. For each entry in `prompts.mjs`:
   - Skip if the output exists (unless `--force`).
   - `POST /v1beta/models/{model}:generateContent` with the prompt + the
     requested aspect ratio.
   - Decode `inlineData.data` (base64 PNG).
   - Resize and encode to WebP at q=78 via `sharp`.

## Editing prompts

Edit `prompts.mjs`. Each entry is `{ category, slug, aspectRatio, prompt }`.
After editing, run with `--only=<category>/<slug> --force` to iterate on a
single image without spending tokens on the rest.
