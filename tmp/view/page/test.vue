<template>
  <div>
    <b-button variant="primary" @click="ws事件()">ws事件</b-button>
    <b-button variant="success" @click="post事件()">post事件</b-button>
    <b-button variant="danger" @click="返回()">返回</b-button>
    <rizhi></rizhi>
  </div>
</template>

<script>
import rizhi from "../components/日志.vue";

export default {
  data() {
    return {};
  },
  methods: {
    ws事件() {
      this.$ws提交("ws事件")("p-i-n-g");
    },
    async post事件() {
      var r = await this.$post("/api/test")({});
      console.log(r);
    },
    返回() {
      this.$router.back();
    }
  },
  components: {
    rizhi
  }
};
</script>