import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists: [
      {
      id:0,
      title: '测试1',
        content: '我是吃屎1测试1测试1测试1content我是吃屎1测试1测试1测试1content我是吃屎1测试1测试1测试1content',
      author:'test1',
      createDate:'aaaaaaaaa'
    },
     {
      id:1,
      title: '测试2',
      content: '我是吃屎测试测试测试反反复复付付付付付付付付付付付付付',
       author: 'test1',
      createDate: 'bbbbbbbbbb'
    }, 
    {
      id:2,
      title: '测试3',
      content: '3我是吃屎1测试1测试1测试1content',
      author: 'test1',
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
