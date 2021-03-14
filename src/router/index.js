import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由懒加载
const Home=()=>import('../views/Home.vue')
const Search=()=>import('../views/search.vue')
const Detail=()=>import('../views/detail.vue')
const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path:'/search',
    component:Search
  },
  {
    path:'/detail',
    component:Detail,
    name:"detail"
  }
]

const router = new VueRouter({
  routes
})


// 防止出现重复点击路由时报错

//保存原来的push函数
const VueRouterPush =VueRouter.prototype.push
//重写push函数
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)  //返回err
}


export default router
