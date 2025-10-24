# Aula 11: Temas Responsivos no WordPress

**Objetivo:** Instalar, customizar e entender temas responsivos no WordPress, focando em opções mobile-first.

---

## 1. O que são Temas WordPress? (30 min)

### 1.1 Conceito

**Tema** = Aparência + Funcionalidade do site

**O que um tema controla:**
- Layout e design visual
- Tipografia e cores
- Estrutura de páginas
- Widgets e sidebars
- Menus de navegação
- Customizações CSS

**O que NÃO deve estar no tema:**
- Conteúdo do site
- Funcionalidades críticas do negócio
- Dados de formulários
- Configurações de plugins essenciais

### 1.2 Anatomia de um Tema

**Estrutura básica:**
```
meu-tema/
├── style.css              # Informações e estilos do tema
├── index.php              # Template principal
├── functions.php          # Funções e recursos do tema
├── header.php             # Cabeçalho
├── footer.php             # Rodapé
├── sidebar.php            # Barra lateral
├── single.php             # Post individual
├── page.php               # Página individual
├── archive.php            # Página de arquivo
├── 404.php                # Página de erro
├── screenshot.png         # Preview do tema (880x660px)
└── /assets/              # CSS, JS, imagens
    ├── /css/
    ├── /js/
    └── /images/
```

**Hierarquia de templates (simplificada):**
```
Homepage → front-page.php → home.php → index.php
Post → single.php → singular.php → index.php
Page → page.php → singular.php → index.php
Archive → archive.php → index.php
404 → 404.php → index.php
```

### 1.3 Temas Gratuitos vs Premium

**Temas Gratuitos:**
- ✅ WordPress.org repository
- ✅ Código revisado pela comunidade
- ✅ GPL (podem ser modificados)
- ❌ Suporte limitado
- ❌ Menos opções de customização

**Temas Premium:**
- ✅ Mais opções e recursos
- ✅ Suporte técnico
- ✅ Atualizações regulares
- ✅ Demos prontas
- ❌ Custo ($30-$100+)
- ❌ Podem ser "bloated" (pesados)

---

## 2. Temas Mobile-First Recomendados (45 min)

### 2.1 Temas Gratuitos Populares

**1. Astra** ⭐⭐⭐⭐⭐
```
Características:
- Ultrarrápido (< 50KB)
- Mobile-first design
- Compatível com page builders
- Altamente customizável
- Versão PRO disponível

Ideal para: Qualquer tipo de site
Download: WordPress.org ou astra.com
```

**2. GeneratePress** ⭐⭐⭐⭐⭐
```
Características:
- Extremamente leve
- Código limpo
- Acessibilidade (WCAG 2.0 AA)
- SEO otimizado
- Schema markup

Ideal para: Sites de performance
Download: WordPress.org
```

**3. OceanWP** ⭐⭐⭐⭐
```
Características:
- Demos prontas
- WooCommerce integrado
- Header sticky
- Mobile menu customizável
- Muitas extensões

Ideal para: E-commerce
Download: WordPress.org
```

**4. Neve** ⭐⭐⭐⭐
```
Características:
- AMP ready
- One-page layouts
- Starter sites
- Gutenberg compatível
- RTL support

Ideal para: Landing pages
Download: WordPress.org
```

**5. Kadence** ⭐⭐⭐⭐⭐
```
Características:
- Header/footer builder
- Design system
- Performance otimizada
- Gutenberg blocks
- Template library

Ideal para: Sites modernos
Download: WordPress.org
```

### 2.2 Temas Nativos do WordPress

**Twenty Twenty-Five** (mais recente)
```
- Full Site Editing (FSE)
- Block-based
- Modern design
- Minimal
```

**Twenty Twenty-Four**
```
- FSE completo
- Padrões de blocos
- Tipografia moderna
```

### 2.3 Comparação de Performance

**Teste básico (sem conteúdo):**
```
Astra:          < 50KB | ~500ms
GeneratePress:  < 30KB | ~400ms
OceanWP:        ~150KB | ~800ms
Neve:           ~80KB  | ~600ms
Kadence:        ~100KB | ~700ms
```

---

## 3. Instalando e Ativando Temas (40 min)

### 3.1 Método 1: Através do Dashboard

**Passo a passo:**
```
1. Appearance → Themes
2. Click em "Add New"
3. Buscar tema (ex: "Astra")
4. Click em "Install"
5. Aguardar instalação
6. Click em "Activate"
```

**Visualizar antes de ativar:**
```
Antes de ativar, click em "Live Preview"
- Veja como fica com seu conteúdo
- Teste responsividade
- Verifique funcionalidades
```

### 3.2 Método 2: Upload Manual

**Quando usar:**
- Tema premium comprado
- Tema personalizado
- Tema de terceiros

**Passo a passo:**
```
1. Baixe o tema (arquivo .zip)
2. Appearance → Themes → Add New
3. Click em "Upload Theme"
4. Choose File → selecione .zip
5. Install Now
6. Activate
```

### 3.3 Método 3: Via FTP/SFTP

**Para desenvolvedores:**
```bash
# Descompactar tema
unzip meu-tema.zip

# Upload via FTP para:
/wp-content/themes/meu-tema/

# Ativar no Dashboard:
Appearance → Themes → Activate
```

### 3.4 Exercício Prático

**Instalar Astra:**
```
1. Appearance → Themes → Add New
2. Buscar: "Astra"
3. Install + Activate
4. Explorar opções de customização
```

---

## 4. WordPress Customizer (60 min)

### 4.1 Acessando o Customizer

**Formas de acessar:**
```
Método 1: Appearance → Customize
Método 2: Admin bar → Customize
Método 3: Themes → Customize (no tema ativo)
```

### 4.2 Seções Padrão do Customizer

**Site Identity (Identidade do Site)**
```
- Site Title: Nome do site
- Tagline: Slogan
- Site Icon: Favicon (512x512px recomendado)
- Logo: Logotipo do site
```

**Colors (Cores)**
```
- Background Color: Cor de fundo
- Header Color: Cor do header
- Link Color: Cor dos links
- Text Color: Cor do texto
```

**Header & Navigation**
```
- Header Layout: Estrutura do cabeçalho
- Sticky Header: Fixo ao scroll
- Mobile Menu: Configurações mobile
```

**Typography (Tipografia)**
```
- Font Family: Família da fonte
- Font Size: Tamanhos
- Line Height: Altura da linha
- Letter Spacing: Espaçamento
```

**Menus**
```
- Primary Menu: Menu principal
- Footer Menu: Menu do rodapé
- Social Menu: Links sociais
```

**Widgets**
```
- Sidebar: Barra lateral
- Footer: Widgets do rodapé
- Header: Widgets do cabeçalho
```

**Homepage Settings**
```
- Display: Latest posts ou Static page
- Homepage: Selecionar página
- Posts page: Página do blog
```

**Additional CSS**
```
- CSS customizado
- Preview em tempo real
```

### 4.3 Customizando o Astra

**Exercício Prático - Customizar Homepage:**

**1. Site Identity**
```
Site Title: Meu Site Mobile
Tagline: Desenvolvimento Web Responsivo
Site Icon: [fazer upload de logo 512x512px]
```

**2. Global → Colors**
```
Base Color: #2c3e50
Link Color: #3498db
Text Color: #333333
Heading Color: #2c3e50
```

**3. Global → Typography**
```
Base Typography:
- Font Family: System Font Stack (melhor performance)
- Font Size: 16px
- Line Height: 1.6

Headings:
- Font Family: Sans Serif
- Font Weight: 700
```

**4. Header Builder** (Astra específico)
```
Desktop:
[ Logo ] [ Menu ] [ Button ]

Mobile:
[ Logo ] [ Hamburger ]

Mobile Menu:
- Slide from right
- Full screen overlay
```

**5. Footer Builder**
```
Layout: 3 colunas
Coluna 1: Copyright text
Coluna 2: Menu
Coluna 3: Social icons
```

### 4.4 Preview Responsivo

**Ícones na parte inferior do Customizer:**
```
🖥️ Desktop (> 1200px)
💻 Tablet (768px - 1024px)
📱 Mobile (< 768px)
```

**Testar em cada dispositivo:**
- Menu funciona?
- Texto legível?
- Imagens responsivas?
- Espaçamentos adequados?

---

## 5. Criando Menus (45 min)

### 5.1 Criar Novo Menu

**Passo a passo:**
```
1. Appearance → Menus
2. Create a new menu
3. Nome: "Menu Principal"
4. Create Menu
```

### 5.2 Adicionar Itens ao Menu

**Opções disponíveis:**

**Pages (Páginas)**
```
- Selecione páginas existentes
- Add to Menu
```

**Posts**
```
- Adicione posts individuais
- Útil para destacar conteúdo
```

**Custom Links**
```
URL: https://exemplo.com
Link Text: Texto do Link

Ou links internos:
URL: #secao
Link Text: Ir para Seção
```

**Categories**
```
- Links para páginas de categoria
- Útil para blogs
```

### 5.3 Organizar Menu

**Estrutura hierárquica:**
```
Home
Sobre
Serviços
  └─ Web Design
  └─ Apps
  └─ SEO
Portfolio
Blog
Contato
```

**Arrastar e soltar:**
- Mover para cima/baixo
- Indentar para criar submenu
- Alinhar para mesmo nível

### 5.4 Configurações de Item

**Clicar na seta do item:**
```
Navigation Label: Texto exibido
Title Attribute: Tooltip (hover)
CSS Classes: Classes customizadas
Link Relationship (XFN): rel="nofollow"
Description: Texto adicional
```

**Opções úteis:**
```
Open link in new tab: ☑ (links externos)
```

### 5.5 Atribuir Menu a Localizações

**Menu Locations:**
```
Primary Menu: ☑ Menu Principal
Footer Menu: ☐
Mobile Menu: ☑ Menu Principal (ou criar separado)
```

### 5.6 Menu Mobile Responsivo

**Boas práticas:**

**Opção 1: Mesmo menu**
```
Usar mesmo menu do desktop
WordPress adapta automaticamente
```

**Opção 2: Menu mobile separado**
```
Criar menu mais simples
Menos itens
Sem submenus profundos
```

**Configurações mobile (Astra):**
```
Customize → Header Builder → Mobile Menu

Style: Dropdown / Full width
Trigger: Hamburger icon
Position: Right / Left
Animation: Slide / Fade
```

### 5.7 Exercício Prático

**Criar estrutura de menu completa:**

```
Menu Principal:
├─ Home (link para /)
├─ Sobre (link para /sobre/)
├─ Serviços (link para /servicos/)
│  ├─ Web Design
│  ├─ Desenvolvimento
│  └─ Consultoria
├─ Portfolio (link para /portfolio/)
├─ Blog (link para /blog/)
└─ Contato (link para /contato/)

Menu Footer:
├─ Política de Privacidade
├─ Termos de Uso
└─ Sitemap
```

---

## 6. Widgets e Sidebars (40 min)

### 6.1 O que são Widgets?

**Widget** = Pequeno bloco de conteúdo ou funcionalidade

**Widgets comuns:**
- Recent Posts (Posts Recentes)
- Categories (Categorias)
- Tag Cloud (Nuvem de Tags)
- Calendar (Calendário)
- Search (Busca)
- Custom HTML
- Text
- Image
- Video

### 6.2 Áreas de Widget (Sidebars)

**Localizações típicas:**
```
Primary Sidebar: Barra lateral principal
Footer Widget 1: Coluna 1 do footer
Footer Widget 2: Coluna 2 do footer
Footer Widget 3: Coluna 3 do footer
Header Widget Area: Área no header
```

### 6.3 Adicionar Widgets

**Método 1: Appearance → Widgets**
```
1. Arraste widget da esquerda
2. Solte na área desejada
3. Configure o widget
4. Save
```

**Método 2: Customizer**
```
1. Customize → Widgets
2. Selecione área
3. Add Widget
4. Configure e Publish
```

### 6.4 Widgets Úteis para Mobile

**Search Widget**
```
Title: Buscar no Site
Show label: yes
```

**Categories Widget**
```
Title: Categorias
Show post count: yes
Show hierarchy: yes
```

**Recent Posts Widget**
```
Title: Posts Recentes
Number of posts: 5
Display post date: yes
```

**Custom HTML Widget**
```
Title: Newsletter
Content: 
<form>
  <input type="email" placeholder="Seu email">
  <button>Inscrever</button>
</form>
```

### 6.5 Sidebar Responsiva

**Desktop:**
- Sidebar visível ao lado do conteúdo
- 25-30% da largura

**Mobile:**
- Sidebar abaixo do conteúdo
- Full width
- Pode ser escondida (depende do tema)

**Código exemplo (automático no tema):**
```css
/* Desktop */
.content-area {
  width: 70%;
  float: left;
}

.sidebar {
  width: 25%;
  float: right;
}

/* Mobile */
@media (max-width: 768px) {
  .content-area,
  .sidebar {
    width: 100%;
    float: none;
  }
}
```

---

## 7. Child Themes (30 min)

### 7.1 O que é Child Theme?

**Child Theme** = Tema filho que herda funcionalidades do tema pai

**Por que usar:**
- ✅ Preserva customizações nas atualizações
- ✅ Permite modificar sem alterar tema original
- ✅ Boa prática de desenvolvimento
- ✅ Facilita manutenção

**Quando usar:**
- Modificações em PHP
- CSS customizado extenso
- Adicionar templates novos
- Modificar functions.php

### 7.2 Criar Child Theme Manualmente

**Estrutura mínima:**
```
astra-child/
├── style.css
└── functions.php
```

**style.css:**
```css
/*
Theme Name:   Astra Child
Theme URI:    https://seusite.com/
Description:  Child theme do Astra
Author:       Seu Nome
Author URI:   https://seusite.com/
Template:     astra
Version:      1.0.0
*/

/* Seus estilos customizados aqui */
.site-header {
  background: #2c3e50;
}
```

**functions.php:**
```php
<?php
/**
 * Enqueue parent and child theme styles
 */
function astra_child_enqueue_styles() {
    // Parent theme style
    wp_enqueue_style('astra-parent-style', 
        get_template_directory_uri() . '/style.css'
    );
    
    // Child theme style
    wp_enqueue_style('astra-child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('astra-parent-style'),
        wp_get_theme()->get('Version')
    );
}
add_action('wp_enqueue_scripts', 'astra_child_enqueue_styles');
```

### 7.3 Criar Child Theme com Plugin

**Plugin recomendado: Child Theme Configurator**

```
1. Plugins → Add New
2. Buscar: "Child Theme Configurator"
3. Install + Activate
4. Tools → Child Themes

Configuração:
- Parent Theme: Astra
- Analysis: Run Analysis
- Configure Child Theme:
  - Name: Astra Child
  - Template: astra-child
  - Create New Child Theme
```

### 7.4 Ativar Child Theme

```
1. Appearance → Themes
2. Localizar "Astra Child"
3. Activate
```

**⚠️ Importante:**
- Sempre ative o child theme, não o parent
- Parent theme deve permanecer instalado
- Customizações vão no child theme

### 7.5 Customizações Comuns

**Adicionar CSS customizado:**
```css
/* No style.css do child theme */

/* Mobile menu customizado */
@media (max-width: 768px) {
  .main-navigation {
    background: #1a1a1a;
  }
  
  .menu-toggle {
    font-size: 1.5rem;
  }
}

/* Botões customizados */
.button {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50px;
  padding: 1rem 2rem;
}
```

**Adicionar função no functions.php:**
```php
<?php
// Mudar comprimento do excerpt
function custom_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'custom_excerpt_length');

// Adicionar tamanho de imagem customizado
add_image_size('portfolio-thumb', 600, 400, true);

// Remover versão do WordPress do header (segurança)
remove_action('wp_head', 'wp_generator');
```

---

## 8. Exercício Prático Completo (30 min)

### Exercício: Site Responsivo Completo

**Objetivo:** Configurar site completo mobile-first com Astra

**Tarefas:**

**1. Instalar e Configurar Tema**
- [ ] Instalar Astra
- [ ] Criar child theme
- [ ] Ativar child theme

**2. Customizer - Identidade**
- [ ] Definir título e tagline
- [ ] Adicionar logo (mínimo 200x60px)
- [ ] Adicionar site icon (512x512px)

**3. Customizer - Cores**
- [ ] Definir cor primária
- [ ] Definir cor de links
- [ ] Definir cor de texto
- [ ] Testar contraste (mínimo 4.5:1)

**4. Customizer - Tipografia**
- [ ] Fonte base: 16px
- [ ] Line height: 1.6
- [ ] Headings: peso 700
- [ ] Testar legibilidade no mobile

**5. Header**
- [ ] Layout: Logo + Menu + Button
- [ ] Sticky header ativo
- [ ] Mobile menu: Dropdown
- [ ] Testar em mobile/desktop

**6. Menus**
- [ ] Criar menu principal (6 itens)
- [ ] Adicionar submenu (mín. 2 níveis)
- [ ] Criar menu footer
- [ ] Atribuir às localizações

**7. Footer**
- [ ] Layout: 3 colunas
- [ ] Adicionar widgets relevantes
- [ ] Adicionar copyright
- [ ] Testar responsividade

**8. CSS Customizado**
Adicionar no child theme:
```css
/* Seus estilos mobile-first aqui */
```

**9. Testar Responsividade**
- [ ] Mobile (< 768px)
- [ ] Tablet (768px - 1024px)
- [ ] Desktop (> 1024px)

---

## Material de Apoio

### Documentação Oficial
- **WordPress Theme Handbook:** https://developer.wordpress.org/themes/
- **Astra Documentation:** https://wpastra.com/docs/
- **GeneratePress Docs:** https://docs.generatepress.com/

### Recursos de Temas
- **WordPress.org Themes:** https://wordpress.org/themes/
- **ThemeForest:** https://themeforest.net/ (premium)
- **Elegant Themes:** https://www.elegantthemes.com/

### Ferramentas
- **Theme Check Plugin:** Valida código do tema
- **Query Monitor:** Debug de temas
- **Show Current Template:** Mostra qual template está sendo usado

### Tutoriais
- **WPBeginner:** Tutoriais de customização
- **Astra Academy:** Vídeos do Astra
- **WordPress TV:** Vídeos oficiais

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. Temas controlam aparência e layout do site
2. Astra, GeneratePress e Kadence são ótimas opções mobile-first
3. Customizer permite modificar tema sem código
4. Menus podem ter hierarquia e múltiplas localizações
5. Widgets adicionam funcionalidades em áreas específicas
6. Child themes preservam customizações
7. Sempre testar responsividade em 3 breakpoints

**Próxima aula:** Gutenberg Editor - blocos, padrões e layouts avançados.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Instalar temas via Dashboard e upload
- ✅ Usar o WordPress Customizer
- ✅ Configurar cores, fontes e layout
- ✅ Criar e organizar menus com hierarquia
- ✅ Adicionar widgets em sidebars e footer
- ✅ Criar child theme manualmente
- ✅ Adicionar CSS customizado no child theme
- ✅ Testar responsividade em diferentes dispositivos
- ✅ Escolher tema apropriado para projeto
- ✅ Customizar header e footer mobile