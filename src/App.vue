<template>
  <div class="container">
    <Header @toggle-add-task="toggleAddTask" title="Task Tracker" :showAddTask="showAddTask"></Header>
    <div v-if="showAddTask">
      <AddTask @add-task="addTask" />
    </div>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" v-bind:tasks="tasks" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/App-Header.vue'
import Footer from './components/App-Footer.vue'
import Tasks from './components/App-Tasks.vue'
import AddTask from './components/App-AddTask.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Tasks,
    AddTask,
  },
  // props: {
  //   tasks: Array
  // },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    }
  },
  methods: {
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },
    async deleteTask(id) {
      console.log('task', id)

      if (confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE',
        })

        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')


      }
    },
    async toggleReminder(id) {
      console.log('Toggle reminder #', id);
      const taskToToggle = await this.fetchTask(id)
      const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      console.log(updateTask)

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(updateTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task)
    },
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
    async fetchTasks() {
      const res = await fetch(`api/tasks`)
      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/${id}`)
      const data = await res.json()

      return data
    }
  },
  async created() {
    // this.tasks = [
    //   {
    //     id: 1,
    //     text: 'Doctors Appointment',
    //     day: 'March 1st at 2:30pm',
    //     reminder: true,
    //   },
    //   {
    //     id: 2,
    //     text: 'Dental Appointment',
    //     day: 'March 5st at 9:00am',
    //     reminder: false,
    //   },
    //   {
    //     id:3,
    //     text: 'Appointment',
    //     day: 'March 5st at 9:00am',
    //     reminder: true,
    //   },
    // ]
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
