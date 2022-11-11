const { merge } = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')
const terserPlugin = require('terser-webpack-plugin')

console.log('11111111 :>> ', 11111111);

const webpackConfigProd = merge(baseWebpackConfig, {
  mode: 'production',
  // stats: {
  //   children: false,
  //   warnigs: false,
  // },
  optimization: {
    minimize: true,
    minimizer: [new terserPlugin({
      terserOptions: {
        // warnigs: false, // 不打开警告
        compress: {
          // warnigs: false, 
          // 是否去除注释
          drop_console: false,
          dead_code: true,
          drop_debugger: true
        },
        output: {
          comments: false,
          beautify: false // 一行输出结构
        },
        mangle: true
      },
      parallel: true,
      // sourceMap: false
    })],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        },
      },
    },
  }
})

module.exports = webpackConfigProd