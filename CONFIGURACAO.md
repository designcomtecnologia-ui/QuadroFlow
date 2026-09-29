# CONFIGURAÇÃO DE PUBLICAÇÃO

## WhatsApp

Arquivo:

`js/access-download.js`

Localize:

```js
whatsapp: ''
```

Substitua pelo link real do grupo oficial do WhatsApp.

## PWA

O site já aponta o botão de abertura para:

```text
../pwa/QuadroFlow.html
```

Ao publicar a estrutura mantendo `site/` e `pwa/` como diretórios irmãos, o link funciona.

Se o PWA for publicado em outro endereço, altere somente:

```js
download: 'URL_DO_PWA'
```

## HTTPS

O PWA deve ser publicado em HTTPS em produção.

## O que NÃO deve ser alterado sem necessidade

- `manifest.json`
- `service-worker.js`
- `qf-storage.js`
- estrutura de `fonts/`
- nomes dos ícones

## Pacote

O ZIP completo é um pacote mestre de publicação/backup. O cliente final não precisa receber este ZIP; ele recebe o endereço do PWA.
