// 使用 socket.request.session 可访问 session
export default io => {
    io.on('connection', function (socket) {
        console.log('已接受前端连接')

        socket.on('disconnect', function () {
            console.log('前端已断开')
        })

        socket.on('自定义事件1', function (msg) {
            console.log(msg)
            socket.emit('自定义事件2', 'p-o-n-g')
        })
    })
}
