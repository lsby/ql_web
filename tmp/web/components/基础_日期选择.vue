<template>
  <div>
    <DatePicker format="yyyy-MM-dd" type="date" placeholder="选择日期" style="width: 100%" v-model="值"></DatePicker>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/构造vue组件";

export default 构造vue组件({
  name: "riqixuanze",
  数据: {
    值: ""
  }
});
</script>
