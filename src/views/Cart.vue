<template>
  <div class="cartwrap">
    <!-- 头部 -->
    <m-header :loginShow="false" title="购物车"></m-header>
    <!-- 底部导航 -->
    <bottom-nav :active="tabActive"></bottom-nav>
    <!-- 内容 -->
    <div class="detailcontent">
      <!-- 购物车物品 -->
      <van-checkbox-group v-model="cartSelect">
        <van-swipe-cell v-for="(item, index) in list" :key="index">
          <div class="gooditem">
            <van-checkbox :name="item.cartItemId" checked-color="#f0250f" />
            <div class="goodimg">
              <img :src="filterImg(item.goodsCoverImg)" />
            </div>
            <div class="gooddesc">
              <div class="goodtitle">
                <span>{{ item.goodsName }}</span>
                <span>x{{ item.goodsCount }}</span>
              </div>
              <div class="goodbtn">
                <div class="price">¥{{ item.sellingPrice }}</div>
                <van-stepper
                  disable-input
                  integer
                  :min="1"
                  :max="5"
                  :v-value="item.goodsCount"
                  :name="index"
                  @change="onChange"
                  theme="round"
                  button-size="22"
                />
              </div>
            </div>
          </div>
          <template #right>
            <van-button icon="delete" type="primary" class="delete-button" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
      <!-- 提交购物车 -->
      <van-submit-bar
        :disabled="!cartSelect.length"
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox
          checked-color="#f0250f"
          @change="selectAll"
          v-model="checked"
          >全选</van-checkbox
        >
        <template v-if="!cartSelect.length" #tip> 尚未选择物品 </template>
      </van-submit-bar>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import store from "../common/js/store";
import { Toast } from "vant";
import mHeader from "../components/subheader/index";
import bottomNav from "../components/bottomnav/index";

export default {
  components: {
    mHeader,
    bottomNav,
  },
  setup() {
    const state = reactive({
      tabActive: 2,
      checked: false,
      totalPrice: 0,
      cartSelect: [],
      list: [
        {
          cartItemId: 2450,
          goodsCount: 1,
          goodsCoverImg:
            "https://newbee-mall.oss-cn-beijing.aliyuncs.com/images/mate40pro%2B.png",
          goodsId: 10909,
          goodsName: "HUAWEI Mate 40 Pro+ 5G 全网通 1...",
          sellingPrice: 7988,
        },
      ],
    });
    // const router = useRouter();
    // //
    // onMounted(() => {
    //   if (!store.get("token") || store.get("token") === "") {
    //     Toast("尚未登录");
    //     setTimeout(() => {
    //       router.replace("/login");
    //     }, 1000);
    //   }
    // });
    function filterImg(url) {
      if (url && url.startsWith("http")) {
        return url;
      } else {
        url = `http://47.99.134.126:28019${url}`;
        return url;
      }
    }
    //
    function onChange(value, detail) {
      if (value > 5) {
        Toast.fail("超出单个商品的最大购买数量");
        return;
      }
      if (value < 1) {
        Toast.fail("商品不得小于0");
        return;
      }
      state.list[detail.name].goodsCount = value;
    }
    //
    function selectAll(val) {
      if (val) {
        state.totalPrice = 1;
      } else {
        state.totalPrice = 0;
      }
    }
    //
    function onSubmit() {
      console.log(state.cartSelect);
    }
    //
    return {
      ...toRefs(state),
      filterImg,
      onChange,
      onSubmit,
      selectAll,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../common/style/mixin.less");

.cartwrap {
  .detailcontent {
    padding: 70px 0 0 10px;
    .gooditem {
      display: flex;
      .goodimg {
        img {
          .wh(100px, 100px);
        }
      }
      .gooddesc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
        .goodtitle {
          display: flex;
          justify-content: space-between;
        }
        .goodbtn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: red;
            line-height: 28px;
          }
          .van-icon-delete {
            font-size: 20px;
            margin-top: 4px;
          }
        }
      }
    }
    .delete-button {
      height: 100%;
    }
    .van-submit-bar {
      bottom: 50px;
    }
  }
}
</style>