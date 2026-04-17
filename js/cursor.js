/* ══════════════════════════════════════════════════
   cursor.js — Cursor Flare Effect (Desktop Only)
   ══════════════════════════════════════════════════ */

(function initCursorFlare() {
  'use strict';

  // Skip on touch devices
  if ('ontouchstart' in window) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  document.addEventListener('mousemove', function handleMove(e) {
    targetX = e.clientX;
    targetY = e.clientY;
  });

  function animate() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    document.documentElement.style.setProperty('--cursor-x', currentX + 'px');
    document.documentElement.style.setProperty('--cursor-y', currentY + 'px');
    requestAnimationFrame(animate);
  }

  animate();
})();
