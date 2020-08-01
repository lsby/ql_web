import * as R from 'ramda'
import lodash from 'lodash'

var r = {
    IO_设置对象路径值: (路径, 值, 对象, 赋值方法 = (对象, 键, 值) => 对象[键] = 值) => {
        if (r.判断路径值相等(路径, 值, 对象)) return
        if (路径.length == 0) return
        if (路径.length == 1) return 赋值方法(对象, 路径[0], 值)

        var 键 = R.head(路径)
        if (对象[键] == null) 赋值方法(对象, 键, {})
        IO_设置对象路径值(对象[键])(R.tail(路径))(值)
    },
    判断路径值相等: (路径, 值, 对象) => {
        if (R.hasPath(路径, 对象) && lodash.isEqual(R.path(路径, 对象), 值)) return true
        return false
    }
}

export default r
