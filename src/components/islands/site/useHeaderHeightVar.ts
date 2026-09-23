import { useEffect } from 'react';

/**
 * Publish the sticky site header's real height as `--site-header-h`, so
 * anything pinning beneath it lands in the right place.
 *
 * The header sets a deterministic min-height and its wordmark never wraps, so
 * the CSS fallback is normally right; this is the safety net that keeps the
 * variable honest if anything changes the header's height. Site-level: called
 * once by the header island, not by page components.
 */
export function useHeaderHeightVar() {
  useEffect(() => {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const apply = () => {
      const { height } = header.getBoundingClientRect();
      document.documentElement.style.setProperty('--site-header-h', `${Math.round(height)}px`);
    };

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);
}
