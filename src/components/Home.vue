<script setup>
import Navbar from './NavBar.vue'
import Task from './Task.vue'

const navBar = Navbar
// export default {
//   name: 'App',
//   components: {
//     navBar: Navbar,
//     Task
//   }
// }

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