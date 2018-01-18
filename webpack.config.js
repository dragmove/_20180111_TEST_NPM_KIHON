var path = require('path'),
  webpack = require('webpack'),
  dirName = path.resolve('./'),
  distDirName = path.resolve('./build');

function createConfig(isDebug, options = {}) {
  let devTool = '',
    externals = [],
    plugins = [],
    appEntry = {
      main: ['./app/main.js'],
      sub: ['./app/sub.js']
    };

  return {
    context: dirName,

    entry: appEntry,

    output: {
      filename: "[name].js",
      path: path.resolve(distDirName)
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader'
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
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
    ],

    devServer: {
      contentBase: './build',
      noInfo: true,
      host: '',
      port: 9001,
      hot: true,
      inline: true
    }
  };
}

module.exports = createConfig;