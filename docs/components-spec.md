# Especificações de Componentes (components-spec.md)

Este documento contém as especificações exatas de layout, estilo e comportamento para a criação de componentes React no projeto. A IA desenvolvedora DEVE seguir estritamente as propriedades, classes do Design System (definidas em `style-pattern.md`) e estruturas definidas aqui.

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

### Regra de Ícones
* **Biblioteca:** Todos os ícones descritos nas especificações (como o ícone de menu hambúrguer e o ícone de "X" para fechar) devem ser importados e utilizados exclusivamente a partir da biblioteca `lucide-react` (ex: `<Menu />`, `<X />`).