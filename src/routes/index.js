import { createRouter, createWebHistory } from 'vue-router'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Home from '../components/Home.vue'

const routes = [
    { path: '/', component: Login },
    { path: '/home', component: Home, meta: { needsAuth: true } },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    if(to.meta.needsAuth){
        next('/login')
    } else {
        next()
    }
})

export default router;