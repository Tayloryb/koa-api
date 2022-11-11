const path = require('path')
const webpack = require('webpack')
const utils = require('./utils')
const nodeExcternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
  target: 'node',
  entry: {
    server: path.join(utils.APP_PATH, 'server.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: utils.DIST_PATH
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, './node_modules')]
      }
    ]
  },
  externals: [nodeExcternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(`${(process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'prod') ? 'production' : 'development'}`)
    })
  ]
}


module.exports = webpackConfig