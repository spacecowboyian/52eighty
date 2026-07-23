import type { IntakeAnswers } from './types';

/**
 * Delivery of a finished brief. Like the brand mirror, this needs a server the
 * static Pages build doesn't have yet, so without an endpoint configured the
 * prototype keeps the brief client-side and says so on screen.
 *
 * Set `PUBLIC_INTAKE_SUBMIT_ENDPOINT` to POST briefs somewhere real.
 */
const endpoint = import.meta.env.PUBLIC_INTAKE_SUBMIT_ENDPOINT as string | undefined;

export interface SubmitResult {
  /** False when no endpoint is configured — nothing left the browser. */
  delivered: boolean;
}

export async function submitIntake(answers: IntakeAnswers): Promise<SubmitResult> {
  if (!endpoint) {
    // eslint-disable-next-line no-console
    console.info('[intake] no submit endpoint configured; brief kept client-side', answers);
    return { delivered: false };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answers),
  });
  if (!response.ok) throw new Error(`Submit endpoint failed: ${response.status}`);
  return { delivered: true };
}
