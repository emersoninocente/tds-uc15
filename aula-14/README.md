# Aula 14: Customização de Temas I

**Carga Horária:** 4 horas  
**Objetivo:** Dominar customização de temas WordPress através de child themes, CSS Mobile First e functions.php para criar sites responsivos e personalizados.

---

## 1. Introdução: Por que Child Themes? (20 min)

### 1.1 O Problema sem Child Theme

**Cenário comum (ERRADO):**
```
1. Você customiza o tema diretamente
2. Adiciona CSS, modifica templates PHP
3. Tema recebe atualização de segurança
4. 💥 Todas suas customizações são PERDIDAS!
```

**A Solução: Child Theme**
```
Parent Theme (Astra)
    ↓ herda tudo
Child Theme (Astra Child)
    ↓ adiciona suas customizações
✅ Atualizações preservam suas modificações
```

### 1.2 Vantagens do Child Theme

✅ **Preserva customizações** nas atualizações do parent  
✅ **Desenvolvimento seguro** (não mexe no original)  
✅ **Organização** (tudo centralizado)  
✅ **Facilita debug** (pode desativar e voltar ao original)  
✅ **Boa prática profissional**  
✅ **Mobile First** desde o início  

### 1.3 Estrutura Básica

```
astra-child/
├── style.css          (OBRIGATÓRIO - estilos e info do tema)
├── functions.php      (OBRIGATÓRIO - enqueue e funções)
├── screenshot.png     (opcional - 1200x900px)
└── /assets/          (opcional - seus arquivos)
    ├── /css/
    ├── /js/
    └── /images/
```

---

## 2. Criando seu Primeiro Child Theme (40 min)

### 2.1 Método Manual (Recomendado para aprendizado)

**ROTEIRO PASSO A PASSO:**

```
═══════════════════════════════════════════════════════
PASSO 1: CRIAR ESTRUTURA DE PASTAS
═══════════════════════════════════════════════════════

1. Acessar via FTP, cPanel ou Local:
   Navegar até: /wp-content/themes/

2. Criar nova pasta:
   Nome: astra-child
   (sem espaços, lowercase)

3. Verificar estrutura:
   /wp-content/themes/astra/        ← Parent theme
   /wp-content/themes/astra-child/  ← Seu child theme ✨
```

```
═══════════════════════════════════════════════════════
PASSO 2: CRIAR STYLE.CSS (Arquivo de Estilos)
═══════════════════════════════════════════════════════

1. Dentro de /astra-child/, criar arquivo: style.css

2. Adicionar header obrigatório:

/*
Theme Name:   Astra Child Mobile First
Theme URI:    https://seusite.com/
Description:  Child theme do Astra focado em Mobile First
Author:       Seu Nome
Author URI:   https://seusite.com/
Template:     astra
Version:      1.0.0
Text Domain:  astra-child
*/

/* ===================================================================
   MOBILE FIRST CSS
   Começamos SEMPRE pelo mobile e expandimos para telas maiores
   =================================================================== */

/* ===== BASE MOBILE (< 768px) ===== */

/* Touch targets mínimos */
a, button {
  min-height: 44px;
  min-width: 44px;
}

/* Texto legível */
body {
  font-size: 16px; /* Mínimo para não dar zoom no iOS */
  line-height: 1.6;
}

/* Imagens responsivas */
img {
  max-width: 100%;
  height: auto;
}

/* ===== TABLET (768px+) ===== */
@media (min-width: 768px) {
  body {
    font-size: 18px;
  }
}

/* ===== DESKTOP (1024px+) ===== */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
  }
}

⚠️ IMPORTANTE: 
- "Template: astra" deve ser exatamente o nome da pasta do parent theme
- Sem este header, o child theme NÃO aparecerá
```

```
═══════════════════════════════════════════════════════
PASSO 3: CRIAR FUNCTIONS.PHP (Arquivo de Funções)
═══════════════════════════════════════════════════════

1. Criar arquivo: functions.php

2. Adicionar código base:

<?php
/**
 * Astra Child Theme - Mobile First
 * 
 * @package Astra Child
 */

// Security: Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Enqueue Parent and Child Theme Styles
 * CRÍTICO: Sem isso os estilos não carregam!
 */
function astra_child_enqueue_styles() {
    
    // 1. Carregar CSS do parent theme
    wp_enqueue_style( 
        'astra-parent-style', 
        get_template_directory_uri() . '/style.css'
    );
    
    // 2. Carregar CSS do child theme DEPOIS
    wp_enqueue_style( 
        'astra-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'astra-parent-style' ), // Depende do parent
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'astra_child_enqueue_styles', 15 );

/**
 * Adicionar meta tag viewport para mobile
 */
function astra_child_viewport_meta() {
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
}
add_action( 'wp_head', 'astra_child_viewport_meta', 1 );

⚠️ NUNCA fechar PHP com ?> no final (não é necessário)
```

```
═══════════════════════════════════════════════════════
PASSO 4: CRIAR SCREENSHOT (Opcional)
═══════════════════════════════════════════════════════

1. Criar/escolher imagem 1200x900px
2. Salvar como: screenshot.png
3. Colocar na raiz de /astra-child/

Isso aparecerá como preview do tema no WordPress
```

```
═══════════════════════════════════════════════════════
PASSO 5: ATIVAR CHILD THEME
═══════════════════════════════════════════════════════

1. WordPress Dashboard → Appearance → Themes

2. Você verá "Astra Child Mobile First" listado

3. Hover e clicar em "Activate"

4. ✅ Sucesso! Verificar:
   - Site continua funcionando normalmente
   - Estilos do Astra estão presentes
   - Pronto para adicionar customizações

⚠️ CRÍTICO:
- Parent theme (Astra) DEVE permanecer instalado
- NUNCA deletar parent theme
- SEMPRE ativar o CHILD, não o parent
```

### 2.2 Método com Plugin (Mais Rápido)

**ROTEIRO ALTERNATIVO:**

```
═══════════════════════════════════════════════════════
USANDO CHILD THEME CONFIGURATOR
═══════════════════════════════════════════════════════

1. Plugins → Add New
2. Buscar: "Child Theme Configurator"
3. Install + Activate

4. Tools → Child Themes

5. CREATE a new Child Theme:
   - Parent Theme: Astra
   - Click "Analyze"

6. Configurar:
   Nome: Astra Child Mobile First
   Slug: astra-child
   
7. Opções:
   ☑ Copy Menus
   ☑ Copy Widgets
   ☑ Copy Customizer Settings

8. Create New Child Theme

9. Appearance → Themes → Activate "Astra Child Mobile First"

✅ Pronto em menos de 2 minutos!
```

---

## 3. CSS Mobile First no Child Theme (50 min)

### 3.1 Princípios Mobile First

**❌ ERRADO (Desktop First):**
```css
/* Desktop base */
.header {
  padding: 60px;
}

/* Reduz para mobile */
@media (max-width: 768px) {
  .header {
    padding: 20px;
  }
}
```

**✅ CORRETO (Mobile First):**
```css
/* Mobile base */
.header {
  padding: 20px;
}

/* Expande para desktop */
@media (min-width: 768px) {
  .header {
    padding: 60px;
  }
}
```

### 3.2 Template CSS Completo Mobile First

**Adicionar ao style.css do child theme:**

```css
/* ===================================================================
   ASTRA CHILD - MOBILE FIRST STYLESHEET
   =================================================================== */

/* ===================================================================
   1. VARIÁVEIS CSS
   =================================================================== */
:root {
  /* Cores */
  --primary: #667eea;
  --secondary: #764ba2;
  --text: #333333;
  --text-light: #666666;
  --bg: #ffffff;
  --bg-alt: #f8f9fa;
  
  /* Espaçamentos Mobile */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  
  /* Breakpoints (referência) */
  /* Mobile: < 768px */
  /* Tablet: 768px - 1024px */
  /* Desktop: 1024px+ */
}

/* ===================================================================
   2. RESET E BASE MOBILE
   =================================================================== */

/* Remove tap highlight */
* {
  -webkit-tap-highlight-color: transparent;
}

html {
  scroll-behavior: smooth;
}

body {
  font-size: 16px; /* MÍNIMO - não dá zoom no iOS */
  line-height: 1.6;
  color: var(--text);
}

/* Headings Mobile */
h1 { font-size: 2rem; }    /* 32px */
h2 { font-size: 1.75rem; } /* 28px */
h3 { font-size: 1.5rem; }  /* 24px */
h4 { font-size: 1.25rem; } /* 20px */

/* Touch Targets - CRÍTICO! */
a, button, .btn {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Imagens Responsivas */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* ===================================================================
   3. HEADER MOBILE FIRST
   =================================================================== */

.site-header {
  padding: 1rem;
  position: sticky;
  top: 0;
  background: var(--bg);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

.site-logo {
  max-width: 120px;
}

/* Menu Mobile - Escondido por padrão */
.main-navigation {
  display: none;
}

.main-navigation.toggled {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg);
  padding: var(--space-lg);
  overflow-y: auto;
}

.main-navigation a {
  display: block;
  padding: var(--space-sm);
  font-size: 1.125rem;
  min-height: 48px; /* Touch target generoso */
}

/* Botão Menu Toggle */
.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  width: 44px;
  height: 44px;
}

/* ===================================================================
   4. BOTÕES MOBILE FIRST
   =================================================================== */

.wp-block-button__link,
.btn {
  width: 100%; /* Full width no mobile */
  padding: 1rem 1.5rem;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  min-height: 48px;
  cursor: pointer;
  transition: all 0.3s;
}

/* ===================================================================
   5. FORMULÁRIOS MOBILE FIRST
   =================================================================== */

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"],
textarea,
select {
  width: 100%;
  padding: 0.875rem;
  font-size: 16px; /* MÍNIMO - evita zoom iOS */
  border: 2px solid #ddd;
  border-radius: 4px;
  margin-bottom: var(--space-sm);
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

/* ===================================================================
   6. CONTEÚDO MOBILE
   =================================================================== */

.site-content {
  padding: var(--space-md) var(--space-sm);
}

.entry-content p {
  margin-bottom: var(--space-sm);
}

/* ===================================================================
   7. FOOTER MOBILE
   =================================================================== */

.site-footer {
  background: var(--text);
  color: white;
  padding: var(--space-lg) var(--space-sm);
  text-align: center;
}

/* ===================================================================
   8. TABLET (768px+) - EXPANDIR
   =================================================================== */
@media (min-width: 768px) {
  
  /* Typography maior */
  body { font-size: 18px; }
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  
  /* Header */
  .site-header {
    padding: 1.5rem 2rem;
  }
  
  .site-logo {
    max-width: 160px;
  }
  
  /* Menu Horizontal */
  .menu-toggle {
    display: none;
  }
  
  .main-navigation {
    display: block !important;
    position: static;
    padding: 0;
  }
  
  .main-navigation ul {
    display: flex;
    gap: var(--space-md);
  }
  
  .main-navigation a {
    padding: 0;
    font-size: 1rem;
    min-height: auto;
  }
  
  /* Botões não precisam full width */
  .btn {
    width: auto;
  }
  
  /* Content */
  .site-content {
    padding: var(--space-xl) var(--space-lg);
  }
}

/* ===================================================================
   9. DESKTOP (1024px+) - OTIMIZAR
   =================================================================== */
@media (min-width: 1024px) {
  
  /* Typography ainda maior */
  body { font-size: 20px; }
  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
  
  /* Header */
  .site-header {
    padding: 2rem 3rem;
  }
  
  .site-logo {
    max-width: 200px;
  }
  
  /* Content com max-width */
  .site-content {
    padding: var(--space-xl);
    max-width: 1200px;
    margin: 0 auto;
  }
  
  /* Hover effects (apenas desktop) */
  @media (hover: hover) {
    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
  }
}

/* ===================================================================
   10. UTILITÁRIOS
   =================================================================== */

/* Esconder por dispositivo */
.hide-mobile { display: none !important; }

@media (min-width: 768px) {
  .hide-mobile { display: block !important; }
  .hide-tablet { display: none !important; }
}

@media (min-width: 1024px) {
  .hide-desktop { display: none !important; }
}
```

---

## 4. Functions.php - Funcionalidades Mobile (45 min)

### 4.1 Estrutura Básica do Functions.php

**Template organizado com funções mobile-first:**

```php
<?php
/**
 * Astra Child Theme Functions
 * Mobile First Approach
 * 
 * @package Astra Child
 */

// Security
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/* ===================================================================
   1. ENQUEUE STYLES E SCRIPTS
   =================================================================== */

function astra_child_enqueue_styles() {
    // Parent style
    wp_enqueue_style( 
        'astra-parent-style', 
        get_template_directory_uri() . '/style.css'
    );
    
    // Child style
    wp_enqueue_style( 
        'astra-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'astra-parent-style' ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'astra_child_enqueue_styles', 15 );

/* ===================================================================
   2. SETUP MOBILE FIRST
   =================================================================== */

function astra_child_setup() {
    // Tamanhos de imagem otimizados por dispositivo
    add_image_size( 'mobile-thumb', 600, 400, true );
    add_image_size( 'tablet-thumb', 900, 600, true );
    add_image_size( 'desktop-thumb', 1200, 800, true );
}
add_action( 'after_setup_theme', 'astra_child_setup' );

/* ===================================================================
   3. META TAGS MOBILE
   =================================================================== */

function astra_child_mobile_meta() {
    ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#667eea">
    <?php
}
add_action( 'wp_head', 'astra_child_mobile_meta', 1 );

/* ===================================================================
   4. DETECÇÃO DE DISPOSITIVO
   =================================================================== */

// Adicionar classe ao body
function astra_child_body_class( $classes ) {
    if ( wp_is_mobile() ) {
        $classes[] = 'is-mobile';
    } else {
        $classes[] = 'is-desktop';
    }
    return $classes;
}
add_filter( 'body_class', 'astra_child_body_class' );

/* ===================================================================
   5. OTIMIZAÇÕES MOBILE
   =================================================================== */

// Excerpt mais curto no mobile
function astra_child_excerpt_length( $length ) {
    return wp_is_mobile() ? 20 : 40;
}
add_filter( 'excerpt_length', 'astra_child_excerpt_length' );

// Lazy loading de imagens
function astra_child_lazy_load( $attr ) {
    $attr['loading'] = 'lazy';
    return $attr;
}
add_filter( 'wp_get_attachment_image_attributes', 'astra_child_lazy_load' );

/* ===================================================================
   6. NAVEGAÇÃO MOBILE
   =================================================================== */

// Registrar menu mobile separado
function astra_child_register_menus() {
    register_nav_menu( 'mobile-menu', 'Menu Mobile' );
}
add_action( 'init', 'astra_child_register_menus' );

/* ===================================================================
   7. PERFORMANCE
   =================================================================== */

// Remover emojis (melhora performance)
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'wp_print_styles', 'print_emoji_styles' );

// Defer JavaScript
function astra_child_defer_scripts( $tag, $handle ) {
    if ( 'jquery' === $handle ) {
        return $tag; // Não defer jQuery
    }
    return str_replace( ' src', ' defer src', $tag );
}
add_filter( 'script_loader_tag', 'astra_child_defer_scripts', 10, 2 );
```

---

## 5. Exercício Prático 1: Child Theme Completo (Guiado) (45 min)

### Objetivo
Criar child theme funcional do Astra com customizações mobile-first.

### ROTEIRO COMPLETO

```
═══════════════════════════════════════════════════════
PARTE 1: CRIAR CHILD THEME BASE (10 min)
═══════════════════════════════════════════════════════

□ Criar pasta: astra-child em /wp-content/themes/

□ Criar style.css com header completo

□ Criar functions.php com enqueue básico

□ Criar screenshot.png (opcional)

□ Ativar em Appearance → Themes

□ Verificar se site funciona normalmente

✅ CHECKPOINT: Site deve estar igual ao antes
```

```
═══════════════════════════════════════════════════════
PARTE 2: CUSTOMIZAR CORES (MOBILE FIRST) (10 min)
═══════════════════════════════════════════════════════

Adicionar ao style.css:

/* Esquema de cores mobile first */
:root {
  --primary: #667eea;
  --secondary: #764ba2;
}

/* Links */
a {
  color: var(--primary);
}

/* Botões Mobile - Full Width */
.wp-block-button__link {
  width: 100%;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 1rem;
  min-height: 48px;
  border-radius: 50px;
}

/* Tablet+ - Auto Width */
@media (min-width: 768px) {
  .wp-block-button__link {
    width: auto;
    padding: 1rem 2rem;
  }
}

✅ TESTAR:
□ Botões full width no mobile
□ Botões auto width no desktop
□ Cores aplicadas corretamente
```

```
═══════════════════════════════════════════════════════
PARTE 3: HEADER MOBILE CUSTOMIZADO (15 min)
═══════════════════════════════════════════════════════

Adicionar ao style.css:

/* Header Mobile First */
.site-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  position: sticky;
  top: 0;
}

.site-branding .custom-logo {
  max-width: 120px;
}

/* Tablet */
@media (min-width: 768px) {
  .site-header {
    padding: 1.5rem 2rem;
  }
  
  .site-branding .custom-logo {
    max-width: 160px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .site-header {
    padding: 2rem 3rem;
  }
  
  .site-branding .custom-logo {
    max-width: 200px;
  }
}

Adicionar ao functions.php:

// Custom logo support
function astra_child_logo() {
    add_theme_support( 'custom-logo', array(
        'height' => 100,
        'width' => 300,
        'flex-height' => true,
        'flex-width' => true,
    ));
}
add_action( 'after_setup_theme', 'astra_child_logo' );

✅ TESTAR:
□ Header com gradiente
□ Logo responsivo
□ Sticky header funcionando
```

```
═══════════════════════════════════════════════════════
PARTE 4: FORMULÁRIOS MOBILE FIRST (10 min)
═══════════════════════════════════════════════════════

Adicionar ao style.css:

/* Formulários Mobile First */
input[type="text"],
input[type="email"],
input[type="tel"],
textarea {
  width: 100%;
  padding: 1rem;
  font-size: 16px; /* MÍNIMO! */
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 1rem;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

✅ TESTAR:
□ Campos com 100% width
□ Font-size mínimo 16px
□ Focus states funcionando
```

```
═══════════════════════════════════════════════════════
PARTE 5: TESTE FINAL MOBILE FIRST (10 min)
═══════════════════════════════════════════════════════

📱 MOBILE (< 768px):
□ Todos textos legíveis (16px+)
□ Botões com min 44px altura
□ Botões full width
□ Header sticky funcionando
□ Formulários usáveis

💻 TABLET (768px - 1024px):
□ Layout melhorado
□ Botões auto width
□ Logo maior
□ Espaçamentos aumentados

💻 DESKTOP (1024px+):
□ Layout otimizado
□ Max-width aplicado
□ Hover effects funcionando

✅ Se tudo OK, child theme está pronto!
```

---

## 6. Exercício Prático 2: Header Customizado Completo (Livre) (30 min)

### Objetivo
Criar header totalmente customizado sem roteiro, aplicando conceitos aprendidos.

### Requisitos

**Funcionalidade:**
- [ ] Logo responsivo (3 tamanhos: mobile/tablet/desktop)
- [ ] Menu hambúrguer funcional no mobile
- [ ] Menu horizontal no desktop
- [ ] Sticky header
- [ ] Busca integrada
- [ ] Botão CTA destacado

**Design Mobile First:**
- [ ] Começar pelo mobile
- [ ] Touch targets 44px+
- [ ] Smooth animations
- [ ] Gradiente ou cor sólida
- [ ] Box shadow sutil

**Performance:**
- [ ] CSS otimizado
- [ ] Sem JavaScript desnecessário
- [ ] Transições suaves

### Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| Abordagem Mobile First | 30 |
| Funcionalidade | 25 |
| Design e UX | 20 |
| Performance | 15 |
| Código Limpo | 10 |
| **TOTAL** | **100** |

---

## Material de Apoio

### Documentação Oficial
- **WordPress Theme Handbook:** https://developer.wordpress.org/themes/
- **Child Themes Guide:** https://developer.wordpress.org/themes/advanced-topics/child-themes/
- **Template Hierarchy:** https://developer.wordpress.org/themes/basics/template-hierarchy/

### Tutoriais em Português
- **WPBeginner Brasil:** https://www.wpbeginner.com/pt/
- **Criar Sites WP:** https://criarsiteswp.com.br/
- **WP Total:** https://wptotal.com.br/

### Ferramentas
- **GenerateWP:** https://generatewp.com/ (gerador de código)
- **Theme Check Plugin:** Validar código
- **Query Monitor:** Debug avançado

### Snippets Úteis
- **WPSnippets:** https://wpsnippets.com/
- **CSS-Tricks Snippets:** https://css-tricks.com/snippets/

---