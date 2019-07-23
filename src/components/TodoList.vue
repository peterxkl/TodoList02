<template>
    <div id="body">
        <div id="main">
            <button @click="returnBack">返回</button>
            <span>{{username}}</span>
            <top/>
            <medium/>
            <buttom/>
        </div>
    </div>
</template>

<script>
    //import store from '../store.js'
    import '../assets/index.css'
    import top from './TodoListTop.vue'
    import medium from './TodoListMedium.vue'
    import buttom from './TodoListButtom.vue'
    import axios from 'axios'
    export default {
        name: "body",
        components: {
            top,
            medium,
            buttom,
        },
        computed:{
           username(){
               return this.$route.params.userName;
           }
        },
        mounted:function(){
            this.$store.dispatch("getTodoList")
        },
        methods: {
            returnBack(){
                var result = confirm("Please make sure.");  
                if (result == true) {  
                      this.$router.go(-1);
                } else {  
                    //alert("What a bitch you are !");  
                }  
            },
        },
    }
</script>

<style scoped>

</style>