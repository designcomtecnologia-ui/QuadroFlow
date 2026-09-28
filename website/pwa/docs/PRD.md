# PRD — QuadroFlow

## 1. Objetivo

Entregar uma ferramenta visual, simples e confiável para gerenciamento de tarefas, com Kanban, post-its, armazenamento local, anexos visualizáveis, busca unificada, arquivamento de tarefas entregues, lixeira independente e impressão operacional em formato checklist.

## 2. Requisitos funcionais

### RF-001 — Criar post-it
Campos: Cliente, Título, Texto, Prioridade, URLs e arquivos. Título e texto são obrigatórios.

### RF-002 — Hierarquia visual
Cliente 11px light; Título 16px medium; Texto 13px regular; prioridade por bolinha; anexos; URLs.

### RF-003 — Prioridade
Alta = vermelho; Média = amarelo; Baixa = verde. Uma prioridade por tarefa.

### RF-004 — Campos removidos
Projeto e Tags não aparecem no formulário.

### RF-005 — Anexos e preview
Aceitar imagens, vídeos, PDF, DOC/DOCX e XLS/XLSX. Imagem deve ter thumbnail e zoom; vídeo, thumbnail e player; PDF, preview embutido; Word/Excel, preview client-side quando tecnicamente possível.

### RF-006 — URLs
Permitir múltiplas URLs, uma por linha.

### RF-007 — Cor por quadrante
O fundo do post-it é sempre derivado do quadrante atual.

### RF-008 — Movimentação
Ao mover, recalcular a cor imediatamente pelo destino.

### RF-009 — Restauração
Ao restaurar da lixeira, recalcular a cor pelo quadrante restaurado.

### RF-010 — Tarefa entregue
Usar `#DCCFED`; registrar data de entrega; após dois dias, arquivar em Tarefas Entregues.

### RF-011 — Lixeira
Página própria `lixeira.html`, apenas para exclusões manuais. Ações: Voltar e Excluir.

### RF-012 — Filtro unificado
Um único campo de pesquisa deve considerar cliente, título, texto, prioridade, URLs, arquivos, quadrante e metadados relevantes disponíveis. Deve pesquisar tarefas ativas e arquivadas.

### RF-013 — Menu lateral
Comandos secundários ficam em menu lateral deslizante.

### RF-014 — Filtro superior
O painel de filtro desliza de cima para baixo e não altera o layout dos quadrantes.

### RF-015 — Impressão/PDF
Ao clicar em Imprimir/PDF, não abrir popup. Preparar uma folha A4 vertical no próprio documento e chamar o diálogo nativo de impressão.

A saída deve apresentar: quadrantes um abaixo do outro, cor do quadrante, tarefas uma abaixo da outra, quadrado vazio para marcação manual, título, cliente, texto e prioridade. Cada tarefa deve evitar quebra entre páginas.

### RF-016 — Quadrantes
Criar, renomear, excluir e reordenar quadrantes customizados. Tarefas primeiro; Tarefa entregue último.

### RF-017 — Cores únicas
Novo quadrante usa cor disponível sem repetir outra em uso.

### RF-018 — Responsividade
Até quatro quadrantes adaptativos; cinco ou mais com largura fixa e overflow horizontal.

### RF-019 — Persistência
Usar camada de armazenamento local compartilhada. IndexedDB deve armazenar anexos e dados locais necessários; migração de dados legados deve ocorrer quando necessário.

### RF-020 — Performance
Evitar reconstrução integral do DOM e serialização pesada a cada pequena alteração.

## 3. Critérios de aceitação

1. Formulário contém somente os seis campos oficiais.
2. Hierarquia tipográfica e prioridade estão corretas.
3. Cor muda conforme o quadrante em criação, movimento e restauração.
4. Lixeira funciona em página própria.
5. Entregues funciona em página própria.
6. Busca única encontra cliente, título, texto, prioridade, URLs e arquivos.
7. Menu lateral funciona sem deslocar o layout principal.
8. Filtro superior abre/fecha sem alterar a estrutura dos quadrantes.
9. Imprimir/PDF não usa `window.open` nem depende de popup.
10. A impressão apresenta quadrantes verticalmente.
11. Cada tarefa impressa apresenta `□` para marcação manual.
12. Cores dos quadrantes aparecem na impressão quando o driver/navegador permite impressão de cores.
13. Tarefas não são quebradas entre páginas sempre que possível.
14. O quadro na tela não é alterado pela operação de impressão.
15. Dados persistem entre páginas locais.
16. Anexos permanecem fora do estado textual pesado.

## Atualização de usabilidade — impressão e PDF

A impressão do QuadroFlow é tratada como uma **folha operacional de checklist**, e não como uma cópia da interface do quadro.

Ao acionar **Imprimir / PDF**:

- não abrir nova janela ou popup;
- usar o diálogo de impressão do próprio documento;
- formato A4 vertical;
- quadrantes apresentados **um abaixo do outro**;
- manter a cor de cada quadrante;
- tarefas apresentadas uma abaixo da outra dentro de cada quadrante;
- cada tarefa deve ter um quadrado vazio `□` para marcação manual;
- exibir título, cliente, texto e prioridade quando existirem;
- evitar quebrar uma tarefa entre páginas;
- permitir ao usuário escolher impressora ou **Salvar como PDF** no diálogo do sistema.

A impressão não altera o estado das tarefas no QuadroFlow. O quadrado impresso é uma marcação física/manual; ele não transforma a tarefa em concluída dentro do aplicativo.
