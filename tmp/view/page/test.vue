<template>
  <div>
    <h1>{{$数据.标题}}</h1>
    <b-button variant="primary" @click="ws事件()">ws事件</b-button>
    <b-button variant="success" @click="post事件()">post事件</b-button>
    <b-button variant="danger" @click="$router.back()">返回</b-button>
    <rizhi></rizhi>
  </div>
</template>

<script>
import rizhi from "../components/日志.vue";

export default {
  created() {
    this.$x.更新数据("/")({ 标题: "这是标题" });
  },
  methods: {
    ws事件() {
      this.$ws.提交("ws事件")("p-i-n-g");
    },
    async post事件() {
      var r = await this.$post("/api/test")({});
      console.log(r);
    }
  },
  mounted() {
    this.$ws.监听("写日志")(this.$x.提交更新("日志模块/添加日志"));
  },
  beforeDestroy() {
    this.$ws.停止监听("写日志");
  },
  components: {
    rizhi
  }
};
</script>