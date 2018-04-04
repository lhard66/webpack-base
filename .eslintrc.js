module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    // es6: true,
    // commonJS: true,
  },
  extends: [
    'plugin:vue/essential',
    // eslint-config-standard
    'standard',
  ],
  // eslint-plugin-vue
  plugins: ['vue'],
  rules: {
    'semi': 0,
  }
}
