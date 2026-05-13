# @carvalhorafael/eumilitar-ui — Limites e anti-padrões

## Objetivo

Registrar o que cada componente faz bem, onde ele deixa de ser a escolha correta e os usos que tendem a degradar portabilidade, consistência visual ou acessibilidade.

## Button

- Use para ações, submissões e navegação com cara de CTA.
- Não use `Button` para representar estado selecionado permanente; prefira `Radio`, `Checkbox` ou `Tabs`.
- Não use mais de um `primary` no mesmo agrupamento de CTA.
- Evite texto longo que force quebra em duas linhas em contextos compactos.

## Badge

- Use para classificação curta, força militar, status e urgência pontual.
- Não use badge como CTA clicável principal.
- Não use para parágrafos, microcopy longa ou explicação de regra.
- Evite empilhar muitas badges sem wrap ou hierarquia visual clara.

## Card

- Use quando a informação precisar de agrupamento com borda, sombra e hierarquia própria.
- Não use card apenas como espaçador genérico entre blocos.
- Não aninhe muitos cards dentro de cards sem necessidade editorial real.
- Evite misturar múltiplos níveis de sombra na mesma grade sem justificativa.

## Alert

- Use para mensagens de estado, urgência, erro, sucesso e atenção contextual.
- Não use `Alert` como substituto de `Hero` ou bloco de marketing.
- Não mantenha alertas urgentes permanentes em páginas inteiras sem evento real.
- Evite conteúdo excessivamente longo dentro do alert; se passar de um resumo curto, mova para a página.

## Accordion

- Use para FAQ, conteúdo secundário e detalhes progressivos.
- Não esconda conteúdo crítico de conversão exclusivamente dentro de accordion.
- Não use accordion para formulários complexos ou fluxos multi-step.
- Evite abrir muitos itens por padrão em contexto de leitura rápida.

## Input e Textarea

- Use `Input` para dados curtos e `Textarea` para resposta aberta.
- Não use placeholder como substituto de label.
- Não remova helper text quando o campo precisar de contexto ou formato esperado.
- Evite colocar muitos campos lado a lado em larguras pequenas.

## Select

- Use para lista fechada de opções já conhecidas.
- Não use select para duas ou três opções quando `Radio` comunica melhor.
- Não use select para ações; ele representa escolha, não submissão.
- Evite labels vagas como "Escolha uma opção" quando o contexto exigir precisão.

## Checkbox

- Use para múltipla escolha ou consentimento explícito.
- Não use checkbox para escolha mutuamente exclusiva.
- Não pré-marque consentimento de comunicação sem base legal ou sem clareza visual.
- Evite listas longas de checkbox sem agrupamento por `fieldset` e `legend`.

## Radio

- Use para escolha única entre opções concorrentes.
- Não use radio para estados booleanos simples quando um checkbox resolve.
- Não esconda diferenças importantes entre opções em labels muito curtas.
- Evite radios sem valor padrão quando a tela exige decisão imediata e comparável.

## Table

- Use para dados tabulares com relação clara entre colunas.
- Não use tabela para layout visual de landing page.
- Não compacte demais uma tabela em mobile sem estratégia de overflow ou reflow.
- Evite colunas decorativas que não agregam leitura comparativa.

## Limite geral do pacote

- O pacote `@carvalhorafael/eumilitar-ui` cobre primitives e não substitui blocos editoriais completos.
- Quando a necessidade já é de composição de landing page, prefira começar por `@carvalhorafael/eumilitar-patterns`.
- Se um caso exigir comportamento muito específico de produto, é melhor compor por cima do pacote do que deformar a API base para um caso isolado.
