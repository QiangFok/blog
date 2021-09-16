<template>
  <div>
    <Navigation></Navigation>
    <router-view></router-view>
    <!-- 底部footer组件 -->
    <Bottom></Bottom>
    <toTop></toTop>
  </div>
</template>

<script>

  import '../assets/js/qin.js'

  import Navigation from "../components/navigation/Navigation";
  import Bottom from "../components/footer/Bottom";
  import ToTop from "../components/public/ToTop";

  export default {
    name: 'index',
    data() {
      return {}
    },
    mounted() {
      $(".qin").qin({
        offset: 35, // default , 最大偏移量
        duration: 700, // default , 晃动时间
        recline: 0.2 // default , 每像素偏移量，越小“琴弦绷的越紧”
      });
    },
    components: {
      Bottom,
      ToTop,
      Navigation,
    }
  }
</script>

<style lang="less" scoped>
</style>
