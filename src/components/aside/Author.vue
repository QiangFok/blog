<template>
  <div class="panel panel-default newest">
    <div class="panel-body">
      <div class="htmleaf-container">
        <figure class="snip">
          <figcaption>
            <h2>霍强</h2>
            <p class="qin">当一个人,对自己失去信心的时候,他才是真的过时了.</p>
            <p class="qin">www.huoqiang.site</p>
          </figcaption>
          <img src="../../../static/user.jpg" alt="sample8"/>
          <div class="position">Java程序猿</div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Newest"
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  figure {

    &.snip {
      position: relative;
      overflow: hidden;
      margin: 10px auto;
      min-width: 380px;
      max-width: 480px;
      width: 100%;
      color: @colorE;

      * {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      & > img {
        width: 50%;
        border-radius: 50%;
        border: 4px solid #ffffff;
        -webkit-transition: all 0.35s ease-in-out;
        transition: all 0.35s ease-in-out;
        -webkit-transform: scale(1.7);
        transform: scale(1.7);
        position: relative;
        float: right;
        right: -15%;
        z-index: 1;
        cursor: pointer;
      }

      figcaption {
        padding: 20px 30px 20px 0;
        position: absolute;
        left: 0;
        width: 50%;

        h2 {
          font-size: @fontD;
          text-transform: uppercase;
          border-bottom: 1px solid @colorB;
          color: @colorD;
        }

        p {
          opacity: 0.8;
          line-height: 20px;
        }
      }

      .position {
        width: 100%;
        text-align: left;
        padding: 15px 30px;
        font-size: @fontE;
        opacity: 1;
        font-style: italic;
        color: #ffffff;
        background: @colorB;
        clear: both;
      }
    }
  }

  figure.snip figcaption h2,
  figure.snip figcaption p {
    margin: 0;
    text-align: left;
    padding: 10px 0;
    width: 100%;
  }

  figure.snip:hover > img,
  figure.snip.hover > img {
    right: -12%;
  }

</style>
