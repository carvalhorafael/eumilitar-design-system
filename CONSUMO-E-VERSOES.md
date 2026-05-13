# Consumo e Atualização de Versões

Este repositório está sendo preparado para funcionar como biblioteca versionada do design system da EuMilitar.

## Pacotes principais

- `@carvalhorafael/eumilitar-tokens`: valores visuais compartilhados
- `@carvalhorafael/eumilitar-css`: camada CSS compartilhada e agnóstica de framework
- `@carvalhorafael/eumilitar-web`: renderização HTML e comportamento mínimo para sites não React
- `@carvalhorafael/eumilitar-ui`: adapter React
- `@carvalhorafael/eumilitar-patterns`: contratos e referências de blocos

## Como um consumer deve depender da biblioteca

Em um app React/Next:

1. adicionar dependência da versão desejada dos pacotes
2. importar `@carvalhorafael/eumilitar-tokens` e `@carvalhorafael/eumilitar-css` no CSS global
3. importar `@carvalhorafael/eumilitar-ui` e `@carvalhorafael/eumilitar-patterns` apenas pelos entrypoints públicos
4. evitar copiar arquivos internos do monorepo

Em um consumer não React:

1. importar `@carvalhorafael/eumilitar-tokens` e `@carvalhorafael/eumilitar-css`
2. consumir `@carvalhorafael/eumilitar-web` para markup canônico e JS progressivo
3. usar `@carvalhorafael/eumilitar-tokens/json` quando precisar dos valores em scripts ou toolchains
4. tratar `packages/web/CONTRACT.md` como referência de API pública do consumer web

Exemplo conceitual:

```json
{
  "dependencies": {
    "@carvalhorafael/eumilitar-tokens": "^0.1.0",
    "@carvalhorafael/eumilitar-css": "^0.1.0",
    "@carvalhorafael/eumilitar-ui": "^0.1.0",
    "@carvalhorafael/eumilitar-patterns": "^0.1.0"
  }
}
```

```css
@import "@carvalhorafael/eumilitar-tokens";
@import "@carvalhorafael/eumilitar-css";
```

Exemplo conceitual de uso de tokens em JSON:

```js
import tokens from "@carvalhorafael/eumilitar-tokens/json";

console.log(tokens.domains.colors.accent);
```

## Como atualizar de versão

Fluxo recomendado para consumidores:

1. atualizar a faixa de versão do pacote desejado
2. rodar install
3. revisar changelog e changesets aplicados
4. validar visualmente os fluxos mais sensíveis
5. publicar o consumer apenas depois de lint, test e build locais

No monorepo atual, a propagação base pode ser revalidada com:

```bash
npm run validate:propagation
```

## Leitura de semver

- `patch`: correções sem quebra esperada de API
- `minor`: novos componentes, variantes ou exports compatíveis
- `major`: quebra de contrato visual, estrutural ou de API

## Regra prática

Mudanças em tokens, CSS compartilhado ou markup esperado de blocos devem ser tratadas com mais cuidado, porque impactam consumidores React, HTML puro e futuro adapter WordPress ao mesmo tempo.
