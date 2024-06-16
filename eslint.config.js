import overrides from './overrides/index.js';
import canonicalAuto from 'eslint-config-canonical/configurations/auto.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  ...canonicalAuto,
  {
    ignores: ['/node_modules/', 'pnpm-lock.yaml'],
  },
  ...overrides,
];
