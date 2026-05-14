# EuMilitar Design System

Monorepo do design system da EuMilitar. Fonte da verdade para times de produto, design e desenvolvimento.

[Visite o site de documentação aqui.](https://eumilitar-design-system.vercel.app/)


## O que é

Uma base reutilizável que centraliza a linguagem visual da EuMilitar: tokens de design, tipografia, paleta de cores, componentes de interface, padrões de composição e um app de documentação para consulta.

## Estilo visual

O sistema combina três referências:

- **Neo-brutalismo** — bordas explícitas, sombras offset sem blur, hover com deslocamento físico
- **Military Field Manual** — tipografia Barlow Condensed uppercase, numeração sequencial de seções, JetBrains Mono para metadados
- **Swiss typography** — escala sistemática, hierarquia clara, uso intencional do espaço em branco

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (CSS-first)
- Turborepo (monorepo)

## Rodando localmente

Requer Node.js 18+.

```bash
npm install
npm run dev --workspace=apps/docs
```

Acesse `http://localhost:3000`.

## Estrutura

```
apps/docs/          ← site de documentação (Next.js)
packages/tokens/    ← tokens CSS compartilhados
packages/css/       ← camada CSS compartilhada e agnóstica de framework
packages/web/       ← base HTML/CSS/JS para sites não React
packages/ui/        ← primitives React reutilizáveis
packages/patterns/  ← contratos e helpers dos blocos de composição
```

O app `docs` consome `@carvalhorafael/eumilitar-tokens`, `@carvalhorafael/eumilitar-css`, `@carvalhorafael/eumilitar-ui` e `@carvalhorafael/eumilitar-patterns` diretamente.
O app `apps/consumer-react` existe como prova mínima de consumo fora do `docs`.
O app `apps/consumer-static` valida consumo em HTML/CSS/JS puro via `@carvalhorafael/eumilitar-web`.

## Biblioteca

Arquitetura ativa de distribuição:
- `@carvalhorafael/eumilitar-tokens` para valores visuais
- `@carvalhorafael/eumilitar-css` para a camada compartilhada e agnóstica de framework
- `@carvalhorafael/eumilitar-web` para a base de sites tradicionais e CMSs fora de React
- `@carvalhorafael/eumilitar-ui` para o adapter React
- `@carvalhorafael/eumilitar-patterns` para contratos e blocos

Componentes atuais incluem controles de formulário, navegação mobile-first, feedback, carregamento, progresso, dados e suporte visual.


Os tokens também têm export em JSON para consumers que não querem depender de parsing de CSS.

Documento de referência:
- `docs/component-development.md`
- `docs/ARQUITETURA-BIBLIOTECA.md`
- `docs/CONSUMO-E-VERSOES.md`
- `docs/VALIDACAO-PROPAGACAO.md`
- `packages/web/HTML_CONSUMPTION.md`
- `packages/web/CONTRACT.md`
- `packages/tokens/README.md`

## Release

As versões da biblioteca são geridas com Changesets e publicadas via GitHub Actions para GitHub Packages.

Fluxo resumido:
- mudanças entram em branch de trabalho
- cada mudança distribuível inclui um `changeset`
- o merge em `main` dispara o workflow de release
- o workflow cria ou atualiza o PR de versionamento
- depois do merge desse PR, os pacotes são publicados

Pacotes publicados:
- `@carvalhorafael/eumilitar-tokens`
- `@carvalhorafael/eumilitar-css`
- `@carvalhorafael/eumilitar-web`
- `@carvalhorafael/eumilitar-ui`
- `@carvalhorafael/eumilitar-patterns`

Para instalar a partir do GitHub Packages, o consumer precisa configurar o scope:

```ini
@carvalhorafael:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN_GITHUB
```

As releases também ficam listadas em:
- [GitHub Releases](https://github.com/carvalhorafael/eumilitar-design-system/releases)
