import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'dich-vu',
        component: () => import('@/views/cu_dan/dich_vu/Index.vue')
      },
      {
        path: 'thong-bao',
        component: () => import('@/views/cu_dan/thong_bao/Index.vue')
      },
      {
        path: 'phan-anh',
        component: () => import('@/views/cu_dan/phan_anh/Index.vue')
      },
      {
        path: 'tai-khoan',
        component: () => import('@/views/cu_dan/tai_khoan/Index.vue')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
