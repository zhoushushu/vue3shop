<template>
  <div>
    <!-- 头部 -->
    <m-header title="分类向导"></m-header>
    <!-- 底部导航 -->
    <bottom-nav :active="tabActive"></bottom-nav>
    <!-- 分类 -->
    <div class="categorywrap">
      <!-- 左侧分类 -->
      <div class="leftwrap">
        <van-sidebar v-model="activeKey" @change="onChange">
          <template v-for="item in categoryData" :key="item.categoryId">
            <van-sidebar-item :title="item.categoryName" />
          </template>
        </van-sidebar>
      </div>
      <!-- 右侧分类 -->
      <div class="rightwrap">
        <template
          v-for="item in categoryObj.secondLevelCategoryVOS"
          :key="item.categoryId"
        >
          <span class="title">{{ item.categoryName }}</span>
          <span class="itemwrap">
            <template
              v-for="subitem in item.thirdLevelCategoryVOS"
              :key="subitem.categoryId"
            >
              <span class="item">
                <img
                  src="http://s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png"
                />
                <span class="itemdesc">{{ subitem.categoryName }}</span>
              </span>
            </template>
          </span>
        </template>
        <!-- 底部 -->
        <m-footer></m-footer>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import mHeader from "../components/subheader/index";
import mFooter from "../components/footer/index";
import bottomNav from "../components/bottomnav/index";
//
import { get } from "../service/http";

export default {
  components: {
    mHeader,
    mFooter,
    bottomNav,
  },
  setup() {
    const state = reactive({
      tabActive: 1,
      activeKey: 0,
      categoryData: [],
      categoryObj: {},
    });
    //
    onMounted(async () => {
      let data = await get("/categories");
      state.categoryData = data.data;
      state.categoryObj = data.data[0];
    });
    //
    function onChange(val) {
      state.categoryObj = state.categoryData[val];
    }
    //
    return {
      ...toRefs(state),
      onChange,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../common/style/mixin.less");

.categorywrap {
  position: absolute;
  top: 48px;
  bottom: 50px;
  left: 0;
  right: 0;
  overflow: hidden;
  display: flex;
  .leftwrap {
    .van-sidebar {
      width: 116px;
    }
    .van-sidebar-item--select::before {
      height: 60px;
    }
    width: 116px;
    background: #f7f8fa;
  }
  .rightwrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: auto;
    .footer {
      margin-bottom: 0;
    }
    .title {
      height: 60px;
      line-height: 60px;
      text-align: center;
      color: #233;
      font-size: 14px;
      font-weight: 500;
    }
    .itemwrap {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .item {
        box-sizing: border-box;
        width: 33.33%;
        .flexcenter();
        flex-direction: column;
        padding: 10px 0;
        img {
          display: block;
          width: 40px;
          margin: 0 auto;
        }
        .itemdesc {
          text-align: center;
          font-size: 14px;
          padding: 10px 0;
          color: #222333;
        }
      }
    }
  }
}
</style>