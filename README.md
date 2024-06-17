# Martin's ESLint config

## Installation

To install the configs:

`npm i -D @martindoyle/eslint-config`

## Usage

Extend your eslint (flat) config using this:

```js
// eslint.config.js
import config from '@martindoyle/eslint-config';

export default [
  ...config,
];
```
