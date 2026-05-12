# EuMilitar Design System — Instruções para Agentes

## O que é este projeto

Documentação de referência do design system da EuMilitar (plataforma de preparação para concursos militares). Não é um pacote npm — é um site de documentação que serve como fonte da verdade para devs, designers e como referência para agentes de IA gerarem interfaces seguindo as convenções do sistema.

## Stack

- **Turborepo** monorepo: `apps/docs` (Next.js 15) + `packages/tokens` (CSS vars, atualmente secundário)
- **Next.js 15 App Router** + TypeScript estrito
- **Tailwind v4 CSS-first** via `@tailwindcss/postcss`
- **next-themes** com `attribute="data-theme"`, `defaultTheme="light"`, `enableSystem={false}`

## Fonte da verdade dos tokens

**Todos os tokens CSS estão em `apps/docs/app/globals.css`** — não em `packages/tokens`.

O `packages/tokens/` existe para futura portabilidade (Style Dictionary → iOS/Android/Figma), mas não é a fonte ativa. Nunca importe de `@eumilitar/tokens` nos componentes; use as CSS custom properties diretamente.

## Estrutura de arquivos

```
apps/docs/
  app/
    globals.css              ← TOKENS: toda a paleta, tipografia, espaçamento, sombras
    layout.tsx               ← Root layout (Providers + Sidebar)
    providers.tsx            ← ThemeProvider "use client"
    page.tsx                 ← Home
    fundamentos/
      cores/page.tsx
      tipografia/page.tsx
      espacamento/page.tsx
      tokens/page.tsx
      sombras/page.tsx
    componentes/
      botao/page.tsx
      badge/page.tsx
      card/page.tsx
      input/page.tsx
      select/page.tsx
      checkbox/page.tsx
  components/
    layout/
      Sidebar.tsx            ← "use client" (usePathname)
      Header.tsx             ← server component
      ThemeToggle.tsx        ← "use client"
    docs/
      ComponentDemo.tsx      ← wrapper de demo com code block
      SectionLabel.tsx       ← heading numerado estilo Field Manual
      ColorSwatch.tsx        ← swatches clicáveis (copy hex)
      ShadowHoverDemo.tsx    ← "use client" demo interativo
      CheckboxDemo.tsx       ← "use client" demos de Checkbox/Radio
    ui/
      Button.tsx
      Badge.tsx
      Card.tsx
      Input.tsx              ← também exporta Label, HelperText, InputState, InputSize
      Select.tsx
      Checkbox.tsx           ← também exporta Radio, CheckboxGroup, RadioGroup
```

## Convenções de componentes

### Server vs Client
- Páginas de documentação são **Server Components** por padrão
- Use `"use client"` apenas quando há event handlers, hooks de estado ou `usePathname`
- Extraia demos interativos para arquivos separados em `components/docs/` com `"use client"`

### Estilo — sem Tailwind nos componentes UI
Os componentes em `components/ui/` usam **inline styles com CSS custom properties**, não classes Tailwind. Tailwind é usado apenas nas páginas de documentação para layout (`px-10`, `grid`, `gap-4`, etc.).

```tsx
// CORRETO — componente UI
style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-md)" }}

// ERRADO — não use Tailwind em componentes UI
className="border-2 shadow-md"
```

### Foco neo-brutalista
O foco nunca usa `ring` ou `outline`. Aplica `boxShadow: "2px 2px 0 {color}"` via `onFocus`/`onBlur`:

```tsx
onFocus={(e) => {
  e.currentTarget.style.borderColor = "var(--accent)";
  e.currentTarget.style.boxShadow = "2px 2px 0 var(--accent)";
}}
onBlur={(e) => {
  e.currentTarget.style.borderColor = "var(--border-strong)";
  e.currentTarget.style.boxShadow = "none";
}}
```

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

### Cores semânticas (use sempre estas, nunca os primitivos)
| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#1a1612` | Texto principal, bordas de sombra |
| `--pencil` | `#7d7164` | Texto secundário |
| `--paper` | `#ede4cf` | Fundo de cards, sidebar |
| `--accent` | `#1f4d2a` | Verde militar — foco, ações primárias |
| `--surface-raised` | `#ffffff` | Fundo de inputs, cards elevados |
| `--border-strong` | `#433c34` | Bordas de componentes |
| `--state-error` | `#922020` | Erro |
| `--state-success` | `var(--b-700)` | Sucesso |
| `--fire` | `#C4521A` | Urgência, escassez, CTA máximo |

### Sombras (zero blur — estilo neo-brutalista)
```css
--shadow-sm:     2px 2px 0 var(--ink)
--shadow-md:     4px 4px 0 var(--ink)
--shadow-lg:     6px 6px 0 var(--ink)
--shadow-brand:  4px 4px 0 var(--accent)
--shadow-urgent: 4px 4px 0 var(--fire)
```

### Hover de botão (padrão do sistema)
Normal: `boxShadow: var(--shadow-md)` + `transform: none`
Hover: `boxShadow: none` + `transform: translate(2px, 2px)`
Transition: `100ms ease`

## Adicionando novos componentes UI

1. Criar `components/ui/NomeComponente.tsx` com `"use client"` se necessário
2. Se o demo precisar de estado, criar `components/docs/NomeComponenteDemo.tsx` com `"use client"`
3. Criar `app/componentes/nome/page.tsx` (Server Component)
4. Adicionar rota no array `nav` em `components/layout/Sidebar.tsx`
5. Numeração sequencial: próximos componentes começam em 07

## Adicionando novos fundamentos

1. Criar `app/fundamentos/nome/page.tsx`
2. Adicionar em `Sidebar.tsx` no grupo "Fundamentos"
3. Numeração sequencial: próximos fundamentos começam em 06

## Comandos

```bash
# Desenvolvimento (da raiz do monorepo)
npm run dev --workspace=apps/docs

# Ou via Turborepo
turbo dev

# Build
turbo build

# TypeScript check
npx tsc --noEmit -p apps/docs/tsconfig.json
```

## Idioma e convenções de conteúdo

- Todo conteúdo da documentação em **PT-BR**
- Nomes de arquivos e componentes em inglês (PascalCase para componentes, kebab-case para rotas)
- Seções numeradas no estilo Field Manual: `01.1`, `01.2`, `02.1`...
- Sem comentários em código exceto quando o motivo não for óbvio
- Sem emojis
