import axios from 'axios'

const baseURL = 'http://localhost:3333'

const api = axios.create({
    baseURL
})

export const apiLogin = (user) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const emailValidate = emailRegex.test(user.nick_name)
    if(emailValidate) {
        const data = { 
            email: user.nick_name,
            password: user.password
         }
         return api.post('/login', data)
    } else return api.post('/login', user)
}

export const apiGetUsers = (token) => {
    return api.get('/users', { headers: { 'Authorization': `Bearer ${token}` }})
}

export const apiPostUser = (user) => {
    return api.post('/users', user);
}