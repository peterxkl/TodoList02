<template>
    <div id="body">
        <div id="main">
            <top/>
            <medium/>
            <buttom/>
        </div>
    </div>
</template>

<script>
    //import store from '../store.js'
    import '../assets/index.css';
    import top from './TodoListTop.vue';
    import medium from './TodoListMedium.vue';
    import buttom from './TodoListButtom.vue';
    export default {
        name: "body",
        components: {
            top,
            medium,
            buttom,
        },
    }
</script>

<style scoped>

</style>