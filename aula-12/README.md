# Aula 12: Gutenberg Editor Avançado

**Carga Horária:** 4 horas  
**Objetivo:** Dominar o editor Gutenberg, criar layouts complexos com blocos e utilizar padrões para desenvolvimento rápido de páginas responsivas.

---

## 1. Gutenberg Profundo (45 min)

### 1.1 Histórico e Evolução

**Gutenberg** foi lançado no WordPress 5.0 (Dezembro 2018)

**Por que Gutenberg?**
- ✅ Editor visual moderno (WYSIWYG)
- ✅ Layouts sem código
- ✅ Responsivo por padrão
- ✅ Blocos reutilizáveis
- ✅ Padrões prontos
- ✅ Full Site Editing (FSE) - futuro

**Evolução:**
```
WordPress 5.0 (2018): Lançamento inicial
WordPress 5.5 (2020): Padrões de blocos
WordPress 5.8 (2021): Template editor
WordPress 5.9 (2022): Full Site Editing
WordPress 6.0+ (2023): Melhorias contínuas
```

### 1.2 Interface do Editor

**Áreas principais:**

```
┌─────────────────────────────────────┐
│ [+] Add Block    [Publish] [⚙️]     │ ← Toolbar
├─────────────────────────────────────┤
│                                     │
│   [Título do Post/Página]          │
│                                     │
│   [+ Bloco]                        │ ← Canvas
│   [+ Bloco]                        │
│   [+ Bloco]                        │
│                                     │
├─────────────────────────────────────┤
│                           Settings  │ ← Sidebar
│                           □ Post    │
│                           □ Block   │
└─────────────────────────────────────┘
```

**Modos de visualização:**
- Visual Editor (padrão)
- Code Editor (HTML)
- Preview (pré-visualização)
- Fullscreen mode

### 1.3 Atalhos de Teclado Essenciais

**Navegação:**
```
/ = Buscar e inserir bloco
Enter = Novo parágrafo
Shift + Enter = Quebra de linha
Ctrl/Cmd + Z = Desfazer
Ctrl/Cmd + Shift + Z = Refazer
Ctrl/Cmd + A = Selecionar tudo
```

**Formatação:**
```
Ctrl/Cmd + B = Negrito
Ctrl/Cmd + I = Itálico
Ctrl/Cmd + K = Inserir link
Ctrl/Cmd + U = Sublinhado
```

**Blocos:**
```
Ctrl/Cmd + Alt + T = Inserir antes
Ctrl/Cmd + Alt + Y = Inserir depois
Ctrl/Cmd + Shift + D = Duplicar bloco
Ctrl/Cmd + Alt + Z = Remover bloco
Alt + F10 = Navegar toolbar
```

**Visualização:**
```
Ctrl/Cmd + Shift + Alt + M = Toggle sidebar
Ctrl/Cmd + Shift + , = Preferências
```

---

## 2. Blocos Nativos Completos (60 min)

### 2.1 Blocos de Texto

**Paragraph (Parágrafo)**
```
Uso: Texto padrão
Configurações:
- Typography: Tamanho, line-height
- Colors: Texto, fundo
- Drop cap: Letra capitular
```

**Heading (Título)**
```
Níveis: H1 - H6
Configurações:
- Level: Escolher H2, H3, etc
- Typography: Fonte, tamanho
- Anchor: ID para links internos
```

**List (Lista)**
```
Tipos: Ordenada, Não ordenada
Configurações:
- Indentação
- Conversão entre tipos
```

**Quote (Citação)**
```
Estilos: Default, Large
Configurações:
- Citation: Autor da citação
- Typography
```

**Code (Código)**
```
Uso: Snippets de código
Mantém formatação
Fonte monoespaçada
```

**Preformatted**
```
Similar ao Code
Mantém espaços e quebras
```

**Pullquote**
```
Citação destacada
Grande e chamativa
```

**Table (Tabela)**
```
Configurações:
- Columns/Rows
- Header/Footer
- Fixed width
- Stripe style
```

**Verse**
```
Para poesia
Mantém formatação
```

### 2.2 Blocos de Mídia

**Image (Imagem)**
```
Opções:
- Upload/Media library/URL
- Alt text (acessibilidade)
- Size: Thumbnail, Medium, Large, Full
- Link to: Media file, Attachment page
- Caption

Estilos:
- Default
- Rounded
- Circle mask
```

**Gallery (Galeria)**
```
Configurações:
- Columns: 1-8
- Crop images
- Link to: Media file, Attachment page
- Caption

Layout:
- Grid
- Masonry
```

**Audio**
```
Suporta: MP3, OGG
Configurações:
- Autoplay
- Loop
- Preload
```

**Video**
```
Suporta: MP4, WebM
Configurações:
- Autoplay
- Loop
- Muted
- Playback controls
```

**File (Arquivo)**
```
Upload de documentos
PDF, DOC, ZIP, etc
Button para download
```

**Cover (Capa)**
```
Imagem/vídeo de fundo
Overlay com texto
Configurações:
- Opacity: 0-100%
- Fixed background
- Repeat background
- Focal point picker
- Minimum height

Uso: Hero sections
```

**Media & Text**
```
Layout: Imagem + Texto lado a lado
Configurações:
- Stack on mobile
- Media position: Left/Right
- Media width: 50%
- Vertical alignment
```

### 2.3 Blocos de Layout

**Columns (Colunas)**
```
Layouts pré-definidos:
- 2 columns (50/50)
- 3 columns (33/33/33)
- 2 columns (66/33)
- 2 columns (33/66)

Configurações por coluna:
- Width: %
- Vertical alignment
- Background color
```

**Group (Grupo)**
```
Agrupa múltiplos blocos
Aplica estilos em conjunto
Configurações:
- Background color
- Padding
- Border radius
```

**Row**
```
Agrupa horizontalmente
Similar às Columns
Mais flexível
```

**Stack**
```
Agrupa verticalmente
Controle de spacing
Alinhamento
```

**Spacer (Espaçador)**
```
Adiciona espaço vertical
Configuração:
- Height: px
- Responsivo
```

**Separator (Separador)**
```
Linha horizontal
Estilos:
- Default
- Wide line
- Dots
```

**Page Break**
```
Quebra de página para impressão
Paginação em posts longos
```

### 2.4 Blocos de Widgets

**Shortcode**
```
Insere shortcodes de plugins
Exemplo: [contact-form-7 id="123"]
```

**Archives (Arquivos)**
```
Lista de arquivos por data
Configurações:
- Display as dropdown
- Show post counts
```

**Calendar (Calendário)**
```
Calendário de posts
Clicável por data
```

**Categories (Categorias)**
```
Lista de categorias
Configurações:
- Show hierarchy
- Show post counts
- Display as dropdown
```

**Latest Posts (Posts Recentes)**
```
Configurações importantes:
- Number of items: 1-100
- Display post content: Excerpt/Full
- Display post date
- Display author
- Display featured image
- Order by: Date, Title
- Layout: List, Grid

Grid columns: 2-6
Image size: Thumbnail, Medium, Large
```

**Latest Comments**
```
Últimos comentários
Display avatar
Date display
```

**RSS**
```
Feed RSS externo
Items to show
Display author/date
```

**Search (Busca)**
```
Campo de busca
Configurações:
- Button text
- Label
- Placeholder
```

**Social Icons**
```
Links para redes sociais
Ícones pré-definidos:
- Facebook, Twitter, Instagram
- LinkedIn, YouTube, etc.

Configurações:
- Size
- Colors
```

**Tag Cloud (Nuvem de Tags)**
```
Tags em tamanhos variados
Show tag counts
```

### 2.5 Blocos de Tema

**Site Logo**
```
Logo do site
Substitui em todo o tema
Width configurável
```

**Site Title**
```
Título do site
Typography configurável
Link para home
```

**Site Tagline**
```
Slogan do site
Typography configurável
```

**Navigation (Menu)**
```
Menu de navegação
Configurações:
- Orientation: Horizontal/Vertical
- Overlay on mobile
- Colors
```

**Post Title**
```
Título do post atual
Context-aware
```

**Post Date**
```
Data de publicação
Format configurável
```

**Post Author**
```
Autor do post
Show avatar
Link to archive
```

**Post Featured Image**
```
Imagem destacada
Dimensions
Link to post
```

**Post Content**
```
Conteúdo completo do post
The Loop
```

---

## 3. Blocos Avançados e Padrões (60 min)

### 3.1 Padrões de Blocos (Block Patterns)

**O que são Padrões?**
- Combinações pré-desenhadas de blocos
- Prontos para inserir
- Customizáveis após inserção
- Mobile-responsive

**Acessar Padrões:**
```
1. Click no [+] para adicionar bloco
2. Tab "Patterns"
3. Categorias:
   - Featured
   - Headers
   - Text
   - Columns
   - Gallery
   - Call to Action
   - Team
   - Testimonials
   - Contact
```

**Exemplo de Padrão - Hero Section:**
```
Cover Block
├── Heading H1: "Bem-vindo"
├── Paragraph: Descrição
└── Buttons
    ├── Primary: "Começar"
    └── Secondary: "Saiba Mais"
```

### 3.2 Blocos Reutilizáveis

**Criar Bloco Reutilizável:**
```
1. Criar e configurar bloco
2. Click nas 3 bolinhas (⋮) do bloco
3. "Add to Reusable blocks"
4. Dar nome: "Header CTA"
5. Save
```

**Usar Bloco Reutilizável:**
```
1. Adicionar bloco (+)
2. Tab "Reusable"
3. Selecionar bloco salvo
4. Inserir
```

**Editar Bloco Reutilizável:**
```
Método 1: Editar instância
- Afeta TODAS as instâncias

Método 2: Converter para regular
- Click ⋮ → "Convert to regular blocks"
- Edição independente
```

**Quando usar:**
- CTAs repetidos
- Banners
- Formulários de contato
- Rodapés de artigos
- Assinaturas

### 3.3 Layouts Responsivos Avançados

**Exemplo 1: Galeria de Serviços (3 Colunas)**
```
Columns (3 colunas 33/33/33)
├── Coluna 1
│   ├── Image (ícone)
│   ├── Heading H3: "Web Design"
│   ├── Paragraph: Descrição
│   └── Button: "Saiba Mais"
├── Coluna 2
│   ├── Image
│   ├── Heading H3: "Apps"
│   ├── Paragraph
│   └── Button
└── Coluna 3
    ├── Image
    ├── Heading H3: "SEO"
    ├── Paragraph
    └── Button

Configuração Mobile:
Stack on mobile: ✓
```

**Exemplo 2: Seção Sobre com Imagem**
```
Media & Text
├── Media (Left): Foto do time
└── Text (Right)
    ├── Heading H2: "Sobre Nós"
    ├── Paragraph: História
    ├── List: Valores
    └── Button: "Nossa Equipe"

Stack on mobile: ✓
```

**Exemplo 3: Testimonials**
```
Columns (2 colunas 50/50)
├── Coluna 1
│   └── Quote
│       ├── Text: Depoimento
│       └── Citation: Nome do cliente
└── Coluna 2
    └── Quote
        ├── Text: Depoimento
        └── Citation: Nome

Mobile: Empilha automaticamente
```

### 3.4 Nested Blocks (Blocos Aninhados)

**Exemplo Complexo:**
```
Group (Container principal)
└── Background: #f5f5f5
    Padding: 60px
    
    ├── Heading H2: "Nossos Serviços"
    │   Text align: center
    │
    ├── Spacer: 30px
    │
    ├── Columns (3 colunas)
    │   ├── Coluna 1
    │   │   └── Group (Card)
    │   │       Background: white
    │   │       Padding: 30px
    │   │       Border radius: 8px
    │   │       ├── Image
    │   │       ├── Heading H3
    │   │       ├── Paragraph
    │   │       └── Button
    │   │
    │   ├── Coluna 2
    │   │   └── Group (Card)
    │   │       [mesma estrutura]
    │   │
    │   └── Coluna 3
    │       └── Group (Card)
    │           [mesma estrutura]
    │
    └── Spacer: 30px
```

---

## 4. CSS Classes e Customização (45 min)

### 4.1 Additional CSS Classes

**Adicionar classe customizada:**
```
1. Selecionar bloco
2. Sidebar → Advanced
3. Additional CSS class(es): "minha-classe"
```

**Exemplo - Botão customizado:**
```html
<!-- No Gutenberg -->
Button block
Additional CSS class: "btn-gradient"
```

```css
/* No Customizer → Additional CSS */
.btn-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-weight: 600;
  transition: transform 0.3s;
}

.btn-gradient:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

### 4.2 Classes Úteis

**Classes para Cards:**
```css
.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
```

**Classes para Seções:**
```css
.section-dark {
  background: #2c3e50;
  color: white;
  padding: 4rem 0;
}

.section-light {
  background: #f8f9fa;
  padding: 4rem 0;
}
```

**Classes para Animações:**
```css
.fade-in {
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.slide-up {
  animation: slideUp 0.6s ease-out;
}

@keyframes slideUp {
  from { 
    transform: translateY(30px); 
    opacity: 0; 
  }
  to { 
    transform: translateY(0); 
    opacity: 1; 
  }
}
```

### 4.3 Anchor IDs para Navegação

**Adicionar ID:**
```
1. Selecionar bloco (ex: Heading)
2. Sidebar → Advanced
3. HTML Anchor: "secao-sobre"
```

**Link para seção:**
```
Menu item URL: #secao-sobre
ou
Button URL: #secao-sobre
```

**Smooth scroll (adicionar no CSS):**
```css
html {
  scroll-behavior: smooth;
}
```

---

## 5. Responsividade no Gutenberg (40 min)

### 5.1 Configurações Responsivas Nativas

**Columns Block:**
```
Desktop: 3 colunas lado a lado
Tablet: 2 colunas (empilha terceira)
Mobile: 1 coluna (empilha todas)

Configuração:
Stack on mobile: ✓ (automático)
```

**Media & Text:**
```
Desktop: Lado a lado
Mobile: Empilhado

Configuração:
Stack on mobile: ✓
Media on: Top/Bottom (mobile)
```

**Cover Block:**
```
Minimum height:
- Desktop: 600px
- Tablet: 400px (responsivo)
- Mobile: 300px (responsivo)

Responsive: Ajusta automaticamente
```

### 5.2 Testando Responsividade

**Método 1: Preview**
```
Toolbar → Preview → Preview in new tab
Redimensionar janela
```

**Método 2: Chrome DevTools**
```
F12 → Toggle Device Toolbar
Testar em vários dispositivos
```

**Método 3: Customizer**
```
Customize → editar página
Ícones na base: Desktop/Tablet/Mobile
```

### 5.3 CSS Mobile-Specific

**Ajustes mobile via CSS:**
```css
/* Desktop */
.wp-block-columns {
  gap: 2rem;
}

.wp-block-column {
  padding: 2rem;
}

/* Tablet */
@media (max-width: 1024px) {
  .wp-block-columns {
    gap: 1.5rem;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .wp-block-columns {
    gap: 1rem;
  }
  
  .wp-block-column {
    padding: 1rem;
  }
  
  /* Esconde elementos em mobile */
  .hide-mobile {
    display: none;
  }
}
```

### 5.4 Touch-Friendly Elements

**Botões mobile-friendly:**
```css
.wp-block-button__link {
  min-height: 44px; /* Touch target */
  padding: 0.875rem 1.5rem;
  font-size: 1rem; /* Mínimo 16px */
}

@media (max-width: 768px) {
  .wp-block-button {
    width: 100%; /* Full width no mobile */
  }
  
  .wp-block-button__link {
    width: 100%;
    text-align: center;
  }
}
```

---

## 6. Exercícios Práticos (40 min)

### Exercício 1: Landing Page Responsiva

**Objetivo:** Criar landing page completa usando apenas Gutenberg

**Estrutura:**

```
[ Cover - Hero Section ]
- Background: Imagem/Gradient
- Height: 100vh
- Heading H1: "Título Principal"
- Paragraph: Descrição
- Buttons: "CTA Primário" + "CTA Secundário"

[ Group - Features Section ]
- Background: #f8f9fa
- Padding: 60px 20px
- Heading H2: "Nossos Recursos"
- Columns (3 colunas)
  - Ícone + Título + Descrição
  
[ Media & Text - About ]
- Image: Left
- Text: Right
- Heading H2: "Sobre Nós"
- Paragraph: Texto
- Button: "Saiba Mais"

[ Group - Testimonials ]
- Background: white
- Columns (2 colunas)
  - Quote + Citation
  
[ Group - CTA Final ]
- Background: Gradient
- Text align: Center
- Heading H2: "Pronto para começar?"
- Button: "Entrar em Contato"
```

**Requisitos:**
- [ ] Totalmente responsivo
- [ ] Smooth scroll entre seções
- [ ] Imagens otimizadas
- [ ] Touch targets ≥ 44px
- [ ] Contraste adequado
- [ ] CSS customizado para cards

### Exercício 2: Blog Post Formatado

**Objetivo:** Criar post de blog rico em formatação

**Elementos para incluir:**
- [ ] Featured image
- [ ] Heading H2 para seções
- [ ] Paragraph com drop cap
- [ ] Quote destacado
- [ ] List (ordenada e não ordenada)
- [ ] Image com caption
- [ ] Gallery (6 imagens)
- [ ] Table (dados comparativos)
- [ ] Video embed
- [ ] Buttons de compartilhamento

**Teste:**
- [ ] Legível em mobile
- [ ] Imagens responsivas
- [ ] Tabela scrollável em mobile

### Exercício 3: Bloco Reutilizável - CTA

**Objetivo:** Criar CTA reutilizável

**Estrutura:**
```
Group
├── Background: Gradient
├── Padding: 40px
├── Border radius: 8px
└── Content:
    ├── Heading H3: "Newsletter"
    ├── Paragraph: "Receba novidades"
    └── Button: "Inscrever-se"
```

**Salvar como:** "CTA Newsletter"

**Usar em:**
- [ ] Sidebar de posts
- [ ] Footer de páginas
- [ ] Entre conteúdo de posts

---

## 7. Plugins para Gutenberg (20 min)

### 7.1 Blocos Extras

**GenerateBlocks** (Gratuito)
```
Blocos leves e rápidos:
- Container
- Grid
- Headline
- Button
- Image

Performance otimizada
Código limpo
```

**Kadence Blocks** (Gratuito)
```
30+ blocos profissionais:
- Advanced heading
- Row layout
- Icon list
- Countdown
- Testimonials
- Accordion

Design system integrado
```

**Stackable** (Gratuito/Premium)
```
Blocos de design:
- Feature grid
- Team member
- Call to action
- Pricing table

Templates prontos
```

### 7.2 Melhorias de Interface

**EditorsKit** (Gratuito)
```
Ferramentas adicionais:
- Text highlight colors
- Markdown support
- Writing statistics
- Custom block visibility
```

**Block Options** (Gratuito)
```
Opções extras:
- Block animations
- Responsive visibility
- Custom CSS per block
```

---

## Material de Apoio

### Documentação
- **Block Editor Handbook:** https://developer.wordpress.org/block-editor/
- **Gutenberg GitHub:** https://github.com/WordPress/gutenberg
- **Block Pattern Directory:** https://wordpress.org/patterns/

### Tutoriais
- **WordPress TV - Gutenberg:** https://wordpress.tv/tag/gutenberg/
- **Learn WordPress:** https://learn.wordpress.org/
- **WPBeginner Gutenberg:** https://www.wpbeginner.com/category/gutenberg/

### Ferramentas
- **Pattern Explorer:** https://wordpress.org/patterns/
- **Block Library:** No próprio Gutenberg
- **Gutenberg Times:** https://gutenbergtimes.com/

---