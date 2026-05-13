# EuMilitar Design System — Arquitetura de Biblioteca

## Objetivo

Registrar a arquitetura-alvo do design system como biblioteca distribuível, com artefatos claros para múltiplos consumidores:

- app React/Next;
- sites tradicionais em HTML/CSS/JS;
- site institucional;
- e futuros consumers externos, como um projeto separado de tema WordPress.

## Camadas da biblioteca

### 1. `@carvalhorafael/eumilitar-tokens`

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
- `@carvalhorafael/eumilitar-tokens`
- `@carvalhorafael/eumilitar-tokens/colors`
- `@carvalhorafael/eumilitar-tokens/typography`
- `@carvalhorafael/eumilitar-tokens/spacing`
- `@carvalhorafael/eumilitar-tokens/effects`
- `@carvalhorafael/eumilitar-tokens/json`

Metadata de distribuição:
- exporta CSS por subpaths
- exporta JSON agregado e por domínio
- declara `sideEffects` para preservar imports de estilos em bundlers

Consumidores esperados:
- `@carvalhorafael/eumilitar-css`
- `apps/docs`
- futuros consumers externos

### 2. `@carvalhorafael/eumilitar-css`

Responsabilidade:
- camada CSS compartilhada e agnóstica de framework

Escopo:
- primitives reutilizáveis
- blocos compartilháveis por classes
- bridge principal para WordPress e outros sistemas não React

Artefatos atuais:
- `@carvalhorafael/eumilitar-css`
- `@carvalhorafael/eumilitar-css/ui`
- `@carvalhorafael/eumilitar-css/patterns`

Observação:
- `patterns.css` ainda está reservado para migração incremental dos blocos

Metadata de distribuição:
- exporta entrypoints CSS explícitos
- pode ser consumido por apps React, HTML puro e futuros consumers externos

### 3. `@carvalhorafael/eumilitar-patterns`

Responsabilidade:
- contratos de conteúdo, anatomia, variantes e referências de blocos

Escopo:
- contratos de hero, urgency, faq, capture, benefits, testimonials, cta
- helpers de documentação
- HTML de referência

Artefatos atuais:
- `@carvalhorafael/eumilitar-patterns`
- `@carvalhorafael/eumilitar-patterns/docs`

Metadata de distribuição:
- contratos e helpers expostos por entrypoints públicos
- app `docs` consome apenas esses entrypoints

### 4. `@carvalhorafael/eumilitar-web`

Responsabilidade:
- base de renderização HTML e comportamentos JS mínimos para sites não React

Escopo:
- markup canônico por bloco
- render helpers para HTML
- interações progressivas opcionais

Direção:
- essa camada deve ser agnóstica de plataforma
- WordPress e outros CMSs devem consumi-la como base em projetos externos

Artefatos atuais:
- `@carvalhorafael/eumilitar-web`
- renderização HTML canônica para hero, urgency, faq, capture, benefits, testimonials e cta
- comportamento progressivo mínimo para accordion
- manifesto público de blocos, variantes e classes-base

### 5. `@carvalhorafael/eumilitar-ui`

Responsabilidade:
- adapter React do design system

Escopo:
- componentes React que consomem tokens e CSS compartilhado

Artefatos atuais:
- `@carvalhorafael/eumilitar-ui`
- `@carvalhorafael/eumilitar-ui/styles.css` como shim de compatibilidade

Regra:
- `@carvalhorafael/eumilitar-ui` não deve virar nova fonte de estilo; ele deve continuar dependente de `@carvalhorafael/eumilitar-css`

Metadata de distribuição:
- pacote preparado para publicação versionada
- `styles.css` permanece apenas como ponte de compatibilidade

### 6. `apps/docs`

Responsabilidade:
- vitrine
- validação
- documentação oficial

Regra:
- o app `docs` deve consumir os pacotes como um consumidor real, e não importar internals fora das APIs declaradas

## Matriz de consumidores

### React / Next.js

Consome:
- `@carvalhorafael/eumilitar-tokens`
- `@carvalhorafael/eumilitar-css`
- `@carvalhorafael/eumilitar-web`
- `@carvalhorafael/eumilitar-ui`
- `@carvalhorafael/eumilitar-patterns`

### Traditional Website / CMS

Consome:
- `@carvalhorafael/eumilitar-tokens`
- `@carvalhorafael/eumilitar-css`
- `@carvalhorafael/eumilitar-web`
- opcionalmente `@carvalhorafael/eumilitar-patterns`

### WordPress Theme

Consome:
- `@carvalhorafael/eumilitar-tokens`
- `@carvalhorafael/eumilitar-css`
- `@carvalhorafael/eumilitar-web`
- `@carvalhorafael/eumilitar-patterns`

Observação:
- esse consumer deve viver em outro repositório
- este repositório não contém mais adapter WordPress

### Elementor

Consome indiretamente:
- tokens e CSS carregados pelo tema WordPress
- templates/seções baseados nos contratos de `@carvalhorafael/eumilitar-patterns`

Regra:
- Elementor não vira fonte de verdade do design system
- Elementor também deve ser tratado no projeto externo do tema

## Política de exportações por pacote

### `@carvalhorafael/eumilitar-tokens`

Público:
- entrypoint CSS agregado
- subpaths por domínio (`colors`, `spacing`, `typography`, `effects`)

Futuro:
- export JSON para integração com consumers externos como `theme.json` e outras toolchains
  Observação:
  o primeiro export JSON já faz parte da API pública; o próximo passo é endurecer o schema e o versionamento desse formato

### `@carvalhorafael/eumilitar-css`

Público:
- entrypoint agregado
- `ui.css`
- `patterns.css`

### `@carvalhorafael/eumilitar-web`

Público:
- render helpers HTML
- comportamentos JS mínimos
- entrypoints pensados para sites tradicionais e CMSs

### `@carvalhorafael/eumilitar-ui`

Público:
- componentes React
- shim `styles.css`

Internamente:
- depende de `@carvalhorafael/eumilitar-css`

### `@carvalhorafael/eumilitar-patterns`

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
- formalizar pacote `@carvalhorafael/eumilitar-web`
- definir export voltado ao futuro projeto de tema WordPress
- definir export JSON de tokens
- decidir estratégia real de publicação

## Consumidor mínimo validado

O repositório agora inclui `apps/consumer-react` para provar:

- import de `@carvalhorafael/eumilitar-tokens` e `@carvalhorafael/eumilitar-css` no CSS global
- consumo de `@carvalhorafael/eumilitar-ui` em outro app Next
- leitura de `@carvalhorafael/eumilitar-patterns` fora do app `docs`

O repositório também inclui `apps/consumer-static` para provar:

- geração de HTML a partir de `@carvalhorafael/eumilitar-web`
- consumo da camada visual fora de React
- uso de comportamento progressivo mínimo em HTML/JS puro
