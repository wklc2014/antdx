const path = require('path');
const getLoaderForJs = require('./webpack/getLoaderForJs.js');
const getLoaderForLess = require('./webpack/getLoaderForLess.js');
const getLoaderForImg = require('./webpack/getLoaderForImg.js');
const getLoaderForHtml = require('./webpack/getLoaderForHtml.js');
const getPlugins = require('./webpack/getPlugins.js');
const devServer = require('./webpack/devServer.js');
const allPaths = require('./allPaths.js');

module.exports = function() {
  const env = process.env.NODE_ENV;

  const mode = env === 'production' ? 'production' : 'development';
  const devtool = env === 'production' ? 'none' : 'cheap-eval-source-map';

  // 入口文件
  const entry = env === 'development' ? allPaths.entry : allPaths.build;

  // 输出文件
  const output = allPaths.output;

  // 性能
  const performance = allPaths.performance;

  const configs = {
    entry,
    output,
    performance,
    plugins: getPlugins(env),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: allPaths.filePath.src,
          use: getLoaderForJs(env),
        },
        {
          test: /\.less$/,
          include: allPaths.filePath.src,
          use: getLoaderForLess(env),
        },
        {
          test: /\.less$/,
          include: allPaths.filePath.node_modules,
          use: getLoaderForLess(env, 'node_modules'),
        },
        {
          test: /\.(png|jpg|gif)$/,
          include: allPaths.filePath.src,
          use: getLoaderForImg(env),
        },
        {
          test: /\.html$/,
          include: allPaths.filePath.src,
          use: getLoaderForHtml(env),
        },
      ],
    },
  };

  if (env === 'development') {
    configs.devServer = devServer;
  }

  return configs;
}
