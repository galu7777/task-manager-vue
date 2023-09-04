import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    Tasks: [],
    TasksSuccess: [],
    nameTask: null,
    isUserLoggedIn: false,
    user: null,
    token: ''
  },
  mutations: {
    async addTask(state) {
      const id = String(state.user[0].id)
      const task = {
        userId: id,
        name: state.nameTask,
        state: 'pending',
        color: '#fff',
        limitAt: "2023-08-24T19:05:13.519-04:00"
      };
      const token = state.token
      const resp = await axios.post('http://localhost:3333/tasks', task, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      state.Tasks.push(resp.data)
      console.log(state.Tasks)
      // state.Tasks.push(resp.data)
    },
    async deletedTask(state, index) {
      const task = state.Tasks.splice(index, 1);
      const token = state.token
      const resp = await axios.delete(`http://localhost:3333/tasks/${task[0].id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      console.log(resp.data)
    },
    async deletedTaskSuccess(state, index) {
      const task = state.TasksSuccess.splice(index, 1);
      const token = state.token
      const resp = await axios.delete(`http://localhost:3333/tasks/${task[0].id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      console.log(resp.data)
    },
    async updateTask(state, index){
        const task = state.Tasks[index]
        const data = { state: 'done' }
        const token = state.token
        const resp = await axios.put(`http://localhost:3333/tasks/${task.id}`, data, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        console.log(resp.data.state)
        state.TasksSuccess.push(task)
        state.Tasks.splice(index, 1)
    },
    async updateTasksSuccess(state, index) {
      const task = state.TasksSuccess[index]
      const data = { state: 'pending' }
        const token = state.token
        const resp = await axios.put(`http://localhost:3333/tasks/${task.id}`, data, {
          headers: { 'Authorization': `Bearer ${token}` }
        })
      const taskSuccess = state.TasksSuccess[index]
      state.Tasks.push(taskSuccess)
      state.TasksSuccess.splice(index, 1)
      console.log(resp.data.state)
    },
    async isLogin(state, user){
      try {
        const resp = await axios.post('http://localhost:3333/login', user)
        const token = resp.data.token
        state.token = token
        const client = await axios('http://localhost:3333/users', {
          headers: { 'Authorization': `Bearer ${token}` }
        })
        const userFound = client.data.filter((data) => data.nickName === user.nick_name)
        const tasksPeding = userFound[0].task.filter((data) => data.state === 'pending')
        const tasksSuccess = userFound[0].task.filter((data) => data.state === 'done')
        state.user = userFound
        if(tasksPeding) state.Tasks = tasksPeding
        if(taskSuccess) state.TasksSuccess = tasksSuccess
      } catch (error) {
        console.log('error: ', error)
      }
    },
    isLogout(state){
      state.token = ''
      console.log(state.token)
    }
  },
  actions: {
    addTaskAction(context) {
      context.commit('addTask');
    },
    deletedTaskAction(context, index) {
      context.commit('deletedTask', index);
    },
    deletedTaskSuccessAction(context) {
        context.commit('deletedTaskSuccess');
    },
    updateTaskAction(context, index) {
      context.commit('updateTask', index)
    },
    updateTasksSuccess(context, index) {
      context.commit('updateTasksSuccess', index)
    },
    isLogin(context, user) {
      context.commit('isLogin', user);
    },
    isLogout(context) {
      context.commit('isLogout')
    }
  }
});
