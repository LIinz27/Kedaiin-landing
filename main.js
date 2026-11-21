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
})();
