var webpack = require('webpack'),
  path = require('path');

module.exports = {
  devServer: {
    contentBase: './build/',
    noInfo: true, //  --no-info option
    // host: '',
    port: 9001,
    hot: true,
    inline: true
  },

  context: __dirname,

  entry: {
    main: [/*'webpack/hot/dev-server', 'babel-polyfill',*/ './app/main.js'],
    sub: [/*'webpack/hot/dev-server', 'babel-polyfill',*/ './app/sub.js']
  },

  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },

  // https://webpack.js.org/configuration/devtool/
  devtool: 'eval-source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      output: {
        beautify: true,
        comments: true,
      },
      compress: {
        unused: false,
        drop_console: false,
        warnings: false
      }
    }),

    new webpack.BannerPlugin({
      banner: '',
      raw: true
    })
  ]
};