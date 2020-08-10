const path = require('path')
const merge = require('webpack-merge')

const common = require('./webpack.conf.common')

const env = process.env.NODE_ENV

// 区分微信环境和web环境
const commonjs = env === 'wxapp' ? 'spritejs/spritejs.min.js' : 'spritejs/dist/spritejs.min.js'

module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: path.join(__dirname, '../src/index.js')
  },
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
    library: 'qcharts',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  externals: {
    spritejs: {
      root: 'spritejs',
      commonjs2: commonjs,
      commonjs: commonjs,
      amd: 'spritejs',
      umd: 'spritejs'
    }
  }
})
