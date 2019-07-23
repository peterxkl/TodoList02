<template>
    <div id="medium">
        <ol>
            <li v-for="todo in this.$store.state.list" :key="todo" v-show="defultshow||(whichshow?todo.finished:!todo.finished)">
                <input type="checkbox" style="zoom:150%" v-model="todo.finished" @click="updateTodo(todo)">
                <span :class="{finish: todo.finished}" @dblclick="toEdit(todo)" v-show="!todo.isEditing">
                     {{todo.text}}
                </span>
                <input type="text" v-model="todo.text" v-show="todo.isEditing" 
                       v-todo-focus="todo.text" @blur="unEdit(todo)">  
                <input type="button" value="删除" @click="deleteitem(todo)">
            </li>
        </ol>
    </div>
</template>

<script>
    //import store from '../store.js'
    import '../assets/index.css'
    export default {
        name: "medium",
        methods: {
            toEdit(obj) { //使添加的todothing可编辑
                 obj.isEditing = true
            },
            unEdit(obj) { //使添加的todothing不可编辑
                obj.isEditing = false
                this.$store.dispatch('updateTodo1',obj)
            },
            updateTodo(todo){
                this.$store.dispatch('updateTodo',todo)
            },
            deleteitem(todo){
                this.$store.dispatch('deleteitem',todo)
            }
        },
        computed: {
            defultshow(){
                return this.$store.state.defultshow;
            },
            whichshow(){
                return this.$store.state.whichshow;
            }

        },
        directives: { //自定义focus指令,需要一个binding参数做判断
        "todo-focus": function (el, binding) {
          if (binding.value) {
           el.focus()
          }
        }
      }
    }
</script>

<style>

</style>

