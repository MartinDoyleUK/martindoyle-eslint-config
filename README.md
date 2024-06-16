# Martin's ESLint config

## Installation

To install the configs:

`npm i -D @martindoyle/eslint-config`

## Usage

Extend your eslint config using this

```json
// tsconfig.json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@martindoyle/tsconfig/node",
  "compilerOptions": {
    "outDir": "dist",
  },
}
```
