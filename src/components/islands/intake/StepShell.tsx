import { forwardRef } from 'react';

/**
 * One full-height screen in the flow. Every step presents as its own moment
 * (full viewport below the sticky header, content centered), rather than
 * stacking in a narrow column. Layout lives in `global.css` (`.step*`) because
 * it needs `svh` units and the full-bleed breakout.
 *
 * `wide` opts a step out of the inner reading column — the discipline showcase
 * lays out its own two-up panels and doesn't want the 46rem cap.
 */
export interface StepShellProps {
  children: React.ReactNode;
  /** White surface instead of the page cream, to separate adjacent screens. */
  tone?: 'cream' | 'surface';
  /** First screen of the flow — drops the top divider rule. */
  first?: boolean;
  /** Skip the inner reading column (full-width content). */
  wide?: boolean;
  /** Accessible label for the section. */
  label?: string;
  /** DOM id — the anchor a deep-link/URL hash targets for this screen. */
  id?: string;
  /**
   * Full-bleed layer rendered behind the content (e.g. a hero photo + scrim).
   * It fills the whole screen, under the reading column, and is `aria-hidden`
   * decoration — captions/legibility are the caller's job.
   */
  background?: React.ReactNode;
  /** Light-on-dark screen — flips the content into the dark-background palette. */
  onDark?: boolean;
}

export const StepShell = forwardRef<HTMLElement, StepShellProps>(function StepShell(
  { children, tone = 'cream', first = false, wide = false, label, id, background, onDark = false },
  ref,
) {
  const className = [
    'step',
    tone === 'surface' ? 'step--surface' : '',
    first ? 'step--first' : '',
    onDark ? 'step--dark' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section ref={ref} id={id} className={className} aria-label={label}>
      {background && (
        <div className="step__bg" aria-hidden="true">
          {background}
        </div>
      )}
      {wide ? children : <div className="step__inner">{children}</div>}
    </section>
  );
});
