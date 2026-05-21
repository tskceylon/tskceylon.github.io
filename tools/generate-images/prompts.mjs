// Image generation manifest for TSK Ceylon.
// Each entry produces one WebP under src/assets/images/<category>/<slug>.webp.
//
// Style direction:
//   - Products: photorealistic commercial product photography on seamless white, varied per-product
//   - Hero: editorial flat-isometric illustration, no people, no text in image
//   - Services: flat illustrations, consistent line-weight, navy+red on neutrals
//   - About: photographic facility/showroom, no people, no signage

const RED = '#DC2626';
const NAVY = '#14213D';

const PRODUCT_BASE =
  'Photorealistic commercial product photography of a single fire extinguisher on a seamless pure white background, high-end product catalog quality. ' +
  'Shot on a medium-format digital back at f/8 aperture, razor-sharp focus from front to back of the subject. ' +
  'Professional three-point studio lighting: a soft key light from upper-left, gentle fill from the right, and a subtle rim light along the cylinder edge that separates it from the background. ' +
  'Glossy automotive-grade red paint with realistic specular highlights and crisp specular reflections of rectangular softboxes visible on the curved surface, polished chrome valve assembly with detailed micro-reflections, rubber discharge hose with a matte rubber texture and faint horizontal machining ribs visible along its length. ' +
  'Visible macro-detail expected throughout: a fine welded seam line where the dome meets the cylinder body, knurled grip texture on the chrome squeeze-handle, machining grooves where parts are joined, a small red plastic safety pin with a tamper-evident plastic seal threaded through the chrome squeeze-handle at the valve. ' +
  'Any label area on the extinguisher carries the TSK CEYLON brand mark. The TSK CEYLON brand mark is composed of two parts stacked vertically: ' +
  '(a) at the top, a stylized flame icon — a vertical flame shape with multiple upward-pointing tongues, rendered in solid deep navy blue (#14213D), crossed diagonally from upper-right to lower-left by a single smooth curved sash in solid safety red (#DC2626); ' +
  '(b) directly below the flame icon, the wordmark "TSK CEYLON" in bold sans-serif type on a single horizontal line — the letters "TSK" in deep navy (#14213D), the letters "CEYLON" in safety red (#DC2626), no other words and no other characters. ' +
  'The complete brand mark (flame + wordmark) is centred on the label area, sized to occupy roughly the middle 50% of the label width — subtle in size, not dominating the cylinder. The mark is printed cleanly and flat with crisp edges, no shadow, no embossment, no glow. ' +
  'Soft circular contact shadow directly under the base, no floor reflection, no horizon line. ' +
  'Centered composition, the full extinguisher visible from the top of the valve to the base ring. ' +
  'All components physically attached and structurally connected to the cylinder body — no floating parts, no detached nozzles or lances, realistic engineering assembly. ' +
  'No people, no watermarks. ' +
  'The extinguisher cylinder is red unless specified otherwise. ' +
  'FINAL CONSTRAINT — read this carefully: the ONLY text or branding anywhere in the image is the TSK CEYLON brand mark (flame icon plus "TSK CEYLON" wordmark) on the label area, exactly as described above. EVERYTHING ELSE must be free of text and markings — no warning labels, no DANGER signs, no instruction stickers, no safety codes, no inspection tags, no serial numbers, no gauge numerals (the gauge face is graphical only — colored zones and a needle, no digits and no scale marks), no markings on hoses, no markings on lances, no model numbers stamped on valves, no incidental text or characters anywhere. The TSK CEYLON brand mark is the single permitted exception. Spell the wordmark exactly as "TSK CEYLON" — four letters then six letters, separated by a single space, no other spellings, no additional letters, no truncated letters.';

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
      'This is a 6kg ABC dry chemical powder fire extinguisher. The cylinder is broad and squat with a wide-diameter base, characteristic of high-capacity powder units; it sits noticeably wider relative to its height than a CO2 or water cylinder. ' +
      'Front three-quarter angle showing the polished chrome valve assembly and squeeze-grip lever on top, and a black braided discharge hose curving gracefully down the front of the cylinder and terminating in a stout black plastic powder nozzle. The hose is completely uniform matte black with no printing, no white lettering, no specification text, no characters whatsoever on the hose surface — the hose is a plain black tube with only its natural rubber-and-braid texture. ' +
      'A round pressure gauge with a clearly visible dial face is mounted next to the valve: the dial is graphical only, divided into a red zone and a green zone with a fine black needle pointing into the green; absolutely no digits, no numerals, no text on the gauge face — only the colored arc segments and the needle. ' +
      'The TSK CEYLON brand mark sits centred on a clean white background panel on the front of the cylinder, occupying roughly the middle 40% of the cylinder height — DCP has the most label area of all the product variants, so the brand mark reads at full size here with the flame icon clearly stacked above the TSK CEYLON wordmark, the wordmark plainly legible. ' +
      'Heavy-duty industrial appearance, the kind found on a workshop wall or warehouse pillar. ' +
      'All parts firmly connected and structurally plausible.',
  },
  {
    category: 'products',
    slug: 'co2',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a 5kg CO2 carbon dioxide high-pressure fire extinguisher. The cylinder is distinctly tall and narrow compared to powder or foam models, with a thick machined chrome-and-black base ring that sits flat on the ground — the silhouette is reminiscent of an industrial gas cylinder. ' +
      'Slight three-quarter left angle. ' +
      'The defining feature is a large black plastic discharge horn on a swivel joint mounted at the top, connected to the chrome valve by a short rigid black stem rather than a flexible hose. The horn shows visible plastic mould lines running along its length and a thin ribbed cooling-fin pattern near its mouth. A chrome squeeze-grip lever sits at the very top of the valve. ' +
      'The heavy chrome base ring shows fine machining grooves and small ventilation slots cut into its lower edge. ' +
      'Crucially, there is NO pressure gauge on this CO2 extinguisher — CO2 extinguishers do not have a pressure gauge; only the chrome valve, squeeze grip, swivel and horn assembly are visible at the top, with the cylinder body otherwise unbroken by gauge fittings. ' +
      'A slim white background panel sits high on the cylinder near the upper third, carrying the TSK CEYLON brand mark — the flame icon stacked above the TSK CEYLON wordmark, the whole mark scaled compact to fit the narrower panel width but with the wordmark still cleanly readable. ' +
      'Mechanical, precision-engineered, industrial gas-cylinder aesthetic. All parts firmly connected.',
  },
  {
    category: 'products',
    slug: 'foam',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a 9-litre AFFF aqueous film-forming foam fire extinguisher. The cylinder is of medium height, slightly slimmer than a DCP powder unit but not as narrow as a CO2 cylinder, with a uniform straight-walled silhouette. ' +
      'Mostly front-facing camera angle with only the slightest hint of three-quarter perspective to suggest dimension. ' +
      'A horizontal cream-buff coloured band wraps cleanly around the middle of the cylinder (UK colour-coding convention for foam units), bordered by thin red pinstripes top and bottom. Centred horizontally on the cream band sits the TSK CEYLON brand mark — the navy flame icon with red sash on top, and the TSK CEYLON wordmark in two-tone navy-and-red directly below, sized to fit comfortably within the band\'s vertical height with small margins above and below the mark. ' +
      'The chrome valve assembly and squeeze grip are on top with a round pressure gauge next to the valve (gauge dial is graphical only — red and green color zones with a fine needle, no digits or text); a black rubber discharge hose curves down the side and terminates in a wide bell-shaped foam-aerating nozzle that is visibly broader and more cone-like than a simple jet nozzle or a powder nozzle. From the angle, the interior of the foam-aerating nozzle reveals visible internal mixing vanes radiating from a central hub. ' +
      'A subtle matte sheen on the lower cylinder hints at liquid contents inside. All parts firmly connected.',
  },
  {
    category: 'products',
    slug: 'water',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a 9-litre water fire extinguisher. The cylinder is slim and tall — noticeably more slender and taller than a DCP powder unit, with a clean straight-walled profile and a thin base ring. ' +
      'Front three-quarter right angle. ' +
      'A crisp white horizontal band wraps cleanly around the middle of the cylinder (UK colour-coding convention for water units), bordered by thin red pinstripes top and bottom. Centred horizontally on the white band sits the TSK CEYLON brand mark — the navy flame icon with red sash on top, and the TSK CEYLON wordmark in two-tone navy-and-red directly below, sized to fit cleanly within the band\'s vertical height. ' +
      'The chrome valve assembly with squeeze grip is on top, and a round pressure gauge is clearly visible mounted next to the valve — this gauge MUST be present, with a graphical-only dial face showing red and green color zones and a fine black needle pointing into the green; absolutely no digits, no numerals, no text on the gauge face. ' +
      'A black rubber discharge hose curves down the side and ends in a simple narrow jet nozzle — the most minimal, slim, and pointed nozzle of any extinguisher type, with a precision-machined chamfered tip and a small chrome ferrule where the rubber hose meets the nozzle barrel. ' +
      'Clean, economical, minimal aesthetic. All parts firmly connected.',
  },
  {
    category: 'products',
    slug: 'wet-chemical',
    aspectRatio: '1:1',
    prompt:
      `${PRODUCT_BASE} ` +
      'This is a 6-litre Class F wet chemical fire extinguisher for commercial-kitchen fires. The cylinder is slim and tall, similar in proportion to a water extinguisher but slightly shorter, with a yellow horizontal band wrapping the middle (UK colour-coding convention for wet chemical), bordered by thin red pinstripes top and bottom. ' +
      'Centred horizontally on the yellow band sits the TSK CEYLON brand mark — the navy flame icon with red sash on top, and the TSK CEYLON wordmark in two-tone navy-and-red directly below, sized to fit cleanly within the yellow band\'s vertical height. The yellow band (with the brand mark on it) is the ONLY identifier surface on the cylinder — there is NO separate white panel, NO instruction sticker, NO hang tag, NO additional warning label anywhere else on the extinguisher; the TSK CEYLON brand mark on the yellow band is the only printed element on the cylinder body. ' +
      'Slight three-quarter angle. ' +
      'The defining feature is a long stainless-steel applicator lance approximately 35cm long, oriented diagonally upward from the cylinder. The lance has a brushed satin stainless finish with visible longitudinal grain running along its length, catching the studio light. One end of the lance is firmly attached to the end of a short black rubber discharge hose that emerges from the chrome valve at the top of the cylinder; the other end of the lance terminates in a wide round spray "rose" head with a yellow plastic tip, the rose head showing a fine visible pattern of small spray holes arranged in concentric rings on its face. ' +
      'CRITICAL: the lance must be unambiguously, continuously physically connected at both ends — to the rubber hose at one end and to the yellow-tipped rose head at the other — with no gaps, no floating segments, no detached parts anywhere along its length. The complete physical attachment from hose to rose head must be obvious in the image. ' +
      'The chrome valve and squeeze grip sit on top of the cylinder, with a round pressure gauge clearly visible next to the valve (graphical dial only — red and green zones with a needle, no digits, no text). ' +
      'Commercial-kitchen specification appearance, professional catering equipment quality.',
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

  // ---------- PDF-specific banners (16:9 photographic) ----------
  // These feed the company-profile.pdf cover and section bands.
  {
    category: 'pdf',
    slug: 'cover-band',
    aspectRatio: '16:9',
    prompt:
      'Cinematic editorial photograph for a corporate brochure cover. A neatly arranged row of three or four ' +
      'glossy red fire extinguishers stands on a polished dark concrete floor against a deep navy-grey wall, ' +
      'shot from a slight low angle for a confident, premium feel. Dramatic side lighting from the upper-left ' +
      'rakes across the cylinders, producing soft specular highlights on the glossy red paintwork and pulling ' +
      'rich tonal gradation out of the dark background; the right side falls naturally into deep navy shadow ' +
      'for negative space. The atmosphere is moody, editorial, and authoritative — closer to a high-end ' +
      'product magazine spread than a catalogue page. Sharp focus throughout, medium-format quality, ' +
      'shallow ambient haze for depth. ' +
      'No people, no text, no signage, no logos, no brand names anywhere in the frame. ' +
      'Wide horizontal composition; cylinders sit slightly left of centre with generous breathing room ' +
      'on the right for cover typography to land on top of the image without competition.',
  },
  {
    category: 'pdf',
    slug: 'inspection-detail',
    aspectRatio: '16:9',
    prompt:
      'Professional commercial macro photograph for a quality-and-compliance section header. Tight close-up ' +
      'of a clean white inspection service tag hanging on a thin string loop from the chrome squeeze-handle ' +
      'of a glossy red fire extinguisher cylinder; the tag itself is blank (no text, no markings, no codes). ' +
      'Behind the tag, slightly out of focus, the round pressure gauge of the extinguisher is visible — ' +
      'showing only a graphical red-and-green dial with a needle in the green zone, no digits and no text on ' +
      'the gauge face. Natural daylight from the upper-left, sharp focus on the tag with a shallow ' +
      'background falling softly out of focus. Warm, ordered, professional atmosphere — the visual ' +
      'shorthand for routine certified inspection. ' +
      'No people, no other text, no signage, no logos, no brand names. ' +
      'Wide horizontal composition with the tag and gauge sitting in the right two-thirds of the frame ' +
      'and the left third left as soft uncluttered red-cylinder surface for typography to overlay.',
  },
  {
    category: 'pdf',
    slug: 'sectors-banner',
    aspectRatio: '16:9',
    prompt:
      'Editorial wide-shot photograph for a "sectors we serve" section header in a corporate brochure. ' +
      'Interior of a modern commercial corridor or lobby corner: clean light-grey wall on the right with a ' +
      'wall-mounted red fire extinguisher in a chrome bracket as the focal point, a small green-and-white ' +
      'EXIT pictogram arrow above it (graphical only — no readable text), a glass partition reflecting the ' +
      'space on the left, polished tile floor below, and a soft daylight wash from a window out of frame. ' +
      'A subtle hint of industry diversity in the background — a softly out-of-focus suggestion of office ' +
      'furniture and an indoor planter — without ever crowding the composition. Calm, professional, ' +
      'safety-conscious atmosphere. Sharp focus on the extinguisher, gentle bokeh fall-off elsewhere. ' +
      'No people, no readable text, no logos, no brand names. ' +
      'Wide horizontal composition with strong negative space in the upper-left third for a heading to ' +
      'be overlaid in print.',
  },
];

export const aspectToSize = {
  '1:1': { width: 1200, height: 1200 },
  '4:3': { width: 1600, height: 1200 },
  '3:2': { width: 1500, height: 1000 },
  '16:9': { width: 1920, height: 1080 },
};
