var pkg = require('./package.json'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.config.js'),
  devConfig = webpackConfig(true),
  prodConfig = webpackConfig(false, { banner: banner() });

function banner() {
  return `/*
  * ${pkg.name} ${pkg.version}
  * ${pkg.homepage}
  *
  * The MIT License (MIT)
  * Copyright (c) 2018 Hyun-Seok.Kim, dragmove@gmail.com
  */
`;
}

/*
 * tasks
 */
gulp.task('build:dev', function (callback) {
  const compiler = webpack(devConfig);

  compiler.run((error, stats) => {
    if (error) throw new Error(error);
    callback();
  });
});

gulp.task('build', function (callback) {
  const compiler = webpack(prodConfig);

  compiler.run((error, stats) => {
    if (error) throw new Error(error);
    callback();
  });
});

// after run "gulp webpack-dev-server" in cmd window, connect "http://localhost:9001/webpack-dev-server/main.html"
gulp.task('webpack-dev-server', function () {
  const compiler = webpack(devConfig);

  var server = new WebpackDevServer(compiler, devConfig.devServer);
  server.listen(devConfig.devServer.port, 'localhost', (err) => {
    if (err) console.error('[webpack-dev-server failed to start :', err);
  });
});

/*
 * private client tasks
 */
function buildDevClient(callback, options = {}) {
  const compiler = webpack(clientConfig(true, options));

  compiler.run((err, stats) => {
    outputWebpack('Build Develop Client', err, stats);
    callback();
  });
}

function buildProdClient(callback, options = {}) {
  const compiler = webpack(clientConfig(false, options));

  compiler.run((err, stats) => {
    outputWebpack('Build Production Client', err, stats);
    callback();
  });
}