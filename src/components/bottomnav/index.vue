<template>
  <div class="bottomnav">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      active: 0,
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/mixin";

.bottomnav {
  position: fixed;
  left: 0;
  bottom: 0;
  .wh(100%, 48px);
  .van-tabbar-item--active {
    color: red;
  }
}
</style>