import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/App-About.vue'
import Home from '../views/App-Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'App-About',
        component: About
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL), routes
})

export default router