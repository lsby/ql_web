export default (函数, 异常回调) => {
    if (异常回调 == null) 异常回调 = 上下文 => 错误 => { console.error(错误) }
    return async function (...a) {
        return await 函数.bind(this)(...a).catch(e => 异常回调(...a)(e))
    }
}
