const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    index: path.resolve('src/index.jsx'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: [' ', '.js', '.jsx'],
    alias: {
      '@': path.resolve('src'),
    },
  },
  devServer: {
    static: {
      directory: path.resolve('dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: path.resolve('src'),
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('src/index.html'),
    }),
  ],
};
