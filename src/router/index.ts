// Composables
import { createRouter, createWebHistory } from 'vue-router'
import ContentAdd from '@/components/content/ContentAdd.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        meta: { transition: 'slide-left' },
      },
      {
        path: 'contentadd',
        name: 'ContentAdd',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: ContentAdd,
        meta: { transition: 'slide-right' },
      },
      {
        path: 'galery',
        name: 'galery',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/components/galery/Galery.vue'),
        meta: { transition: 'slide-right' },
      },
      {
        path: 'contact',
        name: 'contact',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('@/components/information/Contact.vue'),
        meta: { transition: 'slide-left' },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
