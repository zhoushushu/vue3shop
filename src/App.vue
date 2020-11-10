<template>
  <router-view class="routerview" v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide-left",
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.index > from.meta.index) {
        // 有主级到次级---向左滑动
        this.transitionName = "slide-left";
      } else if (to.meta.index < from.meta.index) {
        // 由次级到主级---向右滑动
        this.transitionName = "slide-right";
      } else {
        // 同级无过渡效果
        this.transitionName = "";
      }
    },
  },
};
</script>

<style lang="less">
html,
body,
#app {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.routerview {
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: scroll;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  height: 100%;
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  backface-visibility: hidden;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
