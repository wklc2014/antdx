/**
 * less loader
 */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LessPluginAutoPrefix = require('less-plugin-autoprefix');
const LessPluginCleanCss = require('less-plugin-clean-css');

function getLoaderForLess(env, type) {

  const loader = [
    {
      loader: 'css-loader',
      options: {
        camelCase: true,
        modules: true,
      },
    },
    {
      loader: 'less-loader',
      options: {
        plugins: [],
        javascriptEnabled: true,
      }
    },
  ]

  if (type === 'node_modules') {
    loader[0].options = Object.assign({}, {
      camelCase: false,
      modules: false,
    });
    loader[1].options.modifyVars = {
      'primary-color': '#12ba05',
      'font-size-base': '12px',
    }
  }

  if (env === 'production') {
    const lessLoaderPlugins = [
      new LessPluginAutoPrefix({ browsers: ["last 2 versions", ">0.1%"] }),
      new LessPluginCleanCss(),
    ];
    loader[1].options.plugins = [].concat(lessLoaderPlugins);
    loader.unshift(MiniCssExtractPlugin.loader);
  } else if (env === 'development') {
    loader.unshift('style-loader');
  }

  return loader;
}

module.exports = getLoaderForLess;
