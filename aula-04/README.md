# Aula 04

## Objetivos

- Revisão dos conteúdos
- Uso do `header`

---

## Revisando nosso código

### Tags básicas

`DOCTYPE`
`html`
`head`
`body`

`viewport`
`charset`

### Integração HTML e CSS

`link`

### Integração Javascript

`script`

### Juntando tudo

#### Exemplo

`index.html`

```html
<DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Página Inicial UC-15</title>
  </head>
  <body>
    <!-- Conteúdo da página aqui -->
  </body>
</html>
```

`style.css`

```css
:root {
  --cor-de-fundo: #BEBEBE;
}

body {
  background-color: var(--cor-de-fundo);
}
```

---

## Montando o cabeçalho da página

> Para montarmos o `header` da nossa página, vamos iniciar criando o **menu** do tipo **hamburger** para isto vamos precisar criar um `button` e dentro deste vamos colocar três `span` para montarmos as linhas. Vamos ajustar o estilo no nosso `css` e as ações usando javascript. Então vamos as modificações:

1) HTML: A estrutura agora tem um botão (#btn-mobile) e uma lista de menu (#menu-list) dentro da `<nav>`.

```html
    <header>
      Conteúdo do cabeçalho    
      <nav class="nav" id="nav">
        <button id="btn-mobile" class="btn-hamburger" aria-label="Abrir Menu" aria-haspopup="true" aria-controls="menu-list" aria-expanded="false">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>
        
        <ul id="menu-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
```

2) CSS

    a) Mobile First: Por padrão, o CSS esconde a lista `(#menu-list { display: none; })` e mostra apenas o botão hamburger. Quando a classe `.active` é aplicada à `<nav>`, a regra `#nav.active #menu-list` se torna específica o suficiente para sobrepor a anterior e mostrar o menu `(display: block;)`.

    b) CSS Responsivo: A media query `@media (min-width: 768px)` só é aplicada em telas com 768 pixels de largura ou mais. Dentro dela, escondemos o botão hamburger e forçamos a lista a aparecer `(display: flex;)` e se alinhar horizontalmente.

```css
.nav {
  display: flex; /* Alinha o botão e o menu */
  justify-content: flex-end; /* Empurra o conteúdo para a direita */
  align-items: center;
  /* padding: 1rem; */
}

/* === ESTILOS MOBILE FIRST (Padrão) === */

/* Estilo do botão Hamburger */
.btn-hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px; /* Espaço entre as linhas */
  border: none;
  background: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #333;
  transition: .3s ease-in-out;
}

/* Esconde a lista do menu por padrão no mobile */
#menu-list {
  display: none; /* Começa escondido */
  position: absolute;
  width: 100%;
  top: 90px; /* Ajuste conforme a altura do seu header/nav */
  right: 0px;
  background-color: #f9f9f9;
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
}

#menu-list li {
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

#menu-list li:last-child {
  border-bottom: none;
}

#menu-list a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

/* Classe que será adicionada/removida via JS */
#nav.active #menu-list {
  display: block; /* Mostra o menu quando a nav tiver a classe .active */
}

/* Animação do botão para virar um "X" */
#nav.active .hamburger-line:nth-child(1) {
  transform: rotate(-45deg) translate(-6px, 6px);
}
#nav.active .hamburger-line:nth-child(2) {
  opacity: 0;
}
#nav.active .hamburger-line:nth-child(3) {
  transform: rotate(45deg) translate(-6px, -6px);
}


/* === ESTILOS PARA TELAS MAIORES (TABLET/DESKTOP) === */

@media (min-width: 768px) {
  /* Esconde o botão hamburger */
  .btn-hamburger {
    display: none;
  }
  
  /* Mostra a lista e a formata na horizontal */
  #menu-list {
    display: flex;
    position: static; /* Remove o posicionamento absoluto */
    width: auto; /* Largura automática */
    background-color: transparent; /* Remove o fundo */
  }

  #menu-list li {
    border: none;
    padding: 0 1rem; /* Espaçamento horizontal */
  }
}
```

3) JavaScript: O script simplesmente adiciona um "evento" ao botão. Quando o botão é clicado, a função `toggleMenu` é executada, que adiciona a classe `.active` se ela não existir, ou a remove se ela já existir. Isso ativa ou desativa as regras de CSS que mostram/escondem o menu.

```js
// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function() {

  const btnMobile = document.getElementById('btn-mobile');
  const nav = document.getElementById('nav');

  function toggleMenu(event) {
    // Evita o comportamento padrão de borbulhamento do evento (útil em formulários)
    if (event.type === 'touchstart') event.preventDefault();
    
    // Adiciona ou remove a classe 'active' do elemento nav
    nav.classList.toggle('active');

    // Atualiza os atributos de acessibilidade
    const isActive = nav.classList.contains('active');
    btnMobile.setAttribute('aria-expanded', isActive);
    
    if (isActive) {
      btnMobile.setAttribute('aria-label', 'Fechar Menu');
    } else {
      btnMobile.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  // Adiciona o evento de clique ao botão
  btnMobile.addEventListener('click', toggleMenu);
  // Adiciona o evento de toque (para melhor responsividade em dispositivos móveis)
  btnMobile.addEventListener('touchstart', toggleMenu);

});
```
