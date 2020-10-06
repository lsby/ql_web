import request from 'request'

export var post_json = 地址 => 参数 => {
    return new Promise((pres, rej) => {
        request({
            url: 地址,
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(参数)
        }, (err, res, body) => {
            if (err) return rej(err)
            pres({ res, body })
        })
    })
}
