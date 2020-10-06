import '@lib/前端/通用头'
import 数据绑定 from "@lib/前端/数据绑定"

$('#app').html(html`
    <div>
        <h1>hello world1</h1>
        <button>测试</button>
        <p>{{message}}</p>
        <a href="/demo/多弹出框.html">多弹出框</a>
        <div>
            <input v-model="message" />
        </div>
    </div>
`)
数据绑定(全局数据)

全局事件.监听('测试', a => console.log(a))
