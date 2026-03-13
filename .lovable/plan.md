

## Reestruturação da Identidade Visual baseada no Logo GILEN Industrial

### Análise do Logo

O logo apresenta:
- **Azul escuro/navy** profundo nos textos e elementos orbitais
- **Três faixas coloridas** no "E": vermelho, verde e azul (as cores de destaque)
- **Tons metálicos/prateados** nos contornos e degradês
- **Formas orbitais/elípticas** envolvendo o texto
- Tagline: "PRECISÃO - INOVAÇÃO - SOLUÇÕES"

### Plano de Implementação

**1. Copiar o logo para o projeto** e usá-lo na Navbar e Footer substituindo o texto "GILEN Industrial".

**2. Ajustar a paleta de cores** no `src/index.css` para refletir com precisão as cores do logo:
- **Primary:** Navy mais profundo (~HSL 215 65% 14%) para alinhar ao azul do logo
- **Accent (vermelho):** Ajustar para o vermelho do logo (~HSL 0 80% 48%)
- **Accent-green:** Verde do logo (~HSL 140 70% 38%)
- **Accent-blue:** Azul vibrante do logo (~HSL 215 85% 45%)
- **Steel/Graphite:** Tons metálicos mais prateados para refletir o acabamento metálico do logo

**3. Atualizar Navbar e Footer** para exibir a imagem do logo em vez do texto estilizado.

**4. Atualizar o HeroSection** para usar as cores refinadas e incorporar os elementos orbitais do logo de forma mais fiel.

**5. Revisar componentes** (cards de soluções, seção de marcas, etc.) para garantir consistência com a nova paleta.

### Arquivos Modificados
- `src/assets/logo-gilen.jpeg` (novo)
- `src/index.css` — paleta refinada
- `src/components/layout/Navbar.tsx` — logo image
- `src/components/layout/Footer.tsx` — logo image
- `src/components/sections/HeroSection.tsx` — cores e elementos orbitais ajustados

