<template>
  <div class="userwrap">
    <!-- 头部 -->
    <m-header :loginShow="false" title="我的"></m-header>
    <!-- 底部导航 -->
    <bottom-nav :active="tabActive"></bottom-nav>
    <!-- 个人信息 -->
    <div class="userinfo">
      <div class="info">
        <img src="//s.yezgea02.com/1604040746310/aaaddd.png" />
        <div class="userdesc">
          <span>昵称：{{ user.nickName }}</span>
          <span>登录名：{{ user.loginName }}</span>
          <span class="name">个性签名：{{ user.introduceSign }}</span>
        </div>
      </div>
    </div>
    <!-- 功能 -->
    <div class="funcwrap">
      <van-cell-group>
        <van-cell title="帐号管理" is-link to="index" />
        <van-cell title="我的订单" is-link to="index" />
        <van-cell title="地址管理" is-link to="index" />
        <van-cell title="关于我们" is-link to="/about" />
      </van-cell-group>
    </div>
    <div class="buttonfunc" @click="logout">
      <van-button round type="primary" block>登出商城</van-button>
    </div>
    <!-- 底部 -->
    <m-footer></m-footer>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import store from "../common/js/store";
import { Toast, Dialog } from "vant";
import mHeader from "../components/subheader/index";
import mFooter from "../components/footer/index";
import bottomNav from "../components/bottomnav/index";
import { get } from "../service/http";

export default {
  components: {
    mHeader,
    mFooter,
    bottomNav,
  },
  setup() {
    const state = reactive({
      tabActive: 3,
      user: {},
    });
    const router = useRouter();
    //
    onMounted(async () => {
      if (!store.get("token") || store.get("token") === "") {
        store.clearAll();
        Toast("尚未登录");
        router.replace("/login");
        return;
      }
      //
      let temp = await get("/user/info");
      if (temp.resultCode !== 200) {
        store.clearAll();
        Toast(temp.message);
        router.replace("/login");
        return;
      }
      //
      state.user = temp.data;
    });
    //
    function logout() {
      Dialog.confirm({
        title: "",
        message: "登出商城？",
      })
        .then(() => {
          store.clearAll();
          Toast("登出成功");
          setTimeout(() => {
            router.replace("/home");
          }, 1000);
        })
        .catch(() => {
          // on cancel
        });
    }
    //
    return {
      ...toRefs(state),
      logout,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../common/style/mixin.less");
.userwrap {
  display: flex;
  flex-direction: column;
  .userinfo {
    height: 115px;
    background: @primary;
    box-shadow: 0 2px 5px @primary;
    border-radius: 6px;
    margin: 70px 10px 0 10px;
    .info {
      position: relative;
      display: flex;
      width: 100%;
      height: 100%;
      padding: 25px 20px;
      .boxSizing();
      img {
        .wh(60px, 60px);
        border-radius: 50%;
        margin-top: 4px;
      }
      .userdesc {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #fff;
        span {
          color: #fff;
          font-size: 14px;
          padding: 2px 0;
        }
      }
      .account-setting {
        position: absolute;
        top: 10px;
        right: 20px;
        font-size: 13px;
        color: #fff;
        .van-icon-setting-o {
          font-size: 16px;
          vertical-align: -3px;
          margin-right: 4px;
        }
      }
    }
  }
  .funcwrap {
    margin-top: 20px;
  }
  .buttonfunc {
    margin-top: 20px;
    padding: 30px;
  }
  .footer {
    position: absolute;
    bottom: 50px;
    left: 0;
    width: 100vw;
    margin-bottom: 0;
  }
}
</style>