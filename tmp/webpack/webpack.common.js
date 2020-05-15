var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var fs = require('fs')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const webpack = require('webpack')

var 对象混合 = 对象1 => 对象2 => {
    var r = {}

    for (var name in 对象1)
        r[name] = 对象1[name]
    for (var name in 对象2)
        r[name] = 对象2[name]

    return r
}

var 页面路径 = path.join(__dirname, '../page')
var 页面 = fs.readdirSync(页面路径).filter(a => {
    var 内容 = fs.readdirSync(path.join(页面路径, a))
    if (内容.length == 0)
        return false
    if (!内容.includes('index.html') || !内容.includes('main.js'))
        return false
    return true
})

var entry = 页面.map(a => ({ [a]: path.join(页面路径, a, 'main.js') }))
    .reduce((s, a) => 对象混合(s)(a), {})

var plugins = [
    ...页面.map(a => new HtmlWebpackPlugin({
        title: a,
        template: path.join(页面路径, a, 'index.html'),
        filename: `${a}.html`,
        chunks: [a],
    })),
    new webpack.NoEmitOnErrorsPlugin(),
    new CleanWebpackPlugin(),
]

if (process.env.analyz == 'true') {
    plugins.push(new BundleAnalyzerPlugin())
}

var output = {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
}

var externals = {
    "jquery": '$',
    'vue/dist/vue.js': 'Vue',
    'socket.io-client/dist/socket.io.js': 'io',
    'lodash': { commonjs: 'lodash', commonjs2: 'lodash', amd: 'lodash', root: '_' },
    'fs': { commonjs: 'fs', commonjs2: 'fs', amd: 'fs', root: 'fs' },
    'path': { commonjs: 'path', commonjs2: 'path', amd: 'path', root: 'path' },
    'request': { commonjs: 'request', commonjs2: 'request', amd: 'request', root: 'request' },
}

var webpack_module = {
    rules: [
        { test: /\.(js|mjs)$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader" },
        { test: /\.(js|mjs)$/, use: ["source-map-loader"], enforce: "pre" },

        { test: /\.html$/, loader: 'html-loader' },
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap' },

        { test: /\.(png|jpg|gif|svg|bmp|jpeg|jfif)$/, loader: 'url-loader?limit=8192&name=image/[name].[ext]?[hash]' },
        { test: /\.(eot|ttf|woff|woff2)$/i, loader: 'url-loader?limit=8192&name=fonts/[name].[ext]?[hash]' },
    ]
}
module.exports = {
    entry,
    plugins,
    output,
    externals,
    module: webpack_module,
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
