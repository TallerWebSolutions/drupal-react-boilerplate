module.exports = {
  plugins: [
    require('postcss-nested'),
    require('autoprefixer')({ browsers: ['> 1%', 'last 4 versions', 'Firefox ESR'] })
  ]
}
