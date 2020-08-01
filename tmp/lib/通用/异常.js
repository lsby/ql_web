export default (...a) => {
    a = a.map(a => {
        var r
        if (原型是字符串(a)) {
            r = a
        } else if (原型是错误(a)) {
            r = a.toString()
        } else {
            try {
                r = JSON.stringify(a)
            } catch (e) {
                r = a.toString()
            }
        }
        return r
    })
    console.error(...a)
    console.trace()
    if (typeof window != 'undefined') alert(...a)
    throw a.join(' ')
}
