# Encontro 02: Viewport e Meta Tags

**Carga Horária:** 4 horas  
**Objetivo:** Dominar as configurações técnicas fundamentais para criar sites responsivos, incluindo viewport, meta tags e unidades de medida.

---

## 1. Entendendo o Viewport (50 min)

### 1.1 O que é Viewport?

**Definição:** Viewport é a área visível da página web no dispositivo do usuário.

**Problema Histórico:**
Antes dos smartphones, os sites eram projetados para desktops (geralmente 980px). Quando os primeiros navegadores mobile surgiram, eles simulavam uma tela de 980px e depois reduziam tudo para caber na tela pequena.

**Resultado:** Texto ilegível e necessidade de zoom constante.

### 1.2 A Meta Tag Viewport

**Sintaxe básica:**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Anatomia da Tag:**

| Propriedade | Descrição | Valores Comuns |
|-------------|-----------|----------------|
| `width` | Define largura do viewport | `device-width`, número em pixels |
| `initial-scale` | Zoom inicial da página | `1.0` (100%) |
| `minimum-scale` | Zoom mínimo permitido | `0.5` a `1.0` |
| `maximum-scale` | Zoom máximo permitido | `1.0` a `10.0` |
| `user-scalable` | Permite zoom do usuário | `yes` ou `no` |

### 1.3 Configurações Recomendadas

**✅ Configuração Ideal (acessível):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**❌ Configuração Ruim (bloqueia zoom):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

**Por que é ruim?** Impede usuários com deficiência visual de dar zoom na página.

### 1.4 Exemplos Práticos

**Exemplo 1: Sem viewport**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Sem Viewport</title>
  <!-- SEM meta viewport -->
</head>
<body>
  <h1>Este site não tem viewport configurado</h1>
  <p>No mobile, você verá tudo muito pequeno e precisará dar zoom.</p>
</body>
</html>
```

**Exemplo 2: Com viewport**
```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Com Viewport</title>
</head>
<body>
  <h1>Este site tem viewport configurado</h1>
  <p>No mobile, você verá o conteúdo no tamanho adequado.</p>
</body>
</html>
```

### 1.5 Viewport Units

**Unidades baseadas no viewport:**

```css
.hero {
  width: 100vw;    /* 100% da largura do viewport */
  height: 100vh;   /* 100% da altura do viewport */
}

.subtitle {
  font-size: 5vw;  /* 5% da largura do viewport */
}

.section {
  min-height: 50vh;  /* 50% da altura do viewport */
  padding: 2vmin;    /* 2% do menor lado do viewport */
}
```

**Unidades disponíveis:**
- `vw` - viewport width (1vw = 1% da largura)
- `vh` - viewport height (1vh = 1% da altura)
- `vmin` - menor dimensão do viewport
- `vmax` - maior dimensão do viewport

---

## 2. Unidades de Medida em CSS (60 min)

### 2.1 Unidades Absolutas vs Relativas

**Absolutas (evite no design responsivo):**
```css
.box {
  width: 300px;      /* Pixels - sempre o mesmo tamanho */
  padding: 10pt;     /* Pontos - usado em impressão */
}
```

**Relativas (ideais para responsivo):**
```css
.box {
  width: 80%;        /* Porcentagem do elemento pai */
  padding: 1em;      /* Relativo ao tamanho da fonte */
  margin: 2rem;      /* Relativo ao tamanho da fonte raiz */
}
```

### 2.2 Pixels (px)

**Quando usar:**
- Borders (1px, 2px)
- Box shadows
- Detalhes muito específicos

**Exemplo:**
```css
.card {
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
```

### 2.3 Porcentagem (%)

**Relativo ao elemento pai:**
```css
.container {
  width: 1200px;
}

.column {
  width: 50%;  /* 50% de 1200px = 600px */
}
```

**Exemplo prático - Grid de 3 colunas:**
```css
.grid {
  display: flex;
  gap: 2%;
}

.grid-item {
  width: 32%;  /* 32% × 3 = 96% + 2% × 2 gap = 100% */
}
```

### 2.4 EM

**Relativo ao tamanho da fonte do elemento pai:**
```css
body {
  font-size: 16px;
}

.parent {
  font-size: 20px;  /* 20px */
}

.child {
  font-size: 0.8em;  /* 0.8 × 20px = 16px */
  padding: 1em;      /* 1 × 16px = 16px */
}
```

**Problema com EM - Efeito cascata:**
```css
/* Cada nível multiplica o anterior */
.level-1 { font-size: 1.2em; }  /* 19.2px (16 × 1.2) */
.level-2 { font-size: 1.2em; }  /* 23.04px (19.2 × 1.2) */
.level-3 { font-size: 1.2em; }  /* 27.65px (23.04 × 1.2) */
```

### 2.5 REM (Root EM)

**Relativo ao tamanho da fonte raiz (html):**
```css
html {
  font-size: 16px;  /* Base */
}

h1 {
  font-size: 2rem;   /* 32px (16 × 2) */
}

p {
  font-size: 1rem;   /* 16px (16 × 1) */
  margin: 1.5rem;    /* 24px (16 × 1.5) */
}

.small {
  font-size: 0.875rem;  /* 14px (16 × 0.875) */
}
```

**Vantagem:** Não sofre efeito cascata, previsível.

### 2.6 Comparação Prática

```css
/* Sistema de Espaçamento com REM */
:root {
  --spacing-xs: 0.5rem;   /* 8px */
  --spacing-sm: 1rem;     /* 16px */
  --spacing-md: 1.5rem;   /* 24px */
  --spacing-lg: 2rem;     /* 32px */
  --spacing-xl: 3rem;     /* 48px */
}

.card {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}
```

### 2.7 Tabela de Conversão

| PX | REM (base 16px) | EM | % | Uso Comum |
|----|-----------------|-----|---|-----------|
| 8px | 0.5rem | 0.5em | - | Pequeno espaçamento |
| 12px | 0.75rem | 0.75em | - | Texto pequeno |
| 14px | 0.875rem | 0.875em | - | Texto secundário |
| 16px | 1rem | 1em | 100% | Texto base |
| 18px | 1.125rem | 1.125em | - | Texto destaque |
| 20px | 1.25rem | 1.25em | - | Subtítulos |
| 24px | 1.5rem | 1.5em | - | Títulos H3 |
| 32px | 2rem | 2em | - | Títulos H2 |
| 48px | 3rem | 3em | - | Títulos H1 |

---

## 3. Box-Sizing (40 min)

### 3.1 Content-Box (padrão)

**Comportamento padrão do CSS:**
```css
.box {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}

/* Largura total = 300 + 20 + 20 + 5 + 5 = 350px */
```

**Problema:** Dificulta cálculos de layout responsivo.

### 3.2 Border-Box (recomendado)

**Inclui padding e border na largura:**
```css
.box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}

/* Largura total = 300px (inclui tudo) */
```

### 3.3 Reset Global (Best Practice)

**Aplicar a todos os elementos:**
```css
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Ou mais específico: */
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

### 3.4 Exemplo Prático

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * {
      box-sizing: border-box;
    }
    
    .container {
      width: 100%;
      padding: 20px;
    }
    
    .column {
      width: 50%;
      padding: 15px;
      border: 2px solid #333;
      float: left;
    }
    /* Com border-box, as colunas ficam exatamente 50% */
  </style>
</head>
<body>
  <div class="container">
    <div class="column">Coluna 1</div>
    <div class="column">Coluna 2</div>
  </div>
</body>
</html>
```

---

## 4. CSS Reset e Normalize (40 min)

### 4.1 Por que usar?

**Problema:** Cada navegador tem estilos padrão diferentes:
- Margens e paddings diferentes
- Tamanhos de fonte variados
- Line-heights inconsistentes

### 4.2 CSS Reset (Abordagem agressiva)

**Reset completo:**
```css
/* Reset CSS básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, div, span, h1, h2, h3, h4, h5, h6, p,
a, img, ul, ol, li, form, label, table, tbody, tr, td {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

ul, ol {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}
```

**Vantagens:**
- Controle total
- Começar do zero

**Desvantagens:**
- Perde estilos úteis (listas, negrito, etc)
- Mais trabalho para reconstruir

### 4.3 Normalize.css (Abordagem moderna)

**O que faz:**
- Preserva estilos úteis
- Corrige bugs conhecidos
- Melhora consistência entre navegadores
- Documentado e mantido

**Como usar:**
```html
<!-- Via CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
```

**Ou criar arquivo local normalize.css:**
```css
/* Normalize.css v8.0.1 - principais trechos */

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

body {
  margin: 0;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button {
  overflow: visible;
  text-transform: none;
}

img {
  border-style: none;
  max-width: 100%;
  height: auto;
}
```

### 4.4 Reset Moderno Minimalista

**Recomendação para projetos Mobile First:**
```css
/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
  height: auto;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
```

---

## 5. Template Base Completo (30 min)

### 5.1 HTML5 Boilerplate Mobile First

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Meta Tags Essenciais -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  
  <!-- SEO Básico -->
  <meta name="description" content="Descrição da página (máx 160 caracteres)">
  <meta name="keywords" content="palavra-chave1, palavra-chave2">
  <meta name="author" content="Seu Nome">
  
  <!-- Open Graph (Redes Sociais) -->
  <meta property="og:title" content="Título da Página">
  <meta property="og:description" content="Descrição para redes sociais">
  <meta property="og:image" content="url-da-imagem.jpg">
  <meta property="og:url" content="https://seusite.com">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="favicon.png">
  
  <!-- CSS -->
  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/style.css">
  
  <title>Título da Página - Nome do Site</title>
</head>
<body>
  
  <header>
    <!-- Cabeçalho -->
  </header>
  
  <main>
    <!-- Conteúdo principal -->
  </main>
  
  <footer>
    <!-- Rodapé -->
  </footer>
  
  <!-- JavaScript -->
  <script src="js/script.js"></script>
</body>
</html>
```

### 5.2 CSS Base Mobile First

```css
/* ========================================
   CSS BASE MOBILE FIRST
======================================== */

/* Reset e Normalize */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Variáveis CSS */
:root {
  /* Cores */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;
  --color-text: #333;
  --color-bg: #fff;
  
  /* Espaçamentos */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Typography */
  --font-body: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-heading: Georgia, serif;
  
  /* Breakpoints (para referência) */
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}

/* Base Styles - Mobile First */
html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: 1rem;
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

h1 { font-size: 2rem; }
h2 { font-size: 1.75rem; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1.125rem; }
h6 { font-size: 1rem; }

p {
  margin-bottom: var(--spacing-sm);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: darken(var(--color-primary), 10%);
}

/* Images */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Container */
.container {
  width: 100%;
  padding: 0 var(--spacing-sm);
  margin: 0 auto;
}

/* Buttons */
.btn {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-height: 44px; /* Touch target */
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
}

/* Tablet - 768px */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding: 0 var(--spacing-md);
  }
  
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
}

/* Desktop - 1200px */
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
  
  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
}
```

---

## Exercício Prático (60 min)

### Parte 1: Configuração Base (20 min)

**Objetivo:** Criar um template HTML5 com todas as configurações corretas.

**Instruções:**
1. Crie um arquivo `index.html`
2. Adicione todas as meta tags necessárias
3. Configure viewport corretamente
4. Adicione meta tags de SEO e redes sociais
5. Teste em diferentes dispositivos usando Chrome DevTools

**Código base:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <!-- Complete aqui -->
  <meta charset="UTF-8">
  <meta name="viewport" content="???">
  <title>Meu Primeiro Site Mobile First</title>
</head>
<body>
  <h1>Olá Mobile First!</h1>
  <p>Este é meu primeiro site responsivo.</p>
</body>
</html>
```

### Parte 2: Unidades de Medida (20 min)

**Objetivo:** Praticar diferentes unidades de medida.

**Desafio:** Crie uma página com:
- Um [hero](https://www.dreamhost.com/blog/pt/design-do-heroi-da-pagina-inicial/) section com 100vh de altura
- Título com tamanho em rem
- Parágrafo com tamanho em em
- Container com largura em %
- Padding em rem

**Template:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Praticando Unidades</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    /* Complete o CSS usando diferentes unidades */
    .hero {
      height: ???;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
    .hero-content {
      padding: ???;
    }
    
    h1 {
      font-size: ???;
    }
    
    p {
      font-size: ???;
      margin-top: ???;
    }
  </style>
</head>
<body>
  <section class="hero">
    <div class="hero-content">
      <h1>Título Principal</h1>
      <p>Este é um parágrafo de exemplo para praticar unidades.</p>
    </div>
  </section>
</body>
</html>
```

### Parte 3: Box-Sizing na Prática (20 min)

**Objetivo:** Entender o impacto do box-sizing no layout.

**Instruções:**
1. Crie duas versões do mesmo layout
2. Versão A: sem box-sizing: border-box
3. Versão B: com box-sizing: border-box
4. Compare os resultados

**Código:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Box-Sizing Demo</title>
  <style>
    body {
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    .section {
      margin-bottom: 40px;
    }
    
    h2 {
      margin-bottom: 20px;
    }
    
    /* Versão A - content-box (padrão) */
    .box-content {
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      background: #f0f0f0;
      margin: 10px;
    }
    
    /* Versão B - border-box */
    .box-border {
      box-sizing: border-box;
      width: 300px;
      padding: 20px;
      border: 5px solid #333;
      background: #e0e0e0;
      margin: 10px;
    }
    
    .info {
      background: #fff3cd;
      padding: 10px;
      margin-top: 10px;
      border-left: 4px solid #ffc107;
    }
  </style>
</head>
<body>
  <div class="section">
    <h2>Versão A: content-box (padrão)</h2>
    <div class="box-content">
      Largura definida: 300px<br>
      Padding: 20px cada lado<br>
      Border: 5px cada lado<br>
    </div>
    <div class="info">
      Largura total calculada: 300 + 40 (padding) + 10 (border) = 350px
    </div>
  </div>
  
  <div class="section">
    <h2>Versão B: border-box</h2>
    <div class="box-border">
      Largura definida: 300px<br>
      Padding: 20px cada lado<br>
      Border: 5px cada lado<br>
    </div>
    <div class="info">
      Largura total: 300px (inclui padding e border)
    </div>
  </div>
  
  <script>
    // Mostra as larguras reais
    const boxA = document.querySelector('.box-content');
    const boxB = document.querySelector('.box-border');
    
    console.log('Box A (content-box):', boxA.offsetWidth + 'px');
    console.log('Box B (border-box):', boxB.offsetWidth + 'px');
  </script>
</body>
</html>
```

---

## Desafio Extra

**Criar Card Responsivo Completo:**

Desenvolva um componente de card que:
- Use viewport meta tag correto
- Tenha largura em % no mobile
- Use rem para espaçamentos
- Aplique box-sizing: border-box
- Seja totalmente responsivo
- Tenha tamanho de fonte adaptativo

**Estrutura:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Responsivo</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f5f5f5;
      padding: 1rem;
      line-height: 1.6;
    }
    
    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      overflow: hidden;
      max-width: 100%;
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
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .card-description {
      font-size: 1rem;
      color: #666;
      margin-bottom: 1rem;
    }
    
    .card-button {
      display: inline-block;
      padding: 0.75rem 1.5rem;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 1rem;
      min-height: 44px;
      transition: background 0.3s ease;
    }
    
    .card-button:hover {
      background: #0056b3;
    }
    
    /* Tablet */
    @media (min-width: 768px) {
      .card {
        max-width: 600px;
        margin: 2rem auto;
      }
      
      .card-image {
        height: 300px;
      }
      
      .card-title {
        font-size: 2rem;
      }
    }
    
    /* Desktop */
    @media (min-width: 1200px) {
      .card {
        max-width: 800px;
      }
      
      .card-image {
        height: 400px;
      }
    }
  </style>
</head>
<body>
  <article class="card">
    <img src="https://via.placeholder.com/800x400" alt="Imagem do card" class="card-image">
    <div class="card-content">
      <h2 class="card-title">Título do Card</h2>
      <p class="card-description">
        Esta é uma descrição do card. Ele é totalmente responsivo e usa as melhores práticas de Mobile First.
      </p>
      <a href="#" class="card-button">Saiba Mais</a>
    </div>
  </article>
</body>
</html>
```

---

## Material de Apoio

### Leitura Obrigatória
- MDN Web Docs - "Viewport meta tag"
- CSS-Tricks - "Box Sizing"
- Web.dev - "Responsive Images"

### Leitura Complementar
- "The Surprising Truth About Pixels and Accessibility" - Josh W. Comeau
- "REM vs EM – The Great Debate" - Zell Liew

### Ferramentas Online
- **PX to REM Converter:** https://nekocalc.com/px-to-rem-converter
- **Viewport Simulator:** https://viewportsizer.com/
- **Can I Use:** https://caniuse.com/ (verificar suporte de navegadores)

### Documentação Oficial
- https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag
- https://developer.mozilla.org/en-US/docs/Web/CSS/length
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. Meta tag viewport é essencial para sites responsivos
2. REM é preferível a PX para medidas responsivas
3. Box-sizing: border-box facilita cálculos de layout
4. Unidades viewport (vw, vh) são úteis para layouts fluidos
5. Normalize.css é melhor que reset completo
6. Touch targets devem ter mínimo 44x44px

**Próxima aula:** Media Queries - criar breakpoints e layouts adaptativos.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Configurar viewport meta tag corretamente
- ✅ Explicar a diferença entre px, em, rem, % e viewport units
- ✅ Usar box-sizing: border-box em projetos
- ✅ Escolher a unidade de medida apropriada para cada situação
- ✅ Criar um template HTML5 base otimizado
- ✅ Aplicar CSS reset ou normalize em projetos
- ✅ Calcular conversões entre diferentes unidades
- ✅ Testar viewport em diferentes dispositivos