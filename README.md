# Martin's TSConfig

## Installation

To install the configs:

`npm i -D @martindoyle/tsconfig`

## Usage

Extend one of the available configs, either `node` or `web`, for example:

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@martindoyle/tsconfig/node",
  "compilerOptions": {
    "outDir": "dist",
  },
}
```
