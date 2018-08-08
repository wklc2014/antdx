const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          { loader: 'babel-loader' },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash:7].[ext]',
              outputPath: 'font/'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'xml-loader'
        ]
      }
    ]
  },
};