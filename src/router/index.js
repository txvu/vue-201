import { createRouter, createWebHistory } from 'vue-router'

import About from '../views/App-About.vue'

const routes = [
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