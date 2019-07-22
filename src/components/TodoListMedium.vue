<template>
    <div id="medium">
        <ol>
            <li v-for="todo in this.$store.state.list" :key="todo">
                <input type="checkbox" style="zoom:150%" v-model="todo.finished">
                <span :class="{finish: todo.finished}">
                     {{todo.text}}
                </span>
            </li>
        </ol>
    </div>
</template>

<script>
    //import store from '../store.js'
    import '../assets/index.css'
    export default {

    }
</script>

<style>

</style>

