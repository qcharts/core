const path = require('path')
const merge = require('webpack-merge')

const common = require('./webpack.conf.common')

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
      commonjs2: 'spritejs/dist/spritejs.min.js',
      commonjs: 'spritejs/dist/spritejs.min.js',
      amd: 'spritejs',
      umd: 'spritejs'
    }
  }
})
