<template>
  <div class="container-fluid">
    <div class="">
      <div class="row">
        <header class="title">
          <slot name="title"></slot>
        </header>
        <slot name="left"></slot>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutLayout"
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .container-fluid {
    background-color: @colorA;
    padding: 40px 2% 0;
    position: relative;
  }


  .title {
    padding: 0 0 100px;
    text-align: center;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;

    h2 {
      font-size: 44px;
      line-height: 49px;
      font-style: normal;
      font-weight: 700;
      color: @colorD;

      em {
        font-style: normal;
        color: @colorB;
        padding: 0 2px;
      }
    }
  }

  @media screen and (max-width: 520px) {
    .title {
      padding-bottom: 40px !important;
    }
  }
</style>
