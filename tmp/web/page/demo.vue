<template>
  <div>
    <div>这是日志 你可以观察它如何被写入的</div>
    <div>
      <textarea style="width:100%; height:300px;" :value="$Vuex.数据.日志.join('\n')"></textarea>
    </div>
    <div>
      <button @click="post事件()">点击触发post事件</button>
    </div>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  数据: {
    日志: [],
  },
  构造函数() {},
  函数: {
    async post事件() {
      var 返回数据 = await this.$post("/api/test", {});
      this.$Vuex.突变(["日志"], [...this.$Vuex.数据.日志, 返回数据]);
    },
  },
});
</script>
