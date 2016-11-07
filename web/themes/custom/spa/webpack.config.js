const path = require('path')
const webpack = require('webpack')

const env = process.env.NODE_ENV || 'development'

module.exports = {
  devtool: 'source-map',

  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].[id].[chunkhash].js',
    publicPath: '/themes/custom/spa/dist/'
  },

  resolve: {
    alias: {
      app: path.resolve(__dirname, 'src')
    },
  },

  module: {
    rules: [
      { test: /\.html$/, use: 'html' },
      { test: /\.json$/, use: 'json' },
      { test: /\.js$/, use: 'babel', exclude: /node_modules/, include: __dirname },
    ],
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __DEV__: env === 'development',
      __PRODUCTION__: env === 'production',
    }),
  ],
}
