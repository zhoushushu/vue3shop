<template>
  <div class="homewrap">
    <!-- 头部 -->
    <m-header></m-header>
    <!-- 底部导航 -->
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import { reactive, toRefs, nextTick } from "vue";
import mHeader from "../components/header/index";
import bottomNav from "../components/bottomnav/index";

export default {
  components: {
    mHeader,
    bottomNav,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.homewrap {
}
</style>
