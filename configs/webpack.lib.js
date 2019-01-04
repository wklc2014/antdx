const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

const config = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});

config.plugins = [
  new UglifyJSPlugin({
    sourceMap: true,
    uglifyOptions: {
      output: {
        comments: false,
     },
    }
  }),
  new MiniCssExtractPlugin({
    filename: "antdx.css",
    chunkFilename: "antdx.css",
    outputPath: path.join(__dirname, '../dist/assets/css/')
  })
];

config.entry = path.join(__dirname, '../index.js');
config.output.filename = 'antdx.js';
config.output.path = path.join(__dirname, '../lib/');

module.exports = config;
