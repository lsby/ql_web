import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { 对象, 数组 } from '@lsby/ql_js'
import { 前端事件, 后端事件 } from './框架/事件.js'
import { 初始化session, 初始化io, 初始化vue, 监听, 数据对象绑定, 事件对象绑定 } from './框架/全局.js'
import 数据 from './框架/数据.js'

var main = async _ => {
    await 初始化session()
    初始化io()
    初始化vue()
    数据对象绑定(数据)
    事件对象绑定(前端事件)
    对象.of(后端事件).键().forEach(键 => 监听(键)(后端事件[键]))
    前端事件.初始化()
}
main()
