# Aula 13: Page Builders Mobile First

**Carga Horária:** 4 horas  
**Objetivo:** Dominar o Elementor (versão gratuita) para criar páginas responsivas complexas com abordagem mobile-first, sem código.

---

## 1. Introdução aos Page Builders (30 min)

### 1.1 O que são Page Builders?

**Page Builder** = Construtor visual de páginas arrastar-e-soltar (drag-and-drop)

**Diferença: Gutenberg vs Page Builder**

| Aspecto | Gutenberg | Page Builder (Elementor) |
|---------|-----------|--------------------------|
| Filosofia | Editor de blocos | Canvas visual |
| Liberdade | Estruturada | Total |
| Performance | Mais leve | Mais pesado |
| Curva de aprendizado | Fácil | Média |
| Customização | Limitada | Extensa |
| Mobile editing | Básico | Avançado |

### 1.2 Principais Page Builders

**Elementor** ⭐⭐⭐⭐⭐ (Usaremos este)
```
Versão: Free + Pro
Usuários: 5+ milhões
Performance: Boa
Mobile editing: Excelente
Curva de aprendizado: Fácil
```

**Beaver Builder** ⭐⭐⭐⭐
```
Versão: Lite + Premium
Performance: Excelente
Código limpo: Sim
Preço: Alto
```

**Divi Builder** ⭐⭐⭐⭐
```
Licença: Elegant Themes
Visual Builder: Sim
Comunidade: Grande
Learning curve: Média
```

**WPBakery** ⭐⭐⭐
```
Antigo: Visual Composer
Backend editor
Menos intuitivo
Ainda popular em temas premium
```

### 1.3 Por que Elementor?

**Vantagens:**
- ✅ Versão gratuita completa
- ✅ Interface intuitiva
- ✅ Live editing
- ✅ Responsivo por dispositivo
- ✅ Grande comunidade
- ✅ Widgets extensos
- ✅ Templates gratuitos
- ✅ Performance aceitável

**Desvantagens:**
- ❌ Código extra (div soup)
- ❌ Algumas features só no Pro
- ❌ Dependência do plugin
- ❌ Pode ser pesado se mal usado

---

## 2. Instalação e Configuração do Elementor (30 min)

### 2.1 Instalação

**Passo a passo:**
```
1. Plugins → Add New
2. Buscar: "Elementor"
3. Install "Elementor Website Builder"
4. Activate
```

**Primeira configuração:**
```
1. Elementor → Settings
2. General:
   - Editor Loader Method: Enable
   - Edit with Elementor button: Yes
   
3. Advanced:
   - CSS Print Method: Internal Embedding
   - Disable Default Colors: No
   - Disable Default Fonts: No
```

### 2.2 Configurações Importantes

**Performance Settings:**
```
Elementor → Settings → Advanced

CSS Print Method: Internal Embedding (melhor performance)
Google Fonts: Enable (ou disable se usar fonts locais)
Font Display: Swap
Improved Asset Loading: Yes
```

**Responsive Settings:**
```
Elementor → Settings → General

Mobile Breakpoint: 767px
Tablet Breakpoint: 1024px

Ajuste conforme necessidade do projeto
```

### 2.3 Interface do Elementor

**Acessar o Editor:**
```
Método 1: Editar página → "Edit with Elementor"
Método 2: Na listagem de páginas → "Edit with Elementor"
Método 3: Admin bar → "Edit with Elementor"
```

**Áreas da Interface:**

```
┌─────────────────────────────────────────────────┐
│ [☰] Elementor    [💻][📱] [⚙️] Publish [×]    │ ← Top bar
├──────────┬──────────────────────────────────────┤
│          │                                      │
│ Elements │         Canvas de edição             │
│          │                                      │
│ [+] Add  │     [+ Arraste widget aqui]          │
│          │                                      │
│ Widgets: │     [+ Adicionar seção]              │
│ • Heading│                                      │
│ • Image  │                                      │
│ • Text   │                                      │
│ • Button │                                      │
│ ...      │                                      │
│          │                                      │
│ Settings │                                      │
└──────────┴──────────────────────────────────────┘
```

**Modos de visualização:**
- 📱 Mobile (começar aqui - Mobile First!)
- 💻 Tablet
- 💻 Desktop

**Navegador:**
```
Clique no ícone ⚙️ para:
- Page Settings
- Navigator (estrutura do documento)
- History (histórico de alterações)
```

---

## 3. Conceitos Fundamentais do Elementor (45 min)

### 3.1 Estrutura: Section → Column → Widget

**Hierarquia:**
```
Section (Seção)
└── Column (Coluna)
    └── Widget (Elemento)
```

**Exemplo prático:**
```
Section [Full width]
├── Column 1 (50%)
│   ├── Heading: "Bem-vindo"
│   ├── Text Editor: Descrição
│   └── Button: "Saiba Mais"
└── Column 2 (50%)
    └── Image: Foto ilustrativa
```

### 3.2 Sections (Seções)

**Tipos de Section:**

**1. Full Width (Largura Total)**
```
Largura: 100% da tela
Uso: Heroes, banners
Conteúdo: Pode ter container interno
```

**2. Boxed (Em caixa)**
```
Largura: Max 1140px (padrão)
Centralizado
Uso: Conteúdo padrão
```

**Adicionar Section:**
```
1. Click no botão [+] cinza
2. Escolher estrutura de colunas:
   - 1 coluna
   - 2 colunas (50/50)
   - 3 colunas (33/33/33)
   - 2/3 + 1/3
   - Personalizado
```

**Configurações de Section:**
```
Layout:
- Content Width: Boxed/Full Width
- Height: Default/Fit to screen/Min height
- Column Gap: Padding entre colunas
- HTML Tag: section/div/header/footer

Style:
- Background: Color/Gradient/Image/Video
- Background Overlay
- Border
- Box Shadow
- Shape Divider (separadores decorativos)

Advanced:
- Margin/Padding
- Z-Index
- CSS Classes
- Custom CSS (Pro)
```

### 3.3 Columns (Colunas)

**Estruturas pré-definidas:**
```
[____________________]     1 coluna (100%)
[_________][_________]     2 colunas (50/50)
[_____][_____][_____]      3 colunas (33/33/33)
[____________][______]      2 colunas (66/33)
[______][____________]      2 colunas (33/66)
[___][___][___][___]        4 colunas (25/25/25/25)
```

**Ajustar largura:**
```
1. Click na coluna
2. Layout → Column Width: % ou px
3. Ou arraste a borda entre colunas
```

**Configurações importantes:**
```
Layout:
- Column Width: % personalizado
- Vertical Align: Top/Middle/Bottom

Responsive:
- Order (mobile): Reordenar colunas
- Width (tablet/mobile): Ajustar largura

Advanced:
- Padding personalizado por dispositivo
```

### 3.4 Widgets (Elementos)

**Categorias de Widgets Gratuitos:**

**Basic (Básicos):**
- Heading (Título)
- Image (Imagem)
- Text Editor (Texto)
- Video (Vídeo)
- Button (Botão)
- Divider (Divisor)
- Spacer (Espaçador)
- Google Maps
- Icon
- Image Box
- Icon Box
- Star Rating
- Image Carousel
- Image Gallery
- Icon List
- Counter
- Progress Bar
- Testimonial
- Tabs
- Accordion
- Toggle
- Social Icons
- Alert
- Audio
- Shortcode
- HTML
- Menu Anchor

**WordPress (Integração WP):**
- Sidebar
- Archives
- Search
- Calendar
- Categories

**Arrastar Widget:**
```
1. Painel esquerdo → Elements
2. Buscar ou selecionar widget
3. Arrastar para área desejada
4. Configurar no painel
```

---

## 4. Criando Layouts Responsivos (60 min)

### 4.1 Mobile-First Workflow no Elementor

**Abordagem Mobile First (CORRETA):**

**Passo 1: Começar no Mobile 📱**
```
- Clicar no ícone 📱 Mobile PRIMEIRO
- Criar estrutura básica
- Adicionar conteúdo essencial
- Configurar estilos base
- Tamanhos de fonte mínimo 16px
- Touch targets mínimo 44px
- Espaçamentos adequados para mobile
```

**Passo 2: Expandir para Tablet 💻**
```
- Clicar ícone Tablet
- Adicionar:
  • Múltiplas colunas (se necessário)
  • Elementos adicionais
  • Ajustar tamanhos de fonte
  • Aumentar espaçamentos
  • Layouts lado a lado
```

**Passo 3: Otimizar para Desktop 💻**
```
- Clicar ícone Desktop
- Refinar:
  • Layouts mais complexos
  • Maior densidade de informação
  • Efeitos hover
  • Elementos decorativos
  • Espaçamentos generosos
```

**⚠️ IMPORTANTE:** Sempre comece construindo no mobile, depois expanda para telas maiores!

### 4.2 Exemplo Prático: Hero Section Responsiva (Mobile First)

**⚠️ IMPORTANTE: Começar SEMPRE no modo Mobile! 📱**

**Mobile PRIMEIRO (< 768px):**
```
Section [Full Width | Min Height: 60vh]
├── Background: Imagem + Overlay 60%
└── Column 1 (100%)
    ├── Heading: "Desenvolva Sites Mobile First"
    │   • Font Size: 28px (mínimo legível)
    │   • Line Height: 1.2
    │   • Color: White
    │   • Margin Bottom: 20px
    ├── Text: Descrição curta e objetiva
    │   • Font Size: 16px (mínimo - não dá zoom no iOS)
    │   • Line Height: 1.6
    │   • Max Width: 100%
    │   • Margin Bottom: 30px
    └── Button: "Começar Agora"
        • Width: 100% (full width mobile)
        • Padding: 15px 20px
        • Min Height: 44px (touch target)
        • Font Size: 16px
```

**Tablet (768px - 1024px) - EXPANDIR:**
```
Melhorias:
- Section Height: 80vh (mais espaço)
- Heading: 36px (maior)
- Text: 18px (mais confortável)
- Padding Section: 60px 40px (mais espaçoso)
- Button: Width auto (não precisa ser full width)
- Adicionar segundo botão: "Saiba Mais"
```

**Desktop (1200px+) - OTIMIZAR:**
```
Layout final:
- Section Height: 100vh (full screen)
- Dividir em 2 colunas:
  • Column 1 (60%): Todo o conteúdo
  • Column 2 (40%): Imagem/mockup
- Heading: 48px (impacto maior)
- Text: 20px (muito legível)
- Padding Section: 80px 60px (generoso)
- Adicionar elementos decorativos
```

**Configuração passo a passo (Mobile First CORRETO):**

```
1. MOBILE PRIMEIRO 📱 (CLICAR NO ÍCONE MOBILE):
   
   Section Settings:
   - Layout → Content Width: Full Width
   - Layout → Height: Min Height → 60vh
   - Layout → Column Gap: No Gap
   - Style → Background → Type: Classic
   - Style → Background → Image: Upload hero.jpg
   - Style → Background → Position: Center Center
   - Style → Background → Size: Cover
   - Style → Background Overlay → Background Type: Classic
   - Style → Background Overlay → Color: #000000
   - Style → Background Overlay → Opacity: 60%
   - Advanced → Padding: 40px 15px (mobile spacing)
   
   Column 1 (única coluna):
   - Layout → Width: 100%
   - Advanced → Padding: 20px 0
   
   Heading Widget:
   - Content → Title: "Desenvolva Sites Mobile First"
   - Content → HTML Tag: H1
   - Style → Text Color: #FFFFFF
   - Style → Typography → Family: Default
   - Style → Typography → Size: 28px
   - Style → Typography → Weight: 700
   - Style → Typography → Line Height: 1.2
   - Advanced → Margin: 0 0 20px 0
   
   Text Editor Widget:
   - Content: "Aprenda a criar sites responsivos começando pelo mobile."
   - Style → Text Color: #FFFFFF
   - Style → Typography → Size: 16px (MÍNIMO!)
   - Style → Typography → Line Height: 1.6
   - Advanced → Margin: 0 0 30px 0
   
   Button Widget:
   - Content → Text: "Começar Agora"
   - Content → Link: #contato
   - Style → Typography → Size: 16px
   - Style → Typography → Weight: 600
   - Style → Button Type: Fill
   - Style → Text Color: #FFFFFF
   - Style → Background Color: #007BFF
   - Style → Border Radius: 4px
   - Style → Padding: 15px 20px
   - Layout → Width: 100% (FULL WIDTH MOBILE)
   - Layout → Alignment: Stretch
   - Advanced → Custom Height: 44px (touch target mínimo)

2. TABLET 💻 (AGORA clicar no ícone Tablet):
   
   Section:
   - Layout → Height: Min Height → 80vh (aumenta)
   - Advanced → Padding: 60px 40px (mais espaço)
   
   Heading:
   - Style → Typography → Size: 36px (maior)
   
   Text Editor:
   - Style → Typography → Size: 18px (mais confortável)
   
   Button (primeiro):
   - Layout → Width: Auto (não precisa ser full width)
   - Style → Padding: 15px 30px
   
   Button 2 (ADICIONAR novo botão):
   - Content → Text: "Saiba Mais"
   - Style → Button Type: Outline
   - Style → Border Width: 2px
   - Layout → Width: Auto
   - Advanced → Margin: 0 0 0 15px (espaço entre botões)

3. DESKTOP 💻 (Por último, clicar no ícone Desktop):
   
   Section:
   - Layout → Height: Min Height → 100vh (full screen)
   - Advanced → Padding: 80px 60px
   
   ESTRUTURA: Adicionar segunda coluna
   - Right-click na Column → Add Column
   - Column 1: Width 60%
   - Column 2: Width 40%
   
   Column 1 (mantém o conteúdo):
   - Advanced → Padding: 60px 40px 60px 0
   
   Heading:
   - Style → Typography → Size: 48px (máximo impacto)
   
   Text Editor:
   - Style → Typography → Size: 20px
   - Advanced → Max Width: 500px
   
   Column 2 (NOVA):
   - Adicionar Image Widget
   - Upload mockup de celular
   - Style → Width: 100%
   - Advanced → Padding: 40px
   - Animation: Fade In (opcional)
```

**✅ FLUXO CORRETO:**
1. 📱 Mobile: Conteúdo essencial, simples, legível
2. 💻 Tablet: Adiciona elementos, melhora espaçamento
3. 💻 Desktop: Layout sofisticado, elementos extras

### 4.3 Reverse Column Order (Reordenar Colunas)

**Problema comum:**
```
Desktop: [Texto] [Imagem]
Mobile:  [Texto]
         [Imagem]  ← Queremos imagem primeiro!
```

**Solução:**
```
Mobile → Column Settings → Responsive → Order: -1
```

**Exemplo com 3 colunas:**
```
Desktop: [A] [B] [C]

Mobile (reordenado):
Column A: Order 3
Column B: Order 2  
Column C: Order 1

Resultado: [C] [B] [A]
```

### 4.4 Hide on Mobile/Tablet

**Controlar visibilidade:**
```
Widget/Column/Section → Responsive → Hide On:
☐ Mobile
☐ Tablet  
☐ Desktop
```

**Casos de uso:**
- Esconder imagens decorativas no mobile
- Mostrar conteúdo diferente por dispositivo
- Simplificar interface mobile

**Exemplo:**
```
Desktop: Logo grande + Tagline + Menu completo
Tablet:  Logo médio + Menu simplificado
Mobile:  Logo pequeno + Hamburger menu
```

---

## 5. Widgets Essenciais Mobile First (50 min)

### 5.1 Heading Widget (Mobile First)

**Mobile 📱:**
```
Content:
- Title: "Nossos Serviços"
- HTML Tag: H2

Style:
- Text Color: #333333
- Typography:
  • Size: 24px (legível)
  • Weight: 700
  • Line Height: 1.3
- Text Alignment: Center

Advanced:
- Margin: 0 0 20px 0
```

**Tablet 💻:**
```
Style → Typography:
- Size: 32px (maior)

Advanced:
- Margin: 0 0 30px 0
```

**Desktop 💻:**
```
Style → Typography:
- Size: 40px (impacto)
- Letter Spacing: -1px (ajuste fino)

Advanced:
- Margin: 0 0 40px 0
```

### 5.2 Image Widget (Mobile First)

**Mobile 📱:**
```
Content:
- Choose Image: produto.jpg
- Image Size: Medium (768px)
- Alt Text: "Descrição do produto"
- Link: Custom URL → /produto/

Style:
- Width: 100%
- Height: Auto
- Object Fit: Cover
- Border Radius: 8px

Advanced:
- Margin: 0 0 20px 0
```

**Tablet/Desktop:**
```
Content:
- Image Size: Large (1024px) ou Full

Style:
- Width: 80% (não precisa 100%)
- Add hover animation (opcional)
```

### 5.3 Button Widget (Mobile First)

**Mobile 📱:**
```
Content:
- Text: "Comprar Agora"
- Link: /checkout/
- Icon: Shopping Cart (opcional)

Layout:
- Width: 100% (full width mobile)
- Alignment: Stretch

Style:
- Typography:
  • Size: 16px (mínimo)
  • Weight: 600
- Button:
  • Text Color: #FFFFFF
  • Background: #007BFF
  • Border Radius: 4px
  • Padding: 15px 20px

Advanced:
- Custom Height: 44px (touch target)
- Margin: 20px 0
```

**Tablet 💻:**
```
Layout:
- Width: Auto (não precisa full)

Style:
- Padding: 15px 40px (mais largo)
```

**Desktop 💻:**
```
Style:
- Add hover effects:
  • Hover Background: #0056b3
  • Hover Transform: translateY(-2px)
  • Transition: 0.3s
```

### 5.4 Text Editor Widget (Mobile First)

**Mobile 📱:**
```
Content:
- Texto do parágrafo (conciso!)

Style:
- Text Color: #333333
- Typography:
  • Size: 16px (mínimo legível)
  • Line Height: 1.6 (boa legibilidade)
  • Letter Spacing: 0px

Advanced:
- Max Width: 100%
- Padding: 0 15px
- Margin: 0 0 20px 0
```

**Tablet/Desktop:**
```
Style → Typography:
- Size: 18px (desktop) - mais confortável

Advanced:
- Max Width: 700px (linha ideal 65ch)
- Padding: 0
- Margin: 0 auto 30px (centralizado)
```

### 5.5 Icon Box Widget (Mobile First)

**Mobile 📱:**
```
Content:
- Icon: Escolher ícone Font Awesome
- Title: "Título do Serviço"
- Description: Texto breve

Layout:
- Position: Top (ícone acima)

Style - Icon:
- Primary Color: #007BFF
- Size: 50px
- Padding: 20px
- Background: #F0F8FF
- Border Radius: 50% (circular)

Style - Title:
- Color: #333
- Typography: 20px, 700

Style - Description:
- Color: #666
- Typography: 16px, 1.6 line-height

Advanced:
- Text Align: Center
- Padding: 30px 20px
- Background: #FFFFFF
- Border Radius: 8px
- Box Shadow: 0 2px 8px rgba(0,0,0,0.1)
```

**Desktop:**
```
Layout:
- Position: Left (ícone ao lado)

Advanced:
- Text Align: Left
- Padding: 40px
```

### 5.6 Image Carousel (Mobile First)

**Mobile 📱:**
```
Content:
- Add Images: 5-8 imagens
- Image Size: Medium

Layout:
- Slides to Show: 1 (um por vez mobile)
- Slides to Scroll: 1
- Autoplay: Yes
- Autoplay Speed: 3000ms
- Infinite Loop: Yes
- Navigation: Dots (setas podem ser difíceis touch)

Style:
- Image:
  • Border Radius: 8px
  • Height: 250px
  • Object Fit: Cover

Advanced:
- Margin: 20px 0
```

**Tablet 💻:**
```
Layout:
- Slides to Show: 2 (dois por vez)
```

**Desktop 💻:**
```
Layout:
- Slides to Show: 3 ou 4
- Navigation: Arrows (setas grandes)
```

### 5.7 Accordion Widget (Mobile First)

**Perfeito para mobile - economiza espaço!**

**Mobile 📱:**
```
Content:
- Add Items:
  • Title: "Pergunta Frequente 1"
  • Content: Resposta detalhada
  
Style - Title:
- Background: #F8F9FA
- Color: #333
- Typography: 16px, 600
- Padding: 15px 20px
- Border: 1px solid #DEE2E6
- Border Radius: 4px

Style - Content:
- Background: #FFFFFF
- Color: #666
- Typography: 16px, 1.6
- Padding: 20px

Advanced:
- Icon: Plus/Minus
- Icon Position: Right
- Open first item: Yes
```

**Tablet/Desktop:**
```
Style:
- Title Padding: 20px 30px
- Content Padding: 25px 30px
```

---

## 6. Templates e Blocos Prontos (30 min)

### 6.1 Elementor Template Library

**Acessar:**
```
1. No editor → Pasta icon (folder)
2. Ou no painel esquerdo → Template icon
```

**Categorias:**
- Pages (páginas completas)
- Blocks (seções individuais)
- My Templates (salvos)

**Filtros:**
- Free (gratuitos)
- Pro (necessita versão paga)
- Type: Landing, Business, Portfolio, etc.

### 6.2 Inserir Template

**Passo a passo:**
```
1. Folder icon → Templates Library
2. Browse: Pages ou Blocks
3. Preview do template
4. Insert (substitui tudo) ou Block (adiciona seção)
5. Customizar conteúdo
6. IMPORTANTE: Testar responsividade 📱
```

### 6.3 Salvar Template Próprio

**Salvar seção:**
```
1. Right-click na Section
2. Save as Template
3. Nome: "Hero Homepage"
4. Save
```

**Salvar página completa:**
```
1. Bottom left → Save Template icon
2. Nome: "Landing Page Produto"
3. Save
```

**Usar template salvo:**
```
1. Folder icon → My Templates
2. Insert
```

### 6.4 Export/Import Templates

**Exportar:**
```
1. Templates → Saved Templates
2. Click no template
3. Export
4. Baixa arquivo .json
```

**Importar:**
```
1. Templates → Saved Templates
2. Import Templates
3. Upload .json
4. Import Now
```

---

## 7. Performance e Boas Práticas (25 min)

### 7.1 Otimização de Performance

**❌ Evite:**
```
- Muitas seções (> 10)
- Widgets desnecessários
- Imagens não otimizadas
- Muitas Google Fonts
- Animações excessivas
- CSS customizado inline excessivo
```

**✅ Faça:**
```
- Otimize imagens antes do upload (< 200KB)
- Use lazy load (nativo do Elementor)
- Minimize uso de widgets pesados (sliders, maps)
- Reutilize blocos salvos
- Use apenas 1-2 fontes Google
- Ative cache (plugin)
```

### 7.2 Imagens no Elementor

**Tamanhos recomendados:**
```
Mobile:  max 800px width
Tablet:  max 1200px width
Desktop: max 1920px width
```

**Upload otimizado:**
```
1. Redimensionar antes de fazer upload
2. Comprimir (TinyPNG.com)
3. Formato: JPG para fotos, PNG para logos
4. Usar WebP se possível (plugin)
```

**Lazy Load:**
```
Automaticamente ativo no Elementor Free
Imagens carregam apenas quando visíveis
```

### 7.3 Checklist Mobile First

**Antes de publicar:**
```
☐ Testar em Mobile 📱 PRIMEIRO
☐ Todos textos mínimo 16px
☐ Botões mínimo 44x44px touch target
☐ Espaçamento adequado entre elementos clicáveis
☐ Imagens responsivas e otimizadas
☐ Nenhum conteúdo cortado no mobile
☐ Menus funcionam corretamente
☐ Formulários são usáveis
☐ Testar em Tablet
☐ Testar em Desktop
☐ Testar performance (PageSpeed Insights)
```

---

## 8. Exercício Prático 1: Landing Page Mobile First (Guiado) (40 min)

### Objetivo
Criar uma landing page completa de produto começando pelo mobile, seguindo abordagem Mobile First.

### Estrutura da Landing Page

```
1. Hero Section (CTA principal)
2. Features (3 benefícios)
3. Sobre o Produto (texto + imagem)
4. Depoimentos (2 testemunhos)
5. CTA Final
```

### Roteiro Passo a Passo

#### ETAPA 1: Configuração Inicial (5 min)

```
1. Pages → Add New
2. Título: "Landing Page Produto"
3. Edit with Elementor
4. 📱 CLICAR NO ÍCONE MOBILE (começar mobile!)
```

#### ETAPA 2: Hero Section - Mobile 📱 (10 min)

```
1. Adicionar Section:
   - Click no [+]
   - Escolher: 1 coluna
   
2. Section Settings → Layout:
   - Content Width: Full Width
   - Height: Fit To Screen
   - Column Gap: No Gap
   
3. Section Settings → Style → Background:
   - Type: Gradient
   - Color 1: #667eea
   - Location: 0%
   - Color 2: #764ba2
   - Location: 100%
   - Angle: 135deg
   
4. Section Settings → Advanced:
   - Padding: 40px 20px
   
5. Adicionar Heading Widget:
   Arrastar para a coluna
   Content:
   - Title: "Transforme Seu Negócio"
   - HTML Tag: H1
   
   Style:
   - Text Color: #FFFFFF
   - Typography:
     • Size: 28px
     • Weight: 700
     • Line Height: 1.2em
     • Text Align: Center
   
   Advanced:
   - Margin: 0 0 20px 0
   
6. Adicionar Text Editor Widget:
   Content:
   - Text: "Solução completa para aumentar suas vendas online em 30 dias ou seu dinheiro de volta."
   
   Style:
   - Text Color: #FFFFFF
   - Typography:
     • Size: 16px (MÍNIMO!)
     • Line Height: 1.6em
     • Text Align: Center
   
   Advanced:
   - Margin: 0 0 30px 0
   
7. Adicionar Button Widget:
   Content:
   - Text: "Começar Agora"
   - Link: #contato
   
   Layout:
   - Width: 100% (full width mobile)
   - Alignment: Stretch
   
   Style:
   - Typography:
     • Size: 16px
     • Weight: 600
   - Button:
     • Text Color: #667eea
     • Background: #FFFFFF
     • Border Radius: 50px
     • Padding: 15px 30px
   
   Advanced:
   - Custom Height: 48px (touch target)
   - Margin: 0 0 15px 0
   
8. Adicionar segundo Button Widget:
   Content:
   - Text: "Ver Demo"
   - Link: #demo
   
   Layout:
   - Width: 100%
   
   Style:
   - Button Type: Outline (contorno)
   - Border:
     • Width: 2px
     • Color: #FFFFFF
   - Text Color: #FFFFFF
   - Background: Transparent
   - Padding: 15px 30px
   - Border Radius: 50px
   
   Advanced:
   - Custom Height: 48px
```

#### ETAPA 3: Hero Section - Expandir para Tablet 💻 (3 min)

```
1. Clicar no ícone Tablet 💻
   
2. Section Advanced:
   - Padding: 60px 40px
   
3. Heading:
   - Style → Typography → Size: 36px
   
4. Text Editor:
   - Style → Typography → Size: 18px
   
5. Buttons:
   - Layout → Width: Auto (não precisa full)
   - Lado a lado automaticamente
```

#### ETAPA 4: Hero Section - Desktop 💻 (2 min)

```
1. Clicar no ícone Desktop 💻
   
2. Section Advanced:
   - Padding: 80px 60px
   
3. Heading:
   - Style → Typography → Size: 48px
   
4. Text Editor:
   - Style → Typography → Size: 20px
   - Advanced → Max Width: 600px
```

#### ETAPA 5: Features Section - Mobile 📱 (15 min)

```
1. Voltar para Mobile 📱
   
2. Adicionar nova Section:
   - 1 coluna
   
3. Section Settings → Advanced:
   - Padding: 40px 20px
   - Background Color: #F8F9FA
   
4. Adicionar Heading:
   - Title: "Por Que Escolher Nosso Produto?"
   - Tag: H2
   - Size: 24px
   - Text Align: Center
   - Color: #333
   - Margin: 0 0 30px 0
   
5. Adicionar Icon Box Widget #1:
   Content:
   - Icon: Escolher ícone (ex: fa-rocket)
   - Title: "Rápido"
   - Description: "Implementação em 24 horas"
   
   Layout:
   - Icon Position: Top
   
   Style → Icon:
   - Primary Color: #667eea
   - Size: 40px
   - Padding: 15px
   - Background: #FFFFFF
   - Border Radius: 50%
   
   Style → Title:
   - Color: #333
   - Typography: 18px, 700
   - Margin: 15px 0 10px 0
   
   Style → Description:
   - Color: #666
   - Typography: 16px, 1.6
   
   Advanced:
   - Text Align: Center
   - Padding: 30px 20px
   - Background: #FFFFFF
   - Border Radius: 8px
   - Margin: 0 0 20px 0
   - Box Shadow: 0 2px 8px rgba(0,0,0,0.1)
   
6. Duplicar Icon Box 2 vezes:
   - Right-click no Icon Box → Duplicate
   - Duplicate novamente
   
7. Editar Icon Box #2:
   - Icon: fa-shield
   - Title: "Seguro"
   - Description: "Criptografia de ponta"
   
8. Editar Icon Box #3:
   - Icon: fa-headset
   - Title: "Suporte 24/7"
   - Description: "Atendimento sempre disponível"
```

#### ETAPA 6: Features - Tablet/Desktop (5 min)

```
1. Clicar Tablet 💻:
   - Section → Right-click → Edit Section
   - Column: Add Column (adicionar mais 2 colunas)
   - Arrastar Icon Box #2 para Column 2
   - Arrastar Icon Box #3 para Column 3
   - Resultado: 3 colunas lado a lado
   - Section Padding: 60px 40px
   
2. Desktop 💻:
   - Section Padding: 80px 60px
   - Cada Icon Box:
     • Padding: 40px 30px
```

#### ETAPA 7: Sobre o Produto - Mobile 📱 (10 min)

```
1. Voltar para Mobile 📱
   
2. Adicionar nova Section (1 coluna):
   - Padding: 40px 20px
   
3. Adicionar Image Widget:
   Content:
   - Upload imagem do produto (otimizada!)
   - Alt Text: "Produto em ação"
   
   Style:
   - Width: 100%
   - Border Radius: 8px
   
   Advanced:
   - Margin: 0 0 30px 0
   
4. Adicionar Heading:
   - Title: "Feito Para Você"
   - Tag: H2
   - Size: 24px
   - Color: #333
   - Margin: 0 0 20px 0
   
5. Adicionar Text Editor:
   - Content: 2-3 parágrafos sobre o produto
   - Typography: 16px, 1.6 line-height
   - Color: #666
   
6. Adicionar Button:
   - Text: "Saiba Mais"
   - Width: 100%
   - Background: #667eea
   - Color: white
   - Padding: 15px
   - Height: 48px
```

#### ETAPA 8: Sobre - Tablet/Desktop (3 min)

```
1. Tablet 💻:
   - Section: Add Column
   - Arrastar Imagem para Column 1
   - Manter textos em Column 2
   - Column 1 Width: 40%
   - Column 2 Width: 60%
   - Vertical Align: Middle
   
2. Desktop 💻:
   - Section Padding: 80px 60px
   - Column 1: 50%
   - Column 2: 50%
   - Button Width: Auto
```

#### ETAPA 9: Depoimentos - Mobile 📱 (8 min)

```
1. Voltar para Mobile 📱
   
2. Adicionar Section:
   - Background: Linear Gradient (suave)
   - Padding: 40px 20px
   
3. Adicionar Heading:
   - Title: "O Que Dizem Nossos Clientes"
   - Tag: H2
   - Size: 24px
   - Text Align: Center
   - Color: #333
   - Margin: 0 0 30px 0
   
4. Adicionar Testimonial Widget:
   Content:
   - Content: "Este produto transformou meu negócio..."
   - Name: "Maria Silva"
   - Title: "CEO, Empresa X"
   - Image: Upload foto cliente (circular)
   
   Style:
   - Content Typography: 16px, 1.6
   - Content Color: #666
   - Name Typography: 16px, 700
   - Name Color: #333
   - Title Typography: 14px
   - Title Color: #999
   - Alignment: Center
   
   Advanced:
   - Background: white
   - Padding: 30px 20px
   - Border Radius: 8px
   - Margin: 0 0 20px 0
   - Box Shadow: 0 2px 8px rgba(0,0,0,0.1)
   
5. Duplicate Testimonial:
   - Editar com outro depoimento
```

#### ETAPA 10: Depoimentos - Tablet/Desktop (2 min)

```
1. Tablet/Desktop:
   - Section: Add Column
   - Arrastar Testimonial 2 para Column 2
   - 2 colunas lado a lado (50/50)
   - Section Padding: 60px 40px (tablet)
   - Section Padding: 80px 60px (desktop)
```

#### ETAPA 11: CTA Final - Mobile 📱 (5 min)

```
1. Mobile 📱
   
2. Adicionar Section:
   - Background: Gradient (igual hero)
   - Padding: 60px 20px
   
3. Adicionar Heading:
   - Title: "Pronto Para Começar?"
   - Tag: H2
   - Size: 28px
   - Color: white
   - Text Align: Center
   - Margin: 0 0 20px 0
   
4. Adicionar Text Editor:
   - Content: "Comece hoje mesmo e veja resultados em 30 dias."
   - Size: 16px
   - Color: white
   - Text Align: Center
   - Margin: 0 0 30px 0
   
5. Adicionar Button:
   - Text: "Começar Agora Grátis"
   - Width: 100%
   - Background: white
   - Color: #667eea
   - Padding: 15px
   - Height: 48px
   - Border Radius: 50px
```

#### ETAPA 12: CTA Final - Tablet/Desktop (2 min)

```
1. Tablet 💻:
   - Section Padding: 80px 40px
   - Heading Size: 36px
   - Text Size: 18px
   - Button Width: Auto
   
2. Desktop 💻:
   - Section Padding: 100px 60px
   - Heading Size: 40px
   - Text Size: 20px
```

#### ETAPA 13: Revisão Final (5 min)

```
1. Mobile 📱:
   ☐ Todos os textos legíveis (mín 16px)
   ☐ Botões touch-friendly (mín 44px)
   ☐ Espaçamento adequado
   ☐ Imagens não cortadas
   ☐ Scroll suave
   
2. Tablet 💻:
   ☐ Layout melhorado
   ☐ Colunas apropriadas
   ☐ Espaçamentos maiores
   
3. Desktop 💻:
   ☐ Layout sofisticado
   ☐ Uso eficiente do espaço
   ☐ Todos elementos alinhados
   
4. Publicar:
   - Update/Publish
   - View Page
   - Testar em dispositivos reais
```

### Resultado Esperado

Uma landing page completa, construída com abordagem Mobile First:
- ✅ Totalmente responsiva
- ✅ Performance otimizada
- ✅ Touch targets adequados
- ✅ Tipografia legível
- ✅ Call-to-actions claros
- ✅ Design profissional

---

## 9. Exercício Prático 2: Portfólio Responsivo (Livre) (30 min)

### Objetivo
Criar uma página de portfólio aplicando conceitos Mobile First sem roteiro, demonstrando autonomia.

### Requisitos Obrigatórios

**Estrutura Mínima:**
1. Hero Section com foto pessoal
2. Seção "Sobre Mim" (texto + imagem)
3. Grid de Projetos (mínimo 6 projetos)
4. Seção de Habilidades (com progress bars ou icon boxes)
5. Formulário de Contato
6. Footer com redes sociais

**Requisitos Técnicos:**

**Mobile First 📱:**
- [ ] Começar construindo no modo mobile
- [ ] Todos os textos mínimo 16px
- [ ] Botões mínimo 44x44px
- [ ] Menu funcional
- [ ] Formulário usável com uma mão
- [ ] Imagens otimizadas (< 200KB cada)

**Tablet 💻:**
- [ ] Layout em 2 colunas onde apropriado
- [ ] Grid de projetos: 2 colunas
- [ ] Melhor uso do espaço

**Desktop 💻:**
- [ ] Layout sofisticado
- [ ] Grid de projetos: 3 colunas
- [ ] Elementos decorativos (opcional)
- [ ] Hover effects

**Performance:**
- [ ] Máximo 10 sections
- [ ] Lazy load ativo
- [ ] Fonts otimizadas (máx 2 famílias)

**Acessibilidade:**
- [ ] Alt text em todas as imagens
- [ ] Contraste adequado (mín 4.5:1)
- [ ] Heading hierarchy correta (H1 → H2 → H3)

### Sugestões de Widgets

```
Hero:
- Cover ou Section com background
- Heading, Text, Button

Sobre:
- Media & Text widget
- Ou Section com 2 colunas

Projetos:
- Gallery widget
- Ou Grid manual com Image + Text

Habilidades:
- Progress Bar widget
- Ou Icon List
- Ou Icon Box

Contato:
- Shortcode (Contact Form 7)
- Ou HTML para form básico

Footer:
- Social Icons widget
- Heading
- Text Editor
```

### Critérios de Avaliação

| Critério | Peso | Pontos |
|----------|------|--------|
| Abordagem Mobile First | 30% | 0-30 |
| Responsividade (3 breakpoints) | 25% | 0-25 |
| Design e Estética | 20% | 0-20 |
| Performance | 15% | 0-15 |
| Usabilidade | 10% | 0-10 |
| **TOTAL** | **100%** | **0-100** |

### Entrega

**Formato:**
- Link para página publicada
- Screenshots: Mobile, Tablet, Desktop
- Relatório breve (1 página):
  - Decisões de design
  - Desafios encontrados
  - Soluções aplicadas

---

## 10. Troubleshooting Comum (15 min)

### 10.1 Problemas Frequentes

**Problema: Elementor não carrega**
```
Solução:
1. Aumentar PHP memory limit
2. wp-config.php: define('WP_MEMORY_LIMIT', '256M');
3. Desativar outros plugins temporariamente
4. Limpar cache
```

**Problema: Mudanças não aparecem**
```
Solução:
1. Ctrl+Shift+R (hard refresh)
2. Elementor → Settings → Advanced → Regenerate CSS
3. Limpar cache do browser
4. Limpar cache do plugin (se houver)
```

**Problema: Layout quebrado no mobile**
```
Solução:
1. Verificar se começou no mobile 📱
2. Checar Column Width (deve ser 100% no mobile)
3. Verificar Hide On Mobile de elementos
4. Testar Column Order
```

**Problema: Site lento após Elementor**
```
Solução:
1. Otimizar imagens antes do upload
2. Reduzir número de sections (< 10)
3. Evitar muitos widgets pesados
4. Usar plugin de cache (WP Rocket, LiteSpeed)
5. Minimize Google Fonts
6. Enable Improved Asset Loading
```

**Problema: Botões não clicáveis no mobile**
```
Solução:
1. Verificar min-height: 44px
2. Verificar padding adequado
3. Remover z-index negativo
4. Verificar overlapping elements
```

### 10.2 Dicas de Performance

```
✅ FAZER:
- Começar pelo mobile
- Otimizar imagens (TinyPNG)
- Usar Image Size correto (não Full sempre)
- Habilitar lazy load
- Usar máximo 2 Google Fonts
- Reutilizar templates salvos
- Testar com PageSpeed Insights

❌ EVITAR:
- Muitas sections (> 12)
- Sliders pesados
- Múltiplos vídeos na mesma página
- Background videos em mobile
- Animações excessivas
- Parallax em mobile
- Imagens Full HD não otimizadas
```

---

## Material de Apoio

### Documentação Oficial
- **Elementor Documentation:** https://elementor.com/help/
- **Elementor Academy:** https://elementor.com/academy/
- **Elementor Community:** https://www.facebook.com/groups/Elementors/

### Tutoriais em Português
- **Elementor Brasil:** https://www.youtube.com/c/ElementorBrasil
- **WP Aprende:** Canal YouTube com tutoriais Elementor
- **Criar Sites WP:** https://criarsiteswp.com.br/elementor/

### Recursos Gratuitos
- **Template Kits:** https://library.elementor.com/
- **Icon Libraries:** 
  - Font Awesome: https://fontawesome.com/icons
  - Ionicons: https://ionic.io/ionicons
- **Imagens Gratuitas:**
  - Unsplash: https://unsplash.com/
  - Pexels: https://www.pexels.com/
  - Pixabay: https://pixabay.com/

### Plugins Complementares
- **Essential Addons for Elementor** (gratuito)
- **ElementsKit** (gratuito)
- **Premium Addons for Elementor** (gratuito)
- **Unlimited Elements** (gratuito + pro)

### Ferramentas de Otimização
- **TinyPNG:** https://tinypng.com/ (comprimir imagens)
- **Squoosh:** https://squoosh.app/ (otimizar imagens)
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/

### Vídeos Recomendados
- **Elementor Official Channel:** https://www.youtube.com/c/Elementor
- **Ferdy Korpershoek:** Tutoriais completos Elementor
- **Darrel Wilson:** Web design com Elementor

### Livros e E-books
- "Elementor Masterclass" - Comunidade Elementor
- "WordPress Page Builders Guide" - WPBeginner
- "Mobile First Design" - Luke Wroblewski

### Comunidades
- **Elementor Facebook Group:** Grupo oficial
- **WordPress Brasil:** Grupos no Facebook
- **Stack Overflow:** Perguntas técnicas

### Checklist de Referência

**Mobile First Checklist:**
```
☐ Começou no modo mobile 📱
☐ Texto mínimo 16px
☐ Touch targets mínimo 44px
☐ Botões full width no mobile
☐ Imagens otimizadas
☐ Colunas empilhadas corretamente
☐ Espaçamento adequado
☐ Testado em dispositivo real
☐ Performance verificada (< 3s)
☐ Acessibilidade básica (alt texts, contraste)
```

---

## Resumo da Aula

### Conceitos-chave aprendidos

1. **Page builders** permitem criar layouts visuais sem código
2. **Elementor** tem versão gratuita completa e interface intuitiva
3. **Estrutura:** Section → Column → Widget
4. **Mobile First:** SEMPRE começar no modo mobile 📱
5. **Responsividade:** Configurar para mobile, tablet e desktop
6. **Performance:** Otimizar imagens e limitar sections
7. **Templates:** Aceleram desenvolvimento
8. **Reutilização:** Salvar blocos para usar novamente

### Fluxo de Trabalho Correto

```
1. 📱 MOBILE (começar aqui)
   ↓
2. 💻 TABLET (expandir)
   ↓
3. 💻 DESKTOP (otimizar)
```

### Widgets Essenciais

- Heading, Text Editor, Button (básicos)
- Image, Image Carousel (mídia)
- Icon Box (features)
- Testimonial (depoimentos)
- Accordion (FAQ mobile-friendly)

### Próxima Aula

**Encontro 16:** Customização de Temas I - Modificar temas WordPress, criar child themes e adicionar funcionalidades com functions.php.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:

**Conceitos:**
- ✅ Explicar diferença entre Gutenberg e Page Builder
- ✅ Entender hierarquia Section/Column/Widget
- ✅ Conhecer widgets essenciais do Elementor

**Prática Mobile First:**
- ✅ SEMPRE começar no modo mobile 📱
- ✅ Configurar responsividade por dispositivo
- ✅ Reordenar colunas para mobile
- ✅ Ocultar elementos por dispositivo

**Desenvolvimento:**
- ✅ Criar hero section responsiva
- ✅ Construir grid de features
- ✅ Implementar seções com imagem + texto
- ✅ Adicionar depoimentos
- ✅ Criar CTAs efetivos

**Otimização:**
- ✅ Otimizar imagens antes do upload
- ✅ Usar tamanhos de imagem apropriados
- ✅ Configurar lazy loading
- ✅ Limitar número de sections
- ✅ Testar performance

**Qualidade:**
- ✅ Garantir touch targets mínimos (44px)
- ✅ Manter texto legível (16px+)
- ✅ Testar em 3 breakpoints
- ✅ Verificar acessibilidade básica
- ✅ Validar em dispositivos reais# Encontro 15: Page Builders Mobile First

**Carga Horária:** 4 horas  
**Objetivo:** Dominar o Elementor (versão gratuita) para criar páginas responsivas complexas com abordagem mobile-first, sem código.

---

## 1. Introdução aos Page Builders (30 min)

### 1.1 O que são Page Builders?

**Page Builder** = Construtor visual de páginas arrastar-e-soltar (drag-and-drop)

**Diferença: Gutenberg vs Page Builder**

| Aspecto | Gutenberg | Page Builder (Elementor) |
|---------|-----------|--------------------------|
| Filosofia | Editor de blocos | Canvas visual |
| Liberdade | Estruturada | Total |
| Performance | Mais leve | Mais pesado |
| Curva de aprendizado | Fácil | Média |
| Customização | Limitada | Extensa |
| Mobile editing | Básico | Avançado |

### 1.2 Principais Page Builders

**Elementor** ⭐⭐⭐⭐⭐ (Usaremos este)
```
Versão: Free + Pro
Usuários: 5+ milhões
Performance: Boa
Mobile editing: Excelente
Curva de aprendizado: Fácil
```

**Beaver Builder** ⭐⭐⭐⭐
```
Versão: Lite + Premium
Performance: Excelente
Código limpo: Sim
Preço: Alto
```

**Divi Builder** ⭐⭐⭐⭐
```
Licença: Elegant Themes
Visual Builder: Sim
Comunidade: Grande
Learning curve: Média
```

**WPBakery** ⭐⭐⭐
```
Antigo: Visual Composer
Backend editor
Menos intuitivo
Ainda popular em temas premium
```

### 1.3 Por que Elementor?

**Vantagens:**
- ✅ Versão gratuita completa
- ✅ Interface intuitiva
- ✅ Live editing
- ✅ Responsivo por dispositivo
- ✅ Grande comunidade
- ✅ Widgets extensos
- ✅ Templates gratuitos
- ✅ Performance aceitável

**Desvantagens:**
- ❌ Código extra (div soup)
- ❌ Algumas features só no Pro
- ❌ Dependência do plugin
- ❌ Pode ser pesado se mal usado

---

## 2. Instalação e Configuração do Elementor (30 min)

### 2.1 Instalação

**Passo a passo:**
```
1. Plugins → Add New
2. Buscar: "Elementor"
3. Install "Elementor Website Builder"
4. Activate
```

**Primeira configuração:**
```
1. Elementor → Settings
2. General:
   - Editor Loader Method: Enable
   - Edit with Elementor button: Yes
   
3. Advanced:
   - CSS Print Method: Internal Embedding
   - Disable Default Colors: No
   - Disable Default Fonts: No
```

### 2.2 Configurações Importantes

**Performance Settings:**
```
Elementor → Settings → Advanced

CSS Print Method: Internal Embedding (melhor performance)
Google Fonts: Enable (ou disable se usar fonts locais)
Font Display: Swap
Improved Asset Loading: Yes
```

**Responsive Settings:**
```
Elementor → Settings → General

Mobile Breakpoint: 767px
Tablet Breakpoint: 1024px

Ajuste conforme necessidade do projeto
```

### 2.3 Interface do Elementor

**Acessar o Editor:**
```
Método 1: Editar página → "Edit with Elementor"
Método 2: Na listagem de páginas → "Edit with Elementor"
Método 3: Admin bar → "Edit with Elementor"
```

**Áreas da Interface:**

```
┌─────────────────────────────────────────────────┐
│ [☰] Elementor    [💻][📱] [⚙️] Publish [×]      │ ← Top bar
├──────────┬──────────────────────────────────────┤
│          │                                       │
│ Elements │         Canvas de edição             │
│          │                                       │
│ [+] Add  │     [+ Arraste widget aqui]          │
│          │                                       │
│ Widgets: │     [+ Adicionar seção]              │
│ • Heading│                                       │
│ • Image  │                                       │
│ • Text   │                                       │
│ • Button │                                       │
│ ...      │                                       │
│          │                                       │
│ Settings │                                       │
└──────────┴──────────────────────────────────────┘
```

**Modos de visualização:**
- 📱 Mobile (começar aqui - Mobile First!)
- 💻 Tablet
- 💻 Desktop

**Navegador:**
```
Clique no ícone ⚙️ para:
- Page Settings
- Navigator (estrutura do documento)
- History (histórico de alterações)
```

---

## 3. Conceitos Fundamentais do Elementor (45 min)

### 3.1 Estrutura: Section → Column → Widget

**Hierarquia:**
```
Section (Seção)
└── Column (Coluna)
    └── Widget (Elemento)
```

**Exemplo prático:**
```
Section [Full width]
├── Column 1 (50%)
│   ├── Heading: "Bem-vindo"
│   ├── Text Editor: Descrição
│   └── Button: "Saiba Mais"
└── Column 2 (50%)
    └── Image: Foto ilustrativa
```

### 3.2 Sections (Seções)

**Tipos de Section:**

**1. Full Width (Largura Total)**
```
Largura: 100% da tela
Uso: Heroes, banners
Conteúdo: Pode ter container interno
```

**2. Boxed (Em caixa)**
```
Largura: Max 1140px (padrão)
Centralizado
Uso: Conteúdo padrão
```

**Adicionar Section:**
```
1. Click no botão [+] cinza
2. Escolher estrutura de colunas:
   - 1 coluna
   - 2 colunas (50/50)
   - 3 colunas (33/33/33)
   - 2/3 + 1/3
   - Personalizado
```

**Configurações de Section:**
```
Layout:
- Content Width: Boxed/Full Width
- Height: Default/Fit to screen/Min height
- Column Gap: Padding entre colunas
- HTML Tag: section/div/header/footer

Style:
- Background: Color/Gradient/Image/Video
- Background Overlay
- Border
- Box Shadow
- Shape Divider (separadores decorativos)

Advanced:
- Margin/Padding
- Z-Index
- CSS Classes
- Custom CSS (Pro)
```

### 3.3 Columns (Colunas)

**Estruturas pré-definidas:**
```
[____________________]     1 coluna (100%)
[_________][_________]     2 colunas (50/50)
[_____][_____][_____]      3 colunas (33/33/33)
[____________][______]      2 colunas (66/33)
[______][____________]      2 colunas (33/66)
[___][___][___][___]        4 colunas (25/25/25/25)
```

**Ajustar largura:**
```
1. Click na coluna
2. Layout → Column Width: % ou px
3. Ou arraste a borda entre colunas
```

**Configurações importantes:**
```
Layout:
- Column Width: % personalizado
- Vertical Align: Top/Middle/Bottom

Responsive:
- Order (mobile): Reordenar colunas
- Width (tablet/mobile): Ajustar largura

Advanced:
- Padding personalizado por dispositivo
```

### 3.4 Widgets (Elementos)

**Categorias de Widgets Gratuitos:**

**Basic (Básicos):**
- Heading (Título)
- Image (Imagem)
- Text Editor (Texto)
- Video (Vídeo)
- Button (Botão)
- Divider (Divisor)
- Spacer (Espaçador)
- Google Maps
- Icon
- Image Box
- Icon Box
- Star Rating
- Image Carousel
- Image Gallery
- Icon List
- Counter
- Progress Bar
- Testimonial
- Tabs
- Accordion
- Toggle
- Social Icons
- Alert
- Audio
- Shortcode
- HTML
- Menu Anchor

**WordPress (Integração WP):**
- Sidebar
- Archives
- Search
- Calendar
- Categories

**Arrastar Widget:**
```
1. Painel esquerdo → Elements
2. Buscar ou selecionar widget
3. Arrastar para área desejada
4. Configurar no painel
```

---

## 4. Criando Layouts Responsivos (60 min)

### 4.1 Mobile-First Workflow no Elementor

**Abordagem Mobile First (CORRETA):**

**Passo 1: Começar no Mobile 📱**
```
- Clicar no ícone 📱 Mobile PRIMEIRO
- Criar estrutura básica
- Adicionar conteúdo essencial
- Configurar estilos base
- Tamanhos de fonte mínimo 16px
- Touch targets mínimo 44px
- Espaçamentos adequados para mobile
```

**Passo 2: Expandir para Tablet 💻**
```
- Clicar ícone Tablet
- Adicionar:
  • Múltiplas colunas (se necessário)
  • Elementos adicionais
  • Ajustar tamanhos de fonte
  • Aumentar espaçamentos
  • Layouts lado a lado
```

**Passo 3: Otimizar para Desktop 💻**
```
- Clicar ícone Desktop
- Refinar:
  • Layouts mais complexos
  • Maior densidade de informação
  • Efeitos hover
  • Elementos decorativos
  • Espaçamentos generosos
```

**⚠️ IMPORTANTE:** Sempre comece construindo no mobile, depois expanda para telas maiores!

### 4.2 Exemplo Prático: Hero Section Responsiva (Mobile First)

**⚠️ IMPORTANTE: Começar SEMPRE no modo Mobile! 📱**

**Mobile PRIMEIRO (< 768px):**
```
Section [Full Width | Min Height: 60vh]
├── Background: Imagem + Overlay 60%
└── Column 1 (100%)
    ├── Heading: "Desenvolva Sites Mobile First"
    │   • Font Size: 28px (mínimo legível)
    │   • Line Height: 1.2
    │   • Color: White
    │   • Margin Bottom: 20px
    ├── Text: Descrição curta e objetiva
    │   • Font Size: 16px (mínimo - não dá zoom no iOS)
    │   • Line Height: 1.6
    │   • Max Width: 100%
    │   • Margin Bottom: 30px
    └── Button: "Começar Agora"
        • Width: 100% (full width mobile)
        • Padding: 15px 20px
        • Min Height: 44px (touch target)
        • Font Size: 16px
```

**Tablet (768px - 1024px) - EXPANDIR:**
```
Melhorias:
- Section Height: 80vh (mais espaço)
- Heading: 36px (maior)
- Text: 18px (mais confortável)
- Padding Section: 60px 40px (mais espaçoso)
- Button: Width auto (não precisa ser full width)
- Adicionar segundo botão: "Saiba Mais"
```

**Desktop (1200px+) - OTIMIZAR:**
```
Layout final:
- Section Height: 100vh (full screen)
- Dividir em 2 colunas:
  • Column 1 (60%): Todo o conteúdo
  • Column 2 (40%): Imagem/mockup
- Heading: 48px (impacto maior)
- Text: 20px (muito legível)
- Padding Section: 80px 60px (generoso)
- Adicionar elementos decorativos
```

**Configuração passo a passo (Mobile First CORRETO):**

```
1. MOBILE PRIMEIRO 📱 (CLICAR NO ÍCONE MOBILE):
   
   Section Settings:
   - Layout → Content Width: Full Width
   - Layout → Height: Min Height → 60vh
   - Layout → Column Gap: No Gap
   - Style → Background → Type: Classic
   - Style → Background → Image: Upload hero.jpg
   - Style → Background → Position: Center Center
   - Style → Background → Size: Cover
   - Style → Background Overlay → Background Type: Classic
   - Style → Background Overlay → Color: #000000
   - Style → Background Overlay → Opacity: 60%
   - Advanced → Padding: 40px 15px (mobile spacing)
   
   Column 1 (única coluna):
   - Layout → Width: 100%
   - Advanced → Padding: 20px 0
   
   Heading Widget:
   - Content → Title: "Desenvolva Sites Mobile First"
   - Content → HTML Tag: H1
   - Style → Text Color: #FFFFFF
   - Style → Typography → Family: Default
   - Style → Typography → Size: 28px
   - Style → Typography → Weight: 700
   - Style → Typography → Line Height: 1.2
   - Advanced → Margin: 0 0 20px 0
   
   Text Editor Widget:
   - Content: "Aprenda a criar sites responsivos começando pelo mobile."
   - Style → Text Color: #FFFFFF
   - Style → Typography → Size: 16px (MÍNIMO!)
   - Style → Typography → Line Height: 1.6
   - Advanced → Margin: 0 0 30px 0
   
   Button Widget:
   - Content → Text: "Começar Agora"
   - Content → Link: #contato
   - Style → Typography → Size: 16px
   - Style → Typography → Weight: 600
   - Style → Button Type: Fill
   - Style → Text Color: #FFFFFF
   - Style → Background Color: #007BFF
   - Style → Border Radius: 4px
   - Style → Padding: 15px 20px
   - Layout → Width: 100% (FULL WIDTH MOBILE)
   - Layout → Alignment: Stretch
   - Advanced → Custom Height: 44px (touch target mínimo)

2. TABLET 💻 (AGORA clicar no ícone Tablet):
   
   Section:
   - Layout → Height: Min Height → 80vh (aumenta)
   - Advanced → Padding: 60px 40px (mais espaço)
   
   Heading:
   - Style → Typography → Size: 36px (maior)
   
   Text Editor:
   - Style → Typography → Size: 18px (mais confortável)
   
   Button (primeiro):
   - Layout → Width: Auto (não precisa ser full width)
   - Style → Padding: 15px 30px
   
   Button 2 (ADICIONAR novo botão):
   - Content → Text: "Saiba Mais"
   - Style → Button Type: Outline
   - Style → Border Width: 2px
   - Layout → Width: Auto
   - Advanced → Margin: 0 0 0 15px (espaço entre botões)

3. DESKTOP 💻 (Por último, clicar no ícone Desktop):
   
   Section:
   - Layout → Height: Min Height → 100vh (full screen)
   - Advanced → Padding: 80px 60px
   
   ESTRUTURA: Adicionar segunda coluna
   - Right-click na Column → Add Column
   - Column 1: Width 60%
   - Column 2: Width 40%
   
   Column 1 (mantém o conteúdo):
   - Advanced → Padding: 60px 40px 60px 0
   
   Heading:
   - Style → Typography → Size: 48px (máximo impacto)
   
   Text Editor:
   - Style → Typography → Size: 20px
   - Advanced → Max Width: 500px
   
   Column 2 (NOVA):
   - Adicionar Image Widget
   - Upload mockup de celular
   - Style → Width: 100%
   - Advanced → Padding: 40px
   - Animation: Fade In (opcional)
```

**✅ FLUXO CORRETO:**
1. 📱 Mobile: Conteúdo essencial, simples, legível
2. 💻 Tablet: Adiciona elementos, melhora espaçamento
3. 💻 Desktop: Layout sofisticado, elementos extras

### 4.3 Reverse Column Order (Reordenar Colunas)

**Problema comum:**
```
Desktop: [Texto] [Imagem]
Mobile:  [Texto]
         [Imagem]  ← Queremos imagem primeiro!
```

**Solução:**
```
Mobile → Column Settings → Responsive → Order: -1
```

**Exemplo com 3 colunas:**
```
Desktop: [A] [B] [C]

Mobile (reordenado):
Column A: Order 3
Column B: Order 2  
Column C: Order 1