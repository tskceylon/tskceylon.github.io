import type { ImageMetadata } from 'astro';

import dcp from '../assets/images/products/dcp.webp';
import co2 from '../assets/images/products/co2.webp';
import foam from '../assets/images/products/foam.webp';
import water from '../assets/images/products/water.webp';
import wetChemical from '../assets/images/products/wet-chemical.webp';

import refilling from '../assets/images/services/refilling.webp';
import maintenance from '../assets/images/services/maintenance.webp';
import installation from '../assets/images/services/installation.webp';
import training from '../assets/images/services/training.webp';

import heroScene from '../assets/images/hero/scene.webp';
import aboutFacility from '../assets/images/about/facility.webp';

export const productImages: Record<string, ImageMetadata> = {
  dcp,
  co2,
  foam,
  water,
  'wet-chemical': wetChemical,
};

export const serviceImages: Record<string, ImageMetadata> = {
  refilling,
  maintenance,
  installation,
  training,
};

export const heroImage: ImageMetadata = heroScene;
export const facilityImage: ImageMetadata = aboutFacility;
