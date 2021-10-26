<template>
  <div id="nav-wrapper" :class="[isClosed ? 'toggled' : '']">
    <nav class="navbar navbar-inverse navbar-fixed-top" id="sidebar-wrapper" role="navigation">
      <ul class="nav sidebar-nav">
        <li class="sidebar-brand">
          <logo></logo>
        </li>
        <li :class="[!item.submenu ? '' : 'dropdown']" v-for="(item,i) in menu" :key="i">
          <a :href="item.showDetails"
             class="dropdown-toggle"
             :data-toggle="item.submenu ? dropdown : ''"
          >{{item.nav}}
            <span class="caret" v-if="item.submenu"></span>
          </a>
          <ul class="dropdown-menu" role="menu" v-if="item.submenu">
            <li v-for="(subNav,j) in item.submenu" :key="j">
              <a :href="subNav.showDetails">{{subNav.submenuName}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>

    <div id="page-content-wrapper">
      <button type="button"
              class="hamburger"
              :class="[isClosed ? 'is-open' : 'is-closed']"
              data-toggle="offcanvas"
              @click="toggleAside()">
        <span class="hamb-top"></span>
        <span class="hamb-middle"></span>
        <span class="hamb-bottom"></span>
      </button>

      <div class="container-fluid main">
        <div class="main-list" v-for="(item,i) in list" :key="i">
          <h4>
            <i :id="item.id + (i + 1)"></i>{{item.listTitle + (i + 1)}}
          </h4>
          <div class="row list-content">
            <div class="list-item col-xs-6 col-lg-2" v-for="(itemList,j) in item.listItem" :key="j">
              <div class="list-item-img">
                <img :src="itemList.imgSrc" :alt="itemList.alt">
              </div>
              <div class="list-item-desc">
                <a :href="itemList.linkAddress">{{itemList.linkName}}</a>
                <p>{{itemList.linkDesc}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import Logo from "../components/public/Logo";

  export default {
    name: "Nav",
    data() {
      return {
        isClosed: false,
        dropdown: 'dropdown',
        menu: [
          {
            nav: "Spring",
            showDetails: "#优秀博客1"
          },
          {
            nav: "Java",
            submenu: [
              {
                submenuName: "思维导图",
                showDetails: "#优秀博客2"
              },
              {
                submenuName: "图片处理",
                showDetails: "#优秀博客3"
              },
            ]
          },
          {
            nav: " 在线工具",
            submenu: [
              {
                submenuName: "思维导图",
                showDetails: "#优秀博客4"
              },
              {
                submenuName: "图片处理",
                showDetails: "#优秀博客5"
              },
              {
                submenuName: "代码工具",
                showDetails: "#优秀博客6"
              },
              {
                submenuName: "代码工具",
                showDetails: "#优秀博客7"
              },
              {
                submenuName: "字体资源",
                showDetails: "#优秀博客8"
              }
            ],
          },
        ],
        list: [
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 6,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 7,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 8,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
          {
            id: "优秀博客",
            listTitle: "优秀博客",
            listItem: [
              {
                id: 1,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 2,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 3,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 4,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              },
              {
                id: 5,
                imgSrc: "https://www.wenyuanblog.com/navpage/images/logos/coolshell.png",
                imgAlt: "这是一张图片",
                linkName: "MindLine",
                linkAddress: "www.baidu.com",
                linkDesc: "MindLine思维导图"
              }
            ]
          },
        ]
      };
    },
    methods: {
      toggleAside() {
        this.isClosed = !this.isClosed;
      },
      showDetails(id) {
        let el = document.getElementById(id);
        this.$nextTick(function () {
          window.scrollTo({"behavior": "smooth", "marginTop": el && el.offsetTop + 100});
        })
      },
    },
    components: {
      Logo
    }
  }
</script>

<style lang="less" scoped>

  @import "../styles/config";

  .container-fluid {
    padding: 0 80px;
    height: 100%;

    .row {
      margin: 0;
      height: 100%;

    }
  }

  .nav {
    .open {
      & > a {
        background-color: transparent;

        &:hover {
          background-color: transparent;
        }

        &:focus {
          background-color: transparent;
        }
      }
    }
  }

  /*-------------------------------*/
  /*           Wrappers            */
  /*-------------------------------*/
  #nav-wrapper {
    padding-left: 0;
    transition: all 0.5s ease;

    &.toggled {
      padding-left: 280px;

      #sidebar-wrapper {
        width: 280px;
      }

      #page-content-wrapper {
        margin-right: -280px;
        position: absolute;
      }
    }
  }

  #sidebar-wrapper {
    background: @colorA;
    height: 100%;
    left: 280px;
    margin-left: -280px;
    overflow-x: hidden;
    overflow-y: auto;
    transition: all 0.5s ease;
    width: 0;
    z-index: 1000;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  #page-content-wrapper {
    padding-top: 70px;
    width: 100%;
    background: @colorF;
  }

  /*-------------------------------*/
  /*     Sidebar nav styles        */
  /*-------------------------------*/
  .sidebar-nav {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    width: 280px;

    li.dropdown {
      .caret {
        border-top: 6px solid;
        border-right: 6px solid transparent;
        border-left: 6px solid transparent;
        margin-left: 140px !important;
      }

      .dropdown-menu li:nth-child(1):before {
        background-color: @colorB;
      }
    }

    li {
      display: inline-block;
      line-height: 28px;
      position: relative;
      width: 100%;

      &:before {
        background-color: #1c1c1c;
        content: '';
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: width 0.2s ease-in;
        width: 5px;
        z-index: -1;
      }

      &:first-child {
        a {
          color: @colorD;
        }
      }

      &:nth-child(2):before {
        background-color: @colorB;
      }

      &:nth-child(3):before {
        background-color: #f01f7d;
      }

      &:nth-child(4):before {
        background-color: #f01f92;
      }

      &:nth-child(5):before {
        background-color: #f01fa7;
      }

      &:nth-child(6):before {
        background-color: #f01fbc;
      }

      &:nth-child(7):before {
        background-color: #f01fd1;
      }

      &:nth-child(8):before {
        background-color: #f01fe6;
      }

      &:nth-child(9):before {
        background-color: #e61ff0;
      }

      &:hover {
        &:before {
          -webkit-transition: width 0.2s ease-in;
          transition: width 0.2s ease-in;
          width: 100%;
        }
      }

      a {
        color: @colorC;
        display: block;
        padding: 10px 12px 10px 30px;
        text-decoration: none;
      }

      &.open {
        &:hover {
          before {
            -webkit-transition: width 0.2s ease-in;
            transition: width 0.2s ease-in;
            width: 100%;
          }
        }
      }
    }

    .dropdown-menu {
      background-color: @colorF;
      border-radius: 0;
      border: none;
      box-shadow: none;
      margin: 0;
      padding: 0;
      position: relative;
      width: 100%;
    }

    & > .sidebar-brand {
      font-size: @fontC;
      height: 65px;
      line-height: 44px;
    }
  }

  .sidebar-nav li a:hover,
  .sidebar-nav li a:active,
  .sidebar-nav li a:focus,
  .sidebar-nav li.open a:hover,
  .sidebar-nav li.open a:active,
  .sidebar-nav li.open a:focus {
    background-color: transparent;
    color: @colorD;
    text-decoration: none;
  }

  /*-------------------------------*/
  /*       Hamburger-Cross         */
  /*-------------------------------*/
  .hamburger {
    background: transparent;
    border: none;
    display: block;
    height: 32px;
    margin-left: 15px;
    position: fixed;
    top: 20px;
    width: 32px;
    z-index: 999;

    &:hover {
      outline: none;
    }

    &:focus {
      outline: none;
    }

    &:active {
      outline: none;
    }

    &.is-closed {
      &:before {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transition: all 0.35s ease-in-out;
        color: @colorD;
        content: '';
        display: block;
        line-height: 32px;
        opacity: 0;
        text-align: center;
        width: 100px;
      }

      &:hover {
        before {
          -webkit-transform: translate3d(-100px, 0, 0);
          -webkit-transition: all 0.35s ease-in-out;
          display: block;
          opacity: 1;
        }

        .hamb-top {
          -webkit-transition: all 0.35s ease-in-out;
          top: 0;
        }

        .hamb-bottom {
          -webkit-transition: all 0.35s ease-in-out;
          bottom: 0;
        }
      }

      .hamb-top {
        -webkit-transition: all 0.35s ease-in-out;
        background-color: rgba(255, 255, 255, 0.7);
        top: 5px;
      }

      .hamb-middle {
        background-color: rgba(255, 255, 255, 0.7);
        margin-top: -2px;
        top: 50%;
      }

      .hamb-bottom {
        -webkit-transition: all 0.35s ease-in-out;
        background-color: rgba(255, 255, 255, 0.7);
        bottom: 5px;
      }
    }

    &.is-open {
      .hamb-top {
        -webkit-transform: rotate(45deg);
        -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
        background-color: @colorD;
        margin-top: -2px;
        top: 50%;
      }

      .hamb-middle {
        background-color: @colorD;
        display: none;
      }

      .hamb-bottom {
        -webkit-transform: rotate(-45deg);
        -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.73, 1, 0.28, 0.08);
        background-color: @colorD;
        margin-top: -2px;
        top: 50%;
      }

      &:before {
        -webkit-transform: translate3d(0, 0, 0);
        -webkit-transition: all 0.35s ease-in-out;
        color: @colorD;
        content: '';
        display: block;
        line-height: 32px;
        opacity: 0;
        text-align: center;
        width: 100px;
      }

      &:hover {
        before {
          -webkit-transform: translate3d(-100px, 0, 0);
          -webkit-transition: all 0.35s ease-in-out;
          display: block;
          opacity: 1;
        }
      }
    }
  }

  .hamburger.is-closed .hamb-top,
  .hamburger.is-closed .hamb-middle,
  .hamburger.is-closed .hamb-bottom,
  .hamburger.is-open .hamb-top,
  .hamburger.is-open .hamb-middle,
  .hamburger.is-open .hamb-bottom {
    height: 4px;
    left: 0;
    position: absolute;
    width: 100%;
  }

  .main {

    .main-list {
      border-bottom: 2px solid @colorA;
      margin-bottom: 34px;

      &:last-child {
        border: none;
      }
    }

    .list-content {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      .list-item {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 15px;
        border-radius: 4px;
        margin: 20px 0 20px 0;
        height: 90px;
        box-sizing: border-box;
        transition: .3s ease-out;

        &:hover {
          background-color: @colorA;
        }

        .list-item-img {
          margin-right: 20px;

          img {
            width: 44px;
            height: 44px;
          }
        }

        .list-item-desc {
          a {
            color: @colorB;
            font-size: @fontG;
          }

          p {
            color: @colorG;
            margin-top: 5px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 520px) {
    .container-fluid {
      padding: 0 10px;
    }

    .main .list-content .list-item {
      padding: 12px;
    }
  }

</style>
