# EuMilitar Design System — Instruções para Agentes

## O que é este projeto

Monorepo do design system da EuMilitar (plataforma de preparação para concursos militares). O app principal continua sendo um site de documentação, mas o repositório agora também expõe camadas reutilizáveis de tokens, CSS compartilhado, UI e padrões de composição.

## Stack

- **Turborepo** monorepo: `apps/docs` (Next.js 15) + `packages/tokens` + `packages/css` + `packages/web` + `packages/ui` + `packages/patterns`
- **Next.js 15 App Router** + TypeScript estrito
- **Tailwind v4 CSS-first** via `@tailwindcss/postcss`
- **next-themes** com `attribute="data-theme"`, `defaultTheme="light"`, `enableSystem={false}`

## Fonte da verdade dos tokens

**Os tokens CSS vivem em `packages/tokens`** e a camada de estilos compartilhados vive em `packages/css`.

`apps/docs/app/globals.css` deve concentrar imports, reset, `@theme inline` e estilos específicos do app. Quando um token mudar, a mudança deve acontecer primeiro em `packages/tokens/*.css`; quando uma primitive visual mudar, a mudança deve acontecer primeiro em `packages/css/*.css`.

`packages/web` é a base para sites tradicionais e CMSs fora de React. Ele deve concentrar renderização HTML canônica e comportamentos JS mínimos, sem acoplamento a WordPress.

## Documentos de referência

- `docs/component-development.md` — processo canônico para criar, revisar e documentar componentes UI
- `ARQUITETURA-BIBLIOTECA.md` — visão de arquitetura da biblioteca
- `CONSUMO-E-VERSOES.md` — consumo, versionamento e publicação
- `VALIDACAO-PROPAGACAO.md` — validação de propagação entre pacotes e consumers
- `packages/web/CONTRACT.md` — contrato da base web para consumo fora de React
- `packages/web/HTML_CONSUMPTION.md` — consumo HTML/CSS/JS puro

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
      page.tsx
      botao/page.tsx
      badge/page.tsx
      card/page.tsx
      input/page.tsx
      select/page.tsx
      checkbox/page.tsx
      alert/page.tsx
      accordion/page.tsx
      table/page.tsx
      navbar/page.tsx
      drawer/page.tsx
      tabs/page.tsx
      breadcrumbs/page.tsx
      toast/page.tsx
      tooltip/page.tsx
      skeleton/page.tsx
      loading/page.tsx
      fieldset/page.tsx
      toggle/page.tsx
      file-input/page.tsx
      progress/page.tsx
      steps/page.tsx
      stat/page.tsx
      avatar/page.tsx
      status/page.tsx
      list/page.tsx
      divider/page.tsx
      pagination/page.tsx
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
  css/
    ui.css
    patterns.css
    index.css
  web/
    render.ts
    behavior.ts
    types.ts
    index.ts
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
    Navbar.tsx
    Drawer.tsx
    Tabs.tsx
    Breadcrumbs.tsx
    Toast.tsx
    Tooltip.tsx
    Skeleton.tsx
    Loading.tsx
    Fieldset.tsx
    Toggle.tsx
    FileInput.tsx
    Progress.tsx
    Steps.tsx
    Stat.tsx
    Avatar.tsx
    Status.tsx
    List.tsx
    Divider.tsx
    Pagination.tsx
    styles.css             ← shim de compatibilidade para a camada CSS compartilhada
    index.ts
  patterns/
    patterns.ts             ← contratos dos blocos
    docs.tsx                ← helpers visuais reutilizados pelo app docs
    HTML_REFERENCES.md
    index.ts
```

## Desenvolvimento de componentes UI

O processo completo de criação, revisão, documentação, teste e versionamento de componentes está em `docs/component-development.md`.

Regras essenciais para agentes:

- Todo componente novo deve seguir o processo canônico antes de ser considerado pronto.
- Componentes em `packages/ui` não usam Tailwind; use classes semânticas `ds-*`, `data-slot`, tokens e estilos compartilhados em `packages/css/ui.css`.
- O app `docs` pode usar Tailwind para layout e composição da documentação.
- Todo componente público precisa de export em `packages/ui/index.ts`, página em `apps/docs/app/componentes`, rota no `Navbar` do docs e smoke test.
- Mudanças responsivas, navegação, overlays e risco de overflow mobile devem ter validação E2E.
- Mudanças distribuíveis precisam de changeset.

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
| Hero | `@carvalhorafael/eumilitar-patterns` + `app/padroes/hero` | variações clara, brand e urgente |
| Urgência | `@carvalhorafael/eumilitar-patterns` + `app/padroes/urgencia` | banner, CTA escuro, disponibilidade |
| Captação | `@carvalhorafael/eumilitar-patterns` + `app/padroes/captacao` | lead form simples e form completo |
| FAQ | `@carvalhorafael/eumilitar-patterns` + `app/padroes/faq` | FAQ geral e específico por força |
| Benefícios | `@carvalhorafael/eumilitar-patterns` + `app/padroes/beneficios` | grid, checklist e faixa de stats |
| Depoimentos | `@carvalhorafael/eumilitar-patterns` + `app/padroes/depoimentos` | cards, destaque e prova social |
| CTA Final | `@carvalhorafael/eumilitar-patterns` + `app/padroes/landing` | fechamento de conversão |

## Adicionando novos padrões

1. Adicionar o contrato do bloco em `packages/patterns/patterns.ts`
2. Se necessário, expandir helpers em `packages/patterns/docs.tsx`
3. Criar `app/padroes/nome/page.tsx`
4. Fazer a página consumir `PatternContract`, `PatternShell` e `UsedComponents` de `@carvalhorafael/eumilitar-patterns`
5. Adicionar em `Sidebar.tsx` no grupo "Padrões"
6. Sempre incluir seção de "Diretrizes de uso" ao final

## Base Web

- `packages/web` é a próxima camada central para consumo fora de React
- novos blocos portáveis devem considerar, quando fizer sentido, uma forma canônica de renderização HTML nessa camada
- comportamentos JS nessa camada devem ser mínimos, progressivos e independentes de WordPress

## WordPress

- WordPress e Elementor não são implementados neste repositório
- o tema WordPress real deve viver em outro projeto e consumir `tokens + css + web + patterns`
- este repositório deve permanecer focado na biblioteca base, não no consumer WordPress

## Branches e Main

- **Nunca** trabalhar diretamente na `main`
- **Nunca** commitar diretamente na `main`
- todo trabalho deve acontecer em uma branch de trabalho separada
- a `main` deve receber mudanças **apenas via Pull Request**
- se o agente encontrar a thread na `main` e precisar implementar algo, o primeiro passo deve ser criar ou mudar para uma branch de trabalho

## Regra de Versionamento

- levar código para `main` deve gerar **nova versão**
- PRs que alteram a biblioteca e serão mergeados em `main` devem incluir changeset correspondente
- quando o usuário disser que quer “criar uma nova versão”, o agente deve orientar o fluxo com `changeset`, PR de versionamento e release
- o versionamento não deve ser inferido silenciosamente; o agente deve deixar claro se a mudança é `patch`, `minor` ou `major`

## Fluxo de Release Recomendado

1. implementar a mudança em branch de trabalho
2. criar um changeset real descrevendo o impacto de versão
3. abrir PR para `main`
4. depois do merge, deixar o workflow de release criar ou atualizar o PR de versionamento
5. mergear o PR de versionamento
6. publicar a nova versão no registry configurado

## GitHub Packages

- se o registry escolhido for GitHub Packages, o namespace dos pacotes deve ser compatível com a conta ou organização que publica
- hoje os pacotes usam o scope `@carvalhorafael/*`
- o fluxo automático de release deve publicar no GitHub Packages usando esse scope
- qualquer mudança futura de scope deve ser tratada como mudança de distribuição e refletida em documentação, workflow e consumers

## Como orientar criação de versão

Quando o usuário pedir uma nova versão, o agente deve verificar:

1. se existe branch de trabalho ou PR em andamento
2. se já existe changeset para a mudança
3. se o bump esperado é `patch`, `minor` ou `major`
4. se `build`, `lint`, `test` e validações relevantes passaram
5. se o próximo passo é:
   - criar o changeset
   - gerar o versionamento
   - preparar o PR de versionamento
   - ou publicar a versão já pronta

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
