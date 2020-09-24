import * as R from 'ramda'

export var 存在 = 键 => 值 => 数据 => {
    var 匹配 = 数据.filter(a => a[键] == 值)
    if (匹配.length == 0) return false
    return true
}
export var 改列名 = 旧名称 => 新名称 => 数据 => {
    var r = 数据.map(a => R.set(R.lensPath([新名称]), a[旧名称], a))
    delete r[旧名称]
    return r
}
export var 增加列 = 列名 => 初始值 => 数据 => {
    return 数据.map(a => R.set(R.lensPath([列名]), 初始值, a))
}
export var 筛选 = 键 => 值 => 数据 => {
    var 筛选 = 数据.filter(a => a[键] == 值)
    return 筛选
}
export var 取第一行 = 数据 => 数据[0]
export var 取第一行值 = 键 => 数据 => 数据[0][键]
export var 取一列 = 列名 => 数据 => 数据.map(a => a[列名])
