<template>
    <div>
        <img src="../assets/logo.png" alt="">
        <div>
            欢迎来到个人中心
            <button type="button" @click="add1">test</button>
        </div>
    <router-link to="/add">添加</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name:'User',
    methods:{
        add1() {
            console.log(this)
        }
    }
}
</script>
