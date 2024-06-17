import {defineStore} from "pinia";
import AxiosService from "@/lib/axios";
import {useUserStore} from "@/stores/user";
import {ToaNha} from "@/lib/types";

export const useCanHoStore = defineStore({
    id: 'canho',
    state: () => ({
        toa_nha: [] as ToaNha[]
    }),
    actions: {
        async getCanHo(){
            const { du_an_id } = useUserStore();
            const { toa_nha } = await AxiosService.get(`/can-ho?id=${du_an_id}`);
            this.toa_nha = toa_nha;
        },
        async soGhi(body: any){
            return await AxiosService.post('/so-ghi', body);
        }
    }
})
