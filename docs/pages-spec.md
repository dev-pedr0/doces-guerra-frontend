# Especificações de Páginas e Seções (pages-spec.md)

Este documento contém as especificações de layout, estilo e comportamento para as **Páginas e Seções** do projeto. 

Conforme as diretrizes de arquitetura do projeto:
* **Local das Seções e Páginas:** Devem ficar estritamente dentro do diretório **`src/pages/`** (ex: `src/pages/home/HeroSection.tsx`).
* A pasta `src/components/` é reservada exclusivamente para elementos e componentes reutilizáveis de UI/Layout (como Header e Footer).

---

## 1. Hero Section (Página Inicial / Home)

**Local do arquivo:** `src/pages/home/HeroSection.tsx`

Primeira seção de destaque exibida no topo da página inicial do site.

### 1.1 Especificações da Seção (Mobile e Desktop)
* **Comportamento Responsivo:** Idêntico para telas Mobile (< 1024px) e Desktop (>= 1024px).
* **Dimensões:** Largura total (`w-full`), altura total da viewport (`h-screen` / `100vh`).
* **Espaçamento (Padding):** Eixo Y: `0px` (`py-0`), Eixo X: `16px` (`px-4`).
* **Background e Overlay:**
    * Imagem de fundo localizada em `/pictures/bg-hero.png` (ou `.jpg`).
    * Overlay escuro por cima da imagem com **60% de opacidade** (`bg-black/60` ou `bg-black bg-opacity-60`).
    * Alinhamento de fundo centralizado e cobrindo toda a área (`bg-cover bg-center`).

### 1.2 Elementos Internos
* **Estrutura:** Elementos alinhados em coluna (`flex flex-col justify-center items-center text-center`), com espaçamento `gap-[40px]`.
* **Título Principal:**
    * Texto: *"Conheça nosso cardápio, ele foi desenvolvido pensando em você"*
    * Estilo: Classe de tipografia `display-hero`, cor semântica `text-light`, alinhamento centralizado.
* **Subtítulo / Chamada:**
    * Texto: *"Conheça Mais"*
    * Estilo: Classe de tipografia `display-sub`, cor semântica `text-light`.
* **Ícone Indicador (Chevron Down):**
    * Importado da biblioteca `lucide-react`: `<ChevronDown />`.
    * Tamanho: `40px` (`w-[40px] h-[40px]`).
    * Cor: Alinhado à cor do texto claro (`text-light`).
    * Animação / Interatividade: Efeito de bounce contínuo no hover (`hover:animate-bounce cursor-pointer`).

## 2. Product Section (Seção de Produtos / Home)

**Local do arquivo:** `src/pages/home/ProductSection.tsx`

Seção responsável por exibir o carrossel de produtos em destaque na página inicial, integrando o componente `Generic Carousel` e renderizando cards individuais através do `Product Card`.

---

### 2.1 Layout e Responsividade

#### Mobile (< 1024px)
* **Dimensões:** Largura total (`w-full`), Altura variável (`h-auto`).
* **Espaçamento (Padding):** Eixo Y: `48px` (`py-[48px]`), Eixo X: `16px` (`px-[16px]`).
* **Fundo:** Classe semântica `bg-surface`.
* **Disposição Interna:** Flex em coluna, totalmente centralizado (`flex flex-col items-center justify-center`), com `gap-[32px]`.

#### Desktop (>= 1024px)
* **Dimensões:** Largura total (`w-full`), Altura variável (`h-auto`).
* **Espaçamento (Padding):** Eixo Y: `64px` (`lg:py-[64px]`), Eixo X: `144px` (`lg:px-[144px]`).
* **Fundo:** Classe semântica `bg-surface`.
* **Disposição Interna:** Flex em coluna, totalmente centralizado (`flex flex-col items-center justify-center`), com `gap-[40px]`.

---

### 2.2 Elementos Internos

1. **Título da Seção:**
   * **Texto:** *"Confira qual vai ser a sua sobremesa de hoje"*
   * **Estilo do Texto:** Classe de tipografia `heading-h1`.
   * **Cor Responsiva:**
     * Mobile (< 1024px): Classe semântica `text-body`.
     * Desktop (>= 1024px): Classe semântica `text-title` (`lg:text-title`).
   * **Alinhamento:** Centralizado (`text-center`).

2. **Carrossel de Produtos:**
   * Instância do componente **Generic Carousel** (`src/components/ui/GenericCarousel.tsx`).
   * **Massa de Dados:** Deve ser alimentado por uma lista/array de dados contendo o título e a imagem de cada produto (ex: importada da pasta `src/data/`).
   * **Renderização dos Itens:** Passa a prop de renderização montando cada item como um **Product Card** (`src/components/ui/ProductCard.tsx`), repassando o `title` e a `imageUrl`.