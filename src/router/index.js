import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'    //首页
import Login from '@/components/Login'    //登录页面
import Test from '@/components/Test'    //测试用的页面
import Member from '@/components/Member'    //个人中心
import Goods from '@/components/Goods'    //商品添加购物车
import Shop_car from "../components/Shop_car";   //购物车第一步
import Address from "../components/Address";   //收货地址
import Shop_car2 from "../components/Shop_car2";
import Shop_car3 from "../components/Shop_car3";
Vue.use(Router)
//定义组件

export default new Router({
  routes: [
    // {path: '/', name: 'HelloWorld', component: HelloWorld},
    {
      path: '/',
      name: 'Index',
      component: Index,
      // meta: {
      //   title: '首页',
      //   keepAlive: true // 需要被缓存
      // }
    },
    {path: '/goods', name: 'goods', component: Goods},
    {path:'/login',component:Login},
    {path:'/test',component:Test},
    {
      path: '/member',
      name: 'member',
      component: Member,
      // meta: {
      //   title: '个人中心',
      //   keepAlive: true // 需要被缓存
      // }
    },
    {
      path: '/shop_car',
      name: 'shop_car',
      component: Shop_car,
    },
    {path: '/address', name: 'address', component: Address},
    {path: '/shop_car2', name: 'shop_car2', component: Shop_car2},
    {path: '/shop_car3', name: 'shop_car3', component: Shop_car3},
  ]
})
