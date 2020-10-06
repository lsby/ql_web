import '@lib/前端/通用头'
import 数据绑定 from "@lib/前端/数据绑定"

setTimeout(() => {
    $('#app').append(
        <div>
            <h1>hello world1</h1>
            <p>||message||</p>
            <a href="/demo/多弹出框.html">多弹出框</a>
            <div>
                <input v-model="message" />
            </div>
        </div>
    )
    数据绑定(window.全局数据)
}, 0);

