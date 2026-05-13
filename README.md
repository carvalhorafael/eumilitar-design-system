# EuMilitar Design System

Monorepo do design system da EuMilitar — plataforma de preparação para concursos militares. Fonte da verdade para times de produto, design e desenvolvimento.

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

WordPress e Elementor ficam fora deste repositório.
O plano é que um projeto separado de tema WordPress consuma esta biblioteca.

Os tokens agora também têm export em JSON para consumers que não querem depender de parsing de CSS.

Documento de referência:
- `docs/component-development.md`
- `ARQUITETURA-BIBLIOTECA.md`
- `CONSUMO-E-VERSOES.md`
- `VALIDACAO-PROPAGACAO.md`
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

## Conteúdo atual

**Fundamentos**
- Cores — escalas primitivas, tokens semânticos, paletas das forças militares
- Tipografia — famílias, escala de tamanhos, exemplos de uso
- Espaçamento — escala base 4px, contextos de aplicação
- Tokens — referência completa de todas as CSS custom properties
- Sombras & Efeitos — sombras offset, raios, highlight, tape

**Componentes**
- Button — 6 variantes, 3 tamanhos, hover neo-brutalista
- Badge — 11 variantes, dot prop, tamanhos sm/md
- Card — 4 variantes, 5 níveis de sombra
- Input & Textarea — 3 estados, 3 tamanhos, foco com sombra offset
- Select — dropdown estilizado com seta customizada
- Checkbox & Radio — checkmark SVG animado, grupos
- Alert, Accordion, Table, Navbar, Drawer, Tabs e Breadcrumbs — feedback, disclosure, dados, navegação e organização estrutural

**Padrões**
- Hero, Urgência, Captação, FAQ, Benefícios, Depoimentos e CTA final
- Contratos de anatomia, variantes, tokens e campos CMS em `packages/patterns`

## Cores principais

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#1f4d2a` | Verde militar — ações primárias |
| `--fire` | `#C4521A` | Laranja urgência — escassez, CTAs |
| `--ink` | `#1a1612` | Texto principal |
| `--paper` | `#ede4cf` | Superfície base |
