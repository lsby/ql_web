export default {
    是对象原型: 参数 => 参数 instanceof Object,
    是原型: 期待原型 => 参数 => 参数 instanceof 期待原型,
    计算原型: 参数 => Object.prototype.toString.call(参数),
    原型是布尔: 参数 => 计算原型(参数) == '[object Boolean]',
    原型是数字: 参数 => 计算原型(参数) == '[object Number]',
    原型是字符串: 参数 => 计算原型(参数) == '[object String]',
    原型是对象: 参数 => 计算原型(参数) == '[object Object]',
    原型是函数: 参数 => 计算原型(参数) == '[object Function]',
    原型是数组: 参数 => 计算原型(参数) == '[object Array]',
    原型是错误: 参数 => 计算原型(参数) == '[object Error]',
    原型是Promise: 参数 => 计算原型(参数) == '[object Promise]',
}
