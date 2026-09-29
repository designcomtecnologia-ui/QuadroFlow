# SPEC — QuadroFlow

## 1. Estrutura final

```text
QUADROFLOW_FINAL_COMPLETO/
├── site/
│   ├── index.html
│   ├── acesso.html
│   ├── download.html
│   ├── css/style.css
│   ├── js/landing.js
│   ├── js/access-download.js
│   └── images/
├── pwa/
│   ├── index.html
│   ├── QuadroFlow.html
│   ├── entregues.html
│   ├── lixeira.html
│   ├── qf-storage.js
│   ├── manifest.json
│   ├── service-worker.js
│   ├── fonts/
│   └── ícones/recursos
└── docs/
    ├── BRIEFING.md
    ├── PRD.md
    ├── SPEC.md
    ├── WORKFLOWS.md
    └── COMO_USAR.md
```

## 2. PWA

Manifesto:

- `display: standalone`;
- idioma `pt-BR`;
- orientação paisagem;
- cor de tema `#28A5C6`;
- entrada publicada em `index.html`;
- escopo relativo ao diretório `/pwa/`.

Service Worker:

- cache versionado;
- cache do shell da aplicação;
- atualização com `skipWaiting` e `clients.claim`;
- fallback offline para `index.html`;
- cache das fontes locais.

## 3. Persistência

O armazenamento principal usa IndexedDB por meio de `qf-storage.js`, incluindo os anexos como dados persistentes. Backup é uma camada adicional de segurança para o usuário.

## 4. Cores canônicas

```text
Tarefas             #F6E7A8
Iniciar as tarefas  #CFE5C5
Tarefa em produção  #C9DDE8
Tarefa resolvida    #EBC9D0
Tarefa entregue     #DCCFED
```

## 5. Instalação

O aplicativo tenta usar `beforeinstallprompt` quando disponível. Se o navegador não disponibilizar esse mecanismo, a interface orienta o usuário a procurar a opção de instalação do próprio navegador. Quando o navegador não oferece instalação como aplicativo, o usuário continua podendo usar o QuadroFlow pelo navegador.

## 6. Publicação

O PWA deve ser publicado em HTTPS. O site comercial pode apontar para `../pwa/QuadroFlow.html` ou para a URL definitiva do PWA por meio de `site/js/access-download.js`.
