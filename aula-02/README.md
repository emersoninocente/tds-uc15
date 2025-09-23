# 🎨 Aula 02

## 🎯 Objetivos

## 🌍 Web Semantica
Semântica é o estudo do significado. Em HTML, isso significa usar tags que descrevem o significado do conteúdo, e não apenas sua aparência.

**Não Semântico:** `<div>` e `<span>`. Eles não dizem nada sobre seu conteúdo.
**Semântico:** `<header>`, `<nav>`, `<article>`, `<footer>`. Eles definem claramente o papel de cada bloco na estrutura da página.
**Por exemplo:** `<b>`Texto em negrito`</b>` (visual) vs. `<strong>`Texto importante`</strong>` (significado).

---
### ⚙️ Estrutura de uma página semântica
- `<header>`: O topo da página. Geralmente contém o logo e a navegação principal.
- `<nav>`: Define um bloco de links de navegação.
- `<main>`: O conteúdo principal e único da página.
- `<article>`: Um bloco de conteúdo independente e autossuficiente (ex: um post de blog, um produto).
- `<section>`: Um agrupamento temático de conteúdo.
- `<aside>`: Conteúdo secundário, relacionado ao conteúdo principal (ex: uma barra lateral).
- `<footer>`: O rodapé da página (informações de copyright, links, etc).

---
### 🛠️ Exemplo prático: Antes e Depois

Antes - Não semântico
```html
<div id="header">
  <h1>Meu Blog</h1>
  <div id="nav">...</div>
</div>
<div id="content">
  <div class="post">...</div>
</div>
<div id="footer">...</div>
```

Depois - Semântico
```html
<header>
  <h1>Meu Blog</h1>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>
```

## 🧾 Exercício prático:
1. Pegue o arquivo index.html criado na aula anterior.
2. Imagine que você está criando a estrutura de uma página de notícias.
3. Usando **apenas tags semânticas**, estruture o conteúdo a seguir:
    - Um cabeçalho com o título do jornal e o menu de navegação principal.
    - A área de conteúdo principal.
    - Dentro dela, o artigo da notícia principal, que deve ter um título, vários parágrafos e uma imagem.
    - Uma seção de comentários abaixo do artigo.
    - Uma barra lateral com links para outras notícias.
    - Um rodapé com informações de contato e copyright.