// 使用 req.session 即可访问 session
// 使用 req.sessionID 即可访问 sessionID
// 使用 req.socketio 即可访问 socketio
// 可以使用 req.socketio.提交 用 ws 返回数据
// 可以使用 req.socket_event 调用 socket_event 中定义的函数 无需输入 socket 参数
// 也可以使用 res.send 用 http 返回数据
export default async (req, res, next) => {
    res.send()
}
