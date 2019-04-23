/**
 * 项目配置路径
 */
const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, '../src/entries/index.js'),
  },
  build: {
    app: path.join(__dirname, '../src/components/index.js'),
  },
  htmlWebpackPlugin: [
    {
      template: path.join(__dirname, '../src/entries/index.html'),
    }
  ],
  copyWebpackPlugin: [

  ],
  cleanWebpackPlugin: {
    cleanOnceBeforeBuildPatterns: [
      path.join(__dirname, '../dist/**/*'),
    ]
  },
  webpackProvidePlugin: {},
  miniCssExtractPlugin: {
    filename: 'app.min.css',
  },
  uglifyJSPlugin: {
    sourceMap: true,
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'app.min.js',
  },
  performance: {
    hints: false,
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist/'),
    port: 4001,
  },
  filePath: {
    src: path.join(__dirname, '../src/'),
    node_modules: path.join(__dirname, '../node_modules/'),
  },
}
