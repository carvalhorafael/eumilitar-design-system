# EuMilitar Design System — Instruções para Agentes

## O que é este projeto

Monorepo do design system da EuMilitar (plataforma de preparação para concursos militares). O app principal continua sendo um site de documentação, mas o repositório agora também expõe camadas reutilizáveis de tokens, UI e padrões de composição.

## Stack

- **Turborepo** monorepo: `apps/docs` (Next.js 15) + `packages/tokens` + `packages/ui` + `packages/patterns`
- **Next.js 15 App Router** + TypeScript estrito
- **Tailwind v4 CSS-first** via `@tailwindcss/postcss`
- **next-themes** com `attribute="data-theme"`, `defaultTheme="light"`, `enableSystem={false}`

## Fonte da verdade dos tokens

**Os tokens CSS vivem em `packages/tokens`** e são importados por `apps/docs/app/globals.css`.

`apps/docs/app/globals.css` deve concentrar imports, reset, `@theme inline` e estilos específicos do app. Quando um token mudar, a mudança deve acontecer primeiro em `packages/tokens/*.css`.

## Estrutura de arquivos

```
apps/docs/
  app/
    globals.css              ← imports dos pacotes compartilhados + reset + estilos do app
    layout.tsx               ← Root layout (Providers + Sidebar)
    providers.tsx            ← ThemeProvider "use client"
    page.tsx                 ← Home
    fundamentos/
      cores/page.tsx
      tipografia/page.tsx
      espacamento/page.tsx
      tokens/page.tsx
      sombras/page.tsx
    padroes/
      hero/page.tsx
      urgencia/page.tsx
      captacao/page.tsx
      faq/page.tsx
      beneficios/page.tsx
      depoimentos/page.tsx
      landing/page.tsx
    componentes/
      botao/page.tsx
      badge/page.tsx
      card/page.tsx
      input/page.tsx
      select/page.tsx
      checkbox/page.tsx
      alert/page.tsx
      accordion/page.tsx
      table/page.tsx
  components/
    layout/
      Sidebar.tsx
      Header.tsx
      ThemeToggle.tsx
    docs/
      ComponentDemo.tsx
      SectionLabel.tsx
      ColorSwatch.tsx
      ShadowHoverDemo.tsx
      CheckboxDemo.tsx
      AlertDemo.tsx

packages/
  tokens/
    colors.css
    typography.css
    spacing.css
    effects.css
    index.css
  ui/
    Button.tsx
    Badge.tsx
    Card.tsx
    Input.tsx
    Select.tsx
    Checkbox.tsx
    Alert.tsx
    Accordion.tsx
    Table.tsx
    styles.css
    index.ts
  patterns/
    patterns.ts             ← contratos dos blocos
    docs.tsx                ← helpers visuais reutilizados pelo app docs
    HTML_REFERENCES.md
    index.ts
```

## Convenções de componentes

### Server vs Client
- Páginas de documentação são **Server Components** por padrão
- Use `"use client"` apenas quando há event handlers, hooks de estado ou `usePathname`
- Extraia demos interativos para arquivos separados em `components/docs/` com `"use client"`
- Páginas que passam funções `render` para componentes client, como `table/page.tsx`, precisam de `"use client"`
- Páginas de padrões que usam componentes interativos, como formulários, usam `"use client"`

### Estilo — sem Tailwind nos componentes UI
Os componentes em `packages/ui/` usam CSS custom properties e classes semânticas próprias, com `inline style` reservado para casos realmente dinâmicos. Tailwind segue restrito ao layout e à composição do app `docs`.

### Foco neo-brutalista
O foco visual segue a lógica de sombra offset via tokens e classes do pacote de UI. Evite introduzir `ring` genérico ou `outline` fora dos casos em que a acessibilidade exigir comportamento adicional.

### Props padrão de formulários
Todos os form components usam:
- `inputState?: "default" | "error" | "success"` — importado de `Input.tsx`
- `size?: "sm" | "md" | "lg"` — importado de `Input.tsx`
- `label?`, `helperText?`, `required?`

## Tokens essenciais

### Tipografia
| Token | Fonte | Uso |
|---|---|---|
| `--font-display` | Barlow Condensed | Títulos, headings, badges |
| `--font-body` | Barlow | Corpo de texto, botões, labels |
| `--font-mono` | JetBrains Mono | Código, labels uppercase, metadados |

### Cores semânticas
| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#1a1612` | Texto principal, bordas de sombra |
| `--pencil` | `#7d7164` | Texto secundário |
| `--paper` | `#ede4cf` | Fundo de cards, sidebar |
| `--accent` | `#1f4d2a` | Verde militar — foco, ações primárias |
| `--surface-raised` | `#ffffff` | Fundo de inputs, cards elevados |
| `--surface-brand` | `#1f4d2a` | Fundo verde escuro — hero, seções brand |
| `--surface-dark` | `#1a1612` | Fundo quase preto — CTAs de máximo impacto |
| `--border-strong` | `#433c34` | Bordas de componentes |
| `--state-error` | `#922020` | Erro |
| `--state-success` | `var(--b-700)` | Sucesso |
| `--fire` | `#C4521A` | Urgência, escassez, CTA máximo |

## Padrões de composição disponíveis

| Padrão | Fonte | Descrição |
|---|---|---|
| Hero | `@eumilitar/patterns` + `app/padroes/hero` | variações clara, brand e urgente |
| Urgência | `@eumilitar/patterns` + `app/padroes/urgencia` | banner, CTA escuro, disponibilidade |
| Captação | `@eumilitar/patterns` + `app/padroes/captacao` | lead form simples e form completo |
| FAQ | `@eumilitar/patterns` + `app/padroes/faq` | FAQ geral e específico por força |
| Benefícios | `@eumilitar/patterns` + `app/padroes/beneficios` | grid, checklist e faixa de stats |
| Depoimentos | `@eumilitar/patterns` + `app/padroes/depoimentos` | cards, destaque e prova social |
| CTA Final | `@eumilitar/patterns` + `app/padroes/landing` | fechamento de conversão |

## Adicionando novos componentes UI

1. Criar `packages/ui/NomeComponente.tsx` com `"use client"` se necessário
2. Se o demo precisar de estado, criar `components/docs/NomeComponenteDemo.tsx` com `"use client"`
3. Criar `app/componentes/nome/page.tsx` para documentar o componente
4. Exportar o componente em `packages/ui/index.ts`
5. Adicionar rota no array `nav` em `components/layout/Sidebar.tsx`

## Adicionando novos padrões

1. Adicionar o contrato do bloco em `packages/patterns/patterns.ts`
2. Se necessário, expandir helpers em `packages/patterns/docs.tsx`
3. Criar `app/padroes/nome/page.tsx`
4. Fazer a página consumir `PatternContract`, `PatternShell` e `UsedComponents` de `@eumilitar/patterns`
5. Adicionar em `Sidebar.tsx` no grupo "Padrões"
6. Sempre incluir seção de "Diretrizes de uso" ao final

## Comandos

```bash
# Desenvolvimento
npm run dev --workspace=apps/docs

# Build
npm run build

# Lint
npm run lint

# TypeScript check do app
npx tsc --noEmit -p apps/docs/tsconfig.json
```

## Idioma e convenções de conteúdo

- Todo conteúdo da documentação em **PT-BR**
- Nomes de arquivos e componentes em inglês
- Seções numeradas no estilo Field Manual: `01.1`, `01.2`, `02.1`...
- Sem comentários em código exceto quando o motivo não for óbvio
- Sem emojis
