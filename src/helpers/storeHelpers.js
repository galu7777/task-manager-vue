import axios from 'axios'
import router from '../routes/index'

export const addtask = async (state) => {
    try {
        const id = String(state.user[0].id)
        const task = {
            userId: id,
            name: state.nameTask,
            state: 'pending',
            color: '#fff',
            limitAt: "2023-08-24T19:05:13.519-04:00"
        }
        const token = state.token
        const resp = await axios.post('http://localhost:3333/tasks', task, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        state.Tasks.push(resp.data)
        localStorage.tasksPending = JSON.stringify(state.Tasks)        
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const userregister = async (state) => {
    try {
        const data = {
          nick_name: state.newUser.nick_name,
          email: state.newUser.email,
          password: state.newUser.password
        }
        console.log(data)
        await axios.post('http://localhost:3333/users', data)
        router.push('/login')
      } catch (error) {
        console.log('Error: ', error)
      }
}

export const deletedtask = async (state, index) => {
    try {
        const task = state.Tasks.splice(index, 1);
        state.taskDeleted = task[0].name
        const token = state.token
        await axios.delete(`http://localhost:3333/tasks/${task[0].id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
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
        await axios.delete(`http://localhost:3333/tasks/${task[0].id}`, {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        localStorage.tasksSuccess = JSON.stringify(state.TasksSuccess)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const renametask = async (state, index) => {
    try {
        const task = state.Tasks[index]
        const data = { name: state.nameTaskNew }
        const token = state.token
        const resp = await axios.put(`http://localhost:3333/tasks/${task.id}`, data, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        state.Tasks.splice(index, 1)
        state.Tasks.push(resp.data)
        localStorage.tasksPending = JSON.stringify(state.Tasks)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const updatetask = async (state, index) => {
    try {
        const task = state.Tasks[index]
        const data = { state: 'done' }
        const token = state.token
        const resp = await axios.put(`http://localhost:3333/tasks/${task.id}`, data, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        console.log(resp.data.state)
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
        const task = state.TasksSuccess[index]
        const data = { state: 'pending' }
            const token = state.token
            const resp = await axios.put(`http://localhost:3333/tasks/${task.id}`, data, {
            headers: { 'Authorization': `Bearer ${token}` }
            })
        const taskSuccess = state.TasksSuccess[index]
        state.Tasks.push(taskSuccess)
        localStorage.tasksPending = JSON.stringify(state.Tasks)
        state.TasksSuccess.splice(index, 1)
        localStorage.tasksSuccess = JSON.stringify(state.TasksSuccess)
    } catch (error) {
        console.log('Error: ', error)
    }
}

export const islogin = async (state, user) => {
    try {
        const resp = await axios.post('http://localhost:3333/login', user)
        const token = resp.data.token
        state.token = token
        const client = await axios('http://localhost:3333/users', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
        const userFound = client.data.filter((data) => data.nickName === user.nick_name)
        const tasksPending = userFound[0].task.filter((data) => data.state === 'pending')
        const tasksSuccess = userFound[0].task.filter((data) => data.state === 'done')
        localStorage.token = JSON.stringify(token)
        localStorage.tasksPending = JSON.stringify(tasksPending)
        localStorage.tasksSuccess = JSON.stringify(tasksSuccess)
        state.user = userFound
        state.Tasks = tasksPending
        state.TasksSuccess = tasksSuccess
        router.push('/home')
        console.log(client.data)
      } catch (error) {
        console.log('error: ', error)
      }
}

export const logout = (state) => {
    state.token = ''
    router.push('/login')
}