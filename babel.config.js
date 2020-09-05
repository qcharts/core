// babel编译配置，导出es module

module.exports = function(api) {
  const env = api.env()

  const getPragma = () => (env === 'wxapp' ? 'getApp().qcharts.h' : 'qcharts.h')

  const setting = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: env !== 'compile',// babel编译的时候保留 es module方式
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not ie <= 8']
          }
        }
      ]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties', // jsx 中需要，删除报错
      '@babel/plugin-proposal-object-rest-spread',
      [
        '@babel/plugin-transform-react-jsx',
        {
          pragma: getPragma()
        }
      ],
      'inline-package-json',
      ['@babel/plugin-transform-runtime']
    ]
  }

  return setting
}
