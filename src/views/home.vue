<template>
  <base-layout>
    <template #aside>
      <!--作者信息-->
      <author></author>

      <!--热门-->
      <panel-list title="推荐">
        <template #list>
          <li class="list-group-item" v-for="(item,i) in 10" :key="i"><a href="" class="qin">Vue 实现了一套内容分发的 API</a></li>
        </template>
      </panel-list>

      <!--分类-->
      <classification classification-title="分类"></classification>

      <!--归档-->
      <panel-list title="归档">
        <template #list>
          <li class="list-group-item" v-for="(item,i) in 4" :key="i"><a href="" class="qin">Vue 实现了一套内容分发的 API</a></li>
        </template>
      </panel-list>

      <!--标签云-->
      <label-cloud></label-cloud>

      <!--相册-->
      <photo></photo>

      <!--书籍-->
      <panel-list title="书籍">
        <template #list>
          <li class="list-group-item" v-for="(item,i) in 4" :key="i"><a href="" class="qin">Vue 实现了一套内容分发的 API</a></li>
        </template>
      </panel-list>

      <!--友情链接-->
      <links></links>
    </template>

    <template #main>

      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide
          v-for="(item,i) in bannerPhoto"
          :key="i"
          :style="{backgroundImage: 'url('+item+')'}"
        >
        </swiper-slide>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <!--
              <div class="swiper-pagination" slot="pagination"></div>
        -->
      </swiper>
      <!-- <div class="ad-top clearfix">
         <ul class="">
           <li>
             <a href="">
               <img src="../../static/ad-top/1.jpg" alt="">
               <div class="mask">
                 <p>flex-direction</p>
               </div>
             </a>
           </li>
           <li>
             <a href="">
               <img src="../../static/ad-top/2.jpg" alt="">
               <div class="mask">
                 <p>flex-direction</p>
               </div>
             </a>
           </li>
           <li>
             <a href="">
               <img src="../../static/ad-top/3.jpg" alt="">
               <div class="mask">
                 <p>flex-direction</p>
               </div>
             </a>
           </li>
         </ul>
       </div>
   -->
      <articleList :coms="coms"></articleList>

    </template>
  </base-layout>
</template>

<script>

  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.min.css'
  import 'swiper/swiper-bundle.min.js'
  import Author from "../components/aside/Author";
  import PanelList from "../components/aside/PanelList";
  import Classification from "../components/aside/Classification";
  import LabelCloud from "../components/aside/LabelCloud";
  import Photo from "../components/aside/Photo";
  import Links from "../components/aside/Links";
  import ArticleList from "../components/articleList/ArticleList";
  import BaseLayout from "../components/public/BaseLayout";

  export default {
    name: 'index',
    data() {
      return {
        //swiper 初始化
        swiperOption: {
          grabCursor: true,
          speed: 800,
          loop: true,
          autoplay: {
            delay: 5000
          },
          effect: 'fade',
          fadeEffect: {
            crossFade: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination'
          }
        },
        coms: [
          {
            tag: 'web',
            title: 'vue 父组件传值给子组件渲染',
            desc: '前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端',
            date: new Date(),
            count: 80
          },
          {
            tag: 'web',
            title: 'vue 父组件传值给子组件渲染',
            desc: '前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端前端',
            date: new Date(),
            count: 80
          }
        ],
        bannerPhoto: ["/static/banner/1.jpg", "/static/banner/2.jpg", "/static/banner/3.jpg", "/static/banner/4.jpg"],
        isFixed: ''
      }
    },
    mounted() {
      let _this = this;
      window.addEventListener('scroll', () => {
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        console.log(top);
        if (top > 2060) {
          _this.isFixed = true;
        } else {
          _this.isFixed = false;
        }
      })
    },
    components: {
      BaseLayout,
      swiper,
      swiperSlide,
      Author,
      PanelList,
      Classification,
      LabelCloud,
      Photo,
      Links,
      ArticleList,
    }
  }
</script>

<style lang="less" scoped>

  @import "../styles/config";

  .swiper-container {
    margin-bottom: 20px;
  }

  .swiper-slide {
    height: 550px;
    background-color: #C5C6C7;
    color: @colorB;
    text-align: left;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    background-size: cover;
    background-position-y: 42%;
    font-size: 16px;
  }

  .swiper-button-next, .swiper-button-prev {
    color: @colorB;
  }

  /*  .ad-top {
      margin-bottom: 20px;
      border-radius: @border-radius-base;
      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
      height: 240px;

      ul {
        display: flex;
        height: 100%;

        li {
          float: left;
          margin-right: 20px;
          position: relative;
          border-radius: @border-radius-base;

          &:last-child {
            margin: 0;
          }

          a {
            display: inline-block;
            width: 100%;
            height: 100%;
          }

          img {
            border-radius: @border-radius-base;
          }

          .mask {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 0;
            background-color: rgba(0, 0, 0, 0.4);
            border-radius: @border-radius-base;
            transition: .2s ease-in;
            opacity: 0;

            p {
              padding-top: 24%;
              color: @colorC;
              text-align: center;
              font-size: @fontE;
            }
          }

          &:hover .mask {
            height: 100%;
            opacity: 1;
          }
        }
      }
    }*/

  .fixed {
    position: fixed;
    top: 85px;
    width: 361px;
    z-index: 99;
    max-width: 361px;
    margin-top: 0;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
  }

  @keyframes bounceInDown {
    0%, 60%, 75%, 90%, to {
      transition-timing-function: cubic-bezier(.215, .61, .355, 1)
    }
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0)
    }
    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0)
    }
    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0)
    }
    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0)
    }
    to {
      -webkit-transform: none;
      transform: none
    }
  }


  @media screen and (max-width: 375px) {
    .container-fluid {
      padding: 85px 15px 15px;
    }
  }

  /*iphone 6/7/8 Plus*/
  @media screen and (max-width: 414px) {
    .container-fluid {
      padding: 85px 15px 15px;
    }
  }

  /*iPad*/
  @media screen and (max-width: 768px) {
    .container-fluid {
      padding: 85px 15px 15px;
    }
  }

  /*iPad Pro*/
  @media screen and (max-width: 1024px) {
    .container-fluid {
      padding: 85px 15px 15px;
    }
  }

</style>