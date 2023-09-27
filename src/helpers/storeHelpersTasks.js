import { apiDeleteTask, apiPostTask, apiPutTask, apiPutStateTask } from '../api/tasks'
import { apiGetUserTasks } from '../api/users'
import store from '../store'

export const addtask = async (state) => {
    try {
        const task = { name: state.nameTask }
        const token = state.token
        const resp = await apiPostTask(task, token)
        state.Tasks.push(resp.data.data)       
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const deletedtask = async (state, index) => {
    try {
        const task = state.Tasks.splice(index, 1);
        state.taskDeleted = task[0].name
        const token = state.token
        await apiDeleteTask(task, token)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const deletedtasksuccess = async (state, index) => {
    try {
        const task = state.TasksSuccess.splice(index, 1);
        state.taskDeleted = task[0].name
        const token = state.token
        await apiDeleteTask(task, token)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const renametask = async (state, index) => {
    try {        
        const id = state.Tasks[index].id
        const data = { name: state.nameTaskNew }
        const token = state.token
        const resp = await apiPutTask(id, data, token)
        state.Tasks.splice(index, 1)
        state.Tasks.push(resp.data.data)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const updatetask = async (state, index) => {
    try {
        const task = state.Tasks[index]
        const id = state.Tasks[index].id
        const data = { state: 'done' }
        const token = state.token
        await apiPutStateTask(id, data, token)
        state.TasksSuccess.push(task)
        state.Tasks.splice(index, 1)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const updatetasksuccess = async (state, index) => {
    try {
        const id = state.TasksSuccess[index].id
        const data = { state: 'pending' }
        const token = state.token
        await apiPutStateTask(id, data, token)
        const taskSuccess = state.TasksSuccess[index]
        state.Tasks.push(taskSuccess)
        state.TasksSuccess.splice(index, 1)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const reTaskInDashboard = async (token) => {
    try {
        const client = await apiGetUserTasks(token)
        const tasksPending = client.data.data.tasks.filter((data) => data.state === 'pending')
        const tasksSuccess =client.data.data.tasks.filter((data) => data.state === 'done')
        store.state.Tasks = tasksPending
        store.state.TasksSuccess = tasksSuccess
    } catch (error) {
        console.log('Error: ', error)
    }
}