module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  ignorePatterns: [
    'node_modules/',
    'coverage/',
    '!.eslintrc.js',
    'testtesttest.js',
  ],
  extends: [
    'eslint:recommended',
    'google',
  ],
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
    '$': 'readonly',
    'browser': 'readonly',
    'driver': 'readonly',
    'expect': 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    'no-console': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': ['error', 'as-needed'],
    'semi-style': ['error', 'last'],
    'operator-linebreak': ['error', 'after',
      { 'overrides': { '?': 'before', ':': 'before' } },
    ],
    'require-jsdoc': 'off',
    'camelcase': 'off',
    'new-cap': 'off',
    'object-curly-spacing': ['error', 'always'],
    'space-before-function-paren': ['error',
      { 'anonymous': 'always', 'named': 'never' },
    ],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'max-len': ['error',
      {
        'ignoreComments': true,
        'ignoreTrailingComments': true,
        'ignoreUrls': true,
        'ignoreStrings': false,
        'ignoreTemplateLiterals': true,
        'ignoreRegExpLiterals': true,
      },
    ],
  },
};