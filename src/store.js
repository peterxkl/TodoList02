import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

const state = {
    list:[
        
    ],
    dataStatus:["All","Active","Complete"],
    dataStatusIndex: 0,
    whichshow:true,
    defultshow:true
}

const mutations = {
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
     addTodoList(state,items){
         state.list.push(...items);
     },
     deleteitem(state,item){
         for(let i=0;i<state.list.length;i++){
             if(state.list[i].id===item.id){
                 state.list.splice(i,1);
             }
         }
     }

}

const action = {
    //要使用axios.put()更新方法
    // switchStatus({commit},index){
    //     state.dataStatusIndex = index
    // },
    getTodoList({commit}){
        axios.get('http://localhost:3001/todos')
               .then(response => {
                   console.log(response);
                   commit("addTodoList",response.data)
                })
    },
    addTodoList({commit},inputValue1){
        let item={id:state.list.id+1,text:inputValue1,finished:false,isEditing:false}
        axios.post('http://localhost:3001/todos',item)
               .then(response => {
                   console.log(response);
                   commit("addTodoList",[response.data])
                })
    },
    switchStatus({commit},index){
       commit("switchStatus",index);
    },
    updateTodo({commit},todo){
        todo.finished=!todo.finished
        axios.put(`http://localhost:3001/todos/${todo.id}`,todo)
               .then(response => {
                   console.log(response);
                })
    },
    deleteitem({commit},todo){
        axios.delete(`http://localhost:3001/todos/${todo.id}`,todo)
               .then(response => {
                   console.log(response);
                   commit("deleteitem",todo)
                })
    },
    updateTodo1({commit},todo){
        axios.put(`http://localhost:3001/todos/${todo.id}`,todo)
               .then(response => {
                   console.log(response);
                })
    },
}

const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: action
})

export default store;