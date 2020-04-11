import createError from 'http-errors'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import { fileURLToPath } from 'url'
import http from 'http'
import socketio from 'socket.io'
import session from 'express-session'
import FileStore from 'session-file-store'
import uuid from 'uuid'
import route_api from '../api/route_api.mjs'
import socket_event from '../api/socket_event.mjs'
import urlEncodeChinese from './urlEncodeChinese.mjs'

var __filename = fileURLToPath(import.meta.url)
var __dirname = path.dirname(__filename)

var port = process.env.PORT || '3000'
var app = express()
var server = http.createServer(app)

app.set('port', port)

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(urlEncodeChinese)

app.use('/', express.static(path.join(__dirname, '../dist')))
app.use('/api', route_api)

app.use(function (req, res, next) {
    next(createError(404))
})
app.use(function (err, req, res, next) {
    console.log(err)
    res.status(err.status || 500)
    res.send(err)
})

// session
var name = uuid.v4()
var secret = uuid.v4()
var store = new FileStore(session)()
var sessionMiddleware = session({
    name,
    secret,
    store,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: null, httpOnly: true }
})

// socket.io
var sio = socketio(server)
sio.use(function (socket, next) {
    sessionMiddleware(socket.request, socket.request.res, next)
})
app.use(sessionMiddleware)
sio.on('connection', function (socket) {
    if (socket_event.connection != null) socket_event.connection(socket)()
    socket.提交 = 名称 => 值 => socket.emit(名称, 值)
    Reflect.ownKeys(socket_event).forEach(key => socket.on(key, socket_event[key](socket)))
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
