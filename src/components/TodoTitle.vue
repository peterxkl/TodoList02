<template>
   <div id="top">
        <h2>{{title}}</h2>
        <h4>{{subtitle}}</h4>
   </div>
</template>

<script>
import '../assets/index.css'
export default {
    computed: {
        title(){
            return this.$store.state.title
        },
        subtitle(){
            return this.$store.state.subtitle;
        }
    },
}
</script>
