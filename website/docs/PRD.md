# PRD — QuadroFlow

## 1. Objetivo do produto

Entregar uma ferramenta visual simples para criar, organizar, acompanhar, resolver e entregar tarefas, com armazenamento local e experiência PWA.

## 2. Produto comercial

- compra única;
- sem mensalidade;
- atualizações disponibilizadas para compradores serão gratuitas;
- comunicação e pagamento podem ser conduzidos pelo grupo oficial do WhatsApp;
- o endereço do WhatsApp permanece configurável antes da publicação.

## 3. Requisitos funcionais

### Quadro

- cinco etapas padrão;
- quadrantes personalizados entre os extremos;
- reordenação de quadrantes;
- scroll horizontal quando necessário.

### Post-it

- Cliente;
- Título;
- Texto;
- Prioridade: alta, média ou baixa;
- URLs;
- arquivos/anexos;
- edição;
- exclusão;
- drag-and-drop;
- data/hora e histórico de entrega.

### Filtro

Um campo universal pode localizar informações por cliente, título, texto, prioridade, URLs, nome/tipo de arquivo e quadrante.

### Entregues

Ao entrar em **Tarefa entregue**, a tarefa recebe registro de entrega. Após o período definido pela aplicação, é movida para o arquivo de entregues, não para a lixeira.

### Lixeira

- restaurar para a origem quando disponível;
- excluir definitivamente.

### Backup

- exportar quadro, entregues, lixeira e anexos;
- restaurar backup;
- confirmar antes de substituir dados atuais.

### PWA

- manifest;
- Service Worker;
- cache offline;
- instalação quando suportada pelo navegador;
- orientação específica quando a instalação automática não estiver disponível;
- fonte local;
- atualização de versão.

## 4. Requisitos não funcionais

- interface responsiva;
- baixo atrito;
- armazenamento local;
- funcionamento offline após instalação/cache;
- nenhuma dependência de servidor para os dados do quadro;
- mensagens compreensíveis para usuário leigo.
