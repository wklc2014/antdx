/**
 * image loader
 */
var path = require('path');

function getLoaderForImg(env) {

  var loader = [
    {
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        limit: 1024 * 10,
        outputPath: 'images',
      },
    },
  ]

  if (env === 'production') {
    loader.push('image-webpack-loader');
  }

  return loader;
}

module.exports = getLoaderForImg;
