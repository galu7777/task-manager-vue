<script>
  import Navbar from './NavBar.vue'

    export default {
        name: 'App',
        components: {
            navBar: Navbar
        }
    }
</script>

<template>
    <div class="fondo">
        <navBar/>
        <h1>Config</h1>
    </div>
</template>
