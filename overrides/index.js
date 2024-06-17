// import json from './json.js';
import { overrides as misc } from './misc.js';
import { overrides as packageJson } from './package-json.js';
import { overrides as prettier } from './prettier.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export const overrides = [packageJson, prettier, misc];
