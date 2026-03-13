

## Recriar a página Empresa completa

O arquivo `EmpresaSection.tsx` foi revertido para a versão básica durante a correção de roteamento. Preciso recriá-lo com toda a estrutura que foi aprovada anteriormente.

### Estrutura a ser implementada

O componente `EmpresaSection.tsx` será reescrito com as seguintes seções:

1. **Hero Banner** — Título "Nossa História" com subtítulo animado e fundo escuro com grid-overlay
2. **História e Timeline** — Timeline vertical com marcos da empresa (2010: fundação GIL Case, 2015: expansão, 2018: novas tecnologias, 2020: rebranding GILEN, 2024: consolidação industrial)
3. **Barra de Números** — Stats com métricas: 10+ anos, 500+ projetos, 1000m² planta, 50+ clientes
4. **Missão, Visão e Valores** — Grid de cards com ícones Lucide (Target, Eye, Shield, Users)
5. **Infraestrutura** — Seção sobre capacidade produtiva (CNC, soldagem, pintura)
6. **CTA Final** — Link para página de contato

### Detalhes técnicos

- Arquivo alterado: `src/components/sections/EmpresaSection.tsx`
- Animações: `framer-motion` com `useInView` para cada seção
- Ícones: Lucide React (Target, Eye, Shield, Users, Factory, Cog, Zap)
- Mantém compatibilidade com uso na home (Index.tsx) e na página dedicada (EmpresaPage.tsx)

### Nota sobre a página dedicada

A `EmpresaPage.tsx` continuará usando o mesmo componente — na home ele aparece como resumo e na rota `/empresa` como página completa. Opcionalmente posso criar uma prop `fullPage` para diferenciar o conteúdo entre os dois contextos.

