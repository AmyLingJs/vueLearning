<template>
    <div>
      
      <ul>
          <li v-for="(item,index) in pageLists" 
           :key="index">
           <div class="biaoti news">{{item.title}}</div>
           <div class="news">{{item.content}}  
               <div class="xiangqing" v-on:click="checkDetails">详情</div>
               
               </div>
          <div class="news">{{item.createDate}}</div>
          </li>
      </ul>
    </div>
</template>
<script>
import store from '@/store'
export default {
    name:'List',
    store,
        methods: {
        checkDetails() {
             console.log(1111111111111)
             this.$router.push({path:'/home/details'})
        }
    },
    computed:{
        pageLists() {
            return store.state.lists
        }
    },

}
</script>
<style lang="scss" scoped>
body {
    font-size: 16px;

}
ul {
    list-style-type: none;
    text-align: left;
    padding-left: 0;
}
li {
    // width: 100%;
    border: 1px solid #aaa;
    border-radius: 10px;
    margin-bottom: 2%;

}
.biaoti {
    font-weight: bold;
    border-bottom: 1px solid #aaa;
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
  
   
}
.news {
 width: 96%;
    margin-left: 2%;
    margin-bottom: 10px;
}

.xiangqing {
    float: right;
    font-size: 14px;
    font-style: italic;
    color: blue;
}
</style>


