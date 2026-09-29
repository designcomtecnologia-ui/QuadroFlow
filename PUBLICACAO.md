# QuadroFlow — publicação

## PWA

A pasta `pwa/` deve ser publicada em HTTPS. Não abra o aplicativo diretamente por `file://` se a intenção for testar instalação/offline, pois o Service Worker depende de um contexto seguro.

## Site

A pasta `site/` contém:

- `index.html` — landing page
- `acesso.html` — página de aquisição
- `download.html` — página pós-compra

O botão de download aponta para `../pwa/index.html`.

## WhatsApp

Abra `site/js/access-download.js` e altere somente:

```js
whatsapp: 'COLE_AQUI_O_LINK_OFICIAL_DO_GRUPO'
```

Depois disso, todos os botões que usam o grupo oficial passam a apontar para o mesmo endereço.

## Teste final

- Abrir landing page.
- Navegar até Acesso.
- Conferir botão do WhatsApp.
- Abrir Download.
- Abrir o PWA.
- Criar uma tarefa.
- Adicionar imagem/PDF/documento.
- Arrastar a tarefa entre quadrantes.
- Criar um quadrante personalizado.
- Abrir Gerenciar quadrantes.
- Criar 5 ou mais quadrantes e testar rolagem horizontal.
- Testar filtro.
- Testar Entregues.
- Testar Lixeira e restauração.
- Testar backup/restauração.
- Imprimir/PDF.
- Instalar o PWA em navegador compatível.


## Ícones — atualização 1.3.0

A família oficial de ícones está em `platform-icons/`. Para o PWA, os arquivos usados pelo navegador estão em `pwa/`. Para o site, o favicon/app icon está em `site/images/`.

Se publicar uma nova versão, atualize os arquivos em conjunto e mantenha o Service Worker com nova versão de cache.
