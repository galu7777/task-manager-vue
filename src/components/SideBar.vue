<script>
  export default {
    data() {
      return {
        isSidebarOpen: false,
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('isLogout')
      },
      toggleSidebar() {
        if(!this.isSidebarOpen){
          this.isSidebarOpen = !this.isSidebarOpen;
        } else this.isSidebarOpen = false
      }
    }
  }
</script>

<template>
  <div>
    <span class="cursor" @click.prevent="toggleSidebar">
      <i class="fa-solid fa-bars fa-size" style="color: #edeff3;"></i>
    </span>
    <div :class="{ 'sidebar-open': isSidebarOpen }" class="sidebar bg-dark text-white z">
      <!-- Contenido del Sidebar con clases de Bootstrap -->
      <ul class="list-group">
        <span class="cursor">          
          <router-link to="/home" class="list-group-item">
            <i class="fa-solid fa-house fa-size-md" style="color: #1667f3;"></i> Home
          </router-link>
        </span>
        <span>
          <router-link to="/config" class="list-group-item">
            <i class="fa-solid fa-gear fa-size-md" style="color: #1667f3;"></i> Configuraciones
          </router-link>
        </span>
        <!-- Puedes agregar más elementos aquí -->        
      </ul>
      <div class="container-fluid center">
          <button @click.prevent="toggleSidebar" class="btn btn-primary">Ocultar Sidebar</button>
          <span class="cursor text-danger" @click.prevent="logout">
              <i class="fa-solid fa-right-from-bracket fa-size"></i>
          </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .center{
    display: flex;
    align-items: center;
    margin-top: 5%;
  }
  .z {
    z-index: 999;
  }
  button {
    margin: 10px;
  }
  .sidebar {
    width: 250px;
    background-color: #333;
    color: #fff;
    position: fixed;
    top: 0;
    left: -250px;
    height: 100%;
    transition: left 0.3s;
  }
  .sidebar-open {
    left: 0;
  }
  .fa-size {
    font-size :2em;
  }

  .fa-size-md {
    font-size :1.4em;
  }
</style>
