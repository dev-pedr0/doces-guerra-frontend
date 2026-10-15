# Estrutura do Projeto

A organização de diretórios e arquivos é rígida. Qualquer alteração nas pastas principais abaixo requer autorização do desenvolvedor líder.

## Árvore de Diretórios Obrigatória

```text
/ (Raiz do Projeto)
├── docs/             # Documentação oficial e orientação a IA
├── src/
│   ├── api/          # Controles e conexões/chamadas para APIs externas ou rotas de API.
│   ├── app/          # Rotas principais do site (Next.js App Router).
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/   # Elementos visuais reutilizáveis.
│   │   ├── layout/   # Componentes de estrutura de página (Headers, Footers, Sidebars).
│   │   └── ui/       # Componentes de interface genéricos (Buttons, Inputs, Cards).
│   ├── data/         # Informações estáticas, mocks de dados e textos usados no site.
│   ├── hooks/        # Custom React hooks.
│   ├── pages/        # Páginas completas e grandes seções que compõem as rotas do site.
│   ├── services/     # Funções de serviço, regras de negócio isoladas e lógicas complexas.
│   └── utils/        # Funções auxiliares, formatadores e helpers reutilizáveis.
├── .clinerules
├── .env
├── .env.example
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## Regras de Manipulação
*   **Livre Acesso:** Você pode criar, modificar ou excluir livremente arquivos *dentro* das pastas filhas de `src/` (ex: `src/components/ui/Button.tsx`).
*   **Acesso Restrito:** Nenhuma nova pasta deve ser criada diretamente em `src/` ou na raiz sem perguntar primeiro.