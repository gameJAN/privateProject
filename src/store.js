import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: { // 初始化状态 设置全局访问的state对象
    loginData: {}, // 登录时用户
    homeJump: '', // 首页跳转哪个模块
    navBar: '' // 导航栏点击模块
  },
  getters: { // 实时监听state值的变化， 值的最新状态
    getLoginData (state) {
      return state.loginData
    },
    getHomeJump (state) {
      return state.homeJump
    },
    getNavBar (state) {
      return state.navBar
    }
  },
  mutations: { // 处理状态
    changeLoginData (state, payload) {
      state.loginData = payload;
    },
    changeHomeJump (state, payload) {
      state.homeJump = payload;
    },
    changeNavBar (state, payload) {
      state.navBar = payload;
    }
  },
  actions: { // 提交改变后的状态
    changeLoginData (store, payload) {
      store.commit({
        type: 'changeLoginData',
        loginData: payload
      })
    },
    changeHomeJump (store, payload) {
      store.commit({
        type: 'changeHomeJump',
        homeJump: payload
      })
    },
    changeNavBar (store, payload) {
      store.commit({
        type: 'changeNavBar',
        navBar: payload
      })
    }
  }
})
