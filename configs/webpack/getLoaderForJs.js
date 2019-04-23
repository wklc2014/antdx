/**
 * js loader
 */
const path = require('path');

function getLoaderForJs(env) {

  const loader = [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      },
    }
  ]

  return loader;
}

module.exports = getLoaderForJs;
