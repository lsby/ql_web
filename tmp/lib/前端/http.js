import $ from 'jquery'
import 是调试模式 from '@lib/通用/是调试模式'
var 调试模式 = 是调试模式()

export var post_json = (url, reqData) => new Promise((res, req) => {
    $.ajax({
        type: "POST",
        url: url,
        contentType: "application/json;charset=utf-8",
        data: reqData,
        success: function (data) {
            if (调试模式) console.log(url, reqData, data)
            res(data)
        },
        error: function (e) {
            if (调试模式) console.error(url, reqData, e)
            req(e)
        }
    })
})
