import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: resolve => require(['@/views/index'], resolve),
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: resolve => require(['@/views/home'], resolve),
        },
        {
          path: '/category',
          component: resolve => require(['@/views/category'], resolve),
        },
        {
          path: '/file',
          component: resolve => require(['@/views/file'], resolve),
        },
        {
          path: '/tag',
          component: resolve => require(['@/views/tag'], resolve),
        },
        {
          path: '/resources',
          component: resolve => require(['@/views/resources'], resolve),
        },
        {
          path: '/article',
          component: resolve => require(['@/views/article'], resolve),
        }
      ]
    },
    /*    {
          path: '/category',
          component: resolve => require(['@/views/web'], resolve),
          redirect: '/category/hot',
          children: [
            {
              path: '/category/hot',
              component: () => import('@/views/skill/hot')
            },
            {
              path: '/category/java',
              component: () => import('@/views/skill/java')
            },
            {
              path: '/category/website',
              component: () => import('@/views/skill/website')
            },
          ]
        },*/
    {
      path: '/books',
      component: resolve => require(['@/views/books'], resolve),
    },
    {
      path: '/about',
      component: resolve => require(['@/views/about'], resolve),
    },
    {
      path: '/nav',
      component: resolve => require(['@/views/nav'], resolve),
    }
  ]
})
