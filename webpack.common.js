require('dotenv').config();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const { DefinePlugin } = require('webpack');

const webpackConfig = module.exports = {};

webpackConfig.entry = `${__dirname}/src/main.js`;

webpackConfig.output = {
  filename: '[name].[hash].js',
  path: `${__dirname}/build`,
  publicPath: process.env.CDN_URL,
};

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    title: '',
  }),
  new MiniCssPlugin({
    filename: '[name].[hash].css',
  }),
  new DefinePlugin({
    __API_URL__: JSON.stringify(process.env.__API_URL__),
  }),
];

webpackConfig.module = {};
webpackConfig.module.rules = [
  {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
      'file-loader',
    ],
  },
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
        cacheDirectory: true,
      },
    },
  },
];
