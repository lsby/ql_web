import $ from 'jquery'

var 调试模式 = process.env.NODE_ENV !== 'production'

export default (url, reqData) => new Promise((res, req) => {
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(reqData),
        dataType: "json",
        success: function (data) {
            if (调试模式) console.log(url, reqData, data)
            res(data)
        },
        error: function (e) {
            if (调试模式) console.log(url, reqData, e)
            req(e)
        }
    })
})
