module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  rules: {
    'jsx-a11y/accessible-emoji': 'off',
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@static', './static'],
        ['@components', './src/components'],
        ['@helpers', './src/helpers'],
        ['@pages', './src/pages'],
        ['@', './src'],
      ],
    },
  },
};
