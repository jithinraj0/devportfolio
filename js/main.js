/* ══════════════════════════════════════════════════
   main.js — Entry Point
   ══════════════════════════════════════════════════ */

window.addEventListener('load', function handleLoad() {
  'use strict';

  // Page load fade-in
  document.body.classList.add('is-loaded');

  // Dynamic copyright year
  const yearEl = document.getElementById('copyright-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Scroll-based mesh background effect
  window.addEventListener('scroll', function handleScroll() {
    const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
    document.body.style.setProperty('--scroll-y', window.scrollY);

    const meshBg = document.querySelector('.mesh-bg');
    if (meshBg) {
      meshBg.style.backgroundPosition = (scrollPercent * 50) + '% ' + (scrollPercent * 25) + '%';
    }
  }, { passive: true });
});
