<template>
    <div>
        <!-- <router-link to="/">返回</router-link> -->
        <div id="welcome">
           <router-link :to="{ name: 'Todo', params: { userName: inputvalue }}" >开始使用</router-link>
           <input type="text" v-model="inputvalue" placeholder="请输入姓名"/> 
        </div>
    </div>
</template>

<script>
   export default {
        data () {
          return {
              inputvalue:''
          }
        },
        computed:{
            values(){
                return this.inputvalue
            }
        },
        methods: {
           
        },
    }
</script>

<style >
#welcome{
     align-content:center,

}
</style>

