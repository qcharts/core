module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    //设置"script"（默认）或"module"如果你的代码是在ECMAScript中的模块。
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {},
  // add your custom rules here
  rules: {
    'newline-per-chained-call': 'off',
    camelcase: 'off'
  }
}
