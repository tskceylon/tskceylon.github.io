// Image generation manifest for TSK Ceylon.
// Each entry produces one WebP under src/assets/images/<category>/<slug>.webp.
//
// Style direction:
//   - Products: clean studio renders on white, slightly stylised (avoid uncanny realism)
//   - Hero: editorial flat-isometric illustration, no people, no text in image
//   - Services: flat illustrations, consistent line-weight, navy+red on neutrals
//   - About: photographic facility/showroom, no people, no signage

const RED = '#DC2626';
const NAVY = '#14213D';

const PRODUCT_BASE =
  'Clean studio product render of a fire extinguisher on a seamless pure white background. ' +
  'Soft even studio lighting from above-left, gentle contact shadow under the cylinder. ' +
  'Centered composition, full extinguisher visible head to base, sharp focus, professional commercial photography style. ' +
  'No people, no text on labels, no logos, no brand names. ' +
  'The extinguisher cylinder is red.';

const ILLUSTRATION_BASE =
  `Editorial flat illustration in a modern semi-isometric style. Limited palette: deep navy (${NAVY}), ` +
  `safety red (${RED}), warm cream, soft grey, and accent gold. Consistent medium line-weight, ` +
  'soft drop-shadows, no gradients, no people with detailed faces (small abstracted figures only if needed). ' +
  'No text, no logos, no brand names. Crisp vector look.';

export const prompts = [
  // ---------- Products (square, photo-realistic) ----------
  {
    category: 'products',
    slug: 'dcp',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a 6kg ABC dry chemical powder fire extinguisher with a polished red cylinder, ' +
      'a chrome metal valve assembly, black discharge hose with a black nozzle, a pressure gauge, ' +
      'and a clean unbranded white instruction label. Classic commercial model.',
  },
  {
    category: 'products',
    slug: 'co2',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a CO2 carbon dioxide fire extinguisher with a tall red cylinder, ' +
      'a large black plastic discharge horn attached by a black hose, a chrome valve, ' +
      'and a clean unbranded white instruction label. Slightly taller and narrower than a dry powder model.',
  },
  {
    category: 'products',
    slug: 'foam',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is an AFFF foam fire extinguisher with a red cylinder, ' +
      'a cream coloured horizontal label band across the middle, a black discharge hose ' +
      'with a foam nozzle, a chrome valve, and a pressure gauge.',
  },
  {
    category: 'products',
    slug: 'water',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a water fire extinguisher with a red cylinder, a clean white label band, ' +
      'a black discharge hose with a simple nozzle, a chrome valve, and a pressure gauge. ' +
      'Slimmer profile than a powder extinguisher.',
  },
  {
    category: 'products',
    slug: 'wet-chemical',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a wet chemical (Class F) fire extinguisher with a red cylinder, ' +
      'a yellow horizontal label band across the middle, a long extended applicator lance ' +
      'with a yellow-tipped nozzle, a chrome valve, and a pressure gauge.',
  },

  // ---------- Hero (4:3 illustration) ----------
  {
    category: 'hero',
    slug: 'scene',
    aspectRatio: '4:3',
    prompt:
      `${ILLUSTRATION_BASE} ` +
      'Scene: a clean modern office or light-industrial interior, semi-isometric perspective looking into a corner. ' +
      'A wall-mounted red fire extinguisher in a chrome bracket is the focal point, with a small ' +
      'green-and-white "exit" arrow sign above it. Subtle architectural detail: a glass partition, ' +
      'a tiled floor, a planter, soft daylight from a window on the left. ' +
      'Atmosphere: trustworthy, professional, safety-conscious. ' +
      'Composition leaves negative space in the upper-left for visual breathing room. ' +
      'No people, no text on signage, no brand marks.',
  },

  // ---------- Services (3:2 illustrations) ----------
  {
    category: 'services',
    slug: 'refilling',
    aspectRatio: '3:2',
    prompt:
      `${ILLUSTRATION_BASE} ` +
      'Composition: a workshop bench in semi-isometric view. A red fire extinguisher cylinder ' +
      'lies on its side, valve removed, with a refill hopper of dry chemical powder above it ' +
      'and a small chrome pressure-test gauge on the bench. Tools: a torque wrench, a clean cloth, ' +
      'a refill cone. Slight steam/dust effect from the powder transfer. Warm workshop lighting. ' +
      'No human figures.',
  },
  {
    category: 'services',
    slug: 'maintenance',
    aspectRatio: '3:2',
    prompt:
      `${ILLUSTRATION_BASE} ` +
      'Composition: a wall-mounted red fire extinguisher viewed from the front, semi-isometric. ' +
      'A clipboard with a checklist of green ticks floats next to it. A small yellow service tag ' +
      'hangs from the extinguisher handle with a clearly visible "next service" date space (blank, no text). ' +
      'A magnifying glass icon overlapping the pressure gauge. Clean inspection vibe. ' +
      'No human figures.',
  },
  {
    category: 'services',
    slug: 'installation',
    aspectRatio: '3:2',
    prompt:
      `${ILLUSTRATION_BASE} ` +
      'Composition: a section of clean office wall in semi-isometric view. A red fire extinguisher ' +
      'mounted in a fresh chrome wall bracket. Below it, a small red-and-white "Fire Extinguisher" ' +
      'sign (rectangular, no text drawn — just the suggestion of signage with an extinguisher pictogram). ' +
      'A drill, level, and a couple of mounting screws on a small ledge nearby. ' +
      'Clean, just-installed feel. No human figures.',
  },
  {
    category: 'services',
    slug: 'training',
    aspectRatio: '3:2',
    prompt:
      `${ILLUSTRATION_BASE} ` +
      'Composition: a training session, semi-isometric perspective. Three or four abstracted human figures ' +
      'from behind (no faces, shown as simple silhouettes from waist up) watching a demonstration of a ' +
      'red fire extinguisher being aimed at a small controlled tray fire on the ground. ' +
      'A pull-pin technique is being shown. The setting is an open courtyard or training area, ' +
      'soft daylight. Atmosphere: educational, practical, safe. No text.',
  },

  // ---------- About (16:9 photographic) ----------
  {
    category: 'about',
    slug: 'facility',
    aspectRatio: '16:9',
    prompt:
      'Professional commercial photograph of a clean, well-organised fire safety equipment showroom or ' +
      'inspection bay. A row of red fire extinguishers of various sizes (dry powder, CO2, foam) ' +
      'arranged neatly on a polished concrete or light tiled floor, against a clean white or light grey wall. ' +
      'Some are wall-mounted in chrome brackets, others stand upright. Soft natural daylight from one side, ' +
      'subtle shadows, sharp focus. A sense of order, readiness, and quality. ' +
      'No people, no text, no signage, no logos, no brand names. ' +
      'Wide horizontal composition with breathing room on both sides.',
  },
];

export const aspectToSize = {
  '1:1': { width: 1200, height: 1200 },
  '4:3': { width: 1600, height: 1200 },
  '3:2': { width: 1500, height: 1000 },
  '16:9': { width: 1920, height: 1080 },
};
