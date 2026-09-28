# WORKFLOWS — QuadroFlow

## WF-01 — Criar post-it

1. Clicar em Adicionar post-it.
2. Informar Cliente, Título e Texto.
3. Escolher prioridade.
4. Adicionar URLs, uma por linha, se houver.
5. Selecionar arquivos, se houver.
6. Validar obrigatórios.
7. Criar no quadrante.
8. Calcular cor pelo quadrante.
9. Persistir.
10. Renderizar.

## WF-02 — Mover post-it

1. Identificar origem.
2. Identificar destino.
3. Remover da origem.
4. Inserir no destino.
5. Recalcular cor pelo destino.
6. Se destino for Tarefa entregue, registrar `deliveredAt` e `deliveryDue`.
7. Persistir.

## WF-03 — Enviar para lixeira

1. Usuário aciona a lixeira do post-it.
2. Exibir confirmação.
3. Remover do quadrante.
4. Inserir em `trash` com origem e data.
5. Persistir.
6. Atualizar a tela.

## WF-04 — Restaurar da lixeira

1. Abrir `lixeira.html`.
2. Clicar em Voltar.
3. Localizar quadrante de origem.
4. Restaurar.
5. Recalcular cor pelo quadrante restaurado.
6. Remover metadados de lixeira.
7. Persistir.

## WF-05 — Arquivar tarefa entregue

1. Tarefa entra em Tarefa entregue.
2. Registrar `deliveredAt`.
3. Calcular `deliveryDue = deliveredAt + 2 dias`.
4. Verificar tarefas vencidas.
5. Transferir para `delivered`.
6. Registrar `archivedAt`.
7. Preservar dados e anexos.
8. Persistir.

Nunca enviar automaticamente para a lixeira.

## WF-06 — Filtrar

1. Abrir o painel Filtro.
2. Digitar um termo no único campo.
3. Pesquisar tarefas ativas e arquivadas.
4. Considerar cliente, título, texto, prioridade, URLs, nomes/tipos de arquivos, quadrante e metadados disponíveis.
5. Ocultar tarefas sem correspondência.
6. Exibir resultados arquivados quando aplicável.

## WF-07 — Menu lateral

1. Clicar no botão hambúrguer.
2. Abrir menu lateral.
3. Executar comando secundário.
4. Fechar pelo X, clique externo ou Escape.

## WF-08 — Imprimir/PDF

1. Usuário clica em Imprimir/PDF.
2. Não abrir popup nem nova janela.
3. Montar o conteúdo no `#printSheet`.
4. Ocultar toolbar, quadro, menu, filtro e rodapé durante a impressão.
5. Exibir somente o checklist.
6. Organizar quadrantes verticalmente.
7. Aplicar a cor de cada quadrante.
8. Organizar tarefas verticalmente.
9. Exibir quadrado `□` em cada tarefa.
10. Exibir título, cliente, texto e prioridade quando existirem.
11. Evitar quebra de tarefa entre páginas.
12. Executar `window.print()`.
13. Usuário escolhe impressora ou Salvar como PDF.
14. Após o diálogo, limpar o conteúdo temporário de impressão.

A impressão não altera os dados nem o status das tarefas.

## WF-09 — Novo quadrante

1. Criar quadrante customizado.
2. Informar nome.
3. Escolher primeira cor disponível.
4. Inserir entre Tarefas e Tarefa entregue.
5. Permitir reordenação.

## WF-10 — Scroll horizontal

Até quatro quadrantes ocupam a largura. A partir do quinto, usar largura fixa e overflow horizontal. Setas aparecem quando necessário.

## WF-11 — Salvar

1. Clicar Salvar.
2. Persistir estado, arquivo e lixeira na camada de armazenamento.
3. Exibir confirmação de sucesso.

## WF-12 — Carregar

1. Ler armazenamento.
2. Validar estruturas.
3. Recuperar dados legados quando necessário.
4. Criar quadrantes padrão se for instalação nova.
5. Recalcular cores.
6. Arquivar entregues vencidos.
7. Renderizar.

## WF-13 — Regra de ouro da cor

```text
QUALQUER OPERAÇÃO
        ↓
identificar quadrante atual
        ↓
calcular cor do quadrante
        ↓
atualizar fundo visual
        ↓
persistir dado derivado, se necessário
```

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
