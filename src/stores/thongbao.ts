import {defineStore} from "pinia";
import AxiosService from "@/lib/axios";
import {ThongBao} from "@/lib/types";

export const useThongBaoStore = defineStore({
    id: 'thongbao',
    state: () => ({
        thong_bao: {
            data: [] as ThongBao[]
        }
    }),
    actions: {
        async getThongBao(){
            const { data } = await AxiosService.get('/thong-bao');
            this.thong_bao = data;
        },
        async xemThongBao(id: number){
            await AxiosService.post('/thong-bao/da-xem', { thong_bao_id: id });
        }
    }
})
