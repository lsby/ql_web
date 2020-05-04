import io from "socket.io-client/dist/socket.io.js"
import vue from 'vue/dist/vue.js'
import $ from 'jquery'

var socket
var app

export var 初始化session = _ =>
    new Promise((res, req) => $.post('/api/强制生成cookie', {}, _ => res()))
export var 初始化io = _ => { socket = io() }
export var 提交 = 名称 => 参数 => socket.emit(名称, 参数)
export var 监听 = 名称 => 函数 => socket.on(名称, 函数)
export var 初始化vue = _ => {
    app = { el: '#app' }
    setTimeout(_ => new vue(app), 0)
}
export var 数据对象绑定 = 对象 => app.data = 对象
export var 事件对象绑定 = 对象 => app.methods = 对象
