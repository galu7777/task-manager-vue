import { apiLogin, apiGetUsers, apiPostUser } from '../api/users'
import router from '../routes/index'

export const userregister = async (state) => {
    try {
        const data = {
          nick_name: state.newUser.nick_name,
          email: state.newUser.email,
          password: state.newUser.password
        }
        console.log(data)
        await apiPostUser(data)
        router.push('/login')
      } catch (error) {
        console.log('Error: ', error)
      }
}

export const islogin = async (state, user) => {
    try {
        const resp = await apiLogin(user)
        const token = resp.data.token
        state.token = token
        const client = await apiGetUsers(token)
        const userFound = client.data.filter((data) => data.nickName === user.nick_name || data.email === user.nick_name)
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