// Kedaiin landing — gerak minimum: nav, reveal, accordion FAQ. Tanpa library.
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // 1. Nav dapat bayangan setelah scroll > 40 px
  var bar = document.querySelector('.bar');
  function onScroll() { bar.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // 2. Reveal sekali per elemen saat masuk viewport
  var targets = document.querySelectorAll('.reveal');
  function show(el) { el.classList.add('is-visible'); }
  if (reduce.matches || !('IntersectionObserver' in window)) {
    for (var i = 0; i < targets.length; i++) show(targets[i]);
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        show(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.05 });
    targets.forEach(function (el) { io.observe(el); });
  }

  // 3. Accordion FAQ: grid-template-rows 0fr → 1fr, 200 ms
  function wait() { return reduce.matches ? 0 : 200; }
  document.querySelectorAll('.faq details').forEach(function (d) {
    if (!d.querySelector('.faq__a')) return;
    d.querySelector('summary').addEventListener('click', function (ev) {
      ev.preventDefault();
      if (d.classList.contains('is-open')) {
        d.classList.remove('is-open');
        setTimeout(function () { d.open = false; }, wait());
      } else {
        d.open = true;
        requestAnimationFrame(function () { d.classList.add('is-open'); });
      }
    });
  });

  // 4. Lightbox: klik gambar → overlay ukuran penuh (Esc/×/latar menutup, fokus balik)
  var lb = document.getElementById('lb');
  var lbImg = lb.querySelector('.lb__img');
  var lbX = lb.querySelector('.lb__x');
  var trigger = null;
  function closeLb() {
    if (lb.hidden) return;
    lb.hidden = true;
    document.documentElement.classList.remove('lb-open');
    document.body.classList.remove('lb-open');
    if (trigger) { trigger.focus(); trigger = null; }
  }
  document.querySelectorAll('.shot').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      trigger = btn;
      lbImg.src = btn.dataset.full || img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lb.setAttribute('role', 'dialog');
      lb.setAttribute('aria-label', img.alt);
      lb.hidden = false;
      document.documentElement.classList.add('lb-open');
      document.body.classList.add('lb-open');
      lbX.focus();
    });
  });
  lb.addEventListener('click', function (ev) { if (ev.target !== lbImg) closeLb(); });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') closeLb(); });
})();
