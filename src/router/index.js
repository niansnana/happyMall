import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  // 商城首页
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home/Index')
  },
  // 商城消息页
  {
    path: '/news',
    component: () => import(/* webpackChunkName: "news" */ '@/views/news/Index')
  },
  // 商城购物车页
  {
    path: '/cart',
    component: () => import(/* webpackChunkName: "cart" */ '@/views/cart/Index')
  },
  // 商城用户页面
  {
    path: '/profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/Index')
  },
  // 商城用户页面
  {
    path: '/profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/Index')
  },
  // 用户设置页面
  {
    path: '/setting',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/Setting')
  },
  // 用户信息修改页面
  {
    path: '/editinfo',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/EditInfo')
  },
  // 用户收货地址页面
  {
    path: '/address',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/profile/AddressList')
  },
  // 商品详情页
  {
    path: '/detail/:id',
    component: () => import(/* webpackChunkName: "pay" */ '@/components/productDetail/Index')
  },
  // 商品支付页
  {
    path: '/pay/:id',
    meta: {
      requiresAuth: true
    },
    component: () => import(/* webpackChunkName: "pay" */ '@/components/pay/Index')
  },
  // 注册
  {
    path: '/register',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Register')
  },
  // 登录
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Index')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 路由导航
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!token) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
