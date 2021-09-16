<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-2 sidebar-menu">
        <header>
          <h1>
            <logo></logo>
          </h1>
        </header>

        <el-menu
          class="el-menu-vertical"
          @open="handleOpen"
          @close="handleClose"
          background-color="#161b22"
          text-color="#FFFFFF"
          active-text-color="#ff4572"
          unique-opened
        >
          <el-submenu :index="i + ''" v-for="(item,i) in menu" :key="i">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span slot="title">{{item.nav}}</span>
            </template>
            <el-menu-item
              oute=""
              :index="j + ''"
              v-for="(submenuList,j) in item.submenu"
              :key="j"
              @click="showDetails(submenuList.showDetails)"
            >
              {{submenuList.submenuName}}
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>

      <div class="col-lg-10 main">
        <div class="navbar">
          <ul>
            <li class="menu-bar">
              <i class="glyphicon glyphicon-align-justify"></i>
            </li>
            <li class="to-github">
              <i class="glyphicon glyphicon-apple"></i><a href="">GitHub</a>
            </li>
          </ul>
        </div>

        <div class="main-list-wrapper" v-for="(item,i) in list" :key="i">
          <h4>
            <i :id="item.id + (i + 1)"></i>{{item.listTitle + (i + 1)}}
          </h4>
          <div class="row">
            <div class="col-sm-3" v-for="(itemList,j) in item.listItem">
              <div class="main-item">
                <div class="main-item-img">
                  <img :src="itemList.imgSrc" :alt="itemList.alt">
                </div>
                <div class="main-item-desc">
                  <a :href="itemList.linkAddress">{{itemList.linkName}}</a>
                  <p>{{itemList.linkDesc}}</p>
                </div>
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
        isCollapse: false,
        menu: [
          {
            nav: "Java",
            iconClass: "el-icon-location",
            link: "#Java",
            submenu: [
              {
                submenuName: "思维导图",
                link: "#思维导图",
                showDetails: "优秀博客1"
              },
              {
                submenuName: "图片处理",
                link: "#图片处理",
                showDetails: "优秀博客2"
              },
            ]
          },
          {
            nav: " 在线工具",
            iconClass: "el-icon-location",
            submenu: [
              {
                submenuName: "思维导图",
                link: "#思维导图",
                showDetails: "优秀博客3"
              },
              {
                submenuName: "图片处理",
                link: "#图片处理",
                showDetails: "优秀博客4"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具",
                showDetails: "优秀博客5"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具",
                showDetails: "优秀博客6"
              },
              {
                submenuName: "字体资源",
                link: "#字体资源",
                showDetails: "优秀博客7"
              }
            ],
          },
          {
            nav: " 在线工具",
            iconClass: "el-icon-location",
            submenu: [
              {
                submenuName: "思维导图",
                link: "#思维导图"
              },
              {
                submenuName: "图片处理",
                link: "#图片处理"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "字体资源",
                link: "#字体资源"
              }
            ],
          },
          {
            nav: " 在线工具",
            iconClass: "el-icon-location",
            submenu: [
              {
                submenuName: "思维导图",
                link: "#思维导图"
              },
              {
                submenuName: "图片处理",
                link: "#图片处理"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "字体资源",
                link: "#字体资源"
              }
            ],
          },
          {
            nav: " 在线工具",
            iconClass: "el-icon-location",
            submenu: [
              {
                submenuName: "思维导图",
                link: "#思维导图"
              },
              {
                submenuName: "图片处理",
                link: "#图片处理"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "字体资源",
                link: "#字体资源"
              }
            ],
          },
          {
            nav: " 在线工具",
            iconClass: "el-icon-location",
            submenu: [
              {
                submenuName: "思维导图",
                link: "#思维导图"
              },
              {
                submenuName: "图片处理",
                link: "#图片处理"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "字体资源",
                link: "#字体资源"
              }
            ],
          },
          {
            nav: " 在线工具",
            iconClass: "el-icon-location",
            submenu: [
              {
                submenuName: "思维导图",
                link: "#思维导图"
              },
              {
                submenuName: "图片处理",
                link: "#图片处理"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "代码工具",
                link: "#代码工具"
              },
              {
                submenuName: "字体资源",
                link: "#字体资源"
              }
            ],
          }
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
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      showDetails(id) {
        let el = document.getElementById(id);
        this.$nextTick(function () {
          window.scrollTo({"behavior": "smooth", "top": el && el.offsetTop - 20});
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
    padding: 0;
    height: 100%;

    .row {
      margin: 0;
      height: 100%;

      .sidebar-menu {
        background-color: @colorF;
        height: 100%;
        overflow-y: auto;
        position: fixed;
        top: 0;
        bottom: 0;

        header {
          padding: 24px 20px;
          text-align: center;

          h1 {
            margin: 0;
            line-height: 36px;
          }
        }

        .el-menu-vertical:not(.el-menu--collapse) {
          max-height: 100%;
          border-right: none;

          .el-submenu__title i {
            color: @colorB !important;
          }
        }

        .el-menu {
          border-right: none;
        }

      }

      .main {
        float: right;

        .navbar {
          min-height: 70px;
          margin-bottom: 0;
          border: 0;

          ul {
            display: flex;
            justify-content: space-between;

            li.menu-bar {
              cursor: pointer;
            }

            li {
              line-height: 70px;
              color: @colorE;
            }

            li.to-github {
              a {
                color: @colorA;
              }
            }
          }
        }

        .col-sm-3 {
          padding-left: 0;
        }

        .main-list-wrapper {
          border-bottom: 2px solid @colorF;

          &:last-child {
            border: none;
          }
        }

        .main-item {
          display: flex;
          justify-content: start;
          align-items: center;
          padding: 15px;
          border-radius: 4px;
          margin: 20px 0 20px 0;
          background-color: @colorF;
          height: 90px;
          box-sizing: border-box;
          cursor: pointer;
          transition: .3s ease-out;

          .main-item-img {
            margin-right: 20px;

            img {
              width: 44px;
              height: 44px;
            }
          }

          .main-item-desc {
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
  }


</style>
