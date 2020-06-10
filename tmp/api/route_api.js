import { 安全同步运行, 异常 } from '../lib/index';
import express from 'express'
var router = express.Router()

// 使用 req.session 即可访问 session
// 使用 req.sessionID 即可访问 sessionID
// 使用 req.socketio 即可访问 socketio
// 可以使用 req.socketio.提交 用 ws 返回数据
// 也可以使用 res.send 用 http 返回数据
var conf = [{
  路径: '/初始化session',
  函数: async (req, res, next) => {
    res.end()
  }
}, {
  路径: '/test',
  函数: async (req, res, next) => {
    req.session.userid = req.sessionID
    req.socketio.提交('写日志')(`这是 post 的响应, 你的 sessionID 是 ${req.sessionID}`)
    req.socketio.提交('写日志')(`这是 post 的响应, 你的 session.userid 是 ${req.session.userid}`)
    res.send('也可以同时进行 http 返回')
  }
}]
conf.forEach(obj => router.post(obj.路径, 安全同步运行(obj.函数, (req, res, next) => next)))

export default router
