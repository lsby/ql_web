import $ from 'jquery'

var 调试模式 = process.env.NODE_ENV !== 'production'

export default (url, reqData) => new Promise((res, req) => {
    $.post(url, reqData, data => {
        if (调试模式) console.log(url, reqData, data)
        res(data)
    }).catch(e => {
        if (调试模式) console.log(url, reqData, e)
        req(e)
    })
})
