import {defineStore} from 'pinia'
import AxiosService from "@/lib/axios";
import {DangKyDichVu, PhanAnh} from "@/lib/types";

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    id: '',
    name: '',
    email: '',
    so_dien_thoai: '',
    toa_nha_id: '',
    so_nha: '',
    phan_loai: '',
    du_an_id: '',
    role: null as number | null,
    so_ghi: [] as any[],
    phi: [] as any[],
    phan_anh: [] as PhanAnh[],
    dang_ky_dich_vu: [] as DangKyDichVu[],
    cong_viec: [] as any[]
  }),
  actions: {
      async login(body: {email: string, password: string}){
          return await AxiosService.post('/login', body);
      },
      async getProfile(){
          const data = await AxiosService.get('/profile');
          this.id = data.id;
          this.name = data.name;
          this.email = data.mail;
          this.so_dien_thoai = data.so_dien_thoai;
          this.so_nha = data.can_ho ? data.can_ho.so_nha : '';
          this.phan_loai = data.phan_loai;
          this.phan_anh = data.phan_anh;
          this.du_an_id = data.can_ho ? data.can_ho.toa_nha.du_an.id : data.toa_nha.du_an.id;
          this.dang_ky_dich_vu = data.dang_ky_dich_vu;
          this.so_ghi = data.can_ho ? data.can_ho.so_ghi : [];
          this.role = data.role;
          this.cong_viec = data.cong_viec;
          this.toa_nha_id = data.can_ho ? data.can_ho.toa_nha.id : '';
      },
      async taoPhanAnh(body: any){
          return await AxiosService.post('/phan-anh', body);
      },
      async phanHoi(body: any){
          return await AxiosService.post('/phan-hoi', body);
      },
      async updateProfile(body: any){
          return await AxiosService.patch('/update-profile', body);
      },
      async getPhanAnhBQL(){
          if(this.role === 2) return
          const res = await AxiosService.get('/phan-anh');
          this.phan_anh = res.phananh.data;
          return res.phananh.data;
      },
      async getPhi(){
        const res = await AxiosService.get('/thiet-lap-loai-phi?toa_nha=' + this.toa_nha_id);
        this.phi = res.data.data;
      }
  }
})