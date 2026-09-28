# QuadroFlow — versão 1.2.0

## Finalização
- Menu reorganizado com acesso explícito a **Gerenciar quadrantes**.
- Gerenciamento de quadrantes: criar, editar e excluir quadrantes personalizados.
- Reordenação de quadrantes continua disponível pelo arraste do cabeçalho.
- Navegação horizontal preservada para 5 ou mais quadrantes.
- Indicador discreto de rolagem aparece quando existe conteúdo horizontal fora da área visível.
- Filtro universal, lixeira, tarefas entregues, backup/restauração e anexos mantidos.
- Landing page com botão interno de acesso ao PWA.
- Service Worker/cache atualizado para 1.2.0.

## Dados
O quadro, tarefas entregues, lixeira e anexos usam o armazenamento local do navegador via IndexedDB. Faça backups periódicos.

## Publicação
Para instalar como PWA, publique a pasta `pwa` em HTTPS. O Service Worker não funciona em `file://`.
