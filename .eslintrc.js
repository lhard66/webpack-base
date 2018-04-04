module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 6,
    sourceType: 'module',
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: ['eslint:recommended'],
  // eslint-plugin-vue
  plugins: ['vue'],
  rules: {
    'semi': 0,
  }
}
