#!/usr/bin/env node
// Generate TSK Ceylon artwork via Google's Gemini image model.
// Output: src/assets/images/<category>/<slug>.webp (one file per prompt).
// Astro <Image /> handles responsive widths at build time, so we only persist
// one source-of-truth size per asset.
//
// Usage:
//   node tools/generate-images/generate.mjs                # generate missing
//   node tools/generate-images/generate.mjs --force        # regenerate all
//   node tools/generate-images/generate.mjs --only=foo/bar # one slug
//   node tools/generate-images/generate.mjs --dry-run      # list, no API calls

import { readFile, mkdir, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import { prompts, aspectToSize } from './prompts.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '..', '..');
const outRoot = path.join(repoRoot, 'src', 'assets', 'images');

const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const DRY = args.includes('--dry-run');
const onlyArg = args.find((a) => a.startsWith('--only='));
const ONLY = onlyArg ? onlyArg.slice('--only='.length) : null;

await loadEnvLocal();
const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY && !DRY) {
  console.error('GEMINI_API_KEY not set. Add it to .env.local.');
  process.exit(1);
}

const model = DRY ? 'gemini-2.5-flash-image-preview' : await discoverImageModel(API_KEY);
console.log(`Using model: ${model}`);

const work = prompts.filter((p) => !ONLY || `${p.category}/${p.slug}` === ONLY);
if (ONLY && work.length === 0) {
  console.error(`No prompt matches --only=${ONLY}`);
  process.exit(1);
}

let made = 0;
let skipped = 0;
let failed = 0;

for (const entry of work) {
  const outPath = path.join(outRoot, entry.category, `${entry.slug}.webp`);
  const relOut = path.relative(repoRoot, outPath);

  if (!FORCE && (await exists(outPath))) {
    console.log(`skip   ${relOut} (exists)`);
    skipped++;
    continue;
  }

  if (DRY) {
    console.log(`would  ${relOut}  [${entry.aspectRatio}]`);
    console.log(`       ${entry.prompt.slice(0, 100)}…`);
    continue;
  }

  try {
    console.log(`gen    ${relOut} …`);
    const pngBuffer = await generateImage(model, API_KEY, entry);
    await mkdir(path.dirname(outPath), { recursive: true });
    const size = aspectToSize[entry.aspectRatio] ?? { width: 1200, height: 1200 };
    await sharp(pngBuffer)
      .resize({ width: size.width, height: size.height, fit: 'cover' })
      .webp({ quality: 78 })
      .toFile(outPath);
    console.log(`done   ${relOut}`);
    made++;
  } catch (err) {
    console.error(`FAIL   ${relOut}: ${err.message}`);
    failed++;
  }
}

console.log(`\n${made} generated, ${skipped} skipped, ${failed} failed.`);
if (failed > 0) process.exit(1);

// ---------- helpers ----------

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function loadEnvLocal() {
  const envPath = path.join(repoRoot, '.env.local');
  try {
    const src = await readFile(envPath, 'utf8');
    for (const line of src.split('\n')) {
      const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
      if (!m) continue;
      const [, key, rawVal] = m;
      const val = rawVal.replace(/^["']|["']$/g, '');
      if (!(key in process.env)) process.env[key] = val;
    }
  } catch { /* no .env.local — fall back to process env */ }
}

async function discoverImageModel(apiKey) {
  const fallback = 'gemini-2.5-flash-image-preview';
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const candidates = (data.models ?? [])
      .filter((m) =>
        /flash-image/.test(m.name ?? '') &&
        (m.supportedGenerationMethods ?? []).includes('generateContent')
      )
      .map((m) => m.name.replace(/^models\//, ''));
    if (candidates.length === 0) throw new Error('no flash-image models found');
    // Prefer non-preview/stable > preview; otherwise newest by lexical sort (versioned IDs sort newer-last).
    candidates.sort((a, b) => {
      const ap = /preview/.test(a) ? 1 : 0;
      const bp = /preview/.test(b) ? 1 : 0;
      if (ap !== bp) return ap - bp;
      return a < b ? 1 : -1;
    });
    return candidates[0];
  } catch (err) {
    console.warn(`model discovery failed (${err.message}); falling back to ${fallback}`);
    return fallback;
  }
}

async function generateImage(model, apiKey, entry) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const body = {
    contents: [{ parts: [{ text: entry.prompt }] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
      imageConfig: { aspectRatio: entry.aspectRatio ?? '1:1' },
    },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text.slice(0, 200)}`);
  }
  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const imgPart = parts.find((p) => p?.inlineData?.mimeType?.startsWith('image/'));
  if (!imgPart) {
    const textPart = parts.find((p) => p?.text)?.text ?? '';
    throw new Error(`no image in response${textPart ? ` (text: ${textPart.slice(0, 120)})` : ''}`);
  }
  return Buffer.from(imgPart.inlineData.data, 'base64');
}
