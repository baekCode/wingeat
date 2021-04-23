const path = require('path');
const Dotenv = require("dotenv-webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = env => ({
  mode     : env.mode,
  entry    : ['@babel/polyfill', './src/index.js'],
  output   : {
    publicPath: "/",
    path      : path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  devServer: {
    historyApiFallback: true,
    inline            : true,
    hot               : true,
    contentBase       : path.resolve(__dirname, 'public'),
    open              : true,
  },
  resolve  : {
    extensions: ['.js', '.jsx'],
    alias     : {
      '@'          : path.resolve(__dirname, 'src/'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@constants' : path.resolve(__dirname, 'src/constants'),
      '@hooks'     : path.resolve(__dirname, 'src/hooks'),
      '@routes'    : path.resolve(__dirname, 'src/routes'),
      '@store'     : path.resolve(__dirname, 'src/store'),
      '@styles'    : path.resolve(__dirname, 'src/styles'),
      '@utils'     : path.resolve(__dirname, 'src/utils'),
    },
  },
  module   : {
    rules: [
      {
        test   : /\.(js|jsx)$/,
        exclude: /node_modules/,
        use    : ['babel-loader'],
      },
      {
        test   : /\.(ico|png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader : 'url-loader',
        options: {
          name : '[hash].[ext]',
          limit: 10000,
        },
      }
    ],
  },
  plugins  : [
    new HtmlWebpackPlugin({
      template          : 'public/index.html',
      filename          : 'index.html',
      templateParameters: {
        env: env.mode === 'development' ? '[개발용]' : ''
      },
      minify            : env.mode === 'production' ? {
        collapseWhitespace: true,
        removeComments    : true,
      } : false
    }),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: env.mode === 'development' ? '.env.develop' : '.env.prod'
    }),
    new CopyPlugin({
      patterns: [
        {from: "public"},
      ],
    }),
  ],
});