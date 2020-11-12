<template>
  <div class="loginwrap">
    <!-- 头部 -->
    <m-header :loginShow="false" title="用户登录"></m-header>
    <!-- 底部 -->
    <m-footer></m-footer>
    <!-- 表单 -->
    <div class="formwrap">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="identifyCode"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        >
          <template #extra>
            <m-identify @updateValue="updateValue"></m-identify>
          </template>
        </van-field>
        <div style="margin: 16px">
          <van-button round block type="primary" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
      <div class="tips">
        <router-link tag="span" to="/register">立即注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import mHeader from "../components/subheader/index";
import mFooter from "../components/footer/index";
import mIdentify from "../components/identify/index";
import { Toast } from "vant";
import { post } from "../service/http";
import md5 from "js-md5";
import store from "../common/js/store";

export default {
  components: {
    mHeader,
    mFooter,
    mIdentify,
  },
  setup() {
    const state = reactive({
      username: "",
      password: "",
      identifyCode: "",
      validCode: "",
    });
    const router = useRouter();
    //
    function updateValue(val) {
      state.validCode = val;
    }
    //
    async function onSubmit() {
      if (state.identifyCode !== state.validCode) {
        Toast("验证码不正确");
        return;
      }
      let obj = {};
      obj.loginName = state.username;
      obj.passwordMd5 = md5(state.password);
      let temp = await post("/user/login", obj);
      if (temp.resultCode !== 200) {
        Toast(temp.message);
        return;
      }
      // token
      let token = temp.data;
      store.set("token", token);
      //
      Toast("登录成功");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
    //
    return {
      ...toRefs(state),
      onSubmit,
      updateValue,
    };
  },
};
</script>

<style lang="less" scoped>
@import url("../common/style/mixin.less");
.loginwrap {
  .formwrap {
    margin-top: 70px;
  }
  .tips {
    height: 40px;
    line-height: 40px;
    text-align: center;
    a {
      color: @primary;
      font-size: 14px;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    margin-bottom: 0;
  }
}
</style>