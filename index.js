const base = require('./lib/base.js');
const react = require('./lib/react.js');

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'simple-import-sort',
    'import',
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'tailwindcss',
  ],
  rules: {
    ...base,
    ...react,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
};
