# QuadroFlow PWA — versão 1.1.0

Esta versão foi revisada para distribuição comercial como PWA.

## Correções
- Fonte Inter incluída localmente no projeto; o aplicativo não depende mais do Google Fonts para a tipografia principal.
- Service Worker atualizado para `quadroflow-pwa-v1.1.0`.
- Os arquivos da fonte são incluídos no cache offline.
- Manifesto recebeu `id` estável para a instalação do aplicativo.
- O fluxo offline e a atualização de cache continuam preservados.

## Distribuição
O usuário final deve receber um link HTTPS. O fluxo esperado é:

**link → abre → instala → usa**

Não é necessário Node, npm, Terminal ou Electron.
