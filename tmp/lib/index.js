import path from "path"

export var Y = s => s(s)
export var getDir = req => req.keys()
    .map(name => ({ name: path.basename(name).replace(path.extname(name), ''), obj: req(name).default }))

export var 是对象原型 = 参数 => 参数 instanceof Object
export var 是原型 = 期待原型 => 参数 => 参数 instanceof 期待原型
export var 计算原型 = 参数 => Object.prototype.toString.call(参数)
export var 原型是布尔 = 参数 => 计算原型(参数) == '[object Boolean]'
export var 原型是数字 = 参数 => 计算原型(参数) == '[object Number]'
export var 原型是字符串 = 参数 => 计算原型(参数) == '[object String]'
export var 原型是对象 = 参数 => 计算原型(参数) == '[object Object]'
export var 原型是函数 = 参数 => 计算原型(参数) == '[object Function]'
export var 原型是数组 = 参数 => 计算原型(参数) == '[object Array]'
export var 原型是错误 = 参数 => 计算原型(参数) == '[object Error]'
export var 原型是Promise = 参数 => 计算原型(参数) == '[object Promise]'

export var 异常 = (...a) => {
    a = a.map(a => {
        var r
        if (原型是字符串(a)) {
            r = a
        } else if (原型是错误(a)) {
            r = a.toString()
        } else {
            try {
                r = JSON.stringify(a)
            } catch (e) {
                r = a.toString()
            }
        }
        return r
    })
    console.error(...a)
    console.trace()
    if (typeof window != 'undefined') alert(...a)
    throw a.join(' ')
}
export var 数组转对象通过值 = 键 => 值 => 数组 => {
    var r = {}
    数组.forEach((v, k) => r[键(v)] = 值(v))
    return r
}
export var 数组转对象通过键值 = 键 => 值 => 数组 => {
    var r = {}
    数组.forEach((v, k) => r[键(k)(v)] = 值(k)(v))
    return r
}
export var 副作用 = 对象 => 函数 => { 函数(对象); return 对象; }
export var 安全同步运行 = (函数, 异常回调) => {
    if (异常回调 == null) 异常回调 = 上下文 => 错误 => { 异常(错误) }
    return async function (...a) {
        return await 函数.bind(this)(...a).catch(e => 异常回调(...a)(e))
    }
}
export var 选择二维数组列 = 列 => 数组 => 数组.map(a => a[列]).flat()
export var 数组求和 = 数组 => 数组.reduce((s, a) => s + a)
export function 时间格式化(date, fmt = 'yyyy-MM-dd') { //author: meizz
    var o = {
        "M+": date.getMonth() + 1,     //月份
        "d+": date.getDate(),     //日
        "h+": date.getHours(),     //小时
        "m+": date.getMinutes(),     //分
        "s+": date.getSeconds(),     //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()    //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
