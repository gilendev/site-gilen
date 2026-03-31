

# Plano: Criar URLs dedicadas para cada categoria de produtos

## Situação atual

O site tem a seguinte estrutura de URLs:

```text
/                          → Home
/empresa                   → Empresa
/marcas                    → Nossas Marcas
/projetos                  → Projetos
/tecnologia                → Tecnologia
/solucoes                  → Soluções
/projetos-especiais        → Projetos Especiais
/contato                   → Contato

/gil-cases                 → Landing page Gil Cases
/gil-cases/produtos        → Todos os produtos (filtro por categoria)
/totens-interativos        → Página separada de Totens

/parametrizze              → Landing Parametrizze
/parametrizze/produtos     → Produtos Parametrizze
/gourmetizze               → Landing Gourmetizze
/gourmetizze/produtos      → Produtos Gourmetizze
/comicpets                 → Landing Comicpets
/comicpets/produtos        → Produtos Comicpets
/design-kids               → Landing Design Kids
/design-kids/produtos      → Produtos Design Kids
```

**Problemas identificados:**
- `/totens-interativos` está fora da hierarquia `/gil-cases/`
- Não há URLs individuais para cada linha de produto (cases, suportes, totens, estruturas)
- Produtos de Gil Cases estão todos numa única página com filtros, sem caminhos diretos

## Plano de implementação

### 1. Adicionar suporte a categoria na URL do BrandProductsLayout

Modificar `BrandProductsLayout.tsx` para aceitar um parâmetro de URL opcional `/:categoria` que pré-filtra os produtos. Exemplo: `/gil-cases/produtos/cases` abre a página já filtrada na categoria "cases".

- Usar `useParams()` para capturar a categoria da URL
- Se houver categoria na URL, pré-selecionar o filtro correspondente
- Manter `/gil-cases/produtos` funcionando (mostra todos)

### 2. Criar rotas com categoria para Gil Cases

Adicionar no `App.tsx`:
```text
/gil-cases/produtos                → Todos os produtos
/gil-cases/produtos/cases          → Linha de Cases
/gil-cases/produtos/suportes       → Linha de Suportes
/gil-cases/produtos/totens         → Totens Interativos
/gil-cases/produtos/estruturas     → Estruturas Metálicas
```

Usar uma rota com parâmetro opcional: `/gil-cases/produtos/:categoria?`

### 3. Mover Totens Interativos para dentro de Gil Cases

- Redirecionar `/totens-interativos` para `/gil-cases/produtos/totens` (manter compatibilidade)
- Atualizar links internos que apontam para `/totens-interativos`

### 4. Aplicar o mesmo padrão às outras marcas

```text
/parametrizze/produtos/:categoria?
/gourmetizze/produtos/:categoria?
/comicpets/produtos/:categoria?
/design-kids/produtos/:categoria?
```

### 5. Atualizar navegação

- Atualizar `navSections` em cada página de marca para linkar para as categorias específicas
- Atualizar links nos cards da landing page Gil Cases (Linha de Cases → `/gil-cases/produtos/cases`)
- Atualizar BrandNavbar para destacar a categoria ativa

### Arquivos a modificar

| Arquivo | Alteração |
|---------|-----------|
| `src/App.tsx` | Adicionar rotas com `:categoria?`, redirect de `/totens-interativos` |
| `src/components/layout/BrandProductsLayout.tsx` | Ler `useParams` para pré-filtrar categoria |
| `src/pages/GilCasesPage.tsx` | Atualizar links dos cards de produto |
| `src/pages/GilCasesProductsPage.tsx` | Atualizar navSections com URLs por categoria |
| `src/pages/ParametrizzeProductsPage.tsx` | Atualizar navSections |
| `src/pages/GourmetizzeProductsPage.tsx` | Atualizar navSections |
| `src/pages/ComicpetsProductsPage.tsx` | Atualizar navSections |
| `src/pages/DesignKidsProductsPage.tsx` | Atualizar navSections |
| `src/pages/TotensInterativosPage.tsx` | Manter mas redirecionar para `/gil-cases/produtos/totens` |

