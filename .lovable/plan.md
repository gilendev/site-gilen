

# Configuração do Resend — Passo a Passo

O Resend já está integrado ao seu projeto (a API Key está salva e a Edge Function está configurada). O que falta é **verificar o domínio** para que os e-mails cheguem corretamente e não caiam no spam.

## Situação Atual

- **Edge Function**: `send-contact-email` — configurada e pronta
- **API Key do Resend**: já salva nos secrets do projeto
- **Remetente atual**: `onboarding@resend.dev` (domínio de teste do Resend)
- **Destinatário**: `contato@gilenindustrial.com.br` — já configurado

## O Que Você Precisa Fazer no Resend

### Passo 1 — Acessar o painel do Resend
Acesse [resend.com/domains](https://resend.com/domains) e faça login na sua conta.

### Passo 2 — Adicionar o domínio
1. Clique em **"Add Domain"**
2. Digite: `gilenindustrial.com.br`
3. Selecione a região (recomendo **South America** se disponível, senão **US East**)
4. Clique em **"Add"**

### Passo 3 — Configurar os registros DNS
O Resend vai mostrar **3 registros DNS** que você precisa adicionar no painel do seu provedor de domínio (Registro.br, GoDaddy, Cloudflare, etc.):

1. **MX Record** — para recebimento
2. **TXT Record (SPF)** — para autorizar envio
3. **CNAME Record (DKIM)** — para autenticação

Copie cada registro e adicione no painel DNS do seu provedor de domínio.

### Passo 4 — Verificar o domínio
Após adicionar os registros DNS, clique em **"Verify DNS"** no painel do Resend. A propagação pode levar de alguns minutos até 72 horas.

### Passo 5 — Atualizar o remetente na Edge Function
Depois que o domínio estiver verificado, eu vou atualizar a Edge Function para enviar de `contato@gilenindustrial.com.br` em vez de `onboarding@resend.dev`.

## Resumo das Ações

| Etapa | Quem faz | Onde |
|-------|----------|------|
| Adicionar domínio | Você | resend.com/domains |
| Adicionar registros DNS | Você | Painel do seu provedor de domínio |
| Verificar domínio | Você | resend.com/domains |
| Atualizar remetente | Eu | Edge Function do projeto |

Me avise quando o domínio estiver verificado no Resend para que eu atualize o remetente.

