const os = require('os')
const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const VueMdLoader = require('./vue-md-loader')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        include: [path.resolve(__dirname, '../website/'), path.resolve(__dirname, '../src/'), path.resolve('node_modules/@qcharts/')],
        exclude: [/node_modules/]
      },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ],
        include: path.resolve(__dirname, '../website'),
        exclude: /node_modules/
      },

      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          VueMdLoader
        ],
        include: path.resolve(__dirname, '../website'),
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  externals: {
    spritejs: 'spritejs',
    vue: 'Vue',
    'vue-router': 'VueRouter'
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          mangle: {
            // mangle options
            keep_classnames: true,
            keep_fnames: true
          }
        }
      })
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new ProgressBarPlugin({
      format: 'build [:bar] :percent (:elapsed seconds)',
      clear: false,
      width: 60
    })
  ]
}
