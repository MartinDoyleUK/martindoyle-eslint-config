// import json from './json.js';
import { overrides as javascript } from './javascript.js';
import { overrides as packageJson } from './package-json.js';
import { overrides as prettier } from './prettier.js';
import { overrides as typescript } from './typescript.js';

/** @type {import('eslint').Linter.FlatConfig[]} */
export const overrides = [packageJson, prettier, javascript, typescript];
