# Backlog de Componentes do Design System

Status: em execucao
Referencia externa: [daisyUI Components](https://daisyui.com/components/)
Ultima revisao: 2026-05-13

## 01. Contexto

Este backlog orienta a expansao do pacote `@carvalhorafael/eumilitar-ui` com componentes mobile-first. A lista do daisyUI foi usada como referencia de cobertura por categoria, nao como contrato visual ou tecnico a ser copiado.

O objetivo e priorizar componentes que aumentem o valor pratico do design system para:

- navegacao mobile e estruturas responsivas
- formularios e fluxos de captacao
- feedback de estado e carregamento
- documentacao tecnica do proprio design system
- interfaces futuras de produto sem depender de componentes avulsos

## 02. Cobertura Atual

Ja existem no pacote UI:

- `Accordion`
- `Alert`
- `Badge`
- `Button`
- `Card`
- `Checkbox`
- `Radio`
- `Input`
- `Textarea`
- `Select`
- `Table`
- `Navbar`
- `Drawer`
- `Tabs`
- `Breadcrumbs`
- `Toast`
- `Tooltip`
- `Skeleton`
- `Loading`

Tambem existem padroes de composicao em `@carvalhorafael/eumilitar-patterns`, como Hero, urgencia, captacao, FAQ, beneficios, depoimentos e landing.

## 03. Principios de Implementacao

- Todo componente novo deve ser mobile-first por padrao.
- Componentes em `packages/ui` devem usar classes semanticas `ds-*`, CSS custom properties e estilos compartilhados em `packages/css`.
- Tailwind deve permanecer restrito ao app `apps/docs` e composicao de paginas.
- Cada componente novo deve incluir pagina de documentacao em `apps/docs/app/componentes`.
- Demos interativos com estado devem viver em `apps/docs/components/docs`.
- Componentes com nova API publica devem incluir changeset.
- Mudancas que adicionam varios componentes novos tendem a justificar versao `minor`; componentes isolados e pequenos podem justificar `patch`.

## 04. Prioridade Alta

### 04.1 Drawer

Status: implementado

Valor:

- Complementa o `Navbar` recem-criado.
- Resolve navegacao lateral mobile, filtros, sumario de documentacao e paineis de apoio.
- Ajuda a evitar barras horizontais ou menus densos em telas pequenas.

Escopo sugerido:

- `Drawer`
- `DrawerTrigger`
- `DrawerPanel`
- `DrawerOverlay`
- suporte a lado `left | right`
- fechamento por overlay, `Escape` e item clicado
- controle via props `open`/`onOpenChange` e modo nao controlado

Validacao:

- teste unitario de abertura/fechamento e atributos ARIA
- E2E mobile em uma pagina de exemplo

### 04.2 Tabs

Status: implementado

Valor:

- Muito util para documentacao de componentes, variantes, exemplos de codigo e comparacao de conteudo.
- Evita layouts longos em mobile quando ha grupos claros de conteudo.

Escopo sugerido:

- `Tabs`
- `TabList`
- `Tab`
- `TabPanel`
- orientacao horizontal com overflow seguro no mobile
- estado controlado e nao controlado

Validacao:

- navegacao por clique
- atributos `role="tablist"`, `role="tab"` e `role="tabpanel"`
- teste de overflow mobile

### 04.3 Breadcrumbs

Status: implementado

Valor:

- Melhora orientacao em documentacao e produtos com hierarquia.
- Baixo custo de implementacao e alto uso recorrente.

Escopo sugerido:

- `Breadcrumbs`
- itens com `href`, `label`, `current`
- separador visual configuravel
- suporte a `renderLink` para Next Link ou roteadores externos

Validacao:

- `aria-label` de navegacao
- `aria-current="page"` no item atual

### 04.4 Toast

Status: implementado

Valor:

- Feedback transitorio para salvar, copiar, enviar, erro de rede e confirmacoes.
- Evita uso indevido de `Alert` para eventos temporarios.

Escopo sugerido:

- `Toast`
- `ToastViewport`
- variantes `info | success | warning | error`
- acao opcional
- fechamento manual

Observacao:

- Uma primeira versao pode ser visual e composicional, sem gerenciador global. O provider global pode ficar para uma etapa posterior.

Validacao:

- role/status adequado por variante
- foco e botao de fechar acessivel

### 04.5 Tooltip

Status: implementado

Valor:

- Necessario para botoes com icones, controles compactos e UI mobile/desktop mais densa.
- Ajuda a manter a interface limpa sem perder explicacao contextual.

Escopo sugerido:

- `Tooltip`
- trigger por `children`
- posicoes `top | right | bottom | left`
- abertura por hover e foco

Observacao:

- Em mobile, tooltip deve ser usado com cuidado. A documentacao deve orientar quando preferir texto visivel.

Validacao:

- aparece em foco
- texto fica associado ao controle por ARIA quando aplicavel

### 04.6 Skeleton

Status: implementado

Valor:

- Estado de carregamento essencial para apps reais.
- Ajuda a padronizar loading sem layouts pulando.

Escopo sugerido:

- `Skeleton`
- formatos `text | block | circle`
- largura, altura e quantidade de linhas configuraveis
- animacao respeitando `prefers-reduced-motion`

Validacao:

- renderizacao sem conteudo acessivel redundante
- tokens de cor e movimento

### 04.7 Loading

Status: implementado

Valor:

- Complementa `Skeleton` para acoes curtas, botoes e estados de pagina.
- Padroniza spinner/progresso indeterminado.

Escopo sugerido:

- `Loading`
- tamanhos `sm | md | lg`
- variantes `spinner | dots | bar`
- label acessivel opcional

Validacao:

- `role="status"` quando houver label
- suporte a uso inline em `Button`

## 05. Prioridade Media

### 05.1 Progress

Valor:

- Mostra progresso de tarefas, onboarding, aulas, matricula e fluxos em etapas.

Escopo sugerido:

- `Progress`
- valor controlado `value`, `max`
- variante indeterminada
- label opcional

### 05.2 Steps

Valor:

- Alinhado com jornadas de inscricao, checkout, onboarding e trilhas de estudo.

Escopo sugerido:

- `Steps`
- estados `complete | current | pending | error`
- orientacao mobile vertical e desktop horizontal

### 05.3 Fieldset

Valor:

- Organiza formularios longos com semantica correta.
- Reforca a base de captacao e fluxos de cadastro.

Escopo sugerido:

- `Fieldset`
- `legend`
- descricao/helper
- estado de erro no grupo

### 05.4 Toggle

Valor:

- Representa configuracao liga/desliga de forma melhor que `Checkbox`.

Escopo sugerido:

- `Toggle`
- label
- helper text
- estados `default | error | success`
- tamanhos alinhados a `InputSize`

### 05.5 FileInput

Valor:

- Necessario para envio de documentos, comprovantes, avatar e anexos.

Escopo sugerido:

- `FileInput`
- label, helper text e estados
- estado visual com nome do arquivo
- suporte a `accept`, `multiple` e disabled

### 05.6 Stat

Valor:

- Util para prova social, dashboards simples, metricas de landing e blocos de resultado.

Escopo sugerido:

- `Stat`
- titulo, valor, descricao, icone e tendencia opcional
- grid responsivo de `Stats`

## 06. Prioridade Baixa ou Condicional

Estes componentes podem ser uteis, mas dependem mais do produto consumidor ou de decisoes de interacao:

- `Avatar`
- `List`
- `Status`
- `Kbd`
- `Divider`
- `Pagination`
- `Timeline`
- `Range`
- `Rating`
- `Modal`
- `Dropdown`
- `Menu`
- `Dock`
- `Footer`

Observacao sobre `Modal`, `Dropdown` e `Menu`:

- Sao importantes, mas envolvem decisoes de foco, portal, posicionamento, fechamento por clique externo, `Escape` e acessibilidade.
- Devem ser planejados junto de uma base de overlays, provavelmente depois de `Drawer` e `Tooltip`.

## 07. Fora do Escopo Inicial

Nao priorizar agora:

- mockups visuais (`Browser mockup`, `Code mockup`, `Phone mockup`, `Window mockup`)
- efeitos puramente visuais (`Hover 3D Card`, `Hover Gallery`, `Text Rotate`, `Mask`)
- componentes muito especificos sem demanda atual (`Calendar`, `Countdown`, `Diff`, `Chat bubble`, `Carousel`, `FAB / Speed Dial`)
- `Theme Controller`, porque o projeto ja usa `next-themes` com `data-theme`

## 08. Sequencia Recomendada

### Lote 1 - Navegacao e documentacao

- [x] `Drawer`
- [x] `Tabs`
- [x] `Breadcrumbs`

Justificativa:

- Fecha a base de navegacao mobile-first.
- Melhora imediatamente o proprio site de documentacao.
- Amplia APIs publicas o suficiente para justificar versao `minor`.

### Lote 2 - Feedback e loading

- [x] `Toast`
- [x] `Tooltip`
- [x] `Skeleton`
- [x] `Loading`

Justificativa:

- Traz estados essenciais para apps reais.
- Evita padroes improvisados em consumers.

### Lote 3 - Formularios e progresso

- [ ] `Fieldset`
- [ ] `Toggle`
- [ ] `FileInput`
- [ ] `Progress`
- [ ] `Steps`

Justificativa:

- Fortalece fluxos de captacao, cadastro, onboarding e checkout.

### Lote 4 - Dados e suporte visual

- [ ] `Stat`
- [ ] `Avatar`
- [ ] `Status`
- [ ] `List`
- [ ] `Divider`
- [ ] `Pagination`

Justificativa:

- Complementa superficies de dashboard, listagens e paginas de conteudo.

## 09. Checklist por Componente

Cada componente novo deve entregar:

- [ ] arquivo em `packages/ui/Nome.tsx`
- [ ] export em `packages/ui/index.ts`
- [ ] estilos em `packages/css/ui.css`
- [ ] pagina em `apps/docs/app/componentes/nome/page.tsx`
- [ ] rota no `Navbar` do site de documentacao
- [ ] smoke test em `packages/ui/smoke.test.tsx`
- [ ] E2E mobile quando houver interacao ou risco de overflow
- [ ] changeset quando alterar API publica
- [ ] validacao com `npm run lint`, `npm run test`, `npm run build` e, quando aplicavel, `npm run test:e2e`

## 10. Proxima Decisao

Recomendacao: iniciar pelo Lote 1 (`Drawer`, `Tabs`, `Breadcrumbs`) em uma branch propria ou na branch atual, mantendo cada componente com documentacao e teste antes de avancar para o proximo.
