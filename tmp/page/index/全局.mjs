import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import io from "socket.io-client/dist/socket.io.js"
import vue from 'vue/dist/vue.js'

var socket = io()
var 提交 = 名称 => 参数 => socket.emit(名称, 参数)
var 监听 = 名称 => 函数 => socket.on(名称, 函数)

var app = { el: '#app' }
setTimeout(_ => new vue(app), 0)
var 数据对象绑定 = 对象 => app.data = 对象
var 事件对象绑定 = 对象 => app.methods = 对象

export { 提交, 监听, 数据对象绑定, 事件对象绑定 }
