# Encontro 06: Imagens Responsivas

**Carga Horária:** 4 horas  
**Objetivo:** Dominar técnicas de otimização e implementação de imagens responsivas para melhorar performance e experiência do usuário.

---

## 1. Fundamentos de Imagens Responsivas (45 min)

### 1.1 Por que Imagens Responsivas?

**Problemas com imagens fixas:**
- ❌ Imagem grande carregada em mobile (desperdício de banda)
- ❌ Imagem pequena esticada em desktop (perda de qualidade)
- ❌ Mesma imagem para todos os tamanhos de tela
- ❌ Alto tempo de carregamento
- ❌ Consumo excessivo de dados móveis

**Benefícios das imagens responsivas:**
- ✅ Performance otimizada (carrega tamanho adequado)
- ✅ Economia de dados para usuários mobile
- ✅ Melhor experiência visual
- ✅ SEO melhorado
- ✅ Core Web Vitals otimizadas

### 1.2 Conceitos Básicos

**Densidade de pixels (DPR - Device Pixel Ratio):**
```
Telas normais:     DPR = 1x
Telas Retina:      DPR = 2x
Telas Ultra-HD:    DPR = 3x
```

**Viewport vs Image Size:**
```
Mobile (375px viewport) com DPR 2x = precisa de imagem 750px
Desktop (1920px viewport) com DPR 1x = precisa de imagem 1920px
```

### 1.3 CSS Básico para Imagens

```css
/* Imagem responsiva básica */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Previne estouro de container */
.container img {
  width: 100%;
  height: auto;
}

/* Object-fit para controle de proporção */
.image-cover {
  width: 100%;
  height: 300px;
  object-fit: cover; /* Preenche, pode cortar */
}

.image-contain {
  width: 100%;
  height: 300px;
  object-fit: contain; /* Cabe todo, pode ter espaço vazio */
}

.image-fill {
  width: 100%;
  height: 300px;
  object-fit: fill; /* Estica para preencher */
}
```

---

## 2. srcset e sizes (60 min)

### 2.1 Atributo srcset

**Sintaxe básica:**
```html
<img 
  src="image-800.jpg" 
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  alt="Descrição da imagem"
>
```

**Como funciona:**
- `400w` = largura da imagem em pixels (não viewport!)
- Navegador escolhe automaticamente a melhor imagem
- `src` é fallback para navegadores antigos

### 2.2 Usando srcset com DPR (x descriptor)

```html
<!-- Para ícones e imagens de tamanho fixo -->
<img 
  src="logo.png" 
  srcset="
    logo.png 1x,
    logo@2x.png 2x,
    logo@3x.png 3x
  "
  alt="Logo"
  width="200"
  height="50"
>
```

### 2.3 Atributo sizes

**Define quando usar cada imagem:**

```html
<img 
  src="fallback.jpg"
  srcset="
    small.jpg 400w,
    medium.jpg 800w,
    large.jpg 1200w,
    xlarge.jpg 1600w
  "
  sizes="
    (max-width: 600px) 100vw,
    (max-width: 900px) 50vw,
    33vw
  "
  alt="Imagem responsiva"
>
```

**Como ler sizes:**
```
Se viewport ≤ 600px: imagem ocupa 100% da largura (100vw)
Se viewport ≤ 900px: imagem ocupa 50% da largura (50vw)
Caso contrário: imagem ocupa 33% da largura (33vw)
```

### 2.4 Exemplo Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Imagens com srcset</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      padding: 1rem;
    }
    
    .hero-image {
      width: 100%;
      height: auto;
      display: block;
      margin-bottom: 2rem;
    }
    
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }
    
    .grid img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Galeria Responsiva</h1>
  
  <!-- Hero image -->
  <img 
    class="hero-image"
    src="https://via.placeholder.com/800x400"
    srcset="
      https://via.placeholder.com/400x200 400w,
      https://via.placeholder.com/800x400 800w,
      https://via.placeholder.com/1200x600 1200w,
      https://via.placeholder.com/1600x800 1600w
    "
    sizes="100vw"
    alt="Hero image"
  >
  
  <!-- Grid de imagens -->
  <div class="grid">
    <img 
      src="https://via.placeholder.com/400x300"
      srcset="
        https://via.placeholder.com/400x300 400w,
        https://via.placeholder.com/800x600 800w
      "
      sizes="(max-width: 768px) 100vw, 33vw"
      alt="Imagem 1"
    >
    
    <img 
      src="https://via.placeholder.com/400x300"
      srcset="
        https://via.placeholder.com/400x300 400w,
        https://via.placeholder.com/800x600 800w
      "
      sizes="(max-width: 768px) 100vw, 33vw"
      alt="Imagem 2"
    >
    
    <img 
      src="https://via.placeholder.com/400x300"
      srcset="
        https://via.placeholder.com/400x300 400w,
        https://via.placeholder.com/800x600 800w
      "
      sizes="(max-width: 768px) 100vw, 33vw"
      alt="Imagem 3"
    >
  </div>
</body>
</html>
```

---

## 3. Elemento `<picture>` (60 min)

### 3.1 Quando usar `<picture>`

Use `<picture>` quando precisar:
- ✅ Servir diferentes formatos (WebP, AVIF, etc)
- ✅ Direção de arte (imagens diferentes por tamanho)
- ✅ Controle total sobre qual imagem é carregada

### 3.2 Sintaxe Básica

```html
<picture>
  <source media="(min-width: 1024px)" srcset="desktop.jpg">
  <source media="(min-width: 768px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="Descrição">
</picture>
```

### 3.3 Formatos Modernos de Imagem

```html
<picture>
  <!-- AVIF - melhor compressão (mais novo) -->
  <source type="image/avif" srcset="image.avif">
  
  <!-- WebP - boa compressão (suportado amplamente) -->
  <source type="image/webp" srcset="image.webp">
  
  <!-- JPEG - fallback universal -->
  <img src="image.jpg" alt="Descrição">
</picture>
```

**Comparação de formatos:**
```
Tamanho do arquivo (mesma qualidade visual):
AVIF:  100KB  ⭐⭐⭐⭐⭐
WebP:  150KB  ⭐⭐⭐⭐
JPEG:  300KB  ⭐⭐⭐
PNG:   450KB  ⭐⭐
```

### 3.4 Direção de Arte (Art Direction)

**Problema:** Mesma imagem não funciona em todos os tamanhos

```html
<picture>
  <!-- Desktop: imagem horizontal completa -->
  <source 
    media="(min-width: 1024px)" 
    srcset="landscape-wide.jpg"
  >
  
  <!-- Tablet: imagem quadrada -->
  <source 
    media="(min-width: 768px)" 
    srcset="square.jpg"
  >
  
  <!-- Mobile: imagem vertical (retrato) -->
  <img 
    src="portrait.jpg" 
    alt="Pessoa em diferentes enquadramentos"
  >
</picture>
```

### 3.5 Combinando picture + srcset + sizes

```html
<picture>
  <!-- WebP para desktop -->
  <source 
    media="(min-width: 1024px)"
    type="image/webp"
    srcset="
      desktop-small.webp 1024w,
      desktop-large.webp 1920w
    "
    sizes="100vw"
  >
  
  <!-- WebP para mobile -->
  <source 
    type="image/webp"
    srcset="
      mobile-small.webp 400w,
      mobile-large.webp 800w
    "
    sizes="100vw"
  >
  
  <!-- JPEG fallback -->
  <img 
    src="fallback.jpg" 
    alt="Imagem responsiva completa"
  >
</picture>
```

### 3.6 Exemplo Prático Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Picture Element</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
    }
    
    .hero {
      width: 100%;
      height: 60vh;
      position: relative;
      overflow: hidden;
    }
    
    .hero picture {
      width: 100%;
      height: 100%;
    }
    
    .hero img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .hero-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
    }
    
    .hero h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    @media (min-width: 768px) {
      .hero h1 {
        font-size: 3rem;
      }
    }
  </style>
</head>
<body>
  <section class="hero">
    <picture>
      <!-- Desktop: paisagem ampla -->
      <source 
        media="(min-width: 1024px)" 
        srcset="https://via.placeholder.com/1920x600/3498db/ffffff"
      >
      
      <!-- Tablet: formato intermediário -->
      <source 
        media="(min-width: 768px)" 
        srcset="https://via.placeholder.com/1024x768/2ecc71/ffffff"
      >
      
      <!-- Mobile: formato vertical -->
      <img 
        src="https://via.placeholder.com/600x800/e74c3c/ffffff" 
        alt="Hero responsivo com direção de arte"
      >
    </picture>
    
    <div class="hero-content">
      <h1>Direção de Arte Responsiva</h1>
      <p>Imagens diferentes para cada dispositivo</p>
    </div>
  </section>
  
  <main style="padding: 2rem;">
    <h2>Como funciona</h2>
    <p>Redimensione a janela para ver imagens diferentes sendo carregadas!</p>
    <ul style="margin-top: 1rem; line-height: 1.8;">
      <li>Mobile (< 768px): Imagem vermelha vertical</li>
      <li>Tablet (768px - 1023px): Imagem verde quadrada</li>
      <li>Desktop (≥ 1024px): Imagem azul horizontal</li>
    </ul>
  </main>
</body>
</html>
```

---

## 4. Lazy Loading (45 min)

### 4.1 Loading Nativo

```html
<!-- Carregamento preguiçoso nativo -->
<img 
  src="image.jpg" 
  alt="Descrição"
  loading="lazy"
>

<!-- Carrega imediatamente (padrão) -->
<img 
  src="hero.jpg" 
  alt="Hero"
  loading="eager"
>
```

**Quando usar:**
- `loading="lazy"` → Imagens fora da viewport inicial
- `loading="eager"` → Imagens críticas (hero, logo)

### 4.2 Placeholder e Progressive Loading

```html
<style>
  .image-container {
    position: relative;
    background: #f0f0f0;
    overflow: hidden;
  }
  
  .image-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(20px);
    transform: scale(1.1);
  }
  
  .image-full {
    width: 100%;
    height: auto;
    display: block;
  }
</style>

<div class="image-container">
  <!-- Placeholder pequeno e borrado -->
  <img 
    class="image-placeholder" 
    src="tiny-placeholder.jpg"
    aria-hidden="true"
  >
  
  <!-- Imagem completa com lazy load -->
  <img 
    class="image-full"
    src="full-image.jpg" 
    alt="Descrição"
    loading="lazy"
  >
</div>
```

### 4.3 Aspect Ratio Box

**Previne layout shift:**

```css
/* Mantém proporção 16:9 */
.image-wrapper {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 9/16 * 100 = 56.25% */
  background: #f0f0f0;
}

.image-wrapper img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

**CSS moderno (aspect-ratio):**

```css
.image-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
  background: #f0f0f0;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

### 4.4 Exemplo Completo de Lazy Loading

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lazy Loading</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
    }
    
    .hero {
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
    }
    
    .gallery {
      padding: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .image-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    .image-wrapper {
      aspect-ratio: 16 / 9;
      background: #f0f0f0;
      position: relative;
    }
    
    .image-wrapper img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .image-card-content {
      padding: 1.5rem;
    }
    
    .image-card h3 {
      margin-bottom: 0.5rem;
    }
    
    .image-card p {
      color: #666;
    }
  </style>
</head>
<body>
  <section class="hero">
    <div>
      <h1>Lazy Loading Demo</h1>
      <p>Role para baixo - imagens carregam quando aparecem</p>
    </div>
  </section>
  
  <section class="gallery">
    <article class="image-card">
      <div class="image-wrapper">
        <img 
          src="https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Imagem+1" 
          alt="Imagem 1"
          loading="lazy"
        >
      </div>
      <div class="image-card-content">
        <h3>Imagem 1</h3>
        <p>Esta imagem usa lazy loading</p>
      </div>
    </article>
    
    <article class="image-card">
      <div class="image-wrapper">
        <img 
          src="https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Imagem+2" 
          alt="Imagem 2"
          loading="lazy"
        >
      </div>
      <div class="image-card-content">
        <h3>Imagem 2</h3>
        <p>Carrega quando entra no viewport</p>
      </div>
    </article>
    
    <article class="image-card">
      <div class="image-wrapper">
        <img 
          src="https://via.placeholder.com/600x400/45b7d1/ffffff?text=Imagem+3" 
          alt="Imagem 3"
          loading="lazy"
        >
      </div>
      <div class="image-card-content">
        <h3>Imagem 3</h3>
        <p>Performance otimizada</p>
      </div>
    </article>
    
    <article class="image-card">
      <div class="image-wrapper">
        <img 
          src="https://via.placeholder.com/600x400/f9ca24/ffffff?text=Imagem+4" 
          alt="Imagem 4"
          loading="lazy"
        >
      </div>
      <div class="image-card-content">
        <h3>Imagem 4</h3>
        <p>Economia de banda</p>
      </div>
    </article>
    
    <article class="image-card">
      <div class="image-wrapper">
        <img 
          src="https://via.placeholder.com/600x400/6c5ce7/ffffff?text=Imagem+5" 
          alt="Imagem 5"
          loading="lazy"
        >
      </div>
      <div class="image-card-content">
        <h3>Imagem 5</h3>
        <p>Melhor UX</p>
      </div>
    </article>
    
    <article class="image-card">
      <div class="image-wrapper">
        <img 
          src="https://via.placeholder.com/600x400/fd79a8/ffffff?text=Imagem+6" 
          alt="Imagem 6"
          loading="lazy"
        >
      </div>
      <div class="image-card-content">
        <h3>Imagem 6</h3>
        <p>Core Web Vitals</p>
      </div>
    </article>
  </section>
</body>
</html>
```

---

## 5. Background Images Responsivas (40 min)

### 5.1 CSS Background com Media Queries

```css
/* Mobile First */
.hero {
  background-image: url('hero-mobile.jpg');
  background-size: cover;
  background-position: center;
  height: 60vh;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('hero-tablet.jpg');
  }
}

@media (min-width: 1024px) {
  .hero {
    background-image: url('hero-desktop.jpg');
  }
}

/* Retina */
@media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  .hero {
    background-image: url('hero-desktop@2x.jpg');
  }
}
```

### 5.2 image-set() para Background

```css
.element {
  background-image: image-set(
    url('image.jpg') 1x,
    url('image@2x.jpg') 2x,
    url('image@3x.jpg') 3x
  );
}

/* Com formatos modernos */
.element {
  background-image: image-set(
    url('image.avif') type('image/avif'),
    url('image.webp') type('image/webp'),
    url('image.jpg') type('image/jpeg')
  );
}
```

### 5.3 CSS Variables para Backgrounds Responsivos

```css
:root {
  --bg-mobile: url('bg-mobile.jpg');
  --bg-tablet: url('bg-tablet.jpg');
  --bg-desktop: url('bg-desktop.jpg');
}

.hero {
  background-image: var(--bg-mobile);
  background-size: cover;
}

@media (min-width: 768px) {
  .hero {
    background-image: var(--bg-tablet);
  }
}

@media (min-width: 1024px) {
  .hero {
    background-image: var(--bg-desktop);
  }
}
```

---

## 6. Ferramentas e Otimização (30 min)

### 6.1 Ferramentas de Otimização

**Online:**
- **TinyPNG:** https://tinypng.com/ (PNG/JPEG)
- **Squoosh:** https://squoosh.app/ (múltiplos formatos)
- **ImageOptim:** https://imageoptim.com/
- **SVGOMG:** https://jakearchibald.github.io/svgomg/ (SVG)

**CLI:**
```bash
# ImageMagick - redimensionar
convert original.jpg -resize 800x600 resized.jpg

# cwebp - converter para WebP
cwebp -q 80 input.jpg -o output.webp

# avifenc - converter para AVIF
avifenc --min 20 --max 40 input.jpg output.avif
```

### 6.2 Checklist de Otimização

✅ **Tamanho apropriado:** Não maior que necessário
✅ **Formato correto:** WebP/AVIF para web, JPEG para fotos, PNG para logos
✅ **Compressão:** 80-85% de qualidade geralmente suficiente
✅ **Lazy loading:** Para imagens fora da viewport
✅ **srcset/sizes:** Múltiplos tamanhos
✅ **Alt text:** Sempre presente e descritivo
✅ **Dimensões definidas:** width/height para evitar layout shift

### 6.3 Performance Budget

```
Imagem Hero: máx 200KB
Imagens conteúdo: máx 100KB cada
Ícones: máx 20KB
Total de imagens por página: máx 2MB
```

---

## 7. Exercícios Práticos (30 min)

### Exercício 1: Galeria Responsiva Completa

**Objetivo:** Criar galeria com srcset, sizes e lazy loading

**Requisitos:**
- Usar srcset com pelo menos 3 tamanhos
- Implementar sizes apropriado
- Lazy loading em todas as imagens exceto primeira
- aspect-ratio para prevenir layout shift
- Grid responsivo

### Exercício 2: Hero com Picture e Direção de Arte

**Objetivo:** Criar hero section com imagens diferentes por dispositivo

**Requisitos:**
- Mobile: imagem vertical (portrait)
- Tablet: imagem quadrada
- Desktop: imagem horizontal (landscape)
- Usar elemento `<picture>`
- Texto sobre a imagem
- Height: 80vh

---

## Material de Apoio

### Leitura Obrigatória
- MDN Web Docs - "Responsive images"
- Web.dev - "Serve responsive images"
- CSS-Tricks - "A Guide to the Responsive Images Syntax in HTML"

### Leitura Complementar
- "High Performance Images" - Colin Bendell
- Smashing Magazine - "Responsive Image Breakpoints Generator"

### Ferramentas
- **Responsively App:** https://responsively.app/
- **Lighthouse:** Performance audit (Chrome DevTools)
- **PageSpeed Insights:** https://pagespeed.web.dev/

### Vídeos
- Google Chrome Developers - "Responsive Images"
- Kevin Powell - "Responsive images are SO easy"

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. srcset define múltiplos tamanhos de imagem
2. sizes indica quando usar cada tamanho
3. `<picture>` permite direção de arte e formatos modernos
4. loading="lazy" melhora performance
5. aspect-ratio previne layout shift
6. WebP e AVIF reduzem tamanho dos arquivos
7. object-fit controla como imagem preenche container

**Próxima aula:** Tipografia Responsiva - fontes, escalas e legibilidade.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Implementar srcset e sizes corretamente
- ✅ Usar elemento `<picture>` para casos avançados
- ✅ Aplicar lazy loading nativo
- ✅ Criar direção de arte responsiva
- ✅ Otimizar imagens para web
- ✅ Prevenir layout shift com aspect-ratio
- ✅ Usar formatos modernos (WebP, AVIF)
- ✅ Implementar backgrounds responsivos
- ✅ Medir e melhorar performance de imagens