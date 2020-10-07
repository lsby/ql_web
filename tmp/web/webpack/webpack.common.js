var path = require('path')
var fs = require('fs')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// TODO 公用css提取 vue的css提取
// TODO vendors.bundle.js 文件过大

var page文件 = fs.readdirSync(path.join(__dirname, '../page')).map(a => a.replace('.js', ''))

var 入口 = []
入口 = 入口.concat([{ 'index': path.join(__dirname, '../index.js') }])
入口 = 入口.concat(page文件.map(a => ({ [`page_${a}`]: path.join(__dirname, `../page/${a}.js`) })))
入口 = 入口.reduce((s, a) => Object.assign(s, a), {})

var html构造 = []
html构造 = html构造.concat([new HtmlWebpackPlugin({
    title: 'index',
    template: path.join(__dirname, '../index.html'),
    filename: `index.html`,
    chunks: ['index']
})])
html构造 = html构造.concat(page文件.map(a => new HtmlWebpackPlugin({
    title: a,
    template: path.join(__dirname, '../index.html'),
    filename: `page/${a}.html`,
    chunks: [`page_${a}`]
})))

module.exports = {
    entry: 入口,
    output: {
        filename: '[name].[hash].[id].bundle.js',
        path: path.join(__dirname, '../../dist/web'),
        publicPath: '/',
    },
    externals: {
        // 'lodash': { commonjs: 'lodash', commonjs2: 'lodash', amd: 'lodash', root: '_' },
    },
    plugins: [
        new CleanWebpackPlugin(),
        ...html构造,
        process.env.analyz == 'true' ? new BundleAnalyzerPlugin() : null,
    ].filter(a => a != null),
    module: {
        rules: [
            {
                test: /\.(js|mjs)$/, exclude: /(node_modules|bower_components)/, use: {
                    loader: 'babel-loader',
                    options: { presets: ['@babel/preset-env'] }
                }
            },
            { test: /\.(js|mjs)$/, use: ["source-map-loader"], enforce: "pre" },

            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.css$/, loader: "style-loader!css-loader" },

            { test: /\.(png|jpg|gif|svg|bmp|jpeg|jfif)$/, loader: 'url-loader?limit=8192&name=image/[name].[ext]?[hash]' },
            { test: /\.(eot|ttf|woff|woff2)$/i, loader: 'url-loader?limit=8192&name=fonts/[name].[ext]?[hash]' },
        ]
    },
    resolve: {
        alias: {
            "@assets": path.join(__dirname, '../assets'),
            "@components": path.join(__dirname, '../components'),
            "@page": path.join(__dirname, '../page'),
            "@web": path.join(__dirname, '../'),
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
