# QuadroFlow — pacote final

Este pacote reúne o produto, PWA, site de apresentação, páginas de acesso/download e documentação.

## Estrutura

- `pwa/` — aplicativo QuadroFlow + PWA + armazenamento local + tarefas entregues + lixeira + anexos.
- `site/` — landing page, página de acesso e página de download.
- `docs/` — briefing, PRD, especificação, workflows e como usar.
- `CONFIGURACAO.md` — pontos que precisam ser definidos antes da publicação comercial.

## Aplicativo

O QuadroFlow usa IndexedDB para manter o quadro, tarefas entregues, lixeira e anexos no dispositivo. O Service Worker permite a instalação como PWA quando publicado em HTTPS.

### Fluxo principal

Tarefas → Iniciar as tarefas → Tarefa em produção → Tarefa resolvida → Tarefa entregue

A cor do post-it é derivada do quadrante atual.

## Quadrantes

Os quadrantes padrão são fixos. Quadrantes personalizados podem ser criados, editados, excluídos e reposicionados pelo cabeçalho. A partir de 5 quadrantes, o quadro usa rolagem horizontal com setas de navegação e indicador discreto.

## Publicação

1. Publique `pwa/` em HTTPS.
2. Publique `site/` no mesmo domínio, mantendo a estrutura relativa do pacote, ou ajuste os caminhos em `site/js/`.
3. Configure o link real do grupo de WhatsApp em `site/js/access-download.js`.
4. Faça backup dos dados de produção antes de atualizações importantes.

## Importante

O pacote está funcional localmente e os links internos entre site e PWA estão preparados. O único dado externo que não pode ser inventado é o URL real do grupo oficial do WhatsApp; ele permanece configurável no arquivo indicado acima.
