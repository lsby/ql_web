// 使用 socket.session 即可访问 session
// 使用 socket.req.sessionID 即可访问 sessionID
// 在这里不能通过 http 返回数据

import 对象扩展 from "@lib/通用/对象扩展"
import 生成监视对象 from "@lib/通用/生成监视对象"
import lodash from 'lodash'
import * as R from 'ramda'

var r = {
    connection: socket => msg => {
        console.log('已接受前端连接')
    },
    disconnect: socket => msg => {
        console.log('前端已断开')
    },
    socket初始化: socket => msg => {
        socket.session.数据 = 生成监视对象(function (路径, 值, 旧值) {
            r.提交通用数据更新(socket)({ 路径, 值 })
        })
    },
    通用数据更新: socket => ({ 路径, 值 }) => {
        console.log('收到', '通用数据更新', { 路径, 值 })
        if (对象扩展.判断路径值相等(路径, 值, socket.session.数据))
            return
        对象扩展.IO_设置对象路径值(路径, 值, socket.session.数据)
    },
    提交通用数据更新: socket => ({ 路径, 值 }) => {
        console.log('发出', '通用数据更新', { 路径, 值 })
        socket.提交('通用数据更新')({ 路径, 值 })
    },
    ws事件: socket => msg => {
        console.log(msg)
        socket.提交('写日志')(`这是 ws 的响应, 你的 sessionID 是 ${socket.request.sessionID}`)
        socket.提交('写日志')(`这是 ws 的响应, 你的 session.userid 是 ${socket.session.userid}`)
        socket.提交('写日志')(`用户池: ${socket.获得用户池().map(a => a.id)}`)
        socket.发送给所有用户('写日志')(`有人点击了按钮`)
        r.提交通用数据更新(socket)({
            路径: ['测试数据'],
            值: '这是后端ws返回的值'
        })
    },
}

export default r
