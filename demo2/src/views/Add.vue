<template>
    <div>
        <span>标题</span> 
        <div> <input type="text" /></div>
       
        内容
        <div>
             <input type="textarea" />
        </div>
       <button type="button" @click="addNews">完成</button>
       <button type="button" @click="cancelInput">取消</button>
    </div>
</template>
<script>
export default {
    name:'Add',
    methods:{
        addNews() {
            console.log(11111111111111)
        },
        cancelInput() {
            console.log('cancel')
        }
    }
}
</script>

