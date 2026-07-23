import type { Driver, Path } from './types';

/**
 * The step-2 "payoff": crawl the visitor's site and mirror their brand back at
 * them before asking for anything.
 *
 * IMPORTANT — this is a stub. The real mechanic needs a server: the Astro site
 * is fully static on GitHub Pages, and `next-actions.md` still carries
 * "design/build the URL-crawl + AI brand-mirroring mechanic — needs a
 * serverless function" as an open item. What ships here is the *interface* and
 * the UI around it, with a deterministic local stand-in producing the copy, so
 * the flow can be walked end to end and the real endpoint can drop in behind
 * `analyzeSite()` without touching the components.
 *
 * To wire the real thing: set `PUBLIC_INTAKE_MIRROR_ENDPOINT` to a function
 * that accepts `{ url, path, driver }` and returns a `BrandMirror`.
 */

export interface BrandMirror {
  /** The domain we read, echoed back so they know we actually looked. */
  domain: string;
  /** "Looks like this is your North Star." */
  northStar: string;
  /** Short read on voice / messaging. */
  voice: string;
  /** Short read on who they appear to be talking to. */
  audience: string;
  /** Short read on the visual direction. */
  visual: string;
  /** True when the copy came from the local stub rather than a real crawl. */
  simulated: boolean;
}

const endpoint = import.meta.env.PUBLIC_INTAKE_MIRROR_ENDPOINT as string | undefined;

export function normalizeUrl(raw: string): string | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const withScheme = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
  try {
    const parsed = new URL(withScheme);
    if (!parsed.hostname.includes('.')) return null;
    return parsed.toString();
  } catch {
    return null;
  }
}

function domainOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

const northStarByDriver: Record<Driver, string> = {
  launch: 'you have something new and nobody knows it exists yet',
  rebrand: 'the outside no longer matches the inside',
  refresh: 'the substance is there and the surface has aged past it',
  problem: 'something specific is not landing, and you can name it',
  scale: 'something is working and you want more of it, faster',
};

const voiceByPath: Record<Path, string> = {
  video: 'plain-spoken and concrete — you describe what you do, not how it feels',
  brandFilm: 'earnest, people-first, told through individuals rather than categories',
  brandStrategy: 'capable but careful — the language hedges where the work does not',
  campaign: 'urgent and offer-led, built around dates and calls to action',
  unsure: 'clear on the what, quieter on the why',
};

/**
 * Deterministic stand-in for the real crawl. Uses the answers already given
 * plus the domain so the copy is at least *about* them — it does not fetch
 * anything, and the UI labels it as a preview.
 */
function simulate(url: string, path?: Path, driver?: Driver): BrandMirror {
  const domain = domainOf(url);
  return {
    domain,
    northStar: `Reading ${domain}, the through-line looks like this: ${
      driver ? northStarByDriver[driver] : 'you know the work is good and the story is not carrying it'
    }.`,
    voice: `Your voice reads as ${path ? voiceByPath[path] : voiceByPath.unsure}.`,
    audience:
      'You appear to be talking to people who already know your category — which is a shorter list than the one you want.',
    visual:
      'Visually it is restrained and consistent. The risk is not ugliness, it is being forgettable next to louder neighbors.',
    simulated: true,
  };
}

export async function analyzeSite(
  url: string,
  context: { path?: Path; driver?: Driver } = {},
): Promise<BrandMirror> {
  if (!endpoint) {
    // Small delay so the loading state is exercised in the prototype.
    await new Promise((resolve) => setTimeout(resolve, 900));
    return simulate(url, context.path, context.driver);
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, ...context }),
  });
  if (!response.ok) throw new Error(`Mirror endpoint failed: ${response.status}`);
  return (await response.json()) as BrandMirror;
}
