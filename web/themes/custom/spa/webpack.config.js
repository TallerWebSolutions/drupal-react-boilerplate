const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

const config = {
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
    loaders: [
      { test: /\.html$/, loader: 'html' },
      { test: /\.json$/, loader: 'json' },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/, include: __dirname },
      { test: /\.css?$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[path][name]__[local]!postcss-loader') },
      { test: /\.gif(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.png(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.jpg(\?.*)?$/, loader: 'url-loader?limit=10000&minetype=image/jpg' },
      { test: /\.svg(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.woff(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/, loader: 'url-loader?limit=10000&mimetype=application/vnd.ms-fontobject' },
    ],
  },

  plugins: [
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
      ignoreOrder: true,
      disable: env !== 'production'
    }),
    new webpack.DefinePlugin({
      __DEV__: env === 'development',
      __PRODUCTION__: env === 'production',
    }),
  ],
}

if (env === 'production') {
  config.plugins.push(new webpack.optimize.DedupePlugin())
}

module.exports = config
