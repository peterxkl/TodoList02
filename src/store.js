import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)

const state = {
    list:[
        
    ],
    dataStatus:["All","Active","Complete"],
    dataStatusIndex: 0,
    whichshow:true,
    defultshow:true
}

const mutations = {
    add(state,inputValue1){
        state.list.push({text:inputValue1,finished:false,isEditing:false});
    },
    switchStatus(state,index) { 
        state.dataStatusIndex = index
        if (state.dataStatus[index] === "Active") {
            state.defultshow = false
            state.whichshow = false
        } else if (state.dataStatus[index] === "Complete") {
            state.defultshow = false
            state.whichshow = true
        } else if (state.dataStatus[index] === "All") {
            state.defultshow = true
        }
     },

}

const store = new Vuex.Store({
    state: state,
    mutations: mutations
})

export default store;