import axios from 'axios'

const baseURL = 'http://localhost:3333'

const api = axios.create({
    baseURL
})

export const apiLogin = (user) => {
    return api.post('/login', user)
}

export const apiGetUsers = (token) => {
    return api.get('/users', { headers: { 'Authorization': `Bearer ${token}` }})
}

export const apiPostUser = (user) => {
    return api.post('/users', user);
}