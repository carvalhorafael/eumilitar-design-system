# EuMilitar Design System — Plano de Trabalho Atual

## Status geral

**Foco atual**: transformar o design system em uma biblioteca distribuível e versionada  
**Objetivo de médio prazo**: permitir consumo consistente em múltiplos sistemas, incluindo app React/Next, site institucional e tema WordPress  
**Objetivo de longo prazo**: ter uma base compartilhada de tokens, CSS, componentes e blocos que possa evoluir com versionamento previsível e atualização controlada

## Decisão arquitetural

O design system **não** será tratado como um conjunto de componentes React tentando rodar em qualquer plataforma.

Ele será tratado como uma arquitetura em camadas:

1. `tokens` como fonte única de verdade
2. `css` compartilhado e agnóstico de framework
3. `ui` como adapter React
4. `patterns` como contratos e markup de blocos
5. `wordpress` como adapter de tema e editor
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
- [x] WordPress será tratado como **consumidor de biblioteca**, não como exceção improvisada
- [x] Elementor será tratado como **consumer layer**, não como fonte da verdade do design system

## Arquitetura alvo do monorepo

### Camadas centrais

#### `packages/tokens`

Responsabilidade:
- source of truth de cores, tipografia, espaçamento, bordas, sombras e estados

Artefatos esperados:
- CSS variables
- JSON exportável
- mapeamento para `theme.json` do WordPress

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
- base para WordPress e Elementor

### Camadas por plataforma

#### `apps/docs`

Responsabilidade:
- vitrine oficial
- ambiente de smoke visual/manual
- documentação dos contratos

#### `packages/wordpress`

Responsabilidade:
- adapter para consumo do design system em WordPress

Conteúdo esperado:
- `theme.json` derivado dos tokens
- enqueue do CSS compartilhado
- templates / template parts / patterns de tema
- utilitários mínimos para integrar classes `ds-*` no tema

#### Elementor

Elementor entra como consumidor do adapter WordPress, não como camada central.

Direção recomendada:
- o tema carrega tokens e CSS globais
- o tema expõe classes e blocos compatíveis com o design system
- o Elementor usa isso via:
  - Style Kit alinhado aos tokens
  - templates/seções prontos
  - eventualmente widgets próprios, se necessário

Regra importante:
- **não duplicar o design system inteiro dentro do Elementor**
- o Elementor deve usar a base já publicada pelo design system

## Fases do trabalho

### Fase 1 — Definir a biblioteca distribuível

Objetivo:
transformar o estado atual em uma arquitetura de biblioteca clara

Entregas:
- [ ] decidir se a camada CSS compartilhada viverá em `packages/css`
- [ ] ajustar `@eumilitar/ui` para depender explicitamente da camada CSS compartilhada
- [ ] definir quais artefatos cada pacote exporta
- [ ] documentar a arquitetura alvo no repositório
- [ ] definir a política de versionamento dos pacotes

### Fase 2 — Artefatos de distribuição

Objetivo:
fazer os pacotes gerarem saídas consumíveis por outros sistemas

Entregas:
- [ ] criar exports claros para `@eumilitar/tokens`
- [ ] criar build/export da camada CSS compartilhada
- [ ] revisar `package.json` dos pacotes para consumo externo
- [ ] garantir que o `docs` consuma esses artefatos como consumidor real
- [ ] validar o fluxo de import em um consumer mínimo fora do app `docs`

### Fase 3 — Base de release e versionamento

Objetivo:
tirar o design system do modo “código local” e colocá-lo no modo “biblioteca versionada”

Entregas:
- [ ] escolher estratégia de release, preferencialmente `changesets`
- [ ] configurar versionamento semântico
- [ ] definir changelog por pacote
- [ ] preparar CI para validar build/lint/test antes de release
- [ ] documentar como um consumer atualiza de versão

### Fase 4 — Adapter WordPress

Objetivo:
permitir consumo consistente do design system em tema WordPress

Entregas:
- [ ] criar `packages/wordpress`
- [ ] gerar base de `theme.json` a partir dos tokens relevantes
- [ ] definir enqueue de CSS do design system no tema
- [ ] criar estrutura mínima de tema compatível com a biblioteca
- [ ] mapear os blocos prioritários para template parts / padrões de tema

### Fase 5 — Integração com Elementor

Objetivo:
fazer Elementor usar o design system sem virar uma segunda fonte de verdade

Entregas:
- [ ] definir quais tokens precisam aparecer no Style Kit do Elementor
- [ ] definir estratégia para classes `ds-*` em seções e widgets
- [ ] preparar templates de página e seções reutilizáveis
- [ ] decidir se haverá widgets customizados ou apenas templates e classes
- [ ] documentar o fluxo de uso de Elementor com a biblioteca

### Fase 6 — Consumer real de validação

Objetivo:
provar que a biblioteca funciona fora do app `docs`

Entregas:
- [ ] criar um consumer real mínimo da biblioteca
- [ ] validar update de versão em um consumer
- [ ] validar que mudanças de tokens e CSS propagam de forma previsível
- [ ] documentar limitações e pontos de atenção de compatibilidade

## Ordem recomendada de execução

1. Fase 1 — definir arquitetura final da biblioteca
2. Fase 2 — gerar artefatos de distribuição
3. Fase 3 — preparar versionamento e release
4. Fase 4 — criar adapter WordPress
5. Fase 5 — integrar com Elementor
6. Fase 6 — validar em consumer real

## Decisões já tomadas para WordPress e Elementor

- [x] WordPress será tratado como plataforma alvo real, não como adaptação tardia
- [x] `theme.json` deve ser consumidor dos tokens, não fonte paralela
- [x] `block.json` e padrões de bloco são relevantes para o futuro adapter WordPress
- [x] Elementor será uma camada de composição por cima da biblioteca
- [x] O design system não deve ficar dependente de Elementor para existir

## Critérios de sucesso

Consideraremos este ciclo bem-sucedido quando:

- [ ] o design system puder ser instalado ou consumido como biblioteca
- [ ] um consumer React usar os pacotes sem depender de arquivos internos do repo
- [ ] um tema WordPress puder usar os mesmos tokens e CSS compartilhados
- [ ] Elementor puder compor páginas usando essa mesma base visual
- [ ] uma mudança no design system puder ser publicada em nova versão e adotada por consumidores de forma previsível

## Documento de referência complementar

Este plano substitui o plano anterior como documento ativo de execução.

O documento anterior cumpriu seu papel na fase de consolidação da base de reutilização.  
O [ROADMAP-REUTILIZACAO.md](/Users/rafaelcarvalho/Development/quest_edu/eumilitar-design-system/ROADMAP-REUTILIZACAO.md) pode continuar como registro de diagnóstico e contexto histórico.
