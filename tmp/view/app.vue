<template>
  <div>
    <transition :name="transitionName">
      <router-view id="router-view" class="Router"></router-view>
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
      var st = document.getElementById("router-view").style;
      st.position = "absolute";
      st.width = "100%";
      var toDepth = to.path.split("/").filter(a => a != "").length;
      var fromDepth = from.path.split("/").filter(a => a != "").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
      st.position = "none";
    }
  }
};
</script>

<style scoped>
.Router {
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
