import type { SanityCaseStudy } from '../types/sanity';
import { urlFor } from './imageUrl';

/**
 * The cover for a case study's arch. Sanity's `coverImage` wins; until those
 * are set, real stills from the media index stand in for the projects we
 * have frames for (never stock). Returns `undefined` when there's nothing —
 * the arch then renders as a colour field.
 */
export interface CoverImage {
  src: string;
  srcSet?: string;
  sizes?: string;
  alt?: string;
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const LOCAL_STILLS: Record<string, CoverImage> = {
  riverblufftrailspark: {
    src: `${base}/intake/river-bluff-hero-1280.jpg`,
    srcSet: `${base}/intake/river-bluff-hero-1280.jpg 1280w, ${base}/intake/river-bluff-hero-2560.jpg 2560w`,
    sizes: '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw',
    alt: '',
  },
};

export function coverFor(cs: Pick<SanityCaseStudy, 'slug' | 'coverImage' | 'title'>): CoverImage | undefined {
  const cover = cs.coverImage as { asset?: { _id?: string; url?: string } } | undefined;
  if (cover?.asset) {
    const build = (w: number) => urlFor(cover as never).width(w).height(Math.round(w * 1.25)).fit('crop').auto('format').url();
    return {
      src: build(800),
      srcSet: `${build(480)} 480w, ${build(800)} 800w, ${build(1200)} 1200w`,
      sizes: '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw',
      alt: '',
    };
  }
  return LOCAL_STILLS[cs.slug];
}
