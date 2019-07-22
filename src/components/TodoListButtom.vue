<template>
  <div id="buttom">
    <a href="#" :class="{active:index===dataStatusIndex}" v-for="(item,index) in dataStatus" @click="switchStatus(index)" :key="index">{{item}}</a>
  </div>
</template>

<script>
import '../assets/index.css';
export default {

}
</script>

<style>

</style>
