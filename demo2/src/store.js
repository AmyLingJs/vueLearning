import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
      title: '测试1',
      content: '我是吃屎1测试1测试1测试1content',
      createDate:'aaaaaaaaa'
    },
     {
      title: '测试2',
      content: '2我是吃屎1测试1测试1测试1content',
       createDate: 'bbbbbbbbbb'
    }, 
    {
      title: '测试3',
      content: '3我是吃屎1测试1测试1测试1content',
      createDate: 'ccccccccccc'
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
