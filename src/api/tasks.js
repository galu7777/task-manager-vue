import axios from 'axios'

const baseURL = 'http://localhost:3333'

const api = axios.create({
    baseURL
})

export const apiPostTask = (task, token) => {
    return api.post('/tasks', task, {  headers: { 'Authorization': `Bearer ${token}` }})
}

export const apiDeleteTask = (task, token) => {
    return api.delete(`/tasks/${task[0].id}`, {  headers: { 'Authorization': `Bearer ${token}` }})
}

export const apiPutTask = (id, data, token) => {
    return api.put(`/tasks/${id}`, data, {  headers: { 'Authorization': `Bearer ${token}` }})
}

export const apiPutStateTask = (id, data, token) => {
    return api.put(`/tasks/${id}`, data, {  headers: { 'Authorization': `Bearer ${token}` }})
}