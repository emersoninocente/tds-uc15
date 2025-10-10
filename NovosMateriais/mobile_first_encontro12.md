# Encontro 12: Introdução ao WordPress

**Carga Horária:** 4 horas  
**Objetivo:** Instalar e configurar WordPress localmente, compreender sua estrutura básica e criar o primeiro site.

---

## 1. O que é WordPress? (30 min)

### 1.1 Visão Geral

**WordPress** é um CMS (Content Management System) open-source que permite criar e gerenciar sites sem precisar programar.

**Estatísticas:**
- 43% dos sites na web usam WordPress
- 65% de participação de mercado entre CMSs
- Mais de 60.000 plugins disponíveis
- Mais de 10.000 temas gratuitos

**Vantagens:**
- ✅ Gratuito e open-source
- ✅ Fácil de usar
- ✅ Altamente customizável
- ✅ SEO-friendly
- ✅ Grande comunidade
- ✅ Mobile-responsive (temas modernos)

**Desvantagens:**
- ❌ Pode ser lento se mal configurado
- ❌ Requer manutenção (atualizações)
- ❌ Vulnerável se não for atualizado
- ❌ Pode ser "pesado" para sites simples

### 1.2 WordPress.org vs WordPress.com

**WordPress.org (Self-hosted)** ⭐ Usaremos este
- Instalação própria
- Controle total
- Plugins e temas ilimitados
- Precisa de hospedagem

**WordPress.com (Hospedado)**
- Hospedado pela Automattic
- Planos pagos
- Limitações em plugins/temas
- Mais fácil para iniciantes

### 1.3 Casos de Uso

✅ **Ideal para:**
- Blogs
- Sites institucionais
- Portfólios
- E-commerce (com WooCommerce)
- Landing pages
- Sites de notícias

❌ **Não ideal para:**
- Aplicações web complexas
- Sistemas customizados
- Sites que precisam de performance extrema

---

## 2. Requisitos do Sistema (20 min)

### 2.1 Requisitos Técnicos

**Servidor:**
- PHP 7.4 ou superior (recomendado 8.0+)
- MySQL 5.7 ou superior (ou MariaDB 10.3+)
- Suporte a HTTPS
- Apache ou Nginx

**Recomendado:**
- PHP 8.1+
- MySQL 8.0+
- Módulo mod_rewrite (Apache)
- Memória PHP: mínimo 256MB

### 2.2 Ambientes Locais

**Opções para desenvolvimento local:**

1. **Local by Flywheel** ⭐ Recomendado
   - Interface amigável
   - Um clique para instalar
   - SSL automático
   - Fácil push para staging

2. **XAMPP**
   - Tradicional
   - Mais controle
   - Multiplataforma

3. **MAMP** (Mac)
   - Similar ao XAMPP
   - Interface simples

4. **Docker**
   - Mais avançado
   - Isolamento completo
   - Reproduzível

---

## 3. Instalação do WordPress Local (60 min)

### 3.1 Instalação com Local by Flywheel

**Passo 1: Download**
1. Acesse: https://localwp.com/
2. Baixe para seu sistema operacional
3. Instale o aplicativo

**Passo 2: Criar Novo Site**
1. Abra o Local
2. Clique em "Create a new site" (+ no canto inferior esquerdo)
3. Escolha "Create a new site"
4. Dê um nome ao site (ex: "meu-site-mobile")
5. Continue

**Passo 3: Configurações**
```
Preferred:
- PHP: 8.1.9
- Web Server: Nginx
- Database: MySQL 8.0.16
```

**Passo 4: WordPress Setup**
```
WordPress Username: admin
WordPress Password: [senha forte]
WordPress Email: seu@email.com
```

**Passo 5: Acessar o Site**
- Clique em "Start site"
- Clique em "Admin" para acessar o painel
- Clique em "Open site" para ver o frontend

### 3.2 Estrutura de Arquivos do WordPress

```
meu-site/
├── wp-admin/              # Painel administrativo (não mexa)
├── wp-content/            # Seu conteúdo (temas, plugins)
│   ├── plugins/           # Plugins instalados
│   ├── themes/            # Temas instalados
│   ├── uploads/           # Mídia (imagens, vídeos)
│   └── mu-plugins/        # Must-use plugins
├── wp-includes/           # Core do WordPress (não mexa)
├── index.php              # Arquivo principal
├── wp-config.php          # Configurações (importante!)
├── .htaccess              # Regras do Apache
└── wp-load.php            # Carrega o WordPress
```

**Arquivos importantes:**
- `wp-config.php` - Configurações de banco de dados
- `.htaccess` - URLs amigáveis, redirecionamentos
- `wp-content/` - Onde você trabalha

### 3.3 Instalação Manual (Opcional)

**Se não usar Local:**

```bash
# 1. Baixar WordPress
wget https://wordpress.org/latest.zip
unzip latest.zip

# 2. Criar banco de dados
mysql -u root -p
CREATE DATABASE wordpress;
CREATE USER 'wpuser'@'localhost' IDENTIFIED BY 'senha';
GRANT ALL PRIVILEGES ON wordpress.* TO 'wpuser'@'localhost';
FLUSH PRIVILEGES;
EXIT;

# 3. Configurar wp-config.php
cp wp-config-sample.php wp-config.php
# Editar wp-config.php com dados do banco

# 4. Acessar instalador
http://localhost/wordpress/
```

---

## 4. Primeiro Contato com o WordPress (45 min)

### 4.1 O Dashboard (Painel Administrativo)

**URL de acesso:**
```
http://seusite.local/wp-admin/
ou
http://localhost/seusite/wp-admin/
```

**Estrutura do Dashboard:**

```
┌─────────────────────────────────┐
│ WordPress Logo | Site Name   🔔 │
├─────────────────────────────────┤
│ Dashboard                        │
│ Posts                           │
│ Media                           │
│ Pages                           │
│ Comments                        │
│ Appearance                      │
│ Plugins                         │
│ Users                           │
│ Tools                           │
│ Settings                        │
└─────────────────────────────────┘
```

### 4.2 Principais Seções

**Dashboard**
- Visão geral do site
- Atalhos rápidos
- Atividades recentes

**Posts (Artigos)**
- Conteúdo do blog
- Organizados por data
- Categorias e tags

**Pages (Páginas)**
- Conteúdo estático
- Hierarquia de páginas
- Sem data de publicação

**Media (Mídia)**
- Biblioteca de imagens
- Vídeos, PDFs
- Gerenciamento de arquivos

**Appearance (Aparência)**
- Temas
- Customizador
- Menus
- Widgets

**Plugins**
- Extensões do WordPress
- Adicionar funcionalidades
- Ativar/Desativar

**Users (Usuários)**
- Gerenciar usuários
- Perfis e permissões

**Settings (Configurações)**
- Configurações gerais
- URLs
- Leitura, escrita, discussão

### 4.3 Configurações Iniciais Importantes

**Settings → General**
```
Site Title: Meu Site Mobile First
Tagline: Aprendendo WordPress Responsivo
WordPress Address (URL): http://seusite.local
Site Address (URL): http://seusite.local
Email Address: seu@email.com
Timezone: São Paulo
Date Format: d/m/Y
Time Format: H:i
Week Starts On: Sunday
```

**Settings → Reading**
```
Homepage displays: Your latest posts (ou página estática)
Blog pages show at most: 10 posts
Syndication feeds: 10 items
Search Engine Visibility: ☐ (deixe desmarcado em dev)
```

**Settings → Permalinks** ⭐ Importante!
```
Escolha: Post name
http://seusite.local/sample-post/
```

**Opções de Permalink:**
- Plain: `?p=123` (evite)
- Day and name: `/2025/01/10/post/`
- Month and name: `/2025/01/post/`
- Numeric: `/archives/123/`
- Post name: `/sample-post/` ⭐ Recomendado
- Custom: `/%category%/%postname%/`

---

## 5. Posts vs Pages (30 min)

### 5.1 Posts (Artigos)

**Características:**
- Conteúdo cronológico
- Categorias e tags
- RSS feed
- Comentários (opcional)
- Autor e data visíveis

**Quando usar:**
- Blog
- Notícias
- Artigos
- Updates regulares

**Criar Post:**
```
1. Posts → Add New
2. Título: "Meu Primeiro Post"
3. Conteúdo: [escreva aqui]
4. Categoria: Geral
5. Tags: wordpress, mobile
6. Featured Image: [adicione imagem]
7. Publish
```

### 5.2 Pages (Páginas)

**Características:**
- Conteúdo atemporal
- Hierarquia (página pai/filha)
- Sem categorias/tags
- Sem data de publicação

**Quando usar:**
- Sobre
- Contato
- Serviços
- Política de Privacidade
- Qualquer conteúdo fixo

**Criar Page:**
```
1. Pages → Add New
2. Título: "Sobre"
3. Conteúdo: [escreva aqui]
4. Parent: (none) ou página pai
5. Template: Default Template
6. Featured Image: [opcional]
7. Publish
```

### 5.3 Comparação

| Feature | Posts | Pages |
|---------|-------|-------|
| Data | Sim | Não |
| Categorias | Sim | Não |
| Tags | Sim | Não |
| Hierarquia | Não | Sim |
| RSS | Sim | Não |
| Comentários | Sim (padrão) | Não (padrão) |
| Uso | Blog/Notícias | Conteúdo fixo |

---

## 6. Editor Gutenberg (45 min)

### 6.1 O que é Gutenberg?

**Gutenberg** é o editor de blocos do WordPress (desde versão 5.0).

**Vantagens:**
- ✅ Interface moderna
- ✅ Editor visual (WYSIWYG)
- ✅ Blocos reutilizáveis
- ✅ Mobile-friendly
- ✅ Layouts complexos sem código

### 6.2 Blocos Principais

**Blocos de Texto:**
- Paragraph (Parágrafo)
- Heading (Título)
- List (Lista)
- Quote (Citação)
- Code (Código)
- Preformatted (Pré-formatado)

**Blocos de Mídia:**
- Image (Imagem)
- Gallery (Galeria)
- Audio (Áudio)
- Video (Vídeo)
- File (Arquivo)
- Cover (Capa com overlay)

**Blocos de Design:**
- Columns (Colunas)
- Group (Grupo)
- Buttons (Botões)
- Separator (Separador)
- Spacer (Espaçador)

**Blocos de Widgets:**
- Shortcode
- Archives (Arquivos)
- Calendar (Calendário)
- Categories (Categorias)
- Latest Posts (Posts Recentes)

### 6.3 Criar Primeira Página com Gutenberg

**Exercício Prático:**

```
1. Pages → Add New
2. Título: "Home"

3. Adicionar blocos:

   [ Cover Block ]
   - Background: Imagem de hero
   - Overlay: 50%
   - Título: "Bem-vindo ao Meu Site"
   - Subtítulo: "Aprendendo WordPress Mobile First"
   - Button: "Saiba Mais"

   [ Columns (2 colunas) ]
   Coluna 1:
   - Image (Imagem ilustrativa)
   Coluna 2:
   - Heading: "Sobre Nós"
   - Paragraph: Texto descritivo
   
   [ Latest Posts ]
   - Mostrar 3 posts
   - Grid layout
   
   [ Buttons ]
   - "Contato" → /contato/
   - "Portfólio" → /portfolio/

4. Publish
```

### 6.4 Configurações de Bloco

**Cada bloco tem configurações:**

**Sidebar direita:**
- Block: configurações específicas
- Document: configurações da página

**Toolbar superior:**
- Alinhamento
- Estilo
- Link
- Opções avançadas

**Atalhos úteis:**
```
/ = Menu de blocos
Ctrl/Cmd + Shift + D = Duplicar bloco
Ctrl/Cmd + Alt + T = Inserir antes
Ctrl/Cmd + Alt + Y = Inserir depois
Ctrl/Cmd + Shift + Z = Remover bloco
```

---

## 7. Biblioteca de Mídia (30 min)

### 7.1 Upload de Imagens

**Fazer Upload:**
```
1. Media → Add New
2. Arraste arquivos ou clique "Select Files"
3. Aguarde upload
```

**Formatos aceitos:**
- Imagens: JPG, PNG, GIF, WebP, SVG (com plugin)
- Vídeos: MP4, MOV, AVI
- Áudio: MP3, WAV
- Documentos: PDF, DOC, DOCX, PPT, ZIP

**Tamanhos de imagem gerados:**
```
WordPress gera automaticamente:
- Thumbnail: 150x150px
- Medium: 300x300px
- Medium Large: 768x768px
- Large: 1024x1024px
- Full: Original
```

### 7.2 Otimização de Imagens

**Antes de fazer upload:**
- Redimensione para tamanho adequado
- Comprima (TinyPNG, ImageOptim)
- Use formato correto (JPEG para fotos, PNG para logos)
- Max 1MB por imagem (ideal < 200KB)

**Plugins de otimização:**
- Smush (compressão)
- ShortPixel
- Imagify
- EWWW Image Optimizer

### 7.3 Featured Image (Imagem Destacada)

**O que é:**
- Imagem principal de um post/página
- Mostrada em listagens
- Pode ser usada como thumbnail

**Como adicionar:**
```
1. Editar post/página
2. Sidebar direita → Featured Image
3. Set Featured Image
4. Escolher ou fazer upload
5. Update/Publish
```

**Tamanho recomendado:**
- 1200x630px (ideal para redes sociais)
- Ratio 16:9 ou 4:3

---

## 8. Exercício Prático: Criando Primeiro Site (30 min)

### Exercício: Site Básico Completo

**Objetivo:** Criar um site funcional com páginas e posts.

**Requisitos:**

**1. Criar Páginas:**
- Home
- Sobre
- Serviços
- Contato

**2. Criar Posts:**
- "Bem-vindo ao nosso blog" (categoria: Geral)
- "Dicas de WordPress" (categoria: Tutoriais)
- "Mobile First Design" (categoria: Design)

**3. Configurar:**
- Permalink: Post name
- Adicionar imagens destacadas em todos os posts
- Usar pelo menos 3 tipos diferentes de blocos

**4. Homepage:**
- Criar página "Home" com:
  - Cover block no topo
  - Seção "Sobre" com 2 colunas
  - Latest Posts mostrando 3 posts

**5. Configurar Homepage:**
```
Settings → Reading
Homepage displays: A static page
Homepage: Home
Posts page: Blog (criar página "Blog")
```

---

## 9. Backup e Manutenção (20 min)

### 9.1 Por que fazer Backup?

**Riscos sem backup:**
- Atualização quebra site
- Hack ou malware
- Erro humano
- Servidor com problema
- Corrupção de banco de dados

### 9.2 O que fazer Backup?

✅ **Arquivos:**
- wp-content/ (temas, plugins, uploads)
- wp-config.php
- .htaccess

✅ **Banco de dados:**
- Todas as tabelas wp_*

### 9.3 Ferramentas de Backup

**Local by Flywheel:**
```
Site → Utilities → Export
Salva tudo em arquivo .zip
```

**Plugins (quando em produção):**
- **UpdraftPlus** ⭐ Recomendado
- **BackupBuddy**
- **VaultPress/Jetpack Backup**
- **Duplicator** (também para migração)

### 9.4 Manutenção Regular

**Checklist mensal:**
- [ ] Atualizar WordPress core
- [ ] Atualizar plugins
- [ ] Atualizar temas
- [ ] Fazer backup completo
- [ ] Verificar links quebrados
- [ ] Otimizar banco de dados
- [ ] Verificar velocidade do site

---

## Material de Apoio

### Documentação Oficial
- **WordPress Codex:** https://codex.wordpress.org/
- **WordPress Support:** https://wordpress.org/support/
- **WordPress TV:** https://wordpress.tv/ (vídeos tutoriais)

### Tutoriais em Português
- **WPBeginner (Português):** https://www.wpbeginner.com/portugues/
- **WP Total:** https://wptotal.com.br/
- **Criar Sites WP:** https://criarsiteswp.com.br/

### Comunidades
- **WordPress Brasil:** Facebook groups
- **WordCamp:** Eventos presenciais
- **WordPress Meetups:** Encontros locais

### Ferramentas Úteis
- **Local by Flywheel:** https://localwp.com/
- **WP CLI:** https://wp-cli.org/ (linha de comando)
- **Query Monitor:** Plugin para debug

---

## Resumo da Aula

**Conceitos-chave aprendidos:**
1. WordPress é um CMS gratuito usado em 43% da web
2. Local by Flywheel facilita desenvolvimento local
3. Estrutura: wp-admin, wp-content, wp-includes
4. Posts = blog, Pages = conteúdo estático
5. Gutenberg = editor de blocos visual
6. Featured Image = imagem principal
7. Backup é essencial antes de qualquer mudança

**Próxima aula:** Temas Responsivos no WordPress - instalação, customização e child themes.

---

## Checklist de Aprendizagem

Ao final deste encontro, você deve ser capaz de:
- ✅ Instalar WordPress localmente com Local
- ✅ Navegar pelo Dashboard do WordPress
- ✅ Diferenciar Posts de Pages
- ✅ Criar conteúdo com editor Gutenberg
- ✅ Fazer upload de imagens na biblioteca de mídia
- ✅ Configurar permalinks SEO-friendly
- ✅ Definir página estática como homepage
- ✅ Fazer backup do site
- ✅ Entender estrutura de arquivos do WordPress
- ✅ Configurar settings básicos do WordPress