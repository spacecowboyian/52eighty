import {
  faArrowTrendUp,
  faBullseye,
  faPlus,
  faRocket,
  faSprayCanSparkles,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';
import type { ChoiceOption } from '5280-design-system';
import type { DetailQuestion, Driver, Path } from './types';

/**
 * Question content + branching rules for the intake flow.
 *
 * Copy follows the tone table in `website-intake-flow.md` (Miles's
 * 2026-07-08 concept doc): creative prompts over transactional labels.
 * The wording here is prototype-stage, not final — the brains doc still
 * lists "narrow the candidate questions down to final picks" as an open
 * action item for Miles and Ian.
 */

export const STEP_LABELS = ['The spark', 'What we see', "Let's make it happen"];

/* ----------------------------------------------------------------- Step 1 */

/**
 * Icons are decorative — they give each card something to land on before the
 * words are read. Rebranding uses a combo mark (a badge notched into the
 * primary icon) because one glyph didn't carry "a *new* identity". Keep badge
 * glyphs simple: anything detailed turns to mush at 18px.
 */
export const driverOptions: (ChoiceOption & { value: Driver })[] = [
  {
    value: 'launch',
    label: 'Launching something new',
    hint: 'A product, a place, a whole company.',
    icon: faRocket,
  },
  {
    value: 'rebrand',
    label: 'Rebranding',
    hint: 'What we look like stopped matching who we are.',
    icon: faSprayCanSparkles,
    badgeIcon: faPlus,
  },
  {
    value: 'refresh',
    label: 'Refreshing what we have',
    hint: 'The bones are good. The skin is tired.',
    icon: faWandMagicSparkles,
  },
  {
    value: 'problem',
    label: 'Solving a specific problem',
    hint: "Something isn't landing and we know it.",
    icon: faBullseye,
  },
  {
    value: 'scale',
    label: 'Scaling what already works',
    hint: 'More of the thing that is working.',
    icon: faArrowTrendUp,
  },
];

/**
 * The disciplines, as showcase panels rather than option cards — each one is a
 * tab with its own copy and reel (see `PathShowcase.tsx`). `proof` is the line
 * that points at real work; swap it for live case-study data once the reels
 * exist.
 */
export interface PathPanel {
  value: Path;
  /** Short label for the tab strip. */
  tabLabel: string;
  title: string;
  description: string;
  /** Which real work this discipline is backed by. */
  proof: string;
  cta: string;
}

export const pathShowcase: PathPanel[] = [
  {
    value: 'video',
    tabLabel: 'Video',
    title: 'Video that earns the next five seconds.',
    description:
      'Social cuts, product films, event coverage, series work. The kind that survives a thumb moving at speed, and still means something when it lands.',
    proof: 'River Bluff Trails Park · Uncommon Character · Kansas Fairgrounds',
    cta: "That's the one",
  },
  {
    value: 'brandFilm',
    tabLabel: 'Brand film',
    title: 'The longer story, told properly.',
    description:
      "One story, room to breathe, and a person at the center of it. Usually the piece that makes someone care before they've been asked for anything.",
    proof: 'Hillyard · Robidoux Resident Theatre',
    cta: "That's the one",
  },
  {
    value: 'brandStrategy',
    tabLabel: 'Brand + identity',
    title: 'Look like the company you actually are.',
    description:
      'Positioning, voice, and the way it all looks — from a clip-art logo turned into a real identity, to a brand book a whole team can work from.',
    proof: 'Full Circle GIS · Nomad Trails · Garden Gate Flowers · Outside 45',
    cta: "That's the one",
  },
  {
    value: 'campaign',
    tabLabel: 'Campaign',
    title: 'One idea, everywhere it needs to be.',
    description:
      'Video, radio, outdoor, paid social, email — pointed at a date. The work is holding a single idea together across every channel it shows up in.',
    proof: 'Kansas Fairgrounds "1861 Club" · American Trails',
    cta: "That's the one",
  },
  {
    value: 'unsure',
    tabLabel: 'Not sure yet',
    title: "Not sure yet is a fine place to start.",
    description:
      "Plenty of good projects start as a problem nobody's named properly. Tell us what's going on and we'll work out what it needs — that's the job.",
    proof: 'Every project starts here more often than not',
    cta: 'Start there',
  },
];

/** Flat label lookup for the recap screen and matching logic. */
export const pathOptions = pathShowcase.map(({ value, tabLabel }) => ({
  value,
  label: tabLabel,
}));

/* ----------------------------------------------------------------- Step 3 */

/**
 * Storytelling is the connective tissue across every path (per the design
 * doc), so this question is asked no matter which branch the visitor took.
 */
const universalQuestion: DetailQuestion = {
  id: 'feeling',
  label: 'When someone walks away from this, what do you want them to feel?',
  kind: 'text',
  placeholder: 'One sentence is plenty.',
};

const byPath: Record<Path, DetailQuestion[]> = {
  video: [
    {
      id: 'scope',
      label: "What's the shape of it?",
      kind: 'choice',
      options: [
        { value: 'social', label: 'Short social cuts', hint: '15–60s, vertical, made to scroll-stop.' },
        { value: 'product', label: 'Product or service demo' },
        { value: 'event', label: 'Event or recap coverage' },
        { value: 'series', label: 'A series', hint: 'Several pieces that belong together.' },
      ],
    },
    {
      id: 'talent',
      label: 'Who is on camera?',
      kind: 'choice',
      options: [
        { value: 'team', label: 'Our own people' },
        { value: 'customers', label: 'Our customers' },
        { value: 'talent', label: 'Hired talent' },
        { value: 'noone', label: 'Nobody — product, place, motion' },
      ],
    },
  ],
  brandFilm: [
    {
      id: 'subject',
      label: 'Whose story is this?',
      kind: 'choice',
      options: [
        { value: 'founder', label: 'The founder' },
        { value: 'customer', label: 'A customer whose life changed' },
        { value: 'team', label: 'The team behind it' },
        { value: 'place', label: 'The place itself' },
      ],
    },
    {
      id: 'stakes',
      label: "What's the hard part of the story — the part you'd be tempted to cut?",
      kind: 'text',
      placeholder: "It's usually the part that makes it work.",
    },
  ],
  brandStrategy: [
    {
      id: 'origin',
      label: 'Are we starting from scratch, or fixing something that broke?',
      kind: 'choice',
      options: [
        { value: 'scratch', label: 'From scratch' },
        { value: 'fixing', label: 'Fixing what we have' },
        { value: 'merging', label: 'Merging or splitting brands' },
      ],
    },
    {
      id: 'audience',
      label: 'Who are you actually for — and who are you not for?',
      kind: 'text',
      placeholder: 'The second half of that is usually the useful half.',
    },
  ],
  campaign: [
    {
      id: 'moment',
      label: "What's the moment this is pointed at?",
      kind: 'text',
      placeholder: 'A launch date, a season, a vote, an opening.',
    },
    {
      id: 'channels',
      label: 'Where does it need to show up?',
      kind: 'choice',
      options: [
        { value: 'paidSocial', label: 'Paid social' },
        { value: 'broadcast', label: 'Radio / broadcast' },
        { value: 'outdoor', label: 'Billboard / outdoor' },
        { value: 'email', label: 'Email / direct' },
      ],
    },
  ],
  unsure: [
    {
      id: 'obstacle',
      label: "What's the biggest obstacle today?",
      kind: 'text',
      placeholder: "Describe the problem, not the deliverable. We'll figure out the deliverable.",
    },
  ],
};

/** The step-3 question set for a branch: path-specific questions, then the universal one. */
export function detailQuestions(path: Path | undefined): DetailQuestion[] {
  return [...(path ? byPath[path] : byPath.unsure), universalQuestion];
}

export const investmentOptions = [
  { value: 'under10', label: 'Under $10k' },
  { value: '10to25', label: '$10k – $25k' },
  { value: '25to50', label: '$25k – $50k' },
  { value: 'over50', label: '$50k+' },
  { value: 'unknown', label: "No idea — tell us what it takes", hint: "We'd rather you say this than guess." },
];

export const timelineOptions = [
  { value: 'now', label: 'Yesterday' },
  { value: 'quarter', label: 'This quarter' },
  { value: 'halfYear', label: 'Next six months' },
  { value: 'exploring', label: 'Just exploring' },
];

/** Short human-readable label for a driver/path value, for the recap screen. */
export function labelFor(kind: 'driver' | 'path', value?: string): string {
  const set = kind === 'driver' ? driverOptions : pathOptions;
  return set.find((o) => o.value === value)?.label ?? '—';
}
