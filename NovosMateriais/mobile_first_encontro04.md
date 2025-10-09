# Encontro 04: Flexbox para Layouts Responsivos

**Carga Horária:** 4 horas  
**Objetivo:** Dominar Flexbox para criar layouts responsivos e flexíveis usando a abordagem Mobile First.

---

## 1. Introdução ao Flexbox (45 min)

### 1.1 O que é Flexbox?

**Definição:** Flexbox (Flexible Box Layout) é um modelo de layout CSS que permite criar layouts flexíveis e eficientes, especialmente útil para distribuir espaço e alinhar itens em um container.

**Antes do Flexbox:**
```css
/* Método antigo - float */
.col {
  float: left;
  width: 33.33%;
}

.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

**Com Flexbox:**
```css
/* Método moderno - flexbox */
.container {
  display: flex;
}

.col {
  flex: 1;
}
```

### 1.2 Conceitos Fundamentais

**Container Flex (Pai):**
```css
.container {
  display: flex; /* Ativa o flexbox */
}
```

**Flex Items (Filhos):**
```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>
```

### 1.3 Eixos do Flexbox

```
Main Axis (Eixo Principal) →
┌──────────────────────────────┐
│  [Item 1] [Item 2] [Item 3]  │ ↕ Cross Axis (Eixo Transversal)
└──────────────────────────────┘
```

**Main Axis:** Direção principal dos itens (padrão: horizontal)
**Cross Axis:** Direção perpendicular (padrão: vertical)

### 1.4 Demonstração Básica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Básico</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .container {
      display: flex;
      background: #e0e0e0;
      padding: 1rem;
      gap: 1rem;
    }
    
    .item {
      background: #007bff;
      color: white;
      padding: 2rem;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
  </div>
</body>
</html>
```

---

## 2. Propriedades do Container Flex (60 min)

### 2.1 flex-direction

**Controla a direção dos itens:**

```css
.container {
  display: flex;
}

/* Horizontal (padrão) */
.container-row {
  flex-direction: row; /* → → → */
}

/* Horizontal invertido */
.container-row-reverse {
  flex-direction: row-reverse; /* ← ← ← */
}

/* Vertical */
.container-column {
  flex-direction: column; /* ↓ ↓ ↓ */
}

/* Vertical invertido */
.container-column-reverse {
  flex-direction: column-reverse; /* ↑ ↑ ↑ */
}
```

**Exemplo Mobile First:**
```css
/* Mobile: itens empilhados */
.cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Desktop: itens lado a lado */
@media (min-width: 768px) {
  .cards {
    flex-direction: row;
  }
}
```

### 2.2 flex-wrap

**Controla se os itens quebram linha:**

```css
/* Não quebra linha (padrão) */
.container {
  flex-wrap: nowrap;
}

/* Quebra linha quando necessário */
.container {
  flex-wrap: wrap;
}

/* Quebra linha invertido */
.container {
  flex-wrap: wrap-reverse;
}
```

**Exemplo prático:**
```css
.gallery {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.gallery-item {
  width: 100%; /* Mobile: 1 por linha */
}

@media (min-width: 768px) {
  .gallery-item {
    width: calc(50% - 0.5rem); /* Tablet: 2 por linha */
  }
}

@media (min-width: 1024px) {
  .gallery-item {
    width: calc(33.333% - 0.67rem); /* Desktop: 3 por linha */
  }
}
```

### 2.3 justify-content

**Alinha itens no eixo principal (horizontal por padrão):**

```css
/* Início (padrão) */
.container {
  justify-content: flex-start;
}
/* [1][2][3]________________ */

/* Fim */
.container {
  justify-content: flex-end;
}
/* ________________[1][2][3] */

/* Centro */
.container {
  justify-content: center;
}
/* _______[1][2][3]________ */

/* Espaço entre */
.container {
  justify-content: space-between;
}
/* [1]_______[2]_______[3] */

/* Espaço ao redor */
.container {
  justify-content: space-around;
}
/* __[1]____[2]____[3]__ */

/* Espaço uniforme */
.container {
  justify-content: space-evenly;
}
/* ___[1]___[2]___[3]___ */
```

**Exemplo - Menu de navegação:**
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.nav-logo {
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}
```

### 2.4 align-items

**Alinha itens no eixo transversal (vertical por padrão):**

```css
/* Estica (padrão) */
.container {
  align-items: stretch;
}

/* Início */
.container {
  align-items: flex-start;
}

/* Fim */
.container {
  align-items: flex-end;
}

/* Centro */
.container {
  align-items: center;
}

/* Baseline (alinha pelo texto) */
.container {
  align-items: baseline;
}
```

**Exemplo - Centralização perfeita:**
```css
.hero {
  display: flex;
  justify-content: center; /* Centro horizontal */
  align-items: center;     /* Centro vertical */
  min-height: 100vh;
  text-align: center;
}
```

### 2.5 align-content

**Alinha linhas quando há wrap (múltiplas linhas):**

```css
.container {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start; /* ou flex-end, center, space-between, space-around, stretch */
  height: 500px;
}
```

### 2.6 gap (espaçamento)

**Espaçamento entre itens:**

```css
.container {
  display: flex;
  gap: 1rem; /* Espaço uniforme entre todos os itens */
}

/* Espaço diferente entre linhas e colunas */
.container {
  display: flex;
  flex-wrap: wrap;
  row-gap: 2rem;    /* Espaço vertical */
  column-gap: 1rem; /* Espaço horizontal */
}
```

---

## 3. Propriedades dos Flex Items (60 min)

### 3.1 flex-grow

**Controla quanto o item cresce em relação aos outros:**

```css
.item-1 {
  flex-grow: 1; /* Cresce 1 parte */
}

.item-2 {
  flex-grow: 2; /* Cresce 2 partes (dobro do item-1) */
}

.item-3 {
  flex-grow: 1; /* Cresce 1 parte */
}
```

**Exemplo visual:**
```
Espaço disponível: 400px
item-1 (grow: 1) = 100px (1/4 do espaço)
item-2 (grow: 2) = 200px (2/4 do espaço)
item-3 (grow: 1) = 100px (1/4 do espaço)
```

**Uso comum:**
```css
/* Sidebar fixa, conteúdo flexível */
.layout {
  display: flex;
}

.sidebar {
  width: 250px;
  flex-grow: 0; /* Não cresce */
}

.content {
  flex-grow: 1; /* Ocupa espaço restante */
}
```

### 3.2 flex-shrink

**Controla quanto o item encolhe:**

```css
.item {
  flex-shrink: 1; /* Encolhe se necessário (padrão) */
}

.item-no-shrink {
  flex-shrink: 0; /* Nunca encolhe */
}
```

### 3.3 flex-basis

**Define o tamanho inicial do item:**

```css
.item {
  flex-basis: 200px; /* Largura base de 200px */
}

.item-auto {
  flex-basis: auto; /* Baseado no conteúdo (padrão) */
}

.item-percent {
  flex-basis: 50%; /* 50% do container */
}
```

### 3.4 flex (shorthand)

**Combina grow, shrink e basis:**

```css
/* flex: grow shrink basis */

.item {
  flex: 1; /* flex: 1 1 0% */
}

.item {
  flex: 1 0 auto; /* Cresce, não encolhe, tamanho auto */
}

.item {
  flex: 0 0 200px; /* Não cresce, não encolhe, 200px fixo */
}
```

**Valores comuns:**
```css
/* Item flexível que ocupa espaço igual */
.item {
  flex: 1;
}

/* Item com largura fixa */
.item-fixed {
  flex: 0 0 250px;
}

/* Item que se adapta ao conteúdo */
.item-content {
  flex: 0 1 auto;
}
```

### 3.5 align-self

**Sobrescreve align-items para um item específico:**

```css
.container {
  display: flex;
  align-items: flex-start; /* Todos no topo */
}

.item-special {
  align-self: center; /* Este item no centro */
}
```

### 3.6 order

**Muda a ordem visual dos itens:**

```css
/* HTML */
<div class="item">1</div>
<div class="item">2</div>
<div class="item order-first">3</div>

/* CSS */
.order-first {
  order: -1; /* Aparece primeiro */
}
```

**Uso Mobile First:**
```css
/* Mobile: logo depois menu */
.header {
  display: flex;
  flex-direction: column;
}

.logo {
  order: 1;
}

.menu {
  order: 2;
}

/* Desktop: menu depois logo */
@media (min-width: 768px) {
  .header {
    flex-direction: row;
  }
  
  .logo {
    order: 1;
  }
  
  .menu {
    order: 2;
  }
}
```

---

## 4. Padrões Responsivos com Flexbox (60 min)

### 4.1 Layout de Cards Responsivo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cards Flexbox</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      background: #f5f5f5;
      padding: 1rem;
    }
    
    /* MOBILE FIRST */
    .cards {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .card {
      background: white;
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    
    .card h3 {
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .card p {
      color: #666;
      line-height: 1.6;
    }
    
    /* TABLET - 2 colunas */
    @media (min-width: 768px) {
      .cards {
        flex-direction: row;
        flex-wrap: wrap;
      }
      
      .card {
        flex: 0 0 calc(50% - 0.5rem);
      }
    }
    
    /* DESKTOP - 3 colunas */
    @media (min-width: 1024px) {
      .card {
        flex: 0 0 calc(33.333% - 0.67rem);
      }
    }
  </style>
</head>
<body>
  <div class="cards">
    <div class="card">
      <h3>Card 1</h3>
      <p>Conteúdo do primeiro card com flexbox responsivo.</p>
    </div>
    <div class="card">
      <h3>Card 2</h3>
      <p>Os cards se adaptam automaticamente ao tamanho da tela.</p>
    </div>
    <div class="card">
      <h3>Card 3</h3>
      <p>Mobile First: começa com coluna e vira linha no desktop.</p>
    </div>
    <div class="card">
      <h3>Card 4</h3>
      <p>Flexbox facilita muito a criação de layouts responsivos.</p>
    </div>
    <div class="card">
      <h3>Card 5</h3>
      <p>Gap cria espaçamento uniforme entre os elementos.</p>
    </div>
    <div class="card">
      <h3>Card 6</h3>
      <p>Teste redimensionar a janela para ver as mudanças.</p>
    </div>
  </div>
</body>
</html>
```

### 4.2 Holy Grail Layout

**Layout clássico: header, 3 colunas, footer**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holy Grail Layout</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    /* MOBILE FIRST */
    .header {
      background: #2c3e50;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    
    .main {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    
    .sidebar-left,
    .sidebar-right {
      background: #ecf0f1;
      padding: 1rem;
    }
    
    .content {
      background: white;
      padding: 1rem;
      flex: 1;
    }
    
    .footer {
      background: #34495e;
      color: white;
      padding: 1rem;
      text-align: center;
    }
    
    /* DESKTOP */
    @media (min-width: 768px) {
      .main {
        flex-direction: row;
      }
      
      .sidebar-left {
        order: 1;
        flex: 0 0 200px;
      }
      
      .content {
        order: 2;
        flex: 1;
      }
      
      .sidebar-right {
        order: 3;
        flex: 0 0 200px;
      }
    }
  </style>
</head>
<body>
  <header class="header">
    <h1>Header</h1>
  </header>
  
  <div class="main">
    <aside class="sidebar-left">
      <h3>Sidebar Esquerda</h3>
      <p>Menu ou widgets</p>
    </aside>
    
    <main class="content">
      <h2>Conteúdo Principal</h2>
      <p>Este é o layout Holy Grail feito com Flexbox.</p>
      <p>No mobile, as sidebars aparecem acima e abaixo do conteúdo.</p>
      <p>No desktop, ficam nas laterais.</p>
    </main>
    
    <aside class="sidebar-right">
      <h3>Sidebar Direita</h3>
      <p>Anúncios ou informações extras</p>
    </aside>
  </div>
  
  <footer class="footer">
    <p>Footer &copy; 2025</p>
  </footer>
</body>
</html>
```

### 4.3 Navegação Responsiva

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nav Flexbox</title>
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
    }
    
    .nav-container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    
    .nav-logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-menu {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      list-style: none;
    }
    
    .nav-menu a {
      color: white;
      text-decoration: none;
      padding: 0.5rem;
      border-radius: 4px;
      transition: background 0.3s;
    }
    
    .nav-menu a:hover {
      background: rgba(255,255,255,0.1);
    }
    
    .nav-actions {
      display: flex;
      gap: 0.5rem;
    }
    
    .btn {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 1rem;
    }
    
    .btn-primary {
      background: #007bff;
      color: white;
    }
    
    .btn-secondary {
      background: transparent;
      color: white;
      border: 1px solid white;
    }
    
    /* TABLET+ */
    @media (min-width: 768px) {
      .nav-container {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      
      .nav-menu {
        flex-direction: row;
        gap: 2rem;
      }
      
      .nav-menu a {
        padding: 0;
      }
    }
  </style>
</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">MeuSite</div>
      
      <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
      
      <div class="nav-actions">
        <button class="btn btn-secondary">Login</button>
        <button class="btn btn-primary">Cadastrar</button>
      </div>
    </div>
  </nav>
  
  <main style="padding: 2rem;">
    <h1>Navegação com Flexbox</h1>
    <p>Redimensione a janela para ver a navegação se adaptar.</p>
  </main>
</body>
</html>
```

### 4.4 Media Object Pattern

```css
/* Card com imagem e texto lado a lado */
.media {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
}

.media-image {
  flex: 0 0 100px; /* Imagem fixa */
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.media-content {
  flex: 1; /* Texto flexível */
}

.media-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.media-text {
  color: #666;
}
```

---

## 5. Exercícios Práticos (45 min)

### Exercício 1: Galeria de Fotos Responsiva (20 min)

**Objetivo:** Criar galeria que mostra 1, 2 ou 3 fotos por linha.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeria Flexbox</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: Arial, sans-serif;
      padding: 1rem;
      background: #f5f5f5;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    /* COMPLETE O CSS AQUI */
    .gallery {
      /* Use flexbox com wrap */
    }
    
    .gallery-item {
      /* Mobile: 100% */
      /* Tablet: 50% */
      /* Desktop: 33.333% */
    }
    
    .gallery-item img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 8px;
    }
  </style>
</head>
<body>
  <h1>Minha Galeria</h1>
  
  <div class="gallery">
    <div class="gallery-item">
      <img src="https://via.placeholder.com/400x300/ff6b6b" alt="Foto 1">
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/400x300/4ecdc4" alt="Foto 2">
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/400x300/45b7d1" alt="Foto 3">
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/400x300/f9ca24" alt="Foto 4">
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/400x300/6c5ce7" alt="Foto 5">
    </div>
    <div class="gallery-item">
      <img src="https://via.placeholder.com/400x300/fd79a8" alt="Foto 6">
    </div>
  </div>
</body>
</html>
```

### Exercício 2: Dashboard Layout (25 min)

**Objetivo:** Criar layout de dashboard com header, sidebar e conteúdo principal.

**Requisitos:**
- Mobile: elementos empilhados verticalmente
- Desktop: sidebar à esquerda, conteúdo à direita
- Header sempre no topo
- Sidebar fixa em 250px no desktop
- Conteúdo ocupa espaço restante

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
    }
    
    /* COMPLETE O CSS USANDO FLEXBOX */
  </style>
</head>
<body>
  <div class="dashboard">
    <header class="dashboard-header">
      <h1>Dashboard</h1>
    </header>
    
    <div class="dashboard-main">
      <aside class="dashboard-sidebar">
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Usuários</a></li>
            <li><a href="#">Relatórios</a></li>
            <li><a href="#">Configurações</a></li>
          </ul>
        </nav>
      </aside>
      
      <main class="dashboard-content">
        <h2>Bem-vindo ao Dashboard</h2>
        <p>Conteúdo principal aqui...</p>
      </main>
    </div>
  </div>
</body>
</html>
```

---

## Material de Apoio

### Recursos Interativos
- **Flexbox Froggy:** https://flexboxfroggy.com/ (jogo para aprender flexbox)
- **Flexbox Defense:** http://www.flexboxdefense.com/ (jogo tower defense)
- **Flexbox Zombies:** https://mastery.games/flexboxzombies/

### Leitura Obrigatória
- CSS-Tricks - "A Complete Guide to Flexbox"
- MDN Web Docs - "Flexbox"

### Leitura Complementar
- "Flexbox in CSS" - Estelle Weyl
- Smashing Magazine - "Flexbox Patterns"

### Ferramentas
- **Flexbox Generator:** https://loading.io/flexbox/
- **Flexy Boxes:** https://the-echoplex.net/flexyboxes/

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. Flexbox facilita layouts responsivos e alinhamento
2. Container flex controla os filhos com display: flex
3. flex-direction, justify-content e align-items são essenciais
4. flex: 1 faz item ocupar espaço disponível
5. gap substitui margins entre itens
6. flex-wrap permite múltiplas linhas
7. order reorganiza elementos visualmente

**Próxima aula:** CSS Grid - layouts bidimensionais complexos.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Criar containers flex com display: flex
- ✅ Usar flex-direction para mudar orientação
- ✅ Alinhar itens com justify-content e align-items
- ✅ Aplicar flex-wrap para layouts responsivos
- ✅ Usar flex: 1 para distribuir espaço
- ✅ Criar layouts responsivos sem media queries complexas
- ✅ Combinar flexbox com media queries Mobile First
- ✅ Implementar padrões comuns (cards, navegação, holy grail)