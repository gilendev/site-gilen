
## Diagnóstico do Erro de Build

O erro ocorre porque o pacote **framer-motion** não está instalado no projeto, mas é importado em vários componentes (`ProjetosSection.tsx`, `SolucoesSection.tsx`, etc.).

### Solução Imediata

1. **Instalar framer-motion** (compatível com React 18)
2. **Atualizar vite.config.ts** para deduplicar React e framer-motion (evita conflitos)
3. **Atualizar browserslist** conforme sugerido no log

### Arquivos Modificados
- `package.json` — adicionar framer-motion às dependências
- `vite.config.ts` — adicionar configuração de deduplicação
- `bun.lock` — lockfile atualizado automaticamente
