<template>
  <div class="homewrap">
    <!-- 头部 -->
    <m-header></m-header>
    <!-- 底部导航 -->
    <bottom-nav :active="tabActive"></bottom-nav>
    <!-- 轮播图 -->
    <m-swiper :swiperData="swiperImages"></m-swiper>
    <!-- 导航 -->
    <div class="navlist">
      <div v-for="item in navList" :key="item.id">
        <img :src="item.url" />
        <span class="navtitle">{{ item.title }}</span>
      </div>
    </div>
    <!-- 新品上线 -->
    <m-goods title="新品上线" :goodData="newGoods"></m-goods>
    <!-- 热门商品 -->
    <m-goods title="热门商品" :goodData="hotGoods"></m-goods>
    <!-- 最新推荐 -->
    <m-goods title="最新推荐" :goodData="recommendGoods"></m-goods>
    <!-- 底部 -->
    <m-footer></m-footer>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import mHeader from "../components/header/index";
import bottomNav from "../components/bottomnav/index";
import mSwiper from "../components/swiper/index";
import mGoods from "../components/goods/index";
import mFooter from "../components/footer/index";
//
import { get } from "../service/http";

export default {
  components: {
    mHeader,
    bottomNav,
    mSwiper,
    mGoods,
    mFooter,
  },
  setup() {
    const state = reactive({
      tabActive: 0,
      swiperImages: [],
      navList: [
        {
          title: "新蜂超市",
          url: "//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png",
          id: 100001,
        },
        {
          title: "新蜂服饰",
          url: "//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png",
          id: 100003,
        },
        {
          title: "全球购",
          url:
            "//s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png",
          id: 100002,
        },
        {
          title: "新蜂生鲜",
          url: "//s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png",
          id: 100004,
        },
        {
          title: "新蜂到家",
          url: "//s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png",
          id: 100005,
        },
        {
          title: "充值缴费",
          url: "//s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png",
          id: 100006,
        },
        {
          title: "9.9元拼",
          url: "//s.yezgea02.com/1604041127880/9.9%402x.png",
          id: 100007,
        },
        {
          title: "领劵",
          url: "//s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png",
          id: 100008,
        },
        {
          title: "省钱",
          url: "//s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png",
          id: 100009,
        },
        {
          title: "全部",
          url: "//s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png",
          id: 100010,
        },
      ],
      newGoods: [],
      hotGoods: [],
      recommendGoods: [],
    });
    //
    onMounted(async () => {
      let data = await get("/index-infos");
      state.swiperImages = data.data.carousels;
      state.newGoods = data.data.newGoodses;
      state.hotGoods = data.data.hotGoodses;
      state.recommendGoods = data.data.recommendGoodses;
    });
    //
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../common/style/mixin.less");

.homewrap {
  .navlist {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 13px;
    div {
      display: flex;
      flex-direction: column;
      width: 20%;
      .flexcenter();
      img {
        .wh(36px, 36px);
        margin: 13px auto 8px auto;
      }
      .navtitle {
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>
