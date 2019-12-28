const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.conf.common')
module.exports = merge(common, {
  mode: 'development',
  entry: {
    app: path.resolve(__dirname, '../website/'),
    qcharts: path.resolve(__dirname, '../src/')
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../website/'),
    compress: true,
    hot: true,
    inline: true,
    quiet: true,
    open: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 3000
    }
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   enforce: 'pre',
      //   loader: 'eslint-loader',
      //   options: {
      //     failOnError: true,
      //     quiet: true
      //   },
      //   include: path.resolve(__dirname, '../src'),
      //   exclude: /node_modules/
      // },
      {
        test: /\.(s)?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 3000,
          name: 'static/img/[name].[ext]?[hash]'
        }
      }

      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url-loader',
      //   options: {
      //     limit: 3000,
      //     name: 'static/fonts/[name].[hash].[ext]'
      //   }
      // }
    ]
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.d\.ts$/]),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../website/index.html'),
      filename: 'index.html'
    })
  ]
})
