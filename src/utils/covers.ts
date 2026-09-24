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

/** A 4:5 still under `public/work/<slug>/<name>-{500,1000}.jpg`, pulled from the project's own footage. */
const still = (slug: string, name: string, alt = ''): CoverImage => ({
  src: `${base}/work/${slug}/${name}-1000.jpg`,
  srcSet: `${base}/work/${slug}/${name}-500.jpg 500w, ${base}/work/${slug}/${name}-1000.jpg 1000w`,
  sizes: '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw',
  alt,
});

// Frames extracted from the case-study videos in the media index (shot
// records in media-index/data/assets/*/shots.json give the timecodes). No
// identifiable people — the model-release question is still open.
const LOCAL_STILLS: Record<string, CoverImage> = {
  riverblufftrailspark: still('riverblufftrailspark', 'welcome-sign', 'The River Bluff Trails Park welcome stone at the trailhead'),
  'vfw-day-of-service': still('vfw-day-of-service', 'post-aerial', 'A VFW post from the air, volunteers building raised garden beds in the lot'),
  norc: still('norc', 'bluff-hike', 'Conference attendees hiking a gravel trail toward a rocky bluff outside Duluth'),
};

const LOCAL_GALLERIES: Record<string, CoverImage[]> = {
  'vfw-day-of-service': [
    still('vfw-day-of-service', 'lot-aerial', 'Top-down view of volunteers working around raised beds in a parking lot'),
    still('vfw-day-of-service', 'garden-bed', 'A raised bed being filled with soil, a rake and a seedling in the frame'),
    still('vfw-day-of-service', 'planting', 'A hand tucking a seedling into dark soil beside a wire garden fence'),
    still('vfw-day-of-service', 'seedlings', 'Tomato seedlings in red pots, backlit by the sun'),
  ],
  norc: [
    still('norc', 'duluth-aerial', 'Duluth harbor and the Aerial Lift Bridge from the air'),
    still('norc', 'wheel-repair', 'A cyclist\'s hands working a multitool on a wheel'),
    still('norc', 'handout', 'A conference handout open to a page of Anishinaabe terms'),
  ],
  riverblufftrailspark: [
    still('riverblufftrailspark', 'jump', 'A rider launching off a dirt jump in the woods'),
    still('riverblufftrailspark', 'berm', 'An empty bermed turn on a sunlit singletrack trail'),
    still('riverblufftrailspark', 'sunlit-trail', 'Singletrack under a canopy, low sun through the trees'),
    still('riverblufftrailspark', 'red-bridge', 'A red steel trail bridge, a rider crossing in the distance'),
    still('riverblufftrailspark', 'boardwalk', 'A rider heading onto a wooden boardwalk feature'),
  ],
};

/** Stills for a case study's gallery, in order. Empty when there are none yet. */
export function galleryFor(slug: string): CoverImage[] {
  return LOCAL_GALLERIES[slug] ?? [];
}

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
