<template>
  <header
    class="headerwrap"
    :class="pageScroll ? 'headerwrap_active' : 'headerwrap'"
  >
    <span class="lefticon"><van-icon name="apps-o" /></span>
    <div class="headersearch">
      <van-icon name="search" class="iconsearch" />
      <span class="searchtitle">搜索想要的商品</span>
    </div>
    <span class="righticon"><van-icon name="user-o" /></span>
  </header>
</template>

<script>
import { reactive, toRefs, nextTick } from "vue";

export default {
  setup() {
    const state = reactive({
      pageScroll: false,
    });
    // 页面滚动判断
    nextTick(() => {
      window.addEventListener("scroll", () => {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        scrollTop > 100
          ? (state.headerScroll = true)
          : (state.headerScroll = false);
      });
    });
    //
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../assets/style/mixin";
.homewrap {
  .headerwrap {
    position: fixed;
    left: 0;
    top: 0;
    .wh(100%, 48px);
    display: flex;
    align-items: center;
    line-height: 48px;
    .boxSizing();
    color: #fff;
    z-index: 10000;
    background: black;
    .lefticon {
      width: 48px;
      .flexcenter();
      color: @primary;
      font-size: 16px;
    }
    .righticon {
      width: 48px;
      .flexcenter();
      color: @primary;
      font-size: 16px;
    }
    .headersearch {
      flex: 1;
      display: flex;
      align-items: center;
      height: 28px;
      background: rgba(255, 255, 255, 0.7);
      border-radius: 28px;
      .iconsearch {
        padding: 0 10px;
        font-size: 18px;
        color: #666;
      }
      .searchtitle {
        font-size: 12px;
        color: #666;
      }
    }
  }
  .headerwrap_active {
    background: @primary;
    .lefticon {
      color: #fff;
    }
    .righticon {
      color: #fff;
    }
  }
}
</style>