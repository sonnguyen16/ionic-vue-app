<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {hideTabBar} from "../../../../public/script";
import {onMounted, ref} from "vue";
import {defineProps} from "vue";
import {useUserStore} from "@/stores/user";
import {useDichVuStore} from "@/stores/phidichvu";
import {DichVu} from "@/lib/types";
import {useToast} from "@/components/ui/toast";
import {useRouter} from "vue-router";
import {Loader2} from "lucide-vue-next";

const props = defineProps({
  id: String
})

const { toast } = useToast()
const router = useRouter()
const loading = ref(false)

onMounted(() => {
  hideTabBar()
  form.value.phi_dich_vu = props.id || ''
  form.value.chu_ho = useUserStore().id
  form.value.tong_tien = (useDichVuStore().dich_vu.data.find((x: DichVu) => x.id === Number(props.id)) || {} as DichVu).gia || 0;
  form.value.ten = (useDichVuStore().dich_vu.data.find((x: DichVu) => x.id === Number(props.id)) || {} as DichVu).ten || '';
})

const form = ref({
  chu_ho: '',
  phi_dich_vu: '',
  ngay_bat_dau: '',
  ngay_ket_thuc: '',
  tong_tien: 0,
  ghi_chu: '',
  ten: ''
})

async function submit(){
  loading.value = true
  try{
    const res = await useDichVuStore().dangKyDichVu(form.value)
    if(res.status !== 'success'){
      toast({
        title: 'Có lỗi xảy ra',
        description: res.message,
        variant: 'destructive'
      })
    }
    else{
      toast({
        title: 'Thành công',
        description: 'Đăng ký dịch vụ thành công',
        variant: 'default'
      })
      await router.push('/dich-vu')
    }
  }catch (e: any){
    toast({
      title: 'Có lỗi xảy ra',
      description: e.toString(),
      variant: 'destructive'
    })
  }finally {
    loading.value = false
  }
}


</script>

<template>
  <Container :title="form.ten" hasBack>
    <form @submit.prevent="submit" class="mt-5 space-y-6">
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Ngày bắt đầu</Label>
        <Input v-model="form.ngay_bat_dau" type="datetime-local" class="w-full"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Ngày kết thúc</Label>
        <Input v-model="form.ngay_ket_thuc" type="datetime-local"  class="w-full"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Ghi chú</Label>
        <Input v-model="form.ghi_chu" type="text"  class="w-full h-[100px]"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Phương thức thanh toán</Label>
        <Select>
          <SelectTrigger class="w-full" style="border: 1px solid rgba(0,0,0,0.1)">
            <SelectValue placeholder="Phương thức thanh toán" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Phương thức thanh toán</SelectLabel>
              <SelectItem value="1">
                Tiền mặt
              </SelectItem>
              <SelectItem value="2">
                Chuyển khoản
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button :disabled="loading" type="submit" >
        <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
        Gửi
      </Button>
    </form>
  </Container>
</template>

<style scoped>
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  background-color: rgba(0,0,0,0);
  opacity: 1;
}
</style>