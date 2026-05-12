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
    padroes/
      hero/page.tsx
      urgencia/page.tsx
      captacao/page.tsx
      faq/page.tsx
      beneficios/page.tsx
      depoimentos/page.tsx
    componentes/
      botao/page.tsx
      badge/page.tsx
      card/page.tsx
      input/page.tsx
      select/page.tsx
      checkbox/page.tsx
      alert/page.tsx
      accordion/page.tsx
      table/page.tsx         ← "use client" (usa render functions)
  components/
    layout/
      Sidebar.tsx            ← "use client" (usePathname) — grupos: Fundamentos, Padrões, Componentes
      Header.tsx             ← server component
      ThemeToggle.tsx        ← "use client"
    docs/
      ComponentDemo.tsx      ← wrapper de demo com code block
      SectionLabel.tsx       ← heading numerado estilo Field Manual
      ColorSwatch.tsx        ← swatches clicáveis (copy hex)
      ShadowHoverDemo.tsx    ← "use client" demo interativo de sombras
      CheckboxDemo.tsx       ← "use client" demos interativos de Checkbox/Radio
      AlertDemo.tsx          ← "use client" demo de dismiss interativo
    ui/
      Button.tsx
      Badge.tsx
      Card.tsx
      Input.tsx              ← também exporta: Label, HelperText, InputState, InputSize
      Select.tsx
      Checkbox.tsx           ← também exporta: Radio, CheckboxGroup, RadioGroup
      Alert.tsx
      Accordion.tsx
      Table.tsx              ← também exporta: Thead, Tbody, Tr, Th, Td, DataTable
```

## Convenções de componentes

### Server vs Client
- Páginas de documentação são **Server Components** por padrão
- Use `"use client"` apenas quando há event handlers, hooks de estado ou `usePathname`
- Extraia demos interativos para arquivos separados em `components/docs/` com `"use client"`
- **Exceção**: páginas que passam funções `render` para componentes client (ex: `table/page.tsx`) precisam de `"use client"` e não podem exportar `metadata`
- Páginas de Padrões que usam componentes interativos (formulários, etc.) usam `"use client"`

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
| `--surface-brand` | `#1f4d2a` | Fundo verde escuro — hero, seções brand |
| `--surface-dark` | `#1a1612` | Fundo quase preto — CTAs de máximo impacto |
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

## Variantes do Button

| Variante | Fundo | Uso |
|---|---|---|
| `primary` | `--surface-brand` verde | Ação principal |
| `secondary` | `--paper` bege | Ação secundária |
| `ghost` | transparente | Ação terciária em fundo **claro** |
| `ghost-inverse` | transparente | Ação terciária em fundo **escuro ou verde** |
| `brand-inverse` | `--n-50` creme | Ação primária em fundo escuro/verde |
| `danger` | `--bm` vermelho | Ação destrutiva |
| `urgent` | `--fire` laranja | Escassez real, prazo crítico |

> **Atenção**: `ghost` em fundo escuro fica ilegível no hover (aplica `--paper`). Use sempre `ghost-inverse` sobre `--surface-brand` ou `--surface-dark`.

## Padrões de composição disponíveis

| Padrão | Localização | Descrição |
|---|---|---|
| Hero | `app/padroes/hero` | 3 variações: claro, brand, com urgência |
| Urgência | `app/padroes/urgencia` | Banner topo, bloco CTA escuro, cards de turma |
| Captação | `app/padroes/captacao` | Lead form simples + form 2 colunas com confirmação |
| FAQ | `app/padroes/faq` | FAQ geral + FAQ por força com conteúdo rico |
| Benefícios | `app/padroes/beneficios` | Grid 3 col com ícone, grid 2 col com checklist, stats em fundo brand |
| Depoimentos | `app/padroes/depoimentos` | Grid de cards, depoimento único em destaque, faixa de números |

## Adicionando novos componentes UI

1. Criar `components/ui/NomeComponente.tsx` com `"use client"` se necessário
2. Se o demo precisar de estado, criar `components/docs/NomeComponenteDemo.tsx` com `"use client"`
3. Criar `app/componentes/nome/page.tsx` (Server Component, exceto se passar `render` functions)
4. Adicionar rota no array `nav` em `components/layout/Sidebar.tsx` no grupo "Componentes"
5. Numeração sequencial: próximo componente é **10**

## Adicionando novos padrões

1. Criar `app/padroes/nome/page.tsx`
2. Adicionar em `Sidebar.tsx` no grupo "Padrões"
3. Numeração sequencial: próximo padrão é **07**
4. Usar o helper `PatternShell` + `UsedComponents` inline para consistência visual
5. Sempre incluir seção de "Diretrizes de uso" ao final

## Sidebar — estrutura atual

```
Fundamentos:  01-Cores · 02-Tipografia · 03-Espaçamento · 04-Tokens · 05-Sombras & Efeitos
Padrões:      01-Hero · 02-Urgência · 03-Captação · 04-FAQ · 05-Benefícios · 06-Depoimentos
Componentes:  01-Button · 02-Badge · 03-Card · 04-Input & Textarea · 05-Select
              06-Checkbox & Radio · 07-Alert · 08-Accordion · 09-Table
```

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
