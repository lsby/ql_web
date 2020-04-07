// https://blog.csdn.net/ozhangsangong/article/details/45391613

import url from 'url'

function urlEncodeChinese(req, res, next) {
    var decodeurlchinese = url.parse(req.url)
    var tmpdecodepath = decodeurlchinese.pathname
    decodeurlchinese.pathname = decodeURIComponent(decodeurlchinese.pathname)
    decodeurlchinese.path = decodeurlchinese.path.replace(tmpdecodepath, decodeurlchinese.pathname)
    req.url = req.originalUrl = decodeurlchinese.path
    next()
}

export default urlEncodeChinese 
