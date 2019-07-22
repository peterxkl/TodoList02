<template>
  <div id="buttom">
    <a href="#" :class="{active:index===flag}" v-for="(item,index) in this.$store.state.dataStatus" @click="switchStatus(index)" :key="index">{{item}}</a>
  </div>
</template>

<script>
  import '../assets/index.css';
  export default {
      name: "buttom",
      data () {
          return {
              
          }
      },
      computed: {
            flag(){
                return this.$store.state.dataStatusIndex;
            }
        },
      methods: {
        switchStatus(index) { 
          this.$store.commit("switchStatus", index);
        },
    },
  }
</script>

<style>

</style>
