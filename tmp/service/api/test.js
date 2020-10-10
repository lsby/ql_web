// 使用 req.session 即可访问 session
// 使用 req.sessionID 即可访问 sessionID
// 使用 res.send 用 http 返回数据
export default async (req, res) => {
    return `这是post的返回值, 你的sessionID是: ${req.sessionID}`
}
