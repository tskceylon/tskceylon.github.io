import { readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { site } from '../src/data/site.ts';

const pages = ['index', 'products', 'services', 'about', 'contact', '404'];
const expectedSchema = {
  index: ['LocalBusiness'],
  products: ['BreadcrumbList', 'ItemList', 'Product'],
  services: ['BreadcrumbList', 'ItemList', 'Service'],
  about: ['Organization', 'BreadcrumbList'],
  contact: ['LocalBusiness', 'BreadcrumbList'],
};
const errors = [];

for (const p of pages) {
  const path = `dist/${p === 'index' ? 'index' : p + '/index'}.html`;
  const altPath = `dist/${p}.html`;
  const file = existsSync(path) ? path : existsSync(altPath) ? altPath : null;
  if (!file) { errors.push(`Missing built page: ${p}`); continue; }
  const html = await readFile(file, 'utf8');
  if (!html.includes(site.name)) errors.push(`${p}: site name missing`);
  if (p !== '404' && !html.includes(site.phoneDisplay)) errors.push(`${p}: phone (SSOT) missing`);
  for (const type of expectedSchema[p] ?? []) {
    if (!html.includes(`"@type":"${type}"`))
      errors.push(`${p}: expected JSON-LD @type "${type}" missing`);
  }
  if (p === '404' && !html.includes('name="robots" content="noindex'))
    errors.push('404: noindex robots meta missing');
  if (p !== '404' && !/<h1[\s>]/.test(html))
    errors.push(`${p}: <h1> missing`);
  if (p !== '404' && !html.includes('og:locale'))
    errors.push(`${p}: og:locale missing`);
}

const index = await readFile('dist/index.html', 'utf8');
if (!index.includes(`wa.me/${site.whatsappNumber}`)) errors.push('index: WhatsApp link missing');
if (!index.includes(`tel:${site.phoneHref}`)) errors.push('index: click-to-call missing');
if (!index.includes('company-profile.pdf')) errors.push('index: company-profile PDF link missing');

const pdfPath = 'dist/company-profile.pdf';
if (!existsSync(pdfPath)) {
  errors.push('company-profile.pdf missing from dist/ (run `npm run pdf` to rebuild)');
} else {
  const { size } = await stat(pdfPath);
  if (size < 10_000) errors.push(`company-profile.pdf suspiciously small (${size} bytes)`);
}

const about = await readFile('dist/about/index.html', 'utf8');
if (!about.includes('company-profile.pdf'))
  errors.push('about: company-profile PDF link missing');

if (errors.length) {
  console.error('SMOKE FAILED:\n' + errors.map((e) => ' - ' + e).join('\n'));
  process.exit(1);
}
console.log(`SMOKE PASSED: ${pages.length} pages, SSOT data + JSON-LD + lead-gen links present`);
