# EuMilitar Design System — Plano de Trabalho Atual

## Status geral

**Foco atual**: transformar o design system em uma biblioteca distribuível e versionada  
**Objetivo de médio prazo**: permitir consumo consistente em múltiplos sistemas, incluindo app React/Next, site institucional e outros consumers web  
**Objetivo de longo prazo**: ter uma base compartilhada de tokens, CSS, componentes e blocos que possa evoluir com versionamento previsível e atualização controlada

## Decisão arquitetural

O design system **não** será tratado como um conjunto de componentes React tentando rodar em qualquer plataforma.

Ele será tratado como uma arquitetura em camadas:

1. `tokens` como fonte única de verdade
2. `css` compartilhado e agnóstico de framework
3. `patterns` como contratos e markup de blocos
4. `web` como base para HTML/CSS/JS agnóstica de plataforma
5. `ui` como adapter React
6. `docs` como vitrine e ambiente de validação

## O que já está consolidado

### Base visual e técnica
- [x] Tokens centralizados em `@eumilitar/tokens`
- [x] Primitives React extraídas para `@eumilitar/ui`
- [x] Contratos de blocos formalizados em `@eumilitar/patterns`
- [x] Documentação operacional do monorepo atualizada
- [x] Lint, build e smoke tests funcionando
- [x] Base mínima de acessibilidade e fluxo de formulários validada

### Documentação já existente
- [x] Anatomia dos componentes
- [x] HTML puro por componente
- [x] Anti-padrões por componente
- [x] HTML de referência por bloco

Esses itens não são mais o foco principal do plano. Eles passam a ser pré-requisitos já concluídos.

## Princípios do novo ciclo

- [x] O compartilhamento entre plataformas deve acontecer por **tokens + CSS + contratos**, não por React apenas
- [x] Atualizações devem acontecer por **versionamento**, não por acoplamento invisível
- [x] WordPress será tratado como **consumer externo**, não como parte deste repositório
- [x] Elementor será tratado como **consumer externo**, não como fonte da verdade do design system

## Arquitetura alvo do monorepo

### Camadas centrais

#### `packages/tokens`

Responsabilidade:
- source of truth de cores, tipografia, espaçamento, bordas, sombras e estados

Artefatos esperados:
- CSS variables
- JSON exportável
- export que possa ser consumido por projetos externos, incluindo um futuro tema WordPress

#### `packages/css`

Responsabilidade:
- biblioteca CSS agnóstica de framework

Conteúdo esperado:
- primitives (`.ds-button`, `.ds-input`, `.ds-card`, etc.)
- blocos (`.ds-hero`, `.ds-faq`, `.ds-capture`, etc.)
- helpers mínimos de layout realmente reutilizáveis

Observação:
- essa camada será a ponte principal para WordPress e outros sistemas não React

#### `packages/ui`

Responsabilidade:
- adapter React do design system

Regra:
- `@eumilitar/ui` deve consumir a camada de tokens e a camada de CSS compartilhado, não se comportar como fonte paralela

#### `packages/patterns`

Responsabilidade:
- contratos de conteúdo, anatomia, variantes, HTML refs e regras responsivas dos blocos

Uso:
- documentação
- geração de templates
- mapping de CMS
- base para consumers externos, incluindo CMSs e um futuro projeto de tema WordPress

#### `packages/web`

Responsabilidade:
- base para sites que consomem a biblioteca sem React e sem acoplamento a uma plataforma específica

Conteúdo esperado:
- HTML canônico por bloco
- funções de renderização de markup
- comportamentos JS mínimos para interações opcionais
- ponto de integração para CMSs, temas tradicionais e páginas estáticas

### Camadas por plataforma

#### `apps/docs`

Responsabilidade:
- vitrine oficial
- ambiente de smoke visual/manual
- documentação dos contratos

#### Projeto externo de tema WordPress

Direção recomendada:
- o tema WordPress deve viver em outro repositório
- esse projeto futuro deve consumir `@eumilitar/tokens`, `@eumilitar/css`, `@eumilitar/web` e `@eumilitar/patterns`
- Elementor, quando existir, deve ser tratado nesse projeto do tema, não aqui

## Fases do trabalho

### Fase 1 — Definir a biblioteca distribuível

Objetivo:
transformar o estado atual em uma arquitetura de biblioteca clara

Entregas:
- [x] decidir se a camada CSS compartilhada viverá em `packages/css`
- [x] ajustar `@eumilitar/ui` para depender explicitamente da camada CSS compartilhada
- [x] definir quais artefatos cada pacote exporta
- [x] documentar a arquitetura alvo no repositório
- [x] definir a política de versionamento dos pacotes
- [x] alinhar metadata inicial dos pacotes para distribuição versionada
- [x] garantir que o app `docs` consuma entrypoints públicos dos pacotes compartilhados

### Fase 2 — Artefatos de distribuição

Objetivo:
fazer os pacotes gerarem saídas consumíveis por outros sistemas

Entregas:
- [x] criar exports claros para `@eumilitar/tokens`
- [x] criar build/export da camada CSS compartilhada
- [x] revisar `package.json` dos pacotes para consumo externo
- [x] garantir que o `docs` consuma esses artefatos como consumidor real
- [x] validar o fluxo de import em um consumer mínimo fora do app `docs`

### Fase 3 — Base de release e versionamento

Objetivo:
tirar o design system do modo “código local” e colocá-lo no modo “biblioteca versionada”

Entregas:
- [x] escolher estratégia de release, preferencialmente `changesets`
- [x] configurar versionamento semântico
- [x] definir changelog por pacote
- [x] preparar CI para validar build/lint/test antes de release
- [x] documentar como um consumer atualiza de versão

### Fase 4 — Web Core

Objetivo:
criar uma base geral para sites não React antes de qualquer adapter de plataforma

Entregas:
- [x] criar `packages/web`
- [x] definir API inicial de renderização HTML por bloco
- [x] definir comportamentos JS mínimos para interações opcionais
- [x] documentar como um site tradicional consome tokens, CSS e markup
- [x] validar a camada `web` sem dependência de WordPress

### Fase 5 — Handoff para projeto de tema WordPress

Objetivo:
preparar esta biblioteca para ser consumida por um projeto separado de tema WordPress

Entregas:
- [ ] documentar o contrato mínimo esperado pelo futuro projeto de tema
- [ ] definir quais artefatos esse projeto deverá consumir
- [ ] definir estratégia de export para tokens compatíveis com `theme.json`
- [ ] preparar um handoff técnico para o repositório do tema

### Fase 6 — Consumers externos futuros

Objetivo:
registrar os próximos consumers fora deste repositório

Entregas:
- [ ] definir escopo do futuro tema WordPress
- [ ] definir escopo de Elementor dentro do projeto do tema
- [ ] registrar limites entre biblioteca base e implementação do consumer

### Fase 7 — Consumers reais e propagação de mudanças

Objetivo:
provar que a biblioteca funciona fora do app `docs`

Entregas:
- [x] criar um consumer real mínimo da biblioteca
- [ ] validar update de versão em um consumer
- [ ] validar que mudanças de tokens e CSS propagam de forma previsível
- [ ] documentar limitações e pontos de atenção de compatibilidade

## Ordem recomendada de execução

1. Fase 1 — definir arquitetura final da biblioteca
2. Fase 2 — gerar artefatos de distribuição
3. Fase 3 — preparar versionamento e release
4. Fase 4 — criar a base `web` agnóstica
5. Fase 5 — preparar handoff para projeto de tema WordPress
6. Fase 6 — registrar consumers externos futuros
7. Fase 7 — validar propagação em consumers reais

## Decisões já tomadas sobre WordPress e Elementor

- [x] WordPress não será implementado neste repositório
- [x] Elementor não será implementado neste repositório
- [x] o tema WordPress real deve viver em outro projeto
- [x] `theme.json` deve ser consumidor dos tokens, não fonte paralela
- [x] o design system não deve ficar dependente de WordPress ou Elementor para existir

## Critérios de sucesso

Consideraremos este ciclo bem-sucedido quando:

- [ ] o design system puder ser instalado ou consumido como biblioteca
- [ ] um consumer React usar os pacotes sem depender de arquivos internos do repo
- [ ] um site HTML/CSS/JS tradicional puder consumir a camada `web`
- [ ] um projeto externo de tema WordPress puder usar os mesmos tokens e CSS compartilhados
- [ ] Elementor, no projeto externo do tema, puder compor páginas usando essa mesma base visual
- [ ] uma mudança no design system puder ser publicada em nova versão e adotada por consumidores de forma previsível

## Documento de referência complementar

Este plano substitui o plano anterior como documento ativo de execução.

O documento anterior cumpriu seu papel na fase de consolidação da base de reutilização.  
O [ROADMAP-REUTILIZACAO.md](/Users/rafaelcarvalho/Development/quest_edu/eumilitar-design-system/ROADMAP-REUTILIZACAO.md) pode continuar como registro de diagnóstico e contexto histórico.
