// 使用 req.session 即可访问 session
// 使用 req.sessionID 即可访问 sessionID
// 使用 req.socketio 即可访问 socketio
// 可以使用 req.socketio.提交 用 ws 返回数据
// 可以使用 req.socket_event 调用 socket_event 中定义的函数 无需输入 socket 参数
// 也可以使用 res.send 用 http 返回数据
export default async (req, res, next) => {
    req.session.userid = req.sessionID
    req.socketio.提交('写日志')(`这是 post 的响应, 你的 sessionID 是 ${req.sessionID}`)
    req.socketio.提交('写日志')(`这是 post 的响应, 你的 session.userid 是 ${req.session.userid}`)
    req.socket_event.提交通用数据更新({
        路径: ['测试数据'],
        值: '这是后端post返回的值'
    })
    res.send('也可以同时进行 http 返回')
}
