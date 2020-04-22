import node_ex from '@lsby/node_ex'
node_ex.default.工具.注入方法_全部()

import { 前端事件, 后端事件 } from './事件.mjs'
import { 初始化session, 初始化io, 初始化vue, 监听, 数据对象绑定, 事件对象绑定 } from './全局.mjs'
import 数据 from './数据.mjs'

var main = async _ => {
    await 初始化session()
    初始化io()
    初始化vue()
    数据对象绑定(数据)
    事件对象绑定(前端事件)
    后端事件.对象键().forEach(键 => 监听(键)(后端事件[键]))
    前端事件.初始化()
}
main()
