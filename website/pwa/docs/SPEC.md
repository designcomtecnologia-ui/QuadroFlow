# SPEC — QuadroFlow

## 1. Modelo de dados

A tarefa contém, no mínimo:

```text
id
client
title
text
priority
urls[]
attachments[]
createdAt
deliveredAt
deliveryDue
```

O quadrante contém:

```text
id
title
status
color
notes[]
```

A cor efetiva deve ser calculada por uma função de autoridade equivalente a `qfQuadrantColor(column)`.

## 2. Armazenamento

A camada `qf-storage.js` fornece armazenamento local compartilhado entre as páginas. IndexedDB é usado para anexos binários e dados locais necessários; Base64 pesado não deve ser reserializado como parte do estado a cada operação.

A aplicação deve tolerar dados legados e migrar anexos quando encontrados. Em instalação nova, deve criar os quadrantes padrão.

## 3. Renderização

Alterações de uma tarefa devem evitar reconstrução integral do quadro quando a operação permitir. Filtros devem preferencialmente ocultar/mostrar elementos já renderizados.

## 4. Post-it

Estrutura visual:

```text
Cliente
Título
Texto
Prioridade
Anexos
URLs
```

Cliente: 11px / 300.
Título: 16px / 500.
Texto: 13px / 400.

## 5. Prioridade

```text
Alta   → vermelho
Média  → amarelo
Baixa  → verde
```

A prioridade não define o fundo do post-it.

## 6. Cor por quadrante

```js
function qfQuadrantColor(column){
  return DEFAULT_COLORS[column?.status] || column?.color || '#E8E8E8';
}
```

Qualquer operação que altere o quadrante deve recalcular a cor efetiva.

## 7. Filtro

A interface possui um único campo de busca. O texto normalizado deve ser comparado com uma representação pesquisável contendo cliente, título, texto, prioridade, URLs, nomes de anexos, tipo de arquivo, quadrante e metadados disponíveis.

## 8. Impressão/PDF

A impressão deve usar um contêiner dedicado no próprio documento, sem abrir nova janela.

Fluxo:

```text
Imprimir/PDF
      ↓
montar checklist no #printSheet
      ↓
ocultar interface operacional via @media print
      ↓
mostrar somente #printSheet
      ↓
window.print()
      ↓
diálogo do sistema
```

### Estrutura impressa

```text
QuadroFlow — Checklist de tarefas

TAREFAS
☐ Título
  Cliente
  Texto
  ● Prioridade

INICIAR AS TAREFAS
☐ Título
  Cliente
  Texto

TAREFA EM PRODUÇÃO
...

TAREFA RESOLVIDA
...

TAREFA ENTREGUE
...
```

Cada quadrante é um bloco vertical. O cabeçalho usa a cor do quadrante. Cada tarefa usa `break-inside: avoid` / `page-break-inside: avoid` para reduzir quebras ruins.

O quadrado é apenas marcação física/manual e não altera o status da tarefa.

## 9. Lixeira

`lixeira.html` lê a mesma camada de armazenamento e restaura a tarefa para o quadrante de origem, recalculando a cor.

## 10. Entregues

`entregues.html` lê o mesmo armazenamento. O arquivamento ocorre após dois dias no quadrante Tarefa entregue.

## 11. Layout

Até quatro quadrantes: `flex: 1 1 0`.
Cinco ou mais: aproximadamente `310px` fixos e `overflow-x: auto`.

Setas aparecem somente quando há overflow.

## 12. Qualidade

Validar:

- `node --check` quando houver JavaScript externo aplicável;
- integridade do ZIP;
- carregamento inicial;
- criação/edição;
- drag entre quadrantes;
- restauração;
- lixeira;
- entregues;
- filtro único;
- preview de anexos;
- persistência entre páginas;
- impressão sem popup;
- impressão com tarefas reais;
- cores dos quadrantes na impressão;
- cinco ou mais quadrantes.

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
