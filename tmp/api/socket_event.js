// 使用 socket.session 即可访问 session
// 使用 socket.req.sessionID 即可访问 sessionID
// 在这里不能通过 http 返回数据

var 用户池 = []
export default {
    connection: socket => msg => {
        console.log('已接受前端连接')
        用户池.push({ id: socket.id, socket })
    },
    disconnect: socket => msg => {
        console.log('前端已断开')
        用户池 = 用户池.filter(a => a.id != socket.id)
    },
    ws事件: socket => msg => {
        console.log(msg)
        socket.提交('写日志')(`这是 ws 的响应, 你的 sessionID 是 ${socket.request.sessionID}`)
        socket.提交('写日志')(`这是 ws 的响应, 你的 session.userid 是 ${socket.session.userid}`)
        socket.提交('写日志')(`用户池: ${用户池.map(a => a.id)}`)
        用户池.forEach(a => a.socket.提交('写日志')(`${socket.id} 点击了按钮`))
    },
}
