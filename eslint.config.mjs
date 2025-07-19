import js from '@eslint/js';

export default [
  {
    ...js.configs.recommended,
    rules: {
      ...js.configs.recommended.rules, // պահպանել նախորդ կանոնները
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2, { SwitchCase: 1 }],
      'brace-style': ['error', '1tbs'],
      'comma-dangle': ['error', 'only-multiline'],
      'no-trailing-spaces': 'error',
      'no-multi-spaces': 'error',
      'space-before-function-paren': ['error', 'never'],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
];
