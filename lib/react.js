module.exports = {
  'react/function-component-definition': 'off',
  'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': 'off',
  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: false, variables: false, classes: false },
  ],
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
};
