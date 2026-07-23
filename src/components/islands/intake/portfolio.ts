import type { Driver, Path } from './types';

/**
 * The 10 published case studies, tagged for step-2 "we've done work for folks
 * in a similar position" matching.
 *
 * Source: Brains `projects/5280-creative/canonical/portfolio.md`. That page
 * deliberately does not decide the matching mechanic — this is the first
 * concrete attempt at one, and is prototype-stage.
 *
 * Note the portfolio's own skew, flagged in the source: outdoor-recreation and
 * St. Joseph/NW-Missouri clients are over-represented, so matching leans on
 * discipline + situation rather than industry alone.
 */
export interface CaseStudyRef {
  slug: string;
  client: string;
  /** One line of "why you're seeing this", written for the prospect. */
  blurb: string;
  paths: Path[];
  drivers: Driver[];
}

export const caseStudies: CaseStudyRef[] = [
  {
    slug: 'nomad-trails-development',
    client: 'Nomad Trails Development',
    blurb: 'A DIY clip-art logo turned into a full identity, sales collateral, and a site that wins RFPs.',
    paths: ['brandStrategy', 'unsure'],
    drivers: ['rebrand', 'scale'],
  },
  {
    slug: 'outside45',
    client: 'Outside 45',
    blurb: 'A community initiative given a hand-illustrated identity and a badge system people actually wanted.',
    paths: ['brandStrategy', 'campaign'],
    drivers: ['launch'],
  },
  {
    slug: 'fullcirclegis',
    client: 'Full Circle GIS',
    blurb: '"Building Autonomy" — positioning, brand book, and messaging framework for a B2B tech disruptor.',
    paths: ['brandStrategy', 'unsure'],
    drivers: ['rebrand', 'problem', 'scale'],
  },
  {
    slug: 'garden-gate-flowers',
    client: 'Garden Gate Flowers',
    blurb: 'A seasonal logo-and-palette system that let one shop look like four, on a schedule.',
    paths: ['brandStrategy'],
    drivers: ['rebrand', 'refresh'],
  },
  {
    slug: 'kff',
    client: 'Kansas Fairgrounds Foundation',
    blurb: 'A venue launch carried across video, radio, billboard, and paid social on one line of copy.',
    paths: ['campaign', 'video'],
    drivers: ['launch'],
  },
  {
    slug: 'rrt',
    client: 'Robidoux Resident Theatre',
    blurb: 'Three video narratives plus radio and a photo series — one idea, "The Spotlight Is Always On."',
    paths: ['campaign', 'brandFilm', 'video'],
    drivers: ['scale', 'problem'],
  },
  {
    slug: 'riverblufftrailspark',
    client: 'River Bluff Trails Park',
    blurb: 'One park, two very different audiences, two video lines that never talk over each other.',
    paths: ['video'],
    drivers: ['scale', 'problem'],
  },
  {
    slug: 'hillyard',
    client: 'Hillyard',
    blurb: 'Three films on service, culture, and the history behind the product — for a family-owned manufacturer.',
    paths: ['brandFilm', 'video'],
    drivers: ['refresh', 'scale'],
  },
  {
    slug: 'americantrails',
    client: 'American Trails',
    blurb: 'A year-end membership push: email drip plus social, under "More Trails. Better Trails."',
    paths: ['campaign'],
    drivers: ['scale', 'problem'],
  },
  {
    slug: 'uncommon-character',
    client: 'Uncommon Character',
    blurb: 'A content-strategy shift and recurring on-camera characters: +91% reach on Facebook, +200% on Instagram.',
    paths: ['video', 'campaign'],
    drivers: ['refresh', 'problem', 'scale'],
  },
];

/**
 * Rank case studies against the step-1 answers and return the top few.
 * Discipline match is weighted above situation match; ties keep source order,
 * which is the site's own category ordering.
 */
export function matchCaseStudies(
  path: Path | undefined,
  driver: Driver | undefined,
  limit = 3,
): CaseStudyRef[] {
  const scored = caseStudies.map((study, index) => {
    let score = 0;
    if (path && study.paths.includes(path)) score += 2;
    if (driver && study.drivers.includes(driver)) score += 1;
    return { study, score, index };
  });

  return scored
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((entry) => entry.study);
}
