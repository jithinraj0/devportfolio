/* ══════════════════════════════════════════════════
   nav.js — Scrollspy, Hamburger, Scroll State
   ══════════════════════════════════════════════════ */

(function initNav() {
  'use strict';

  const nav = document.getElementById('nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const drawer = document.getElementById('nav-drawer');
  const drawerClose = document.querySelector('.nav__drawer-close');
  const drawerLinks = document.querySelectorAll('[data-drawer-link]');
  const navLinks = document.querySelectorAll('.nav__link');
  const sections = document.querySelectorAll('section[id]');

  // ── Scroll State ──
  function handleScroll() {
    if (nav) {
      nav.classList.toggle('is-scrolled', window.scrollY > 50);
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });

  // ── Scrollspy ──
  const spyObserver = new IntersectionObserver(function handleSpy(entries) {
    entries.forEach(function handleEntry(entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function deactivate(l) { l.classList.remove('is-active'); });
        const active = document.querySelector('.nav__link[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('is-active');
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(function observeSection(s) { spyObserver.observe(s); });

  // ── Hamburger ──
  function openDrawer() {
    drawer.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', openDrawer);
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  drawerLinks.forEach(function bindLink(link) {
    link.addEventListener('click', closeDrawer);
  });

  // Close on Escape
  document.addEventListener('keydown', function handleEsc(e) {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
})();
