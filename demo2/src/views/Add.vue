<template>
    <div>
        <span>标题</span> 
        <div> <input type="text" v-model="title" /></div>
       
        内容
        <div>
             <input type="textarea" v-model="content"/>
        </div>
       <button type="button" @click="addNews">完成</button>
       <button type="button" @click="cancelInput">取消</button>
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
            
        },
        cancelInput() {
            this.title="";
            this.content="";
        }
    }
}
</script>

