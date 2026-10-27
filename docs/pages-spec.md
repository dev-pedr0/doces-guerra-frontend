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

## 3. About Me Section (Seção Sobre Mim / Home)

**Local do arquivo:** `src/pages/home/AboutMeSection.tsx`

Seção responsável por apresentar a história da fundadora e do estabelecimento, composta por um texto institucional, um divisor gráfico em cruz e uma imagem ilustrativa retangular.

---

### 3.1 Fonte de Dados (Massa de Dados)
* **Arquivo de Origem:** Os dados de texto (história/apresentação) e a URL/caminho da imagem devem ser importados do arquivo de dados **`src/data/about-me.ts`** (ou `data/about-me.ts`).

---

### 3.2 Layout e Responsividade

#### Mobile (< 1024px)
* **Dimensões:** Largura total (`w-full`), Altura variável (`h-auto`).
* **Espaçamento (Padding):** Eixo Y: `48px` (`py-[48px]`), Eixo X: `16px` (`px-[16px]`).
* **Fundo:** Classe semântica `bg-page`.
* **Disposição Interna:** Flex em coluna, centralizado ao topo (`flex flex-col items-center justify-start`), com `gap-[24px]`.

#### Desktop (>= 1024px)
* **Dimensões:** Largura total (`w-full`), Altura variável (`h-auto`).
* **Espaçamento (Padding):** Eixo Y: `64px` (`lg:py-[64px]`), Eixo X: `144px` (`lg:px-[144px]`).
* **Fundo:** Classe semântica `bg-page`.
* **Disposição Interna:** Flex em coluna, centralizado ao topo (`flex flex-col items-center justify-start`), com `gap-[24px]`.

---

### 3.3 Elementos Internos

1. **Texto da Cliente (Apresentação):**
   * **Origem dos Dados:** Importado da propriedade de texto do arquivo `src/data/about-me.ts`.
   * **Cor do Texto:** Classe semântica `text-body`.
   * **Alinhamento:** Justificado (`text-justify`).
   * **Tipografia Responsiva:**
     * Mobile (< 1024px): Classe `body-small`.
     * Desktop (>= 1024px): Classe `body-medium` (`lg:body-medium`).

2. **Divisor Decorativo (Linhas em Cruz):**
   * **Estrutura:** Duas linhas perpendiculares com espessura de `2px` e cor da classe semântica `text-muted` (`--chocolate-500`):
     * **Linha Horizontal:** Largura total da área de conteúdo (`w-full`), espessura `2px`.
     * **Linha Vertical:** Altura de `59px` (`h-[59px]`), espessura `2px`, centralizada cortando a linha horizontal ao meio.

3. **Imagem Retangular:**
   * **Origem dos Dados:** Importada da propriedade de imagem/caminho do arquivo `src/data/about-me.ts`.
   * **Descrição:** Imagem retangular do estabelecimento / fachada.
   * **Estilo:** Largura total respeitando o container/paddings (`w-full`), mantendo as proporções de aspecto retangular.

---

## 4. Feedback Section (Seção de Feedback / Home)

**Local do arquivo:** `src/pages/home/FeedbackSection.tsx`

Seção responsável por exibir depoimentos e avaliações de clientes através do carrossel interativo, integrando os componentes `Generic Carousel` e `Feedback Card`.

---

### 4.1 Layout e Responsividade

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

### 4.2 Elementos Internos

1. **Título da Seção:**
   * **Texto:** *"Veja o que os nossos clientes têm a dizer sobre nós"*
   * **Estilo do Texto:** Classe de tipografia `heading-h1` e classe semântica `text-title`.
   * **Alinhamento:** Centralizado (`text-center`).

2. **Carrossel de Feedbacks:**
   * Instância do componente **Generic Carousel** (`src/components/ui/GenericCarousel.tsx`).
   * **Massa de Dados:** Gerada dinamicamente a partir do arquivo de lista em **`src/data/feedbacks.ts`**.
   * **Renderização dos Itens:** Passa a prop de renderização montando cada item como um **Feedback Card** (`src/components/ui/FeedbackCard.tsx`), repassando o objeto `feedback` correspondente.

---

## 5. Alert Section (Seção de Alerta / Home)

**Local do arquivo:** `src/pages/home/AlertSection.tsx`

Seção de aviso informativo/alerta importante sobre alergênicos e restrições alimentares nos produtos.

---

### 5.1 Fonte de Dados (Massa de Dados)
* **Arquivo de Origem:** Os textos (título e mensagem do alerta) devem vir obrigatoriamente do arquivo de dados **`src/data/alert.ts`** (ex: contendo as propriedades `title` e `message`).

---

### 5.2 Layout e Responsividade

#### Mobile (< 1024px)
* **Dimensões:** Largura total (`w-full`), Altura variável (`h-auto`).
* **Espaçamento (Padding):** Eixo Y: `48px` (`py-[48px]`), Eixo X: `16px` (`px-[16px]`).
* **Fundo:** Classe semântica `bg-page`.
* **Disposição Interna:** Flex em coluna, totalmente centralizado (`flex flex-col items-center justify-center text-center`), com `gap-[32px]`.

#### Desktop (>= 1024px)
* **Dimensões:** Largura total (`w-full`), Altura variável (`h-auto`).
* **Espaçamento (Padding):** Eixo Y: `64px` (`lg:py-[64px]`), Eixo X: `144px` (`lg:px-[144px]`).
* **Fundo:** Classe semântica `bg-page`.
* **Disposição Interna:** Flex em coluna, totalmente centralizado (`flex flex-col items-center justify-center text-center`), com `gap-[40px]`.

---

### 5.3 Elementos Internos

1. **Título de Alerta:**
   * **Origem dos Dados:** Importado da propriedade de título de `src/data/alert.ts` (ex: *"Atenção!!"*).
   * **Tipografia:** Classe `heading-h1` (ou `h1`).
   * **Cor semântica:** Classe de cor de status/perigo `text-status-danger` (ou `text-danger`).
   * **Alinhamento:** Centralizado (`text-center`).

2. **Texto do Alerta:**
   * **Origem dos Dados:** Importado da propriedade de mensagem de `src/data/alert.ts` (ex: *"Os produtos Doces Guerra pode conter alergênicos como leite, amendoim, glúten entre outros. Por gentileza informe se possui alguma restrição alimentar na observação dos pedidos."*).
   * **Tipografia:** Classe de texto responsivo `body-text-responsive` (ou `body-small lg:body-large`).
   * **Cor semântica:** Classe de cor de status/perigo `text-status-danger` (ou `text-danger`).
   * **Alinhamento:** Centralizado (`text-center`).