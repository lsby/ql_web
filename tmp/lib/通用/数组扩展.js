export var 数组转对象通过值 = 键 => 值 => 数组 => {
    var r = {}
    数组.forEach((v, k) => r[键(v)] = 值(v))
    return r
}
export var 数组转对象通过键值 = 键 => 值 => 数组 => {
    var r = {}
    数组.forEach((v, k) => r[键(k)(v)] = 值(k)(v))
    return r
}
export var 选择二维数组列 = 列 => 数组 => 数组.map(a => a[列]).flat()
export var 数组求和 = 数组 => 数组.reduce((s, a) => s + a)
