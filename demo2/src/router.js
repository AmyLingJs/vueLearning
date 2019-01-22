import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login'
import Home from './views/Home.vue';
import List from './views/List.vue';
import User from './views/User.vue';
import Add from './views/Add.vue';

Vue.use(Router);

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path:'/home',
      component:Home,
      children:[
        {path:'list',component:List},
        {path:'user',component:User}
      ]

    },
   
    {
      path: '/add',
      name: 'add',
      component: Add,
    },

  ],
});
