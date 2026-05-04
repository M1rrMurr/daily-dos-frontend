import HomeView from '@/views/HomeView.vue'
import WeeklyScheduleView from '@/views/WeeklyScheduleView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', component: HomeView },
        { path: '/weekly', component: WeeklyScheduleView },
    ],
})

export default router
