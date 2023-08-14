module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended', 'plugin:react/recommended', 'plugin:tailwindcss/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@emotion', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': ['warn', {allowConstantExport: true}],
    '@typescript-eslint/no-misused-promises': [2, {checksVoidReturn: {attributes: false}}],
    '@typescript-eslint/no-explicit-any': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {'extensions': ['.js', '.jsx', '.ts', '.tsx']}],
    '@emotion/pkg-renaming': 'error',
    'react/no-unknown-property': ['error', {'ignore': ['css']}],
  },
};
