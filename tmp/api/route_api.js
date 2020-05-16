import express from 'express'
var router = express.Router()

router.post('/初始化session', function (req, res, next) {
  req.session.userid = req.sessionID
  res.end()
})

// 使用 req.session 即可访问 session
// 使用 req.sessionID 即可访问 sessionID
// 使用 req.socketio 即可访问 socketio
// 可以使用 req.socketio.提交 用 ws 返回数据
// 也可以使用 res.send 用 http 返回数据
router.post('/test', function (req, res, next) {
  req.session.userid = req.sessionID
  req.socketio.提交('写日志')(`这是 post 的响应, 你的 sessionID 是 ${req.sessionID}`)
  req.socketio.提交('写日志')(`这是 post 的响应, 你的 session.userid 是 ${req.session.userid}`)
  res.send('也可以同时进行 http 返回')
})

export default router
