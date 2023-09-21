import { apiDeleteTask, apiPostTask, apiPutTask, apiPutStateTask } from '../api/tasks'

export const addtask = async (state) => {
    try {
        const task = {
            name: state.nameTask,
            state: 'pending',
            color: '#fff',
            limitAt: "2023-08-24T19:05:13.519-04:00"
        }
        const token = state.token
        const resp = await apiPostTask(task, token)
        state.Tasks.push(resp.data.data)
        localStorage.tasksPending = JSON.stringify(state.Tasks)        
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
        localStorage.tasksPending = JSON.stringify(state.Tasks)
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
        localStorage.tasksSuccess = JSON.stringify(state.TasksSuccess)
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
        localStorage.tasksPending = JSON.stringify(state.Tasks)
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
        localStorage.tasksSuccess = JSON.stringify(state.TasksSuccess)
        state.Tasks.splice(index, 1)
        localStorage.tasksPending = JSON.stringify(state.Tasks)
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
        localStorage.tasksPending = JSON.stringify(state.Tasks)
        state.TasksSuccess.splice(index, 1)
        localStorage.tasksSuccess = JSON.stringify(state.TasksSuccess)
    } catch (error) {
        console.log('Error: ', error)
    }
}