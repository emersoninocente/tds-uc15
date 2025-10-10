# Encontro 09: Navegação Mobile

**Carga Horária:** 4 horas  
**Objetivo:** Dominar padrões de navegação mobile, incluindo menu hambúrguer, bottom navigation e outros padrões modernos.

---

## 1. Fundamentos de Navegação Mobile (45 min)

### 1.1 Desafios da Navegação Mobile

**Problemas comuns:**
- ❌ Espaço limitado na tela
- ❌ Menus muito pequenos (difícil tocar)
- ❌ Navegação profunda (muitos níveis)
- ❌ Links muito próximos
- ❌ Falta de indicação visual da localização

**Princípios de boa navegação mobile:**
- ✅ Touch targets ≥ 44x44px
- ✅ Priorizar conteúdo mais importante
- ✅ Hierarquia clara e simples
- ✅ Feedback visual de interação
- ✅ Acessível via teclado e screen readers

### 1.2 Padrões de Navegação Mobile

**1. Menu Hambúrguer (☰)**
- Mais comum
- Economiza espaço
- Pode esconder conteúdo importante

**2. Bottom Navigation**
- Fácil acesso com polegar
- Máximo 5 itens
- Popular em apps

**3. Tab Bar**
- Similar ao bottom navigation
- Usado em interfaces tipo aplicativo

**4. Menu Drawer (Gaveta)**
- Desliza da lateral
- Permite mais opções
- Comum em apps Android

**5. Priority+ Pattern**
- Mostra itens principais
- Esconde secundários em "mais"

### 1.3 Thumb Zone (Zona do Polegar)

```
┌─────────────────┐
│                 │ ← Difícil alcançar
│                 │
│     ╔═════╗     │
│     ║ ✓✓✓ ║     │ ← Fácil alcançar
│     ║ ✓✓✓ ║     │
│     ╚═════╝     │
└─────────────────┘
```

**Posicione elementos importantes:**
- Centro inferior: melhor acesso
- Cantos superiores: mais difícil
- Bottom navigation: ideal para ações principais

---

## 2. Menu Hambúrguer (60 min)

### 2.1 Estrutura HTML

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Menu Hambúrguer</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, -apple-system, sans-serif;
    }
    
    /* Header */
    .header {
      background: #333;
      color: white;
      padding: 1rem;
      position: relative;
      z-index: 1000;
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    /* Hamburger Button */
    .hamburger {
      background: none;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 5px;
      z-index: 1001;
    }
    
    .hamburger span {
      display: block;
      width: 25px;
      height: 3px;
      background: white;
      transition: all 0.3s;
      border-radius: 3px;
    }
    
    /* Animated hamburger to X */
    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(7px, 7px);
    }
    
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(7px, -7px);
    }
    
    /* Mobile Menu */
    .nav-menu {
      position: fixed;
      top: 0;
      left: -100%;
      width: 80%;
      max-width: 400px;
      height: 100vh;
      background: #fff;
      padding: 5rem 2rem 2rem;
      transition: left 0.3s;
      box-shadow: 2px 0 5px rgba(0,0,0,0.1);
      overflow-y: auto;
      z-index: 999;
    }
    
    .nav-menu.active {
      left: 0;
    }
    
    /* Overlay */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      z-index: 998;
    }
    
    .overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    /* Menu Items */
    .nav-list {
      list-style: none;
    }
    
    .nav-list li {
      border-bottom: 1px solid #eee;
    }
    
    .nav-list a {
      display: block;
      padding: 1rem 0;
      color: #333;
      text-decoration: none;
      font-size: 1.125rem;
      transition: color 0.3s;
    }
    
    .nav-list a:hover {
      color: #007bff;
    }
    
    /* Submenu */
    .nav-list .submenu {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s;
      padding-left: 1rem;
    }
    
    .nav-list .submenu.active {
      max-height: 500px;
    }
    
    .nav-list .submenu a {
      font-size: 1rem;
      padding: 0.75rem 0;
    }
    
    .has-submenu > a::after {
      content: ' ▼';
      font-size: 0.75rem;
      float: right;
    }
    
    /* Desktop */
    @media (min-width: 768px) {
      .hamburger {
        display: none;
      }
      
      .nav-menu {
        position: static;
        width: auto;
        height: auto;
        padding: 0;
        box-shadow: none;
        background: transparent;
        max-width: none;
      }
      
      .nav-list {
        display: flex;
        gap: 2rem;
      }
      
      .nav-list li {
        border: none;
      }
      
      .nav-list a {
        color: white;
        padding: 0;
      }
      
      .overlay {
        display: none;
      }
    }
    
    /* Content */
    main {
      padding: 2rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
  </style>
</head>
<body>
  <header class="header">
    <div class="header-content">
      <div class="logo">MeuSite</div>
      
      <button class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav class="nav-menu" id="navMenu">
        <ul class="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li class="has-submenu">
            <a href="#servicos" onclick="toggleSubmenu(event)">Serviços</a>
            <ul class="submenu">
              <li><a href="#web">Web Design</a></li>
              <li><a href="#app">Apps</a></li>
              <li><a href="#seo">SEO</a></li>
            </ul>
          </li>
          <li><a href="#portfolio">Portfólio</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <div class="overlay" id="overlay"></div>
  
  <main>
    <h1>Menu Hambúrguer Responsivo</h1>
    <p>Redimensione a janela para ver o menu se adaptar.</p>
    <p>No mobile, clique no ícone hambúrguer para abrir o menu lateral.</p>
  </main>
  
  <script>
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const overlay = document.getElementById('overlay');
    const body = document.body;
    
    function toggleMenu() {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
      overlay.classList.toggle('active');
      
      const isExpanded = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
      
      // Previne scroll do body quando menu aberto
      if (isExpanded) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    }
    
    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Fecha menu ao pressionar ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
    
    // Submenu toggle
    function toggleSubmenu(e) {
      if (window.innerWidth < 768) {
        e.preventDefault();
        const submenu = e.target.nextElementSibling;
        submenu.classList.toggle('active');
      }
    }
  </script>
</body>
</html>
```

### 2.2 Menu Hambúrguer Animado

**Variações de animação:**

```css
/* Variação 1: Setas */
.hamburger-arrow span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger-arrow span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Variação 2: Spin */
.hamburger-spin.active {
  transform: rotate(180deg);
}

.hamburger-spin.active span:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

/* Variação 3: Elastic */
.hamburger-elastic span {
  transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

## 3. Bottom Navigation (60 min)

### 3.1 Implementação Básica

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bottom Navigation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      padding-bottom: 70px; /* Espaço para bottom nav */
    }
    
    /* Content */
    .page {
      padding: 2rem 1rem;
      min-height: 100vh;
    }
    
    /* Bottom Navigation */
    .bottom-nav {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      border-top: 1px solid #e0e0e0;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
      z-index: 1000;
    }
    
    .bottom-nav-list {
      display: flex;
      justify-content: space-around;
      list-style: none;
      padding: 0.5rem 0;
    }
    
    .bottom-nav-item {
      flex: 1;
      max-width: 100px;
    }
    
    .bottom-nav-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.25rem;
      padding: 0.5rem;
      color: #666;
      text-decoration: none;
      font-size: 0.75rem;
      transition: all 0.3s;
      min-height: 56px; /* Touch target */
      justify-content: center;
    }
    
    .bottom-nav-icon {
      font-size: 1.5rem;
      transition: transform 0.3s;
    }
    
    .bottom-nav-link.active {
      color: #007bff;
    }
    
    .bottom-nav-link.active .bottom-nav-icon {
      transform: scale(1.1);
    }
    
    /* Hover effect (desktop) */
    @media (hover: hover) {
      .bottom-nav-link:hover {
        color: #007bff;
        background: rgba(0, 123, 255, 0.05);
      }
    }
    
    /* Desktop - esconde bottom nav */
    @media (min-width: 768px) {
      body {
        padding-bottom: 0;
      }
      
      .bottom-nav {
        display: none;
      }
    }
  </style>
</head>
<body>
  <div class="page" id="content">
    <h1>Bottom Navigation</h1>
    <p>Navegação inferior, ideal para apps mobile.</p>
    <p>Clique nos ícones abaixo para navegar.</p>
    
    <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 8px;">
      <h2>Conteúdo da Página</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
  
  <nav class="bottom-nav">
    <ul class="bottom-nav-list">
      <li class="bottom-nav-item">
        <a href="#home" class="bottom-nav-link active" data-page="home">
          <span class="bottom-nav-icon">🏠</span>
          <span>Home</span>
        </a>
      </li>
      
      <li class="bottom-nav-item">
        <a href="#search" class="bottom-nav-link" data-page="search">
          <span class="bottom-nav-icon">🔍</span>
          <span>Buscar</span>
        </a>
      </li>
      
      <li class="bottom-nav-item">
        <a href="#favorites" class="bottom-nav-link" data-page="favorites">
          <span class="bottom-nav-icon">❤️</span>
          <span>Favoritos</span>
        </a>
      </li>
      
      <li class="bottom-nav-item">
        <a href="#notifications" class="bottom-nav-link" data-page="notifications">
          <span class="bottom-nav-icon">🔔</span>
          <span>Avisos</span>
        </a>
      </li>
      
      <li class="bottom-nav-item">
        <a href="#profile" class="bottom-nav-link" data-page="profile">
          <span class="bottom-nav-icon">👤</span>
          <span>Perfil</span>
        </a>
      </li>
    </ul>
  </nav>
  
  <script>
    const navLinks = document.querySelectorAll('.bottom-nav-link');
    const content = document.getElementById('content');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active de todos
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Adiciona active no clicado
        this.classList.add('active');
        
        // Atualiza conteúdo
        const page = this.dataset.page;
        content.innerHTML = `
          <h1>${page.charAt(0).toUpperCase() + page.slice(1)}</h1>
          <p>Você está na página: ${page}</p>
        `;
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  </script>
</body>
</html>
```

### 3.2 Bottom Navigation com Badge

```html
<style>
  .bottom-nav-item {
    position: relative;
  }
  
  .badge {
    position: absolute;
    top: 0.5rem;
    right: 50%;
    transform: translateX(1rem);
    background: #dc3545;
    color: white;
    font-size: 0.65rem;
    font-weight: bold;
    padding: 0.125rem 0.375rem;
    border-radius: 10px;
    min-width: 18px;
    text-align: center;
  }
</style>

<li class="bottom-nav-item">
  <a href="#notifications" class="bottom-nav-link">
    <span class="bottom-nav-icon">🔔</span>
    <span>Avisos</span>
    <span class="badge">5</span>
  </a>
</li>
```

---

## 4. Sticky Header (45 min)

### 4.1 Header Fixo ao Scroll

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sticky Header</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
    }
    
    /* Header */
    .header {
      background: white;
      padding: 1rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
      transition: all 0.3s;
    }
    
    .header.scrolled {
      padding: 0.5rem 1rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }
    
    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: #007bff;
      transition: font-size 0.3s;
    }
    
    .header.scrolled .logo {
      font-size: 1.25rem;
    }
    
    .nav {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    
    .nav a {
      color: #333;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;
    }
    
    .nav a:hover {
      color: #007bff;
    }
    
    /* Hero */
    .hero {
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
    .hero h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    
    /* Content */
    section {
      padding: 4rem 1rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    section h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    section p {
      line-height: 1.6;
      margin-bottom: 1rem;
    }
  </style>
</head>
<body>
  <header class="header" id="header">
    <div class="header-content">
      <div class="logo">MeuSite</div>
      <nav>
        <ul class="nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>
  
  <div class="hero">
    <div>
      <h1>Sticky Header</h1>
      <p>Role a página para ver o efeito</p>
    </div>
  </div>
  
  <section id="sobre">
    <h2>Sobre</h2>
    <p>O header fica fixo no topo ao rolar a página e se adapta visualmente.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </section>
  
  <section id="servicos">
    <h2>Serviços</h2>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </section>
  
  <section id="contato">
    <h2>Contato</h2>
    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </section>
  
  <script>
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  </script>
</body>
</html>
```

### 4.2 Hide on Scroll (Esconde ao rolar para baixo)

```javascript
let lastScroll = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
  const currentScroll = window.scrollY;
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    header.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
```

```css
.header {
  position: fixed;
  top: 0;
  width: 100%;
  transition: transform 0.3s;
}
```

---

## 5. Off-Canvas Menu (45 min)

### 5.1 Menu Lateral Deslizante

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Off-Canvas Menu</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      overflow-x: hidden;
    }
    
    /* Page Wrapper */
    .page-wrapper {
      position: relative;
      min-height: 100vh;
      transition: transform 0.3s;
    }
    
    .page-wrapper.menu-open {
      transform: translateX(280px);
    }
    
    /* Header */
    .header {
      background: #333;
      color: white;
      padding: 1rem;
    }
    
    .menu-toggle {
      background: none;
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
    }
    
    /* Off-Canvas Menu */
    .off-canvas-menu {
      position: fixed;
      left: -280px;
      top: 0;
      width: 280px;
      height: 100vh;
      background: #2c3e50;
      color: white;
      padding: 2rem;
      transition: left 0.3s;
      z-index: 1001;
      overflow-y: auto;
    }
    
    .off-canvas-menu.active {
      left: 0;
    }
    
    .close-menu {
      background: none;
      border: none;
      color: white;
      font-size: 2rem;
      cursor: pointer;
      float: right;
      padding: 0;
      line-height: 1;
    }
    
    .menu-list {
      list-style: none;
      margin-top: 3rem;
    }
    
    .menu-list li {
      margin-bottom: 1rem;
    }
    
    .menu-list a {
      color: white;
      text-decoration: none;
      font-size: 1.125rem;
      display: block;
      padding: 0.75rem;
      border-radius: 4px;
      transition: background 0.3s;
    }
    
    .menu-list a:hover {
      background: rgba(255,255,255,0.1);
    }
    
    /* Overlay */
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      z-index: 1000;
    }
    
    .overlay.active {
      opacity: 1;
      visibility: visible;
    }
    
    /* Content */
    .content {
      padding: 2rem 1rem;
    }
  </style>
</head>
<body>
  <div class="page-wrapper" id="pageWrapper">
    <header class="header">
      <button class="menu-toggle" id="menuToggle" aria-label="Menu">
        ☰
      </button>
    </header>
    
    <main class="content">
      <h1>Off-Canvas Menu</h1>
      <p>Clique no ícone de menu para abrir o menu lateral.</p>
      <p>A página inteira desliza para a direita revelando o menu.</p>
    </main>
  </div>
  
  <nav class="off-canvas-menu" id="offCanvasMenu">
    <button class="close-menu" id="closeMenu" aria-label="Fechar">×</button>
    
    <ul class="menu-list">
      <li><a href="#home">Home</a></li>
      <li><a href="#sobre">Sobre</a></li>
      <li><a href="#servicos">Serviços</a></li>
      <li><a href="#portfolio">Portfólio</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contato">Contato</a></li>
    </ul>
  </nav>
  
  <div class="overlay" id="overlay"></div>
  
  <script>
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const offCanvasMenu = document.getElementById('offCanvasMenu');
    const overlay = document.getElementById('overlay');
    const pageWrapper = document.getElementById('pageWrapper');
    
    function openMenu() {
      offCanvasMenu.classList.add('active');
      overlay.classList.add('active');
      pageWrapper.classList.add('menu-open');
      document.body.style.overflow = 'hidden';
    }
    
    function closeMenuFunc() {
      offCanvasMenu.classList.remove('active');
      overlay.classList.remove('active');
      pageWrapper.classList.remove('menu-open');
      document.body.style.overflow = '';
    }
    
    menuToggle.addEventListener('click', openMenu);
    closeMenu.addEventListener('click', closeMenuFunc);
    overlay.addEventListener('click', closeMenuFunc);
    
    // Fecha com ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeMenuFunc();
      }
    });
  </script>
</body>
</html>
```

---

## 6. Breadcrumbs (30 min)

### 6.1 Breadcrumbs Responsivos

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Breadcrumbs</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      padding: 2rem 1rem;
    }
    
    .breadcrumb {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      padding: 1rem;
      background: #f5f5f5;
      border-radius: 4px;
      list-style: none;
      overflow-x: auto;
    }
    
    .breadcrumb-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .breadcrumb-item a {
      color: #007bff;
      text-decoration: none;
      white-space: nowrap;
    }
    
    .breadcrumb-item a:hover {
      text-decoration: underline;
    }
    
    .breadcrumb-item:not(:last-child)::after {
      content: '/';
      color: #666;
    }
    
    .breadcrumb-item:last-child {
      color: #666;
    }
    
    /* Mobile: apenas mostra último nível */
    @media (max-width: 576px) {
      .breadcrumb-item:not(:first-child):not(:last-child) {
        display: none;
      }
      
      .breadcrumb-item:first-child::after {
        content: '...';
      }
    }
  </style>
</head>
<body>
  <h1>Breadcrumbs Responsivos</h1>
  
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#home">Home</a></li>
      <li class="breadcrumb-item"><a href="#categoria">Categoria</a></li>
      <li class="breadcrumb-item"><a href="#subcategoria">Subcategoria</a></li>
      <li class="breadcrumb-item">Página Atual</li>
    </ol>
  </nav>
  
  <p style="margin-top: 2rem;">
    No mobile, apenas o primeiro e último item são mostrados com "..." no meio.
    No desktop, todos os níveis são exibidos.
  </p>
</body>
</html>
```

---

## 7. Tab Navigation (30 min)

### 7.1 Tabs Horizontais com Scroll

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tab Navigation</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: system-ui, sans-serif;
      padding: 2rem 1rem;
    }
    
    /* Tabs Container */
    .tabs {
      border-bottom: 2px solid #e0e0e0;
      margin-bottom: 2rem;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }
    
    .tabs::-webkit-scrollbar {
      height: 4px;
    }
    
    .tabs::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }
    
    /* Tab List */
    .tab-list {
      display: flex;
      gap: 1rem;
      list-style: none;
      min-width: min-content;
    }
    
    /* Tab Button */
    .tab-button {
      padding: 1rem 1.5rem;
      background: none;
      border: none;
      color: #666;
      font-size: 1rem;
      font-weight: 500;
      cursor: pointer;
      white-space: nowrap;
      position: relative;
      transition: color 0.3s;
    }
    
    .tab-button::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: #007bff;
      transform: scaleX(0);
      transition: transform 0.3s;
    }
    
    .tab-button.active {
      color: #007bff;
    }
    
    .tab-button.active::after {
      transform: scaleX(1);
    }
    
    .tab-button:hover {
      color: #007bff;
    }
    
    /* Tab Panels */
    .tab-panel {
      display: none;
      padding: 1.5rem;
      background: #f9f9f9;
      border-radius: 4px;
    }
    
    .tab-panel.active {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Tab Navigation</h1>
  
  <div class="tabs-container">
    <div class="tabs">
      <ul class="tab-list" role="tablist">
        <li role="presentation">
          <button 
            class="tab-button active" 
            role="tab"
            aria-selected="true"
            data-tab="tab1"
          >
            Visão Geral
          </button>
        </li>
        <li role="presentation">
          <button 
            class="tab-button" 
            role="tab"
            aria-selected="false"
            data-tab="tab2"
          >
            Especificações
          </button>
        </li>
        <li role="presentation">
          <button 
            class="tab-button" 
            role="tab"
            aria-selected="false"
            data-tab="tab3"
          >
            Avaliações
          </button>
        </li>
        <li role="presentation">
          <button 
            class="tab-button" 
            role="tab"
            aria-selected="false"
            data-tab="tab4"
          >
            Perguntas
          </button>
        </li>
        <li role="presentation">
          <button 
            class="tab-button" 
            role="tab"
            aria-selected="false"
            data-tab="tab5"
          >
            Garantia
          </button>
        </li>
      </ul>
    </div>
    
    <div class="tab-panel active" id="tab1" role="tabpanel">
      <h2>Visão Geral</h2>
      <p>Conteúdo da aba de visão geral...</p>
    </div>
    
    <div class="tab-panel" id="tab2" role="tabpanel">
      <h2>Especificações</h2>
      <p>Conteúdo das especificações técnicas...</p>
    </div>
    
    <div class="tab-panel" id="tab3" role="tabpanel">
      <h2>Avaliações</h2>
      <p>Avaliações de clientes...</p>
    </div>
    
    <div class="tab-panel" id="tab4" role="tabpanel">
      <h2>Perguntas</h2>
      <p>Perguntas frequentes...</p>
    </div>
    
    <div class="tab-panel" id="tab5" role="tabpanel">
      <h2>Garantia</h2>
      <p>Informações sobre garantia...</p>
    </div>
  </div>
  
  <script>
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.dataset.tab;
        
        // Remove active de todos
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
        });
        
        tabPanels.forEach(panel => {
          panel.classList.remove('active');
        });
        
        // Ativa o clicado
        this.classList.add('active');
        this.setAttribute('aria-selected', 'true');
        document.getElementById(targetTab).classList.add('active');
        
        // Scroll para a tab ativa (mobile)
        this.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'nearest', 
          inline: 'center' 
        });
      });
    });
  </script>
</body>
</html>
```

---

## 8. Exercícios Práticos (30 min)

### Exercício 1: Menu Completo Responsivo

**Objetivo:** Criar sistema de navegação completo que funcione em todos os dispositivos.

**Requisitos:**
- Mobile: menu hambúrguer com submenu
- Desktop: menu horizontal com dropdown
- Sticky header
- Indicação visual da página atual
- Acessível (ARIA labels, navegação por teclado)
- Animações suaves

### Exercício 2: App-like Navigation

**Objetivo:** Criar navegação estilo aplicativo mobile.

**Requisitos:**
- Bottom navigation (5 itens)
- Badges em alguns itens
- Transições entre páginas
- Indicação visual do item ativo
- Funcional em todas as telas

---

## 9. Acessibilidade em Navegação (20 min)

### 9.1 ARIA Attributes

```html
<!-- Menu com ARIA -->
<nav role="navigation" aria-label="Menu principal">
  <button 
    aria-label="Abrir menu" 
    aria-expanded="false"
    aria-controls="menu"
  >
    Menu
  </button>
  
  <ul id="menu" role="menu">
    <li role="menuitem">
      <a href="#home">Home</a>
    </li>
  </ul>
</nav>
```

### 9.2 Navegação por Teclado

```javascript
// Suporte para navegação com Tab
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item, index) => {
  item.addEventListener('keydown', function(e) {
    // Seta para baixo
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = menuItems[index + 1] || menuItems[0];
      next.focus();
    }
    
    // Seta para cima
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prev = menuItems[index - 1] || menuItems[menuItems.length - 1];
      prev.focus();
    }
    
    // Enter ou Space
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
});
```

### 9.3 Skip Links

```html
<a href="#main-content" class="skip-link">
  Pular para o conteúdo principal
</a>

<style>
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 9999;
  }
  
  .skip-link:focus {
    top: 0;
  }
</style>
```

---

## 10. Padrões Avançados (20 min)

### 10.1 Mega Menu

```html
<style>
  .mega-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    display: none;
    padding: 2rem;
  }
  
  .menu-item:hover .mega-menu {
    display: block;
  }
  
  .mega-menu-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 768px) {
    .mega-menu-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

### 10.2 Priority+ Menu

```javascript
// Esconde itens que não cabem e coloca em "Mais"
function priorityMenu() {
  const nav = document.querySelector('.nav');
  const navItems = Array.from(nav.querySelectorAll('.nav-item'));
  const moreMenu = document.querySelector('.more-menu');
  
  const navWidth = nav.offsetWidth;
  let itemsWidth = 0;
  
  navItems.forEach(item => {
    itemsWidth += item.offsetWidth;
    
    if (itemsWidth > navWidth - 100) {
      // Move para "Mais"
      moreMenu.appendChild(item);
    }
  });
}

window.addEventListener('resize', priorityMenu);
priorityMenu();
```

---

## Material de Apoio

### Leitura Obrigatória
- Nielsen Norman Group - "Mobile Navigation Patterns"
- Smashing Magazine - "Navigation Design Patterns"
- Web.dev - "Accessible Navigation"

### Leitura Complementar
- "Mobile Design Pattern Gallery" - Theresa Neil
- "Designing Mobile Interfaces" - Steven Hoober
- Material Design - "Navigation Components"

### Padrões de Design
- **iOS Human Interface Guidelines:** https://developer.apple.com/design/human-interface-guidelines/ios/bars/navigation-bars/
- **Material Design:** https://material.io/components/navigation-drawer
- **Bootstrap Navigation:** https://getbootstrap.com/docs/5.0/components/navbar/

### Ferramentas
- **Hamburgers.css:** https://jonsuh.com/hamburgers/ (animações de hambúrguer)
- **Accessible Mega Menu:** https://adobe-accessibility.github.io/Accessible-Mega-Menu/

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. Menu hambúrguer é o padrão mais comum para mobile
2. Bottom navigation ideal para 3-5 ações principais
3. Sticky header melhora navegação em páginas longas
4. Touch targets mínimo 44x44px
5. Sempre fornecer feedback visual de interação
6. Acessibilidade é crucial (ARIA, teclado)
7. Diferentes padrões para diferentes contextos

**Próxima aula:** Performance Mobile - otimização e Core Web Vitals.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Implementar menu hambúrguer funcional
- ✅ Criar bottom navigation
- ✅ Fazer sticky header com animações
- ✅ Desenvolver off-canvas menu
- ✅ Implementar breadcrumbs responsivos
- ✅ Criar tab navigation com scroll horizontal
- ✅ Adicionar ARIA attributes para acessibilidade
- ✅ Garantir navegação por teclado
- ✅ Escolher padrão apropriado para cada caso
- ✅ Implementar feedback visual em interações