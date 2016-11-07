const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV || 'development'

const browserSupport = ['> 1%', 'last 4 versions', 'Firefox ESR']
const cssLoader = [
  { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[path][name]__[local]' } },
  { loader: 'postcss-loader', options: { plugins: [require('postcss-nested'), require('autoprefixer')({ browsers: browserSupport })] } }
]

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
      { test: /\.css?$/, use: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: cssLoader }) },
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
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      __DEV__: env === 'development',
      __PRODUCTION__: env === 'production',
    }),
  ],
}
