# Padrões de Estilo (Design System)

Este documento dita as regras de CSS (via TailwindCSS v4) para todo o projeto. 

## 1. Regra Geral de Cores
**Nenhuma cor pode ser usada solta.** Toda cor para um elemento deve vir de uma classe *Semântica*. As classes semânticas são compostas usando classes *Primitivas*. Caso uma cor falte, crie primeiro a primitiva e depois a semântica correspondente.

### 1.1 Cores Primitivas (Apenas para base do CSS)
Estas cores configuram as variáveis do sistema. **Não devem ser usadas diretamente no HTML/JSX.**

*   **Cream:** `cream-25` (#FFFDF7), `cream-50` (#FFF9E6), `cream-100` (#FEEC94), `cream-200` (#F5D96B)
*   **Chocolate:** `chocolate-100` (#F5EBE8), `chocolate-300` (#C5A8A0), `chocolate-500` (#7D5A50), `chocolate-800` (#3D2620), `chocolate-900` (#251410)
*   **Pink:** `pink-100` (#FFF0F3), `pink-200` (#FBD2DB), `pink-400` (#D1AEC0), `pink-600` (#A26888)
*   **Mint:** `mint-100` (#D6F1EA), `mint-200` (#D5EDBF), `mint-500` (#4E9F72), `mint-700` (#285B3F)
*   **Red:** `red-100` (#FDE8E8), `red-500` (#E53935), `red-700` (#9C1C1C)
*   **Amber:** `amber-100` (#FEF3D6), `amber-500` (#F59E0B), `amber-700` (#B45309)
*   **Neutro:** `neutral-white` (#FFFFFF)

### 1.2 Cores Semânticas (Uso Obrigatório nos Elementos)
Use EXCLUSIVAMENTE estas classes em seus componentes React.

**Background:**
*   `bg-page`: cream-25
*   `bg-surface`: cream-50
*   `bg-surface-light`: neutral-white
*   `bg-accent`: pink-200
*   `bg-hover`: cream-100

**Text:**
*   `text-title`: chocolate-900
*   `text-body`: chocolate-800
*   `text-muted`: chocolate-500
*   `text-light`: cream-25
*   `text-link`: pink-600

**Border:**
*   `border-default`: chocolate-100 *(Nota: documento original dizia chocolate-10, assumido chocolate-100 pelo hex #F5EBE8)*
*   `border-strong`: chocolate-800
*   `border-subtle`: pink-400
*   `border-focus`: pink-600

**Button:**
*   `button-primary`: pink-600
*   `button-primary-hover`: pink-400
*   `button-text`: neutral-white
*   `button-secondary`: pink-100
*   `button-secondary-hover`: pink-200

**Status:**
*   `status-success`: mint-500
*   `status-success-soft`: mint-200
*   `status-success-text`: mint-700
*   `status-danger`: red-500
*   `status-danger-soft`: red-100
*   `status-danger-text`: red-700
*   `status-warning-soft`: amber-100
*   `status-warning-text`: amber-700
*   `status-info-soft`: mint-100
*   `status-info-text`: chocolate-800

---

## 2. Tipografia
**Fonte Base:** Mulish (Google Fonts).
Todo e qualquer texto na interface deve utilizar uma das classes CSS abaixo. Elas definem tamanho (desktop/mobile), peso e line-height.

### Display
*   `display-hero`: 39px (Mobile: 25px) | Bold | Line Height: 110%
*   `display-sub`: 35px (Mobile: 20px) | Bold | Line Height: 115%

### Headings
*   `heading-h1`: 31px (Mobile: 20px) | Bold | Line Height: 120%
*   `heading-h2`: 25px (Mobile: 28px) | SemiBold | Line Height: 120%
*   `heading-h3`: 20px (Mobile: 26px) | SemiBold | Line Height: 125%
*   `heading-h4`: 18px (Mobile: 16px) | SemiBold | Line Height: 130%

### Body
*   `body-large`: 16px | Regular | Line Height: 160%
*   `body-medium`: 14px | Regular | Line Height: 150%
*   `body-small`: 12px | Regular | Line Height: 150%
*   `body-caption`: 10px | Regular | Line Height: 160%

### Labels (Botões, Tags)
*   `label-large`: 16px | Bold | Line Height: 120%
*   `label-medium`: 14px | Bold | Line Height: 125%
*   `label-small`: 12px | Bold | Line Height: 130%