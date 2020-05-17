<template>
  <div>
    <transition :name="transitionName">
      <router-view class="Router"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").filter(a => a != "").length;
      const fromDepth = from.path.split("/").filter(a => a != "").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

<style scoped>
.Router {
  position: absolute;
  width: 100%;
  transition: all 0.8s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
