import Router  from 'vue-router'
import Chat from '../views/Chat.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register'
import Vue from 'vue'



Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'homepage',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
