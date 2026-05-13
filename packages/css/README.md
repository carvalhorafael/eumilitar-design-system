# @eumilitar/css

Camada CSS compartilhada e agnóstica de framework do design system da EuMilitar.

## Objetivo

Servir como artefato principal de estilos reutilizáveis para consumidores que não dependem de React, incluindo:

- sites estáticos;
- outros apps frontend;
- tema WordPress;
- páginas montadas com Elementor por cima do tema.

## Escopo atual

- `ui.css`: primitives compartilhadas (`.ds-button`, `.ds-input`, `.ds-card`, etc.)
- `patterns.css`: reservado para a camada de blocos reutilizáveis
- `index.css`: ponto de entrada agregado

## Direção arquitetural

- `@eumilitar/tokens` continua sendo a fonte de verdade dos tokens
- `@eumilitar/css` passa a ser a fonte de verdade dos estilos compartilhados
- `@eumilitar/ui` funciona como adapter React por cima dessa base
