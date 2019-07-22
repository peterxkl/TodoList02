import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    list:[
    ],
}

const mutations = {
    add(state,inputValue1){
        state.list.push({text:inputValue1,finished:false,isEditing:false});
    },

}

const store = new Vuex.Store({
    state: state,
    mutations: mutations
})

export default store;