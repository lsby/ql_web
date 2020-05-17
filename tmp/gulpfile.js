var nodemon = require('gulp-nodemon')
var webpack = require('webpack')
var { watch } = require('gulp')
var WebpackDevServer = require("webpack-dev-server")
var webpackConfig = require('./webpack/webpack.dev.js')

exports.default = function defaultTask(cb) {
    nodemon()
    new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer).listen(8080, "127.0.0.1")
    cb()
}
// watch('**/*.js', _ => _)

// process.on('uncaughtException', function (err) {
//     console.log(err)
// })
