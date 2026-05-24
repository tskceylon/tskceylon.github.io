// TSK Ceylon company-profile PDF — brand tokens + reusable helpers.
// Colours align with src/styles/global.css so web + PDF stay consistent.

#let navy = rgb("#14213D")
#let navy-soft = rgb("#1E3050")
#let red = rgb("#DC2626")
#let red-dark = rgb("#B91C1C")
#let ink = rgb("#1F2937")
#let muted = rgb("#475569")
#let surface = rgb("#FFFFFF")
#let surface-alt = rgb("#EEF2F7")
#let line-color = rgb("#E5E7EB")
#let page-bg = rgb("#F4F7FA")

// Marshalled at build time from src/data/site.ts by build.mjs.
#let site = json("site.json")

// Address composer that hides an empty postalCode (otherwise the join
// produces "Western Province , Sri Lanka" with a stray space).
#let formatted-address = {
  let pc = if site.address.postalCode != "" { " " + site.address.postalCode } else { "" }
  [#site.address.street, #site.address.city, #site.address.region#pc, #site.address.country]
}

// ── Spacing rhythm ───────────────────────────────────────────────────────────
// Vertical spacing tokens — use these instead of ad-hoc v() calls so the
// document keeps a consistent rhythm across all pages.

#let s-xs = v(0.35em)  // tight: between eyebrow + content, micro-rows
#let s-sm = v(0.55em)  // small: between paragraphs, after eyebrows
#let s-md = v(0.85em)  // default: between content blocks within a page
#let s-lg = v(1.25em)  // section: between major page sections
#let s-xl = v(1.8em)   // hero / cover-grade gaps

// ── Page chrome ──────────────────────────────────────────────────────────────

#let page-header(num) = block(
  width: 100%,
  inset: (bottom: 8pt),
  stroke: (bottom: 0.5pt + line-color),
)[
  #grid(
    columns: (1fr, 1fr),
    align: (left, right),
    [
      #text(size: 28pt, weight: 900, fill: navy)[#num]
      #v(-0.5em)
      #box(width: 22pt, height: 2pt, fill: red)
      #v(0.1em)
      #text(size: 8pt, weight: "bold", tracking: 2pt, fill: red-dark)[COMPANY PROFILE]
    ],
    align(right + horizon)[
      #text(size: 12pt, weight: 700, fill: navy, tracking: 0.5pt)[TSK]
      #text(size: 12pt, weight: 700, fill: red, tracking: 0.5pt)[ CEYLON]
    ],
  )
]

#let page-footer() = block(
  fill: navy,
  width: 100%,
  inset: (x: 15pt, y: 10pt),
  radius: 4pt,
)[
  #set text(size: 8.5pt, fill: white)
  #grid(
    columns: (1fr, auto),
    align: (left, right),
    [
      *#site.legalName* — _Safety Today, Secure Tomorrow_
    ],
    [
      #site.phoneDisplay
      #h(8pt) · #h(8pt)
      #site.email
    ],
  )
  #v(2pt)
  #text(size: 7.5pt, fill: rgb("#CBD5E1"))[
    #formatted-address
  ]
]

// ── Type & layout helpers ────────────────────────────────────────────────────

#let split-title(navy-part, red-part) = block(below: 0.7em)[
  #text(size: 24pt, weight: 900, fill: navy)[#navy-part]
  #text(size: 24pt, weight: 900, fill: red)[ #red-part]
]

#let eyebrow(label) = text(
  size: 8pt, weight: "bold", tracking: 2pt, fill: red-dark,
)[#upper(label)]

#let intro(body) = block(
  below: 1em,
  text(size: 10.5pt, fill: muted)[#body],
)

// Pillar: small circular badge + title + body. Used in 4/5-up icon rows.
// `breakable: false` keeps the badge + title + body together when the row
// straddles a page break — otherwise Typst would split the column mid-pillar.
#let pillar(glyph, title, body) = block(breakable: false, align(center)[
  #box(
    width: 36pt, height: 36pt,
    fill: red, radius: 50%,
    inset: 0pt,
  )[
    #align(center + horizon)[
      #text(size: 16pt, fill: white, weight: 900)[#glyph]
    ]
  ]
  #v(0.45em)
  #text(size: 9pt, weight: 900, fill: navy)[#upper(title)]
  #v(0.15em)
  #text(size: 8pt, fill: muted)[#body]
])

// Value card with a coloured accent rail on the left.
#let value-card(title, body, accent: navy) = block(
  fill: surface,
  stroke: (left: 3pt + accent, rest: 0.5pt + line-color),
  inset: (x: 13pt, y: 11pt),
  radius: 4pt,
  width: 100%,
)[
  #text(size: 10pt, weight: 900, fill: accent)[#upper(title)]
  #v(0.2em)
  #text(size: 9pt, fill: ink)[#body]
]

// Numbered pennant card (used on Why-Choose-Us / Competitive Advantages).
// `breakable: false` keeps the number badge + title + body together.
#let numbered-card(num, title, body, accent: navy) = block(
  fill: surface,
  stroke: 0.5pt + line-color,
  inset: (x: 13pt, y: 11pt),
  radius: 4pt,
  width: 100%,
  breakable: false,
)[
  #grid(
    columns: (auto, 1fr),
    gutter: 11pt,
    align: (top, top),
    box(
      fill: accent, inset: (x: 6pt, y: 3pt), radius: 3pt,
    )[
      #text(size: 11pt, weight: 900, fill: white)[#num]
    ],
    [
      #text(size: 10pt, weight: 900, fill: red-dark)[#upper(title)]
      #v(0.2em)
      #text(size: 9pt, fill: ink)[#body]
    ],
  )
]

// Red pull-quote band (full width).
#let quote-band(body) = block(
  fill: red, width: 100%,
  inset: (x: 20pt, y: 14pt),
  radius: 4pt,
)[
  #align(center)[
    #text(size: 12pt, weight: "bold", style: "italic", fill: white)[
      " #body "
    ]
  ]
]

// Navy pull-quote band (alternate accent).
#let navy-quote(body) = block(
  fill: navy, width: 100%,
  inset: (x: 20pt, y: 14pt),
  radius: 4pt,
)[
  #align(center)[
    #text(size: 12pt, weight: "bold", style: "italic", fill: white)[
      " #body "
    ]
  ]
]

// Checklist with red ticks. `items` is an array of strings or content.
#let checklist(items) = {
  for item in items {
    grid(
      columns: (auto, 1fr),
      gutter: 8pt,
      align: (top, top),
      text(size: 10pt, fill: red, weight: 900)[✓],
      text(size: 10pt, fill: ink)[#item],
    )
    v(0.25em)
  }
}

// Card wrapper with red header strip.
#let red-header-card(title, body) = block(
  fill: surface,
  stroke: 0.5pt + line-color,
  radius: 4pt,
  width: 100%,
  inset: 0pt,
)[
  #block(fill: red, inset: (x: 13pt, y: 7pt), width: 100%)[
    #text(size: 10pt, weight: 900, fill: white)[#upper(title)]
  ]
  #block(inset: 13pt)[#body]
]

// Card wrapper with navy header strip.
#let navy-header-card(title, body) = block(
  fill: surface,
  stroke: 0.5pt + line-color,
  radius: 4pt,
  width: 100%,
  inset: 0pt,
)[
  #block(fill: navy, inset: (x: 13pt, y: 7pt), width: 100%)[
    #text(size: 10pt, weight: 900, fill: white)[#upper(title)]
  ]
  #block(inset: 13pt)[#body]
]

// Two-column layout helper.
#let two-col(left, right, ratio: (1fr, 1fr), gutter: 14pt) = grid(
  columns: ratio,
  gutter: gutter,
  align: (top, top),
  left, right,
)

// ── Image helpers ────────────────────────────────────────────────────────────

// Full-width rounded photographic band used at the top of section pages.
#let image-band(path, height: 60mm, radius: 4pt) = box(
  width: 100%,
  height: height,
  radius: radius,
  clip: true,
  image(path, width: 100%, height: height, fit: "cover"),
)

// Image card: photo on top with rounded corners, title + body underneath.
// Used in the products and services grids on pages 5 and 6.
// `breakable: false` so the image never gets separated from its caption.
#let image-card(path, title, body, image-height: 50mm, accent: navy) = block(
  fill: surface,
  stroke: 0.5pt + line-color,
  radius: 4pt,
  width: 100%,
  inset: 0pt,
  breakable: false,
)[
  #box(
    width: 100%,
    height: image-height,
    radius: (top-left: 4pt, top-right: 4pt),
    clip: true,
    image(path, width: 100%, height: image-height, fit: "cover"),
  )
  #block(inset: (x: 11pt, y: 8pt))[
    #text(size: 9.5pt, weight: 900, fill: accent)[#upper(title)]
    #v(0.2em)
    #text(size: 8.5pt, fill: ink)[#body]
  ]
]

// ── Document setup ───────────────────────────────────────────────────────────

#let conf(doc) = {
  set page(
    paper: "a4",
    margin: (x: 20mm, top: 18mm, bottom: 22mm),
    fill: page-bg,
    header: context {
      let n = counter(page).get().first()
      if n == 1 { none } else {
        let padded = if n < 10 { "0" + str(n) } else { str(n) }
        page-header(padded)
      }
    },
    footer: context {
      let n = counter(page).get().first()
      if n == 1 { none } else { page-footer() }
    },
    header-ascent: 12pt,
    footer-descent: 9pt,
  )
  set text(font: ("Inter", "Helvetica", "Arial"), size: 10.5pt, fill: ink)
  set par(justify: false, leading: 0.65em)
  show heading.where(level: 1): it => block(below: 0.7em)[
    #text(size: 20pt, weight: 900, fill: navy)[#it.body]
  ]
  show heading.where(level: 2): it => block(above: 0.9em, below: 0.4em)[
    #text(size: 13pt, weight: 900, fill: navy)[#it.body]
  ]
  show heading.where(level: 3): it => block(above: 0.7em, below: 0.25em)[
    #text(size: 10pt, weight: 900, fill: red-dark)[#upper(it.body)]
  ]
  doc
}
