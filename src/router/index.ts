import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dang-nhap'
  },
  {
    path: '/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/dang-nhap'
      },
      {
        path: 'home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'dich-vu',
        component: () => import('@/views/cu_dan/dich_vu/Index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/cu_dan/dich_vu/Index.vue')
            },
            {
                path: 'chi-tiet',
                component: () => import('@/views/cu_dan/dich_vu/ChiTietDichVu.vue'),
                name: 'chi-tiet-dich-vu',
                children: [
                    {
                        path: '',
                        component: () => import('@/views/cu_dan/dich_vu/ChiTietDichVu.vue'),
                        name: 'chi-tiet-dich-vu'
                    },
                    {
                        path: 'dang-ky',
                        component: () => import('@/views/cu_dan/dich_vu/DangKyDichVu.vue'),
                        name: 'dang-ky-dich-vu'
                    }
                ]
            }
        ]
      },
      {
        path: 'thong-bao',
        component: () => import('@/views/cu_dan/thong_bao/Index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/cu_dan/thong_bao/Index.vue')
            },
            {
                path: 'chi-tiet',
                component: () => import('@/views/cu_dan/thong_bao/ChiTietThongBao.vue'),
                name: 'chi-tiet-thong-bao'
            }
        ]
      },
      {
        path: 'phan-anh',
        component: () => import('@/views/cu_dan/phan_anh/Index.vue'),
        children: [
            {
                path: '',
                component: () => import('@/views/cu_dan/phan_anh/Index.vue')
            },
            {
                path: 'chi-tiet',
                component: () => import('@/views/cu_dan/phan_anh/ChiTietPhanAnh.vue'),
                name: 'chi-tiet-phan-anh'
            },
            {
                path: 'tao',
                component: () => import('@/views/cu_dan/phan_anh/TaoPhanAnh.vue'),
                name: 'tao-phan-anh'
            }
        ]
      },
      {
        path: 'tai-khoan',
        component: () => import('@/views/cu_dan/tai_khoan/Index.vue')
      },
      {
        path: 'phi',
        component: () => import('@/views/cu_dan/phi/Index.vue')
      },
      {
        path: 'doi-mat-khau',
        component: () => import('@/views/cu_dan/tai_khoan/DoiMatKhau.vue')
      },

    ]
  },
    {
        path: '/dang-xuat',
        component: () => import('@/views/DangNhap.vue')
    },
    {
        path: '/dang-nhap',
        component: () => import('@/views/DangNhap.vue')
    },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
