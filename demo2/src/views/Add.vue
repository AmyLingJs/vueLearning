<template>
    <div>
        <div class="title2">标题</div> 
      <input type="text"  class="title1" v-model="title" />
       
        <div class="title2">  内容</div>
      
   
        <textarea class="content1" type="textarea" rows="20" v-model="content"/>
     
        <div class="buttonArea">
       <button class="button1" type="button" @click="addNews">完成</button>
       <button type="button" @click="cancelInput">取消</button>
       </div>
    </div>
</template>
<script>
import store from '../store.js'
export default {
    name:'Add',
    store,
    data() {
        return {
            title:'',
            content:''

        }
    },
    methods:{
        addNews() {
            store.commit('addItem',{
                title:this.title,
                content:this.content
            })
            this.title="";
            this.content="";
            //添加新闻成功后跳转到list页面
            this.$router.push({path:'/home/list'})
            
        },
        cancelInput() {
            this.title="";
            this.content="";
        }
    }
}
</script>

 <style lang="scss" scoped>
 body {
     font-size: 16px;
 }
 .title2 {
    //  font-size: 16px;
     height: 40px;
     line-height: 40px;
     width: 94%;
     margin-left: 3%;
     margin-right: 3%;
     text-align: left;
 }
 .title1 {
     height: 30px;
     line-height: 30px;
     width: 94%;
     margin-left: 3%;
     margin-right: 3%;
     border: 1px solid #aaa;
     border-radius: 5px;
 }
.content1 {
    // height: 300px;
     width: 94%;
     margin-left: 3%;
     margin-right: 3%;
     border: 1px solid #aaa;
     border-radius: 5px;
}
.buttonArea {
    display: flex;
    flex-flow: row nowrap;
    justify-content:space-between;
      width: 94%;
     margin-left: 3%;
     margin-right: 3%;
    margin-top: 100px;
    button {
        width: 45%;
        height: 40px;
        line-height: 40px;
        border: 1px solid #42b983;
        border-radius: 5px;
        background: #fff;
        color: #42b983;
    } 
    .button1 {
        background: #42b983;
        color: #fff;
}

}

</style>


</style>
