# huonly blog

> A my blog project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## 目录结构

```
├── build                                   项目构建(webpack)相关代码
│   ├── build.js                            项目文件打包成静态文件
│   ├── check-versions.js                   检查一些所依赖的工具的版本是否适用
│   ├── utils.js                            提供工具函数，包括生成处理各种样式语言的loader，获取资源文件存放路径的工具函数。
│   ├── vue-loader.conf.js                  引入了utils.js ，应该是用于切换开发模式和生产模式的文件，以便于用不同模式来解析loader。
│   ├── webpack.base.conf.js                vue基础环境的wepack相关配置文件
│   ├── webpack.dev.conf.js                 vue开发环境的wepack相关配置文件
│   └── webpack.prod.conf.js                vue生产环境的wepack相关配置文件
├── config                                  配置目录，包括端口号等。我们初学可以使用默认的。
│   ├── dev.env.js                          简单设置了环境变量
│   ├── router.js                            开发和构建两种环境下的配置。
│   └── prod.env.js                         简单设置了环境变量
├── index.html
├── package.json                            依赖包管理。类似pop.xml
├── src                                     开发目录
│   ├── App.vue                             根组件
│   ├── assets                              三方包及公共css
│   │   ├── css
│   │   │   ├── public
│   │   │   │   └── public.less             公共less
│   │   │   └── timeline
│   │   │       ├── mixins
│   │   │       └── timeline.less           归档页面使用的css依赖
│   │   ├── js
│   │   │   ├── qin.js                      项目全局文字动画效果js依赖
│   │   ├── prism                           页面使用代码高亮依赖包
│   │   │   ├── css
│   │   │   │   └── prism.css
│   │   │   └── js
│   │   │       └── prism.js
│   │   └── typo                            文章排版
│   │       └── typo.css
│   ├── components                          组件包
│   │   ├── articleList                     文章列表包
│   │   │   ├── ArticleList.vue             文章列表组件
│   │   │   └── Paging.vue                  分页组件
│   │   ├── aside                           侧边栏组件包
│   │   │   ├── Aside.vue                   侧边栏集成装载组件
│   │   │   ├── Calendar.vue                日历组件
│   │   │   ├── Catalog.vue                 目录组件
│   │   │   ├── Classification.vue          文章分类组件
│   │   │   ├── LabelCloud.vue              标签组件
│   │   │   ├── Links.vue                   友情连接组件
│   │   │   ├── Newest.vue                  最新文章组件
│   │   │   ├── Recommend.vue               推荐文章组件
│   │   │   └── Search.vue                  搜索组件
│   │   ├── footer
│   │   │   └── Footer.vue                  底部组件
│   │   ├── index.vue
│   │   ├── navigation
│   │   │   └── Navigation.vue              导航组件
│   │   ├── public
│   │   │   └── ToTop.vue                   返回顶部组件
│   │   └── timeline
│   │       └── TimeLine.vue                时间轴组件
│   ├── main.js                             项目的核心文件
│   ├── router
│   │   └── router.js                        路由配置文件
│   └── views                               页面
│       ├── About.vue
│       ├── Article.vue
│       ├── Database.vue
│       ├── Home.vue
│       ├── Java.vue
│       ├── Login.vue
│       ├── PlaceOnFile.vue
│       ├── System.vue
│       ├── Web.vue
│       └── admin                           后台
│           ├── Admin.vue
│           ├── blog
│           │   ├── AddArticle.vue
│           │   ├── Blog.vue
│           │   └── BlogList.vue
│           └── fenlei.vue
├── static                                  存放静态图片
│   ├── IronMan.jpg
│   ├── about_bg.jpeg
│   ├── avator.jpg
│   ├── color
│   ├── java.jpeg
│   ├── logo.png
│   ├── totop.png
│   ├── user.jpg
│   └── work
│       ├── 1.png
│       ├── 2.png
│       ├── 3.png
│       └── 4.png
└── vue.config.js                           可选的配置文件
```

## 插件配置
### 1、jQuery和Bootstrap
1. 第一步：安装 jQuery、 Bootstrap、popper.js依赖。

    + 其中popper.js 用于在 Bootstrap 中显示弹窗、提示、下拉菜单，所以需要引入。

    ```npm install jquery bootstrap@3 popper.js --save```

2. 第二步：配置 main.js

    + 引入 Boostrap 请看配置文件。

    ```javascript
   import Vue from 'vue'
   import App from './App'
   import router from './router'

   import $ from 'jquery';
   import 'bootstrap/dist/css/bootstrap.min.css'

   Vue.config.productionTip = false

   /* eslint-disable no-new */
   new Vue({
     el: '#app',
     router,
     components: {
       App
     },
     template: '<App/>'
   })
   ```

3. 第三步：配置 vue.config.js 文件

    + Vue CLI3.0 中的所有配置都在 vue.config.js 文件，在这里配置好，脚手架自动使用你的配置覆盖掉默认的配置。
    + 如果项目中没有 vue.config.js 文件，在 package.json 文件的同级目录新建一个 vue.config.js 文件。文件内具体的配置如下：

    ```javascript
   const webpack = require('webpack');

   module.exports = {
     configureWebpack: {
       plugins: [
         new webpack.ProvidePlugin({
           $: 'jquery',
           jQuery: 'jquery',
           'window.jQuery': 'jquery',
           Popper: ['popper.js', 'default']
         })
       ]
     }
   }
    ```

4. 如果 eslint 报误，设置 .eslintrc.js 文件。

    ```javascript
   module.exports = {
    env: {
     node: true,
     jquery: true
    }
   };
    ```

### 2、Less语法

1. 安装

    ```npm i less less-loader --save```

2. 配置webpack.base.conf.js,在module追加

    ```
     {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
     }
    ```

3. 如需要引入全局less文件，只需在main.js里引入即可：

    ```import './../theme/theme.less'```

> 如果安装后编译失败，可能是less-loader版本太高。解决办法：**卸载之后从新安装低版本即可**

### 3、Swiper轮播

1. 安装

    ```npm i swiper -D```

2. 导入组件

   ```import { Swiper, SwiperSlide } from 'swiper/vue';```

### 4、全局文字弹动效果

1. 下载qin.js

2. 在`根路由`导入qin.js

3. 在需要动画的元素上添加类`qin`

    ```html
    <div>
        <h3 class="qin"></h3>
    </div>
    ```
4. 在mounted中初始化

    ```
    mounted() {
     $(".qin").qin({
       offset: 35, // default , 最大偏移量
       duration: 700, // default , 晃动时间
       recline: 0.2 // default , 每像素偏移量，越小“琴弦绷的越紧”
     });
   },
   ```

### 5、导入mackdown插件

1. 安装

    ```npm install mavon-editor --save```

2. 在`main.js`中导入并使用

    ```
   import mavonEditor from 'mavon-editor'
   import 'mavon-editor/dist/css/index.css'
   Vue.use(mavonEditor)
   ```
3. 替换`textarea`为`<mavon-editor/>`,使用默认配置即可。

### 6、文章内容排版

1. 下载`Typo.css`

2. 导入css

    ```@import "../assets/typo/typo.css";```

3. 在文章主体`外层包裹`的div或其他元素为其添加类 `typo typo-seclection`

### 7、自动生成文章目录

1. 下载tocbot

    ```npm install --save tocbot```

2. 在main.js中导入css

    ```import 'tocbot/dist/tocbot.css'```

3. 在mounted中初始化

    ```
   mounted() {
     tocbot.init({
       // 在哪个元素里面呈现目录。（这里在其他组件中呈现也是可以的。并非必须在同一个组件中）
       tocSelector: '.js-toc',
       // 从哪里获取标题来构建目录。（一般放在文章主体外层包裹元素上）.
       contentSelector: '.js-toc-content',
       // 获取哪些标题
       headingSelector: 'h1, h2, h3',
       // 用于内容中相对或绝对位置容器内的标题。
       hasInnerContainers: true,
     });
   },
   ```

## 路由配置

+ 将App.vue中只存放`<router-view/>`，渲染全部页面及组件

+ index.vue作为主页公共内容，并设置路由出口

    + 功能内容：

        1. 导航组件

        2. 布局容器位置限定

            + 左边：aside区域

            + 右边：博客列表或博客文章

        3. 底部组件及返回顶部组件

+ 详细如下：

    ```
    routes: [
        {
          path: '/',
          component: resolve => require(['@/components/index'], resolve),
          redirect: '/home',
          children: [
            {
              path: '/home',
              component: resolve => require(['@/views/Home'], resolve),
            },
            {
              path: '/web',
              component: resolve => require(['@/views/Web'], resolve),
            },
            {
              path: '/java',
              component: resolve => require(['@/views/Java'], resolve),
            },
            {
              path: '/database',
              component: resolve => require(['@/views/Database'], resolve),
            },
            {
              path: '/system',
              component: resolve => require(['@/views/System'], resolve),
            },
            {
              path: '/placeOnFile',
              component: resolve => require(['@/views/PlaceOnFile'], resolve),
            },
            {
              path: '/article',
              component: resolve => require(['@/views/Article'], resolve),
            }
          ]
        },
        {
          path: '/about',
          component: resolve => require(['@/views/About'], resolve),
        },
        {
          path: '/login',
          component: resolve => require(['@/views/Login'], resolve),
        },
        {
          path: '/admin',
          component: resolve => require(['@/views/admin/Admin'], resolve),
          linkExactActiveClass: 'active',
          children: [
            {
              path: 'blog',
              component: resolve => require(['@/views/admin/blog/Blog'], resolve),
              linkExactActiveClass: 'active',
              children: [
                {
                  path: 'blogList',
                  component: resolve => require(['@/views/admin/blog/BlogList'], resolve),
                },
                {
                  path: 'addArticle',
                  component: resolve => require(['@/views/admin/blog/AddArticle'], resolve),
                },
              ]
            },
            {
              path: 'fenlei',
              component: resolve => require(['@/views/admin/fenlei'], resolve)
            }
          ]
        }
      ]
    ```









