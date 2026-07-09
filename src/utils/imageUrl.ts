import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { sanityClient } from './sanityClient';

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: Image) {
  return builder.image(source);
}
