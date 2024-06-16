/**
 * @typedef {import('eslint').ESLint.ConfigData} ConfigData
 */

import {overrides} from './overrides/index.ts';
import canonicalAuto from 'eslint-config-canonical/configurations/auto.js';

/** @type {ConfigData[]} */
export default [...canonicalAuto,...overrides];
