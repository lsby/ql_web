import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import http from 'http'
import socketio from 'socket.io'
import expressSession from 'express-session'
import uuid from 'uuid'
import route_api from '../api/route_api.mjs'
import socket_event from '../api/socket_event.mjs'
import urlEncodeChinese from './urlEncodeChinese.mjs'
import config from '../config/app.mjs'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack/webpack.common.js'
import webpackConfigDev from '../webpack/webpack.dev.js'

var __filename = fileURLToPath(import.meta.url)
var __dirname = path.dirname(__filename)

var port = config.端口
var app = express()
var server = http.createServer(app)

app.set('port', port)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(urlEncodeChinese)

// session
var session = expressSession({
    name: 'ql_web',
    secret: uuid.v4(),
    saveUninitialized: true,
    autoSave: true,
    resave: true,
    cookie: { maxAge: null, httpOnly: true },
})
app.use(session)

// session 与 socket.io 的联系
var session_req_io_map = {}
app.use(function (req, res, next) {
    var sessionID = req.sessionID
    session_req_io_map[sessionID] = session_req_io_map[sessionID] || {}
    session_req_io_map[sessionID].get_session = _ => req.session
    req.socketio = session_req_io_map[sessionID].socketio
    next()
})

// socket.io
var io = socketio(server, { cookie: false })
io.on('connection', function (socket) {
    session(socket.request, {}, function () {
        var sessionID = socket.request.sessionID
        session_req_io_map[sessionID] = session_req_io_map[sessionID] || {}
        session_req_io_map[sessionID].socketio = socket

        socket.提交 = 名称 => 值 => socket.emit(名称, 值)

        if (socket_event.connection != null) socket_event.connection(socket)()
        Reflect.ownKeys(socket_event).forEach(key => socket.on(key, (...args) => {
            if (session_req_io_map[sessionID].get_session)
                socket.session = session_req_io_map[sessionID].get_session()
            socket_event[key](socket)(...args)
        }))
    })
})

console.log('以 ' + process.env.NODE_ENV + ' 模式启动')
if (process.env.NODE_ENV == 'development')
    app.use(webpackDevMiddleware(webpack(webpackConfigDev), { publicPath: webpackConfig.output.publicPath }))
else if (process.env.NODE_ENV == 'production')
    app.use('/', express.static(path.join(__dirname, '../dist')))
else
    throw '意外的模式:' + process.env.NODE_ENV
app.use('/api', route_api)

app.use(function (req, res, next) {
    next(createError(404))
})
app.use(function (err, req, res, next) {
    console.log(err)
    res.status(err.status || 500)
    res.send(err)
})

server.listen(port)
server.on('listening', (port => _ => console.log(`http://127.0.0.1:${port}`))(port))
server.on('error', error => {
    if (error.syscall !== 'listen')
        throw error
    if (error.code == 'EACCES')
        throw '需要提升权限'
    if (error.code == 'EADDRINUSE')
        throw '端口被使用'
    throw error
})
