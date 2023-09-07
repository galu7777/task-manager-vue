<script>
    import { sigUpSwal } from '../helpers/modalSwal.js'
    export default {
        data() {
            return {
                user: {
                    nick_name: '',
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            async sigup() {
                   sigUpSwal(this.user)                
            }
        }
    }
</script>

<template>
    <div class="container w-75 mt-5 bg-container rounded">
        <div class="row align-items-stretch">
            <div class="col bg-registro d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">

            </div>
            <div class="col p-5 rounded-end">
                <div class="text-end">
                    <img src="../assets/check.png" width="48" alt="">
                </div>
                <h2 class="fw-bold text-center py-5">Registrarse</h2>
                    <!--- login --->
                <form action="">
                    <div class="mb-4">
                        <label for="text" class="form-label">User Name</label>
                        <input id="text" v-model="user.nick_name" type="text" class="form-control" name="nick_name">
                    </div>
                    <div class="mb-4">
                        <label for="email" class="form-label">Email</label>
                        <input id="email" v-model="user.email" type="email" class="form-control" name="email">
                    </div>
                    <div class="mb-4">
                        <label for="password" class="form-label">Password</label>
                        <input id="password" v-model="user.password" type="password" class="form-control" name="password">
                    </div>

                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary" @click.prevent="sigup">Registrarme</button>
                    </div>
                    
                    <div class="my-3 row">
                        <span>Ya tienes una cuenta ? <router-link to="/login">Iniciar Sesion</router-link></span>
                        <span><a href="#">Recuperar Password</a></span>
                    </div>
                    <!-- redes sociales -->
                    <!-- <div class="container w-100 my-5 text-center">
                        <div class="row">
                            <div class="col-12">Iniciar sesion</div>
                        </div>
                    </div> -->

                    <div class="row">
                        <div class="col">
                            <button class="btn btn-outline-primary w-100 my-1">
                                <div class="row align-items-center">
                                    <div class="col-2 d-none d-md-block">
                                        <img src="../assets/facebook.svg.webp" width="32" alt="">
                                    </div>
                                    <div class="col-12 col-md-10 text-center">
                                        Facebook
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div class="col">
                            <button class="btn btn-outline-danger w-100 my-1">
                                <div class="row align-items-center">
                                    <div class="col-2 d-none d-md-block">
                                        <img src="../assets/google.png" width="32" alt="">
                                    </div>
                                    <div class="col-12 col-md-10 text-center">
                                        Google
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    </div>
</template>

<style>
    body{
        background: #212529;
        background: linear-gradient(to right, #212529, #5e768d);
    }
    a {
        text-decoration: none;
    }
    .bg-registro{
        background-image: url('../assets/register.jpg');
        background-position: center center;
    }
    .bg-container{
        background: #fff;
    }
</style>