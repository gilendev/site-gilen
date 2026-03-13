

## Substituir vídeo do Hero pelo próprio

### Objetivo
Permitir que o usuário substitua o vídeo placeholder do Pexels por um vídeo próprio da Gilen Industrial.

### Como funciona

**Atualmente:**
- Vídeo carregado de URL externa: `https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4`
- Poster (imagem de preview): `https://images.pexels.com/videos/3129671/free-video-3129671.jpg`

**Após a mudança:**
- Vídeo carregado localmente: `/video-gilen.mp4` (ou nome que preferir)
- Poster: `/poster-gilen.jpg` (opcional, imagem estática enquanto carrega)

### Passos para o usuário:

1. **Preparar o vídeo:**
   - Formato: MP4 (codec H.264)
   - Resolução ideal: 1920x1080 (Full HD) ou 2560x1440 (2K)
   - Tamanho: máximo 20MB recomendado
   - Duração: 10-30 segundos em loop
   - Proporção: 16:9 (widescreen)

2. **Fazer upload:**
   - Arrastar arquivo `.mp4` para a pasta `public/` no projeto
   - O arquivo ficará acessível em `https://seu-site.com/nome-do-video.mp4`

3. **Eu atualizo o código:**
   - Modificar `src/components/sections/HeroSection.tsx`
   - Trocar a URL do `<source>` do vídeo
   - Atualizar o `poster` (imagem de preview opcional)

### Código a ser alterado (linha 18-21):
```tsx
// DE:
<source
  src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
  type="video/mp4"
/>

// PARA:
<source
  src="/nome-do-seu-video.mp4"
  type="video/mp4"
/>
```

### Vantagens da pasta `public/`:
- Vídeo faz parte do projeto (controle total)
- Carregamento rápido (mesmo domínio)
- Funciona offline em desenvolvimento
- Sem dependência de serviços externos

