<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" 
               :key="index" 
               @click="highlight(index)"
               :class="{active:current===index &&current !== ' '}">
               {{item}}
              
            </li>
             <button type="button" @click="add">add</button>
        </ul>
        <ul>
            <li
              v-for="(item,index) in targets" 
              :key="index"
            >{{item}}
              <button type="button" @click="delete1(index)">delete</button>
            </li>
        </ul>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            list:[1,2,3,4,5,6,7,8,9],
            targets:[],
            current:''
        }
    },
    methods: {
        highlight:function (index) {
            this.current = index
        },
        add:function(index) {
            if(this.current === "") { return}
            this.targets.push(this.list[this.current])
            this.current = ''

        },
        delete1:function(index) {
            this.targets.splice(index,1)
        }
    }
}
</script>
<style scoped>
li.active {
    background-color: green;
}
</style>


