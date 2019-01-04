const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = ({ options, env }) => {
  return {
    plugins: [
      autoprefixer({
        browsers: [
          'last 7 iOS versions',
          'last 3 versions',
          '> 0.01%'
        ]
      }),
      env === 'development' ? false : cssnano(options.cssnano)
    ]
  }
}
