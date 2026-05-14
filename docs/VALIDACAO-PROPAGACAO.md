# Validação de Propagação entre Consumers

Este documento registra como validamos que a biblioteca base propaga mudanças de forma previsível para os consumers atuais.

## Consumers cobertos

- `apps/docs`
- `apps/consumer-react`
- `apps/consumer-static`

## O que a validação prova

1. `docs` importa `@carvalhorafael/eumilitar-tokens` e `@carvalhorafael/eumilitar-css` diretamente.
2. `consumer-react` importa `@carvalhorafael/eumilitar-tokens` e `@carvalhorafael/eumilitar-css` diretamente.
3. `consumer-static` recebe:
   - markup gerado por `@carvalhorafael/eumilitar-web`
   - estilos vindos de `tokens + css`
   - comportamento progressivo vindo de `@carvalhorafael/eumilitar-web`
4. o export JSON de tokens permanece sincronizado com a fonte CSS.

## Comando

```bash
npm run validate:propagation
```

## Escopo desta validação

Ela não prova versionamento externo ainda.

Ela prova que, dentro do monorepo atual:

- a fonte central de tokens é única;
- a camada CSS compartilhada realmente alimenta múltiplos consumers;
- a camada `web` já serve como ponte real para um consumer não React;
- mudanças nessa base tendem a propagar de forma consistente.

## Próxima lacuna

O passo seguinte será validar atualização de versão em um consumer realmente externo a este repositório.
