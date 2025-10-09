# Encontro 05: CSS Grid para Layouts Responsivos

**Carga Horária:** 4 horas  
**Objetivo:** Dominar CSS Grid para criar layouts bidimensionais complexos e totalmente responsivos.

---

## 1. Introdução ao CSS Grid (45 min)

### 1.1 O que é CSS Grid?

**Definição:** CSS Grid é um sistema de layout bidimensional que permite criar layouts complexos com linhas e colunas simultaneamente.

**Flexbox vs Grid:**
```
FLEXBOX (1D)          GRID (2D)
─────────────         ┌───┬───┬───┐
[Item] [Item]         │ A │ B │ C │
[Item] [Item]         ├───┼───┼───┤
                      │ D │ E │ F │
                      └───┴───┴───┘
```

### 1.2 Conceitos Fundamentais

**Grid Container (Pai):**
```css
.container {
  display: grid;
}
```

**Grid Items (Filhos):**
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
</div>
```

### 1.3 Terminologia do Grid

```
Grid Lines (linhas numeradas)
     1   2   3   4
  1  ┌───┬───┬───┐
     │ A │ B │ C │  ← Grid Track (trilha)
  2  ├───┼───┼───┤
     │ D │ E │ F │  ← Grid Row
  3  └───┴───┴───┘
       ↑
    Grid Column
    
Grid Cell = uma célula individual
Grid Area = conjunto de células
Gap = espaço entre células
```

### 1.4 Exemplo Básico

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Básico</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr; /* 3 colunas iguais */
      gap: 1rem;
      padding: 1rem;
      background: #f5f5f5;
    }
    
    .item {
      background: #007bff;
      color: white;
      padding: 2rem;
      text-align: center;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
  </div>
</body>
</html>
```

---

## 2. Propriedades do Grid Container (60 min)

### 2.1 grid-template-columns e grid-template-rows

**Definindo colunas:**

```css
/* 3 colunas de 200px cada */
.grid {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}

/* 3 colunas usando repeat */
.grid {
  grid-template-columns: repeat(3, 200px);
}

/* Colunas com tamanhos diferentes */
.grid {
  grid-template-columns: 200px 1fr 2fr;
}
/* 200px fixa | restante dividido em 3 partes (1+2) */

/* Mix de unidades */
.grid {
  grid-template-columns: 250px 1fr auto;
}
/* 250px fixa | flexível | baseado no conteúdo */
```

**Definindo linhas:**

```css
.grid {
  grid-template-rows: 100px 200px 100px;
}

/* Auto-rows para linhas implícitas */
.grid {
  grid-auto-rows: 150px;
}

/* Mínimo e máximo */
.grid {
  grid-auto-rows: minmax(100px, auto);
}
```

### 2.2 Unidade fr (fraction)

**fr = fração do espaço disponível**

```css
/* 3 colunas iguais */
.grid {
  grid-template-columns: 1fr 1fr 1fr;
}

/* Proporções diferentes */
.grid {
  grid-template-columns: 2fr 1fr 1fr;
}
/* Col 1 = 50% | Col 2 = 25% | Col 3 = 25% */

/* Combinando fr com outras unidades */
.grid {
  grid-template-columns: 200px 1fr 1fr;
}
/* 200px fixa, restante dividido igualmente */
```

### 2.3 repeat() e auto-fit/auto-fill

**Repetir padrões:**

```css
/* 12 colunas iguais */
.grid {
  grid-template-columns: repeat(12, 1fr);
}

/* Padrão alternado */
.grid {
  grid-template-columns: repeat(4, 100px 200px);
}
/* 100px 200px 100px 200px 100px 200px 100px 200px */
```

**auto-fit (responsivo sem media queries!):**

```css
/* Colunas se ajustam automaticamente */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
```

**auto-fill vs auto-fit:**

```css
/* auto-fill: cria colunas vazias se houver espaço */
.grid-fill {
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

/* auto-fit: expande itens para preencher espaço */
.grid-fit {
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
```

### 2.4 gap (espaçamento)

```css
/* Espaço uniforme */
.grid {
  gap: 1rem;
}

/* Espaços diferentes para linhas e colunas */
.grid {
  row-gap: 2rem;
  column-gap: 1rem;
}

/* Sintaxe antiga (ainda funciona) */
.grid {
  grid-gap: 1rem;
  grid-row-gap: 2rem;
  grid-column-gap: 1rem;
}
```

### 2.5 grid-template-areas

**Nomear áreas do layout:**

```css
.layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  gap: 1rem;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer  { grid-area: footer; }
```

**Mobile First com grid-template-areas:**

```css
/* MOBILE */
.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    "header"
    "content"
    "sidebar"
    "footer";
}

/* DESKTOP */
@media (min-width: 768px) {
  .layout {
    grid-template-columns: 250px 1fr;
    grid-template-areas:
      "header header"
      "sidebar content"
      "footer footer";
  }
}
```

### 2.6 justify-items e align-items

```css
/* Alinhamento horizontal dos itens */
.grid {
  justify-items: start;    /* início */
  justify-items: end;      /* fim */
  justify-items: center;   /* centro */
  justify-items: stretch;  /* estica (padrão) */
}

/* Alinhamento vertical dos itens */
.grid {
  align-items: start;
  align-items: end;
  align-items: center;
  align-items: stretch;
}
```

### 2.7 justify-content e align-content

```css
/* Alinha o grid inteiro horizontalmente */
.grid {
  justify-content: start;
  justify-content: end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
  justify-content: space-evenly;
}

/* Alinha o grid inteiro verticalmente */
.grid {
  align-content: start;
  align-content: end;
  align-content: center;
  align-content: space-between;
}
```

---

## 3. Propriedades dos Grid Items (60 min)

### 3.1 grid-column e grid-row

**Posicionamento manual:**

```css
/* Item ocupa da coluna 1 até 3 */
.item {
  grid-column: 1 / 3;
}

/* Item ocupa da linha 2 até 4 */
.item {
  grid-row: 2 / 4;
}

/* Shorthand */
.item {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

/* Usando span (ocupa X células) */
.item {
  grid-column: span 2; /* Ocupa 2 colunas */
  grid-row: span 3;    /* Ocupa 3 linhas */
}

/* Até o final */
.item {
  grid-column: 1 / -1; /* Da primeira até última coluna */
}
```

**Exemplo visual:**

```css
.item-1 {
  grid-column: 1 / 3;  /* Ocupa colunas 1-2 */
  grid-row: 1 / 2;
}

.item-2 {
  grid-column: 3 / 4;  /* Coluna 3 */
  grid-row: 1 / 3;     /* Linhas 1-2 */
}
```

### 3.2 grid-area

**Duas formas de uso:**

```css
/* 1. Referenciando área nomeada */
.header {
  grid-area: header;
}

/* 2. Shorthand para posicionamento */
.item {
  grid-area: 1 / 2 / 3 / 4;
  /* row-start / col-start / row-end / col-end */
}
```

### 3.3 justify-self e align-self

```css
/* Alinha item individual horizontalmente */
.item {
  justify-self: start;
  justify-self: end;
  justify-self: center;
  justify-self: stretch;
}

/* Alinha item individual verticalmente */
.item {
  align-self: start;
  align-self: end;
  align-self: center;
  align-self: stretch;
}
```

---

## 4. Layouts Responsivos com Grid (60 min)

### 4.1 Grid Responsivo Automático

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Auto-Responsivo</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      padding: 1rem;
      background: #f5f5f5;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 2rem;
    }
    
    /* Grid que se adapta automaticamente! */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
    }
    
    .gallery-item {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: transform 0.3s;
    }
    
    .gallery-item:hover {
      transform: translateY(-4px);
    }
    
    .gallery-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    
    .gallery-item-content {
      padding: 1rem;
    }
    
    .gallery-item h3 {
      margin-bottom: 0.5rem;
      color: #333;
    }
    
    .gallery-item p {
      color: #666;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <h1>Galeria Auto-Responsiva</h1>
  
  <div class="gallery">
    <article class="gallery-item">
      <img src="https://via.placeholder.com/400x300/ff6b6b" alt="Item 1">
      <div class="gallery-item-content">
        <h3>Item 1</h3>
        <p>Grid auto-responsivo sem media queries!</p>
      </div>
    </article>
    
    <article class="gallery-item">
      <img src="https://via.placeholder.com/400x300/4ecdc4" alt="Item 2">
      <div class="gallery-item-content">
        <h3>Item 2</h3>
        <p>Usando auto-fit e minmax.</p>
      </div>
    </article>
    
    <article class="gallery-item">
      <img src="https://via.placeholder.com/400x300/45b7d1" alt="Item 3">
      <div class="gallery-item-content">
        <h3>Item 3</h3>
        <p>As colunas se ajustam automaticamente.</p>
      </div>
    </article>
    
    <article class="gallery-item">
      <img src="https://via.placeholder.com/400x300/f9ca24" alt="Item 4">
      <div class="gallery-item-content">
        <h3>Item 4</h3>
        <p>Redimensione a janela para testar.</p>
      </div>
    </article>
    
    <article class="gallery-item">
      <img src="https://via.placeholder.com/400x300/6c5ce7" alt="Item 5">
      <div class="gallery-item-content">
        <h3>Item 5</h3>
        <p>Minimum 250px, maximum 1fr.</p>
      </div>
    </article>
    
    <article class="gallery-item">
      <img src="https://via.placeholder.com/400x300/fd79a8" alt="Item 6">
      <div class="gallery-item-content">
        <h3>Item 6</h3>
        <p>Grid é perfeito para galerias.</p>
      </div>
    </article>
  </div>
</body>
</html>
```

### 4.2 Layout de Blog Complexo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Blog Layout</title>
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
    
    /* MOBILE FIRST */
    .page {
      display: grid;
      grid-template-areas:
        "header"
        "featured"
        "content"
        "sidebar"
        "footer";
      gap: 1rem;
      padding: 1rem;
      min-height: 100vh;
    }
    
    .header {
      grid-area: header;
      background: #2c3e50;
      color: white;
      padding: 1.5rem;
      text-align: center;
    }
    
    .featured {
      grid-area: featured;
      background: #3498db;
      color: white;
      padding: 2rem;
      border-radius: 8px;
    }
    
    .content {
      grid-area: content;
    }
    
    .posts {
      display: grid;
      gap: 1rem;
    }
    
    .post {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .sidebar {
      grid-area: sidebar;
      background: #ecf0f1;
      padding: 1.5rem;
      border-radius: 8px;
    }
    
    .footer {
      grid-area: footer;
      background: #34495e;
      color: white;
      padding: 1.5rem;
      text-align: center;
    }
    
    /* TABLET - 768px */
    @media (min-width: 768px) {
      .page {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
          "header header"
          "featured featured"
          "content sidebar"
          "footer footer";
      }
      
      .posts {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    /* DESKTOP - 1024px */
    @media (min-width: 1024px) {
      .page {
        grid-template-columns: 2fr 1fr;
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .posts {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <header class="header">
      <h1>Meu Blog</h1>
    </header>
    
    <section class="featured">
      <h2>Post em Destaque</h2>
      <p>Este é o post principal da página.</p>
    </section>
    
    <main class="content">
      <div class="posts">
        <article class="post">
          <h3>Post 1</h3>
          <p>Conteúdo do primeiro post...</p>
        </article>
        
        <article class="post">
          <h3>Post 2</h3>
          <p>Conteúdo do segundo post...</p>
        </article>
        
        <article class="post">
          <h3>Post 3</h3>
          <p>Conteúdo do terceiro post...</p>
        </article>
        
        <article class="post">
          <h3>Post 4</h3>
          <p>Conteúdo do quarto post...</p>
        </article>
      </div>
    </main>
    
    <aside class="sidebar">
      <h3>Sobre</h3>
      <p>Informações sobre o blog.</p>
      
      <h3 style="margin-top: 1rem;">Categorias</h3>
      <ul>
        <li>Tecnologia</li>
        <li>Design</li>
        <li>Programação</li>
      </ul>
    </aside>
    
    <footer class="footer">
      <p>&copy; 2025 Meu Blog. Todos os direitos reservados.</p>
    </footer>
  </div>
</body>
</html>
```

### 4.3 Dashboard com Grid

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Grid</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      background: #f5f5f5;
    }
    
    /* MOBILE FIRST */
    .dashboard {
      display: grid;
      grid-template-areas:
        "header"
        "stats1"
        "stats2"
        "stats3"
        "stats4"
        "chart"
        "table";
      gap: 1rem;
      padding: 1rem;
    }
    
    .header {
      grid-area: header;
      background: #2c3e50;
      color: white;
      padding: 1.5rem;
    }
    
    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .stat-card h3 {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0.5rem;
    }
    
    .stat-card .value {
      font-size: 2rem;
      font-weight: bold;
      color: #2c3e50;
    }
    
    .stats1 { grid-area: stats1; }
    .stats2 { grid-area: stats2; }
    .stats3 { grid-area: stats3; }
    .stats4 { grid-area: stats4; }
    
    .chart {
      grid-area: chart;
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      min-height: 300px;
    }
    
    .table {
      grid-area: table;
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    /* TABLET - 768px */
    @media (min-width: 768px) {
      .dashboard {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          "header header"
          "stats1 stats2"
          "stats3 stats4"
          "chart chart"
          "table table";
      }
    }
    
    /* DESKTOP - 1024px */
    @media (min-width: 1024px) {
      .dashboard {
        grid-template-columns: repeat(4, 1fr);
        grid-template-areas:
          "header header header header"
          "stats1 stats2 stats3 stats4"
          "chart chart chart table"
          "chart chart chart table";
        max-width: 1400px;
        margin: 0 auto;
      }
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <header class="header">
      <h1>Dashboard</h1>
    </header>
    
    <div class="stat-card stats1">
      <h3>Usuários</h3>
      <div class="value">1,234</div>
    </div>
    
    <div class="stat-card stats2">
      <h3>Vendas</h3>
      <div class="value">R$ 45,678</div>
    </div>
    
    <div class="stat-card stats3">
      <h3>Produtos</h3>
      <div class="value">567</div>
    </div>
    
    <div class="stat-card stats4">
      <h3>Visitas</h3>
      <div class="value">8,901</div>
    </div>
    
    <div class="chart">
      <h2>Gráfico de Vendas</h2>
      <p>Aqui ficaria um gráfico...</p>
    </div>
    
    <div class="table">
      <h2>Últimas Vendas</h2>
      <p>Tabela de vendas recentes...</p>
    </div>
  </div>
</body>
</html>
```

### 4.4 Mosaic Layout (Pinterest Style)

```css
/* Layout estilo Pinterest - alturas variadas */
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 10px; /* Linhas pequenas para controle fino */
  gap: 1rem;
}

.masonry-item {
  background: white;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Controla altura com span */
.masonry-item:nth-child(1) { grid-row: span 20; }
.masonry-item:nth-child(2) { grid-row: span 30; }
.masonry-item:nth-child(3) { grid-row: span 25; }
.masonry-item:nth-child(4) { grid-row: span 35; }
```

---

## 5. Grid vs Flexbox - Quando usar? (30 min)

### 5.1 Use Grid quando:

✅ Layout bidimensional (linhas E colunas)
✅ Layouts complexos com áreas nomeadas
✅ Precisa controlar ambos os eixos simultaneamente
✅ Sobreposição de elementos
✅ Layouts tipo dashboard ou revista

### 5.2 Use Flexbox quando:

✅ Layout unidimensional (linha OU coluna)
✅ Navegação
✅ Componentes pequenos (botões, cards)
✅ Alinhamento simples
✅ Distribuição de espaço entre itens

### 5.3 Combinando Grid e Flexbox

```css
/* Grid para layout geral */
.page {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
}

/* Flexbox para componentes internos */
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

## 6. Exercícios Práticos (45 min)

### Exercício 1: Magazine Layout (25 min)

**Objetivo:** Criar layout estilo revista com itens de tamanhos diferentes.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Magazine Layout</title>
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
    
    /* COMPLETE O CSS */
    /* Crie um grid onde:
       - Mobile: 1 coluna
       - Tablet: 2 colunas
       - Desktop: 4 colunas
       - Item "featured" ocupa 2x2 no desktop
       - Itens "large" ocupam 2 colunas
    */
    
    .magazine {
      display: grid;
      gap: 1rem;
    }
    
    .article {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      min-height: 200px;
    }
    
    .featured {
      background: #3498db;
      color: white;
    }
    
    .large {
      background: #2ecc71;
      color: white;
    }
  </style>
</head>
<body>
  <div class="magazine">
    <article class="article featured">
      <h2>Featured Article</h2>
      <p>Este deve ocupar 2x2 no desktop</p>
    </article>
    
    <article class="article">
      <h3>Article 1</h3>
      <p>Normal</p>
    </article>
    
    <article class="article">
      <h3>Article 2</h3>
      <p>Normal</p>
    </article>
    
    <article class="article large">
      <h3>Large Article</h3>
      <p>Ocupa 2 colunas</p>
    </article>
    
    <article class="article">
      <h3>Article 3</h3>
      <p>Normal</p>
    </article>
    
    <article class="article">
      <h3>Article 4</h3>
      <p>Normal</p>
    </article>
  </div>
</body>
</html>
```

### Exercício 2: App Layout Completo (20 min)

**Objetivo:** Criar layout de aplicação completa com header, sidebar, conteúdo e footer.

**Requisitos:**
- Mobile: tudo empilhado verticalmente
- Desktop: sidebar fixa à esquerda (250px), conteúdo principal flexível
- Header sempre no topo
- Footer sempre no rodapé
- Mínimo 100vh de altura

---

## Material de Apoio

### Recursos Interativos
- **Grid Garden:** https://cssgridgarden.com/ (jogo para aprender grid)
- **Grid Attack:** https://codingfantasy.com/games/css-grid-attack
- **Grid Critters:** https://gridcritters.com/

### Leitura Obrigatória
- CSS-Tricks - "A Complete Guide to Grid"
- MDN Web Docs - "CSS Grid Layout"

### Leitura Complementar
- "Grid by Example" - Rachel Andrew
- Smashing Magazine - "CSS Grid Layout Patterns"

### Ferramentas
- **Grid Generator:** https://cssgrid-generator.netlify.app/
- **Grid Layout It:** https://grid.layoutit.com/
- **Firefox Grid Inspector:** (DevTools integrado)

### Vídeos Recomendados
- Wes Bos - "CSS Grid Course" (gratuito)
- Kevin Powell - "Learn CSS Grid the easy way"

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. Grid é bidimensional, Flexbox é unidimensional
2. display: grid ativa o sistema de grid
3. fr (fraction) distribui espaço proporcionalmente
4. auto-fit e minmax criam layouts responsivos sem media queries
5. grid-template-areas facilita layouts nomeados
6. repeat() evita repetição de código
7. Grid e Flexbox podem ser combinados

**Próxima aula:** Imagens Responsivas - otimização e técnicas avançadas.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Criar grids com grid-template-columns/rows
- ✅ Usar unidade fr para layouts flexíveis
- ✅ Aplicar repeat() e auto-fit para responsividade
- ✅ Nomear áreas com grid-template-areas
- ✅ Posicionar itens manualmente com grid-column/row
- ✅ Criar layouts responsivos com minmax()
- ✅ Decidir quando usar Grid vs Flexbox
- ✅ Combinar Grid e Flexbox em projetos
- ✅ Implementar layouts complexos tipo dashboard
- ✅ Usar gap para espaçamento entre itens