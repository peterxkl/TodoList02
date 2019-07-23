<template>
    <div>
       <div id="me">
           <img src="../assets/logo.png"/>
           <div>姓名:{{username1}}</div>
           <div>电话:{{phone}}</div>
       </div>
    </div>
</template>

<script>
export default {
        computed:{
           username1(){
               return this.$route.params.userName;
           },
           phone(){
               return this.$route.params.phone;
           }
        },
}
</script>

<style scoped>

</style>
