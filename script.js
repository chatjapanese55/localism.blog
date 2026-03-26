/* =============================================
   LOCALISM.BLOG — Landing Page Scripts
   ============================================= */

(function () {
  'use strict';

  // ---- Header scroll effect ----
  const header = document.getElementById('site-header');
  function onScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const mainNav   = document.getElementById('main-nav');

  navToggle.addEventListener('click', function () {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  mainNav.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('open');
    });
  });

  // ---- Scroll-reveal animation ----
  const revealEls = document.querySelectorAll(
    '.toc-card, .intro-stat, .about-card, .about-text'
  );

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealEls.forEach(function (el) {
    el.classList.add('reveal-ready');
    observer.observe(el);
  });

})();
