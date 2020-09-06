<template>
  <span>
    {{名称}}
    <select style="display: inline; width: auto;" @change="值=$event.target.value" :value="值">
      <option v-for="项 in 选项" :key="项.值" :value="项.值">{{项.名称}}</option>
    </select>
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "xialakuang",
  数据: {
    名称: "下拉框",
    选项: [
      { 名称: "请选择", 值: "" },
      { 名称: "选项1", 值: "a" },
      { 名称: "选项2", 值: "b" },
    ],
    值: "",
  },
  延时构造() {},
  函数: {},
});
</script>
