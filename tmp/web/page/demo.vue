<template>
  <div>
    <div>这是一个测试数据 你可以尝试修改它 或点击按钮 观察它是如何变化的</div>
    <div>
      <input :value="$Vuex.数据.测试数据" @input="$Vuex.突变(['测试数据'], $event.target.value)" />
    </div>
    <div>这是日志 你可以观察它如何被写入的</div>
    <div>
      <textarea style="width:100%; height:300px;" :value="日志.join('\n')"></textarea>
    </div>
    <div>
      <button @click="post事件()">点击触发post事件</button>
      <button @click="ws事件()">点击触发ws事件</button>
    </div>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  数据: {
    日志: [],
  },
  构造函数() {
    this.$ws.监听("写日志")((data) => this.日志.push(data));
  },
  函数: {
    async post事件() {
      var 返回数据 = await this.$post("/api/test")({});
      console.log(返回数据);
    },
    async ws事件() {
      this.$ws.提交("ws事件")("ws参数");
    },
  },
});
</script>
