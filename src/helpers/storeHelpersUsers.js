import { apiLogin, apiPostUser, apiGetUserTasks, getUser } from '../api/users'
import { login, loginError } from './modalSwal'
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
        const userResp = await getUser(token) 
        state.token = token
        const client = await apiGetUserTasks(token)
        const tasksPending = client.data.data.tasks.filter((data) => data.state === 'pending')
        const tasksSuccess =client.data.data.tasks.filter((data) => data.state === 'done')
        localStorage.token = JSON.stringify(token)
        state.Tasks = tasksPending
        state.TasksSuccess = tasksSuccess
        login(userResp.data)
        router.push('/home')
        console.log(client.data)
      } catch (error) {
        loginError()
        console.log('error: ', error)
      }
}

export const logout = (state) => {
    state.token = ''
    router.push('/login')
}