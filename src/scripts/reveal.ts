/**
 * Whole-block settle. Marks `[data-reveal]` bands with `data-inview` the
 * first time they cross 18% into the viewport; the CSS in global.css moves
 * the band's children as one unit. Sets `data-reveal-ready` on <html> first,
 * so nothing is ever hidden if this never runs.
 */
const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
if (targets.length && 'IntersectionObserver' in window) {
  document.documentElement.setAttribute('data-reveal-ready', '');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute('data-inview', '');
        io.unobserve(entry.target);
      }
    },
    { threshold: 0.18 },
  );
  targets.forEach((t) => {
    // Already on screen at load: no settle, just show.
    const r = t.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) t.setAttribute('data-inview', '');
    else io.observe(t);
  });
}
