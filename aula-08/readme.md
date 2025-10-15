# Aula 08 - Navegação mobile

## Objetivo
- Dominar padrões de navegação mobile, incluindo menu hambúrguer, bottom navigation e outros padrões modernos.

---

## 1. Fundamentos de Navegação Mobile (45 min)

### 1.1 Desafios da Navegação Mobile

**Problemas comuns:**
- ❌ Espaço limitado na tela
- ❌ Menus muito pequenos (difícil tocar)
- ❌ Navegação profunda (muitos níveis)
- ❌ Links muito próximos
- ❌ Falta de indicação visual da localização

**Princípios de boa navegação mobile:**
- ✅ Touch targets ≥ 44x44px
- ✅ Priorizar conteúdo mais importante
- ✅ Hierarquia clara e simples
- ✅ Feedback visual de interação
- ✅ Acessível via teclado e screen readers

### 1.2 Padrões de Navegação Mobile

**1. Menu Hambúrguer (☰)**
- Mais comum
- Economiza espaço
- Pode esconder conteúdo importante

**2. Bottom Navigation**
- Fácil acesso com polegar
- Máximo 5 itens
- Popular em apps

**3. Tab Bar**
- Similar ao bottom navigation
- Usado em interfaces tipo aplicativo

**4. Menu Drawer (Gaveta)**
- Desliza da lateral
- Permite mais opções
- Comum em apps Android

**5. Priority+ Pattern**
- Mostra itens principais
- Esconde secundários em "mais"

### 1.3 Thumb Zone (Zona do Polegar)

```
┌─────────────────┐
│                 │ ← Difícil alcançar
│                 │
│     ╔═════╗     │
│     ║ ✓✓✓ ║     │ ← Fácil alcançar
│     ║ ✓✓✓ ║     │
│     ╚═════╝     │
└─────────────────┘
```

**Posicione elementos importantes:**
- Centro inferior: melhor acesso
- Cantos superiores: mais difícil
- Bottom navigation: ideal para ações principais

---

#### 1.2.3 Otimização de CSS e JavaScript
- **O que é:** A minimização e compressão de arquivos CSS e JavaScript pode acelerar o tempo de carregamento.
- **Como Implementar:** Utilize ferramentas como UglifyJS para JavaScript e CSSNano para CSS. Automatizadores de tarefas como Gulp ou Webpack também podem ser úteis.
- **Benefícios:** Arquivos menores significam tempos de carregamento mais rápidos e um melhor ranking nos SERPs.

#### 1.2.4 Utilizar Cache
- **O que é:** O armazenamento em cache permite que os navegadores armazenem cópias locais de recursos, reduzindo a necessidade de carregamentos subsequentes.
- **Como Implementar:** Configure cabeçalhos HTTP de cache para especificar quais recursos devem ser armazenados em cache e por quanto tempo.
- **Benefícios:** Isso melhora a velocidade de carregamento em visitas subsequentes.

### 1.3 Interface do usuário
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Um dos pontos cruciais da interação com dispositivos móveis é a interface tátil. Nesse contexto, botões e links não são apenas elementos visuais; eles são a principal forma de interação. \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Botões muito pequenos ou links muito próximos dificultam a usabilidade e podem levar a cliques acidentais, frustrando o usuário. Portanto, é crucial que botões e links sejam suficientemente grandes e bem espaçados para permitir uma interação fácil e precisa.

#### 1.3.1 Tamanho de Fonte Legível
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A legibilidade é outro fator vital na experiência do usuário móvel. Fontes pequenas podem ser difíceis de ler em telas menores, o que leva a um aumento na taxa de rejeição e uma diminuição no engajamento do usuário. \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As melhores práticas sugerem um tamanho de fonte base de pelo menos 16px para o conteúdo do corpo. Além disso, o uso de hierarquia tipográfica (cabeçalhos, subcabeçalhos, texto do corpo) facilita a leitura e a compreensão do conteúdo.

#### 1.3.2 Espaçamento e Layout Adequados
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Um bom design não é apenas o que você coloca na tela, mas também o espaço que você deixa em branco. \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O espaçamento adequado melhora a legibilidade e a capacidade de interação, enquanto um layout bem pensado ajuda os usuários a entenderem a estrutura da informação e a navegarem com mais eficácia. \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;É essencial manter uma boa relação entre os elementos para garantir que o design seja tanto atraente quanto funcional.

#### 1.3.3 Como implementar:
- **Botões e Links:** Assegure-se de que botões e links tenham um tamanho mínimo de 44px por 44px e sejam facilmente distinguíveis do resto do conteúdo.
- **Fonte:** Opte por uma tipografia clara e legível, com um tamanho mínimo de 16px para o texto do corpo.
- **Espaçamento e Layout:** Utilize um sistema de grade para alinhar elementos consistentemente e empregar espaçamento adequado. Mantenha uma distância suficiente entre os elementos clicáveis para evitar cliques errôneos.
- **Teste de Usabilidade:** Antes do lançamento, realize testes de usabilidade para verificar se os elementos da interface estão otimizados para interação em dispositivos móveis. Ferramentas como heatmaps podem ajudar a identificar áreas problemáticas.
