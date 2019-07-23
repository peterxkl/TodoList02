<template>
    <div>
        <!-- <router-link to="/">返回</router-link> -->
        <div id="welcome">
           <router-link :to="{ name: 'Todo', params: { userName: inputvalue1,phone: inputvalue2 }}" >开始使用</router-link>
           <input type="text" v-model="inputvalue1" placeholder="请输入姓名"/>
           <input type="text" v-model="inputvalue2" placeholder="请输入电话"/> 
        </div>
    </div>
</template>

<script>
   export default {
        data () {
          return {
              inputvalue1:'',
              inputvalue2:'',
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

