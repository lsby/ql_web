import '@lib/前端/通用头'
import 数据绑定 from "@lib/前端/数据绑定"

$('#app').html(html`
    <div>
        <h1>hello world1</h1>
        <button @click="fun()">测试</button>
        <p>{{message}}</p>
        <a href="/demo/多弹出框.html">多弹出框</a>
        <div>
            <input v-model="message" />
        </div>
    </div>
`)

数据绑定(全局数据, {
    fun() {
        console.log(123)
        全局数据.message = 456
        全局事件.发送('测试', '你好')
    }
})
