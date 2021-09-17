import Vue from 'vue'
import App from './App'
import router from "./router";

// Bootstrap 和 jquery
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.min';

//elementUI
import {
  Button,
  Menu,
  MenuItem,
  MenuItemGroup,
  RadioGroup,
  RadioButton,
  Submenu,
  Popover,
  Collapse,
  CollapseItem,
  Table,
  TableColumn
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Popover)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Table)
Vue.use(TableColumn)

// 动画
import animate from 'animate.css';

Vue.use(animate)

// 图片懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('./assets/loading-svg/puff.svg'),
})

// 自动生成文章目录
import 'tocbot/dist/tocbot.css';

// markdown插件
import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(mavonEditor);

// 全局鼠标单击效果
import mouse from './assets/js/mouseClick'

Vue.use(mouse)

// 全屏滚动
import VueFullPage from 'vue-fullpage.js'

// font Awesome
import "font-awesome/css/font-awesome.min.css"


Vue.use(VueFullPage)

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
