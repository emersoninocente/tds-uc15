# Aula 16 - Testes e Debug Mobile

**Carga Horária:** 4 horas  
**Objetivo:** Dominar técnicas de teste, debug e otimização de sites WordPress Mobile First, garantindo qualidade e performance em todos os dispositivos.

---

## 1. Introdução aos Testes Mobile (20 min)

### 1.1 Por que Testar no Mobile?

**Estatísticas críticas:**
- 60%+ do tráfego web é mobile
- 53% dos usuários abandonam sites que levam > 3s
- 88% dos usuários não retornam após má experiência
- Google prioriza mobile no ranking (Mobile-First Indexing)

**Problemas comuns encontrados apenas no mobile:**
```
❌ Layout quebrado em telas pequenas
❌ Texto ilegível (< 16px)
❌ Botões muito pequenos (< 44px)
❌ Elementos sobrepostos
❌ Menu não funciona
❌ Formulários impossíveis de usar
❌ Imagens enormes (performance)
❌ JavaScript com erros
```

### 1.2 Tipos de Teste

**1. Teste Visual**
- Layout responsivo
- Tipografia legível
- Espaçamentos adequados
- Imagens não quebradas

**2. Teste Funcional**
- Links funcionam
- Formulários submetem
- Menus abrem/fecham
- Botões clicáveis

**3. Teste de Performance**
- Velocidade de carregamento
- Tamanho de recursos
- Requisições HTTP
- Core Web Vitals

**4. Teste de Usabilidade**
- Navegação intuitiva
- Touch targets adequados
- Scroll suave
- Feedback visual

**5. Teste de Compatibilidade**
- Diferentes navegadores
- Diferentes dispositivos
- Diferentes resoluções
- iOS vs Android

---

## 2. Ferramentas de Teste Mobile (40 min)

### 2.1 Chrome DevTools - A Ferramenta Essencial

**ROTEIRO: Usar Chrome DevTools para Testar Mobile**

```
═══════════════════════════════════════════════════════
PASSO 1: ABRIR DEVTOOLS
═══════════════════════════════════════════════════════

1. Abrir site no Chrome

2. Pressionar F12 (ou Ctrl+Shift+I / Cmd+Option+I)

3. Clicar no ícone de dispositivo (ou Ctrl+Shift+M)
   📱 Toggle Device Toolbar

✅ Modo de simulação mobile ativado
```

```
═══════════════════════════════════════════════════════
PASSO 2: SELECIONAR DISPOSITIVOS
═══════════════════════════════════════════════════════

No topo da página, dropdown "Dimensions":

Dispositivos comuns para testar:

MOBILE:
- iPhone SE (375x667) - pequeno
- iPhone 12/13/14 (390x844) - médio
- Samsung Galaxy S20 (360x800)
- Pixel 5 (393x851)

TABLET:
- iPad (768x1024)
- iPad Pro (1024x1366)
- Surface Pro 7 (912x1368)

CUSTOM:
- Responsive (arraste para qualquer tamanho)
- Edit... (criar tamanhos customizados)

✅ Testar em pelo menos 3 dispositivos diferentes
```

```
═══════════════════════════════════════════════════════
PASSO 3: FUNCIONALIDADES DEVTOOLS MOBILE
═══════════════════════════════════════════════════════

BARRA SUPERIOR (configurações):

1. Rotate Device: 🔄
   - Testar landscape e portrait

2. Throttling: Network
   - Fast 3G (simula conexão 3G)
   - Slow 3G (testa performance ruim)
   - Offline (testa sem conexão)

3. Show media queries:
   - Ver breakpoints CSS
   - Linhas azuis mostram @media queries

4. Show device frame:
   - Visualizar com moldura do dispositivo

5. Show rulers:
   - Régua em pixels

6. Capture screenshot: 📷
   - Screenshot do dispositivo específico

✅ Explorar todas as funcionalidades
```

```
═══════════════════════════════════════════════════════
PASSO 4: INSPECIONAR ELEMENTOS MOBILE
═══════════════════════════════════════════════════════

1. Clicar em elemento na página

2. Tab "Elements" mostra HTML/CSS

3. Tab "Computed" mostra:
   - Tamanho real (width, height)
   - Margens e paddings
   - Box model visual

VERIFICAR:
☐ Touch targets > 44px
☐ Font-size > 16px
☐ Espaçamentos adequados
☐ Z-index correto (sem sobreposições)

✅ Elementos inspecionados
```

```
═══════════════════════════════════════════════════════
PASSO 5: CONSOLE DE ERROS
═══════════════════════════════════════════════════════

1. Tab "Console"

2. Procurar mensagens:
   🔴 Erros (vermelho) - CRÍTICO!
   ⚠️ Warnings (amarelo) - Atenção
   ℹ️ Info (azul) - Informativo

ERROS COMUNS:
- jQuery não carregado
- Imagem 404 (não encontrada)
- CORS errors
- JavaScript syntax errors

3. Clicar no erro para ver:
   - Arquivo causador
   - Linha do erro
   - Stack trace

✅ Console sem erros críticos
```

```
═══════════════════════════════════════════════════════
PASSO 6: NETWORK (PERFORMANCE)
═══════════════════════════════════════════════════════

1. Tab "Network"

2. Recarregar página (F5)

3. Ver todas requisições:

ANALISAR:
- Total de requisições (ideal < 50)
- Tamanho total transferido (ideal < 2MB)
- Tempo de carregamento (ideal < 3s)
- Arquivos grandes (> 500KB)

4. Filtros úteis:
   - Img (apenas imagens)
   - JS (JavaScript)
   - CSS (estilos)
   - Font (fontes)

5. Clicar em arquivo para ver:
   - Size (tamanho)
   - Time (tempo)
   - Waterfall (ordem de carregamento)

✅ Performance analisada
```

### 2.2 Lighthouse - Auditoria Automatizada

**ROTEIRO: Executar Lighthouse Audit**

```
═══════════════════════════════════════════════════════
EXECUTAR LIGHTHOUSE NO CHROME
═══════════════════════════════════════════════════════

1. F12 → Tab "Lighthouse"

2. Configurar:
   ☑ Performance
   ☑ Accessibility
   ☑ Best Practices
   ☑ SEO
   
   Device: Mobile
   
3. Click "Analyze page load"

4. Aguardar análise (30-60s)

5. Resultados (0-100 pontos):
   
   PERFORMANCE:
   - 90-100: 🟢 Excelente
   - 50-89: 🟡 Precisa melhorar
   - 0-49: 🔴 Ruim

   ACCESSIBILITY:
   - Contraste de cores
   - Alt text em imagens
   - Labels em formulários
   - Heading hierarchy

   BEST PRACTICES:
   - HTTPS ativo
   - Console sem erros
   - Imagens com dimensões
   - Versões atualizadas

   SEO:
   - Meta description
   - Title único
   - Viewport configurado
   - Fontes legíveis

6. Expandir cada seção para ver:
   - Problemas detectados
   - Sugestões de correção
   - Links para documentação

✅ Lighthouse executado e analisado
```

```
═══════════════════════════════════════════════════════
INTERPRETAR CORE WEB VITALS
═══════════════════════════════════════════════════════

Lighthouse mostra 3 métricas críticas:

1. LCP (Largest Contentful Paint)
   O que é: Tempo até maior elemento visível
   Meta: < 2.5s
   Como melhorar:
   - Otimizar imagens
   - Remover JavaScript desnecessário
   - Usar cache

2. FID (First Input Delay)
   O que é: Tempo até primeira interação
   Meta: < 100ms
   Como melhorar:
   - Reduzir JavaScript
   - Code splitting
   - Defer scripts

3. CLS (Cumulative Layout Shift)
   O que é: Estabilidade visual (elementos pulando)
   Meta: < 0.1
   Como melhorar:
   - Definir width/height em imagens
   - Reservar espaço para ads
   - Evitar inserir conteúdo acima do fold

✅ Core Web Vitals compreendidos
```

### 2.3 Ferramentas Online

**ROTEIRO: Testar com Ferramentas Externas**

```
═══════════════════════════════════════════════════════
GOOGLE PAGESPEED INSIGHTS
═══════════════════════════════════════════════════════

1. Acessar: https://pagespeed.web.dev/

2. Inserir URL do site

3. Click "Analyze"

4. Ver resultados para:
   - Mobile
   - Desktop

5. Exportar relatório (PDF)

VANTAGENS:
✅ Dados reais de usuários (Field Data)
✅ Sugestões específicas
✅ Comparação mobile vs desktop

✅ PageSpeed testado
```

```
═══════════════════════════════════════════════════════
GTMETRIX
═══════════════════════════════════════════════════════

1. Acessar: https://gtmetrix.com/

2. Criar conta gratuita

3. Testar URL

4. Ver:
   - Performance Score
   - Structure Score
   - Waterfall chart (carregamento visual)
   - Video playback

5. Comparar testes:
   - Antes vs depois de otimizações
   - Diferentes localizações

✅ GTmetrix analisado
```

```
═══════════════════════════════════════════════════════
RESPONSIVEDESIGNCHECKER
═══════════════════════════════════════════════════════

1. Acessar: https://responsivedesignchecker.com/

2. Inserir URL

3. Ver em múltiplos dispositivos:
   - Desktop (24", 23", 20", 19")
   - Laptop (15", 13", 10")
   - Tablet (iPad, Kindle, Nexus)
   - Mobile (iPhone, Galaxy, etc)

4. Screenshot de todos

✅ Responsividade verificada
```

---

## 3. Debug de Problemas Comuns (50 min)

### 3.1 Problema: Layout Quebrado no Mobile

**ROTEIRO: Diagnosticar e Corrigir Layout**

```
═══════════════════════════════════════════════════════
SINTOMAS
═══════════════════════════════════════════════════════

- Elementos saem da tela
- Scroll horizontal aparece
- Conteúdo sobreposto
- Imagens enormes

═══════════════════════════════════════════════════════
DIAGNÓSTICO
═══════════════════════════════════════════════════════

1. F12 → Device Toolbar → Mobile

2. Inspecionar elemento problemático

3. Verificar no "Computed":
   - Width > viewport? (problema!)
   - Position: fixed? (pode causar overflow)
   - Margin negativa grande?

4. Procurar no CSS:
   - width: com valor fixo em px
   - min-width: muito grande
   - Falta de max-width: 100%

═══════════════════════════════════════════════════════
SOLUÇÃO
═══════════════════════════════════════════════════════

Adicionar ao CSS:

/* Fix global para elementos não quebrarem */
img,
video,
iframe {
  max-width: 100%;
  height: auto;
}

/* Fix para containers */
.container,
.content-area {
  max-width: 100%;
  overflow-x: hidden;
}

/* Fix para tabelas */
table {
  max-width: 100%;
  overflow-x: auto;
  display: block;
}

/* Descobrir elemento causador de overflow */
* {
  outline: 1px solid red; /* Temporário! */
}

/* Remover outline depois de encontrar problema */

✅ Layout corrigido
```

### 3.2 Problema: Texto Muito Pequeno

**ROTEIRO: Corrigir Tipografia Mobile**

```
═══════════════════════════════════════════════════════
SINTOMAS
═══════════════════════════════════════════════════════

- iPhone dá zoom automático ao tocar input
- Texto difícil de ler
- Usuários reclamam de legibilidade

═══════════════════════════════════════════════════════
DIAGNÓSTICO
═══════════════════════════════════════════════════════

1. Inspecionar texto

2. Computed → font-size

3. Se < 16px → PROBLEMA!
   iOS dá zoom em inputs < 16px

═══════════════════════════════════════════════════════
SOLUÇÃO
═══════════════════════════════════════════════════════

/* Mobile First - Base 16px MÍNIMO */
body {
  font-size: 16px;
}

/* Inputs NUNCA < 16px */
input,
textarea,
select {
  font-size: 16px; /* Previne zoom iOS */
}

/* Headings proporcionais */
h1 { font-size: 2rem; }    /* 32px */
h2 { font-size: 1.75rem; } /* 28px */
h3 { font-size: 1.5rem; }  /* 24px */

/* Tablet+ pode aumentar */
@media (min-width: 768px) {
  body { font-size: 18px; }
  h1 { font-size: 2.5rem; }
}

✅ Tipografia corrigida
```

### 3.3 Problema: Botões Difíceis de Tocar

**ROTEIRO: Corrigir Touch Targets**

```
═══════════════════════════════════════════════════════
SINTOMAS
═══════════════════════════════════════════════════════

- Usuários erram ao clicar
- Botões muito próximos
- Difícil tocar em links

═══════════════════════════════════════════════════════
DIAGNÓSTICO
═══════════════════════════════════════════════════════

1. Inspecionar botão/link

2. Computed → Ver dimensões reais

3. Se width ou height < 44px → PROBLEMA!
   Apple recomenda mínimo 44x44px

═══════════════════════════════════════════════════════
SOLUÇÃO
═══════════════════════════════════════════════════════

/* Touch targets adequados */
a,
button,
.btn,
input[type="submit"] {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
}

/* Espaçamento entre elementos tocáveis */
.menu a {
  margin: 0.5rem 0; /* Espaço vertical */
}

.button-group .btn {
  margin: 0.5rem; /* Espaço ao redor */
}

/* Links em texto - área maior */
.content a {
  padding: 0.25rem;
  margin: -0.25rem;
}

✅ Touch targets corrigidos
```

### 3.4 Problema: Menu não Funciona no Mobile

**ROTEIRO: Debug Menu Hambúrguer**

```
═══════════════════════════════════════════════════════
SINTOMAS
═══════════════════════════════════════════════════════

- Menu não abre ao clicar
- Menu abre mas não fecha
- JavaScript error no console

═══════════════════════════════════════════════════════
DIAGNÓSTICO
═══════════════════════════════════════════════════════

1. F12 → Console → Procurar erros

2. Clicar no botão de menu

3. Verificar:
   - jQuery carregado?
   - JavaScript syntax error?
   - Event listener registrado?

4. Network → Ver se JS carregou

═══════════════════════════════════════════════════════
SOLUÇÃO - JAVASCRIPT PURO
═══════════════════════════════════════════════════════

<!-- HTML -->
<button class="menu-toggle" id="menuToggle">☰</button>
<nav class="mobile-menu" id="mobileMenu">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">Sobre</a></li>
  </ul>
</nav>

<style>
/* CSS */
.mobile-menu {
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  height: 100vh;
  background: white;
  transition: left 0.3s;
  z-index: 9999;
}

.mobile-menu.active {
  left: 0;
}
</style>

<script>
// JavaScript simples e funcional
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
    
    // Fechar ao clicar fora
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove('active');
      }
    });
  }
});
</script>

✅ Menu funcionando
```

### 3.5 Problema: Performance Ruim

**ROTEIRO: Otimizar Performance Mobile**

```
═══════════════════════════════════════════════════════
SINTOMAS
═══════════════════════════════════════════════════════

- Site lento (> 3s)
- Lighthouse score baixo
- Usuários reclamam

═══════════════════════════════════════════════════════
DIAGNÓSTICO COM QUERY MONITOR
═══════════════════════════════════════════════════════

1. Instalar plugin: Query Monitor

2. Ativar plugin

3. Na barra superior, clicar em Query Monitor

4. Ver:
   - Database Queries (quantas queries?)
   - Scripts (JS carregados)
   - Styles (CSS carregados)
   - HTTP Requests

PROBLEMAS COMUNS:
🔴 > 100 queries = problema!
🔴 Scripts > 1MB = problema!
🔴 Muitos HTTP requests = problema!

═══════════════════════════════════════════════════════
SOLUÇÕES IMEDIATAS
═══════════════════════════════════════════════════════

1. OTIMIZAR IMAGENS:
   - Usar WebP
   - Comprimir (TinyPNG)
   - Lazy loading ativo

2. MINIFICAR CSS/JS:
   Plugin: Autoptimize
   - Agregar CSS
   - Minificar JavaScript
   - Defer JavaScript

3. CACHE:
   Plugin: WP Rocket ou LiteSpeed Cache
   - Page cache
   - Browser cache
   - Object cache

4. CDN:
   - Cloudflare (gratuito)
   - BunnyCDN
   - KeyCDN

5. LIMITAR PLUGINS:
   - Desativar plugins não usados
   - Verificar impacto de cada um
   - Substituir plugins pesados

✅ Performance melhorada
```

---

## 4. Testes em Dispositivos Reais (40 min)

### 4.1 Por que Testar em Dispositivo Real?

**Limitações de simuladores:**
```
❌ Touch não é igual a click de mouse
❌ Performance diferente
❌ Bugs específicos de iOS/Android
❌ Teclado virtual não aparece
❌ Gestos nativos não funcionam
❌ GPS e sensores não simulados
```

**Vantagens de testar no real:**
```
✅ Experiência exata do usuário
✅ Touch real (dedos, não mouse)
✅ Performance real do dispositivo
✅ Bugs específicos aparecem
✅ Teclado virtual funcional
✅ Rede móvel real (3G/4G)
```

### 4.2 Roteiro: Testar no Smartphone

```
═══════════════════════════════════════════════════════
MÉTODO 1: MESMA REDE WIFI
═══════════════════════════════════════════════════════

1. Computador e smartphone na mesma WiFi

2. No Local by Flywheel, ver o IP:
   Site → Tools → Live Link
   Ou ver IP local: 192.168.x.x

3. No smartphone, abrir navegador

4. Digitar: http://192.168.x.x:porta/

5. Navegar pelo site como usuário real

TESTAR:
☐ Touch em todos botões
☐ Formulários (teclado aparece?)
☐ Menu abre/fecha
☐ Scroll suave
☐ Imagens carregam
☐ Links funcionam
☐ Performance aceitável

✅ Testado em dispositivo real
```

```
═══════════════════════════════════════════════════════
MÉTODO 2: NGROK (ACESSO EXTERNO)
═══════════════════════════════════════════════════════

Para testar de qualquer lugar (4G, fora de casa):

1. Instalar ngrok: https://ngrok.com/

2. No terminal:
   ngrok http 80

3. Copiar URL gerada:
   https://abc123.ngrok.io

4. Abrir no smartphone (qualquer rede)

5. Testar site

VANTAGENS:
✅ Testa em 3G/4G real
✅ Compartilhar com cliente
✅ Testar de qualquer lugar

✅ Testado via ngrok
```

```
═══════════════════════════════════════════════════════
MÉTODO 3: BROWSERSTACK (MÚLTIPLOS DISPOSITIVOS)
═══════════════════════════════════════════════════════

Serviço pago, mas tem trial gratuito

1. Acessar: https://www.browserstack.com/

2. Criar conta (trial gratuito)

3. Live → Escolher dispositivo:
   - iPhone 14
   - Samsung Galaxy S23
   - iPad Pro
   - Pixel 7

4. Inserir URL do site

5. Interagir como no dispositivo real

VANTAGENS:
✅ Acesso a 100+ dispositivos
✅ Diferentes versões de iOS/Android
✅ Captura de screenshots
✅ DevTools integrado

✅ Testado em múltiplos dispositivos
```

---

## 5. Checklist de Testes Completo (30 min)

### 5.1 Checklist Mobile First

```
═══════════════════════════════════════════════════════
VISUAL E LAYOUT
═══════════════════════════════════════════════════════

MOBILE (< 768px):
☐ Layout não quebra
☐ Sem scroll horizontal
☐ Imagens responsivas (não saem da tela)
☐ Texto legível (mín 16px)
☐ Espaçamentos adequados
☐ Nenhum elemento sobreposto

TABLET (768px - 1024px):
☐ Layout apropriado (não muito esticado)
☐ Imagens proporcionais
☐ Menus funcionais

DESKTOP (1024px+):
☐ Layout otimizado
☐ Uso eficiente do espaço
☐ Max-width aplicado (não muito largo)

═══════════════════════════════════════════════════════
FUNCIONALIDADE
═══════════════════════════════════════════════════════

NAVEGAÇÃO:
☐ Menu abre no mobile
☐ Menu fecha ao clicar item
☐ Todos links funcionam
☐ Submenu funcional (se houver)

FORMULÁRIOS:
☐ Campos clicáveis
☐ Teclado correto aparece (email, tel, etc)
☐ Labels visíveis
☐ Botão submit funcionando
☐ Validação funcional
☐ Mensagens de erro visíveis

BOTÕES:
☐ Touch targets > 44px
☐ Espaçamento entre botões
☐ Feedback visual ao tocar
☐ Todos funcionam

MÍDIA:
☐ Imagens carregam
☐ Vídeos são clicáveis
☐ Lazy loading funcionando

═══════════════════════════════════════════════════════
PERFORMANCE
═══════════════════════════════════════════════════════

LIGHTHOUSE:
☐ Performance > 90 (mobile)
☐ Accessibility > 90
☐ Best Practices > 90
☐ SEO > 90

MÉTRICAS:
☐ LCP < 2.5s
☐ FID < 100ms
☐ CLS < 0.1

RECURSOS:
☐ Imagens otimizadas (< 200KB cada)
☐ Total página < 2MB
☐ < 50 requisições HTTP

═══════════════════════════════════════════════════════
COMPATIBILIDADE
═══════════════════════════════════════════════════════

NAVEGADORES MOBILE:
☐ Chrome (Android)
☐ Safari (iOS)
☐ Firefox Mobile
☐ Samsung Internet

DISPOSITIVOS:
☐ iPhone (iOS atual)
☐ Android (Samsung/Pixel)
☐ Tablet (iPad)

ORIENTAÇÃO:
☐ Portrait (vertical)
☐ Landscape (horizontal)

═══════════════════════════════════════════════════════
ACESSIBILIDADE
═══════════════════════════════════════════════════════

☐ Contraste adequado (4.5:1 mín)
☐ Alt text em imagens
☐ Labels em formulários
☐ Heading hierarchy (H1 → H2 → H3)
☐ Links descritivos (não "clique aqui")
☐ Focus visível em elementos

═══════════════════════════════════════════════════════
SEO MOBILE
═══════════════════════════════════════════════════════

☐ Meta viewport configurado
☐ Title único e descritivo
☐ Meta description presente
☐ URLs amigáveis
☐ Sitemap.xml existe
☐ Robots.txt configurado

═══════════════════════════════════════════════════════
SEGURANÇA
═══════════════════════════════════════════════════════

☐ HTTPS ativo (cadeado verde)
☐ WordPress atualizado
☐ Plugins atualizados
☐ Tema atualizado
☐ Sem erros no console
☐ Formulários com validação
```

---

## 6. Exercício Prático 1: Auditoria Completa (Guiado) (45 min)

### Objetivo
Realizar auditoria completa de um site WordPress mobile, documentar problemas e criar plano de correção.

### ROTEIRO PASSO A PASSO

```
═══════════════════════════════════════════════════════
PARTE 1: PREPARAÇÃO (5 min)
═══════════════════════════════════════════════════════

1. Escolher site para auditar:
   - Pode ser projeto próprio
   - Ou site público (exemplo)

2. Criar documento para registros:
   - Google Docs ou Word
   - Título: "Auditoria Mobile - [Nome do Site]"
   - Data: hoje

3. Estrutura do documento:
   📱 MOBILE (< 768px)
   💻 TABLET (768px - 1024px)
   🖥️ DESKTOP (> 1024px)
   ⚡ PERFORMANCE
   🐛 BUGS ENCONTRADOS
   ✅ PLANO DE CORREÇÃO

☐ Documento criado
```

```
═══════════════════════════════════════════════════════
PARTE 2: TESTE VISUAL MOBILE (15 min)
═══════════════════════════════════════════════════════

1. Abrir site no Chrome

2. F12 → Device Toolbar → iPhone 12

3. Testar cada página:
   - Homepage
   - Sobre
   - Contato
   - Blog/Artigo
   - Produto (se houver)

4. Para CADA página, verificar e documentar:

LAYOUT:
- Quebra? (sim/não)
- Scroll horizontal? (sim/não)
- Elementos sobrepostos? (sim/não)

TIPOGRAFIA:
- Título legível? (sim/não)
- Corpo de texto legível? (sim/não)
- Font-size mínimo? (medir no DevTools)

IMAGENS:
- Carregam? (sim/não)
- Tamanho adequado? (sim/não)
- Saem da tela? (sim/não)

BOTÕES:
- Tamanho adequado? (medir: > 44px?)
- Espaçamento suficiente? (sim/não)
- Clicáveis? (testar)

5. Screenshot de problemas encontrados

☐ Teste visual mobile completo
☐ Problemas documentados
```

```
═══════════════════════════════════════════════════════
PARTE 3: TESTE FUNCIONAL (10 min)
═══════════════════════════════════════════════════════

MENU:
☐ Abre ao clicar
☐ Fecha ao clicar fora
☐ Todos links funcionam
☐ Submenu funciona (se houver)

FORMULÁRIO DE CONTATO:
☐ Campos clicáveis
☐ Labels visíveis
☐ Placeholder adequado
☐ Teclado correto (email = @, tel = números)
☐ Botão submit funciona
☐ Mensagem de sucesso aparece

BUSCA:
☐ Campo funcional
☐ Resultados aparecem
☐ Responsivo
