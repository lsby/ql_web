// 使用 req.session 即可访问 session
// 使用 req.sessionID 即可访问 sessionID
// 使用 res.send 用 http 返回数据
export default async (req, res, next) => {
    req.session.userid = req.sessionID
    res.send(`这是后端post返回的值, 你的sessionID是: ${req.sessionID}`)
}
