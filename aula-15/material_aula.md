# Material produzido em aula sobre CPT

## Precisamos partir de um tema filho
> Já vimos este processo em aulas anteriores.

## Criar um Custom Post Type
> Para nosso exemplo vamos criar um Portifólio simples.

### Adicionar o código abaixo ao functions.php do tema filho
```php
// Criar o CPT
function portifolio_custom_post_type() {
	register_post_type('portifolio',
		array(
			'labels'      => array(
				'name'          =>'Portifolio',
				'singular_name' => 'Portifolio',
			),
				'public'      => true,
				'has_archive' => true,
                'menu_icon'   => 'dashicons-portfolio',
                'supports'    => array( 'title', 'editor', 'thumbnail' ),
                'rewrite'     => array('slug' => 'portifolio'),
		)
	);
}
// Publicar o CPT
add_action('init', 'portifolio_custom_post_type');
```

### Refresh dos links permanentes do Wordpress
> Logo após finalizar o processo de criação do CPT precisamos executar refresh dos links do Wordpress, para isto precisamos executar o procedimento abaixo:
```
Configurações -> Links Permanentes -> **Não mudar nada**, apenas clicar no botão "Salvar alterações"
```

### Criar os arquivos que apresentarão os posts do nosso CPT
> O CPT trabalha com dois arquivos com nome padrão para que o Wordpress identifique as páginas de exibição do nosso conteúdo criado.\
> Estas páginas são `archive-{tipo do post criado}.php`, lista todos os CPTs, e a `single-{tipo do post criado}.php` que mostra apenas um CPT conforme selecionado por exemplo na lista de CPTs.
> **Obs.:** O exemplo abaixo do `single-portifolio.php` já se encontra com os campos customizados que criaremos a seguir.

```php
<?php
/**
 * Template for single portfolio item
 * Mobile First Design
 * Salvar na pasta do tema filho com nome de single-portifolio.php
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

> Adicionar no `style.css`
```css
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

### Criar os campos customizados
> Para este procedimento usaremos um plugin chamado **ACF** (Advanced Custom Fields).
