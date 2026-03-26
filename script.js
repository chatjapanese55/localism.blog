/* =============================================
   LOCALISM.BLOG — Landing Page Scripts
   ============================================= */

(function () {
  'use strict';

  // ---- Header scroll effect ----
  const header = document.getElementById('site-header');
  if (header) {
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---- Mobile nav toggle ----
  const navToggle = document.getElementById('nav-toggle');
  const mainNav   = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.classList.toggle('is-active', isOpen);
      // メニュー開閉中はbodyのスクロールを制御
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // ナビリンクをタップしたら閉じる
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // メニュー外をタップしたら閉じる
    document.addEventListener('click', function (e) {
      if (
        mainNav.classList.contains('open') &&
        !mainNav.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('is-active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ---- Scroll-reveal animation ----
  const revealEls = document.querySelectorAll(
    '.toc-card, .intro-stat, .about-card, .about-text'
  );

  if ('IntersectionObserver' in window) {
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
  } else {
    // IntersectionObserver非対応ブラウザはすべて表示
    revealEls.forEach(function (el) {
      el.classList.add('reveal-ready', 'revealed');
    });
  }

})();
