<template>
    <div id="body">
        <div id="main">
            <div id="top">
                <h2>Jquery To Do List</h2>
                <h4>Simple Todo List with adding and filter by fiff status</h4>
                <input type="text" v-model="inputValue" @keyup.enter="add"><button @click="add">Add</button>
            </div>
            <div id="medium">
                <ol>
                    <li v-for="todo in list" v-show="defultshow||(whichshow?todo.finished:!todo.finished)">
                        <input type="checkbox" style="zoom:150%" v-model="todo.finished">
                        <span :class="{finish: todo.finished}" @dblclick="toEdit(todo)" v-show="!todo.isEditing">
                            {{todo.text}}
                        </span>
                        <input type="text" v-model="todo.text" v-show="todo.isEditing"
                               v-todo-focus="todo.text" @blur="unEdit(todo)">
                    </li>
                </ol>
            </div>
            <div id="buttom">
                <a href="#" :class="{active:index===dataStatusIndex}" v-for="(item,index) in dataStatus" @click="switchStatus(index)" :key="index">{{item}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    import '../assets/index.css';
    //import top from './TodoListTop';
    export default {
        name: "body",
        components: {
            // top
        },
        data () {
            return {
                inputValue:'',
                list:[


                ],
                dataStatus:["All","Active","Complete"],
                dataStatusIndex: 0,
                whichshow:true,
                defultshow:true,
            }
        },
        methods: {
            add:function(){
                this.list.push({text:this.inputValue,finished:this.finished,isEditing:false});
                this.inputValue = '';
            },
            switchStatus:function(index) {
                this.dataStatusIndex = index
                if (this.dataStatus[index] === "Active") {
                    this.defultshow = false
                    this.whichshow = false
                } else if (this.dataStatus[index] === "Complete") {
                    this.defultshow = false
                    this.whichshow = true
                } else if (this.dataStatus[index] === "All") {
                    this.defultshow = true
                }
            },
            toEdit:function(obj) {
                obj.isEditing = true
            },
            unEdit:function(obj) {
                obj.isEditing = false
            },
        },
        directives: {
            "todo-focus": function (el, binding) {
                if (binding.value) {
                    el.focus()
                }
            }
        }
    }
</script>

<style scoped>

</style>