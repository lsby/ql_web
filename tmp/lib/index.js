export var getDir = req => req.keys()
    .map(name => ({ [name.match(/(?<=.*\/).*(?=\..*?)/)]: req(name).default }))
    .reduce((s, a) => Object.assign(s, a))
export var 副作用 = 对象 => 函数 => { 函数(对象); return 对象; }
export var 对象数组平铺 = 数组 => 数组.reduce((s, a) => Object.assign(s, a))
