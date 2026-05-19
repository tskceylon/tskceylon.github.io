import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { site } from '../src/data/site.ts';

const pages = ['index', 'products', 'services', 'about', 'contact', '404'];
const errors = [];

for (const p of pages) {
  const path = `dist/${p === 'index' ? 'index' : p + '/index'}.html`;
  const altPath = `dist/${p}.html`;
  const file = existsSync(path) ? path : existsSync(altPath) ? altPath : null;
  if (!file) { errors.push(`Missing built page: ${p}`); continue; }
  const html = await readFile(file, 'utf8');
  if (!html.includes(site.name)) errors.push(`${p}: site name missing`);
  if (p !== '404' && !html.includes(site.phoneDisplay)) errors.push(`${p}: phone (SSOT) missing`);
  if (p !== '404' && !html.includes('"@type":"LocalBusiness"'))
    errors.push(`${p}: LocalBusiness JSON-LD missing`);
}

const index = await readFile('dist/index.html', 'utf8');
if (!index.includes(`wa.me/${site.whatsappNumber}`)) errors.push('index: WhatsApp link missing');
if (!index.includes(`tel:${site.phoneHref}`)) errors.push('index: click-to-call missing');

if (errors.length) {
  console.error('SMOKE FAILED:\n' + errors.map((e) => ' - ' + e).join('\n'));
  process.exit(1);
}
console.log(`SMOKE PASSED: ${pages.length} pages, SSOT data + JSON-LD + lead-gen links present`);
