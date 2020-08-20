// babel编译配置，导出es module

module.exports = function(api) {
  const env = api.env()

  const getPragma = () => (env === 'wxapp' ? 'getApp().qcharts.h' : 'qcharts.h')

  const setting = {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not ie <= 9']
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
