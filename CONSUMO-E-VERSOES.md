# Consumo e Atualização de Versões

Este repositório está sendo preparado para funcionar como biblioteca versionada do design system da EuMilitar.

## Pacotes principais

- `@eumilitar/tokens`: valores visuais compartilhados
- `@eumilitar/css`: camada CSS compartilhada e agnóstica de framework
- `@eumilitar/ui`: adapter React
- `@eumilitar/patterns`: contratos e referências de blocos

## Como um consumer deve depender da biblioteca

Em um app React/Next:

1. adicionar dependência da versão desejada dos pacotes
2. importar `@eumilitar/tokens` e `@eumilitar/css` no CSS global
3. importar `@eumilitar/ui` e `@eumilitar/patterns` apenas pelos entrypoints públicos
4. evitar copiar arquivos internos do monorepo

Exemplo conceitual:

```json
{
  "dependencies": {
    "@eumilitar/tokens": "^0.1.0",
    "@eumilitar/css": "^0.1.0",
    "@eumilitar/ui": "^0.1.0",
    "@eumilitar/patterns": "^0.1.0"
  }
}
```

```css
@import "@eumilitar/tokens";
@import "@eumilitar/css";
```

## Como atualizar de versão

Fluxo recomendado para consumidores:

1. atualizar a faixa de versão do pacote desejado
2. rodar install
3. revisar changelog e changesets aplicados
4. validar visualmente os fluxos mais sensíveis
5. publicar o consumer apenas depois de lint, test e build locais

## Leitura de semver

- `patch`: correções sem quebra esperada de API
- `minor`: novos componentes, variantes ou exports compatíveis
- `major`: quebra de contrato visual, estrutural ou de API

## Regra prática

Mudanças em tokens, CSS compartilhado ou markup esperado de blocos devem ser tratadas com mais cuidado, porque impactam consumidores React, HTML puro e futuro adapter WordPress ao mesmo tempo.
