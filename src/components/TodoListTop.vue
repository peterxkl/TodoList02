<template>
  <div id="top">
    <h2>Jquery To Do List</h2>
    <h4>Simple Todo List with adding and filter by fiff status</h4>
    <input type="text" v-model="inputvalue" @keyup.enter="add"><button @click="add">Add</button>
  </div>
</template>

<script>
    //import store from '../store.js'
    import '../assets/index.css'
    import title from './TodoTitle.vue'
    import axios from 'axios'
    export default {
        name: "TodoListTop",
        data () {
            return {
              inputvalue: ''
            }
        },
        components: {
            // title
        },
        methods: {
            add(){
              this.$store.dispatch('addTodoList',this.inputvalue)
              this.inputvalue='';
            },
        },
    }
</script>

<style scoped>

</style>