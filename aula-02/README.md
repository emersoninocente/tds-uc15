# 🎨 - Aula 02

## 🎯 Objetivos
 - Montagem do ambiente de desenvolvimento
 - Entendimento da web semantica
 - VIEWPORT
 - Imagens Responsivas

---
## 🌍 - Web Semantica
Semântica é o estudo do significado. Em HTML, isso significa usar tags que descrevem o significado do conteúdo, e não apenas sua aparência.

**Não Semântico:** `<div>` e `<span>`. Eles não dizem nada sobre seu conteúdo.
**Semântico:** `<header>`, `<nav>`, `<article>`, `<footer>`. Eles definem claramente o papel de cada bloco na estrutura da página.
**Por exemplo:** `<b>`Texto em negrito`</b>` (visual) vs. `<strong>`Texto importante`</strong>` (significado).

### ⚙️ Estrutura de uma página semântica
- `<header>`: O topo da página. Geralmente contém o logo e a navegação principal.
- `<nav>`: Define um bloco de links de navegação.
- `<main>`: O conteúdo principal e único da página.
- `<article>`: Um bloco de conteúdo independente e autossuficiente (ex: um post de blog, um produto).
- `<section>`: Um agrupamento temático de conteúdo.
- `<aside>`: Conteúdo secundário, relacionado ao conteúdo principal (ex: uma barra lateral).
- `<footer>`: O rodapé da página (informações de copyright, links, etc).

> Para saber um pouco mais sobre [web semântica](https://www.freecodecamp.org/portuguese/news/elementos-semanticos-do-html5-explicados/) e mais [ainda](https://www.devmedia.com.br/html-semantico-conheca-os-elementos-semanticos-da-html5/38065).

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

### 🧾 Exercício prático:
1. Pegue o arquivo index.html criado na aula anterior.
2. Imagine que você está criando a estrutura de uma página de notícias.
3. Usando **apenas tags semânticas**, estruture o conteúdo a seguir:
    - Um cabeçalho com o título do jornal e o menu de navegação principal.
    - A área de conteúdo principal.
    - Dentro dela, o artigo da notícia principal, que deve ter um título, vários parágrafos e uma imagem.
    - Uma seção de comentários abaixo do artigo.
    - Uma barra lateral com links para outras notícias.
    - Um rodapé com informações de contato e copyright.

---
## 🧩 - A Viewport e Imagens Responsivas
A versão da formiga: \
Sem uma instrução específica, os navegadores mobile tentam renderizar a página com a largura de um desktop (geralmente ~980px) e depois diminuem o resultado para caber na tela. O resultado é um texto minúsculo e ilegível.

### 🖥️ Tag `viewport`
Esta linha de código, inserida no `<head>` do seu HTML, é a instrução mais importante para o desenvolvimento mobile.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
- `width=device-width`: Diz ao navegador: "A largura da sua área de visualização deve ser igual à largura da tela do dispositivo".
- `initial-scale=1.0`: Controla o nível de zoom inicial. `1.0` impede que a página comece com zoom para mais ou para menos.

---
## ✏️ - Desafio das imagens
Enviar uma imagem de alta resolução (ex: 1920px de largura) para um celular com tela de 360px de largura é um desperdício de dados e torna o site lento. Precisamos enviar a imagem certa para o dispositivo certo. \
**Soluções:** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`srcset`: Para diferentes resoluções. \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<picture>`: Para diferentes direções de arte.

### Exemplo prático `srcset`:
Use quando uma imagem é a mesma, só muda o tamanho.
```html
<img src="imagem-pequena.jpg"
     srcset="imagem-pequena.jpg 480w,
             imagem-media.jpg 800w,
             imagem-grande.jpg 1200w"
     sizes="(max-width: 600px) 480px, 800px"
     alt="Descrição da imagem">
```
- `srcset`: Fornece a lista de imagens disponíveis e suas larguras reais (w).
- `sizes`: Informa ao navegador o quão grande a imagem será exibida em diferentes larguras de tela.
- O navegador faz o cálculo e baixa a imagem mais apropriada, economizando banda.

### Exemplo Prático: `<picture>`
Use quando você quer mostrar imagens diferentes em telas diferentes (ex: um plano geral no desktop e um close-up no mobile).
```html
<picture>
   <source media="(max-width: 799px)" srcset="imagem-mobile.jpg">
   <source media="(min-width: 800px)" srcset="imagem-desktop.jpg">
   <img src="imagem-desktop.jpg" alt="Descrição da imagem">
</picture>
```

 - O navegador avalia cada tag `<source>` de cima para baixo e usa a primeira que corresponder à media query. A tag `<img>` no final é obrigatória como fallback.

---
## - Exercício Prático:
-> Implementar ambiente de desenvolvimento:
1) Instale o Visual Studio Code, Git e o Google Chrome
2) No VS Code, as extenções `Live Server` e `Prettier`
3) Crie uma conta no **GitHub**
4) Crie um novo repositório chamado `desenvolvimento-mobile-tds-uc15`
5) Clone o repositório para a máquina local
6) Dentro do repositório, crie um arquivo `index.html` com a estrutura básica de um documento HTML

-> Seguindo o desenvolvimento
1) Adicione a meta tag `viewport` ao seu arquivo `index.html`.
2) Baixe 3 versões de uma mesma imagem em tamanhos diferentes (ex: 400px, 800px, 1200px de largura).
3) Implemente a imagem no seu artigo usando a tag `<img>` com o atributo srcset.
4) Baixe duas imagens diferentes (uma paisagem e um retrato). Implemente-as usando a tag `<picture>` para que a imagem retrato apareça em telas de até 600px e a paisagem em telas maiores.