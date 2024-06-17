import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import {useRouteStore} from "@/stores/route";

const routes: Array<RouteRecordRaw> = [
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
      },
      {
          path: 'dich-vu/:id',
          component: () => import('@/views/cu_dan/dich_vu/ChiTietDichVu.vue'),
          name: 'chi-tiet-dich-vu',
          props: true,
      },
      {
          path: 'dich-vu/:id/dang-ky',
          component: () => import('@/views/cu_dan/dich_vu/DangKyDichVu.vue'),
          name: 'dang-ky-dich-vu',
          props: true
      },
      {
          path: 'thong-bao',
          component: () => import('@/views/cu_dan/thong_bao/Index.vue'),
      },
      {
          path: 'thong-bao/:id',
          component: () => import('@/views/cu_dan/thong_bao/ChiTietThongBao.vue'),
          props: true,
          name: 'chi-tiet-thong-bao'
      },
      {
          path: 'phan-anh',
          component: () => import('@/views/cu_dan/phan_anh/Index.vue'),
      },
      {
          path: 'phan-anh/:id',
          component: () => import('@/views/cu_dan/phan_anh/ChiTietPhanAnh.vue'),
          name: 'chi-tiet-phan-anh',
          props: true
      },
      {
          path: 'phan-anh/tao',
          component: () => import('@/views/cu_dan/phan_anh/TaoPhanAnh.vue'),
          name: 'tao-phan-anh'
      },
      {
          path: 'cong-viec',
          component: () => import('@/views/quan_ly/cong_viec/Index.vue'),
      },
      {
          path: 'cong-viec/:id',
          component: () => import('@/views/quan_ly/cong_viec/ChiTietCongViec.vue'),
          name: 'chi-tiet-cong-viec',
          props: true
      },
      {
          path: 'so-ghi',
          component: () => import('@/views/quan_ly/so_ghi/Index.vue'),
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
     redirect: '/dang-nhap'
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

router.beforeEach((to, from, next) => {
    const routeStore = useRouteStore();
    routeStore.setPreviousRoute(from);
    next();
});

export default router
