<template>
  <div class="homewrap">
    <!-- 头部 -->
    <m-header></m-header>
  </div>
</template>

<script>
import { reactive, toRefs, nextTick } from "vue";
import mHeader from "../components/header/index";

export default {
  components: {
    mHeader,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.homewrap {
}
</style>
