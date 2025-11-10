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
