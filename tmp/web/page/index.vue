<template>
  <div>
    <button @click="$路由.跳转('demo')">{{$Vuex.数据.标题}}</button>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  数据: {},
  构造函数() {},
});
</script>
