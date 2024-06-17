import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintPluginImport from 'eslint-plugin-import';

import { ERROR, OFF, WARN } from './constants.js';

/** @type {import('eslint').Linter.FlatConfig} */
export const overrides = {
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    parser: typescriptEslintParser,
    parserOptions: {
      project: true,
    },
  },
  plugins: {
    '@typescript-eslint': typescriptEslintPlugin,
  },
  rules: {
    // Always use T[] instead of Array<T>
    '@typescript-eslint/array-type': [ERROR, { default: 'array' }],

    // Prefer interfaces over type aliases
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],

    // Extend canonical to allow unused variable names
    '@typescript-eslint/naming-convention': [
      2,
      {
        format: ['camelCase'],
        leadingUnderscore: 'allow',
        selector: 'default',
        trailingUnderscore: 'forbid',
      },
      {
        format: ['camelCase', 'PascalCase'],
        selector: 'import',
      },
      {
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allow',
        selector: ['variableLike'],
      },
      {
        format: ['camelCase'],
        selector: ['method', 'memberLike'],
      },
      {
        format: ['PascalCase'],
        selector: 'typeLike',
      },
    ],

    // Do not alert for unused vars if there's an explicit underscore prefix to ignore them. Also allow vars to be unused if they're removing values from a rest destructuring
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {
        argsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],

    // Disabled as per recommendation at https://typescript-eslint.io/rules/padding-line-between-statements/
    '@typescript-eslint/padding-line-between-statements': OFF,
  },
};
