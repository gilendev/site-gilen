

## Construir a página Soluções completa

Atualmente a `SolucoesSection` é apenas um grid simples com 4 cards. Vou expandir para uma página completa seguindo o mesmo padrão da página Empresa, com múltiplas seções e animações.

### Estrutura da página

1. **Hero Banner** — Fundo escuro (`bg-graphite`), título "Nossas Soluções", subtítulo sobre capacidades industriais
2. **Visão Geral** — Os 4 cards atuais (Engenharia, Produção Industrial, Estruturas Personalizadas, Projetos Especiais) expandidos com mais detalhes
3. **Detalhamento de cada solução** — Seções alternadas (texto + ícone/visual) para cada uma das 4 soluções, com lista de capacidades específicas:
   - **Engenharia**: projeto técnico, modelagem 3D, análise estrutural, documentação
   - **Produção Industrial**: CNC, corte a laser, dobra, soldagem, pintura eletrostática
   - **Estruturas Personalizadas**: racks, cases, suportes, gabinetes, painéis
   - **Projetos Especiais**: consultoria, prototipagem, produção sob demanda
4. **Diferenciais** — Seção com ícones destacando: precisão, prazos, personalização, suporte técnico
5. **CTA Final** — "Solicite um orçamento" com link para `/contato`

### Detalhes técnicos

- Arquivo alterado: `src/components/sections/SolucoesSection.tsx`
- Reutiliza o padrão `SectionBlock` com `framer-motion` + `useInView`
- Ícones Lucide adicionais: `CheckCircle`, `Clock`, `Ruler`, `HeadphonesIcon`, `ArrowRight`
- Mantém compatibilidade com a home (Index.tsx) e página dedicada (SolucoesPage.tsx)

