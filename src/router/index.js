import { createRouter, createWebHistory } from '@ionic/vue-router';
import Main from '../views/Main.vue'

const routes = [
  {
    path: '/',
    redirect: '/startup'
  },
  {
    path: '/startup/',
    component: () => import('@/views/StartUp.vue'),
  },
  {
    path: '/main/',
    component: Main,
    children: [
      {
        path: '',
        redirect: '/main/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'create',
        component: () => import('@/views/Create.vue')
      },
      {
        path: 'my',
        component: () => import('@/views/My.vue'),
        children: [
          {
            path: '',
            redirect: '/my/tab31'
          },
          {
            path: 'tab31',
            component: () => import('@/views/Tab31.vue')
          },
          {
            path: 'tab32',
            component: () => import('@/views/Tab32.vue')
          },
          {
            path: 'tab33',
            component: () => import('@/views/Tab33.vue')
          },
        ]
      }
    ]
  },
  {
    path: '/search/',
    component: () => import('@/views/Search.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
