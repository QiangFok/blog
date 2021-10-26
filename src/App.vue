<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        isLoading: true
      }
    },
    created() {
      let loading = document.getElementById('loading');
      if (loading != null) {
        document.body.removeChild(loading);
      }
    }
  }
</script>

<style lang="less">

  @import "styles/index";

  .qin {
    display: inline-block;
    height: 100%;
  }
</style>

<!--

  // 页面
  //TODO 相册
  //TODO 友链
  //TODO 联系



-->
