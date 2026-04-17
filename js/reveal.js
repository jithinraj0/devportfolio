/* ══════════════════════════════════════════════════
   reveal.js — IntersectionObserver Scroll Reveal
   ══════════════════════════════════════════════════ */

(function initReveal() {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Make everything visible immediately
    document.querySelectorAll('.reveal').forEach(function showElement(el) {
      el.classList.add('active');
    });
    return;
  }

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver(function handleIntersect(entries) {
    entries.forEach(function handleEntry(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(function observeElement(el) {
    revealObserver.observe(el);
  });
})();
