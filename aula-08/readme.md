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