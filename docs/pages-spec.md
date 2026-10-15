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