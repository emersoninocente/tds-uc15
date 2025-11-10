# Material produzido em aula sobre CPT

## Precisamos partir de um tema filho
> Já vimos este processo em aulas anteriores.

## Criar um Custom Post Type
> Para nosso exemplo vamos criar um Portifólio simples.

### Adicionar o código abaixo ao functions.php do tema filho
```php
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
add_action('init', 'portifolio_custom_post_type');
```
