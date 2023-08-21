<script>
import Navbar from './components/NavBar.vue'
import Task from './components/Task.vue'

export default {
  name: 'App',
  components: {
    navBar: Navbar,
    Task
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
    background-image: url('./assets/beach.jpg');
    background-size: cover;
    background-position: center;
    }
</style>