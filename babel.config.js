// babel编译配置，导出es module
module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [
    '@babel/plugin-proposal-class-properties', // jsx 中需要，删除报错
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'qcharts.h'
      }
    ],
    'inline-package-json',
    [
      '@babel/plugin-transform-runtime'
    ]
  ]
}
