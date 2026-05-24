export type PageType = 'home' | 'contact' | 'products' | 'services' | 'about' | 'other';

export interface NavItem { label: string; href: string; }
export interface BusinessHours { days: string; hours: string; }
export interface OpeningHoursSpec { days: string[]; opens: string; closes: string; }

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  phoneDisplay: string;
  phoneHref: string;        // tel: value, e.g. +94112345678
  whatsappNumber: string;   // digits only, e.g. 94771234567
  whatsappMessage: string;
  email: string;
  address: { street: string; city: string; region: string; postalCode: string; country: string; };
  geo: { lat: number; lng: number; };
  mapEmbedUrl: string;
  hours: BusinessHours[];
  openingHours: OpeningHoursSpec[];
  nav: NavItem[];
  web3formsAccessKey: string;
  googleSiteVerification?: string;
  gtagId?: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  fireClasses: string;
  useCases: string;
  sizes: string;
  description: string;
}

export interface Service {
  slug: string;
  name: string;
  description: string;
  points: string[];
}
