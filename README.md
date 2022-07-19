# SEYPH ESLint config

## Whats included?

- Standard config base;
- React plugin;
- React Hooks plugin;
- JSX a11y plugin;
- Prettier;

## Setup

1. Install the dependencies

```
npm i -D eslint @seyph/eslint-config
```

2. Create a `.eslintrc.json` file extending the config:

```
{
  "extends": "@seyph/eslint-config/react"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.

> Based on @rocketseat eslint-config
