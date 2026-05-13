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
packages/ui/        ← primitives React reutilizáveis
packages/patterns/  ← contratos e helpers dos blocos de composição
```

O app `docs` consome `@eumilitar/tokens`, `@eumilitar/css`, `@eumilitar/ui` e `@eumilitar/patterns` diretamente.
O app [apps/consumer-react](/Users/rafaelcarvalho/Development/quest_edu/eumilitar-design-system/apps/consumer-react) existe como prova mínima de consumo fora do `docs`.

## Biblioteca

Arquitetura ativa de distribuição:
- `@eumilitar/tokens` para valores visuais
- `@eumilitar/css` para a camada compartilhada e agnóstica de framework
- `@eumilitar/ui` para o adapter React
- `@eumilitar/patterns` para contratos e blocos

Documento de referência:
- [ARQUITETURA-BIBLIOTECA.md](/Users/rafaelcarvalho/Development/quest_edu/eumilitar-design-system/ARQUITETURA-BIBLIOTECA.md)
- [CONSUMO-E-VERSOES.md](/Users/rafaelcarvalho/Development/quest_edu/eumilitar-design-system/CONSUMO-E-VERSOES.md)

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
