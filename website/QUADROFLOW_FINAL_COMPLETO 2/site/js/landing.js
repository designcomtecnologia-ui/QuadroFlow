// URL de download: substitua quando o endereço definitivo estiver pronto.
const QUADROFLOW_DOWNLOAD_URL = '../pwa/index.html';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href="#baixar"]').forEach(link => {
    link.addEventListener('click', () => {
      const target = document.querySelector('#baixar');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const download = document.querySelector('#downloadBtn');
  if (download && QUADROFLOW_DOWNLOAD_URL !== '#') download.href = QUADROFLOW_DOWNLOAD_URL;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.feature,.step,.benefit-list>div,.solution-grid,.problem-grid').forEach(el => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }
});
