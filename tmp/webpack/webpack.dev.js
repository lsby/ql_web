const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        proxy: {
            '/socket.io': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                secure: false,
                ws: true,
            },
            '/api': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                secure: false,
            },
            '/': {
                target: 'http://127.0.0.1:3000',
                changeOrigin: true,
                secure: false,
            },
        },
        contentBase: './dist'
    },
})
