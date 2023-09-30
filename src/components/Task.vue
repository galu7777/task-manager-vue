<script>
    import { addTaskSwal, deletedTaskSwal, deletedTaskSuccessSwal, updateTaskNameSwal } from '../helpers/modalSwal.js' 
    import '../assets/Task.css' 
    export default {
        data(){
            return {
                nameTask: '',
                task: null,
                tasksPending: [],
                tasksSuccess: []
            }
        },
        methods: {
            addTask() {
                addTaskSwal(this.nameTask)
                this.nameTask = ''               
            },
            deletedTask(index) {
                deletedTaskSwal(index)
            },
            deletedTaskSuccess(index) {
                deletedTaskSuccessSwal(index)              
            },
            updateTaskName(index){
                updateTaskNameSwal(index)
            },
            updateTask(index) {
                this.$store.dispatch('updateTaskAction', index)

            },
            updateTasksSuccess(index) {
                this.$store.dispatch('updateTasksSuccess', index)
            }
            
        },
        created() {
            if(localStorage.tasksPending) {
                this.tasksPending = JSON.parse(localStorage.tasksPending)
            }
            if(localStorage.tasksSuccess) {
                this.tasksSuccess = JSON.parse(localStorage.tasksSuccess)
            }
        }
    }
</script>

<template>
    <div class="mt-18">
        <div class="row">
            <div class="col-lg-8 offset-lg-2">
                <input 
                    type="text" 
                    class="form-control form-control-lg"
                    placeholder="Ingresar una Tarea..."
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
                    </div>                   -->
                    <ul class="list-group" v-for="(task, index) in $store.state.Tasks" :key="index">
                        <li class="list-group-item d-flex justify-content-between">
                            <span :class="['text', 'cursor']" @click="updateTask(index)">
                                <i 
                                    :class="['fa-regular fa-circle']">
                                </i>
                            </span>
                            {{ task.name }}
                            <div>
                                <span class="cursor text p-4" @click="updateTaskName(index)">
                                    <i class="fa-solid fa-file-pen" style="color: #2307f2;"></i>
                                </span>
                                <span class="cursor text-danger" @click="deletedTask(index)">
                                    <i class="fa-solid fa-trash"></i>
                                </span>
                            </div>
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
                            <span :class="['text-success', 'cursor']" @click="updateTasksSuccess(index)">
                                <i 
                                :class="['fa-solid fa-circle-check']">
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
