/* ==========================================================
   script.js — Gallery rendering + scroll animations + nav
   ========================================================== */

// ── Gallery アイテムを動的生成 ──
(function buildGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid || typeof SAMPLES === 'undefined') return;

  SAMPLES.forEach((s) => {
    const figure = document.createElement('figure');
    figure.className = 'gallery-item js-fade';

    // thumbが指定されていない場合はURLから自動生成（WordPress mshots APIを利用）
    const hasThumb = s.thumb && s.thumb.trim() !== '';
    const thumbUrl = hasThumb
      ? s.thumb
      : (s.url ? `https://s0.wp.com/mshots/v1/${encodeURIComponent(s.url)}?w=800` : '');

    figure.innerHTML = `
      <a href="${s.url}" target="_blank" rel="noopener noreferrer"
         aria-label="${s.name || '制作サンプル'}を新しいタブで開く">
        <img
          src="${thumbUrl}"
          alt="${s.alt || s.name || '制作サンプル'}"
          loading="lazy"
        />
        <div class="gallery-overlay">
          <div class="gallery-overlay-inner">
            <span class="gallery-overlay-name">${s.name || ''}</span>
            <span class="gallery-overlay-arrow">↗</span>
          </div>
        </div>
      </a>
    `;

    grid.appendChild(figure);

    // 画像のロード完了を検知してクラスを付与
    const img = figure.querySelector('img');
    if (img) {
      if (img.complete) {
        figure.classList.add('is-loaded');
      } else {
        img.addEventListener('load', () => {
          figure.classList.add('is-loaded');
        });
        img.addEventListener('error', () => {
          figure.classList.add('is-loaded');
          figure.classList.add('is-error');
        });
      }
    }
  });
})();

// ── Intersection Observer — .js-fade ──
const fadeEls = document.querySelectorAll('.js-fade');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
);
fadeEls.forEach((el) => io.observe(el));

// ── Nav: transparent → solid on scroll ──
const nav = document.getElementById('nav');
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      nav.classList.toggle('solid', window.scrollY > 60);
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ── Smooth anchor scroll ──
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = nav ? nav.offsetHeight : 60;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navH,
      behavior: 'smooth',
    });
  });
});
