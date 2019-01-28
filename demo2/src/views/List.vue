<template>
    <div>
      
      <ul>
          <li v-for="(item,index) in pageLists" 
           :key="index">
           <div class="biaoti news">{{item.title}}</div>
           <div class="news">
               <div v-text="getContent(index)"  
               v-on:click="checkDetails(index)"
                v-on:mouseover="addClassBlue($event)" 
                v-on:touchstart = "addClassBlue($event)"
           v-on:mouseout="removeClassBlue($event)"
               ></div>
               <div class="xiangqing" v-on:click="editDetails(index)">编辑</div>
               
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
    data () {
        return {
            current:0,
            classenable:false
        }
    },
        methods: {
        checkDetails(index) {
             this.$router.push({path:'/home/details',query:{index:index}})
        },
        editDetails(index) {
            this.$router.push({path:'/add',query:{index:index}})

        },
        getContent(index) {
            return this.pageLists[index].content.slice(0,20)+'...'
        },
        addClassBlue($event) {
            console.log(1234)
            $event.currentTarget.className = "classblue"
        },
        removeClassBlue($event) {
            $event.currentTarget.className = ""
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

.classblue {
    color:blue;
    cursor: pointer;
}

.xiangqing {
    float: right;
    font-size: 14px;
    font-style: italic;
    color: blue;
}
</style>


