# Aula 07

## Objetivos

- Otimização de imagens

---

## 1. Fundamentos de Imagens Responsivas (45 min)

### 1.1 Por que Imagens Responsivas?

**Problemas com imagens fixas:**

- ❌ Imagem grande carregada em mobile (desperdício de banda)
- ❌ Imagem pequena esticada em desktop (perda de qualidade)
- ❌ Mesma imagem para todos os tamanhos de tela
- ❌ Alto tempo de carregamento
- ❌ Consumo excessivo de dados móveis

**Benefícios das imagens responsivas:**

- ✅ Performance otimizada (carrega tamanho adequado)
- ✅ Economia de dados para usuários mobile
- ✅ Melhor experiência visual
- ✅ SEO melhorado
- ✅ Core Web Vitals otimizadas

### 1.2 Conceitos Básicos

**Densidade de pixels (DPR - Device Pixel Ratio):**
```
Telas normais:     DPR = 1x
Telas Retina:      DPR = 2x
Telas Ultra-HD:    DPR = 3x
```

**Viewport vs Image Size:**
```
Mobile (375px viewport) com DPR 2x = precisa de imagem 750px
Desktop (1920px viewport) com DPR 1x = precisa de imagem 1920px
```