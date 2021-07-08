module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'guard-for-in': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    __temporary: 'off',
    'arrow-parens': ['error', 'as-needed'],
    camelcase: 'off',
    curly: 'error',
    eqeqeq: 'error',
    'max-len': ['error', {code: 120, tabWidth: 2}],
    'no-constant-condition': 'off',
    'no-fallthrough': ['error', {commentPattern: 'FALLTHRU'}],
    'no-implicit-coercion': 'off',
    'no-irregular-whitespace': ['error', {skipComments: true}],
    'no-multi-spaces': ['error', {ignoreEOLComments: true}],
    'operator-linebreak': ['error', 'before'],
    quotes: ['error', 'single', {
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    radix: ['error', 'as-needed'],
    'require-jsdoc': 'off',
    'spaced-comment': ['error', 'always', {line: {markers: ['#']}}],
    'valid-jsdoc': 'off',
    yoda: ['error', 'always', {exceptRange: true}]
  },
  parserOptions: {
    project: './tsconfig.json',
  }
};
