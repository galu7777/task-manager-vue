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
        <li class="list-group-item">Elemento 1</li>
        <li class="list-group-item">Elemento 2</li>
        <li class="list-group-item">Elemento 3</li>
        <!-- Puedes agregar más elementos aquí -->        
      </ul>
      <div class="container-fluid center">
          <button @click="toggleSidebar" class="btn btn-primary">Ocultar Sidebar</button>
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
</style>
