<template>
    <div v-for="task in tasks" v-bind:key="task.id">
        <Task @delete-task="$emit('delete-task', task.id)" :task="task" />
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
    },
    emits: ['delete-task'],
}
</script>