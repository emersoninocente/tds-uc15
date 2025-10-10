# Encontro 07: Tipografia Responsiva

**Carga Horária:** 4 horas  
**Objetivo:** Dominar técnicas de tipografia responsiva para criar textos legíveis e visualmente agradáveis em todos os dispositivos.

---

## 1. Fundamentos de Tipografia Web (45 min)

### 1.1 Por que Tipografia Responsiva é Importante?

**Problemas comuns:**
- ❌ Texto muito pequeno no mobile (< 16px)
- ❌ Linhas muito longas no desktop (> 80 caracteres)
- ❌ Espaçamento inadequado
- ❌ Contraste insuficiente
- ❌ Fontes que não carregam

**Benefícios:**
- ✅ Melhor legibilidade em todos os dispositivos
- ✅ Experiência de leitura otimizada
- ✅ Acessibilidade melhorada
- ✅ SEO positivo
- ✅ Profissionalismo visual

### 1.2 Princípios de Legibilidade

**Tamanho mínimo de fonte:**
```css
body {
  font-size: 16px; /* Mínimo recomendado para mobile */
}

@media (min-width: 768px) {
  body {
    font-size: 18px; /* Aumenta para tablet */
  }
}

@media (min-width: 1024px) {
  body {
    font-size: 20px; /* Aumenta para desktop */
  }
}
```

**Line-height (altura da linha):**
```css
body {
  line-height: 1.5; /* Mínimo para corpo de texto */
}

h1, h2, h3 {
  line-height: 1.2; /* Menor para títulos */
}

.small-text {
  line-height: 1.6; /* Maior para texto pequeno */
}
```

**Comprimento da linha (measure):**
```css
/* 45-75 caracteres é ideal */
.readable-text {
  max-width: 65ch; /* ch = largura do caractere '0' */
  margin: 0 auto;
}

/* Ou em pixels */
.text-container {
  max-width: 700px;
  margin: 0 auto;
}
```

### 1.3 Hierarquia Tipográfica

**Escala tipográfica móvel:**
```css
/* MOBILE FIRST */
h1 { font-size: 2rem;    /* 32px */ }
h2 { font-size: 1.5rem;  /* 24px */ }
h3 { font-size: 1.25rem; /* 20px */ }
h4 { font-size: 1.125rem;/* 18px */ }
h5 { font-size: 1rem;    /* 16px */ }
h6 { font-size: 0.875rem;/* 14px */ }
p  { font-size: 1rem;    /* 16px */ }

/* TABLET */
@media (min-width: 768px) {
  h1 { font-size: 2.5rem;  /* 40px */ }
  h2 { font-size: 2rem;    /* 32px */ }
  h3 { font-size: 1.5rem;  /* 24px */ }
  h4 { font-size: 1.25rem; /* 20px */ }
  p  { font-size: 1.125rem;/* 18px */ }
}

/* DESKTOP */
@media (min-width: 1024px) {
  h1 { font-size: 3rem;    /* 48px */ }
  h2 { font-size: 2.25rem; /* 36px */ }
  h3 { font-size: 1.75rem; /* 28px */ }
  h4 { font-size: 1.5rem;  /* 24px */ }
  p  { font-size: 1.25rem; /* 20px */ }
}
```

---

## 2. Unidades Fluidas e Responsivas (60 min)

### 2.1 Usando REM corretamente

**Configuração base:**
```css
/* Base de 16px */
html {
  font-size: 100%; /* 16px na maioria dos navegadores */
}

/* Ou definir explicitamente */
html {
  font-size: 16px;
}

/* Todas as fontes em REM */
body {
  font-size: 1rem; /* 16px */
}

h1 {
  font-size: 2.5rem; /* 40px */
}

.small {
  font-size: 0.875rem; /* 14px */
}
```

### 2.2 Viewport Units (vw, vh)

**Fonte baseada no viewport:**
```css
/* Cresce com a largura do viewport */
h1 {
  font-size: 5vw;
}

/* Problema: pode ficar muito pequeno ou muito grande */
```

### 2.3 Função clamp() - A Solução Ideal

**Sintaxe:**
```css
font-size: clamp(mínimo, ideal, máximo);
```

**Exemplos práticos:**
```css
/* Títulos responsivos fluidos */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  /* Min: 32px, Ideal: 5% do viewport, Max: 64px */
}

h2 {
  font-size: clamp(1.5rem, 3vw + 1rem, 3rem);
  /* Fórmula mais complexa */
}

/* Corpo de texto */
p {
  font-size: clamp(1rem, 0.5vw + 0.875rem, 1.25rem);
  /* Min: 16px, Max: 20px */
}

/* Texto pequeno */
.small {
  font-size: clamp(0.75rem, 0.8vw, 0.875rem);
  /* Min: 12px, Max: 14px */
}
```

**Calculadora de clamp():**
```
Fórmula: clamp(MIN, CALC, MAX)

Onde CALC pode ser:
- Simples: Nvw ou Nvh
- Complexa: Nvw + Mrem
- Fórmula: calc((100vw - 320px) / (1920 - 320) * (MAX - MIN) + MIN)
```

### 2.4 Exemplo Completo com clamp()

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tipografia Fluida</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      padding: clamp(1rem, 3vw, 3rem);
      max-width: 1200px;
      margin: 0 auto;
    }
    
    h1 {
      font-size: clamp(2rem, 5vw + 1rem, 4rem);
      line-height: 1.1;
      margin-bottom: clamp(1rem, 2vw, 2rem);
      font-weight: 800;
    }
    
    h2 {
      font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
      line-height: 1.2;
      margin-top: clamp(2rem, 4vw, 4rem);
      margin-bottom: clamp(0.75rem, 1.5vw, 1.5rem);
      font-weight: 700;
    }
    
    p {
      font-size: clamp(1rem, 0.5vw + 0.875rem, 1.25rem);
      margin-bottom: clamp(1rem, 2vw, 1.5rem);
      max-width: 70ch;
    }
    
    .lead {
      font-size: clamp(1.125rem, 1vw + 1rem, 1.5rem);
      color: #666;
      font-weight: 300;
    }
    
    blockquote {
      font-size: clamp(1.125rem, 1.5vw, 1.5rem);
      font-style: italic;
      border-left: 4px solid #007bff;
      padding-left: clamp(1rem, 2vw, 2rem);
      margin: clamp(2rem, 4vw, 3rem) 0;
      color: #555;
    }
  </style>
</head>
<body>
  <article>
    <h1>Tipografia Fluida com clamp()</h1>
    
    <p class="lead">
      Este é um parágrafo de destaque que demonstra como a tipografia 
      se adapta perfeitamente a diferentes tamanhos de tela usando a 
      função clamp().
    </p>
    
    <h2>O que é clamp()?</h2>
    
    <p>
      A função clamp() permite definir um valor mínimo, ideal e máximo 
      para propriedades CSS. É perfeita para criar tipografia responsiva 
      sem usar media queries.
    </p>
    
    <p>
      Redimensione a janela do navegador e observe como os tamanhos de 
      fonte se ajustam suavemente entre os valores mínimo e máximo 
      definidos.
    </p>
    
    <blockquote>
      "A tipografia responsiva melhora a experiência de leitura em 
      todos os dispositivos."
    </blockquote>
    
    <h2>Vantagens do clamp()</h2>
    
    <p>
      Com clamp(), você elimina a necessidade de múltiplas media queries 
      para ajustar tamanhos de fonte. O texto cresce e diminui de forma 
      fluida e previsível.
    </p>
  </article>
</body>
</html>
```

---

## 3. Web Fonts e Performance (60 min)

### 3.1 Google Fonts

**Importação básica:**
```html
<!-- No HTML -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
```

**Ou no CSS:**
```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}
```

### 3.2 Font-face para Fontes Locais

```css
@font-face {
  font-family: 'MinhaFonte';
  src: url('fonts/minhafonte.woff2') format('woff2'),
       url('fonts/minhafonte.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Importante para performance */
}

body {
  font-family: 'MinhaFonte', system-ui, sans-serif;
}
```

### 3.3 font-display

**Controla como a fonte é exibida durante o carregamento:**

```css
@font-face {
  font-family: 'MinhaFonte';
  src: url('minhafonte.woff2') format('woff2');
  font-display: swap;
}
```

**Opções:**
- `auto` - Navegador decide (padrão)
- `block` - Texto invisível até fonte carregar (max 3s)
- `swap` - Usa fonte padrão, troca quando carregar ⭐ **RECOMENDADO**
- `fallback` - Similar ao swap com timeout curto
- `optional` - Fonte pode não carregar se conexão for lenta

### 3.4 System Font Stack (Performance Máxima)

```css
/* Usa fontes do sistema operacional */
body {
  font-family: 
    -apple-system,        /* iOS/macOS */
    BlinkMacSystemFont,   /* macOS Chrome */
    'Segoe UI',           /* Windows */
    Roboto,               /* Android */
    'Helvetica Neue',     /* macOS fallback */
    Arial,                /* Universal fallback */
    sans-serif;           /* Generic fallback */
}

/* Para código */
code, pre {
  font-family:
    'SF Mono',            /* macOS */
    'Monaco',             /* macOS fallback */
    'Cascadia Code',      /* Windows Terminal */
    'Consolas',           /* Windows */
    'Liberation Mono',    /* Linux */
    'Courier New',        /* Universal */
    monospace;            /* Generic */
}
```

### 3.5 Variable Fonts

**Fonte variável (um arquivo, múltiplos pesos):**

```css
@font-face {
  font-family: 'Inter';
  src: url('Inter-Variable.woff2') format('woff2');
  font-weight: 100 900; /* Suporta qualquer peso entre 100-900 */
  font-display: swap;
}

h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 800;
}

p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
```

### 3.6 Otimização de Web Fonts

```html
<!-- Preload de fonte crítica -->
<link 
  rel="preload" 
  href="fonts/minhafonte.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin
>

<!-- Preconnect para Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

**Subset de caracteres (apenas o que precisa):**
```html
<!-- Apenas Latin characters -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&subset=latin&display=swap" rel="stylesheet">
```

---

## 4. Escalas Tipográficas (45 min)

### 4.1 Razão Modular

**Escala baseada em proporção matemática:**

```css
/* Escala 1.250 (Major Third) */
:root {
  --ratio: 1.25;
  --base: 1rem;
  
  --size-1: calc(var(--base) * var(--ratio));      /* 1.25rem */
  --size-2: calc(var(--size-1) * var(--ratio));    /* 1.563rem */
  --size-3: calc(var(--size-2) * var(--ratio));    /* 1.953rem */
  --size-4: calc(var(--size-3) * var(--ratio));    /* 2.441rem */
  --size-5: calc(var(--size-4) * var(--ratio));    /* 3.052rem */
}

h1 { font-size: var(--size-5); }
h2 { font-size: var(--size-4); }
h3 { font-size: var(--size-3); }
h4 { font-size: var(--size-2); }
h5 { font-size: var(--size-1); }
p  { font-size: var(--base); }
```

**Escalas comuns:**
```
1.125 - Minor Second (sutil)
1.200 - Minor Third
1.250 - Major Third ⭐ Popular
1.333 - Perfect Fourth
1.414 - Augmented Fourth
1.500 - Perfect Fifth
1.618 - Golden Ratio ⭐ Clássico
```

### 4.2 Ferramenta Type Scale

**Use: https://typescale.com/**

Gera escalas prontas para usar:

```css
/* Gerado por Type Scale - Ratio 1.333 */
h1 { font-size: 2.369rem; }
h2 { font-size: 1.777rem; }
h3 { font-size: 1.333rem; }
h4 { font-size: 1rem; }
h5 { font-size: 0.75rem; }
```

### 4.3 Sistema Completo de Tipografia

```css
:root {
  /* Fontes */
  --font-body: system-ui, sans-serif;
  --font-heading: Georgia, serif;
  --font-mono: 'Courier New', monospace;
  
  /* Tamanhos base */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
  
  /* Pesos */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;
  
  /* Line heights */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}

/* Aplicação */
body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
  font-weight: var(--font-normal);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

h1 { font-size: var(--text-5xl); }
h2 { font-size: var(--text-4xl); }
h3 { font-size: var(--text-3xl); }
h4 { font-size: var(--text-2xl); }
h5 { font-size: var(--text-xl); }
h6 { font-size: var(--text-lg); }

.lead {
  font-size: var(--text-xl);
  line-height: var(--leading-relaxed);
  font-weight: var(--font-light);
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
}

.uppercase {
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
}
```

---

## 5. Espaçamento Vertical (40 min)

### 5.1 Ritmo Vertical

```css
/* Sistema baseado em múltiplos de line-height */
:root {
  --space-unit: 1.5rem; /* = line-height base */
}

h1 {
  margin-bottom: calc(var(--space-unit) * 1); /* 1.5rem */
}

h2 {
  margin-top: calc(var(--space-unit) * 2);    /* 3rem */
  margin-bottom: calc(var(--space-unit) * 0.5); /* 0.75rem */
}

p {
  margin-bottom: var(--space-unit);
}

section {
  margin-bottom: calc(var(--space-unit) * 4); /* 6rem */
}
```

### 5.2 Sistema de Espaçamento Fluido

```css
:root {
  /* Espaçamentos fluidos */
  --space-3xs: clamp(0.25rem, 0.5vw, 0.5rem);
  --space-2xs: clamp(0.5rem, 1vw, 0.75rem);
  --space-xs: clamp(0.75rem, 1.5vw, 1rem);
  --space-sm: clamp(1rem, 2vw, 1.5rem);
  --space-md: clamp(1.5rem, 3vw, 2rem);
  --space-lg: clamp(2rem, 4vw, 3rem);
  --space-xl: clamp(3rem, 6vw, 4rem);
  --space-2xl: clamp(4rem, 8vw, 6rem);
  --space-3xl: clamp(6rem, 12vw, 8rem);
}

h1 {
  margin-bottom: var(--space-md);
}

section {
  padding: var(--space-xl) 0;
}

.card {
  padding: var(--space-md);
  gap: var(--space-sm);
}
```

---

## 6. Acessibilidade Tipográfica (30 min)

### 6.1 Contraste

**WCAG 2.1 Níveis:**
```
Texto normal (< 18px):
- AA: mínimo 4.5:1
- AAA: mínimo 7:1

Texto grande (≥ 18px ou ≥ 14px bold):
- AA: mínimo 3:1
- AAA: mínimo 4.5:1
```

**Exemplos:**
```css
/* ✅ Bom contraste */
.good {
  color: #333;
  background: #fff;
  /* Contraste: 12.6:1 */
}

/* ❌ Contraste insuficiente */
.bad {
  color: #999;
  background: #fff;
  /* Contraste: 2.8:1 - Falha AA */
}

/* ✅ Texto grande pode ter menos contraste */
.large-text {
  font-size: 24px;
  color: #666;
  background: #fff;
  /* Contraste: 5.7:1 - OK para texto grande */
}
```

### 6.2 Unidades Relativas para Zoom

```css
/* ✅ Respeita zoom do usuário */
body {
  font-size: 1rem; /* Relativo */
}

/* ❌ Ignora preferências do usuário */
body {
  font-size: 16px; /* Absoluto */
}
```

### 6.3 Espaçamento para Leitura

```css
p {
  /* Máximo 70-80 caracteres por linha */
  max-width: 70ch;
  
  /* Espaçamento entre linhas */
  line-height: 1.6;
  
  /* Espaçamento entre parágrafos */
  margin-bottom: 1.5em;
}
```

---

## 7. Exercícios Práticos (30 min)

### Exercício 1: Artigo Responsivo Completo

**Objetivo:** Criar um artigo de blog com tipografia fluida perfeita

**Requisitos:**
- Usar clamp() para todos os tamanhos
- Escala tipográfica consistente
- Máximo 70ch de largura
- Line-height apropriado
- Espaçamento vertical ritmado
- Web font otimizada

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Artigo Tipografia</title>
  <style>
    /* COMPLETE O CSS AQUI */
  </style>
</head>
<body>
  <article>
    <header>
      <h1>Título do Artigo</h1>
      <p class="meta">Por Autor • 10 de Janeiro, 2025</p>
    </header>
    
    <p class="lead">
      Este é o parágrafo de introdução que deve chamar atenção.
    </p>
    
    <h2>Primeiro Subtítulo</h2>
    <p>Conteúdo do primeiro parágrafo...</p>
    <p>Mais conteúdo...</p>
    
    <blockquote>
      "Uma citação importante para destacar."
    </blockquote>
    
    <h2>Segundo Subtítulo</h2>
    <p>Mais conteúdo...</p>
  </article>
</body>
</html>
```

### Exercício 2: Sistema de Design Tipográfico

**Objetivo:** Criar um sistema completo reutilizável

**Criar:**
- Variáveis CSS para todas as propriedades
- Classes utilitárias (.text-xl, .font-bold, etc)
- Escala consistente
- Documentação visual

---

## Material de Apoio

### Ferramentas
- **Type Scale:** https://typescale.com/
- **Modular Scale:** https://www.modularscale.com/
- **Fluid Type Scale:** https://fluid-type-scale.com/
- **Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Google Fonts:** https://fonts.google.com/

### Leitura Obrigatória
- "The Elements of Typographic Style" - Robert Bringhurst
- Web.dev - "Responsive Typography"
- Smashing Magazine - "Responsive Typography"

### Vídeos
- Kevin Powell - "Fluid Typography"
- CSS-Tricks - "Fluid Typography with clamp()"

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. clamp() é a melhor solução para tipografia fluida
2. REM é preferível a PX para acessibilidade
3. Line-height deve ser entre 1.5-1.6 para corpo de texto
4. Máximo 70ch de largura para legibilidade
5. font-display: swap melhora performance
6. Contraste mínimo 4.5:1 para texto normal
7. System fonts oferecem melhor performance

**Próxima aula:** Formulários Mobile First - otimização e UX.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Usar clamp() para tipografia fluida
- ✅ Criar escalas tipográficas consistentes
- ✅ Implementar web fonts com performance
- ✅ Configurar line-height e spacing apropriados
- ✅ Garantir contraste acessível
- ✅ Usar unidades relativas (rem, em, ch)
- ✅ Criar sistema de design tipográfico
- ✅ Otimizar fontes para performance