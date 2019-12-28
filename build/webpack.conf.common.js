const os = require('os')
const path = require('path')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const VueMdLoader = require('./vue-md-loader')

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
        include: [path.resolve(__dirname, '../website/'), path.resolve(__dirname, '../src/')],
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
            loader: 'vue-md-loader'
          },
          VueMdLoader
        ],
        include: path.resolve(__dirname, '../website'),
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    spritejs: 'spritejs',
    vue: 'Vue',
    'vue-router': 'VueRouter'
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
