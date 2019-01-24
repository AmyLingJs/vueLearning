import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
      id:0,
      title: '测试1',
      content: '我是吃屎1测试1测试1测试1content',
      createDate:'aaaaaaaaa'
    },
     {
      id:1,
      title: '测试2',
      content: '2我是吃屎1测试1测试1测试1content',
       createDate: 'bbbbbbbbbb'
    }, 
    {
      id:2,
      title: '测试3',
      content: '3我是吃屎1测试1测试1测试1content',
      createDate: '2019/1/23 13:20:08'
    }]

  },
  mutations: {
    addItem(state, value) {
      state.lists.push(value)
    }

  },
  actions: {

  },
});
