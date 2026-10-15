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