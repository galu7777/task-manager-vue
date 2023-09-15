import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import ConfigUser from '../components/ConfigUser.vue'
import Home from '../components/Dashboard.vue'
import store from '../store'

const routes = [
    { path: '/', name: 'root', component: Login },
    { path: '/home', name: 'home', component: Home, meta: { needsAuth: true } },
    { path: '/config', name: 'config-user', component: ConfigUser, meta: { needsAuth: true } },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.needsAuth){
        if(store.state.token || localStorage.token){
            next()
        } else if (store.state.token === ''){
            next('/login')
        }        
    } else {
        next()
    }
})

store.watch(
    (state) => state.token,
    () => {
        router.push(router.currentRoute.value.fullPath)
    }    
)

export default router;