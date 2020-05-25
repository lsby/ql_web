var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var webpack = require('webpack')

// TODO 公用css提取 vue的css提取
// TODO vendors.bundle.js 文件过大

module.exports = {
    entry: path.join(__dirname, '../view/main.js'),
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.join(__dirname, '../dist'),
        publicPath: '/',
    },
    externals: {
        // "jquery": '$',
        // 'vue/dist/vue.js': 'Vue',
        // 'socket.io-client/dist/socket.io.js': 'io',
        // 'lodash': { commonjs: 'lodash', commonjs2: 'lodash', amd: 'lodash', root: '_' },
        // 'fs': { commonjs: 'fs', commonjs2: 'fs', amd: 'fs', root: 'fs' },
        // 'path': { commonjs: 'path', commonjs2: 'path', amd: 'path', root: 'path' },
        // 'request': { commonjs: 'request', commonjs2: 'request', amd: 'request', root: 'request' },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'index',
            template: path.join(__dirname, '../view/index.html'),
            filename: `index.html`,
        }),
        process.env.analyz == 'true' ? new BundleAnalyzerPlugin() : null,
    ].filter(a => a != null),
    module: {
        rules: [
            { test: /\.(js|mjs|jsx)$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader" },
            { test: /\.(js|mjs|jsx)$/, use: ["source-map-loader"], enforce: "pre" },

            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap' },

            { test: /\.(png|jpg|gif|svg|bmp|jpeg|jfif)$/, loader: 'url-loader?limit=8192&name=image/[name].[ext]?[hash]' },
            { test: /\.(eot|ttf|woff|woff2)$/i, loader: 'url-loader?limit=8192&name=fonts/[name].[ext]?[hash]' },
        ]
    },
    resolve: {
        alias: {
            "@components": path.join(__dirname, '../view/components'),
            "@layout": path.join(__dirname, '../view/layout'),
            "@webLib": path.join(__dirname, '../view/lib'),
            "@lib": path.join(__dirname, '../lib'),
            "@page": path.join(__dirname, '../page'),
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    }
}

process.on('uncaughtException', function (err) {
    console.log(err)
})
