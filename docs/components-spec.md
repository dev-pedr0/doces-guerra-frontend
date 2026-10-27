# Especificações de Componentes (components-spec.md)

Este documento contém as especificações exatas de layout, estilo e comportamento para a criação de componentes React no projeto. A IA desenvolvedora DEVE seguir estritamente as propriedades, classes do Design System (definidas em `style-patterns.md`) e estruturas definidas aqui.

### Regra de Ícones
* **Biblioteca:** Todos os ícones descritos nas especificações (como o ícone de menu hambúrguer, o ícone de "X" para fechar, setas e carrinho) devem ser importados e utilizados exclusivamente a partir da biblioteca `lucide-react` (ex: `<Menu />`, `<X />`, `<ArrowUp />`, `<ShoppingCart />`), exceto quando especificado o contrário (como ícones de redes sociais que serão adicionados manualmente).

---

## 1. Header (Cabeçalho)

**Local sugerido do arquivo:** `src/components/layout/Header.tsx`

Componente de navegação principal da aplicação, contendo responsividade embutida (Desktop e Mobile) e um menu lateral off-canvas para telas menores.

### 1.1 Comportamento Geral (Ambas as telas)
*   **Posicionamento:** O cabeçalho deve ser `sticky` e ficar sempre visível no topo da tela (ex: `sticky top-0 z-50`).
*   **Logo:** A imagem fica localizada em `/data/logo/logo1.png`. Deve ser clicável (`cursor-pointer`) e redirecionar o usuário para a página inicial (`/`).

### 1.2 Layout Desktop (Telas `lg` / >= 1024px)
*   **Dimensões:** `w-full`, `h-[87px]`.
*   **Espaçamento (Padding):** Eixo Y: `8px` (`py-2`), Eixo X: `144px` (`px-36`).
*   **Fundo:** Classe semântica `bg-accent`.
*   **Disposição Interna:** Elementos em linha, usando `flex flex-row justify-between items-center`.
*   **Elementos do Menu:** "Produtos", "Sobre Mim", "Feedback".
    *   **Estilo do Texto:** Classes `text-body` e `heading-h1`.
    *   **Espaçamento entre itens:** `gap-[40px]`.
    *   **Interatividade:** Devem ter `cursor-pointer` e um efeito de hover suave (ex: transição de cor ou opacidade).

### 1.3 Layout Mobile (Telas < 1024px)
*   **Dimensões:** `w-full`, `h-[73px]`.
*   **Espaçamento (Padding):** Eixo Y: `8px` (`py-2`), Eixo X: `16px` (`px-4`).
*   **Fundo:** Classe semântica `bg-accent`.
*   **Disposição Interna:** Elementos em linha, usando `flex flex-row justify-between items-center`.
*   **Ícone Hamburger (Botão de Menu):**
    *   **Estilo do botão:** Cor do ícone `button-text` (usar cor de texto via CSS para preencher o SVG), padding de `10px`, borda arredondada `rounded-[10px]`, cor de borda `border-strong`, e fundo `button-primary`.
    *   **Interatividade:** `cursor-pointer`. Ao ser clicado, deve abrir o "Menu Lateral".

### 1.4 Menu Lateral (Drawer/Off-canvas para Mobile)
Este menu deve renderizar apenas condicionalmente ou fora do fluxo padrão (usando fixed e z-index alto) quando acionado pelo ícone de hamburger.

*   **Comportamento do Fundo (Overlay):** Deve haver um escurecimento da tela atrás do menu lateral (backdrop). Ao clicar neste fundo escuro, o menu também deve fechar.
*   **Dimensões do Drawer:** `w-1/2` (50vw), `h-screen`.
*   **Espaçamento (Padding):** Eixo Y: `8px` (`py-2`), Eixo X: `8px` (`px-2`).
*   **Fundo do Drawer:** Classe semântica `bg-surface`.
*   **Transição/Animação:**
    *   Entrada: Desliza da borda direita para a esquerda.
    *   Saída: Desliza da esquerda para a direita (recolhendo de volta para a borda direita).
*   **Disposição Interna:** Flex em coluna, alinhamento à direita (`flex flex-col items-end`), com `gap-[40px]` entre o botão de fechar e a lista de links.
*   **Botão de Fechar (X):**
    *   Mesmo estilo exato e tamanho do Ícone Hamburger (`button-text`, p: `10px`, `rounded-[10px]`, borda `border-strong`, fundo `button-primary`).
    *   Interatividade: `cursor-pointer` para fechar o menu.
*   **Elementos do Menu:** "Produtos", "Sobre Mim", "Feedback".
    *   **Estilo do Texto:** Classes `text-body` e `heading-h1`. Alinhados à direita.
    *   **Interatividade:** `cursor-pointer` com efeito de hover.

---

## 2. Footer (Rodapé)

**Local sugerido do arquivo:** `src/components/layout/Footer.tsx`

Componente de rodapé da aplicação, contendo links de navegação, redes sociais e ações de utilidade (voltar ao topo e carrinho), com responsividade para Desktop e Mobile.

### 2.1 Comportamento Geral (Ambas as telas)
*   **Fundo:** Classe semântica `bg-sunken`.
*   **Sombra Interna (Inner Shadow):** O Footer deve ter uma sombra interna no topo com as propriedades: `x:0, y:4, blur:4, cor: #000000 com 25% de opacidade` (ex: `shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]`).
*   **Interatividade dos Links e Redes:** 
    *   Itens do menu clicáveis com efeito de hover, redirecionando para suas respectivas páginas.
    *   Ícones das redes sociais clicáveis com efeito de hover, redirecionando para as redes oficiais.
*   **Ação Up Arrow (Voltar ao Topo):** 
    *   Ícone do `lucide-react`.
    *   Possui animação de flutuação (cima/baixo) durante o hover.
    *   Ao clicar, deve rolar suavemente para o topo da página.
*   **Ação Carrinho (Shopping Cart):**
    *   Ícone de `ShoppingCart` do `lucide-react`.
    *   Deve estar posicionado na mesma linha/altura da `Up Arrow` (usualmente posicionado nas extremidades).
    *   Clicável, com efeito de hover, redirecionando para a tela de carrinho.

### 2.2 Layout Mobile (Telas < 1024px)
*   **Dimensões:** `w-full`, `h-auto` (variável de acordo com o conteúdo).
*   **Espaçamento (Padding):** Eixo Y: `16px` (`py-4`), Eixo X: `16px` (`px-4`).
*   **Disposição Interna Principal:** `flex flex-col` com `gap-[32px]`.
*   **Menu de Navegação:**
    *   Elementos: "Produtos", "Sobre Mim", "Feedback".
    *   Layout: `flex flex-col` com `gap-[16px]`, centralizado (`items-center text-center`).
    *   Estilo do Texto: Classes `text-body` e `label-large`.
*   **Campo de Redes Sociais:**
    *   Layout: `flex flex-col` com `gap-[8px]`, centralizado.
    *   Texto Título: "Em Caso de Dúvidas:" usando classes `text-body` e `body-large`.
    *   Ícones (Instagram e WhatsApp a serem inseridos manualmente pelo dev): Devem ter `drop-shadow` de `x:0, y:4, blur:4, cor: #000000 25%` (ex: `drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`).
*   **Ícones de Ação (Up Arrow e Carrinho):**
    *   **Up Arrow:** Tamanho `32px`.
    *   **Carrinho:** Tamanho `33px`. Fica posicionado fora do fluxo flex principal, mas respeitando o padding do container (16px lateral e inferior), alinhado na mesma linha horizontal da Up Arrow.

### 2.3 Layout Desktop (Telas `lg` / >= 1024px)
*   **Dimensões:** `w-full`, `h-auto` (variável de acordo com o conteúdo).
*   **Espaçamento (Padding):** Eixo Y: `32px` (`py-8`), Eixo X: `144px` (`px-36`).
*   **Disposição Interna Principal:** `flex flex-col` com `gap-[40px]`.
*   **Container Central (Navegação + Redes):**
    *   Layout: `flex flex-row` centralizado com `gap-[80px]` e padding vertical `py-[32px]`.
    *   **Menu de Navegação:** "Produtos", "Sobre Mim", "Feedback" em `flex flex-col`, `gap-[16px]`, centralizado (`items-center text-center`), usando `text-body` e `label-large`.
    *   **Campo de Redes Sociais:** `flex flex-col` com `gap-[32px]`, centralizado. Texto "Em Caso de Dúvidas:" com `text-body` e `body-large`. Ícones (inserção manual) com a mesma sombra `drop-shadow` descrita no mobile.
*   **Ícones de Ação (Up Arrow e Carrinho):**
    *   **Up Arrow:** Tamanho `65px`.
    *   **Carrinho:** Tamanho `80px`. Fica posicionado fora do fluxo flex principal, respeitando o padding de 32px e 144px, alinhado na mesma linha horizontal da Up Arrow.

---

## 3. Generic Button (Botão Genérico)

**Local sugerido do arquivo:** `src/components/ui/GenericButton.tsx` (ou `src/components/ui/Button.tsx`)

Componente de botão reutilizável por toda a aplicação para ações secundárias e cards.

### 3.1 Props
* `text` (string): Texto a ser exibido no botão.
* `onClick` (opcional): Função executada ao clicar no botão.
* `className` (opcional): Classes adicionais de estilização.

### 3.2 Layout e Estilização
* **Largura e Altura:** Variável (`w-fit h-fit` ou alinhado ao conteúdo).
* **Alinhamento do Conteúdo:** Flexbox totalmente centralizado (`flex items-center justify-center text-center`).
* **Fundo:** Cor correspondente ao token `text-link` (rosa/mauve `--pink-600` / `#A26888`).
* **Cor do Texto:** Classe semântica `text-light`.

### 3.3 Responsividade
* **Mobile (< 1024px):**
  * **Padding:** Eixo Y: `2px` (`py-[2px]`), Eixo X: `8px` (`px-[8px]`).
  * **Tipografia:** Classe `body-small`.
* **Desktop (>= 1024px):**
  * **Padding:** Eixo Y: `4px` (`lg:py-[4px]`), Eixo X: `16px` (`lg:px-[16px]`).
  * **Tipografia:** Classe `body-large` (`lg:body-large`).

---

## 4. Product Card (Card de Produto)

**Local sugerido do arquivo:** `src/components/ui/ProductCard.tsx` (ou `src/components/cards/ProductCard.tsx`)

Componente de card para exibição visual dos produtos em destaque ou listas do cardápio.

### 4.1 Props
* `title` (string): Nome do produto/item a ser exibido no card.
* `imageUrl` (string): Caminho/URL da imagem de fundo do produto.
* `onBuy` (opcional): Função/ação ao clicar no botão "Comprar".

### 4.2 Estrutura e Estilização
* **Background:** Imagem recebida via prop `imageUrl` (aplicada como background cover centralizado) com flexbox alinhando os elementos no final do card (`flex flex-col justify-end items-center`).
* **Espaçamento entre Elementos:** `gap-[16px]` entre o nome do produto e o botão de compra.
* **Efeito de Sombra (Drop Shadow):** Sombra externa de `X:0, Y:4px, Blur:4px` com 50% de opacidade preta (`drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]` ou `shadow-[0_4px_4px_rgba(0,0,0,0.5)]`).

### 4.3 Elementos Internos
1. **Nome do Item:**
   * Recebido via prop `title`.
   * **Tipografia e Cor:** Classes `heading-h2` e `text-title`.
   * **Borda nas Letras:** Borda suave envolvendo cada letra do texto na cor da classe semântica `border-subtle` (utilizar `-webkit-text-stroke` / CSS text stroke com a cor `--pink-400`).
2. **Botão de Compra:**
   * Instância do componente **Generic Button** passando o texto `"Comprar"`.

### 4.4 Responsividade
* **Mobile (< 1024px):**
  * **Dimensões:** Largura de `254px` (`w-[254px]`), Altura de `339px` (`h-[339px]`).
  * **Padding:** Inferior (bottom): `36px` (`pb-[36px]`), Lateral (x): `0px` (`px-0`).
* **Desktop (>= 1024px):**
  * **Dimensões:** Largura de `502px` (`lg:w-[502px]`), Altura de `669px` (`lg:h-[669px]`).
  * **Padding:** Inferior (bottom): `40px` (`lg:pb-[40px]`), Lateral (x): `0px` (`lg:px-0`).

---

## 5. Generic Carousel (Carrossel Genérico)
**Local sugerido do arquivo:** `src/components/ui/GenericCarousel.tsx` (ou `src/components/ui/GenericCarroussel.tsx`)

Componente de carrossel genérico e reutilizável que aceita qualquer lista de dados e componente de renderização, exibindo 3 itens em destaque com navegação circular (loop infinito), suporte a clique e arrasto (drag/touch).

### 5.1 Props
* `items` (`T[]`): Array genérico de dados/itens a serem renderizados.
* `renderItem` (`(item: T, index: number) => React.ReactNode`): Função callback para renderizar cada card/item individualmente.
* `className` (opcional): Classes adicionais de estilização do container.

### 5.2 Estilização e Layout
* **Fundo:** Transparente (`bg-transparent`) ou de acordo com o container pai onde for utilizado.
* **Padding:** Eixo Y: `0px` (`py-0`), Eixo X: `0px` (`px-0`).
* **Disposição Interna:** Flexbox em linha totalmente centralizado (`flex flex-row justify-center items-center w-full overflow-hidden`).
* **Visibilidade:** Janela de exibição focada em 3 elementos visíveis simultaneamente (Esquerda, Centro, Direita), permitindo que os demais ultrapassem os limites da tela suavemente.

### 5.3 Responsividade
* **Mobile (< 1024px):**
  * **Espaçamento entre itens:** `gap-[40px]`.
* **Desktop (>= 1024px):**
  * **Espaçamento entre itens:** `lg:gap-[88px]`.

### 5.4 Comportamento e Interatividade
* **Navegação Circular (Loop Infinito):** O carrossel funciona em ciclo contínuo. O item anterior ao primeiro é o último elemento do array, e o item posterior ao último é o primeiro.
* **Foco Centralizado por Clique:** Clicar em qualquer card visível posiciona o card clicado no **Centro**, reorganizando dinamicamente os vizinhos da esquerda e da direita.
* **Gestos de Arrasto (Drag & Touch):** Suporte para clicar e arrastar com o mouse ou deslizar o dedo (touchscreen), girando os elementos do carrossel para ambos os lados de forma suave.

---

## 6. Generic Card (Card Genérico)

**Local sugerido do arquivo:** `src/components/ui/GenericCard.tsx` (ou `src/components/cards/GenericCard.tsx`)

Componente container genérico reutilizável para envelopar textos, blocos de conteúdo ou conjuntos de elementos visuais pela aplicação.

### 6.1 Props
* `children` (`React.ReactNode`): Conteúdo filho a ser renderizado dentro do container (pode ser texto ou conjunto de elementos).
* `className` (opcional, string): Classes CSS adicionais para customização de layout/dimensionamento externo.

### 6.2 Estrutura e Estilização
* **Dimensões:** Largura e Altura variáveis conforme o conteúdo ou classes enviadas (`w-fit h-fit` ou responsivas a partir do container pai).
* **Fundo:** Classe semântica `bg-surface-light`.
* **Borda:** Borda de espessura `2px` (`border-2`), cor semântica `border-subtle` e arredondamento de `20px` (`rounded-[20px]`).
* **Sombra (Box Shadow):** Sombra projetada externa com `X: 0, Y: 4px, Blur: 4px` e cor `#000000` com 25% de opacidade (`shadow-[0_4px_4px_rgba(0,0,0,0.25)]`).

### 6.3 Responsividade
* **Mobile (< 1024px):**
  * **Padding:** Eixo Y: `16px` (`py-4`), Eixo X: `8px` (`px-2`).
* **Desktop (>= 1024px):**
  * **Padding:** Mantém os mesmos padrões do Mobile — Eixo Y: `16px` (`lg:py-4`), Eixo X: `8px` (`lg:px-2`).

---

## 7. Feedback Card (Card de Feedback)

**Local sugerido do arquivo:** `src/components/ui/FeedbackCard.tsx` (ou `src/components/cards/FeedbackCard.tsx`)

Componente para exibição de depoimentos e avaliações de clientes. Utiliza como base o **Generic Card** e suporta truncamento de texto com abertura de modal ao clicar.

### 7.1 Fonte de Dados
* **Arquivo Data Source:** `src/data/feedbacks.ts` (ou similar).
* **Estrutura do Tipo (`Feedback`):**
  * `id` (`string | number`)
  * `authorName` (`string`): Nome do autor da avaliação.
  * `comment` (`string`): Texto detalhado do feedback.
  * `rating` (`number`): Quantidade de estrelas marcadas (de 1 a 5).

### 7.2 Props do Componente
* `feedback` (`Feedback`): Objeto contendo `authorName`, `comment` e `rating`.
* `onClick` (opcional, function): Função callback disparada ao clicar no card para abrir o modal com o feedback completo.

### 7.3 Estrutura e Elementos Internos
O card utiliza o **Generic Card** como container base e organiza os elementos internos em um layout Flex em coluna (`flex flex-col`):

1. **Nome do Autor:**
   * Alinhado à esquerda (`text-left`).
   * **Tipografia e Cor:** Classes `heading-h4` e `text-body`.
2. **Texto do Feedback:**
   * Alinhado à esquerda e texto justificado (`text-left text-justify`).
   * **Limitação Visual (Truncamento):** Em modo card, o texto é limitado a **no máximo 2 linhas** (ex: `line-clamp-2 overflow-hidden text-ellipsis`).
3. **Avaliação em Estrelas (5 Estrelas):**
   * Ícones `<Star />` renderizados exclusivamente via `lucide-react`.
   * Sempre renderiza um grupo fixo de 5 estrelas em linha (`flex flex-row`).
   * **Estrela Marcada (até a quantidade de `rating`):** Preenchimento/cor com classe semântica `bg-hover` (ou `text-bg-hover` / `fill-bg-hover`).
   * **Estrela Desmarcada (restantes):** Preenchimento/cor com classe semântica `text-muted` (ou `fill-text-muted`).

### 7.4 Responsividade e Espaçamentos

* **Mobile (< 1024px):**
  * **Espaçamento Interno (Gap):** `gap-[8px]` entre os 3 elementos.
  * **Texto do Feedback:** Classe `body-small` e `text-body`.
  * **Tamanho dos Ícones de Estrela:** `24px` x `24px` (`w-6 h-6`).

* **Desktop (>= 1024px):**
  * **Espaçamento Interno (Gap):** `lg:gap-[16px]` entre os 3 elementos.
  * **Texto do Feedback:** Classe `lg:body-large` e `text-body`.
  * **Tamanho dos Ícones de Estrela:** `28px` x `28px` (`lg:w-[28px] lg:h-[28px]`).

### 7.5 Interatividade e Modal
* **Ação de Clique:** O card inteiro deve possuir indicador interativo (`cursor-pointer`). Ao ser clicado, deve disparar a exibição de um Modal contendo as informações completas do feedback (Nome, 5 Estrelas e o Texto do Feedback na íntegra sem truncamento).