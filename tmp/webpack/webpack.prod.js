var merge = require('webpack-merge')
var common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    // TODO 压缩插件
})
