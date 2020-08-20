module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    'jsx-a11y/accessible-emoji': 'off',
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    'import/no-unresolved': [2, { caseSensitive: false }],
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@static', './static'],
        ['@assets', './src/assets'],
        ['@components', './src/components'],
        ['@helpers', './src/helpers'],
        ['@pages', './src/pages'],
        ['@hooks', './src/hooks'],
        ['@', './src'],
      ],
    },
  },
};
