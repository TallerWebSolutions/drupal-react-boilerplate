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
    rules: [
      { test: /\.html$/, use: 'html' },
      { test: /\.json$/, use: 'json' },
      { test: /\.js$/, use: 'babel', exclude: /node_modules/, include: __dirname },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: ['style-loader'],
          loader: [
            { loader: 'css-loader', query: { modules: true, importLoaders: 1, localIdentName: '[path][name]__[local]', sourceMap: env === 'development' } },
            { loader: 'postcss-loader' }
          ]
        })
      },
      { test: /\.gif(\?.*)?$/, use: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.png(\?.*)?$/, use: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.jpg(\?.*)?$/, use: 'url-loader?limit=10000&minetype=image/jpg' },
      { test: /\.svg(\?.*)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' },
      { test: /\.woff(\?.*)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?.*)?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?.*)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot(\?.*)?$/, use: 'url-loader?limit=10000&mimetype=application/vnd.ms-fontobject' },
    ],
  },

  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', allChunks: true, ignoreOrder: true }),
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
