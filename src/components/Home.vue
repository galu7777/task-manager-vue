<script>
  import Navbar from './NavBar.vue'
  import Task from './Task.vue'

  // const navBar = Navbar
  export default {
    name: 'App',
    components: {
      navBar: Navbar,
      Task
    },
    created() {
      if (localStorage.token) {
      this.$store.state.token = JSON.parse(localStorage.token);
      }
      if (localStorage.tasksPending) {
        this.$store.state.Tasks = JSON.parse(localStorage.tasksPending);
      }
      if (localStorage.tasksSuccess) {
        this.$store.state.TasksSuccess = JSON.parse(localStorage.tasksSuccess);
      }
    }
  }
</script>

<template>
  <div class="fondo">
    <navBar />
    <Task />
  </div>
</template>

<style>
  .fondo {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-image: url('../assets/beach.jpg');
    background-size: cover;
    background-position: center;
    }
</style>