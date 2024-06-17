<script setup lang="ts">
import Container from "@/components/Container.vue";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Icon} from "@iconify/vue";
import {useUserStore} from "@/stores/user";
import { UserPhanLoaiText } from "@/lib/enums";
import { ref, onMounted } from "vue";
import {Loader2} from "lucide-vue-next";
import {useToast} from "@/components/ui/toast";

onMounted(() => {
  useUserStore().getProfile();
})

const { name, email, so_dien_thoai, so_nha, phan_loai } = useUserStore();

const loading = ref(false);

const { toast } = useToast();

const body = ref({
  name: name,
  email: email,
  so_dien_thoai: so_dien_thoai,
})

async function submit() {
  loading.value = true;
  try{
    const res = await useUserStore().updateProfile(body.value);
    if(res.success){
      toast({
        title: 'Thành công',
        description: 'Cập nhật thông tin thành công',
        variant: 'default'
      })
    }else {
      toast({
        title: 'Thất bại',
        description: res.message,
        variant: 'destructive'
      })
    }
  } catch (e: any) {
    toast({
      title: 'Thất bại',
      description: e.toString(),
      variant: 'destructive'
    })
  }finally {
    loading.value = false;
  }

}

</script>

<template>
  <Container title="Thông tin cá nhân" hasBack>
   <div class="flex justify-center mt-3 relative">
     <Avatar size="lg" >
       <AvatarImage src="/avatar.png" alt="@radix-vue" />
       <AvatarFallback>CN</AvatarFallback>
     </Avatar>
     <Icon icon="akar-icons:camera" class="absolute bottom-0 right-[31vw] w-[30px] h-[30px] bg-white rounded-xl p-1 cursor-pointer"/>
   </div>
    <form @submit.prevent="submit" class="mt-5 space-y-3">
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Họ tên</Label>
        <Input v-model="body.name" :default-value="name"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Email</Label>
        <Input v-model="body.email" :default-value="email"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Số điện thoại</Label>
        <Input v-model="body.so_dien_thoai" :default-value="so_dien_thoai"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Số nhà</Label>
        <Input :default-value="so_nha" disabled/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Phân loại</Label>
        <Input :default-value="UserPhanLoaiText[phan_loai]" disabled/>
      </div>
      <Button :disabled="loading" type="submit">
        <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
        Lưu
      </Button>
    </form>
  </Container>
</template>

<style scoped>

</style>