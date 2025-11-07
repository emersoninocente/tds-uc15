# Aula 15: Customização de Temas II

**Carga Horária:** 4 horas  
**Objetivo:** Avançar na customização de temas WordPress criando Custom Post Types, Custom Taxonomies e Custom Fields, sempre com foco Mobile First.

---

## 1. Introdução aos Custom Post Types (20 min)

### 1.1 O que são Custom Post Types (CPT)?

**Post Types Nativos do WordPress:**
- Posts (artigos de blog)
- Pages (páginas estáticas)
- Attachments (mídia)
- Revisions (revisões)
- Nav Menu Items (itens de menu)

**Custom Post Types = Tipos de conteúdo personalizados**

**Exemplos práticos:**
```
Portfolio → Projetos individuais
Produtos → E-commerce
Eventos → Calendário
Depoimentos → Testemunhos de clientes
Equipe → Membros do time
Serviços → Serviços oferecidos
```

### 1.2 Quando Criar um CPT?

✅ **CRIAR CPT quando:**
- Conteúdo tem estrutura própria diferente de posts
- Precisa de campos personalizados específicos
- Terá seu próprio arquivo/listagem
- Precisa de taxonomia própria

❌ **NÃO criar CPT quando:**
- Uma categoria de post resolve
- Conteúdo é muito simples
- Não precisa de template específico

### 1.3 Anatomia de um CPT

```php
register_post_type( 'portfolio', array(
    'labels' => array(
        'name' => 'Portfolio',
        'singular_name' => 'Projeto'
    ),
    'public' => true,
    'has_archive' => true,
    'supports' => array( 'title', 'editor', 'thumbnail' ),
    'rewrite' => array( 'slug' => 'portfolio' ),
) );
```

**Parâmetros principais:**
- `labels` → Textos da interface
- `public` → Visível publicamente?
- `has_archive` → Tem página de arquivo?
- `supports` → Recursos suportados
- `menu_icon` → Ícone no admin
- `rewrite` → URL amigável

---

## 2. Criando Custom Post Type - Portfolio (40 min)

### 2.1 Roteiro: Registrar Plugin CPT Portfolio

#### Passo 1: Criar Plugin para o WordPress
> Arquivo deve ser salvo em `wordpres\wp-content\plugins` com o nome `custom-post-type-portifolio.php`
```php
<?php
/*
 * Plugin Name: Custom Post Types Portfolio
 * Description: Add post types for custom projects
 * Author: Prof. Emerson Inocente
 */

add_action( 'init', 'custom_post_type_portifolio' );

function custom_post_type_portifolio() {  
    // Labels (textos da interface)
    $labels = array(
        'name'                  => 'Portfolio',
        'singular_name'         => 'Projeto',
        'add_new'               => 'Adicionar Novo',
        'add_new_item'          => 'Adicionar Novo Projeto',
        'edit_item'             => 'Editar Projeto',
        'new_item'              => 'Novo Projeto',
        'view_item'             => 'Ver Projeto',
        'view_items'            => 'Ver Projetos',
        'search_items'          => 'Buscar Projetos',
        'not_found'             => 'Nenhum projeto encontrado',
        'not_found_in_trash'    => 'Nenhum projeto na lixeira',
        'all_items'             => 'Todos os Projetos',
        'archives'              => 'Arquivo de Projetos',
        'featured_image'        => 'Imagem do Projeto',
        'set_featured_image'    => 'Definir imagem do projeto',
    );
    
    // Argumentos
    $args = array(
        'labels'              => $labels,
        'public'              => true,
        'menu_position'       => 5,
        'menu_icon'           => 'dashicons-portfolio',
        'capability_type'     => 'post',
        'hierarchical'        => false,
        'supports'            => array( 
            'title',           // Título
            'editor',          // Editor de conteúdo
            'thumbnail',       // Imagem destacada
            'excerpt',         // Resumo
            'custom-fields',   // Campos personalizados
        ),
        'has_archive'         => true,
        'show_in_admin_bar' => true,
        'show_in_nav_menus' => true,
        'query_var'         => true,
    );
    
    // Registrar CPT
    register_post_type( 'portfolio', $args );
}
```
✅ SALVAR e ir para próximo passo

#### Passo 2: Ativar o plugin recentemente criado
> Retornar ao painel administrativo do WP e acessar o menu `Plugins`, deve constar na lista nosso plugin. Clicar no botão "Ativar".

<img width="1384" height="364" alt="image" src="https://github.com/user-attachments/assets/e5b9cad1-e847-4355-9759-2535980846d0" />



```
═══════════════════════════════════════════════════════
PASSO 4: VERIFICAR NO ADMIN
═══════════════════════════════════════════════════════

1. Ir para o Dashboard do WordPress

2. Procurar no menu lateral: "Portfolio"

3. Deve aparecer com ícone de portfólio

4. Clicar em "Adicionar Novo"

5. Interface deve ser igual a criar post

✅ Se apareceu, CPT está registrado corretamente!
```

```
═══════════════════════════════════════════════════════
PASSO 5: CRIAR PRIMEIRO PROJETO DE TESTE
═══════════════════════════════════════════════════════

1. Portfolio → Adicionar Novo

2. Título: "Site Responsivo Mobile First"

3. Conteúdo: Descrição do projeto

4. Featured Image: Upload imagem

5. Publicar

6. Ver no frontend: seusite.com/portfolio/site-responsivo-mobile-first/

✅ Projeto individual deve aparecer
```

### 2.2 Roteiro: Criar Template para Single Portfolio

```php
═══════════════════════════════════════════════════════
CRIAR TEMPLATE: single-portfolio.php
═══════════════════════════════════════════════════════

Criar arquivo: /astra-child/single-portfolio.php

<?php
/**
 * Template for single portfolio item
 * Mobile First Design
 */

get_header(); ?>

<div id="primary" class="content-area portfolio-single">
    <main id="main" class="site-main">
        
        <?php while ( have_posts() ) : the_post(); ?>
            
            <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                
                <!-- Mobile First: Imagem Grande -->
                <?php if ( has_post_thumbnail() ) : ?>
                    <div class="portfolio-featured-image">
                        <?php 
                        // Imagem responsiva por dispositivo
                        if ( wp_is_mobile() ) {
                            the_post_thumbnail( 'portfolio-mobile' );
                        } else {
                            the_post_thumbnail( 'portfolio-desktop' );
                        }
                        ?>
                    </div>
                <?php endif; ?>
                
                <!-- Título -->
                <header class="entry-header">
                    <h1 class="entry-title"><?php the_title(); ?></h1>
                </header>
                
                <!-- Conteúdo -->
                <div class="entry-content">
                    <?php the_content(); ?>
                </div>
                
                <!-- Botão Voltar (Mobile Friendly) -->
                <div class="portfolio-navigation">
                    <a href="<?php echo get_post_type_archive_link( 'portfolio' ); ?>" 
                       class="btn btn-back">
                        ← Ver Todos os Projetos
                    </a>
                </div>
                
                <!-- Navegação entre projetos -->
                <nav class="portfolio-post-navigation">
                    <div class="nav-links">
                        <div class="nav-previous">
                            <?php previous_post_link( '%link', '← %title', true ); ?>
                        </div>
                        <div class="nav-next">
                            <?php next_post_link( '%link', '%title →', true ); ?>
                        </div>
                    </div>
                </nav>
                
            </article>
            
        <?php endwhile; ?>
        
    </main>
</div>

<?php get_footer(); ?>
```

```css
═══════════════════════════════════════════════════════
CSS PARA single-portfolio.php (adicionar ao style.css)
═══════════════════════════════════════════════════════

/* ===================================================================
   SINGLE PORTFOLIO - MOBILE FIRST
   =================================================================== */

/* MOBILE (< 768px) */
.portfolio-single {
  padding: 1rem;
}

.portfolio-featured-image {
  margin-bottom: 1.5rem;
}

.portfolio-featured-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.portfolio-single .entry-title {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.portfolio-single .entry-content {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Botão Voltar - Mobile First */
.btn-back {
  display: inline-flex;
  align-items: center;
  width: 100%; /* Full width no mobile */
  padding: 1rem;
  background: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: 4px;
  min-height: 48px;
  justify-content: center;
  margin-bottom: 2rem;
}

/* Navegação entre projetos */
.portfolio-post-navigation {
  padding: 2rem 0;
  border-top: 2px solid #e0e0e0;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-links a {
  display: block;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 4px;
  color: var(--text);
  text-decoration: none;
  min-height: 48px;
}

/* TABLET (768px+) */
@media (min-width: 768px) {
  .portfolio-single {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }
  
  .portfolio-single .entry-title {
    font-size: 2.5rem;
  }
  
  .portfolio-single .entry-content {
    font-size: 1.125rem;
  }
  
  .btn-back {
    width: auto; /* Auto width tablet+ */
  }
  
  .nav-links {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .nav-previous,
  .nav-next {
    flex: 0 0 48%;
  }
}

/* DESKTOP (1024px+) */
@media (min-width: 1024px) {
  .portfolio-single {
    padding: 3rem;
    max-width: 1200px;
  }
  
  .portfolio-single .entry-title {
    font-size: 3rem;
  }
}
```

### 2.3 Roteiro: Criar Archive Template (Listagem)

```php
═══════════════════════════════════════════════════════
CRIAR TEMPLATE: archive-portfolio.php
═══════════════════════════════════════════════════════

Criar arquivo: /astra-child/archive-portfolio.php

<?php
/**
 * Archive template for portfolio
 * Mobile First Grid Layout
 */

get_header(); ?>

<div id="primary" class="content-area portfolio-archive">
    <main id="main" class="site-main">
        
        <!-- Título do Arquivo -->
        <header class="page-header">
            <h1 class="page-title">Nosso Portfolio</h1>
            <p class="archive-description">Confira nossos projetos mais recentes</p>
        </header>
        
        <?php if ( have_posts() ) : ?>
            
            <!-- Grid de Projetos - Mobile First -->
            <div class="portfolio-grid">
                
                <?php while ( have_posts() ) : the_post(); ?>
                    
                    <article id="post-<?php the_ID(); ?>" <?php post_class( 'portfolio-item' ); ?>>
                        
                        <!-- Link para projeto -->
                        <a href="<?php the_permalink(); ?>" class="portfolio-link">
                            
                            <!-- Imagem -->
                            <?php if ( has_post_thumbnail() ) : ?>
                                <div class="portfolio-thumbnail">
                                    <?php the_post_thumbnail( 'portfolio-thumb' ); ?>
                                    <div class="portfolio-overlay">
                                        <span class="view-project">Ver Projeto</span>
                                    </div>
                                </div>
                            <?php endif; ?>
                            
                            <!-- Conteúdo -->
                            <div class="portfolio-content">
                                <h2 class="portfolio-title"><?php the_title(); ?></h2>
                                <?php if ( has_excerpt() ) : ?>
                                    <p class="portfolio-excerpt"><?php echo wp_trim_words( get_the_excerpt(), 15 ); ?></p>
                                <?php endif; ?>
                            </div>
                            
                        </a>
                        
                    </article>
                    
                <?php endwhile; ?>
                
            </div>
            
            <!-- Paginação -->
            <div class="portfolio-pagination">
                <?php
                the_posts_pagination( array(
                    'prev_text' => '← Anterior',
                    'next_text' => 'Próxima →',
                ) );
                ?>
            </div>
            
        <?php else : ?>
            
            <p>Nenhum projeto encontrado.</p>
            
        <?php endif; ?>
        
    </main>
</div>

<?php get_footer(); ?>
```

```css
═══════════════════════════════════════════════════════
CSS PARA archive-portfolio.php (adicionar ao style.css)
═══════════════════════════════════════════════════════

/* ===================================================================
   PORTFOLIO ARCHIVE - MOBILE FIRST
   =================================================================== */

/* MOBILE (< 768px) - 1 coluna */
.portfolio-archive {
  padding: 1rem;
}

.page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.archive-description {
  color: var(--text-light);
}

/* Grid Mobile - 1 coluna */
.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Item do Portfolio */
.portfolio-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.portfolio-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

/* Thumbnail com overlay */
.portfolio-thumbnail {
  position: relative;
  overflow: hidden;
}

.portfolio-thumbnail img {
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: transform 0.3s;
}

.portfolio-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(102, 126, 234, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.view-project {
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: 2px solid white;
  border-radius: 4px;
}

/* Conteúdo */
.portfolio-content {
  padding: 1.5rem;
}

.portfolio-title {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.portfolio-excerpt {
  font-size: 0.875rem;
  color: var(--text-light);
  line-height: 1.5;
}

/* Paginação Mobile */
.portfolio-pagination {
  margin-top: 2rem;
}

.portfolio-pagination .page-numbers {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  min-height: 44px;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  background: #f8f9fa;
  border-radius: 4px;
  color: var(--text);
  text-decoration: none;
}

.portfolio-pagination .page-numbers.current {
  background: var(--primary);
  color: white;
}

/* TABLET (768px+) - 2 colunas */
@media (min-width: 768px) {
  .portfolio-archive {
    padding: 2rem;
  }
  
  .page-title {
    font-size: 2.5rem;
  }
  
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .portfolio-thumbnail img {
    height: 280px;
  }
  
  /* Hover effects apenas em dispositivos com hover */
  @media (hover: hover) {
    .portfolio-item:hover {
      transform: translateY(-4px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .portfolio-item:hover .portfolio-thumbnail img {
      transform: scale(1.05);
    }
    
    .portfolio-item:hover .portfolio-overlay {
      opacity: 1;
    }
  }
}

/* DESKTOP (1024px+) - 3 colunas */
@media (min-width: 1024px) {
  .portfolio-archive {
    padding: 3rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .page-title {
    font-size: 3rem;
  }
  
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  .portfolio-thumbnail img {
    height: 300px;
  }
}
```

---

## 3. Custom Taxonomies (Taxonomias Personalizadas) (30 min)

### 3.1 O que são Taxonomias?

**Taxonomias Nativas:**
- Categories (categorias) → para posts
- Tags (etiquetas) → para posts

**Custom Taxonomies = Sistemas de classificação personalizados**

**Exemplos:**
```
Portfolio → "Tipo de Projeto" (Web, App, Branding)
Produtos → "Marca" (Nike, Adidas, Puma)
Eventos → "Tipo de Evento" (Workshop, Palestra, Webinar)
Receitas → "Categoria" (Doces, Salgados, Bebidas)
```

### 3.2 Roteiro: Criar Taxonomy para Portfolio

```php
═══════════════════════════════════════════════════════
ADICIONAR AO FUNCTIONS.PHP
═══════════════════════════════════════════════════════

/**
 * Register Portfolio Taxonomy
 * Tipo de Projeto: Web, App, Branding, etc.
 */
function astra_child_portfolio_taxonomy() {
    
    // Labels
    $labels = array(
        'name'              => 'Tipos de Projeto',
        'singular_name'     => 'Tipo de Projeto',
        'search_items'      => 'Buscar Tipos',
        'all_items'         => 'Todos os Tipos',
        'parent_item'       => 'Tipo Pai',
        'parent_item_colon' => 'Tipo Pai:',
        'edit_item'         => 'Editar Tipo',
        'update_item'       => 'Atualizar Tipo',
        'add_new_item'      => 'Adicionar Novo Tipo',
        'new_item_name'     => 'Novo Tipo',
        'menu_name'         => 'Tipos de Projeto',
    );
    
    // Argumentos
    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true, // Como categorias (com hierarquia)
        'public'            => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'show_in_nav_menus' => true,
        'show_tagcloud'     => true,
        'show_in_rest'      => true, // Gutenberg support
        'rewrite'           => array( 'slug' => 'tipo-projeto' ),
    );
    
    // Registrar taxonomy para CPT portfolio
    register_taxonomy( 'tipo_projeto', 'portfolio', $args );
}
add_action( 'init', 'astra_child_portfolio_taxonomy' );

✅ SALVAR e flush permalinks (Settings → Permalinks → Save)
```

```
═══════════════════════════════════════════════════════
USAR A TAXONOMY
═══════════════════════════════════════════════════════

1. Portfolio → Tipos de Projeto (menu lateral)

2. Adicionar termos:
   - Web Design
   - Desenvolvimento de Apps
   - Branding
   - UI/UX Design

3. Ao editar projeto:
   - Selecionar "Tipo de Projeto" na sidebar
   - Marcar categoria apropriada

4. Frontend:
   - seusite.com/tipo-projeto/web-design/
   - Lista todos projetos daquele tipo

✅ Taxonomy funcionando!
```

### 3.3 Exibir Taxonomy no Template

```php
═══════════════════════════════════════════════════════
MODIFICAR single-portfolio.php
═══════════════════════════════════════════════════════

Adicionar APÓS o título:

<!-- Tipo de Projeto -->
<?php 
$terms = get_the_terms( get_the_ID(), 'tipo_projeto' );
if ( $terms && ! is_wp_error( $terms ) ) :
?>
    <div class="portfolio-type">
        <?php foreach ( $terms as $term ) : ?>
            <a href="<?php echo get_term_link( $term ); ?>" class="type-badge">
                <?php echo $term->name; ?>
            </a>
        <?php endforeach; ?>
    </div>
<?php endif; ?>
```

```css
═══════════════════════════════════════════════════════
CSS PARA BADGES (adicionar ao style.css)
═══════════════════════════════════════════════════════

.portfolio-type {
  margin-bottom: 1.5rem;
}

.type-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  border-radius: 20px;
  font-size: 0.875rem;
  text-decoration: none;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

@media (hover: hover) {
  .type-badge:hover {
    opacity: 0.9;
  }
}
```

---

## 4. Custom Fields com ACF (Advanced Custom Fields) (50 min)

### 4.1 Instalação do ACF

```
═══════════════════════════════════════════════════════
INSTALAR ACF PLUGIN
═══════════════════════════════════════════════════════

1. Plugins → Add New

2. Buscar: "Advanced Custom Fields"

3. Install + Activate "Advanced Custom Fields"

4. Menu lateral: ACF aparece

✅ Plugin instalado!
```

### 4.2 Roteiro: Criar Campos para Portfolio

```
═══════════════════════════════════════════════════════
PASSO 1: CRIAR FIELD GROUP
═══════════════════════════════════════════════════════

1. ACF → Field Groups → Add New

2. Título: "Portfolio Details"

3. Clicar em "+ Add Field"
```

```
═══════════════════════════════════════════════════════
PASSO 2: ADICIONAR CAMPOS
═══════════════════════════════════════════════════════

CAMPO 1: Cliente
─────────────────
Field Label: Cliente
Field Name: cliente
Field Type: Text
Instructions: Nome do cliente do projeto
Required: Sim

CAMPO 2: Data do Projeto
─────────────────
Field Label: Data do Projeto
Field Name: data_projeto
Field Type: Date Picker
Display Format: d/m/Y
Return Format: Y-m-d
Required: Não

CAMPO 3: URL do Site
─────────────────
Field Label: URL do Site
Field Name: url_site
Field Type: URL
Placeholder: https://
Required: Não

CAMPO 4: Tecnologias Utilizadas
─────────────────
Field Label: Tecnologias
Field Name: tecnologias
Field Type: Checkbox
Choices:
HTML5
CSS3
JavaScript
WordPress
React
PHP
Outras

CAMPO 5: Galeria de Imagens
─────────────────
Field Label: Galeria de Imagens
Field Name: galeria
Field Type: Gallery
Return Format: Array
Insert: Append to end
Library: All
Min/Max: deixar vazio

✅ Campos criados!
```

```
═══════════════════════════════════════════════════════
PASSO 3: DEFINIR LOCALIZAÇÃO
═══════════════════════════════════════════════════════

1. Na seção "Location Rules":

2. Configurar:
   Post Type | is equal to | portfolio

3. Isso mostra os campos apenas em Portfolio

✅ PUBLISH para salvar
```

```
═══════════════════════════════════════════════════════
PASSO 4: TESTAR OS CAMPOS
═══════════════════════════════════════════════════════

1. Portfolio → Editar um projeto

2. Rolar para baixo

3. Deve aparecer "Portfolio Details" com todos os campos

4. Preencher:
   Cliente: Empresa X
   Data: 15/01/2025
   URL: https://empresax.com
   Tecnologias: marcar algumas
   Galeria: adicionar 4-5 imagens

5. Atualizar projeto

✅ Campos salvos!
```

### 4.3 Exibir Custom Fields no Template

```php
═══════════════════════════════════════════════════════
MODIFICAR single-portfolio.php
═══════════════════════════════════════════════════════

Adicionar APÓS .entry-content:

<!-- Informações do Projeto -->
<div class="project-info">
    <h3>Informações do Projeto</h3>
    
    <div class="info-grid">
        
        <!-- Cliente -->
        <?php if ( get_field( 'cliente' ) ) : ?>
            <div class="info-item">
                <strong>Cliente:</strong>
                <span><?php the_field( 'cliente' ); ?></span>
            </div>
        <?php endif; ?>
        
        <!-- Data -->
        <?php if ( get_field( 'data_projeto' ) ) : ?>
            <div class="info-item">
                <strong>Data:</strong>
                <span><?php echo date( 'd/m/Y', strtotime( get_field( 'data_projeto' ) ) ); ?></span>
            </div>
        <?php endif; ?>
        
        <!-- URL -->
        <?php if ( get_field( 'url_site' ) ) : ?>
            <div class="info-item">
                <strong>Site:</strong>
                <a href="<?php the_field( 'url_site' ); ?>" 
                   target="_blank" 
                   rel="noopener">
                    Ver Site →
                </a>
            </div>
        <?php endif; ?>
        
        <!-- Tecnologias -->
        <?php 
        $tecnologias = get_field( 'tecnologias' );
        if ( $tecnologias ) : 
        ?>
            <div class="info-item">
                <strong>Tecnologias:</strong>
                <div class="tech-badges">
                    <?php foreach ( $tecnologias as $tech ) : ?>
                        <span class="tech-badge"><?php echo $tech; ?></span>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endif; ?>
        
    </div>
</div>

<!-- Galeria de Imagens -->
<?php 
$galeria = get_field( 'galeria' );
if ( $galeria ) : 
?>
    <div class="project-gallery">
        <h3>Galeria do Projeto</h3>
        <div class="gallery-grid">
            <?php foreach ( $galeria as $imagem ) : ?>
                <a href="<?php echo $imagem['url']; ?>" 
                   class="gallery-item"
                   data-lightbox="portfolio">
                    <img src="<?php echo $imagem['sizes']['medium']; ?>" 
                         alt="<?php echo $imagem['alt']; ?>">
                </a>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>
```

```css
═══════════════════════════════════════════════════════
CSS PARA CUSTOM FIELDS (adicionar ao style.css)
═══════════════════════════════════════════════════════

/* ===================================================================
   PROJECT INFO - MOBILE FIRST
   =================================================================== */

/* MOBILE */
.project-info {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.project-info h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.info-grid {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.info-item strong {
  color: var(--text-light);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Tech Badges */
.tech-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: white;
  border: 1px solid var(--primary);
  color: var(--primary);
  border-radius: 4px;
  font-size: 0.875rem;
}

/* Galeria Mobile First */
.project-gallery {
  margin-bottom: 2rem;
}

.project-gallery h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  display: block;
}

.gallery-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s;
}

/* TABLET */
@media (min-width: 768px) {
  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .gallery-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .gallery-item img {
    height: 220px;
  }
  
  @media (hover: hover) {
    .gallery-item:hover img {
      transform: scale(1.05);
    }
  }
}

/* DESKTOP */
@media (min-width: 1024px) {
  .project-info {
    padding: 2rem;
  }
  
  .info-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .gallery-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
  
  .gallery-item img {
    height: 250px;
  }
}
```

---

## 5. Exercício Prático 1: CPT "Depoimentos" (Guiado) (40 min)

### Objetivo
Criar Custom Post Type "Depoimentos" completo com campos personalizados.

### ROTEIRO COMPLETO

```php
═══════════════════════════════════════════════════════
PARTE 1: REGISTRAR CPT DEPOIMENTOS (10 min)
═══════════════════════════════════════════════════════

Adicionar ao functions.php:

/**
 * Register Testimonials CPT
 */
function astra_child_testimonials_cpt() {
    
    $labels = array(
        'name'               => 'Depoimentos',
        'singular_name'      => 'Depoimento',
        'add_new'            => 'Adicionar Novo',
        'add_new_item'       => 'Adicionar Novo Depoimento',
        'edit_item'          => 'Editar Depoimento',
        'view_item'          => 'Ver Depoimento',
        'search_items'       => 'Buscar Depoimentos',
        'not_found'          => 'Nenhum depoimento encontrado',
    );
    
    $args = array(
        'labels'        => $labels,
        'public'        => true,
        'has_archive'   => true,
        'show_in_rest'  => true,
        'menu_icon'     => 'dashicons-testimonial',
        'supports'      => array( 'title', 'editor', 'thumbnail' ),
        'rewrite'       => array( 'slug' => 'depoimentos' ),
    );
    
    register_post_type( 'depoimento', $args );
}
add_action( 'init', 'astra_child_testimonials_cpt' );

☐ SALVAR
☐ Settings → Permalinks → Save
☐ Verificar menu "Depoimentos" no admin
```

```
═══════════════════════════════════════════════════════
PARTE 2: CRIAR CAMPOS NO ACF (15 min)
═══════════════════════════════════════════════════════

1. ACF → Add New Field Group

2. Título: "Depoimento Info"

3. Adicionar campos:

CAMPO 1: Nome do Cliente
─────────────────
Field Label: Nome do Cliente
Field Name: cliente_nome
Field Type: Text
Required: Sim

CAMPO 2: Cargo
─────────────────
Field Label: Cargo
Field Name: cliente_cargo
Field Type: Text
Placeholder: Ex: CEO da Empresa X

CAMPO 3: Empresa
─────────────────
Field Label: Empresa
Field Name: cliente_empresa
Field Type: Text

CAMPO 4: Rating (Avaliação)
─────────────────
Field Label: Avaliação
Field Name: rating
Field Type: Range
Min: 1
Max: 5
Step: 1
Default: 5

CAMPO 5: Foto do Cliente
─────────────────
Field Label: Foto do Cliente
Field Name: cliente_foto
Field Type: Image
Return Format: Array
Preview Size: Thumbnail

4. Location Rules:
   Post Type | is equal to | depoimento

5. PUBLISH

☐ Campos criados
```

```
═══════════════════════════════════════════════════════
PARTE 3: CRIAR TEMPLATE (10 min)
═══════════════════════════════════════════════════════

Criar arquivo: /astra-child/archive-depoimento.php

<?php
/**
 * Archive template for testimonials
 * Mobile First
 */

get_header(); ?>

<div class="testimonials-archive">
    <header class="page-header">
        <h1>O Que Dizem Nossos Clientes</h1>
    </header>
    
    <?php if ( have_posts() ) : ?>
        
        <div class="testimonials-grid">
            
            <?php while ( have_posts() ) : the_post(); ?>
                
                <article class="testimonial-card">
                    
                    <!-- Rating -->
                    <?php 
                    $rating = get_field( 'rating' );
                    if ( $rating ) :
                    ?>
                        <div class="rating">
                            <?php for ( $i = 1; $i <= 5; $i++ ) : ?>
                                <span class="star <?php echo $i <= $rating ? 'filled' : ''; ?>">★</span>
                            <?php endfor; ?>
                        </div>
                    <?php endif; ?>
                    
                    <!-- Depoimento -->
                    <div class="testimonial-content">
                        <?php the_content(); ?>
                    </div>
                    
                    <!-- Cliente -->
                    <div class="client-info">
                        <?php 
                        $foto = get_field( 'cliente_foto' );
                        if ( $foto ) :
                        ?>
                            <img src="<?php echo $foto['sizes']['thumbnail']; ?>" 
                                 alt="<?php echo $foto['alt']; ?>"
                                 class="client-photo">
                        <?php endif; ?>
                        
                        <div class="client-details">
                            <strong><?php the_field( 'cliente_nome' ); ?></strong>
                            <?php if ( get_field( 'cliente_cargo' ) ) : ?>
                                <span><?php the_field( 'cliente_cargo' ); ?></span>
                            <?php endif; ?>
                            <?php if ( get_field( 'cliente_empresa' ) ) : ?>
                                <span><?php the_field( 'cliente_empresa' ); ?></span>
                            <?php endif; ?>
                        </div>
                    </div>
                    
                </article>
                
            <?php endwhile; ?>
            
        </div>
        
    <?php endif; ?>
</div>

<?php get_footer(); ?>
```

```css
═══════════════════════════════════════════════════════
PARTE 4: CSS MOBILE FIRST (5 min)
═══════════════════════════════════════════════════════

Adicionar ao style.css:

/* TESTIMONIALS - MOBILE FIRST */

/* MOBILE */
.testimonials-archive {
  padding: 1rem;
}

.testimonials-archive .page-header {
  text-align: center;
  margin-bottom: 2rem;
}

.testimonials-grid {
  display: grid;
  gap: 1.5rem;
}

.testimonial-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.rating {
  margin-bottom: 1rem;
}

.star {
  color: #ddd;
  font-size: 1.25rem;
}

.star.filled {
  color: #ffc107;
}

.testimonial-content {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e0e0e0;
}

.client-photo {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.client-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.client-details strong {
  font-size: 1rem;
}

.client-details span {
  font-size: 0.875rem;
  color: var(--text-light);
}

/* TABLET */
@media (min-width: 768px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* DESKTOP */
@media (min-width: 1024px) {
  .testimonials-archive {
    padding: 3rem;
    max-width: 1400px;
    margin: 0 auto;
  }
  
  .testimonials-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

☐ CSS aplicado
```

```
═══════════════════════════════════════════════════════
PARTE 5: TESTAR COMPLETO
═══════════════════════════════════════════════════════

☐ Criar 3 depoimentos de teste
☐ Preencher todos os campos ACF
☐ Adicionar fotos dos clientes
☐ Publicar

☐ Acessar: seusite.com/depoimentos/

☐ Verificar:
  □ Grid responsivo (1/2/3 colunas)
  □ Estrelas de rating funcionando
  □ Fotos aparecem
  □ Layout mobile-friendly

✅ CPT Depoimentos completo!
```

---

## 6. Exercício Prático 2: CPT "Serviços" (Livre) (30 min)

### Objetivo
Criar Custom Post Type "Serviços" completo sem roteiro detalhado.

### Requisitos Obrigatórios

**CPT:**
- [ ] Nome: "Serviços"
- [ ] Slug: "servicos"
- [ ] Suporta: title, editor, thumbnail, excerpt
- [ ] Ícone: dashicons-admin-tools
- [ ] Show in REST: true

**Taxonomy:**
- [ ] Nome: "Categoria de Serviço"
- [ ] Slug: "categoria-servico"
- [ ] Hierárquica: true
- [ ] Termos: Consultoria, Desenvolvimento, Design, Suporte

**Custom Fields (ACF):**
- [ ] Preço (Number)
- [ ] Duração (Text)
- [ ] Ícone do Serviço (Image)
- [ ] Recursos Inclusos (Textarea)
- [ ] Destaque (True/False)

**Templates:**
- [ ] archive-servico.php (listagem em grid)
- [ ] single-servico.php (página individual)

**Design Mobile First:**
- [ ] Grid: 1 coluna (mobile), 2 (tablet), 3 (desktop)
- [ ] Cards com hover effect
- [ ] Badge "Destaque" para serviços destacados
- [ ] Preço bem visível
- [ ] Botão "Solicitar Orçamento" (44px+)

**CSS:**
- [ ] Mobile first
- [ ] Touch-friendly
- [ ] Transições suaves
- [ ] Cores consistentes com tema

### Estrutura Sugerida

**Card de Serviço deve ter:**
```
[Ícone]
Título do Serviço
Categoria
Breve descrição (excerpt)
Preço
Duração
[Botão CTA]
```

**Página individual deve ter:**
```
[Hero com ícone]
Título
Categoria
Preço + Duração
Descrição completa
Recursos Inclusos (lista)
[Botão Solicitar Orçamento]
```

### Critérios de Avaliação

| Critério | Pontos |
|----------|--------|
| CPT + Taxonomy funcionando | 25 |
| Campos ACF corretos | 20 |
| Templates Mobile First | 25 |
| Design e UX | 20 |
| Código limpo | 10 |
| **TOTAL** | **100** |

---

## 7. Shortcodes para Exibir CPTs (20 min)

### 7.1 Criar Shortcode para Últimos Projetos

```php
═══════════════════════════════════════════════════════
ADICIONAR AO FUNCTIONS.PHP
═══════════════════════════════════════════════════════

/**
 * Shortcode: Últimos Projetos Portfolio
 * Uso: [ultimos_projetos numero="3"]
 */
function astra_child_ultimos_projetos( $atts ) {
    
    // Atributos
    $atts = shortcode_atts( array(
        'numero' => 3,
    ), $atts );
    
    // Query
    $args = array(
        'post_type'      => 'portfolio',
        'posts_per_page' => $atts['numero'],
        'orderby'        => 'date',
        'order'          => 'DESC',
    );
    
    $query = new WP_Query( $args );
    
    // Output
    ob_start();
    
    if ( $query->have_posts() ) :
    ?>
        <div class="portfolio-shortcode">
            <?php while ( $query->have_posts() ) : $query->the_post(); ?>
                
                <article class="portfolio-mini">
                    <?php if ( has_post_thumbnail() ) : ?>
                        <a href="<?php the_permalink(); ?>">
                            <?php the_post_thumbnail( 'portfolio-thumb' ); ?>
                        </a>
                    <?php endif; ?>
                    <h3>
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </h3>
                </article>
                
            <?php endwhile; ?>
        </div>
    <?php
    endif;
    
    wp_reset_postdata();
    
    return ob_get_clean();
}
add_shortcode( 'ultimos_projetos', 'astra_child_ultimos_projetos' );
```

```css
═══════════════════════════════════════════════════════
CSS PARA SHORTCODE
═══════════════════════════════════════════════════════

/* MOBILE */
.portfolio-shortcode {
  display: grid;
  gap: 1rem;
  margin: 2rem 0;
}

.portfolio-mini img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

.portfolio-mini h3 {
  font-size: 1.125rem;
}

.portfolio-mini a {
  text-decoration: none;
  color: inherit;
}

/* TABLET+ */
@media (min-width: 768px) {
  .portfolio-shortcode {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
}
```

**Usar no conteúdo:**
```
Em qualquer página/post:
[ultimos_projetos numero="6"]
```

---

## Material de Apoio

### Documentação Oficial
- **Custom Post Types:** https://developer.wordpress.org/plugins/post-types/
- **Custom Taxonomies:** https://developer.wordpress.org/plugins/taxonomies/
- **ACF Documentation:** https://www.advancedcustomfields.com/resources/
- **Template Hierarchy:** https://developer.wordpress.org/themes/basics/template-hierarchy/

### Tutoriais Recomendados
- **WPBeginner:** Custom Post Types Tutorial
- **ACF Academy:** https://www.advancedcustomfields.com/learn/
- **WordPress TV:** Custom Content Types

### Ferramentas
- **GenerateWP:** https://generatewp.com/post-type/ (gerar código CPT)
- **CPT UI Plugin:** Interface visual para criar CPT
- **ACF Extended:** Plugin que expande ACF

### Plugins Complementares
- **Custom Post Type UI:** Criar CPT via interface
- **ACF Extended:** Recursos extras para ACF
- **Admin Columns:** Customizar colunas do admin
- **Duplicate Post:** Duplicar posts/CPTs

### Snippets Úteis

**Query múltiplos CPTs:**
```php
$args = array(
    'post_type' => array( 'portfolio', 'depoimento' ),
    'posts_per_page' => 10,
);
$query = new WP_Query( $args );
```

**Contar posts de CPT:**
```php
$count = wp_count_posts( 'portfolio' );
echo $count->publish; // Posts publicados
```

**Get terms de taxonomy:**
```php
$terms = get_terms( array(
    'taxonomy' => 'tipo_projeto',
    'hide_empty' => false,
) );
```

---

## Resumo da Aula

### Conceitos Aprendidos

1. **Custom Post Types** criam tipos de conteúdo personalizados
2. **Custom Taxonomies** organizam CPTs com categorias próprias
3. **ACF** adiciona campos personalizados facilmente
4. **Templates específicos** (single-cpt.php, archive-cpt.php)
5. **Mobile First** em todos templates e estilos
6. **Shortcodes** exibem CPTs em qualquer lugar

### Fluxo Completo

```
1. Registrar CPT (functions.php)
   ↓
2. Flush permalinks (Settings → Permalinks)
   ↓
3. Criar Taxonomy (opcional)
   ↓
4. Adicionar Custom Fields (ACF)
   ↓
5. Criar Templates (single-cpt.php, archive-cpt.php)
   ↓
6. Adicionar CSS Mobile First
   ↓
7. Testar em todos dispositivos
   ↓
8. Criar conteúdo
```

### Próxima Aula

**Encontro 18:** WooCommerce Mobile First - E-commerce responsivo e otimizado.

---

## Checklist de Aprendizagem

### Ao final deste encontro, você deve ser capaz de:

**Custom Post Types:**
- ✅ Explicar o que são CPTs
- ✅ Registrar CPT via código
- ✅ Configurar labels e argumentos
- ✅ Flush permalinks após criar CPT
- ✅ Criar templates específicos (single-cpt.php)
- ✅ Criar archive templates (archive-cpt.php)

**Custom Taxonomies:**
- ✅ Entender diferença entre hierárquica e não-hierárquica
- ✅ Registrar taxonomy para CPT
- ✅ Exibir terms no template
- ✅ Criar links para taxonomy archives

**Advanced Custom Fields:**
- ✅ Instalar e configurar ACF
- ✅ Criar field groups
- ✅ Adicionar diferentes tipos de campos
- ✅ Configurar location rules
- ✅ Exibir campos com the_field()
- ✅ Usar campos condicionalmente

**Templates Mobile First:**
- ✅ Criar templates específicos para CPTs
- ✅ Usar diferentes image sizes por dispositivo
- ✅ Implementar grid responsivo (1/2/3 colunas)
- ✅ Adicionar touch-friendly navigation
- ✅ Otimizar performance com lazy loading

**Integração:**
- ✅ Combinar CPT + Taxonomy + ACF
- ✅ Criar shortcodes para exibir CPTs
- ✅ Query personalizada com WP_Query
- ✅ Exibir custom fields em templates

**Mobile First:**
- ✅ Touch targets adequados (44px+)
- ✅ Imagens responsivas
- ✅ Typography legível (16px+)
- ✅ Grid adaptativo
- ✅ Performance otimizada

---

**FIM DO ENCONTRO 17**

Total: ~35 páginas
Tempo: 4 horas
Exercícios: 2 (1 guiado + 1 livre)
Nível: Intermediário-Avançado
Pré-requisito: Encontro 16
