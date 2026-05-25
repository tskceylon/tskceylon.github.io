import type { SiteConfig } from './types';

export const site: SiteConfig = {
  name: 'TSK Ceylon',
  legalName: 'TSK CEYLON (PVT) LTD',
  tagline: 'Certified Fire Extinguishers & Servicing in Sri Lanka',
  description:
    'TSK Ceylon supplies, installs and services certified fire extinguishers for offices, factories, hotels and homes across Sri Lanka. Request a quote today.',
  url: 'https://tskceylon.com',
  phoneDisplay: '077 933 2250',
  phoneHref: '+94779332250',
  whatsappNumber: '94779332250',
  whatsappMessage: 'Hello TSK Ceylon, I would like a quote for fire extinguishers.',
  email: 'tskceylonpvt@gmail.com',
  address: {
    street: '100/H/4, Sama Mawatha, Niwanthiya',
    city: 'Piliyandala',
    region: 'Western Province',
    postalCode: '',
    country: 'Sri Lanka',
  },
  geo: { lat: 6.9271, lng: 79.8612 },       // PLACEHOLDER — shop coordinates
  // PLACEHOLDER — replace with the Google Maps "Embed a map" iframe src for the real address
  mapEmbedUrl:
    'https://www.google.com/maps?q=100%2FH%2F4%20Sama%20Mawatha%20Niwanthiya%20Piliyandala%20Sri%20Lanka&output=embed',
  hours: [
    { days: 'Monday – Friday', hours: '8:30 AM – 5:30 PM' },
    { days: 'Saturday', hours: '9:00 AM – 1:00 PM' },
    { days: 'Sunday & Holidays', hours: 'Closed' },
  ],
  openingHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:30', closes: '17:30' },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  // PLACEHOLDER — free key from https://web3forms.com (no account; arrives by email).
  // Web3Forms access keys are designed to be public/client-side safe.
  web3formsAccessKey: 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY',
  // Paste the `content` value of the Google Search Console HTML-tag verification.
  googleSiteVerification: '',
  // GA4 Measurement ID (e.g. 'G-XXXXXXXXXX'). Loads only in production builds.
  gtagId: '',
};
