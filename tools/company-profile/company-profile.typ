#import "template.typ": *

#show: conf

// ─────────────────────────────────────────────────────────────────────────────
// Page 1 — Cover (cinematic full-bleed)
// ─────────────────────────────────────────────────────────────────────────────

#page(header: none, footer: none, margin: 0pt, fill: surface)[
  // Full-bleed cinematic hero band — occupies the top ~40% of the page.
  #image(
    "/src/assets/images/pdf/cover-band.webp",
    width: 100%, height: 125mm, fit: "cover",
  )

  // Content area below the image — padded back to normal page rhythm.
  #pad(x: 20mm, top: 12mm, bottom: 16mm)[
    #align(center)[
      // Logo + wordmark cluster
      #image("/src/assets/images/brand/logo.png", height: 12mm)
      #v(0.4em)
      #text(size: 42pt, weight: 900, fill: navy)[TSK]
      #text(size: 42pt, weight: 900, fill: red)[ CEYLON]
      #v(-0.3em)
      #text(size: 9pt, weight: "bold", tracking: 4pt, fill: muted)[
        #upper(site.legalName)
      ]

      #v(0.7em)
      #box(width: 80pt, height: 2pt, fill: red)
      #v(0.35em)
      #text(size: 24pt, weight: 900, fill: navy)[COMPANY PROFILE]
      #v(0.3em)
      #box(width: 80pt, height: 2pt, fill: red)

      #v(0.7em)
      #text(size: 13pt, weight: "bold", fill: navy)[
        Your Trusted Partner in Fire Safety Solutions
      ]
      #v(0.15em)
      #text(size: 11pt, fill: muted, style: "italic")[
        Safety Today, Secure Tomorrow
      ]

      #v(0.9em)
      #block(
        fill: navy, width: 88%,
        inset: (x: 20pt, y: 14pt),
        radius: 6pt,
      )[
        #set text(fill: white, size: 9.5pt)
        #set par(leading: 0.85em)
        #align(left)[
          *Phone* #h(8pt) #site.phoneDisplay \
          *Email* #h(8pt) #site.email \
          *Address* #h(8pt) #site.address.street, #site.address.city,
          #site.address.region #site.address.postalCode, #site.address.country
        ]
      ]
    ]
  ]
]

// ─────────────────────────────────────────────────────────────────────────────
// Page 2 — About Us
// ─────────────────────────────────────────────────────────────────────────────

#image-band("/src/assets/images/about/facility.webp", height: 52mm)
#s-md

#split-title("ABOUT", "US")
#eyebrow("Company Overview")
#s-xs

*#site.legalName* is a Sri Lanka–based company specializing in the supply,
distribution, and servicing of fire safety equipment and industrial safety
solutions. The company was established with the vision of providing reliable
and high-quality fire protection products to businesses, institutions, and
households throughout Sri Lanka.

At TSK Ceylon, safety is our highest priority. We understand the importance of
protecting lives, property, and businesses from fire-related risks. We are
committed to delivering dependable fire safety solutions that meet modern
safety standards and customer expectations.

Our company focuses on customer satisfaction, quality assurance, and long-term
business relationships. Through professional service, affordable pricing, and
a commitment to excellence, TSK Ceylon aims to become one of the leading names
in the fire safety industry in Sri Lanka.

#s-md
#eyebrow("Our Four Pillars")
#s-xs

#grid(
  columns: (1fr, 1fr, 1fr, 1fr),
  gutter: 12pt,
  pillar("◆", "Safety Focus",
    [Protecting lives, property, and businesses through effective fire safety solutions.]),
  pillar("●", "Customer Satisfaction",
    [Exceeding customer expectations with quality products and reliable services.]),
  pillar("★", "Quality Assurance",
    [Supplying quality-tested products and dependable services that meet industry standards.]),
  pillar("▲", "Continuous Growth",
    [Expanding our capabilities and improving our services for a safer tomorrow.]),
)

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 3 — Vision, Mission & Core Values
// ─────────────────────────────────────────────────────────────────────────────

#split-title("VISION, MISSION", "& CORE VALUES")

At *#site.legalName*, our vision, mission and core values guide everything we
do. They reflect our commitment to safety, quality, and the trust of our
customers.

#s-md
#two-col(
  navy-header-card("Our Vision",
    [To become a trusted and leading provider of fire safety solutions in Sri
     Lanka by delivering reliable products, professional services, and
     innovative safety solutions that protect lives and property.]),
  red-header-card("Our Mission",
    [To provide high-quality fire safety equipment and dependable customer
     service at affordable prices while maintaining strong safety standards,
     professionalism, and customer trust.]),
)

#s-lg
#eyebrow("Our Core Values")
#s-sm

#grid(
  columns: (1fr, 1fr, 1fr, 1fr, 1fr),
  gutter: 12pt,
  pillar("◆", "Safety First",
    [Safety is at the centre of everything we do — protecting people, businesses, and property.]),
  pillar("●", "Customer Trust",
    [Honesty, reliability, and strong relationships are central to our work.]),
  pillar("★", "Quality Assurance",
    [Quality-tested products and dependable services that meet industry expectations.]),
  pillar("◆", "Reliability",
    [Consistent, professional, and timely services for every client.]),
  pillar("⚖", "Integrity",
    [Professionalism, transparency, and ethical responsibility in everything we do.]),
)

#s-lg
#navy-quote([
  Our values are the foundation of our business and the reason our customers
  trust us for their fire safety needs.
])

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 4 — Nature of Business
// ─────────────────────────────────────────────────────────────────────────────

#split-title("NATURE", "OF BUSINESS")

*#site.legalName* operates mainly in the field of fire protection and
industrial safety solutions. We provide products and services designed to
improve workplace and environmental safety.

#s-md
#two-col(
  [
    #eyebrow("Service Lines")
    #s-xs
    #value-card("1. Fire Safety Equipment Supply",
      [Fire extinguishers and related fire protection equipment for homes,
       offices, factories, shops, warehouses, and industrial facilities.])
    #v(5pt)
    #value-card("2. Fire Extinguisher Sales & Refilling",
      [New fire extinguishers and professional refilling services to keep
       equipment functional and compliant with safety requirements.])
    #v(5pt)
    #value-card("3. Safety Signage & Stickers",
      [Safety stickers, warning labels, and fire safety signage to help
       organizations maintain safety awareness and compliance.])
    #v(5pt)
    #value-card("4. Industrial & Commercial Safety Solutions",
      [Safety-related products and consultation services tailored to
       commercial and industrial fire protection requirements.])
    #v(5pt)
    #value-card("5. Installation & Maintenance Services",
      [Installation support and maintenance guidance for fire safety
       equipment, on-site and off.])
  ],
  red-header-card("Our Key Focus",
    checklist((
      [Improving fire safety standards],
      [Reducing fire-related risks],
      [Providing quality products and services],
      [Ensuring customer satisfaction],
      [Creating a safer environment for businesses and communities],
    ))),
)

#s-md
#eyebrow("Our Business Promise")
#s-xs

#grid(
  columns: (1fr, 1fr, 1fr, 1fr, 1fr),
  gutter: 12pt,
  pillar("◆", "Safety",
    [We prioritize safety in every solution we offer.]),
  pillar("★", "Quality",
    [Quality-tested products and dependable services.]),
  pillar("●", "Professionalism",
    [Professional support with integrity and responsibility.]),
  pillar("◐", "Reliability",
    [Committed to timely service and customer trust.]),
  pillar("⚐", "Partnership",
    [Building long-term relationships with our customers.]),
)

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 5 — Our Products (image-led grid)
// ─────────────────────────────────────────────────────────────────────────────

#split-title("OUR", "PRODUCTS")

*#site.legalName* supplies a comprehensive range of high-quality fire
extinguishers and supporting safety equipment — certified, durable, and
suited to every environment.

#s-md
#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  row-gutter: 10pt,
  image-card(
    "/src/assets/images/products/dcp.webp",
    "Dry Powder (DCP / ABC)",
    [Class A, B, C — the most versatile choice for offices, vehicles, and general-purpose use. Available 1–9 kg.],
    accent: navy,
  ),
  image-card(
    "/src/assets/images/products/co2.webp",
    "Carbon Dioxide (CO₂)",
    [Class B and electrical fires — leaves no residue. Ideal for server rooms, labs, and electronics. 2–5 kg.],
    accent: red,
  ),
  image-card(
    "/src/assets/images/products/foam.webp",
    "Foam (AFFF)",
    [Class A and B — smothers flammable-liquid fires and cools solids. For warehouses and workshops. 6 L · 9 L.],
    accent: navy,
  ),
  image-card(
    "/src/assets/images/products/water.webp",
    "Water",
    [Class A — economical and effective on wood, paper, and textiles. Schools, offices, storage. 6 L · 9 L.],
    accent: red,
  ),
  image-card(
    "/src/assets/images/products/wet-chemical.webp",
    "Wet Chemical",
    [Class F — purpose-built for deep-fat fryer and cooking-oil fires in commercial kitchens. 3 L · 6 L.],
    accent: navy,
  ),
  block(
    fill: surface,
    stroke: 0.5pt + line-color,
    radius: 4pt,
    inset: 12pt,
    width: 100%,
  )[
    #text(size: 9.5pt, weight: 900, fill: red-dark)[#upper("Safety Equipment & Accessories")]
    #v(0.3em)
    #text(size: 8.5pt, fill: ink)[
      Beyond extinguishers, we supply the full safety ecosystem:
    ]
    #v(0.3em)
    • Safety signs & warning boards \
    • Fire safety stickers \
    • Emergency safety accessories \
    • Industrial safety products
    #v(0.4em)
    #text(size: 8pt, fill: muted, style: "italic")[
      All products certified, durability-tested, and matched to your environment.
    ]
  ],
)

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 6 — Our Services (image-led grid)
// ─────────────────────────────────────────────────────────────────────────────

#split-title("OUR", "SERVICES")

Beyond supply, *#site.legalName* delivers the full lifecycle of fire safety
services — installation, inspection, refilling, training, and design — to
keep your equipment reliable year after year.

#s-md
#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  row-gutter: 10pt,
  image-card(
    "/src/assets/images/services/installation.webp",
    "Installation",
    [On-site installation of fire extinguishers in chrome wall brackets, with signage and placement guidance.],
    accent: red,
  ),
  image-card(
    "/src/assets/images/services/refilling.webp",
    "Refilling",
    [Professional extinguisher refilling with full inspection and pressure testing to safety standards.],
    accent: navy,
  ),
  image-card(
    "/src/assets/images/services/maintenance.webp",
    "Inspection & Maintenance",
    [Scheduled checks, service tags, and gauge inspections to keep your equipment compliant and ready.],
    accent: red,
  ),
  image-card(
    "/src/assets/images/services/training.webp",
    "Fire Training",
    [Practical training programs that teach staff safe evacuation and correct extinguisher technique.],
    accent: navy,
  ),
)

#s-md
#two-col(
  value-card("Consultation",
    [Expert guidance on selecting the right fire protection equipment for your building, industry, and risk profile.],
    accent: navy),
  value-card("Fire System Design",
    [Professional fire protection system design tailored to building type, occupancy, and safety requirements.],
    accent: red),
)

#s-md
#navy-quote([
  Quality Products. Professional Services. Complete Safety Solutions.
])

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 7 — Sectors We Serve
// ─────────────────────────────────────────────────────────────────────────────

#image-band("/src/assets/images/pdf/sectors-banner.webp", height: 48mm)
#s-md

#split-title("SECTORS WE", "SERVE")

*#site.legalName* serves a wide range of sectors with fire safety solutions
tailored to each industry's unique requirements.

#s-sm
#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  row-gutter: 10pt,
  value-card("Commercial Buildings", accent: navy,
    [Office buildings, business centres, and multi-storey complexes — fire
     safety equipment for safe working environments.]),
  value-card("Industrial & Manufacturing", accent: red,
    [Factories and manufacturing plants — solutions to protect workers,
     equipment, and assets from fire hazards.]),
  value-card("Retail & Shopping Centres", accent: navy,
    [Retail outlets and shopping complexes — fire protection systems,
     equipment, and maintenance for public safety.]),
  value-card("Educational Institutions", accent: red,
    [Schools, colleges, and training centres — equipment and training
     programs for a safer learning environment.]),
  value-card("Healthcare Facilities", accent: navy,
    [Hospitals, clinics, and medical centres — reliable solutions to protect
     patients and staff.]),
  value-card("Hotels & Hospitality", accent: red,
    [Hotels, resorts, and restaurants — systems and services that protect
     guests and employees at all times.]),
  value-card("Government & Public Sector", accent: navy,
    [Government offices, public buildings, and infrastructure — quality
     equipment and maintenance services.]),
  value-card("Residential Complexes", accent: red,
    [Residential complexes and apartments — extinguishers, alarms, and
     safety equipment to protect families and property.]),
)

#s-md
#block(
  fill: navy, width: 100%,
  inset: (x: 16pt, y: 13pt),
  radius: 4pt,
)[
  #set text(fill: white)
  #align(center)[
    #grid(
      columns: (1fr, 1fr, 1fr, 1fr),
      gutter: 12pt,
      [#text(size: 9.5pt, weight: 900, fill: white)[COMMITTED TO\ EVERY SECTOR]],
      [#text(size: 9.5pt, weight: 900, fill: white)[DIVERSE INDUSTRY\ EXPERIENCE]],
      [#text(size: 9.5pt, weight: 900, fill: white)[TAILORED SAFETY\ SOLUTIONS]],
      [#text(size: 9.5pt, weight: 900, fill: white)[FOCUS ON SAFETY,\ ALWAYS]],
    )
  ]
]

#s-md
#align(center)[
  #text(size: 11pt, weight: 900, fill: navy)[
    WHEREVER YOU ARE, WHATEVER YOUR INDUSTRY, \
    TSK CEYLON IS YOUR FIRE SAFETY PARTNER.
  ]
  #v(0.3em)
  #text(size: 10pt, fill: muted)[
    We deliver solutions that protect lives, property, and businesses across Sri Lanka.
  ]
]

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 8 — Competitive Advantages
// ─────────────────────────────────────────────────────────────────────────────

#split-title("COMPETITIVE", "ADVANTAGES")
#text(size: 13pt, weight: 900, fill: navy)[Why Choose TSK Ceylon?]
#s-xs

At *#site.legalName*, we focus on delivering value, quality, and reliability
through our products, services, and customer relationships.

#s-md
#grid(
  columns: (1fr, 1fr),
  gutter: 12pt,
  row-gutter: 10pt,
  numbered-card("01", "High-Quality Products",
    [Dependable, quality-tested fire safety products that comply with industry standards for maximum protection.],
    accent: navy),
  numbered-card("04", "Fast Response",
    [Our team is committed to responding quickly to customer inquiries, orders, and service requests.],
    accent: red),
  numbered-card("02", "Affordable Pricing",
    [Cost-effective fire safety solutions without compromising on quality, helping you stay safe within budget.],
    accent: navy),
  numbered-card("05", "Long-Term Relationships",
    [Strong partnerships based on trust, honesty, and consistent support. We grow with our customers.],
    accent: red),
  numbered-card("03", "Professional Service",
    [Customer-focused approach with experienced staff, friendly communication, and dependable service.],
    accent: navy),
  numbered-card("06", "Commitment to Safety",
    [Every product and service focused on improving safety standards and reducing fire-related risks.],
    accent: red),
)

#s-md
#block(
  fill: surface,
  stroke: 0.5pt + line-color,
  inset: 14pt, radius: 4pt, width: 100%,
)[
  #text(size: 11pt, weight: 900, fill: navy)[YOUR SAFETY IS OUR PRIORITY]
  #s-xs
  #checklist((
    [Reliable products you can trust],
    [Professional team you can rely on],
    [Solutions that fit your needs],
    [Support that continues beyond the sale],
    [A partner committed to a safer Sri Lanka],
  ))
]

#s-md
#quote-band([
  Quality is our strength. Safety is our commitment. You are our priority.
])

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 9 — Commitment & Future Development
// ─────────────────────────────────────────────────────────────────────────────

#split-title("COMMITMENT &", "FUTURE DEVELOPMENT")

At *#site.legalName*, our commitment goes beyond today. We continuously invest
in our people, products, and services to build a safer tomorrow for Sri Lanka.

#s-md
#two-col(
  red-header-card("Our Commitment", [
    We are committed to protecting lives, property, and the environment by
    delivering reliable fire safety solutions.
    #v(0.5em)
    #value-card("Safety First", accent: navy,
      [We prioritize safety in our products, services, and workplace.])
    #v(5pt)
    #value-card("Quality Assured", accent: navy,
      [Only the best quality, tested and trusted products.])
    #v(5pt)
    #value-card("Responsible Business", accent: navy,
      [Ethical business practices that care for community and environment.])
    #v(5pt)
    #value-card("Customer Satisfaction", accent: navy,
      [We listen, understand, and deliver solutions that exceed expectations.])
    #v(5pt)
    #value-card("Continuous Improvement", accent: navy,
      [Constantly learning, innovating, and improving our systems and services.])
  ]),
  red-header-card("Our Future Development Plan", [
    #value-card("Expand Product Portfolio", accent: red,
      [Introducing advanced and innovative fire safety products to meet evolving industry needs.])
    #v(5pt)
    #value-card("Strengthen Partnerships", accent: red,
      [Stronger relationships with global brands, suppliers, and local partners.])
    #v(5pt)
    #value-card("Invest in Our People", accent: red,
      [Ongoing training and development to build a skilled, motivated team.])
    #v(5pt)
    #value-card("Expand Our Reach", accent: red,
      [Extending services across Sri Lanka and exploring regional opportunities.])
    #v(5pt)
    #value-card("Technology & Sustainability", accent: red,
      [Modern technologies and sustainable practices for smarter, greener solutions.])
  ]),
)

#s-md
#navy-quote([
  Together, we build a safer Sri Lanka.
])

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 10 — Quality & Compliance
// ─────────────────────────────────────────────────────────────────────────────

#image-band("/src/assets/images/pdf/inspection-detail.webp", height: 32mm)
#s-md

#split-title("QUALITY &", "COMPLIANCE")

At *#site.legalName*, quality and reliability are essential. Every product
and service is delivered with a strong focus on safety, durability, and
customer confidence.

#s-md
#two-col(
  [
    #navy-header-card("Quality Standards", [
      We work closely with trusted suppliers and industry partners to ensure
      our customers receive dependable products that meet accepted safety
      standards. Our commitment to quality helps us build long-term trust and
      deliver consistent value to every customer we serve.
    ])
    #s-sm
    #red-header-card("Our Quality Commitments", [
      #value-card("Quality-Tested Products", accent: navy,
        [Equipment selected from reliable manufacturers, quality-tested.])
      #v(4pt)
      #value-card("Professional Standards", accent: navy,
        [Trained team delivering efficient, customer-focused services.])
      #v(4pt)
      #value-card("Customer Satisfaction", accent: navy,
        [Listening, understanding, and delivering on expectations.])
      #v(4pt)
      #value-card("Dependable Support", accent: navy,
        [Reliable after-sales support, maintenance guidance, and assistance.])
    ])
  ],
  [
    #navy-header-card("Safety Compliance", [
      TSK Ceylon promotes the importance of proper fire safety practices in
      workplaces, commercial buildings, and residential environments.
      #v(0.6em)
      #checklist((
        [Regular inspection and maintenance of fire safety equipment],
        [Products meeting relevant safety requirements and industry expectations],
        [Supporting organisations in maintaining safe working environments],
        [Following best practices for reliability, safety, and compliance],
        [Committed to protecting lives, property, and businesses],
      ))
    ])
    #s-sm
    #block(
      fill: surface,
      stroke: 0.5pt + line-color,
      inset: 14pt, radius: 4pt,
    )[
      #text(size: 11pt, weight: 900, fill: navy)[OUR QUALITY PHILOSOPHY]
      #v(0.35em)
      #text(size: 9.5pt, fill: ink)[
        Quality is not just a standard we follow — it is a promise we deliver.
        We are dedicated to continuous improvement, strong partnerships, and
        providing safe, reliable, and effective fire protection solutions.
      ]
    ]
  ],
)

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 11 — Why Choose TSK Ceylon
// ─────────────────────────────────────────────────────────────────────────────

#split-title("WHY CHOOSE", "TSK CEYLON?")

At *#site.legalName*, we go beyond supplying products. We deliver complete
fire safety solutions backed by experience, dedication, and a customer-first
approach.

#s-md
#two-col(
  [
    #numbered-card("01", "Experience You Can Trust",
      [Industry knowledge and hands-on experience — solutions you can rely on.],
      accent: navy)
    #v(5pt)
    #numbered-card("02", "Quality Products",
      [High-quality, certified products from trusted brands meeting international standards.],
      accent: red)
    #v(5pt)
    #numbered-card("03", "Customer-Focused Approach",
      [We listen, understand, and provide solutions that meet your exact requirements.],
      accent: navy)
    #v(5pt)
    #numbered-card("04", "Fast & Reliable Service",
      [Quick response, on-time delivery, and efficient after-sales support.],
      accent: red)
    #v(5pt)
    #numbered-card("05", "Professional Team",
      [Trained, experienced team providing expert advice, installation, and maintenance.],
      accent: navy)
    #v(5pt)
    #numbered-card("06", "Competitive Pricing",
      [Cost-effective solutions without compromising on quality.],
      accent: red)
    #v(5pt)
    #numbered-card("07", "Commitment to Safety",
      [Protecting lives, property, and businesses with dependable solutions.],
      accent: navy)
  ],
  [
    #navy-header-card("The TSK Ceylon Difference",
      checklist((
        [One-stop fire safety solutions — from supply to support],
        [Wide range of products and services under one roof],
        [Solutions tailored to your industry and environment],
        [Strong focus on quality, safety, and compliance],
        [Long-term partnerships built on trust and integrity],
        [Dedicated to building a safer Sri Lanka],
      )))
    #s-md
    #block(
      fill: surface, stroke: 1pt + red,
      inset: 14pt, radius: 4pt,
    )[
      #set text(fill: red-dark)
      #align(center)[
        #text(size: 11pt, weight: 900, style: "italic")[
          " When it comes to fire safety, there is no room for compromise.
          Choose TSK Ceylon — Your Safety, Our Priority. "
        ]
      ]
    ]
    #s-md
    #block(
      fill: navy, width: 100%,
      inset: 14pt, radius: 4pt,
    )[
      #set text(fill: white)
      *YOUR TRUST. OUR RESPONSIBILITY.* \
      #v(0.3em)
      #text(size: 9pt)[
        We are not just a supplier — we are your partner in creating safer
        environments for today and a secure tomorrow.
      ]
    ]
  ],
)

#pagebreak()

// ─────────────────────────────────────────────────────────────────────────────
// Page 12 — Contact Information
// ─────────────────────────────────────────────────────────────────────────────

#image-band("/src/assets/images/about/facility.webp", height: 42mm)
#s-md

#split-title("CONTACT", "INFORMATION")

We are always ready to serve you with reliable products, professional
services, and expert support. *Get in touch with TSK Ceylon today!*

#s-sm
#two-col(
  red-header-card("Get in Touch", [
    #grid(
      columns: (auto, 1fr),
      gutter: 12pt,
      row-gutter: 9pt,
      align: (left, left),
      text(size: 9pt, weight: 900, fill: navy)[ADDRESS],
      text(size: 9.5pt)[#site.address.street, #site.address.city, #site.address.region #site.address.postalCode, #site.address.country],
      text(size: 9pt, weight: 900, fill: navy)[PHONE],
      text(size: 9.5pt)[#site.phoneDisplay],
      text(size: 9pt, weight: 900, fill: navy)[EMAIL],
      text(size: 9.5pt)[#site.email],
      text(size: 9pt, weight: 900, fill: navy)[WEBSITE],
      text(size: 9.5pt)[#site.url.replace("https://", "")],
      text(size: 9pt, weight: 900, fill: navy)[FOLLOW US],
      text(size: 9.5pt)[Stay connected for updates and safety tips.],
    )
  ]),
  navy-header-card("Working Hours", [
    #table(
      columns: (1fr, auto),
      stroke: none,
      inset: (x: 0pt, y: 5pt),
      align: (left, right),
      text(weight: "bold")[Monday – Friday], [8:30 AM – 5:30 PM],
      text(weight: "bold")[Saturday], [8:30 AM – 1:00 PM],
      text(weight: "bold")[Sunday & Holidays], [By appointment],
    )
    #s-sm
    #block(
      fill: red, width: 100%,
      inset: 12pt, radius: 4pt,
    )[
      #set text(fill: white)
      #align(center)[
        *24 / 7 EMERGENCY SUPPORT* \
        #text(size: 13pt, weight: 900)[#site.phoneDisplay]
      ]
    ]
  ]),
)

#s-md
#red-header-card("We Serve Across Sri Lanka",
  [From the North to the South and East to the West, we are committed to
   delivering safety solutions wherever you are.])

#s-md
#block(
  fill: surface,
  stroke: 1pt + navy,
  inset: 16pt, radius: 4pt, width: 100%,
)[
  #align(center)[
    #text(size: 14pt, weight: 900, fill: navy)[
      THANK YOU FOR CHOOSING #text(fill: red)[TSK CEYLON]
    ]
    #v(0.3em)
    #text(size: 10.5pt, style: "italic", fill: muted)[
      Your Safety is Our Priority.
    ]
    #v(0.5em)
    #text(size: 10pt, fill: ink)[
      Together, let's build a safer and secure Sri Lanka.
    ]
  ]
]

#s-sm
#block(
  fill: navy, width: 100%,
  inset: 14pt, radius: 4pt,
)[
  #set text(fill: white, size: 9pt)
  #grid(
    columns: (1fr, 1fr, 1fr, 1fr),
    align: center,
    [*YOUR SAFETY* \ #text(size: 8pt, fill: rgb("#CBD5E1"))[Our Mission]],
    [*YOUR TRUST* \ #text(size: 8pt, fill: rgb("#CBD5E1"))[Our Motivation]],
    [*YOUR SATISFACTION* \ #text(size: 8pt, fill: rgb("#CBD5E1"))[Our Commitment]],
    [*A SAFER TOMORROW* \ #text(size: 8pt, fill: rgb("#CBD5E1"))[Our Goal]],
  )
]
