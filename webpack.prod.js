const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(less$|css)/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              minimize: true,
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]--[local]--[hash:base64]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          },
          'less-loader'
        ]
      },
      // 单独给 antd 样式处理
      {
        test: /\.(less|css)$/,
        include: path.resolve(__dirname, 'node_modules'),
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: {
          comments: false,
       },
      }
    })
  ]
});