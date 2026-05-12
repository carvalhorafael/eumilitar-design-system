# EuMilitar Design System — Diagnóstico e Roadmap de Reutilização

## 1. Leitura do estado atual

O projeto já cumpre bem um papel importante: documentar a linguagem visual da EuMilitar em um site navegável, com fundamentos, componentes e padrões de composição.

Hoje ele é forte em:

- clareza visual da marca;
- velocidade para explorar e validar UI no contexto do site de documentação;
- cobertura inicial de fundamentos, componentes e padrões de landing page;
- consistência de linguagem entre páginas do app `docs`.

Hoje ele ainda não está maduro como design system realmente reutilizável entre múltiplos produtos.

## 2. O que já está maduro

### Linguagem visual

Há uma direção estética clara e coerente:

- neo-brutalismo;
- field manual militar;
- tipografia e hierarquia estáveis;
- tokens semânticos já definidos.

### Cobertura de interface

O projeto já possui uma base útil para marketing e páginas institucionais:

- button;
- badge;
- card;
- input/textarea;
- select;
- checkbox/radio;
- alert;
- accordion;
- table;
- padrões de hero, urgência, captação, FAQ, benefícios, depoimentos e landing.

### Forma de documentação

O site já funciona como referência operacional:

- sidebar com taxonomia clara;
- páginas separadas por fundamentos, componentes e padrões;
- visualização rápida de exemplos;
- contexto suficiente para design e implementação.

## 3. O que ainda está frágil

### Tokens ainda não são a fonte real consumida pelo app

Existe um pacote `@eumilitar/tokens`, mas o app `docs` ainda mantém os tokens diretamente em `apps/docs/app/globals.css`.

Na prática isso significa:

- a portabilidade ainda é parcial;
- há risco de divergência entre o pacote e o app;
- outros consumidores futuros, como WordPress, ainda não têm uma fonte única confiável.

### Componentes ainda estão acoplados ao app de docs

Os componentes vivem em `apps/docs/components/ui`.

Na prática isso significa:

- eles não são um pacote compartilhado;
- a documentação e a implementação estão misturadas no mesmo app;
- reutilizar em outro projeto vai exigir copiar código em vez de instalar ou importar uma camada dedicada.

### Estilo implementado muito via inline style

Boa parte dos componentes usa `style={{ ... }}` diretamente.

Isso é bom para prototipação e velocidade, mas ruim para reuso entre ambientes:

- dificulta portar para WordPress, onde classes utilitárias ou CSS semântico costumam ser mais fáceis de aplicar;
- dificulta sobrescrita, composição e theming;
- dificulta separar estrutura, variante e skin visual.

### Padrões estão documentados, mas não estão formalizados como blocos reutilizáveis

Os padrões já existem como páginas de referência, mas ainda não parecem organizados como:

- blocos composáveis;
- seções parametrizáveis;
- contratos claros de conteúdo;
- variantes prontas para diferentes contextos.

Isso importa muito para WordPress, porque o tema vai precisar reutilizar seções e não apenas componentes atômicos.

### Falta camada de garantia de qualidade de system

Hoje o projeto já builda, mas ainda faltam bases de maturidade como:

- testes visuais ou snapshots;
- testes de acessibilidade;
- contratos de API dos componentes;
- validação sistemática de dark mode;
- documentação de do/don't por componente;
- inventário de estados obrigatórios.

## 4. Prioridades no que já existe

## Prioridade 1 — Unificar a fonte da verdade dos tokens

Objetivo:
fazer `packages/tokens` virar a fonte real consumida pelo app `docs`.

Impacto:

- remove duplicação;
- prepara o terreno para WordPress;
- reduz risco de drift visual;
- permite distribuir os mesmos tokens para múltiplos consumidores.

Entrega mínima:

- mover os tokens de `apps/docs/app/globals.css` para `packages/tokens/*.css`;
- fazer o app `docs` importar `@eumilitar/tokens`;
- deixar `globals.css` com base/reset, tema Tailwind e estilos específicos do app, não com a definição primária dos tokens.

## Prioridade 2 — Separar componentes reutilizáveis do app de documentação

Objetivo:
tirar os componentes base de `apps/docs/components/ui` e colocá-los em um pacote próprio, por exemplo `packages/ui`.

Impacto:

- separa implementação de documentação;
- facilita consumo por outros apps;
- cria um núcleo real de design system.

Entrega mínima:

- criar `packages/ui`;
- mover Button, Badge, Card, Input, Select, Checkbox, Alert, Accordion e Table para lá;
- exportar tudo por um `index.ts`;
- fazer o app `docs` consumir esses componentes a partir do pacote.

## Prioridade 3 — Reduzir dependência de inline style para uma estratégia portável

Objetivo:
padronizar o styling dos componentes em uma forma mais fácil de reutilizar fora do Next.js.

Impacto:

- facilita portar para WordPress;
- melhora manutenção;
- reduz repetição.

Entrega mínima:

- manter tokens em CSS custom properties;
- mover estilo estrutural repetido para classes CSS semânticas ou utilitárias previsíveis;
- deixar inline style apenas para casos realmente dinâmicos.

## Prioridade 4 — Formalizar os padrões como blocos

Objetivo:
tratar Hero, FAQ, Benefícios, Depoimentos, Captação e Landing como blocos de interface reutilizáveis, e não só páginas de exemplo.

Impacto:

- aproxima o design system do uso real em sites;
- acelera muito a futura implementação em WordPress;
- facilita trabalho de agentes e desenvolvedores.

Entrega mínima:

- definir props e slots de conteúdo por padrão;
- identificar variantes por padrão;
- documentar estrutura obrigatória, opcional e exemplos de composição.

## Prioridade 5 — Criar critérios de qualidade de design system

Objetivo:
o sistema deixar de ser apenas “bonito e funcionando” e passar a ser “confiável para reuso”.

Entrega mínima:

- checklist de acessibilidade por componente;
- checklist de estados;
- smoke visual por página;
- validação de dark mode;
- documentação de limites de uso.

## 5. Caminho recomendado para reutilização real

O melhor caminho aqui não é pensar primeiro em “portar componentes React para WordPress”.

O caminho mais sólido é pensar em camadas:

### Camada 1 — Tokens multiplataforma

Essa camada precisa ser totalmente independente de framework.

Ela deve conter:

- cores;
- tipografia;
- espaçamento;
- raios;
- sombras;
- estados;
- tokens de forças militares;
- tokens semânticos de superfície, texto e borda.

Essa camada deve ser consumível por:

- Next.js;
- WordPress;
- HTML estático;
- Figma exportado no futuro;
- qualquer outro produto.

### Camada 2 — Primitivos de UI

Essa camada pode ser React, mas precisa ser organizada como biblioteca real.

Ela deve conter:

- componentes base;
- variantes;
- estados;
- contratos de props;
- comportamento acessível;
- classes previsíveis.

Essa camada serve muito bem para apps React, mas não deve ser o único ativo do sistema.

### Camada 3 — Blocos e padrões de composição

Essa é a camada mais importante para o futuro WordPress.

Ela deve representar seções de página, como:

- hero;
- faixa de urgência;
- grade de benefícios;
- FAQ;
- formulário de captação;
- CTA final;
- depoimentos.

Cada bloco precisa ter:

- anatomia;
- conteúdo esperado;
- variantes;
- regras de espaçamento;
- regras responsivas;
- tokens usados;
- versão HTML de referência.

### Camada 4 — Implementações por plataforma

Aqui entram os consumidores:

- app de docs em Next.js;
- futuro tema WordPress;
- futuras landing pages;
- outros produtos da EuMilitar.

Essas implementações não devem reinventar o design system; elas devem consumir as camadas 1 e 3, e quando fizer sentido também a 2.

## 6. Como acelerar a futura construção do tema WordPress

Se o objetivo é construir um tema WordPress com velocidade, o ativo mais importante não serão os componentes React em si.

O ativo mais importante será uma combinação de:

- tokens CSS consolidados;
- blocos/padrões bem especificados;
- HTML de referência por bloco;
- regras visuais e responsivas claras;
- conteúdo de exemplo realista.

### O que precisa existir para isso ficar ágil

#### 1. Tokens em CSS puro

WordPress consome CSS muito melhor do que componentes React.

Então os tokens precisam estar prontos como:

- arquivo CSS global;
- naming estável;
- sem dependência do app `docs`.

#### 2. Catálogo de blocos em HTML + CSS de referência

Para cada padrão importante, o ideal é ter:

- uma versão React para o app de docs;
- uma versão HTML estática equivalente;
- um contrato de conteúdo.

Exemplo para `Hero`:

- eyebrow;
- headline;
- supporting text;
- CTA primário;
- CTA secundário;
- imagem opcional;
- variante clara/escura/urgência.

Com isso, transformar em template PHP ou bloco Gutenberg fica muito mais rápido.

#### 3. Especificação de conteúdo e CMS mapping

Cada bloco deveria dizer explicitamente:

- quais campos são obrigatórios;
- quais são opcionais;
- quais aceitam rich text;
- quais aceitam lista;
- quais aceitam imagem;
- quais aceitam badge/força/urgência.

Isso é praticamente metade do trabalho para WordPress.

#### 4. Convenções de classes e anatomia

Para WordPress, vale muito ter uma anatomia previsível:

- `.ds-hero`
- `.ds-hero__eyebrow`
- `.ds-hero__title`
- `.ds-hero__body`
- `.ds-hero__actions`

Esse tipo de convenção acelera:

- template PHP;
- blocos customizados;
- override pontual;
- manutenção futura.

#### 5. Biblioteca de blocos prioritários para marketing

Antes de tentar portar todos os componentes, o ideal é priorizar os blocos que realmente vão para o tema:

- hero;
- urgência;
- benefícios;
- FAQ;
- depoimentos;
- CTA;
- formulário de captação;
- seções de prova/força;
- tabelas de planos.

## 7. Roadmap sugerido

## Fase 1 — Consolidar a base

Objetivo:
transformar o que hoje é “docs com componentes” em “docs consumindo um núcleo real”.

Entregas:

- `packages/tokens` virar fonte real;
- criar `packages/ui`;
- remover duplicação entre `globals.css` e tokens;
- garantir build estável;
- documentar API mínima dos componentes.

## Fase 2 — Preparar para portabilidade

Objetivo:
organizar o design system para sobreviver fora do app Next.js.

Entregas:

- diminuir inline styles;
- padronizar classes e anatomia;
- documentar estados, variantes e acessibilidade;
- criar páginas de documentação com “anatomia”, “props”, “tokens usados” e “do/don't”.

## Fase 3 — Formalizar blocos

Objetivo:
modelar os padrões como seções reutilizáveis de site.

Entregas:

- pacote ou pasta de `patterns`;
- contrato por bloco;
- HTML de referência por bloco;
- variantes responsivas;
- exemplos de composição completos.

## Fase 4 — Preparar o caminho WordPress

Objetivo:
fazer o design system já nascer com tradução natural para tema.

Entregas:

- CSS global exportável para WordPress;
- catálogo dos blocos prioritários;
- mapping de campos CMS por bloco;
- protótipo de 1 landing page em HTML/CSS sem dependência de React;
- definição de estratégia: tema clássico, block theme ou blocos customizados.

## 8. Recomendação objetiva

Se eu tivesse que escolher a sequência mais eficiente para o seu objetivo final, eu faria nesta ordem:

1. tornar `packages/tokens` a fonte única real;
2. extrair `packages/ui`;
3. documentar os padrões como blocos e não só como páginas;
4. criar versões HTML de referência dos blocos principais;
5. só então iniciar a implementação do tema WordPress.

Isso evita um erro comum:
construir primeiro o tema e descobrir depois que o design system ainda estava acoplado demais ao app React.

## 9. Definição prática do alvo

O alvo não deve ser apenas:

"ter componentes bonitos no app de docs".

O alvo deve ser:

"ter tokens, primitives e blocos que possam ser consumidos por múltiplas plataformas, incluindo WordPress, sem retrabalho estrutural".
