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
  // 组件类别
  //TODO 文章征文修改为 左边为文章导航信息，右边正文

  // 页面
  //TODO 网站导航，搞成类似酷站导航的风格，主要用于快速进入常去站点，类似https://www.coolzhanweb.com/

  //TODO 响应式适配

  //TODO 全站字体，字号，颜色，背景色统一在@/style/config.less
  //TODO 抽取全局公共样式到@/style/mixins.less中

  //TODO axios配置，API配置

-->
