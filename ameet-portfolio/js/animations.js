/**
 * animations.js
 * ------------------------------------------------------------------
 * Scroll-reveal for elements with the .reveal class. Runs after
 * projects.js has rendered all dynamic content (portfolio:rendered),
 * and again for the static markup already in index.html.
 * ------------------------------------------------------------------
 */

(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function revealAll() {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
  }

  function initReveal() {
    if (prefersReducedMotion) {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger for elements that reveal together
          setTimeout(() => entry.target.classList.add("is-visible"), (i % 6) * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    // Guard against observing the same element twice — this runs both on
    // DOMContentLoaded (fallback) and on portfolio:rendered (after dynamic
    // sections are injected), and the two can overlap.
    document.querySelectorAll(".reveal:not([data-observed])").forEach(el => {
      el.setAttribute("data-observed", "true");
      observer.observe(el);
    });
  }

  document.addEventListener("DOMContentLoaded", initReveal);
  // Re-run once projects.js finishes injecting dynamic cards/sections.
  document.addEventListener("portfolio:rendered", initReveal);
})();
