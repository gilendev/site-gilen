# GILEN Industrial

Site institucional e catálogo de marcas da GILEN Industrial.

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Supabase Edge Functions

## Desenvolvimento local

Requisitos:

- Bun 1.3 ou superior

Instale as dependências e inicie o servidor:

```sh
bun install --frozen-lockfile
bun run dev
```

O site ficará disponível em `http://localhost:8080`.

## Comandos

```sh
bun run dev       # servidor de desenvolvimento
bun run build     # build de produção
bun run preview   # prévia do build
bun run test      # testes unitários
bun run lint      # análise estática
```

## Configuração

O frontend utiliza as seguintes variáveis:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_KEY=
```

O Supabase é usado somente para a Edge Function do formulário de contato. O
projeto não utiliza tabelas, autenticação, storage ou consultas ao banco de
dados.

A função `send-contact-email` exige `RESEND_API_KEY` configurada como segredo no
projeto Supabase.

## Publicação

O repositório está conectado à aplicação `gilenindustrial.com.br` na Hostinger.
Pushes na branch `main` iniciam automaticamente um novo build Vite com Node.js
22.x e publicam o resultado.
