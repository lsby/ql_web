<template>
  <div>
    <Select v-model="值">
      <Option v-for="item in 选项" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/构造vue组件";

export default 构造vue组件({
  name: "xialakuang",
  数据: {
    选项: [
      { value: "New York", label: "New York" },
      { value: "London", label: "London" }
    ],
    值: ""
  }
});
</script>
