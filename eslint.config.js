import canonicalAuto from 'eslint-config-canonical/configurations/auto.js';

import { overrides } from './overrides/index.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
// eslint-disable-next-line import/no-default-export
export default [
  ...canonicalAuto,
  {
    ignores: ['/node_modules/', 'pnpm-lock.yaml'],
  },
  ...overrides,
];
