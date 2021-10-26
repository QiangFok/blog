<template>
  <div class="books">

    <ul id="menu">
      <li>
        <router-link to="/home" class="to-home">返回首页</router-link>
      </li>
      <li class="active" data-menuanchor="page1">
        <a href="#page1">必读</a>
      </li>
      <li data-menuanchor="page2">
        <a href="#page2">前端</a>
      </li>
      <li data-menuanchor="page3">
        <a href="#page3">Java</a>
      </li>
      <li data-menuanchor="page4">
        <a href="#page4">数据库</a>
      </li>
      <li data-menuanchor="page5">
        <a href="#page5">运维</a>
      </li>
      <li data-menuanchor="page6">
        <a href="#page6">其他</a>
      </li>
    </ul>

    <full-page :options="options" ref="fullpage">
      <div class="section" v-for="(item,i) in 6" :key="i">
        <div class="book-list">
          <div class="row">
            <div class="col-md-12 col-lg-12">
              <h2 class="book-title">图解HTTP </h2>
              <div class="book-wrapper w1440">
                <article class="book-item" v-for="(item,index) in 12" :key="index">
                  <el-popover placement="right-start"
                              visible-arrow="true"
                              title="标题"
                              :width="200"
                              trigger="hover"
                              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                              :close-delay="20"
                  >
                    <div slot="reference">
                      <img src="https://www.wenyuanblog.com/medias/books/javascript-gao-ji-cheng-xu-she-ji.jpg" alt="">
                      <a href="" class="book-name">JavaScript高级程序设计</a>
                      <p class="book-desc">前端开发者必读的红宝书，虽少数内容过时，但系统全面。只读一遍难以消化</p>
                    </div>
                  </el-popover>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>

  import Navigation from "../components/navigation/Navigation";
  import Article from "./article";

  export default {
    name: "Books",
    data() {
      return {
        options: {
          licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
          //页面滚动速度
          scrollingSpeed: 700,
          // 横向幻灯片导航的位置，可以为top或者bottom
          slidesNavPosition: 'bottom',
          // 是否显示横向幻灯片的导航
          slidesNavigation: true,
          //每一页幻灯片的内容是否垂直居中，默认为true
          verticalCentered: true,
          //绑定菜单，设定相关属性和anchors的值对应后，菜单可以控制幻灯片滚动
          menu: '#menu',
          //定义锚链接，用户可以快速打开定位到某一页面；不需要加"#"，不要和页面中任意的id和name相同
          anchors: ["page1", "page2", "page3", "page4", "page5", "page6"],
          //是否锁定锚链接
          lockAnchors: false,
          //横向slide幻灯片是否循环滚动
          loopHorizontal: false,
          //是否循环滚动，不会出现跳动，效果很平滑
          continuousVertical: false,
          //设为false，则通过锚链接定位到某个页面不再有动画效果
          animateAnchor: true,
          // 则是一滚动就是一整屏
          scrollBar: false,
          //为每个section设置背景色
          // onLeave: this.onLeave, //滚动前的回调函数，
          // afterLoad: this.afterLoad, //滚动到某一屏后的回调函数
          // afterRender: this.afterRender // 页面初始化完成后的回调函数
        }
      }
    },
    methods: {
      next() {
        // 向下滚动一页
        this.$refs.fullpage.api.moveSectionDown();
      },
    },
    components: {
      Article,
      Navigation,
    }
  }
</script>

<style lang="less" scoped>

  @import "https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/3.1.2/fullpage.css";
  @import "../styles/config";

  .w1440 {
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
  }

  .books {
    height: 100%;

    #menu {
      position: fixed;
      bottom: 20px;
      left: 50%;
      z-index: 70;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;

      li {
        margin-right: 10px;
        float: left;

        a {
          display: block;
          padding: 10px 20px;
          background-color: @colorA;
          color: @colorB;
          text-align: center;
          text-decoration: none;

          &.to-home {
            background-color: @colorF;
            color: @colorE;
            margin-right: 20px;
          }
        }

        &.active {
          a {
            color: @colorF;
            background-color: @colorB;
          }
        }
      }

    }

    .book-list {
      padding: 0;
      background-image: url("https://www.commoninja.com/static/bg-img-1-90c9f888e99b0e04212187ae5baa7176.png");
      background-size: cover;
      height: 100%;

      .bg-img {
        position: absolute;
      }

      .book-title {
        text-align: center;
        margin-bottom: 25px;
        color: @colorC;
      }

      .book-wrapper {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        justify-content: flex-start;
        padding-bottom: 50px;

        & > * {
          margin: 0 24px 18px 0;
        }

        .book-item {
          background-color: #1f2024;
          border-radius: 12px;
          box-shadow: 0 40px 60px rgba(0, 0, 0, .7);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px;
          max-width: 180px;
          box-sizing: content-box;

          &:nth-child(n+5) {
            /*margin-right: 0;*/
          }

          .book-name {
            margin: 10px 0;
            color: @colorC;
            font-size: @fontE;
            transition: all .2s ease-in;

            &:hover {
              color: @colorB;
            }
          }

          .book-desc {
            color: @colorG;
            font-size: 12px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .books .book-list .book-wrapper {
      justify-content: center;

      .book-item {
        margin-right: 0;
      }
    }
  }

  @media (min-width: 750px) {

    #menu {
      width: 924px;
      justify-content: center !important;
    }

    .books .book-list .book-wrapper {
      justify-content: center;
    }

    .books .book-list .book-wrapper .book-item:nth-child(3n) {
      margin-right: 0;
    }
  }

  @media (min-width: 992px) {

    #menu {
      width: 924px;
      justify-content: center !important;
    }

    .books .book-list .book-wrapper {
      justify-content: center;
    }

    .books .book-list .book-wrapper .book-item:nth-child(4n) {
      margin-right: 0;
    }
  }

</style>
