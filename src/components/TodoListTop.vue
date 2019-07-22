<template>
    <div id="top">
        <h2>Jquery To Do List</h2>
        <h4>Simple Todo List with adding and filter by fiff status</h4>
        <input type="text" v-model="inputValue" @keyup.enter="add"><button @click="add">Add</button>
    </div>
</template>

<script>
    import '../assets/index.css';
    export default {
        name: "TodoListTop"
    }
</script>

<style scoped>

</style>