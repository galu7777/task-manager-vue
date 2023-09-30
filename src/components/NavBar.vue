<script>
    import SideBar from './SideBar.vue'
    export default {
        data () {
            return {
                drawer: null,
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('isLogout')
            }
        },
        components: {
            sideBar: SideBar,
        },
    }
</script>
<template>
    <v-layout>
      <v-app-bar
        color="#313843"
        density="compact"
      >
        <template v-slot:prepend>
          <v-app-bar-nav-icon><img src="../assets/check.png" alt="check" class="img"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Tasks Manager App</v-app-bar-title>

        <template v-slot:append>
            <span class="cursor text-danger" @click.stop="drawer = !drawer">
                <i class="fa-solid fa-bars fa-size" style="color: #edeff2;"></i>
            </span>
        </template>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        temporary
        color="#313843"
      >
        <v-list density="compact" nav>
          <v-list-item>
            <span class="cursor">          
                <router-link to="/home" class="list-group-item">
                    <i class="fa-solid fa-house fa-size-md" style="color: #fff;"></i> Home
                </router-link>
            </span>
          </v-list-item>
          <v-list-item>
            <span>
                <router-link to="/config" class="list-group-item">
                    <i class="fa-solid fa-gear fa-size-md" style="color: #fff;"></i> Configuraciones
                </router-link>
            </span>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
          <v-list-item>
            <span class="cursor text-danger" @click.prevent="logout">
              <i class="fa-solid fa-right-from-bracket fa-size"></i>
            </span>
          </v-list-item>
      </v-navigation-drawer>
           
    </v-layout>
  <!-- </v-card> -->
</template>

<style>
    .ctn{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .img {
        height: 2rem;
        margin-right: 5px;
    }
    .fa-size {
    font-size :2em;
    }
</style>