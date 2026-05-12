# EuMilitar Design System

Documentação de referência visual da EuMilitar — plataforma de preparação para concursos militares. Fonte da verdade para times de produto, design e desenvolvimento.

## O que é

Um site de documentação que centraliza a linguagem visual da EuMilitar: tokens de design, tipografia, paleta de cores, componentes de interface e diretrizes de uso. Não é um pacote npm publicável — é uma referência consultável.

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
packages/tokens/    ← tokens CSS (referência para futura portabilidade)
```

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

## Cores principais

| Token | Valor | Uso |
|---|---|---|
| `--accent` | `#1f4d2a` | Verde militar — ações primárias |
| `--fire` | `#C4521A` | Laranja urgência — escassez, CTAs |
| `--ink` | `#1a1612` | Texto principal |
| `--paper` | `#ede4cf` | Superfície base |
