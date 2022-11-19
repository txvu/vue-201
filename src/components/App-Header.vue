<template>
    <header>
        <h1>{{ title }}</h1>
        <Button 
        
        @btn-click="$emit('toggle-add-task')" :text="showAddTask ? 'Close' : 'Add Task'"
            :color="showAddTask ? 'red' : 'green'">
        </Button>
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

        },
        showAddTask: Boolean,
    },
    components: {
        Button
    },
    computed: {
        homePage() {
            if (this.$router.path === '/') {
                return true
            } else {
                return false
            }
        }
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