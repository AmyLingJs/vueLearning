<template>
    <div>
        <h2>{{news.title}}</h2>
        <div class="author">
           <span>{{news.author}}</span> 
           <span>{{news.createDate}}</span>
            </div>
        
        <div class="content">{{news.content}}</div>
















    </div>
    
</template>
<script>

import store from '../store';
export default {
    name:'Details',
    store,
    data() {
        return {
            //接收由list页面传递的index 
           news:store.state.lists[this.$route.query.index]


        }
    },
    methods: {
    
    }

}
</script>
<style lang="scss" scoped>
body {
    padding: 0;
    margin: 0;
    font-size: 16px;
}
.content {
    border-top: 1px solid #aaa;
    padding-top: 20px;
    text-align: left;
    text-indent: 2rem;
}
.author {
    display: flex;
    flex-flow:row nowrap;
    margin-bottom: 10px;


    span {
        flex: 1;
    }
}

</style>
