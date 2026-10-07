(function () {
  'use strict';

  var t = window.I18N.t;
  var WA_NUMBER = '31615172121';

  /* ---------- Course data (metres per tee, par and stroke index) ---------- */
  var TEES = {
    white:  [176, 529, 197, 419, 434, 493, 339, 209, 589, 463, 386, 149, 441, 525, 173, 394, 460, 626],
    yellow: [151, 475, 172, 371, 385, 437, 302, 181, 517, 410, 332, 126, 375, 463, 150, 345, 389, 554],
    blue:   [154, 501, 175, 384, 372, 414, 287, 160, 477, 402, 318, 126, 362, 444, 156, 329, 376, 538],
    red:    [142, 419, 160, 371, 361, 400, 278, 149, 467, 392, 309, 115, 352, 432, 150, 320, 369, 493]
  };
  var PAR = [3, 5, 3, 4, 4, 5, 4, 3, 5, 4, 4, 3, 4, 5, 3, 4, 5, 5];
  var SI  = [15, 5, 13, 7, 1, 17, 11, 9, 3, 6, 16, 18, 2, 12, 4, 8, 14, 10];
  var LONGEST = Math.max.apply(null, TEES.white);
  var tee = 'yellow';

  function fmt(n) {
    try { return n.toLocaleString(t('locale')); } catch (e) { return String(n); }
  }
  function sum(arr) { return arr.reduce(function (a, b) { return a + b; }, 0); }

  var holesEl = document.getElementById('holes');
  var summaryEl = document.getElementById('sc-summary');

  function buildScorecard() {
    var html = '';
    [[0, 'sc.front'], [9, 'sc.back']].forEach(function (g) {
      html += '<div class="nine" data-start="' + g[0] + '"><div class="nine-head"><h4>' + t(g[1]) +
        '</h4><span class="nine-total"></span></div><div class="nine-grid">';
      for (var i = g[0]; i < g[0] + 9; i++) {
        html += '<div class="hole" data-i="' + i + '">' +
          '<div class="hole-top"><span class="hole-no">' + (i + 1) + '</span>' +
          '<span class="hole-par par-' + PAR[i] + '">Par ' + PAR[i] + '</span></div>' +
          '<span class="hole-m"></span><span class="hole-bar"><i></i></span>' +
          '<span class="hole-si">' + t('sc.hcp') + ' ' + SI[i] + '</span></div>';
      }
      html += '</div></div>';
    });
    holesEl.innerHTML = html;
    updateScorecard();
  }

  function updateScorecard() {
    var m = TEES[tee];
    Array.prototype.forEach.call(holesEl.querySelectorAll('.hole'), function (el) {
      var i = +el.getAttribute('data-i');
      el.querySelector('.hole-m').textContent = fmt(m[i]) + ' m';
      el.style.setProperty('--len', (m[i] / LONGEST).toFixed(3));
    });
    Array.prototype.forEach.call(holesEl.querySelectorAll('.nine'), function (el) {
      var s = +el.getAttribute('data-start');
      el.querySelector('.nine-total').textContent =
        fmt(sum(m.slice(s, s + 9))) + ' m · par ' + sum(PAR.slice(s, s + 9));
    });
    summaryEl.innerHTML = t('sc.summary').replace('{m}', fmt(sum(m))) + (tee === 'yellow' ? t('sc.rating') : '');
  }

  Array.prototype.forEach.call(document.querySelectorAll('.tee-switch button'), function (btn) {
    btn.addEventListener('click', function () {
      tee = btn.getAttribute('data-tee');
      Array.prototype.forEach.call(document.querySelectorAll('.tee-switch button'), function (b) {
        b.setAttribute('aria-pressed', String(b === btn));
      });
      updateScorecard();
    });
  });

  /* ---------- WhatsApp links carry a greeting in the visitor's language ---------- */
  function updateWhatsApp() {
    var href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(t('wa.text'));
    Array.prototype.forEach.call(document.querySelectorAll('[data-wa]'), function (a) { a.href = href; });
  }

  /* ---------- Header, floating button, active nav ---------- */
  var header = document.querySelector('.site-header');
  var fab = document.querySelector('.fab');
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle('scrolled', y > 40);
    fab.classList.toggle('show', y > window.innerHeight * 0.8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        Array.prototype.forEach.call(navLinks, function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Array.prototype.forEach.call(document.querySelectorAll('main section[id]'), function (s) { sectionObserver.observe(s); });
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  function setMenu(open) {
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', t(open ? 'nav.close' : 'nav.menu'));
  }
  toggle.addEventListener('click', function () { setMenu(!document.body.classList.contains('nav-open')); });
  Array.prototype.forEach.call(document.querySelectorAll('.main-nav a'), function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) { setMenu(false); toggle.focus(); }
  });

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(reveals, function (el) { revealObserver.observe(el); });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('in'); });
  }

  /* ---------- Gallery lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lbImg = lightbox.querySelector('img');
  Array.prototype.forEach.call(document.querySelectorAll('.g-item'), function (item) {
    item.addEventListener('click', function () {
      var img = item.querySelector('img');
      lbImg.src = item.getAttribute('data-full');
      lbImg.alt = img.alt;
      if (typeof lightbox.showModal === 'function') lightbox.showModal();
      else window.open(item.getAttribute('data-full'), '_blank');
    });
  });
  lightbox.querySelector('.lb-close').addEventListener('click', function () { lightbox.close(); });
  lightbox.addEventListener('click', function (e) { if (e.target === lightbox) lightbox.close(); });

  /* ---------- Map loads only after consent ---------- */
  document.getElementById('map-load').addEventListener('click', function () {
    var frame = document.getElementById('map-frame');
    var iframe = document.createElement('iframe');
    iframe.src = 'https://maps.google.com/maps?q=Golfclub%20Oostburg%2C%20Brugsevaart%2010%2C%204501%20NE%20Oostburg&z=14&output=embed&hl=' + window.I18N.lang;
    iframe.title = 'Google Maps · Golfclub Oostburg';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    frame.innerHTML = '';
    frame.appendChild(iframe);
  });

  /* ---------- Language ---------- */
  document.addEventListener('langchange', function () {
    buildScorecard();
    updateWhatsApp();
    toggle.setAttribute('aria-label', t(document.body.classList.contains('nav-open') ? 'nav.close' : 'nav.menu'));
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  window.I18N.init();
})();
