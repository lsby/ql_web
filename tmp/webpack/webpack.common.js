var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var { CleanWebpackPlugin } = require('clean-webpack-plugin')
var fs = require('fs')
var webpack = require('webpack')

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
    if (!内容.includes('index.html') || !内容.includes('main.mjs'))
        return false
    return true
})

var entry = 页面.map(a => ({ [a]: path.join(页面路径, a, 'main.mjs') }))
    .reduce((s, a) => 对象混合(s)(a), {})

var plugins = 页面.map(a => new HtmlWebpackPlugin({
    title: a,
    template: path.join(页面路径, a, 'index.html'),
    filename: `${a}.html`,
    chunks: [a],
}))
plugins = [
    ...plugins,
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        Popper: ['popper.js', 'default'],
    }),
    new CleanWebpackPlugin(),
]

var output = {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
}

var webpack_module = {
    rules: [
        { test: /\.(js|mjs)$/, exclude: /(node_modules|bower_components)/, loader: "babel-loader" },
        { test: /\.(js|mjs)$/, use: ["source-map-loader"], enforce: "pre" },

        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap' },

        { test: /\.(png|jpg|gif|svg)$/, loader: 'url-loader?limit=8192&name=image/[name].[ext]' },
        { test: /\.(eot|ttf|woff)$/i, loader: 'url?limit=10000&name=fonts/[name].[ext]' },
    ]
}
var mode = 'development'

module.exports = {
    entry,
    plugins,
    output,
    module: webpack_module,
    mode,
}

process.on('uncaughtException', function (err) {
    console.log(err)
})
