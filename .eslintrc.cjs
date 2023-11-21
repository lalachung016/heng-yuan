module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        usePrettierrc: false,
        endOfLine: 'lf',
        singleQuote: true,
        semi: false,
        htmlWhitespaceSensitivity: 'ignore',
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true },
    ],
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@typescript-eslint/no-namespace': 'off',
  },
}
