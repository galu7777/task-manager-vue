<script>
  import Navbar from './NavBar.vue'
  import { reInfoUser } from '../helpers/storeHelpersUsers'
    export default {
        name: 'App',
        components: {
            navBar: Navbar
        },
        data() {
            return {
                user: {
                    nick_name: '',
                    oldpassword: '',
                    newpassword: '',
                    repeatnewpassword: ''
                }
            }
        },
        created() {
            if (localStorage.token) {
                this.$store.state.token = JSON.parse(localStorage.token);
                reInfoUser(JSON.parse(localStorage.token))
            }
        },
        // computed: {
        //     User(){
        //         return this.$store.state.userData.user
        //     }
        // },
        methods: {
            async newPassword(){
                return this.$store.dispatch('changePassword', this.user)
            },
            hola(){console.log(hola)}
        }
    }
</script>

<template>
    <div class="fondo">
        <navBar/>
        <v-card
            class="mx-auto mt-18"
            max-width="344"
            title="Informacion de Usuario"
            color="#313843"
        >
            <v-container>
                <v-list-item title="Nombre de Usuario Actual: ">{{ $store.state.userData.user.nick_name }}</v-list-item>
                <v-list-item title="Email: ">{{ $store.state.userData.user.email }}</v-list-item>
                <v-text-field
                    v-model="user.nick_name"
                    color="primary"
                    label="Cambiar Nombre de Usuario"
                    variant="underlined"
                ></v-text-field>             

            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="success">
                Cambiar Nombre de Usuario

            <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
            </v-card-actions>
        </v-card>

        <v-card
            class="mx-auto mt-10"
            max-width="344"
            title="Cambiar Contraseña"
            color="#313843"
        >
            <v-container>
                <v-text-field
                    v-model="user.oldpassword"
                    color="primary"
                    label="Contraseña Actual"
                    placeholder="Ingresa tu vieja contraseña"
                    variant="underlined"
                ></v-text-field>

                <v-text-field
                    v-model="user.newpassword"
                    color="primary"
                    label="Nueva Contraseña"
                    placeholder="Ingresa tu nueva contraseña"
                    variant="underlined"
                ></v-text-field>

                <v-text-field
                    v-model="user.repeatnewpassword"
                    color="primary"
                    label="Repite tu Nueva Contraseña"
                    placeholder="Repite tu nueva contraseña"
                    variant="underlined"
                ></v-text-field>           

                </v-container>

                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="success" @click="newPassword">
                        Cambiar Nombre de Usuario

                    <v-icon icon="mdi-chevron-right" end></v-icon>
                    </v-btn>
                </v-card-actions>
        </v-card>
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
