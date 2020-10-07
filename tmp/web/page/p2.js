import '@lib/前端/通用头'
import 数据绑定 from "@lib/前端/数据绑定"

$('#app').html(html`
    <div>
        <h1>页面2</h1>
        <button id="anniu">测试</button>
        <p>{{message}}</p>
        <div>
            <input v-model="message" />
        </div>
    </div>
`)

$(() => {
    $('#anniu').click(function () {
        全局事件.发送('测试', '你好')
    })
})

数据绑定(全局数据)
