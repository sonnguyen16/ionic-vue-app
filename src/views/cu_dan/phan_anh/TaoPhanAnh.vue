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
  SelectValue,
} from '@/components/ui/select'
import {hideTabBar} from "../../../../public/script";
import {onMounted, ref} from "vue";
import {useUserStore} from "@/stores/user";
import {Loader2} from "lucide-vue-next";
import {useToast} from "@/components/ui/toast";
import {useRouter} from "vue-router";

onMounted(() => {
  hideTabBar()
})

const loading = ref(false);

const { toast } = useToast();

const form = ref({
  tieu_de: '',
  noi_dung: '',
  phan_loai: '',
  hinh_anh: null
})

const router = useRouter();


function onFileChange(e: any) {
  form.value.hinh_anh = e.target.files[0];
}

async function submit(){
  const formData = new FormData();
  formData.append('tieu_de', form.value.tieu_de);
  formData.append('noi_dung', form.value.noi_dung);
  formData.append('phan_loai', form.value.phan_loai);
  formData.append('hinh_anh', form.value.hinh_anh);

  loading.value = true;

  try {
    const res = await useUserStore().taoPhanAnh(formData);
    console.log(res)

    if(res.success === true){
      toast({
        title: 'Thành công',
        description: 'Phản ánh của bạn đã được gửi',
        variant: 'default'
      })
      await router.push('/phan-anh');
    }else{
      toast({
        title: 'Có lỗi xảy ra',
        description: res.message,
        variant: 'destructive'
      })
    }
  }catch (e: any) {
    toast({
      title: 'Có lỗi xảy ra',
      description: e.toString(),
      variant: 'destructive'
    })
  }finally {
    loading.value = false;

  }

}

</script>

<template>
  <Container title="Tạo phản ánh" hasBack>
    <form @submit.prevent="submit" class="mt-5 space-y-3">
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Tiêu đề</Label>
        <Input v-model="form.tieu_de" />
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Nội dung</Label>
        <Input v-model="form.noi_dung" class="h-[100px]"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Phân loại</Label>
        <Select v-model="form.phan_loai">
          <SelectTrigger class="w-full" style="border: 1px solid rgba(0,0,0,0.1)">
            <SelectValue placeholder="Chọn phân loại" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Chọn phân loại</SelectLabel>
              <SelectItem value="1">
                Góp ý
              </SelectItem>
              <SelectItem value="2">
                Hỏi đáp
              </SelectItem>
              <SelectItem value="3">
                Kỹ thuật
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Hình ảnh</Label>
        <Input @change="onFileChange($event)"  id="picture" type="file" />
      </div>
      <Button :disabled="loading" type="submit" >
        <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
        Gửi
      </Button>
    </form>
  </Container>
</template>

<style scoped>

</style>