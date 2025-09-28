document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');

  let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
  let ticking = false;
  const delta = 10;
  const hideAfter = 100;

  window.addEventListener('scroll', function () {
    const current = window.pageYOffset || document.documentElement.scrollTop;
    if (!ticking) {
      window.requestAnimationFrame(function () {

        if (Math.abs(current - lastScroll) > delta) {
          if (current > lastScroll && current > hideAfter) {
            header.classList.add('hidden');
          } else {
            header.classList.remove('hidden');
          }
          lastScroll = current;
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
});