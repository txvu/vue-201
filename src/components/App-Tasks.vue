<template>
    <div v-for="task in tasks" v-bind:key="task.id">
        <Task :task="task" />
    </div>
</template>

<script>
import Task from './App-Task.vue'
export default {
    name: 'App-Tasks',
    props: {
        tasks: Array
    },
    components: {
        Task,
    }
}
</script>