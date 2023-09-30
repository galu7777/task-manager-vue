<script>
  import Navbar from './NavBar.vue'
    export default {
        name: 'App',
        components: {
            navBar: Navbar
        },
        data(){
            return {
                user: {
                    nick_name: '',
                    email: ''
                }
            }
        }
    }
</script>

<template>
    <div class="fondo">
        <navBar/>
        <div class="container">
          <div class="bg-container">
            <h1>Hola</h1>
            <ul>
                <li></li>
            </ul>
            <input type="text">
            <input type="text">
            <input type="text">
          </div>
        </div>
    </div>
</template>

<style>
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 25%;
    }
    .bg-container{
        display: flex;
        flex-direction: row;
        /* justify-content: center;
        align-items: center; */
        background: #fff;
        height: 50%;
        width: 50%;
    }
</style>
