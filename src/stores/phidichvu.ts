import {defineStore} from "pinia";
import AxiosService from "@/lib/axios";
import {DichVu} from "@/lib/types";

export const useDichVuStore = defineStore({
    id: 'phidichvu',
    state: () => ({
        dich_vu: {
            data: [] as DichVu[]
        }
    }),
    actions: {
        async getDichVu(du_an_id: string){
            const { data } = await AxiosService.get(`/phi-dich-vu?du_an=${du_an_id}`);
            this.dich_vu = data;
        },
        async dangKyDichVu(form: any){
            return await AxiosService.post('/dang-ky-dich-vu', form);
        }
    }
})
