const path = require('path')
const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
// const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const common = require('./webpack.conf.common')

module.exports = merge(common, {
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
  optimization: {
    minimizer: [new TerserPlugin()]
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
