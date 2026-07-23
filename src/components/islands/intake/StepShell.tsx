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
}

export const StepShell = forwardRef<HTMLElement, StepShellProps>(function StepShell(
  { children, tone = 'cream', first = false, wide = false, label },
  ref,
) {
  const className = [
    'step',
    tone === 'surface' ? 'step--surface' : '',
    first ? 'step--first' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section ref={ref} className={className} aria-label={label}>
      {wide ? children : <div className="step__inner">{children}</div>}
    </section>
  );
});
