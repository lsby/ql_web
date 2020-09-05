<template>
  <div class="btn-group" role="group">
    <button
      @click="$emit(项.名称)"
      type="button"
      class="btn btn-secondary"
      v-for="项 in 数据"
      :key="项.名称"
    >{{项.名称}}</button>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "anniuzu",
  数据: {
    数据: [{ 名称: "左" }, { 名称: "中" }, { 名称: "右" }],
  },
  延时构造() {},
  函数: {},
});
</script>
