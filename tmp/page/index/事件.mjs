import node_ex from '@lsby/node_ex'
node_ex.default.工具.注入方法_全部()
import $ from 'jquery'
import 数据 from './数据.mjs'
import { 提交 } from './全局.mjs'

var 已连接后端 = true
export var 后端事件 = {
    connect: _ => {
        后端事件.写日志('已连接到后端')
        if (已连接后端 == false) return window.location = window.location
    },
    disconnect: _ => {
        后端事件.写日志('后端已断开')
        已连接后端 = false
    },
    写日志: str => 数据.日志 = 数据.日志
        .split('\n')
        .入列头(str)
        .数组截取(0)(100)
        .join('\n')
        .trim(),
    控制台: str => console.log(str),
}
export var 前端事件 = {
    ws事件: _ => 提交('ws事件')('p-i-n-g'),
    post事件: _ => $.post('/api/test', {}, data => console.log(data)),
}
