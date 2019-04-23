/**
 * 配置 webpack 插件系统
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const allPaths = require('../allPaths.js');

function getPlugins(env) {
  // 插件
  const plugins = [
    new CopyWebpackPlugin(allPaths.copyWebpackPlugin),
    new CleanWebpackPlugin(allPaths.cleanWebpackPlugin),
    new webpack.ProvidePlugin(allPaths.webpackProvidePlugin),
  ];

  allPaths.htmlWebpackPlugin.forEach(p => {
    plugins.push(new HtmlWebpackPlugin(p));
  })

  const pluginsForProd = [
    new MiniCssExtractPlugin(allPaths.miniCssExtractPlugin),
    new UglifyJSPlugin(allPaths.uglifyJSPlugin),
  ];

  const pluginsForDev = [
    new webpack.HotModuleReplacementPlugin(),
  ];

  if (env === 'production') {
    return plugins.concat(pluginsForProd);
  } else if (env === 'development') {
    return plugins.concat(pluginsForDev);
  }

  return [];
}

module.exports = getPlugins;
