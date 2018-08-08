module.exports = ({ options, env }) => {
  return {
    plugins: [
      require('autoprefixer')({
        browsers: [
          'last 7 iOS versions',
          'last 3 versions',
          '> 0.01%'
        ]
      }),
      env === 'development' ? false : require('cssnano')(options.cssnano)
    ]
  }
}
