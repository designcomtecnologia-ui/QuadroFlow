# BRIEFING — QuadroFlow

## 1. Visão do produto

O **QuadroFlow** é uma ferramenta visual de gestão de tarefas baseada em Kanban e post-its. A versão atual é **local-first**, sem servidor obrigatório, com persistência local e foco em baixo atrito.

O produto deve funcionar bem tanto na tela quanto no uso físico por impressão/PDF. A impressão é uma saída operacional de checklist, não uma reprodução da interface.

## 2. Princípios

- **Visual-first:** o estado é percebido rapidamente pelo quadrante e sua cor.
- **Baixo atrito:** criar, localizar e acompanhar uma tarefa deve ser rápido.
- **Cor contextual:** o post-it nunca decide sua própria cor; a cor vem do quadrante atual.
- **Recuperabilidade:** exclusão e arquivamento são operações diferentes.
- **Visualização real:** anexos devem ter preview quando tecnicamente possível.
- **Busca simples:** um único campo deve pesquisar o conteúdo relevante da tarefa.
- **Impressão útil:** a saída impressa deve funcionar como checklist físico.
- **Responsividade real:** até quatro quadrantes ocupam a área disponível; cinco ou mais ativam scroll horizontal sem encolher os quadrantes.

## 3. Quadrantes fixos e cores

1. **Tarefas** — `#F6E7A8`
2. **Iniciar as tarefas** — `#CFE5C5`
3. **Tarefa em produção** — `#C9DDE8`
4. **Tarefa resolvida** — `#EBC9D0`
5. **Tarefa entregue** — `#DCCFED`

Tarefas permanece primeiro e Tarefa entregue permanece por último. Quadrantes customizados ficam entre os extremos e recebem cores disponíveis sem repetição.

## 4. Regra absoluta de cores

A cor visual do post-it é sempre derivada do quadrante onde ele está. Isso vale para criação, edição, movimentação, restauração, carregamento de dados antigos, renderização e arquivamento.

`note.color` pode existir apenas como dado derivado/compatibilidade. Nunca é a fonte visual de verdade.

## 5. Hierarquia visual do post-it

1. **Cliente** — 11px, light (`font-weight: 300`)
2. **Título** — 16px, medium (`font-weight: 500`)
3. **Texto** — 13px, regular (`font-weight: 400`)
4. **Prioridade** — bolinha no topo
5. **Miniaturas/preview de anexos**
6. **URLs**

Prioridade: Alta = vermelho; Média = amarelo; Baixa = verde. A prioridade nunca altera o fundo do post-it.

## 6. Formulário

Campos oficiais:

1. Cliente
2. Título
3. Texto
4. Prioridade
5. URLs
6. Escolher arquivos

Projeto e Tags não fazem parte desta versão.

## 7. Anexos

Aceitar imagens, vídeos, PDF, DOC/DOCX e XLS/XLSX. O objetivo padrão é visualizar o conteúdo; quando um formato não puder ser renderizado com confiabilidade, oferecer fallback claro para abrir/baixar.

## 8. URLs

Múltiplas URLs, uma por linha, preservadas no post-it e no histórico/arquivo.

## 9. Entrega, arquivo e lixeira

Ao entrar em Tarefa entregue, registrar `deliveredAt` e prazo de dois dias. Após o prazo, transferir para **Tarefas Entregues** (`entregues.html`). Isso não é exclusão e não envia a tarefa para a lixeira.

A lixeira (`lixeira.html`) recebe apenas exclusões manuais. Ações do item: **Voltar** e **Excluir**. Ao restaurar, a cor é recalculada pelo quadrante de destino.

## 10. Filtro e menu

O topo mantém visíveis apenas:

- **+ Adicionar post-it**
- **Filtro**
- **Menu**

O menu lateral concentra comandos secundários, como salvar, carregar, imprimir/PDF, Tarefas Entregues, Lixeira e gerenciamento de quadrantes.

O Filtro abre um painel deslizante superior com **um único campo de busca**. A busca considera cliente, título, texto, prioridade, URLs, nomes/tipos de anexos, quadrante e campos de histórico/responsável/projeto quando existirem.

## 11. Impressão/PDF

A impressão é uma saída de checklist operacional:

- A4 vertical;
- quadrantes em sequência vertical;
- cores dos quadrantes preservadas;
- tarefas em sequência vertical;
- quadrado `□` para marcação manual;
- título, cliente, texto e prioridade;
- sem popup ou nova janela;
- usar o diálogo de impressão do sistema;
- salvar como PDF pelo próprio diálogo quando desejado.

O checklist impresso não altera o status da tarefa no aplicativo.

## 12. Layout

Até quatro quadrantes: largura adaptativa. A partir de cinco: aproximadamente 310px por quadrante, com scroll horizontal por mouse/trackpad e setas quando houver overflow.

## 13. Persistência e performance

O estado leve e os anexos são tratados por uma camada de armazenamento local compartilhada. O armazenamento deve permitir que `QuadroFlow.html`, `lixeira.html` e `entregues.html` trabalhem com a mesma base.

Anexos binários devem permanecer em IndexedDB; o estado do aplicativo não deve carregar Base64 pesado a cada alteração. Gravações podem ser agrupadas/debounced, mas a ação explícita de Salvar deve persistir imediatamente.

A inicialização deve recuperar dados legados quando existirem e criar os quadrantes padrão quando for uma instalação nova.

## 14. Distribuição

A versão comercial Electron deve entregar ao usuário final somente o instalador do sistema correspondente. O cliente não deve precisar executar Node.js, npm ou Terminal.

Formatos previstos:

- Windows: instalador `.exe`;
- macOS: `.dmg`;
- Linux: `.AppImage` e/ou `.deb`.

O projeto-fonte e o processo de compilação permanecem separados do produto entregue ao cliente.
