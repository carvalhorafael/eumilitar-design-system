# Processo de Criacao de Componentes UI

Status: fonte canonica
Escopo: `@carvalhorafael/eumilitar-ui`, `@carvalhorafael/eumilitar-css` e documentacao em `apps/docs`
Ultima revisao: 2026-05-13

## 01. Objetivo

Este documento define o processo que deve ser seguido para criar, alterar ou revisar componentes React do design system EuMilitar.

A regra pratica é: se a mudanca afeta a forma de implementar componentes UI, este documento deve ser atualizado.

## 02. Principios

- Todo componente novo deve nascer mobile-first.
- Componentes UI sao primitives reutilizaveis, nao composicoes especificas do app `docs`.
- Componentes em `packages/ui` nao devem usar Tailwind.
- Tailwind pode ser usado no app `apps/docs` para layout e composicao da documentacao.
- Estilos portaveis devem viver em `packages/css/ui.css`.
- Tokens devem vir de `@carvalhorafael/eumilitar-tokens`.
- APIs publicas devem ser pequenas, previsiveis e compativeis com consumers React.
- O componente deve funcionar no tema atual e preservar compatibilidade com dark mode via tokens semanticos.
- Comportamento interativo deve ser acessivel por teclado e por tecnologias assistivas.

## 03. Onde Cada Coisa Vive

### 03.1 Implementacao React

Use `packages/ui/NomeComponente.tsx`.

O arquivo deve conter:

- componente principal
- tipos publicos relacionados ao componente
- subcomponentes quando fizer sentido para composicao
- `"use client"` apenas quando houver hooks, estado, refs com efeito, event handlers internos ou comportamento client-side

### 03.2 Export publico

Atualize `packages/ui/index.ts`.

Todo componente publico precisa ser exportado ali. Tipos publicos tambem devem ser exportados.

### 03.3 Estilos compartilhados

Use `packages/css/ui.css` para classes semanticas e primitives visuais compartilhadas.

Evite criar estilo portavel dentro de `apps/docs/app/globals.css`. Esse arquivo deve concentrar reset, imports, `@theme inline` e estilos especificos do site de documentacao.

### 03.4 Documentacao publica

Crie `apps/docs/app/componentes/nome/page.tsx`.

A pagina deve:

- estar em PT-BR
- seguir a numeracao Field Manual usada no projeto
- mostrar estados e variantes relevantes
- mostrar contrato de props quando o componente tiver API propria
- orientar uso correto e limites do componente

Se o demo precisar de estado, crie um componente client em `apps/docs/components/docs/NomeComponenteDemo.tsx`.

### 03.5 Navegacao da documentacao

Adicione a rota no array `nav` em `apps/docs/components/layout/Sidebar.tsx`.

### 03.6 Backlog e planejamento

Backlogs de trabalho, como `docs/component-backlog.md`, sao documentos temporarios de planejamento. Eles podem orientar priorizacao, mas nao substituem este processo.

## 04. Anatomia Obrigatoria

Cada componente deve expor uma estrutura estavel para permitir reuso, testes, estilos externos e futura transposicao para HTML/CSS puro.

Padrao:

- classe raiz `ds-<component>`
- subpartes relevantes com `data-slot`
- quando fizer sentido, subpartes tambem recebem classe `ds-<component>__<slot>`

Exemplo:

```tsx
<div className="ds-alert" data-slot="alert">
  <div className="ds-alert__icon" data-slot="icon" />
  <div className="ds-alert__content" data-slot="content" />
</div>
```

Checklist de anatomia:

- [ ] classe raiz `ds-*`
- [ ] `data-slot` nas subpartes relevantes
- [ ] classes BEM-like para subpartes reutilizaveis
- [ ] `className` externo pode compor o componente quando aplicavel
- [ ] `style` externo e repassado quando aplicavel
- [ ] handlers nativos recebidos por props sao preservados
- [ ] IDs internos usam `useId` quando precisam ligar label, helper, trigger ou painel

## 05. Estilo e Tokens

Componentes UI devem usar CSS custom properties e classes semanticas.

Tokens mais comuns:

- tipografia: `--font-display`, `--font-body`, `--font-mono`
- texto: `--ink`, `--pencil`, `--text-inverse`
- superficies: `--paper`, `--paper-deep`, `--surface-raised`, `--surface-brand`, `--surface-dark`
- bordas: `--border-default`, `--border-strong`
- estados: `--accent`, `--state-error`, `--state-success`, `--fire`
- efeitos: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-brand`, `--shadow-urgent`
- raios: `--radius-sm`, `--radius-md`

Regras:

- nao usar valores hardcoded de cor quando houver token equivalente
- nao introduzir paletas paralelas dentro do componente
- manter foco visual com `:focus-visible`
- preservar a logica visual neo-brutalista: bordas explicitas, sombra offset e superficies claras
- reservar inline style para casos dinamicos, como tamanho calculado, estado ativo ou valor controlado

## 06. Mobile-first

Todo componente deve partir do menor viewport.

Checklist mobile:

- [ ] layout base funciona em largura estreita
- [ ] texto nao estoura o container
- [ ] controles mantem area de toque adequada
- [ ] estados abertos nao criam overflow horizontal de pagina
- [ ] variantes desktop entram via media query ou composicao progressiva
- [ ] demos em `apps/docs` tambem funcionam no viewport mobile

Quando houver risco de overflow ou comportamento responsivo relevante, adicione cobertura em `tests/e2e/docs-mobile.spec.ts`.

## 07. Acessibilidade

Todo componente deve ter semantica adequada ao seu papel.

Regras gerais:

- componentes interativos devem ser acessiveis por teclado
- controles devem ter nome acessivel
- estados devem expor ARIA quando isso fizer parte do padrao do componente
- mensagens de erro devem estar ligadas ao controle por `aria-describedby`
- `aria-invalid` deve ser usado em estados de erro de formulario
- conteudo oculto deve ser realmente ocultado de tecnologias assistivas quando fechado
- foco visivel deve existir em controles, links e triggers

Padroes ja usados:

- `Input`, `Textarea` e `Select`: `label`, `aria-invalid`, `aria-describedby`, `aria-required`
- `Checkbox` e `Radio`: label associado, helper text, `aria-invalid`, grupos com `fieldset`/`legend`
- `Alert`: `role="alert"` e dismiss com `aria-label`
- `Accordion`: `aria-expanded`, `aria-controls`, painel com `role="region"`, `aria-labelledby` e `hidden`
- `Navbar`: botao mobile com `aria-expanded`, `aria-controls` e labels de abrir/fechar
- `Table`: `th` com `scope` apropriado

Componentes de overlay, como `Drawer`, `Modal`, `Dropdown` e `Tooltip`, exigem revisao adicional de foco, fechamento por `Escape`, clique externo e retorno de foco ao trigger.

## 08. Formularios

Componentes de formulario devem seguir a API comum sempre que fizer sentido:

- `inputState?: "default" | "error" | "success"`
- `size?: "sm" | "md" | "lg"`
- `label?`
- `helperText?`
- `required?`

O tipo `InputState` e `InputSize` deve continuar vindo de `Input.tsx` quando o componente fizer parte da familia de formulario.

## 09. Server e Client Components

Páginas de documentacao em `apps/docs/app` devem ser Server Components por padrao.

Use `"use client"` somente quando houver:

- hooks de estado
- event handlers
- `usePathname`
- refs com efeito
- componentes interativos que dependem do browser

Se a pagina apenas apresenta um componente interativo encapsulado, prefira mover o demo para `apps/docs/components/docs/NomeComponenteDemo.tsx` com `"use client"`.

## 10. Testes

Cada componente novo deve ter pelo menos smoke test em `packages/ui/smoke.test.tsx`.

Cobertura minima:

- renderizacao basica
- nome acessivel quando houver controle interativo
- atributos ARIA principais
- estados essenciais
- handlers ou comportamento interativo principal

Adicionar E2E mobile quando:

- o componente afeta navegacao do docs
- ha painel aberto/fechado em mobile
- existe risco de overflow horizontal
- o componente depende de comportamento real do browser

Comandos esperados antes de concluir:

```bash
npm run lint
npm run test
npm run build
npm run test:e2e
```

`npm run test:e2e` deve ser usado quando houver mudanca responsiva, navegacao, overlay ou risco de regressao mobile. Nao rode `npm run build` e `npm run test:e2e` em paralelo, porque ambos podem disputar artefatos do app Next.

## 11. Documentacao do Componente

A pagina de documentacao deve incluir:

- nome do componente
- descricao curta de uso
- demos das variantes principais
- exemplo de codigo
- contrato de props quando relevante
- diretrizes de uso quando o componente puder ser usado de forma ambigua
- estados mobile quando o comportamento mudar entre mobile e desktop

Evite transformar a pagina em marketing. Ela deve ser uma referencia pratica de implementacao e uso.

## 12. Versionamento

Toda mudanca distribuivel deve ter changeset.

Use `patch` quando:

- corrigir bug visual ou de acessibilidade sem mudar API
- adicionar uma variante pequena a componente existente
- ajustar documentacao publica sem nova API relevante

Use `minor` quando:

- adicionar novo componente publico
- adicionar nova API publica relevante
- adicionar conjunto de componentes que amplia a biblioteca

Use `major` quando:

- remover ou renomear API publica
- mudar comportamento esperado de forma incompatível
- alterar contrato de estilos/classes publicas de forma quebravel

## 13. Checklist de Entrega

Para cada componente novo:

- [ ] implementar `packages/ui/NomeComponente.tsx`
- [ ] exportar em `packages/ui/index.ts`
- [ ] adicionar estilos em `packages/css/ui.css`
- [ ] adicionar ou atualizar renderizacao canonica em `packages/web` quando o componente for viavel fora de React
- [ ] adicionar ou atualizar comportamento progressivo em `packages/web` quando houver interacao sem React
- [ ] registrar explicitamente no PR quando o componente ficar React-only por enquanto
- [ ] documentar em `apps/docs/app/componentes/nome/page.tsx`
- [ ] adicionar rota em `apps/docs/components/layout/Sidebar.tsx`
- [ ] adicionar smoke test em `packages/ui/smoke.test.tsx`
- [ ] adicionar E2E mobile quando aplicavel
- [ ] atualizar este documento se criar novo padrao de implementacao
- [ ] criar changeset quando houver mudanca distribuivel
- [ ] validar com lint, test e build
- [ ] validar com E2E quando aplicavel

## 14. Checklist de Revisao

Antes de considerar pronto:

- [ ] o componente funciona no menor viewport relevante
- [ ] nao ha overflow horizontal inesperado
- [ ] foco visivel esta claro
- [ ] labels e descricoes estao associados corretamente
- [ ] estados `disabled`, erro e sucesso existem quando aplicaveis
- [ ] tokens semanticos sao usados no lugar de valores hardcoded
- [ ] classes e slots sao estaveis
- [ ] documentacao mostra uso realista
- [ ] testes cobrem a interacao principal
- [ ] changeset descreve o impacto de versao

## 15. Sequencia Recomendada de Trabalho

1. Ler este documento.
2. Verificar o backlog ou issue que justifica o componente.
3. Definir API publica minima.
4. Implementar componente em `packages/ui`.
5. Adicionar estilos em `packages/css`.
6. Avaliar portabilidade web:
   - se o componente puder existir em HTML/CSS/JS sem React, adicionar renderer e tipos em `packages/web`;
   - se houver interacao, adicionar enhancement progressivo em `packages/web/behavior.ts`;
   - se nao for viavel portar agora, registrar a decisao e o motivo no PR.
7. Documentar no app `docs`.
8. Adicionar testes.
9. Rodar validacoes.
10. Criar changeset listando todos os pacotes distribuiveis afetados.
11. Preparar PR para `main`.
