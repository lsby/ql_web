import path from "path"

export var Y = s => s(s)
export var getDir = req => req.keys()
    .map(name => ({ [path.basename(name).replace(path.extname(name), '')]: req(name).default }))
    .reduce((s, a) => Object.assign(s, a))
export var 副作用 = 对象 => 函数 => { 函数(对象); return 对象; }
export var 安全同步运行 = (函数, 异常回调) => {
    if (异常回调 == null) 异常回调 = 上下文 => 错误 => { console.error(错误); throw 错误; }
    return async (...a) => {
        return await 函数(...a).catch(e => 异常回调(...a)(e))
    }
}
