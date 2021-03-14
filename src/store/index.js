// import { from } from 'core-js/core/array'
import Vue from 'vue'
import Vuex from 'vuex'

import {request} from '../util/request'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    recomendItem:[],    //推荐列表
    activeId:'0',        //当前点击的栏目
    articleList:{}       //文章当前内容
  },
  mutations: {
    //设置推荐列表
    set_recomendItem(state,list){
      localStorage.setItem("recomendItem",JSON.stringify(list));
      state.recomendItem=list;
    },
    //设置当前点击的栏目
    set_activeItem(state,id){
      localStorage.setItem("activeId",id);
      state.activeId=id;
    },
    // 设置当前获取的文章数据
    set_activeList(state,val){
      state.articleList=val;
    }
  },
  actions: {
    //获取推荐列表
    get_recomendItem(context){
      let list=JSON.parse(localStorage.getItem("recomendItem")||'[]');
      //若localstorage无，则取默认值
      if(list.length==0){
        list=[
          {id:'0',name:'关注',path:'content1'},
          {id:'1',name:'推荐',path:'content2'},
          {id:'2',name:'热榜',path:'content3'},
          {id:'3',name:'视频',path:'content1'},
          {id:'4',name:'广州',path:'content1'},
          {id:'5',name:'中医',path:'content1'},
          {id:'6',name:'抗疫',path:'content1'},
          {id:'7',name:'动漫',path:'content1'},
          {id:'8',name:'电影',path:'content1'}
        ]
      }
      context.commit('set_recomendItem',list)
    },
    //获取当前点击的列表
    get_activeItem(context){
      let id=JSON.parse(localStorage.getItem('activeId')||'0');
      context.commit('set_activeItem',id);
    },
    // 根据参数获取当前文章数据
    get_articleList({commit},id){   //解构赋值
      request('post','article',id).then(res=>{
        commit('set_activeList',res)
      })
    }
  },
  modules: {
  }
})
