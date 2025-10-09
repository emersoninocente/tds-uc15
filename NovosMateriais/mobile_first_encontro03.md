# Encontro 03: Media Queries

**Carga Horária:** 4 horas  
**Objetivo:** Dominar media queries para criar layouts adaptativos usando a abordagem Mobile First.

---

## 1. Introdução às Media Queries (45 min)

### 1.1 O que são Media Queries?

**Definição:** Media queries permitem aplicar estilos CSS baseados nas características do dispositivo (largura, altura, orientação, resolução, etc.).

**Sintaxe básica:**
```css
@media tipo-de-mídia and (condição) {
  /* Estilos aplicados quando a condição é verdadeira */
}
```

### 1.2 Tipos de Mídia

```css
/* Todos os dispositivos (padrão) */
@media all { }

/* Apenas para telas */
@media screen { }

/* Apenas para impressão */
@media print { }

/* Para leitores de tela (raro) */
@media speech { }
```

**Na prática, geralmente usamos apenas `screen` ou omitimos o tipo:**
```css
@media (min-width: 768px) {
  /* Funciona em telas */
}
```

### 1.3 Desktop First vs Mobile First

**❌ Desktop First (max-width):**
```css
/* Estilos base para desktop */
.container {
  width: 1200px;
  display: grid;
  grid-template-columns: 300px 1fr;
}

/* Adapta para tablet */
@media (max-width: 1024px) {
  .container {
    width: 100%;
  }
}

/* Adapta para mobile */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
  }
}
```

**✅ Mobile First (min-width):**
```css
/* Estilos base para mobile */
.container {
  width: 100%;
  padding: 1rem;
}

/* Melhora para tablet */
@media (min-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: 250px 1fr;
    padding: 2rem;
  }
}

/* Otimiza para desktop */
@media (min-width: 1200px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: 300px 1fr;
  }
}
```

### 1.4 Por que Mobile First é melhor?

1. **Performance:** Carrega menos código no mobile
2. **Manutenibilidade:** Mais fácil adicionar features do que remover
3. **Progressivo:** Funciona mesmo se media queries falharem
4. **Natural:** Pensa primeiro no essencial

---

## 2. Breakpoints Comuns (50 min)

### 2.1 Breakpoints Padrão da Indústria

```css
/* Extra Small (Mobile Portrait) */
/* 320px - 575px - Estilos base, sem media query */

/* Small (Mobile Landscape / Tablet Portrait) */
@media (min-width: 576px) { }

/* Medium (Tablet) */
@media (min-width: 768px) { }

/* Large (Desktop) */
@media (min-width: 992px) { }

/* Extra Large (Large Desktop) */
@media (min-width: 1200px) { }

/* Extra Extra Large (Ultra Wide) */
@media (min-width: 1400px) { }
```

### 2.2 Breakpoints de Frameworks Populares

**Bootstrap 5:**
```css
/* xs */ /* < 576px - padrão */
/* sm */ @media (min-width: 576px) { }
/* md */ @media (min-width: 768px) { }
/* lg */ @media (min-width: 992px) { }
/* xl */ @media (min-width: 1200px) { }
/* xxl */ @media (min-width: 1400px) { }
```

**Tailwind CSS:**
```css
/* sm */  @media (min-width: 640px) { }
/* md */  @media (min-width: 768px) { }
/* lg */  @media (min-width: 1024px) { }
/* xl */  @media (min-width: 1280px) { }
/* 2xl */ @media (min-width: 1536px) { }
```

### 2.3 Breakpoints Baseados em Conteúdo

**Filosofia:** Defina breakpoints onde o conteúdo precisa, não em dispositivos específicos.

```css
/* Mobile */
.navigation {
  /* Menu hambúrguer */
}

/* Quando houver espaço para menu horizontal */
@media (min-width: 650px) {
  .navigation {
    /* Menu horizontal */
  }
}

/* Quando puder mostrar sidebar */
@media (min-width: 900px) {
  .content-area {
    display: grid;
    grid-template-columns: 250px 1fr;
  }
}
```

### 2.4 Sistema de Breakpoints Recomendado

```css
:root {
  --breakpoint-sm: 36rem;    /* 576px */
  --breakpoint-md: 48rem;    /* 768px */
  --breakpoint-lg: 62rem;    /* 992px */
  --breakpoint-xl: 75rem;    /* 1200px */
  --breakpoint-xxl: 87.5rem; /* 1400px */
}

/* Mobile First - Base styles */
.element {
  /* Estilos mobile (320px+) */
}

/* Small devices (landscape phones) */
@media (min-width: 36rem) {
  .element {
    /* Ajustes para telas pequenas */
  }
}

/* Medium devices (tablets) */
@media (min-width: 48rem) {
  .element {
    /* Ajustes para tablets */
  }
}

/* Large devices (desktops) */
@media (min-width: 62rem) {
  .element {
    /* Ajustes para desktops */
  }
}

/* Extra large devices (large desktops) */
@media (min-width: 75rem) {
  .element {
    /* Ajustes para telas grandes */
  }
}
```

---

## 3. Recursos Avançados de Media Queries (60 min)

### 3.1 Orientation

```css
/* Portrait (altura maior que largura) */
@media (orientation: portrait) {
  .hero {
    height: 60vh;
  }
}

/* Landscape (largura maior que altura) */
@media (orientation: landscape) {
  .hero {
    height: 100vh;
  }
}

/* Combinando com largura */
@media (min-width: 768px) and (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### 3.2 Aspect Ratio

```css
/* Telas mais largas que altas (widescreen) */
@media (min-aspect-ratio: 16/9) {
  .video-container {
    padding-top: 56.25%; /* 9/16 * 100 */
  }
}

/* Telas quadradas ou verticais */
@media (max-aspect-ratio: 1/1) {
  .sidebar {
    display: none;
  }
}
```

### 3.3 Resolution (Retina/HiDPI)

```css
/* Telas normais */
.logo {
  background-image: url('logo.png');
}

/* Telas de alta densidade (Retina) */
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
    background-size: 200px 50px;
  }
}

/* Telas ultra-high-res */
@media (-webkit-min-device-pixel-ratio: 3),
       (min-resolution: 288dpi) {
  .logo {
    background-image: url('logo@3x.png');
    background-size: 200px 50px;
  }
}
```

### 3.4 Prefers Color Scheme (Dark Mode)

```css
/* Light mode (padrão) */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;
    --text-color: #f0f0f0;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}
```

### 3.5 Prefers Reduced Motion (Acessibilidade)

```css
/* Animações normais */
.element {
  transition: transform 0.3s ease;
}

.element:hover {
  transform: scale(1.1);
}

/* Remove animações para quem preferir */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 3.6 Hover Capability

```css
/* Dispositivos sem hover (touch) */
@media (hover: none) {
  .button {
    /* Estados sempre visíveis */
  }
}

/* Dispositivos com hover (mouse) */
@media (hover: hover) {
  .button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
  }
}
```

### 3.7 Combinando Condições

```css
/* AND - Ambas condições devem ser verdadeiras */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Apenas tablets */
}

/* OR - Pelo menos uma condição verdadeira */
@media (min-width: 768px), (orientation: landscape) {
  /* Tablets OU landscape */
}

/* NOT - Negação */
@media not all and (min-width: 768px) {
  /* Tudo EXCETO tablets+ */
}

/* Complexo */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
  /* Tablets em portrait */
}
```

---

## 4. Patterns e Best Practices (50 min)

### 4.1 Container Queries (Futuro do CSS)

```css
/* Tradicional: baseado no viewport */
@media (min-width: 768px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

/* Container Queries: baseado no elemento pai */
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}
```

### 4.2 Organização de Media Queries

**❌ Má prática - Media queries espalhadas:**
```css
.header {
  padding: 1rem;
}

.nav {
  display: none;
}

@media (min-width: 768px) {
  .header {
    padding: 2rem;
  }
}

.footer {
  text-align: center;
}

@media (min-width: 768px) {
  .nav {
    display: flex;
  }
  
  .footer {
    text-align: left;
  }
}
```

**✅ Boa prática - Agrupadas por breakpoint:**
```css
/* ========== BASE STYLES (MOBILE) ========== */
.header {
  padding: 1rem;
}

.nav {
  display: none;
}

.footer {
  text-align: center;
}

/* ========== TABLET ========== */
@media (min-width: 768px) {
  .header {
    padding: 2rem;
  }
  
  .nav {
    display: flex;
  }
  
  .footer {
    text-align: left;
  }
}

/* ========== DESKTOP ========== */
@media (min-width: 1200px) {
  .header {
    padding: 3rem;
  }
}
```

### 4.3 Breakpoints em Variáveis

```css
:root {
  --mobile: 320px;
  --tablet: 768px;
  --desktop: 1024px;
  --wide: 1200px;
}

/* Uso com @custom-media (futuro) */
@custom-media --tablet (min-width: 48em);
@custom-media --desktop (min-width: 64em);

@media (--tablet) {
  /* Estilos para tablet */
}
```

### 4.4 Mobile First Template Completo

```css
/* ==========================================
   MOBILE FIRST STYLESHEET
   ========================================== */

/* ========== VARIÁVEIS ========== */
:root {
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 3rem;
}

/* ========== RESET ========== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ========== BASE MOBILE (320px+) ========== */
body {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

.container {
  width: 100%;
  padding: 0 var(--spacing-sm);
}

.grid {
  display: grid;
  gap: 1rem;
}

.button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  min-height: 44px; /* Touch target */
}

/* ========== SMALL (576px+) ========== */
@media (min-width: 36rem) {
  .container {
    padding: 0 var(--spacing-md);
  }
  
  .grid-sm-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ========== MEDIUM (768px+) ========== */
@media (min-width: 48rem) {
  body {
    font-size: 18px;
  }
  
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
  
  .grid-md-3 {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ========== LARGE (992px+) ========== */
@media (min-width: 62rem) {
  .container {
    max-width: 960px;
  }
  
  .grid-lg-4 {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* ========== EXTRA LARGE (1200px+) ========== */
@media (min-width: 75rem) {
  .container {
    max-width: 1140px;
  }
}

/* ========== PRINT ========== */
@media print {
  * {
    background: transparent !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  a, a:visited {
    text-decoration: underline;
  }
  
  .no-print {
    display: none !important;
  }
}
```

---

## 5. Exemplos Práticos (45 min)

### 5.1 Navegação Responsiva

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navegação Responsiva</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* MOBILE */
    .header {
      background: #333;
      padding: 1rem;
    }
    
    .logo {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav {
      display: none; /* Escondido no mobile */
    }
    
    .menu-toggle {
      background: white;
      color: #333;
      border: none;
      padding: 0.5rem 1rem;
      cursor: pointer;
      float: right;
    }
    
    /* TABLET+ */
    @media (min-width: 768px) {
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .menu-toggle {
        display: none; /* Esconde botão no desktop */
      }
      
      .nav {
        display: flex !important; /* Sempre visível */
        gap: 2rem;
      }
      
      .nav a {
        color: white;
        text-decoration: none;
        transition: color 0.3s;
      }
      
      .nav a:hover {
        color: #ffc107;
      }
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="logo">MeuSite</div>
    <button class="menu-toggle" onclick="toggleMenu()">Menu</button>
    <nav class="nav" id="nav">
      <a href="#home">Home</a>
      <a href="#sobre">Sobre</a>
      <a href="#servicos">Serviços</a>
      <a href="#contato">Contato</a>
    </nav>
  </header>
  
  <script>
    function toggleMenu() {
      const nav = document.getElementById('nav');
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    }
  </script>
</body>
</html>
```

### 5.2 Grid Responsivo de Cards

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Responsivo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      background: #f5f5f5;
      padding: 2rem 1rem;
    }
    
    /* MOBILE - 1 coluna */
    .grid {
      display: grid;
      gap: 1.5rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    
    .card:hover {
      transform: translateY(-4px);
    }
    
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .card-content {
      padding: 1.5rem;
    }
    
    .card-title {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
    
    .card-text {
      color: #666;
      line-height: 1.6;
    }
    
    /* TABLET - 2 colunas */
    @media (min-width: 768px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    /* DESKTOP - 3 colunas */
    @media (min-width: 1024px) {
      .grid {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .card-image {
        height: 250px;
      }
    }
  </style>
</head>
<body>
  <div class="grid">
    <article class="card">
      <img src="https://via.placeholder.com/400x300" alt="Card 1" class="card-image">
      <div class="card-content">
        <h2 class="card-title">Card 1</h2>
        <p class="card-text">Este é um exemplo de card responsivo que se adapta a diferentes tamanhos de tela.</p>
      </div>
    </article>
    
    <article class="card">
      <img src="https://via.placeholder.com/400x300" alt="Card 2" class="card-image">
      <div class="card-content">
        <h2 class="card-title">Card 2</h2>
        <p class="card-text">No mobile aparece 1 coluna, no tablet 2 colunas e no desktop 3 colunas.</p>
      </div>
    </article>
    
    <article class="card">
      <img src="https://via.placeholder.com/400x300" alt="Card 3" class="card-image">
      <div class="card-content">
        <h2 class="card-title">Card 3</h2>
        <p class="card-text">Esta é a abordagem Mobile First usando media queries com min-width.</p>
      </div>
    </article>
    
    <article class="card">
      <img src="https://via.placeholder.com/400x300" alt="Card 4" class="card-image">
      <div class="card-content">
        <h2 class="card-title">Card 4</h2>
        <p class="card-text">Os cards são totalmente responsivos e se adaptam ao conteúdo.</p>
      </div>
    </article>
    
    <article class="card">
      <img src="https://via.placeholder.com/400x300" alt="Card 5" class="card-image">
      <div class="card-content">
        <h2 class="card-title">Card 5</h2>
        <p class="card-text">Teste redimensionando a janela do navegador para ver as mudanças.</p>
      </div>
    </article>
    
    <article class="card">
      <img src="https://via.placeholder.com/400x300" alt="Card 6" class="card-image">
      <div class="card-content">
        <h2 class="card-title">Card 6</h2>
        <p class="card-text">Grid responsivo é essencial para layouts modernos.</p>
      </div>
    </article>
  </div>
</body>
</html>
```

### 5.3 Layout Sidebar Responsiva

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Layout com Sidebar</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      line-height: 1.6;
    }
    
    /* MOBILE - Layout em coluna */
    .layout {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .header {
      background: #333;
      color: white;
      padding: 1rem;
    }
    
    .main-content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    .sidebar {
      background: #f4f4f4;
      padding: 1rem;
      border-bottom: 1px solid #ddd;
    }
    
    .content {
      padding: 1rem;
      flex: 1;
    }
    
    .footer {
      background: #333;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    
    /* TABLET+ - Sidebar ao lado */
    @media (min-width: 768px) {
      .main-content {
        flex-direction: row;
      }
      
      .sidebar {
        width: 250px;
        min-width: 250px;
        border-bottom: none;
        border-right: 1px solid #ddd;
      }
      
      .content {
        padding: 2rem;
      }
    }
    
    /* DESKTOP - Aumenta sidebar */
    @media (min-width: 1024px) {
      .sidebar {
        width: 300px;
        min-width: 300px;
        padding: 2rem;
      }
      
      .content {
        max-width: 1200px;
        margin: 0 auto;
      }
    }
  </style>
</head>
<body>
  <div class="layout">
    <header class="header">
      <h1>Meu Site</h1>
    </header>
    
    <div class="main-content">
      <aside class="sidebar">
        <h3>Menu Lateral</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </aside>
      
      <main class="content">
        <h2>Conteúdo Principal</h2>
        <p>No mobile, a sidebar aparece acima do conteúdo.</p>
        <p>No tablet e desktop, aparece ao lado esquerdo.</p>
        <p>Este é um padrão comum em layouts responsivos.</p>
      </main>
    </div>
    
    <footer class="footer">
      <p>&copy; 2025 Meu Site. Todos os direitos reservados.</p>
    </footer>
  </div>
</body>
</html>
```

### 5.4 Tipografia Responsiva

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tipografia Responsiva</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* MOBILE */
    body {
      font-family: Georgia, serif;
      font-size: 16px;
      line-height: 1.6;
      padding: 1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: 2rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
    
    h2 {
      font-size: 1.5rem;
      line-height: 1.3;
      margin: 1.5rem 0 0.75rem;
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    .lead {
      font-size: 1.125rem;
      color: #666;
      margin-bottom: 1.5rem;
    }
    
    /* TABLET */
    @media (min-width: 768px) {
      body {
        font-size: 18px;
        padding: 2rem;
      }
      
      h1 {
        font-size: 3rem;
      }
      
      h2 {
        font-size: 2rem;
      }
      
      .lead {
        font-size: 1.25rem;
      }
    }
    
    /* DESKTOP */
    @media (min-width: 1024px) {
      body {
        font-size: 20px;
      }
      
      h1 {
        font-size: 3.5rem;
      }
      
      h2 {
        font-size: 2.5rem;
      }
    }
  </style>
</head>
<body>
  <article>
    <h1>Título Principal Responsivo</h1>
    <p class="lead">Este é um parágrafo de destaque que também se adapta aos diferentes tamanhos de tela.</p>
    
    <h2>Subtítulo da Seção</h2>
    <p>Este é um parágrafo normal. A tipografia responsiva melhora a legibilidade em todos os dispositivos. No mobile, as fontes são menores para caber mais conteúdo na tela.</p>
    
    <p>No tablet e desktop, aumentamos progressivamente o tamanho das fontes para melhorar a experiência de leitura em telas maiores.</p>
    
    <h2>Outra Seção</h2>
    <p>Teste redimensionar a janela do navegador para ver como os tamanhos de fonte se adaptam suavemente.</p>
  </article>
</body>
</html>
```

---

## Exercício Prático (60 min)

### Exercício 1: Layout de Blog Responsivo (30 min)

**Objetivo:** Criar um layout de blog que se adapta a mobile, tablet e desktop.

**Requisitos:**
- Mobile (< 768px): 1 coluna
- Tablet (768px - 1023px): 2 colunas
- Desktop (1024px+): 3 colunas (sidebar + 2 colunas de posts)

**Template inicial:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Responsivo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
    }
    
    /* COMPLETE O CSS AQUI */
    /* Mobile First: comece com estilos para mobile */
    
    .container {
      /* ... */
    }
    
    .header {
      background: #2c3e50;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    
    .blog-layout {
      /* ... */
    }
    
    .sidebar {
      background: white;
      padding: 1rem;
      margin: 1rem 0;
    }
    
    .posts {
      /* ... */
    }
    
    .post {
      background: white;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 4px;
    }
    
    /* TABLET: adicione media query aqui */
    @media (min-width: 768px) {
      /* ... */
    }
    
    /* DESKTOP: adicione media query aqui */
    @media (min-width: 1024px) {
      /* ... */
    }
  </style>
</head>
<body>
  <header class="header">
    <h1>Meu Blog</h1>
  </header>
  
  <div class="container">
    <div class="blog-layout">
      <aside class="sidebar">
        <h3>Categorias</h3>
        <ul>
          <li>Tecnologia</li>
          <li>Design</li>
          <li>Programação</li>
        </ul>
      </aside>
      
      <div class="posts">
        <article class="post">
          <h2>Post 1</h2>
          <p>Conteúdo do primeiro post...</p>
        </article>
        
        <article class="post">
          <h2>Post 2</h2>
          <p>Conteúdo do segundo post...</p>
        </article>
        
        <article class="post">
          <h2>Post 3</h2>
          <p>Conteúdo do terceiro post...</p>
        </article>
        
        <article class="post">
          <h2>Post 4</h2>
          <p>Conteúdo do quarto post...</p>
        </article>
      </div>
    </div>
  </div>
</body>
</html>
```

### Exercício 2: Menu Hambúrguer com Media Queries (30 min)

**Objetivo:** Criar um menu que seja hambúrguer no mobile e horizontal no desktop.

**Requisitos:**
- Mobile: Menu escondido por padrão, botão hambúrguer visível
- Tablet+: Menu sempre visível, botão hambúrguer escondido
- Animações suaves

**Código inicial:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu Responsivo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* MOBILE FIRST */
    .navbar {
      background: #333;
      color: white;
      padding: 1rem;
      position: relative;
    }
    
    .navbar-brand {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .hamburger {
      /* Estilize o botão hambúrguer */
      position: absolute;
      right: 1rem;
      top: 1rem;
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    .nav-menu {
      /* Menu escondido no mobile */
      display: none;
      list-style: none;
      padding-top: 1rem;
    }
    
    .nav-menu.active {
      display: block;
    }
    
    .nav-menu li {
      padding: 0.5rem 0;
    }
    
    .nav-menu a {
      color: white;
      text-decoration: none;
      display: block;
    }
    
    /* TABLET+ */
    @media (min-width: 768px) {
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      
      .hamburger {
        display: none; /* Esconde hambúrguer */
      }
      
      .nav-menu {
        display: flex !important; /* Sempre visível */
        flex-direction: row;
        gap: 2rem;
        padding-top: 0;
      }
      
      .nav-menu li {
        padding: 0;
      }
      
      .nav-menu a:hover {
        color: #ffc107;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="navbar-brand">Logo</div>
    
    <button class="hamburger" onclick="toggleMenu()">☰</button>
    
    <ul class="nav-menu" id="navMenu">
      <li><a href="#home">Home</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
  
  <main style="padding: 2rem;">
    <h1>Conteúdo da Página</h1>
    <p>Teste o menu redimensionando a janela do navegador.</p>
  </main>
  
  <script>
    function toggleMenu() {
      const menu = document.getElementById('navMenu');
      menu.classList.toggle('active');
    }
  </script>
</body>
</html>
```

---

## Desafio Extra

**Criar Landing Page Completa Responsiva:**

Desenvolva uma landing page com:
- Hero section full-height
- Grid de features (1 col mobile, 2 col tablet, 3 col desktop)
- Galeria de imagens responsiva
- Formulário de contato otimizado
- Footer com múltiplas colunas (empilhadas no mobile)

**Restrições:**
- Usar apenas Mobile First media queries
- Mínimo 3 breakpoints
- Performance otimizada
- Touch targets adequados

---

## Material de Apoio

### Leitura Obrigatória
- MDN Web Docs - "Using media queries"
- CSS-Tricks - "A Complete Guide to CSS Media Queries"
- Web.dev - "Responsive web design basics"

### Leitura Complementar
- "Responsive Web Design" - Ethan Marcotte
- Brad Frost - "Responsive Design Patterns"

### Ferramentas
- **Responsively App:** https://responsively.app/
- **Viewport Resizer:** https://viewportsizer.com/
- **Media Query Generator:** https://giona.net/tools/css3-mediaquery-generator/

### Vídeos Recomendados
- Kevin Powell - "Are you writing responsive CSS the wrong way?"
- Web Dev Simplified - "Learn CSS Media Query In 7 Minutes"

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. Media queries permitem adaptar layouts para diferentes telas
2. Mobile First usa min-width (não max-width)
3. Breakpoints comuns: 576px, 768px, 992px, 1200px
4. Media queries podem testar orientação, resolução, dark mode
5. Organização do código é fundamental
6. Combinar condições com AND, OR, NOT

**Próxima aula:** Flexbox para Layouts Responsivos - criar layouts flexíveis e adaptativos.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Escrever media queries com sintaxe correta
- ✅ Usar min-width para abordagem Mobile First
- ✅ Definir breakpoints apropriados
- ✅ Combinar múltiplas condições
- ✅ Criar layouts que se adaptam a 3+ tamanhos de tela
- ✅ Testar orientação e recursos do dispositivo
- ✅ Organizar media queries de forma eficiente
- ✅ Implementar dark mode com prefers-color-scheme
- ✅ Criar navegação responsiva funcional