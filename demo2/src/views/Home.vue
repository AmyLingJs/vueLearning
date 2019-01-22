<template>
  <div>
        <router-view></router-view>
        <ul class="footer">
          <li class="icons">  <router-link to="/home/list">新闻列表</router-link></li>
          <li class="icons"> <router-link to="/home/user">用户中心</router-link></li>
        </ul>
  
   

  </div>

</template>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
a {
  text-decoration: none;
}
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  flex-flow: row nowrap;
  justify-content:space-around
}
.icons {
  font-size: 16px;
  border-top: 1px solid #42b983;
  text-align: center;
  flex: 1;
  a {
    color: #42b983;
    display: block;
    &.active {
      color: #fff;
      background: #42b983;
    }
  }
  
  
}
</style>
