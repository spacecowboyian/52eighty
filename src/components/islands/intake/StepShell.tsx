import { forwardRef } from 'react';
import { Band, type BandEdge, type BandTone } from '5280-design-system';

/**
 * One full-height screen in the flow: a `Band` that fills the viewport below
 * the sticky header and centres its content, so every step presents as its
 * own moment rather than stacking in a narrow column. Height and centring
 * live in `global.css` (`.step*`) because they need `svh` units.
 *
 * `wide` opts a step out of the inner reading column — the discipline showcase
 * lays out its own two-up panels and doesn't want the 46rem cap.
 */
export interface StepShellProps {
  children: React.ReactNode;
  /** Colour field under the step. */
  field?: BandTone;
  /** `arch` domes this step's top edge over the screen above it. */
  edge?: BandEdge;
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
  /** Light-on-dark screen — tells the header to read as dark over it. */
  onDark?: boolean;
}

export const StepShell = forwardRef<HTMLElement, StepShellProps>(function StepShell(
  { children, field = 'cream', edge = 'none', wide = false, label, id, background, onDark = false },
  ref,
) {
  return (
    <Band
      ref={ref}
      as="section"
      tone={field}
      edge={edge}
      pad="none"
      id={id}
      className="step"
      aria-label={label}
      headerTone={onDark ? 'dark' : undefined}
      background={background}
    >
      {wide ? children : <div className="step__inner">{children}</div>}
    </Band>
  );
});
