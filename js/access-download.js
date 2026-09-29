document.addEventListener('DOMContentLoaded', () => {
  // CONFIGURAÇÃO DE PUBLICAÇÃO
  // 1) Substitua whatsapp pela URL real do grupo oficial.
  // 2) O download já aponta para o PWA publicado em /pwa/QuadroFlow.html.
  //    Se o PWA for publicado em outro endereço, altere apenas download.
  const CONFIG = {
    whatsapp: 'https://chat.whatsapp.com/IQ6GzFLFhW93uUXURscasL',
    download: 'https://quadro-flow.vercel.app/pwa/index.html'
  };

  document.querySelectorAll('a[href="#whatsapp-link"]').forEach(a => {
    if (CONFIG.whatsapp) {
      a.href = CONFIG.whatsapp;
      a.target = '_blank';
      a.rel = 'noopener';
    } else {
      a.addEventListener('click', e => {
        e.preventDefault();
        alert('O link do grupo oficial do WhatsApp ainda não foi configurado.');
      });
    }
  });

  document.querySelectorAll('[data-download]').forEach(a => {
    if (CONFIG.download) {
      a.href = CONFIG.download;
      a.removeAttribute('data-download');
    } else {
      a.addEventListener('click', e => {
        e.preventDefault();
        alert('O endereço do QuadroFlow ainda não foi configurado.');
      });
    }
  });
});
