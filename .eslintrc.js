module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'react/prop-types': 0
  }
}
