module.exports = {
  'react/function-component-definition': 'off',
  'react/jsx-filename-extension': [
    'warn',
    {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  ],
  'react/jsx-props-no-spreading': 'off',
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': [
    'error',
    {
      forbidDefaultForRequired: true,
      functions: 'defaultArguments',
    },
  ],
};
