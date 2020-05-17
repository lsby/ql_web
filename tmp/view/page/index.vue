<template>
  <div>
    <h1>你好世界</h1>
    <b-button variant="outline-primary">
      <router-link to="/test">跳转到测试页</router-link>
    </b-button>
    <b-button variant="success" @click="跳转到测试页()">跳转到测试页</b-button>
  </div>
</template>

<script>
import rizhi from "../components/日志.vue";

export default {
  data() {
    return {};
  },
  methods: {
    跳转到测试页() {
      this.$router.push("test");
    }
  },
  components: {
    rizhi
  }
};
</script>