import type { Path } from './types';

/**
 * Stable URL anchors for the intake flow.
 *
 * Each full-height screen — and each discipline panel — is a linkable place:
 * the hash in the address bar tracks whatever the visitor is looking at, so a
 * particular moment in the flow (the opening pitch, the "what's driving this"
 * question, a single discipline) can be linked to directly. Deep-linking in is
 * honored on load (see `useHashDeepLink`), and navigating updates the hash via
 * `setHash` without adding history entries or jumping the scroll.
 */

/** The standalone screens, in order. */
export const SCREEN_ANCHORS = {
  start: 'start',
  driving: 'whats-driving-this',
  ready: 'ready',
} as const;

/** Discipline panel → URL slug. Kept human-readable, not the internal enum. */
export const pathAnchor: Record<Path, string> = {
  video: 'video',
  brandFilm: 'brand-film',
  brandStrategy: 'brand-identity',
  campaign: 'campaign',
  unsure: 'not-sure',
};

/**
 * Point the address bar at `id` without pushing a history entry (so Back still
 * leaves the flow in one press) and without the default anchor-jump — the flow
 * runs its own smooth scroll. No-op server-side and when already current.
 */
export function setHash(id: string) {
  if (typeof window === 'undefined') return;
  if (window.location.hash === `#${id}`) return;
  window.history.replaceState(null, '', `#${id}`);
}
