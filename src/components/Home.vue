<template>
    <div>
        <div id="top">
            <button @click="returnBack">返回</button>
            <span>{{username}}</span>
        </div>
        <div id="medium1">
            <div id="medium-left">
                <a class="first" @click="changeItem">TodoList列表</a>
                <a class="second" @click="changeItem">我的</a>
            </div>
            <div id="medium-right">
                <!-- <me v-show="choseItem"  /> -->
                <todolist  />
            </div>
        </div>
    </div>
</template>

<script>
import todolist from './TodoList.vue'
import me from './Me.vue'
import axios from 'axios'
export default {
        data(){
            return{
               choseItem:false
            }
        },
        components: {
            todolist,
            me
        },
        computed:{
           username(){
               return this.$route.params.userName;
           },
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
            changeItem(){
                this.choseItem=!this.choseItem
            }
        },
}
</script>

<style scoped>
#top{
    height: 40px;
}
#top button{
    float: left;
    width: 100px;
    height: 40px;
    background-color: red;
    color: #fff;
}
#top span{
    display: block;
    float: right;
    width: 100px;
    height: 40px;
    color: #000;
    /* background-color: aqua */
}
#medium1{
    margin-top: 20px;
}
#medium-left{
    width: 80px;
    height: 160px;
    float: left;
} 
#medium-left .first{
    width: 80px;
    height: 70px;
    background-color: aqua;
    margin-bottom: 10px;
    display: block;
    text-decoration:none;
    
}
#medium-left .second{
    width: 80px;
    height: 70px;
    background-color: aqua;
    display: block;
    text-decoration:none;
}
#medium-right{
    width: 1400px;
    margin-left: 20px;
    float: left;
}

</style>
