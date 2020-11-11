<template>
  <header
    class="headerwrap"
    :class="pageScroll ? 'headerwrap_active' : 'headerwrap'"
  >
    <router-link class="lefticon" tag="span" to="/category">
      <van-icon name="apps-o" />
    </router-link>
    <div class="headersearch">
      <van-icon name="search" class="iconsearch" />
      <span class="searchtitle">搜索想要的商品</span>
    </div>
    <router-link class="righticon" tag="span" to="/user">
      <van-icon name="user-o" />
    </router-link>
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
      window.addEventListener(
        "scroll",
        () => {
          let scrollTop = document.querySelector(".routerview").scrollTop;
          scrollTop > 150
            ? (state.pageScroll = true)
            : (state.pageScroll = false);
        },
        true
      );
    });
    //
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import "../../common/style/mixin";
.headerwrap {
  position: fixed;
  left: 0;
  top: 0;
  .wh(100%, 50px);
  display: flex;
  align-items: center;
  line-height: 50px;
  .boxSizing();
  color: #fff;
  z-index: 10000;
  .lefticon {
    width: 50px;
    .flexcenter();
    color: @primary;
    font-size: 16px;
  }
  .righticon {
    width: 50px;
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
  .headersearch {
    background: rgba(255, 255, 255, 0.9);
  }
}
</style>