/**
 * Data model for the 3-step intake flow.
 * Design source: Brains `projects/5280-creative/website-intake-flow.md`.
 */

/** Step 1 branch selector — what discipline the project mainly lives in. */
export type Path = 'video' | 'brandFilm' | 'brandStrategy' | 'campaign' | 'unsure';

/** Step 1 opener — why they're here at all (the "why", not the deliverable). */
export type Driver = 'launch' | 'rebrand' | 'refresh' | 'problem' | 'scale';

/** Which of the two front doors the visitor took ("dreamers" vs "doers"). */
export type Mode = 'guided' | 'direct';

export interface IntakeAnswers {
  driver?: Driver;
  path?: Path;
  /** Step 2 — their own site, fed to the brand-mirror service. */
  siteUrl?: string;
  /** Step 2 — links/notes they volunteer after seeing the mirror. */
  inspiration?: string;
  /** Step 3 — answers to the path-specific deep questions, keyed by question id. */
  detail: Record<string, string>;
  /** Step 3 — Miles's reframed money/time questions. */
  investment?: string;
  timeline?: string;
  /** Step 3 — contact, asked last and only after the payoff. */
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  preferredContact?: string;
}

export const emptyAnswers: IntakeAnswers = { detail: {} };

/** One deep question in the step-3 set, selected by `path`. */
export interface DetailQuestion {
  id: string;
  label: string;
  /** `choice` renders a ChoiceGrid, `text` a textarea. */
  kind: 'choice' | 'text';
  options?: { value: string; label: string; hint?: string }[];
  placeholder?: string;
}
