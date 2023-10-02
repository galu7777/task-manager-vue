import { apiLogin, apiPostUser, apiGetUserTasks, getUser } from '../api/users'
import { errorSwal, login, loginError } from './modalSwal'
import { changePasswordErrorSwal, changePasswordSwal } from './modalSwalUser'
import router from '../routes/index'
import store from '../store'

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
        const token = resp.data.data.token
        const userResp = await getUser(token)
        state.token = token
        const client = await apiGetUserTasks(token)
        const tasksPending = client.data.data.tasks.filter((data) => data.state === 'pending')
        const tasksSuccess =client.data.data.tasks.filter((data) => data.state === 'done')
        localStorage.token = JSON.stringify(token)
        state.Tasks = tasksPending
        state.TasksSuccess = tasksSuccess
        state.userData = userResp.data.data
        login(userResp.data)
        router.push('/home')
      } catch (error) {
        loginError()
        console.log('error: ', error)
      }
}

export const changePasswordUser = async (state, user) => {
  try {
    const token = state.token
    if(user.newpassword === user.repeatnewpassword){
      const password = {
        oldpassword: user.oldpassword,
        newpassword: user.newpassword
      }
      const resp = await changePasswordSwal(password, token)
      console.log(resp)
      if(resp.data.data.nick_name) {
        router.push('/')
      }
      else changePasswordErrorSwal()
    } else if(user.newpassword !== user.repeatnewpassword){
      errorSwal('Las contraseña Nueva no son Iguales')
    }
  } catch (error) {
    console.log('error: ', error)
  }
}

export const reInfoUser = async (token) => {
  try {
    const userResp = await getUser(token)
    store.state.userData = userResp.data.data
  } catch (error) {
    console.log('error: ', error)
  }
}

export const logout = (state) => {
    state.token = ''
    router.push('/login')
}