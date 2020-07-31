export var 序列化函数 = 函数 => {
    if (函数 == null || 函数 == '')
        return null
    return 函数.toString()
}
export var 反序列化函数 = 字符串 => {
    if (字符串 == null || 字符串 == '')
        return null
    return new Function(`return ${字符串}`)()
}
