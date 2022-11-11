<template>
    <header>
        <h1>{{title}}</h1>
        <Button text="Add Task" color="green"></Button> 
    </header>
</template>

<script>
    import Button from './App-Button.vue'
    export default {
        name: 'App-Header',
        props: {
            title: {
                type: String,
                default: 'Hello World',
            }
        },
        components: {
            Button
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>