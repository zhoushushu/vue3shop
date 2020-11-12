<template>
  <div class="cartwrap">cartwrap</div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import store from "../common/js/store";
import { Toast } from "vant";

export default {
  setup() {
    const router = useRouter();
    //
    onMounted(() => {
      if (!store.get("token") || store.get("token") === "") {
        Toast("尚未登录");
        setTimeout(() => {
          router.replace("/login");
        }, 1000);
      }
    });
  },
};
</script>

<style lang="less" scoped>
.cartwrap {
}
</style>