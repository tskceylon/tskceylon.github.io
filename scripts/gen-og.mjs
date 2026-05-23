import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { site } from '../src/data/site.ts';

// 1200×630 social card. The logo is navy artwork on a transparent
// background, so the card uses a WHITE field (it would vanish on navy),
// with the brand-red accent bar kept as the recognisable cue.
const W = 1200;
const H = 630;
const NAVY = '#14213D';
const RED = '#DC2626';
const MUTED = '#475569';

// XML-escape SSOT text before embedding it in the SVG layer.
const esc = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Split the single SSOT tagline into two balanced lines for the card.
const t = site.tagline;
const cut = t.lastIndexOf(' in ');
const line1 = cut > 0 ? t.slice(0, cut) : t;
const line2 = cut > 0 ? t.slice(cut + 1) : '';

// Resize the logo and centre it horizontally on the card.
const logo = await sharp('src/assets/images/brand/logo.png').resize({ height: 320 }).toBuffer();
const { width: logoW } = await sharp(logo).metadata();
const logoX = Math.round((W - logoW) / 2);
const logoY = 110;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  <rect x="0" y="0" width="16" height="${H}" fill="${RED}"/>
  <text x="${W / 2}" y="505" text-anchor="middle" fill="${NAVY}"
        font-family="Arial, sans-serif" font-size="46" font-weight="bold">${esc(line1)}</text>
  <text x="${W / 2}" y="562" text-anchor="middle" fill="${MUTED}"
        font-family="Arial, sans-serif" font-size="40">${esc(line2)}</text>
</svg>`;

await mkdir('public/images', { recursive: true });
await sharp(Buffer.from(svg))
  .composite([{ input: logo, left: logoX, top: logoY }])
  .png()
  .toFile('public/images/og-default.png');

console.log(
  `Wrote public/images/og-default.png (${W}x${H}) — logo + "${line1} ${line2}"`,
);
