export default {
    序列化: 函数 => {
        if (函数 == null || 函数 == '')
            return null
        return 函数.toString()
    },
    反序列化: 字符串 => {
        if (字符串 == null || 字符串 == '')
            return null
        return new Function(`return ${字符串}`)()
    }
}
