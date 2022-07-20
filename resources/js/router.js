import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'



const app = createApp({})
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./components/Example.vue'),
        },
        {
            path: '/cart',
             component: () => import('./components/Cart.vue')
        }
    ]
})
export default router