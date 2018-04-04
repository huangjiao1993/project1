// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import router from './router'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import home from './components/home'
import axios from 'axios'
//import Users from './components/Users'
Vue.use(VueRouter)
Vue.prototype.$api = axios
Vue.config.productionTip = false
Vue.config.devtools = true; //这步很重要
//全局注册组件
//Vue.component("users",Users);
//配置路由
var router = new VueRouter({
  mode: 'history',
  routes:[
      {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component:HelloWorld
          // {
          //     HelloWorld: HelloWorld,
          //     //left: leftCom,
          //     //main: mainCom
          // }
      },
      {
        path: '/home',
        name: 'home',
        component:home
        // {
        //     HelloWorld: HelloWorld,
        //     //left: leftCom,
        //     //main: mainCom
        // }
    }
  ]
})
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue(Vue.util.extend({ el: '#app', router}, App));
