import { useEffect, useState } from 'react';

export type HeaderTone = 'light' | 'dark';

/**
 * Which colour field is under the sticky header right now.
 *
 * Every `Band` carries `data-header-tone`. An IntersectionObserver whose root
 * is shrunk to a strip the height of the header watches them all; whichever
 * band covers the most of that strip decides the tone. None → light. Rebuilt
 * on resize (the strip height changes), and a debounced MutationObserver on
 * `main` re-collects bands that islands render after load (the intake flow).
 */
export function useHeaderTone(initial: HeaderTone = 'light'): HeaderTone {
  const [tone, setTone] = useState<HeaderTone>(initial);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>('.site-header');
    const main = document.querySelector('main');
    if (!header || !main) return;

    let observer: IntersectionObserver | null = null;
    const cover = new Map<Element, number>();

    const decide = () => {
      let best: Element | null = null;
      let bestHeight = 0;
      cover.forEach((height, el) => {
        if (height > bestHeight) {
          best = el;
          bestHeight = height;
        }
      });
      const next = (best && (best as HTMLElement).dataset.headerTone) === 'dark' ? 'dark' : 'light';
      setTone(next);
    };

    const build = () => {
      observer?.disconnect();
      cover.clear();
      const headerH = Math.round(header.getBoundingClientRect().height);
      const strip = Math.max(0, window.innerHeight - headerH);
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            cover.set(entry.target, entry.isIntersecting ? entry.intersectionRect.height : 0);
          }
          decide();
        },
        {
          rootMargin: `0px 0px -${strip}px 0px`,
          // The strip is thin, so the ratio moves in small steps; a fine
          // threshold list keeps the callback firing as a seam slides through.
          threshold: Array.from({ length: 41 }, (_, i) => i / 40),
        },
      );
      document.querySelectorAll<HTMLElement>('[data-header-tone]').forEach((el) => observer!.observe(el));
    };

    build();

    let resizeFrame: number | null = null;
    const onResize = () => {
      if (resizeFrame !== null) return;
      resizeFrame = window.requestAnimationFrame(() => {
        resizeFrame = null;
        build();
      });
    };
    window.addEventListener('resize', onResize);

    let mutationTimer: number | null = null;
    const mutations = new MutationObserver(() => {
      if (mutationTimer !== null) window.clearTimeout(mutationTimer);
      mutationTimer = window.setTimeout(build, 80);
    });
    mutations.observe(main, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutations.disconnect();
      window.removeEventListener('resize', onResize);
      if (resizeFrame !== null) window.cancelAnimationFrame(resizeFrame);
      if (mutationTimer !== null) window.clearTimeout(mutationTimer);
    };
  }, []);

  return tone;
}
