# Instruções para Agentes de IA

Este documento define o comportamento esperado de qualquer agente de IA (como Cline, Claude, Cursor, etc.) operando neste repositório.

## 1. Regra de Ouro
**Nunca faça suposições que quebrem os padrões estabelecidos.** Se uma cor, fonte ou estrutura de pasta for necessária e não estiver mapeada nestes documentos, você deve avisar o usuário e solicitar autorização/informação adicional antes de prosseguir.

## 2. Leitura Obrigatória
Antes de gerar qualquer código, o agente DEVE ler e assimilar os seguintes arquivos:
- `project-structure.md` (Para saber onde colocar o código).
- `style-patterns.md` (Para saber como estilizar os componentes).

## 3. Gestão de Arquivos e Permissões
- **Mutações na Raiz:** Você **NÃO ESTÁ AUTORIZADO** a criar, renomear ou remover arquivos na raiz do projeto, nem alterar os diretórios principais dentro de `src/`, a menos que solicite permissão explícita ao usuário acompanhada de uma justificativa técnica clara.
- **Mutações Internas:** A criação, renomeação e remoção de arquivos *dentro* das pastas pré-aprovadas em `src/` (ex: dentro de `src/components/ui/`) é livre e encorajada para manter o código modular.

## 4. Controle de Versões
Respeite estritamente as versões definidas no `README.md`. Não atualize pacotes como Next, React ou Tailwind sem solicitação explícita do usuário.