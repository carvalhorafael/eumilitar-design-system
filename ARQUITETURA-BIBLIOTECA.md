# EuMilitar Design System — Arquitetura de Biblioteca

## Objetivo

Registrar a arquitetura-alvo do design system como biblioteca distribuível, com artefatos claros para múltiplos consumidores:

- app React/Next;
- site institucional;
- tema WordPress;
- páginas compostas com Elementor por cima do tema.

## Camadas da biblioteca

### 1. `@eumilitar/tokens`

Responsabilidade:
- fonte única de verdade de valores visuais

Escopo:
- cores
- tipografia
- espaçamento
- bordas e raios
- sombras e efeitos
- estados semânticos

Artefatos atuais:
- `@eumilitar/tokens`
- `@eumilitar/tokens/colors`
- `@eumilitar/tokens/typography`
- `@eumilitar/tokens/spacing`
- `@eumilitar/tokens/effects`

Metadata de distribuição:
- exporta CSS por subpaths
- declara `sideEffects` para preservar imports de estilos em bundlers

Consumidores esperados:
- `@eumilitar/css`
- `apps/docs`
- futuro adapter WordPress

### 2. `@eumilitar/css`

Responsabilidade:
- camada CSS compartilhada e agnóstica de framework

Escopo:
- primitives reutilizáveis
- blocos compartilháveis por classes
- bridge principal para WordPress e outros sistemas não React

Artefatos atuais:
- `@eumilitar/css`
- `@eumilitar/css/ui`
- `@eumilitar/css/patterns`

Observação:
- `patterns.css` ainda está reservado para migração incremental dos blocos

Metadata de distribuição:
- exporta entrypoints CSS explícitos
- pode ser consumido por apps React, HTML puro e futuro tema WordPress

### 3. `@eumilitar/ui`

Responsabilidade:
- adapter React do design system

Escopo:
- componentes React que consomem tokens e CSS compartilhado

Artefatos atuais:
- `@eumilitar/ui`
- `@eumilitar/ui/styles.css` como shim de compatibilidade

Regra:
- `@eumilitar/ui` não deve virar nova fonte de estilo; ele deve continuar dependente de `@eumilitar/css`

Metadata de distribuição:
- pacote preparado para publicação versionada
- `styles.css` permanece apenas como ponte de compatibilidade

### 4. `@eumilitar/patterns`

Responsabilidade:
- contratos de conteúdo, anatomia, variantes e referências de blocos

Escopo:
- contratos de hero, urgency, faq, capture, benefits, testimonials, cta
- helpers de documentação
- HTML de referência

Artefatos atuais:
- `@eumilitar/patterns`
- `@eumilitar/patterns/docs`

Metadata de distribuição:
- contratos e helpers expostos por entrypoints públicos
- app `docs` consome apenas esses entrypoints

### 5. `apps/docs`

Responsabilidade:
- vitrine
- validação
- documentação oficial

Regra:
- o app `docs` deve consumir os pacotes como um consumidor real, e não importar internals fora das APIs declaradas

## Matriz de consumidores

### React / Next.js

Consome:
- `@eumilitar/tokens`
- `@eumilitar/css`
- `@eumilitar/ui`
- `@eumilitar/patterns`

### WordPress Theme

Consome:
- `@eumilitar/tokens`
- `@eumilitar/css`
- `@eumilitar/patterns`

No futuro:
- `@eumilitar/wordpress`

### Elementor

Consome indiretamente:
- tokens e CSS carregados pelo tema WordPress
- templates/seções baseados nos contratos de `@eumilitar/patterns`

Regra:
- Elementor não vira fonte de verdade do design system

## Política de exportações por pacote

### `@eumilitar/tokens`

Público:
- entrypoint CSS agregado
- subpaths por domínio (`colors`, `spacing`, `typography`, `effects`)

Futuro:
- export JSON para integração com `theme.json` e outras toolchains

### `@eumilitar/css`

Público:
- entrypoint agregado
- `ui.css`
- `patterns.css`

### `@eumilitar/ui`

Público:
- componentes React
- shim `styles.css`

Internamente:
- depende de `@eumilitar/css`

### `@eumilitar/patterns`

Público:
- contratos dos blocos
- helpers de documentação compartilháveis

Não público por enquanto:
- referências Markdown tratadas como documentação de repositório

## Política de versionamento

Ferramenta escolhida:
- **Changesets**

Motivo:
- funciona bem em monorepos multi-pacote
- permite versionamento por pacote
- gera changelog por pacote
- suporta mudanças coordenadas entre camadas relacionadas

### Regras

1. Toda mudança que afete consumidor externo deve gerar changeset.
2. Versionamento segue `semver`.
3. Quebras em tokens, CSS compartilhado ou API React devem ser `major`.
4. Novos componentes, variantes, exports ou blocos reutilizáveis tendem a ser `minor`.
5. Correções visuais, semânticas ou de acessibilidade sem quebra de API tendem a ser `patch`.
6. O app `docs` pode continuar versionado no monorepo, mas não é tratado como pacote distribuível prioritário.
7. Pacotes publicáveis usam `publishConfig.access = "restricted"` até a estratégia final de publicação ser definida.

### Scripts definidos

- `npm run changeset`
- `npm run release:status`
- `npm run version-packages`
- `npm run release:snapshot`
- `npm run release`

## Fase atual da arquitetura

Já concluído:
- tokens compartilhados
- camada CSS compartilhada criada
- React adapter consumindo a camada CSS
- docs consumindo a camada CSS
- docs transpilando os pacotes TS e TSX compartilhados usados via workspace
- base de versionamento inicial com Changesets

Ainda falta:
- formalizar pacote WordPress
- definir export JSON de tokens
- decidir estratégia real de publicação

## Consumidor mínimo validado

O repositório agora inclui [apps/consumer-react](/Users/rafaelcarvalho/Development/quest_edu/eumilitar-design-system/apps/consumer-react) para provar:

- import de `@eumilitar/tokens` e `@eumilitar/css` no CSS global
- consumo de `@eumilitar/ui` em outro app Next
- leitura de `@eumilitar/patterns` fora do app `docs`
