<template>
  <div class="about">
    <navigation></navigation>

    <section class="intro-section" id="home">
      <div class="intro-content">
        <h1>I'm Fokqiang</h1>
      </div>
      <a href="javascript:;" class="down">
        <i class="glyphicon glyphicon-menu-down"></i>
      </a>
    </section>

    <about-layout>
      <template #title>
        <h2>关于<em>我</em></h2>
      </template>
      <template #left>
        <div class="col-md-4 col-lg-5 about-image">
          <img src="/static/avator.jpg" class="img-responsive" alt="">
        </div>
      </template>
      <template #right>
        <div class="col-md-8 col-lg-7">
          <div class="about-text">
            <p>
              东方平原的霸主。和东方帝国、朱拉森林周边国家进行贸易的商人都对他们很头大。每一只牙狼族成员都相当于C级魔物，稍有不慎，就连老手冒险者都会在瞬间被他们咬死。不过，真正可怕的是集体行动。若带头者很优秀，牙狼族将能发挥真本事。群集时成为一心同体的魔物，行动上整齐划一。此外，当他们群聚时的等级相当于B。
              [10] 其中，黑牙狼、岚牙狼、赤牙狼、青牙狼、绿牙狼皆是牙狼的高阶物种。
              东方平原的霸主。和东方帝国、朱拉森林周边国家进行贸易的商人都对他们很头大。每一只牙狼族成员都相当于C级魔物，稍有不慎，就连老手冒险者都会在瞬间被他们咬死。不过，真正可怕的是集体行动。若带头者很优秀，牙狼族将能发挥真本事。群集时成为一心同体的魔物，行动上整齐划一。此外，当他们群聚时的等级相当于B。
              [10] 其中，黑牙狼、岚牙狼、赤牙狼、青牙狼、绿牙狼皆是牙狼的高阶物种。
            </p>
          </div>
          <div class="skills">
            <div class="single-progress-item">
              <h4>Grphice</h4>
              <div class="progress">
                <div class="progress-bar progress-bar-info progress-bar-striped active" style="width: 85%;">
                  <div class="progress-value">85%</div>
                </div>
              </div>
            </div>
            <div class="single-progress-item">
              <h4>UX/UI</h4>
              <div class="progress">
                <div class="progress-bar progress-bar-success progress-bar-striped active" style="width: 75%;">
                  <div class="progress-value">75%</div>
                </div>
              </div>
            </div>
            <div class="single-progress-item">
              <h4>Wordpress</h4>
              <div class="progress">
                <div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: 90%;">
                  <div class="progress-value">90%</div>
                </div>
              </div>
            </div>
            <div class="single-progress-item">
              <h4>Front-end</h4>
              <div class="progress">
                <div class="progress-bar progress-bar-danger progress-bar-striped active" style="width: 60%;">
                  <div class="progress-value">60%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </about-layout>

    <!--  <section>
        <div class="container-fluid work">
          <div class="row">
            <div class="col-xs-12 text-center">
              <div class="animate fadeInRight animated">
                <div class="head">
                  <h2>最近的项目</h2>
                </div>
              </div>

              <div class="col-xs-12 work_filter text-center">
                <div class="row">
                  <div class="gallery">
                    <div class="row">
                      <div class="mix" v-for="(item,i) in 10" :key="i">
                        <div class="mix_sec">
                          <div class="imageContainer">
                            <img class="sec" src="/static/work/1.png" alt="work">
                            <a class="overlayText fancybox" href="#." data-fancybox-group="gallery">
                              <h4>项目的介绍</h4>
                              <p>项目的描述信息</p>
                            </a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>-->

    <about-layout>
      <template #title>
        <h2>我的<em>项目</em>示例</h2>
      </template>
      <template #left>
        <div class="col-sm-5 col-md-4 col-lg-3">
          <aside class="my-project-list">
            <div>
              <h6>
                <a href="#" class="active">全部</a>
              </h6>
              <a href="#" v-for="(item,i) in 10" :key="i">Announcements & Changelog</a>
            </div>
          </aside>
        </div>
      </template>

      <template #right>
        <div class="col-sm-7 col-md-8 col-lg-9">
          <div class="showcase-items flex-wrapper">
            <article
              style="background-image: url(https://screenshots.commoninja.com/screenshots/53dbff45-0a08-40dc-937b-465896239850_bracket.jpg)"
              v-for="(item,i) in 9"
              :key="i">
              <div class="showcase-item-meta">
                <a href="/brackets/lp/8cb0cb42-29b0-47ba-91b0-7930701a01df" target="_blank"
                   rel="noopener noreferrer"></a>
                <h6 class="heading-6 ">The JADBROCK pinga’s</h6>
                <p>Keira Hastings</p>
              </div>
            </article>
          </div>
          <div class="load-more text-center">
            <a href="#">加载更多</a>
          </div>
        </div>
      </template>
    </about-layout>

    <!-- <section class="services-section spad">
       <div class="container">
         <div class="row">
           <div class="col-md-3 col-sm-6 service-item">
             <div class="icon">
               <i class="fa fa-address-book-o"></i>

               <span></span>
             </div>
             <h4>GRPHICE</h4>
             <p>We are gives you best graphic and website services. </p>
           </div>

           <div class="col-md-3 col-sm-6 service-item">
             <div class="icon">
               <i class="glyphicon glyphicon-euro"></i>
               <span></span>
             </div>
             <h4>BRANDING</h4>
             <p>We are gives you best graphic and website services.</p>
           </div>

           <div class="col-md-3 col-sm-6 service-item">
             <div class="icon">
               <i class="glyphicon glyphicon-euro"></i>
               <span></span>
             </div>
             <h4>PHOTOGRAPHY</h4>
             <p>We are gives you best graphic and website services.</p>
           </div>

           <div class="col-md-3 col-sm-6 service-item">
             <div class="icon">
               <i class="glyphicon glyphicon-euro"></i>
               <span></span>
             </div>
             <h4>CUSTOMIZATION</h4>
             <p>We are gives you best graphic and website services.</p>
           </div>
         </div>
       </div>
     </section>-->

    <!--  <about-layout>
        <template #title>
          <h2><em>好</em>，常联系</h2>
        </template>

        <template #left>
          <div class="col-lg-6">
            <ul class="contact-list">
              <li>
                <div class="contact-item">
                  <div class="cd-icon"><span class="glyphicon glyphicon-envelope"></span></div>
                  <div class="cd-info">
                    <a href="">
                      <span>[email protected]</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="contact-item">
                  <div class="cd-icon"><span class="glyphicon glyphicon-home"></span></div>
                  <div class="cd-info">
                    <a href="">
                      <span>[email protected]</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="contact-item">
                  <div class="cd-icon"><span class="glyphicon glyphicon-earphone"></span></div>
                  <div class="cd-info">
                    <a href="">
                      <span>[email protected]</span>
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <div class="contact-item">
                  <div class="cd-icon"><span class="glyphicon glyphicon-earphone"></span></div>
                  <div class="cd-info">
                    <a href="">
                      <span>[email protected]</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </template>

        <template #right>
          <div class="col-lg-6 contact-form">
            <form action="#" method="post" id="contact-form">
              <div>
                <input type="text" name="name" id="name" placeholder="Full name" class="form-control">
              </div>
              <div>
                <input type="email" name="email" id="email" placeholder="Email" class="form-control">
              </div>
              <div>
                <input type="text" name="subject" id="subject" placeholder="Subject" class="form-control">
              </div>
              <div>
                  <textarea placeholder="Message" name="text" id="text" class="form-control" cols="30" rows="10"
                            style="height: 253px;"></textarea>
              </div>
              <div>
                <button type="submit" id="contact-btn" class="submit-btn">Send Message</button>
              </div>
            </form>
          </div>
        </template>
      </about-layout>-->

    <bottom></bottom>
    <to-top></to-top>
  </div>
</template>

<script>

  import AboutLayout from "../components/public/AboutLayout";
  import Navigation from "../components/navigation/Navigation";
  import Bottom from "../components/footer/Bottom";
  import ToTop from "../components/public/ToTop";

  export default {
    name: "About",
    data() {
      return {}
    },
    mounted() {
    },
    methods: {},
    components: {
      AboutLayout,
      Navigation,
      Bottom,
      ToTop
    }
  }
</script>

<style lang="less" scoped>

  @import "../styles/config";

  .about {
    height: 100%;
  }

  .spad {
    padding: 90px 0;
  }


  // intro-section start
  .intro-section {
    background: url('/static/about_bg.jpeg') no-repeat center center fixed;
    width: 100%;
    height: 100%;
    position: relative;
    display: table;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background: #000;
      opacity: .85;
      z-index: 1
    }

    .intro-content {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      position: relative;
      z-index: 2;

      h1 {
        font-size: 80px;
        color: @colorD;
        text-transform: uppercase;
        text-shadow: 0 0 16px rgba(255, 255, 255, .8);
        margin-bottom: 10px;
        position: relative;
        max-width: 1160px;
        padding: 20px 0;
        left: 50%;
        transform: translateX(-50%);
        text-align: right;

        &:after {
          content: "";
          background-color: @colorB;
          height: 5px;
          width: 40%;
          position: absolute;
          right: 0;
          bottom: -50px;
          -webkit-transform: translateX(0);
          transform: translateX(0);
        }
      }
    }

    .down {
      position: absolute;
      display: table;
      width: 100px;
      height: 50px;
      background: rgba(175, 175, 175, .2);
      left: 50%;
      bottom: 0;
      margin-left: -50px;
      border-radius: 50px 50px 0 0;
      z-index: 3;
      overflow: hidden;

      i {
        position: relative;
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: 40px;
        color: @colorB;
        text-shadow: 0 0 15px rgba(0, 0, 0, .4);
        -webkit-animation: down 1.8s infinite;
        animation: down 1.8s infinite;
      }
    }
  }

  @keyframes down {
    0% {
      top: 0;
      opacity: .5
    }

    25% {
      top: 10px;
      opacity: 1
    }

    50% {
      top: 5px;
      opacity: 1
    }

    100% {
      top: 15px;
      opacity: 0
    }
  }

  // intro-section end


  // About the start of the progress bar on the right side of my skill

  .about-text {
    margin-bottom: 42px;
    color: @colorC;

    p {
      font-size: @fontE;
      text-indent: 2em;
      line-height: 28px;
    }
  }

  .single-progress-item {
    margin-bottom: 30px;

    h4 {
      letter-spacing: .09em;
      text-transform: uppercase;
      line-height: 27px;
      margin-bottom: 5px;
      color: @colorC;
    }
  }

  .skills .single-progress-item:last-child {
    margin-bottom: 0
  }

  .progress-bar-style {
    display: block;
    height: 10px;
    background: #d6d6d6;
    position: relative;
    width: 100%;
    border-radius: 5px
  }

  .bar-inner {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    background: @colorB;
    border-radius: 5px
  }

  .bar-inner span {
    position: absolute;
    right: 10px;
    top: -18px;
    font-size: 13px
  }

  // About the end of the progress bar on the right side of my skill

  // my project example starts
  .my-project-list > div {
    display: flex;
    flex-direction: column;
    position: -webkit-sticky;
    position: sticky;
    top: 40px;

    & > * {
      margin: 0 0 35px;
    }

    a {
      color: @colorC;
      font-size: @fontD;
    }

    a.active {
      color: @colorB;
    }
  }

  .showcase-items {
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 32px;
    display: flex;
    flex-wrap: wrap;

    article {
      background: no-repeat 50%;
      background-image: none;
      background-size: cover;
      border-radius: 10px;
      box-shadow: 0 40px 60px rgba(0, 0, 0, .12);
      flex-basis: 340px;
      height: 240px;
      margin: 0 0 24px 24px;
      position: relative;
      text-align: left;
      width: 340px;

      &:before {
        background: linear-gradient(180deg, rgba(22, 23, 27, 0), rgba(22, 23, 27, .95));
        border-radius: 8px;
        content: "";
        height: 100%;
        left: 0;
        opacity: 0;
        position: absolute;
        top: 0;
        transition: opacity .2s ease;
        width: 100%;
      }

      .showcase-item-meta {
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: flex-end;
        left: 0;
        opacity: 0;
        padding: 20px;
        position: absolute;
        top: 0;
        transition: opacity .2s ease;
        width: 100%;

        a {
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      }

      h6 {
        margin: 0 0 4px;
        font-size: @fontE;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
      }

      p {
        line-height: 160%;
        margin: 0;
        text-transform: uppercase;
      }

      &:hover .showcase-item-meta, &:hover:before {
        opacity: 1;
      }
    }
  }

  .load-more {
    padding-bottom: 20px;

    a {
      font-size: @fontD;
      color: @colorB;
    }
  }

  // end of my project example

  // service module start
  .services-section {
    background: @colorD;
  }

  .service-item {
    text-align: center;

    h4 {
      font-weight: 600;
      color: @colorA;
    }

    p {
      color: @colorF;
    }

    .icon {
      width: 50px;
      height: 50px;
      display: table;
      margin: 0 auto;
      position: relative;
      top: 0;
      -webkit-transition: all .5s;
      transition: all .5s;

      i {
        display: table-cell;
        vertical-align: middle;
        text-align: center;
        font-size: @fontC;
      }

      &:after {
        left: 0;
        top: 0;
        border-left: 2px solid #333;
        border-top: 2px solid #333;
      }

      &:before {
        right: 0;
        bottom: 0;
        border-right: 2px solid #333;
        border-bottom: 2px solid #333;
      }

      span {
        &:after {
          right: 0;
          top: 0;
          border-right: 2px solid #333;
          border-top: 2px solid #333;
        }

        &:before {
          left: 0;
          bottom: 0;
          border-left: 2px solid #333;
          border-bottom: 2px solid #333;
        }
      }
    }

    &:hover {
      .icon {
        top: -10px;
      }
    }
  }

  .service-item .icon:after,
  .service-item .icon:before,
  .service-item .icon span:after,
  .service-item .icon span:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 10px;
    opacity: 0;
    -webkit-transition: all .5s;
    transition: all .5s;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .service-item:hover .icon:after,
  .service-item:hover .icon:before,
  .service-item:hover .icon span:after,
  .service-item:hover .icon span:before {
    width: 100%;
    height: 100%;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  // service module end

  /*  .work {
      background-color: @colorA;
      padding: 40px 0 0;

      .head {
        h2 {
          font-size: @fontA;
          line-height: 30px;
          margin-bottom: 58px;
          color: @colorF;
          position: relative;

          &:after {
            content: "";
            background-color: @colorB;
            height: 5px;
            width: 8%;
            position: absolute;
            left: 46.7%;
            bottom: -22px;
          }
        }
      }

      .work_filter {
        .mix {
          width: 20%;
          float: left;

          .mix_sec {
            width: 100%;
            border: solid 1px #e8e8e8;

            .imageContainer {
              position: relative;
            }

            img.sec {
              width: 100%;
            }

            .imageContainer a.overlayText {
              top: 0px;
              bottom: 0px;
              left: 0px;
              right: 0px;
              transition: 0.5s ease-in;
              position: absolute;
              background: rgba(0, 0, 0, 0);
              margin: 0px;
              padding: 28% 10px;
              height: 100%;

              h4 {
                color: rgba(214, 60, 93, 0);
                font-size: 18px;
                line-height: 24px;
                font-weight: 600;
              }

              p {
                font-size: 14px;
                color: rgba(255, 255, 255, 0);
                font-weight: 600;
              }
            }

            a.overlayText:hover {
              background: rgba(0, 0, 0, 0.72);
              cursor: pointer;
              text-decoration: none;
            }

            a.overlayText:hover h4 {
              color: #d63c5d;
              transition: 0.3s ease-in;
            }

            a.overlayText:hover p {
              color: #fff;
              transition: 0.3s ease-in;
            }

          }
        }
      }
    }*/

  // contact me to get start
  .contact-list {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .contact-item {
      margin-bottom: 16px;
      display: flex;
      align-items: center;

      .cd-icon {
        font-size: 64px;
        margin-right: 24px;
        color: @colorD;
      }

      .cd-info {
        font-size: 26px;

        a {
          color: @colorD;
        }
      }
    }
  }

  .contact-form div {
    margin-bottom: 24px;

    .form-control {
      display: block;
      width: 100%;
      padding: 24px 35px;
      font-size: @fontE;
      font-weight: 400;
      line-height: 1.5;
      color: @colorD;
      background-color: @colorA;
      background-clip: padding-box;
      border: 1px solid @colorB;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 25px;
      -webkit-transition: border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;

      &:focus {
        color: @colorA;
        background-color: @colorF;
        border-color: @colorD;
        outline: 0;
      }
    }

    .submit-btn {
      background-color: @colorB;
      border-color: @colorB;
      display: inline-block;
      font-weight: 400;
      font-size: @fontE;
      line-height: 1.5;
      color: @colorD;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border-bottom-color: transparent;
      padding: 10px 28px;
      border-radius: 100rem;
      -webkit-transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
      transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out, -webkit-box-shadow .15s ease-in-out;
    }
  }

  @media screen and (max-width: 520px) {

    .intro-section .intro-content h1 {
      font-size: 60px;
      margin-right: 40px;
    }

    .about-text{
      margin-top: 24px;
    }

    .my-project-list > div, .showcase-items {
      align-items: center;
      justify-content: center;
    }

    .showcase-items article {
      margin-left: 0;
    }

  }

  @media (max-width: 750px) {
    .showcase-items {
      justify-content: space-evenly;
    }
  }

  @media (min-width: 992px) {

    .intro-section {
      height: 50%;
    }

    .showcase-items article {
      flex-basis: 298px;
    }
  }

  @media (min-width: 1200px) {
    .showcase-items article {
      flex-basis: 318px;
    }
  }

</style>
