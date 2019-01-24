<template>
    <div>
        <img src="../assets/logo.png" alt="">
        <div class="welcome">
           {{username}} 
           <p> 欢迎来到个人中心</p>
 
        </div>
        <div class="button1">
    <router-link to="/add">添加</router-link>
        </div>

        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'User',
    data() {
        return {
            username:localStorage.getItem("name")

        }
    }

}
</script>
<style lang="scss" scoped>
.welcome {
    margin-bottom: 20px;
}
.button1 {
    background: #42b983;
    width: 80%;
    height: 40px;
    line-height: 40px;
    margin-left: 10%;
    margin-right: 10%;

    a {
        display: block;
        text-decoration: none;
        color: #fff;
    }

}
</style>

