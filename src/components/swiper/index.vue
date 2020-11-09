<template>
  <van-swipe class="swiperwrap" :autoplay="3000" indicator-color="#F0250F">
    <van-swipe-item v-for="(item, index) in images" :key="index">
      <img :src="item" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.swiperwrap {
  img {
    width: 100%;
    height: 100%;
  }
}
</style>