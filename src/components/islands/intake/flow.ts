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

export const driverOptions: { value: Driver; label: string; hint: string }[] = [
  { value: 'launch', label: 'Launching something new', hint: 'A product, a place, a whole company.' },
  { value: 'rebrand', label: 'Rebranding', hint: 'What we look like stopped matching who we are.' },
  { value: 'refresh', label: 'Refreshing what we have', hint: 'The bones are good. The skin is tired.' },
  { value: 'problem', label: 'Solving a specific problem', hint: "Something isn't landing and we know it." },
  { value: 'scale', label: 'Scaling what already works', hint: 'More of the thing that is working.' },
];

export const pathOptions: { value: Path; label: string; hint: string }[] = [
  { value: 'video', label: 'Video', hint: 'Social cuts, product, event, series.' },
  { value: 'brandFilm', label: 'A brand film', hint: 'The longer story, told properly.' },
  { value: 'brandStrategy', label: 'Brand + identity', hint: 'Positioning, voice, the way it looks.' },
  { value: 'campaign', label: 'A campaign', hint: 'Multi-channel push with a deadline on it.' },
  { value: 'unsure', label: "Honestly, not sure yet", hint: "That's a fine place to start." },
];

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
