<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid inedxHeader">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">
          <h1 class="text-center">
            <logo></logo>
          </h1>
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-left">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/category">分类</router-link>
          </li>
          <!--          <li>
                      <router-link to="/java">Java</router-link>
                    </li>-->
          <li>
            <router-link to="/file">归档</router-link>
          </li>
          <li>
            <router-link to="/tag">标签</router-link>
          </li>
          <li>
            <router-link to="/resources">资源</router-link>
          </li>
          <li>
            <router-link to="/books">书籍</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
          <li>
            <router-link to="/nav">网站导航</router-link>
          </li>
        </ul>
        <div class="nav navbar-nav navbar-right">
          <div class="navbar-search">
            <div class="search-wrapper" :class="[isSearchActive ? searchActiveClass : '']">
              <div class="input-holder">
                <input type="text" class="search-input" placeholder="该搜索什么？"/>
                <button class="search-icon" @click="searchToggle()">
                  <span></span>
                </button>
              </div>
              <span class="close" @click="searchToggle()"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

  import Logo from "../public/Logo";

  export default {
    name: "Navigation",
    data() {
      return {
        isSearchActive: false,
        searchActiveClass: 'active'
      }
    },
    methods: {
      searchToggle() {
        this.isSearchActive = !this.isSearchActive;
      }
    },
    components: {
      Logo
    }
  }
</script>

<style lang="less" scoped>

  @import "../../styles/config";

  .navbar-fixed-top {
    background-color: @colorA;
    margin-bottom: 0;

    .container-fluid {
      padding: 0 2%;
    }
  }

  .navbar-header {
    .navbar-brand {
      padding: 0;
      margin: 0;
      height: 70px;

      h1 {
        color: rgb(240, 246, 252);
        font-weight: 200;
      }
    }
  }

  /*

  */
  .navbar-collapse {
    .navbar-nav {
      margin-left: 20px;

      a {
        padding: 25px 25px;
        transition: all .2s ease;
        color: @colorC;
        position: relative;
      }

      a:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: @colorB;
        display: none;
      }

      a.active {
        background: none;
        color: @colorB;
      }

      a.active:before {
        display: inline-block;
      }

      li:hover a {
        color: @colorB;
      }

      li:hover a:before {
        display: inline-block;
        animation: navline .3s ease-in;
      }

      @keyframes navline {
        from {
          width: 0;
        }
        to {
          width: 100%;
        }
      }
    }

    .navbar-right {
      margin: 0;
    }

    .navbar-search {
      width: 450px;
      height: 70px;
      position: relative;
    }

    .search-wrapper {
      .input-holder {
        overflow: hidden;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: @colorF;
        position: absolute;
        top: 15px;
        right: 12px;
        -webkit-transition: all 0.3s ease-in-out;
        -moz-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;

        .search-input {
          width: 100%;
          padding: 0 70px 0 20px;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
          background: @colorB;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
          border: none;
          outline: none;
          font-weight: 400;
          line-height: 20px;
          color: @colorF;
          -webkit-transform: translate(0, 60px);
          -moz-transform: translate(0, 60px);
          transform: translate(0, 60px);
          -webkit-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          -moz-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          -webkit-transition-delay: 0.3s;
          -moz-transition-delay: 0.3s;
          transition-delay: 0.3s;
        }

        .search-icon {
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 6px;
          background: #fff;
          padding: 0;
          outline: none;
          position: relative;
          float: right;
          z-index: 2;
          cursor: pointer;
          -webkit-transition: all 0.3s ease-in-out;
          -moz-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;

          span {
            width: 22px;
            height: 22px;
            display: inline-block;
            vertical-align: middle;
            position: relative;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            transform: rotate(45deg);
            -webkit-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
            -moz-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
            transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);

            &::before {
              width: 4px;
              height: 11px;
              left: 9px;
              top: 13px;
              border-radius: 2px;
              background: @colorB;
            }

            &::after {
              width: 14px;
              height: 14px;
              left: 4px;
              top: 0px;
              border-radius: 16px;
              border: 4px solid @colorB;
            }
          }
        }
      }

      &.active {
        .input-holder {
          border-radius: 50px;
          width: 450px;
          background: @colorB;
          -webkit-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          -moz-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);

          .search-input {
            opacity: 1;
            -webkit-transform: translate(0, 10px);
            -moz-transform: translate(0, 10px);
            transform: translate(0, 10px);
          }

          .search-icon {
            width: 40px;
            height: 40px;
            border-radius: 30px;

            span {
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              transform: rotate(-45deg);
            }
          }
        }

        .close {
          left: -50px;
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          transform: rotate(45deg);
          -webkit-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          -moz-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
          -webkit-transition-delay: 0.5s;
          -moz-transition-delay: 0.5s;
          transition-delay: 0.5s;
        }
      }

      .close {
        position: absolute;
        z-index: 1;
        top: 24px;
        right: 20px;
        width: 25px;
        height: 25px;
        cursor: pointer;
        -webkit-transform: rotate(-180deg);
        -moz-transform: rotate(-180deg);
        transform: rotate(-180deg);
        -webkit-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
        -moz-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
        transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
        -webkit-transition-delay: 0.2s;
        -moz-transition-delay: 0.2s;
        transition-delay: 0.2s;

        &::before {
          width: 5px;
          height: 25px;
          left: 10px;
          top: 0px;
        }

        &::after {
          width: 25px;
          height: 5px;
          left: 0px;
          top: 10px;
        }
      }

      .result-container {
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0px;
        text-align: center;
        font-size: 14px;
        display: none;
        color: #b7b7b7;
      }
    }

    .search-wrapper .input-holder .search-icon span::before, .search-wrapper .input-holder .search-icon span::after {
      position: absolute;
      content: '';
    }

    .search-wrapper .close::before, .search-wrapper .close::after {
      position: absolute;
      content: '';
      background: #fff;
      border-radius: 2px;
    }

    @media screen and (max-width: 560px) {
      .search-wrapper.active .input-holder {
        width: 200px;
      }
    }
  }


  /*media*/
  /*iphone 6/7/8/X*/

  .max-width-375-414 {
    .navbar-text {
      display: none;
    }

    .navbar-toggle, .navbar-default .navbar-toggle:focus, .navbar-default .navbar-toggle:hover {
      background-color: #0B0C10;
      border: none;
    }

    .navbar-default .navbar-toggle .icon-bar {
      background-color: #45A29E;
    }

    .navbar-header .navbar-brand {
      padding: 5px;
    }

    .navbar-collapse {
      .navbar-nav {
        margin: 0;
        padding: 5px 0;

        li a {
          padding: 10px 0;
        }
      }
    }
  }

  @media screen and (max-width: 375px) {
    .max-width-375-414();
  }

  /*iphone 6/7/8 Plus*/
  @media screen and (max-width: 414px) {
    .max-width-375-414();
  }

  /*iPad*/
  @media screen and (max-width: 768px) {
    .navbar-text {
      display: none;
    }
  }

  /*iPad Pro*/
  @media screen and (max-width: 1024px) {

  }

</style>
