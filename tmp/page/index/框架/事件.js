import { 对象ex, 数组ex } from '@lsby/ql_js'
import $ from 'jquery'
import 数据 from './数据.js'
import { 提交 } from './全局.js'

var 已连接后端 = true

export var 后端事件 = {}
后端事件.connect = _ => {
    后端事件.写日志('已连接到后端')
    后端事件.控制台('已连接到后端')
    if (已连接后端 == false) return location.reload()
}
后端事件.disconnect = _ => {
    后端事件.写日志('后端已断开')
    后端事件.控制台('后端已断开')
    已连接后端 = false
}
后端事件.写日志 = str => {
    数据.日志 = 数组ex.从字符串生成(数据.日志)('\n')
        .添加到开头(str)
        .截取(0)(100)
        .转字符串('\n')
        .trim()
}
后端事件.控制台 = str => console.log(str)

export var 前端事件 = {}
前端事件.ws事件 = _ => 提交('ws事件')('p-i-n-g')
前端事件.post事件 = _ => $.post('/api/test', {}, data => console.log(data))
前端事件.初始化 = _ => console.log('init')
