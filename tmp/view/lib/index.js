import $ from 'jquery'
var 调试模式 = process.env.NODE_ENV !== 'production'

export var post = url => data => new Promise((res, req) => {
    if (调试模式) console.log(url, data)
    try {
        var 返回值 = $.post(url, data, data => res(data))
        if (调试模式) console.log(返回值)
        return 返回值
    } catch (e) {
        req(e)
    }
})
export var 异常 = (...str) => {
    alert(str.join(' '))
    console.error(str)
    throw str
}
