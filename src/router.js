// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import CategoryList from '@/components/category/CategoryList.vue'
import ContentAdd from '@/components/content/ContentAdd.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: CategoryList
    },
    {
        path: '/contentadd',
        name: 'ContentAdd',
        component: ContentAdd
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router