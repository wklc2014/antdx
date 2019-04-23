/**
 * html loader
 */
const path = require('path');

function getLoaderForHtml(env) {

  const loader = [
    {
      loader: 'html-loader',
      options: {},
    }
  ]

  if (env === 'production') {
    loader[0].options = Object.assign({}, {
      minimize: true,
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true,
      minifyJS: true,
      minifyCSS: true
    });
  } else if (env === 'development') {
    loader[0].options = Object.assign({}, {
      minimize: false
    });
  }

  return loader;
}

module.exports = getLoaderForHtml;
