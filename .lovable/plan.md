

## Vídeo de fundo no Hero (estilo ABB)

Substituir o fundo estático escuro do HeroSection por um vídeo fullscreen em loop, com overlay escuro semitransparente para manter a legibilidade do texto.

### Alterações em `src/components/sections/HeroSection.tsx`

1. **Adicionar tag `<video>`** com atributos `autoPlay`, `muted`, `loop`, `playsInline`, posicionado absolutamente cobrindo toda a seção (`object-cover`).
2. **Usar vídeo placeholder** de ambiente industrial de fonte gratuita (ex: vídeo de fábrica/engenharia do Pexels via CDN pública).
3. **Manter overlay escuro** (`bg-black/60`) sobre o vídeo para contraste com o texto branco.
4. **Remover** os elementos decorativos orbitais (elipses) que não combinam com o estilo vídeo-background.
5. **Manter** todo o conteúdo textual, botões e stats bar como estão.

### Estrutura visual
```text
┌─────────────────────────────────┐
│  <video> fullscreen (absolute)  │
│  ┌───────────────────────────┐  │
│  │  overlay escuro (bg-black/60) │
│  │  ┌─────────────────────┐  │  │
│  │  │  conteúdo existente  │  │  │
│  │  │  (tag, título, CTAs) │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### Fonte do vídeo placeholder
URL pública de vídeo industrial gratuito (Coverr/Pexels CDN). Pode ser trocado futuramente por vídeo próprio da Gilen alterando apenas a URL.

