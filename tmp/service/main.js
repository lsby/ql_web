import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import http from 'http'
import expressSession from 'express-session'
import connectLoki from 'connect-loki'
import 应用设置 from '@config/app'
import 中文路径支持 from '@lib/后端/中文路径支持'
import 安全同步运行 from '@lib/通用/安全同步运行'
import getDir from "@lib/通用/getDir"

var LokiStore = connectLoki(expressSession)
var port = 应用设置.端口
var 路由们 = getDir(require.context('./api/', true, /.js$/))

var app = express()
var server = http.createServer(app)

app.set('port', port)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(中文路径支持)

// session
var session = expressSession({
    name: 'ql_web',
    secret: 'ql_web',
    saveUninitialized: true,
    autoSave: true,
    resave: true,
    store: new LokiStore(),
    cookie: { maxAge: null, httpOnly: true },
})
app.use(session)

app.use('/', express.static('./dist/web'))
app.use('/api', (_ => {
    var router = express.Router()
    路由们.forEach(obj => router.post(`/${obj.name}`, 安全同步运行(obj.obj, (req, res, next) => err => {
        console.error(err)
        return next(err.toString())
    })))
    return router
})())

app.use(function (req, res, next) {
    next(createError(404))
})
app.use(function (err, req, res) {
    console.log(err)
    res.status(err.status || 500)
    res.send(err)
})

server.listen(port)
server.on('listening', (port => _ => console.log(`后端已启动 请访问 http://127.0.0.1:${port}`))(port))
server.on('error', error => {
    if (error.code == 'EACCES') throw '需要提升权限'
    if (error.code == 'EADDRINUSE') throw '端口被占用'
    throw error
})
