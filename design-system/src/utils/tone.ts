import type { BandTone } from '../components/Band/Band';

const CYCLE: BandTone[] = ['pine', 'jade', 'peri', 'sky', 'blush'];

/**
 * A deterministic colour per project, from its slug, so a card's arch and
 * the case-study header it links to agree without a CMS field. (A Sanity
 * `accent` field can override this later.)
 */
export function projectTone(slug: string): BandTone {
  let h = 0;
  for (let i = 0; i < slug.length; i += 1) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return CYCLE[h % CYCLE.length];
}
