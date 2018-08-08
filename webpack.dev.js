const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 12000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              camelCase: true,
              modules: true,
              importLoaders: 1,
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
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
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
    new HtmlWebpackPlugin({
      title: 'hform',
      template: path.resolve(__dirname, 'src/entries/index.html'),
      favicon: path.resolve(__dirname, 'src/entries/favicon.ico'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
});
