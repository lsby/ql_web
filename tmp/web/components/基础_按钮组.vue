<template>
  <span>
    <span v-for="obj in 描述" :key="obj.名称" style="padding: 5px;">
      <Button type="primary" @click="$emit(obj.名称)">{{obj.名称}}</Button>
    </span>
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "anniuzu",
  数据: {
    描述: [
      { 名称: "按钮1" },
      { 名称: "按钮2" },
      { 名称: "按钮3" },
      { 名称: "按钮4" },
      { 名称: "按钮5" },
      { 名称: "按钮6" },
    ],
  },
  函数: {},
});
</script>
