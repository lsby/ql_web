<template>
  <span>
    {{名称}}
    <input
      type="text"
      class="form-control"
      :placeholder="提示字"
      style="display: inline; width: auto;"
      @input="值=$event.target.value"
      :value="值"
    />
  </span>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "shurukuang",
  数据: {
    名称: "输入框",
    提示字: "",
    值: "",
  },
  延时构造() {},
  函数: {},
});
</script>
