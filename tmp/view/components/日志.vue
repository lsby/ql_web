<template>
  <div>
    <textarea style="width: 100%;height: 300px;" :value="日志"></textarea>
  </div>
</template>

<script>
export default {
  created() {
    this.$ws监听("写日志")(str => this.$提交x修改("日志模块/添加日志")(str));
    // pointfree 形式: this.$ws监听("写日志")(this.$提交x修改("日志模块/添加日志"));
  },
  computed: {
    日志() {
      return this.$store.state.日志模块.日志;
    }
  }
};
</script>