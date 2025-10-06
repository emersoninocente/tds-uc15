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
## Outros modelos de "Menu"

### Principal
Estes são os menus que guiam o usuário pela estrutura principal do site.

1) **Barra de Navegação Horizontal (Navbar)** \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;É o padrão mais clássico e reconhecível. Uma barra no topo da página com os links principais lado a lado.
   - **Ideal para:** Sites com poucas seções principais (entre 4 a 7 itens). É direto e os usuários já estão totalmente familiarizados com ele.
   - **Pontos de Atenção:** Se torna problemático com muitos itens, pois quebra a linha ou sobrecarrega o visual. Em telas menores, ele precisa ser substituído por um menu hamburger ou similar.
   - **Variação Comum:** Navbar com Dropdowns, onde um item de menu revela um submenu ao passar o mouse ou clicar.

2) **Barra de Navegação Vertical (Sidebar)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Um menu fixo ou rolável na lateral da página (geralmente à esquerda).
   - **Ideal para:** Aplicações web (dashboards, painéis de controle), documentações ou sites com muitas categorias de mesmo nível hierárquico. Permite exibir uma longa lista de links sem poluir o topo da página.
   - **Pontos de Atenção:** Ocupa um espaço lateral valioso, o que pode reduzir a área de conteúdo principal. Em telas mobile, a sidebar geralmente se esconde e é acionada por um botão (semelhante ao hamburger), transformando-se em um menu off-canvas.

3) **Menu "Mega" (Mega Menu)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uma evolução do dropdown. Ao interagir com um item do menu horizontal, um painel gigante se abre, exibindo links em múltiplas colunas, muitas vezes com ícones e até imagens.
   - **Ideal para:** Grandes portais de e-commerce (ex: Amazon, Magazine Luiza) e sites de notícias com muitas subcategorias. Ajuda o usuário a visualizar toda a estrutura do site de uma vez.
   - **Pontos de Atenção:** Requer uma tela grande para ser eficaz e pode ser complexo de implementar de forma responsiva.

4) **Menu de Tela Cheia (Fullscreen Overlay)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Quando o usuário clica em um ícone (geralmente um hamburger ou a palavra "Menu"), a navegação toma conta da tela inteira, sobrepondo o conteúdo.
   - **Ideal para:** Sites com forte apelo visual e minimalista, como portfólios, agências de design ou sites de marcas de luxo. Cria uma experiência imersiva e focada.
   - **Pontos de Atenção:** É uma ação mais disruptiva para o usuário, pois esconde completamente o contexto da página em que ele estava.

### Secundários
Estes menus complementam a navegação principal ou oferecem opções específicas para o conteúdo da página.

1) **Menu de Abas (Tabbed Navigation)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usado para organizar conteúdos diferentes dentro da mesma página. O usuário clica em uma aba para alternar a visualização do conteúdo sem recarregar a página.
   - **Ideal para:** Páginas de produto (com abas para "Descrição", "Especificações", "Avaliações"), perfis de usuário, etc.
   - **Pontos de Atenção:** Não funciona bem para muitos itens. No mobile, as abas podem se transformar em um menu dropdown ou em uma lista rolável horizontalmente.

2) **Breadcrumbs (Navegação Estrutural)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;É um "rastro" de links que mostra ao usuário onde ele está na hierarquia do site e permite que ele volte facilmente para as páginas anteriores. \
Exemplo: *Home > Eletrônicos > Smartphones > Marca X*
   - **Ideal para:** Sites com estrutura profunda e muitas subpáginas, como e-commerce, fóruns e documentações. Essencial para a usabilidade em sites complexos.

3) **Menu "Kebab" (⋮) e "Meatballs" (…)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;São menus representados por três pontos (verticais ou horizontais) que revelam um pequeno conjunto de ações contextuais, não de navegação principal.
   - **Ideal para:** Listas de itens onde cada item tem suas próprias opções (Ex: em um card do Trello, um e-mail na caixa de entrada, uma postagem em rede social). As ações são "Editar", "Excluir", "Compartilhar", etc.

### Padrões Criativos e Específicos

1) **Navegação por Pontos (Dot Navigation)**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Uma série de pontos na lateral da tela, comum em sites de página única (one-pagers). Cada ponto representa uma seção da página e, ao ser clicado, rola a tela suavemente até aquela seção.
   - **Ideal para:** Landing pages, sites de apresentação de produtos, portfólios lineares.

2) **Menu Circular ou Radial**
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Os itens de menu são dispostos em um círculo ou arco ao redor de um ponto central. É ativado por um clique.
   - **Ideal para:** Sites que querem uma experiência altamente interativa e visual. Pode funcionar bem quando há poucas opções.
   - **Pontos de Atenção:** Pode ser um desafio para a usabilidade e acessibilidade se não for implementado com muito cuidado. Não é um padrão comum, então pode confundir alguns usuários.