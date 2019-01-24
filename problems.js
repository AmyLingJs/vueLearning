/**
 * 曾经出现的问题：
* 1.v-on:click无效，无法执行事件，f12查看发现是button在el元素也就是id为
                    app的div外部                  
 */


 /** 
  * 升级npm：npm install -g npm@latest
  * vue create my-vue1或者vue ui可视化创建项目
  * 
  * vue组件化的思想：独立 可复用 整体化
  * 为什么要组件化：复用 高效 开发复杂的单页面应用
  * 组件拆分的原则：300行原则 复用原则 业务复杂性原则
  * 
  * 阅读vue风格指南https://cn.vuejs.org/v2/style-guide/
  * 
  * 
  * 直接运行新创建的demo.vue文件
  * vue serve demo.vue
  * 注意：需要全局安装vue serve:npm install -g @vue/cli-service-global
  * 安装时间有点点久，耐心等待
  * 安装成功后,执行，浏览器打开http://localhost:8080/
  * 
  * demo2为一个实例
  * 1.利用vue ui创建文件目录demo2
  * 2.需求分析：创建home页面、登录注册页面、新闻列表页面、个人中心页面、添加新闻页面
  * vue二级路由配置
  *  {
  *    path:'/home',
  * component:Home,
  * children:[
  *  { path:'list',component:list},
  * { path:'user',component:user}
  * ]
  * }
  * 
  * 
  * .vue页面跳转：
  *   //跳转到home页面
        this.$router.push({path:'/home'})

    添加样式，主要用到的是flex，真的很好用


    router 子路由 懒加载
      children:[
        { path: 'list', component: () => import(/*webpackChunkName:list *//*'./views/List.vue')},
        { path: 'user', component: () => import(/*webpackChunkName:user *//*'./views/User.vue') }
      ]

      this.$router.push


      新的需求：添加一个新闻的详情页
      这样的话就必须给每个新闻一个id，然后还要取得store里面的lists的长度，id是根据lists的长度定的，
      lists长度为1的话，接下来的新闻的id就为2
      


 */
