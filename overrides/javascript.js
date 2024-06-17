import eslintPluginImport from 'eslint-plugin-import';

import { ERROR, OFF, WARN } from './constants.js';

/** @type {import('eslint').Linter.FlatConfig} */
export const overrides = {
  files: ['**/*.{js,jsx,ts,tsx}'],
  plugins: {
    import: eslintPluginImport,
  },
  rules: {
    // Disable forcing variable names to regex; doesn't allow numbers
    'id-match': OFF,

    // Default exports should not be used unless necessary (https://basarat.gitbook.io/typescript/main-1/defaultisbad)
    'import/no-default-export': ERROR,

    // Strictly control the order and spacing of imports
    'import/order': [
      ERROR,
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        distinctGroup: true,
        groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'always',
        pathGroups: [{ group: 'internal', pattern: '@/**', position: 'after' }],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],

    // This needs to be off when using the  @typescript-eslint/no-unused-vars-rule
    'no-unused-vars': OFF,

    // This needs to be off when using the @typescript-eslint/padding-line-between-statements rule
    'padding-line-between-statements': OFF,

    // These clash with the above import/order rule
    'simple-import-sort/exports': OFF,
    'simple-import-sort/imports': OFF,

    // Disable strict control of error argument name in catch clauses
    'unicorn/catch-error-name': OFF,

    // Array reduce is an efficient construct if written well
    'unicorn/no-array-reduce': OFF,

    // Improve the configuration of numeric separators to only apply to numbers with 5 or more digits
    'unicorn/numeric-separators-style': [ERROR, { number: { groupLength: 3, minimumDigits: 5 } }],

    // Disable strict control of certain argument names
    'unicorn/prevent-abbreviations': OFF,
  },
};
