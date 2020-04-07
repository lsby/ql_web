import io from "socket.io-client"

var socket = io()

socket.on('connect', function () {
    console.log('已链接到后端')
    socket.emit('自定义事件1', 'p-i-n-g')
})
socket.on('disconnect', function () {
    console.log('后端已断开')
})
socket.on('自定义事件2', function (msg) {
    console.log(msg)
})

export default socket
