<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 text-center">
          <p class="copy">© 2021<span>huonly</span><a href="https://beian.miit.gov.cn">陕ICP123123123</a></p>
          <p class="footer-text">当一个人对自己失去信心的时候,他才是真的过时了</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Bottom"
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  footer {
    width: 100%;
    bottom: 0;
    background-color: @colorA;
    border-top: 1px solid @colorC;

    .copy, .footer-text {
      padding: 1em 0;
      color: #C5C6C7;
    }

    .copy {
      padding-bottom: 0;

      span {
        margin: 0 5px;
        color: @colorB;
      }

      a {
        color: #C5C6C7;
      }
    }
  }
</style>
