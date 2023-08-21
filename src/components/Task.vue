<script>
    import '../assets/Task.css' 
    export default {
        data(){
            return {
                nameTask: '',
                task: null,
                taskSuccess: null
            }
        },
        methods: {
            addTask() {
                this.$store.state.nameTask = this.nameTask
                this.$store.dispatch('addTaskAction')
                this.nameTask = ''
            },
            deletedTask() {
                this.$store.dispatch('deletedTaskAction')
            },
            deletedTaskSuccess() {
                this.$store.dispatch('deletedTaskSuccessAction')
            },
            updateTask(index) {
                    this.$store.state.Tasks[index].state = !this.$store.state.Tasks[index].state
                    this.task = this.$store.state.Tasks[index]
                    this.$store.state.TasksSuccess.push(this.task)
                    this.$store.state.Tasks.splice(index, 1)                
            },
            updateTaskSuccess(index) {                
                this.$store.state.TasksSuccess[index].state = false
                this.taskSuccess = this.$store.state.TasksSuccess[index]
                this.$store.state.Tasks.push(this.taskSuccess)
                this.$store.state.TasksSuccess.splice(index, 1)
            }
        }
    }
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <input 
                    type="text" 
                    class="form-control form-control-lg"
                    placeholder="Ingresar Tarea..."
                    v-model="nameTask"
                    @keyup.enter="addTask"
                >
                <br/>
            </div>            
        </div>
        <div class="row">
            <div class="col-lg-6 offset-lg-3">
                <!-- Tareas Pendientes -->
                <div class="card-container">
                    <h2 class="title">Tareas Pendientes</h2>
                    <div class="card p-2" v-if="$store.state.Tasks.length === 0">
                        <h6>No hay tareas pendientes para mostrar</h6>
                    </div>
                    <ul class="list-group" v-for="(task, index) in $store.state.Tasks" :key="index">
                        <li class="list-group-item d-flex justify-content-between">
                            <span :class="[task.state === false ? 'text': 'text-success', 'cursor']" @click="updateTask(index)">
                                <i 
                                    :class="[task.state === false ? 'fa-regular fa-circle' : 'fa-solid fa-circle-check' ]">
                                </i>
                            </span>
                            {{ task.name }}
                            <span class="cursor text-danger" @click="deletedTask(index)">
                                <i class="fa-solid fa-trash"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <!-- Tareas Completadas  -->
                <div class="card-container">
                    <h2 class="title">Tareas Completadas</h2>
                    <div class="card p-2" v-if="$store.state.TasksSuccess.length === 0">
                        <h6>No hay tareas completadas para mostrar</h6>
                    </div>
                    <ul class="list-group" v-for="(task, index) in $store.state.TasksSuccess" :key="index">
                        <li class="list-group-item d-flex justify-content-between">
                            <span :class="[task.state === true ? 'text-success': 'text', 'cursor']" @click="updateTaskSuccess(index)">
                                <i 
                                    :class="[task.state === true ?'fa-solid fa-circle-check': 'fa-regular fa-circle' ]">
                                </i>
                            </span>
                            {{ task.name }}
                            <span class="cursor text-danger" @click="deletedTaskSuccess(index)">
                                <i class="fa-solid fa-trash"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
