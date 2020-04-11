// 使用 socket.request.session 可访问 session
export default {
    connection: socket => msg => console.log('已接受前端连接'),
    disconnect: socket => msg => console.log('前端已断开'),
    按钮事件: socket => msg => {
        console.log(msg)
        socket.提交('写日志')('p-o-n-g')
    },
}
