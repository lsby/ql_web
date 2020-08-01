<template>
  <Modal v-model="显示" :title="提示" :width="宽度">
    <slot>
      <button style="height:200px;width:100%;">这是模态框内容</button>
    </slot>
    <div slot="footer">
      <Button @click="关闭()">关闭</Button>
    </div>
  </Modal>
</template>

<script>
import 构造vue组件 from "@lib/前端/构造vue组件";

export default 构造vue组件({
  name: "motaikuang",
  数据: {
    提示: "提示",
    宽度: "600px",
    显示: false,
  },
  methods: {
    关闭() {
      this.显示 = false;
      this.$emit("关闭");
    },
  },
});
</script>
