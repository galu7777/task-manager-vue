<script>
  import { reTaskInDashboard } from '../helpers/storeHelpersTasks';
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
        reTaskInDashboard(JSON.parse(localStorage.token))
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