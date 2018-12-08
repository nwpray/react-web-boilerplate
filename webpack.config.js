const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: path.resolve('src/index.jsx')
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist')
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src')
    }
  },
  devServer: {
    contentBase: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        include: path.resolve('src')
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html')
    })
  ]
};
