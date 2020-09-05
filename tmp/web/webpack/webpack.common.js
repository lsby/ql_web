var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
var webpack = require('webpack')
var VueLoaderPlugin = require('vue-loader/lib/plugin')
var autoprefixer = require('autoprefixer')

// TODO 公用css提取 vue的css提取
// TODO vendors.bundle.js 文件过大

module.exports = {
    entry: path.join(__dirname, '../main.js'),
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.join(__dirname, '../../dist/web'),
        publicPath: '/',
    },
    externals: {
        // 'lodash': { commonjs: 'lodash', commonjs2: 'lodash', amd: 'lodash', root: '_' },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'index',
            template: path.join(__dirname, '../index.html'),
            filename: `index.html`,
        }),
        process.env.analyz == 'true' ? new BundleAnalyzerPlugin() : null,
    ].filter(a => a != null),
    module: {
        rules: [
            { test: /\.(js|mjs)$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader" },
            { test: /\.(js|mjs)$/, use: ["source-map-loader"], enforce: "pre" },

            { test: /\.vue$/, loader: 'vue-loader' },
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },

            { test: /\.(png|jpg|gif|svg|bmp|jpeg|jfif)$/, loader: 'url-loader?limit=8192&name=image/[name].[ext]?[hash]' },
            { test: /\.(eot|ttf|woff|woff2)$/i, loader: 'url-loader?limit=8192&name=fonts/[name].[ext]?[hash]' },
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            "@assets": path.join(__dirname, '../assets'),
            "@components": path.join(__dirname, '../components'),
            "@page": path.join(__dirname, '../page'),
            "@lib": path.join(__dirname, '../../lib'),
            "@config": path.join(__dirname, '../../config'),
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
    console.error(err)
})
