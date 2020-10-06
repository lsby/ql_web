import "core-js/stable"
import "regenerator-runtime/runtime"

import '@fortawesome/fontawesome-free/css/all.css'
import '@assets/css/Glyphicons.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'layui-src/dist/css/layui.css'
import 'layui-src/dist/layui.all.js'

import "@lib/前端/热重载"

import _$ from 'jquery'
import _data from '@web/data'
import htm from 'htm'
import vhtml from 'vhtml'

window.$ = _$
window.html = htm.bind(vhtml)

window.全局数据 = window == window.top ? _data : window.top.全局数据

window._永久事件 = window == window.top ? [] : window.top._永久事件
window._临时事件 = window == window.top ? [] : window.top._临时事件
window.全局事件 = {
    监听(事件名, 回调) {
        window._永久事件.push({ 事件名, 回调 })
    },
    监听一次(事件名, 回调) {
        window._临时事件.push({ 事件名, 回调 })
    },
    发送(事件名, 参数) {
        var newArr = []
        for (var obj of window._临时事件) {
            if (obj.事件名 != 事件名) {
                newArr.push(obj)
                continue
            }
            setTimeout(_ => obj.回调(参数), 0)
        }
        window._临时事件 = newArr
        window._永久事件.filter(a => a.事件名 == 事件名).forEach(a => setTimeout(_ => a.回调(参数), 0))
    }
}
