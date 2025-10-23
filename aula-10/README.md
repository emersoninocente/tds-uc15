# Aula 10

## Objetivos
- Navegar pelos principais menus administrativos do WordPress
- Criar uma página simples
- Criar um post
- Quando usar Post e quando usar Página

---
## Navegar pelos Menus Administrativos
O Dashboard (Painel Administrativo)

**URL de acesso:**
```
http://seusite.local/wp-admin/
ou
http://localhost/seusite/wp-admin/
```

**Estrutura do Dashboard:**

```
┌─────────────────────────────────┐
│ WordPress Logo | Site Name   🔔│
├─────────────────────────────────┤
│ Dashboard                       │
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

### Principais Seções

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

---
## Criar uma página

*Características:**
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

---
## Criar um Post
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

---
## Quando usar Post e quando usar Página
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
## Editor Gutenberg

### O que é Gutenberg?

**Gutenberg** é o editor de blocos do WordPress (desde versão 5.0).

**Vantagens:**
- ✅ Interface moderna
- ✅ Editor visual (WYSIWYG)
- ✅ Blocos reutilizáveis
- ✅ Mobile-friendly
- ✅ Layouts complexos sem código

### Blocos Principais

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

---
## Exercício Prático
Criar Primeira Página com Gutenberg

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
