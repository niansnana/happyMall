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
  // 商品详情页
  {
    path: '/detail/:id',
    component: () => import(/* webpackChunkName: "pay" */ '@/components/productDetail/Index')
  },
  // 商品支付页
  {
    path: '/pay/:id',
    component: () => import(/* webpackChunkName: "pay" */ '@/components/pay/Index')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
