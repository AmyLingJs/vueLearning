<template>
    <div>
        新闻详情页111111111111111111
        <!-- <div>{{news.title}}</div>
        <div>{{news.content}}</div> -->
















    </div>
    
</template>
<script>
import store from '../store';
export default {
    name:'Details',
    store,
    data() {
        return {
           

        }
    },
    methods: {
        watch: {
            news() {
                return store.state.lists[0]
            }
            
        }
    }

}
</script>
