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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para proporcionar uma experiência de usuário otimizada e manter a visibilidade do site, é vital empregar diversas técnicas para melhorar a velocidade de carregamento em dispositivos móveis. Aqui estão algumas abordagens eficazes:

#### 1.2.1 Compressão de imagem
- **O que é:** Comprimir imagens significa reduzir seu tamanho de arquivo sem comprometer significativamente sua qualidade.
- **Como Implementar:** Utilize ferramentas como ImageOptim ou TinyPNG para comprimir imagens antes de carregá-las em seu site. Alternativamente, utilize bibliotecas ou plugins que façam isso automaticamente.
- **Benefícios:** Isso diminui o tempo necessário para baixar os recursos do site, melhorando a velocidade de carregamento.

#### 1.2.2 Formato da imagem
- **O que é:** Atualmente, existem mais de 10 formatos de imagem que podem ser usados. JPEG, PNG, GIFF, etc.
- **Como implementar:** Utilize ferramentas para alterar o tipo de formato da imagem. Use preferencialmente **WebP** (.webp).
- **Benefícios:** Melhor tempo de carregamento, menor perda de qualidade.

#### 1.2.3 Lazy Loading
- **O que é:** Lazy loading é uma técnica de otimização que carrega elementos visuais somente quando estão prestes a entrar na área de visualização da tela.
- **Como Implementar:** Utilize bibliotecas JavaScript como lozad.js ou opte por atributos HTML nativos como loading=”lazy” para implementar o lazy loading.
- **Benefícios:** Isso reduz o número de elementos que precisam ser carregados inicialmente, tornando a primeira pintura do conteúdo muito mais rápida.
[Vídeo](https://www.youtube.com/watch?v=hUOQrR9ovMg)

![Melhor uso de imagens](image.png)


## 🧠 Exercícios práticos
### 🧪 Exercício 1: Compressão e comparação
- Objetivo: Demonstrar o impacto da compressão
   - Pegue uma imagem de 1MB
   - Comprime usando [TinyPNG](https://tinypng.com/) ou [Squoosh](https://squoosh.app/)
   - Compare os tempos de carregamento em uma página simples antes e depois

### 🧪 Exercício 2: Implementação de srcset
- Objetivo: Servir imagens adaptadas ao dispositivo
   - Crie uma página com `<img>` usando `srcset` para 3 tamanhos diferentes
   - Teste em emuladores de smartphone e desktop

### 🧪 Exercício 3: Lazy loading
- Objetivo: Aplicar carregamento sob demanda
   - Crie uma galeria com 10 imagens
   - Use loading="lazy" no HTML
   - Verifique com DevTools se as imagens são carregadas conforme o scroll

### 🧪 Exercício 4: Conversão para WebP
- Objetivo: Reduzir tamanho com novo formato
   - Converta uma imagem PNG para WebP
   - Compare visualmente e em tamanho
   - Teste compatibilidade nos navegadores
