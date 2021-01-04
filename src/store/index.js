import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  getters:{
    goodsTypeCount: state=>{
      return state.cartList.length
    }
  },
  mutations: {
    // addCart(state,payload){

    // }
    addCounts(state,payload){
      payload.count += 1
    },
    addProduct(state,payload){
      state.cartList.push(payload)
    }
  },
  actions: {
    addProduct({state,commit},payload){
      // console.log(payload);
      let index = state.cartList.find(item=>item.iid === payload.iid)
      console.log(index);
      if(index){
        commit('addCounts',index)
      }else{
        payload.count = 1
        commit('addProduct',payload)
      }

    }
  },
  modules: {}
})
