/* ===== RESET & BASE ===== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --cream:      #f5f0e8;
  --cream-dark: #ede7d9;
  --teal:       #2a7a6e;
  --teal-light: #3a9e8f;
  --teal-pale:  #e0f2ef;
  --teal-dark:  #1d5a52;
  --amber:      #d4793a;
  --text-dark:  #1a1f2e;
  --text-mid:   #4a5068;
  --text-light: #7a8099;
  --border:     #e0d8cc;
  --white:      #ffffff;
  --header-h:   56px;
  --radius:     10px;
  --shadow-sm:  0 1px 8px rgba(26,31,46,.06);
  --shadow-md:  0 4px 20px rgba(26,31,46,.10);
  --shadow-lg:  0 8px 32px rgba(26,31,46,.14);
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Inter', system-ui, sans-serif;
}

html { scroll-behavior: smooth; }

body {
  font-family: var(--font-sans);
  background-color: var(--cream);
  color: var(--text-dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img { display: block; max-width: 100%; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; }

/* ===== LAYOUT ===== */
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* ===== HEADER ===== */
.site-header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(255,255,255,.97);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border);
  box-shadow: var(--shadow-sm);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
  gap: .75rem;
}

.logo-link { flex-shrink: 0; display: inline-flex; }
.logo-img  { height: 36px; width: auto; object-fit: contain; }

/* Desktop nav */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: .1rem;
  flex: 1;
  justify-content: center;
  overflow: hidden;
}

.nav-link {
  font-size: .78rem;
  font-weight: 500;
  color: var(--text-mid);
  padding: .3rem .5rem;
  border-radius: 4px;
  white-space: nowrap;
  transition: color .15s, background .15s;
}
.nav-link:hover,
.nav-link--active {
  color: var(--teal);
  background: var(--teal-pale);
  font-weight: 700;
}

/* Become Editor button */
.btn-become-editor {
  display: inline-flex;
  align-items: center;
  gap: .35rem;
  font-size: .8rem;
  font-weight: 600;
  color: var(--teal);
  background: transparent;
  border: 1.5px solid var(--teal);
  border-radius: 6px;
  padding: .4rem .85rem;
  white-space: nowrap;
  flex-shrink: 0;
  transition: background .15s, color .15s;
}
.btn-become-editor:hover {
  background: var(--teal);
  color: var(--white);
}
.btn-become-editor--full {
  width: 100%;
  justify-content: center;
  padding: .65rem;
  border-radius: 8px;
}

/* Hamburger */
.hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px; height: 40px;
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--text-mid);
  flex-shrink: 0;
}

/* Mobile drawer */
.mobile-drawer {
  display: none;
  border-top: 1px solid var(--border);
  background: var(--white);
  box-shadow: var(--shadow-lg);
  padding: 1rem 0 1.5rem;
}
.mobile-drawer.is-open { display: block; }

.mobile-nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .25rem;
  margin-bottom: 1rem;
}
.mobile-nav-link {
  display: block;
  text-align: center;
  font-size: .85rem;
  font-weight: 500;
  color: var(--text-mid);
  padding: .55rem .5rem;
  border-radius: 6px;
  background: #f7f3ec;
  transition: color .15s, background .15s;
}
.mobile-nav-link:hover,
.mobile-nav-link--active {
  color: var(--teal);
  background: var(--teal-pale);
  font-weight: 700;
}
.mobile-divider {
  border: none;
  border-top: 1px solid var(--border);
  margin: .75rem 0;
}

/* Responsive show/hide */
.desktop-only { display: inline-flex; }
.mobile-only  { display: none; }

@media (max-width: 768px) {
  .desktop-nav  { display: none; }
  .desktop-only { display: none; }
  .mobile-only  { display: flex; }
  .hamburger    { display: flex; }
}

/* ===== HERO ===== */
.hero {
  position: relative;
  padding-top: calc(var(--header-h) + clamp(48px, 10vw, 80px));
  padding-bottom: clamp(48px, 8vw, 80px);
  background: linear-gradient(135deg, #1d5a52 0%, #2a7a6e 50%, #3a9e8f 100%);
  overflow: hidden;
}
.hero-bg-pattern {
  position: absolute; inset: 0; pointer-events: none;
  background:
    radial-gradient(circle at 20% 80%, rgba(255,255,255,.04) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255,255,255,.06) 0%, transparent 50%);
}
.hero-content { position: relative; }

.region-badge {
  display: inline-block;
  background: var(--amber);
  color: var(--white);
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: .35rem 1rem;
  border-radius: 9999px;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-family: var(--font-serif);
  font-size: clamp(2.4rem, 5vw, 3.75rem);
  font-weight: 800;
  color: var(--white);
  line-height: 1.15;
  margin-bottom: 1.25rem;
  max-width: 700px;
}
.hero-title em {
  color: #f0b96a;
  font-style: italic;
}

.hero-desc {
  font-size: 1.05rem;
  color: rgba(255,255,255,.82);
  line-height: 1.75;
  max-width: 560px;
  margin-bottom: 2rem;
}

.btn-read-stories {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  background: var(--white);
  color: var(--teal-dark);
  font-weight: 700;
  font-size: .9rem;
  padding: .7rem 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,.15);
  transition: background .15s;
}
.btn-read-stories:hover { background: #f0ebe0; }

/* ===== ARTICLES SECTION ===== */
.articles-section {
  padding: 5rem 0;
  background: var(--cream);
}

.section-header { margin-bottom: 3rem; }
.section-label {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  color: var(--teal);
  margin-bottom: .5rem;
}
.section-title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: .5rem;
}
.section-desc {
  font-size: .95rem;
  color: var(--text-light);
}

/* Article grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}
@media (max-width: 900px) { .articles-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .articles-grid { grid-template-columns: 1fr; } }

/* Article card */
.article-card {
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform .2s, box-shadow .2s;
}
.article-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.card-thumb {
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: var(--teal-pale);
  position: relative;
}
.card-thumb img {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform .3s;
}
.article-card:hover .card-thumb img { transform: scale(1.04); }
.card-thumb-placeholder {
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 700;
  color: rgba(255,255,255,.5);
}

.card-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.card-title {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.35;
  margin-bottom: .6rem;
}
.card-excerpt {
  font-size: .875rem;
  color: var(--text-mid);
  line-height: 1.6;
  flex: 1;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: .78rem;
  color: var(--text-light);
}
.card-meta-item {
  display: flex; align-items: center; gap: .3rem;
}
.card-read-more {
  display: inline-flex;
  align-items: center;
  gap: .3rem;
  font-size: .8rem;
  font-weight: 600;
  color: var(--teal);
  margin-top: .75rem;
  transition: gap .15s;
}
.article-card:hover .card-read-more { gap: .5rem; }

/* Empty state */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}
.empty-icon {
  width: 64px; height: 64px;
  border-radius: 50%;
  background: var(--teal-pale);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.25rem;
  color: var(--teal);
}
.empty-title {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: .5rem;
}
.empty-desc { color: var(--text-mid); font-size: .95rem; }

/* ===== OTHER REGIONS ===== */
.other-regions-section {
  padding: 5rem 0;
  background: var(--cream-dark);
  border-top: 1px solid var(--border);
}
.other-regions-inner { text-align: center; }
.other-label {
  display: inline-block;
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .12em;
  color: var(--teal);
  margin-bottom: .75rem;
}
.other-title {
  font-family: var(--font-serif);
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1rem;
}
.other-desc {
  font-size: 1rem;
  color: var(--text-mid);
  line-height: 1.75;
  max-width: 560px;
  margin: 0 auto 2rem;
}
.btn-view-regions {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  background: var(--teal);
  color: var(--white);
  font-weight: 700;
  font-size: .9rem;
  padding: .75rem 1.75rem;
  border-radius: 8px;
  transition: background .15s;
}
.btn-view-regions:hover { background: var(--teal-dark); }

/* ===== FOOTER ===== */
.site-footer {
  background: #1a1f2e;
  color: rgba(255,255,255,.7);
  padding: 3.5rem 0 2rem;
}
.footer-inner {}
.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255,255,255,.1);
  margin-bottom: 1.5rem;
}
@media (max-width: 700px) {
  .footer-top { grid-template-columns: 1fr; gap: 2rem; }
}

.footer-logo   { height: 36px; width: auto; object-fit: contain; margin-bottom: .75rem; }
.footer-tagline { font-size: .875rem; line-height: 1.6; }

.footer-links-title {
  font-size: .7rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: rgba(255,255,255,.4);
  margin-bottom: .75rem;
}
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .4rem .75rem;
}
.footer-link {
  font-size: .875rem;
  color: rgba(255,255,255,.6);
  transition: color .15s;
}
.footer-link:hover { color: var(--white); }

.footer-social-links {
  display: flex;
  flex-direction: column;
  gap: .4rem;
}

.footer-bottom { text-align: center; }
.footer-copy   { font-size: .8rem; color: rgba(255,255,255,.35); }

/* ===== MODAL ===== */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,.55);
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: calc(var(--header-h) + 1.5rem) 1rem 2rem;
  overflow-y: auto;
}
.modal-box {
  background: var(--white);
  border-radius: 12px;
  width: 100%;
  max-width: 760px;
  position: relative;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}
.modal-close {
  position: absolute;
  top: 1rem; right: 1rem;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: var(--cream);
  border: none;
  font-size: 1.4rem;
  line-height: 1;
  color: var(--text-mid);
  display: flex; align-items: center; justify-content: center;
  transition: background .15s;
  z-index: 1;
}
.modal-close:hover { background: var(--border); }

.modal-thumb {
  width: 100%;
  aspect-ratio: 16/6;
  object-fit: cover;
}
.modal-thumb-placeholder {
  width: 100%;
  aspect-ratio: 16/6;
  background: linear-gradient(135deg, var(--teal-dark), var(--teal-light));
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-serif);
  font-size: 1.5rem;
  color: rgba(255,255,255,.4);
}
.modal-body { padding: 2rem; }
.modal-title {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.25;
  margin-bottom: 1rem;
}
.modal-meta {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: .82rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border);
  flex-wrap: wrap;
}
.modal-meta-item { display: flex; align-items: center; gap: .35rem; }
.modal-text {
  font-size: .975rem;
  color: var(--text-mid);
  line-height: 1.85;
  white-space: pre-wrap;
}

/* ===== UTILITIES ===== */
.sr-only {
  position: absolute; width: 1px; height: 1px;
  padding: 0; margin: -1px; overflow: hidden;
  clip: rect(0,0,0,0); white-space: nowrap; border: 0;
}
