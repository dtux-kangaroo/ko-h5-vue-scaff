<template>
  <van-tabbar v-model="active">
    <van-tabbar-item icon="home-o">标签</van-tabbar-item>
    <van-tabbar-item icon="search">标签</van-tabbar-item>
    <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
    <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Tabbar, TabbarItem } from "vant";
export default defineComponent({
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
  computed: {
    showFooter() {
      return this.$route.path.split("/").length < 3;
    },
  },
});
</script>