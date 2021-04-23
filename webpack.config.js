const path = require('path');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  mode     : env.mode,
  entry    : ['@babel/polyfill', './src/index.js'],
  output   : {
    publicPath: '/',
    path      : path.resolve(__dirname, 'dist'),
    filename  : '[name].[hash].js',
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
      '@config'    : path.resolve(__dirname, 'src/config'),
      '@containers': path.resolve(__dirname, 'src/containers'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@modules'   : path.resolve(__dirname, 'src/modules'),
      '@pages'     : path.resolve(__dirname, 'src/pages'),
      '@lib'       : path.resolve(__dirname, 'src/lib'),
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
        test: /\.((c|sa|sc)ss)$/i,
        use : ['style-loader', 'css-loader'],
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
    new MiniCssExtractPlugin({
        filename     : '[name].css',
        chunkFilename: '[id].css',
      }
    ),
    new CleanWebpackPlugin(),
    new Dotenv({
      path: env.mode === 'development' ? '.env.develop' : '.env.prod'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'public'},
      ],
    }),
  ],
});