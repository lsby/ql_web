<template>
  <div>
    <Page
      show-total
      show-sizer
      show-elevator
      :current="当前页"
      :total="总行数"
      :page-size="每页条数"
      :page-size-opts="每页条数候选"
      @on-change="当前页=$event"
      @on-page-size-change="每页条数=$event"
    ></Page>
  </div>
</template>

<script>
import 构造vue组件 from "@lib/构造vue组件";

export default 构造vue组件({
  name: "fenye",
  数据: {
    当前页: 1,
    总行数: 100,
    每页条数: 50,
    每页条数候选: [50, 100, 150, 200]
  },
  函数: {}
});
</script>
