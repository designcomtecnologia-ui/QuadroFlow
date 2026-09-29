# QuadroFlow — versão 1.3.0

## Atualização completa de identidade de aplicativo
- Novo ícone de aplicativo aplicado ao PWA, site, favicon e pacote multiplataforma.
- Manifest atualizado com 192, 256, 512 e 1024 px.
- `apple-touch-icon.png` incluído para dispositivos Apple.
- `favicon.ico` atualizado.
- `QuadroFlow.ico` atualizado para Windows.
- `QuadroFlow.icns` incluído para macOS.
- PNGs padronizados incluídos para Linux.
- Service Worker/cache atualizado para 1.3.0 para evitar que o navegador mantenha o ícone antigo.
- O logo horizontal e o símbolo usado dentro da interface continuam separados do ícone de aplicativo.

## Identidade
O ícone é uma aplicação do símbolo QuadroFlow. Não redesenhe, troque a cor ou substitua o símbolo nas próximas versões sem atualizar toda a família de arquivos.

## Dados
O quadro, tarefas entregues, lixeira e anexos usam armazenamento local via IndexedDB. Faça backups periódicos.

## Publicação
Publique a pasta `pwa/` em HTTPS para instalação e funcionamento offline.
