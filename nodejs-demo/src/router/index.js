import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from '../components/root/Root.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/root',
    name: 'root',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/root/Root.vue')
  },
  {
    path:"/",
    component:Root,
    children:[
      {
        path: "",
        name: "postlist",
        component: () => import("../components/PostList/PostList.vue"),
      },
    ]
  },
  {
    path:"/detail",
    component:Root,
    children:[
      {
        path: "",
        name: "detail/:id",
        component: () => import("../components/Detail/Detail.vue"),
      },

    ]
  },
  {
    path: "/log",
    component: Root,
    children:[
      {
        path: "",
        name: "log",
        component: () => import("../components/Log/Log.vue"),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
