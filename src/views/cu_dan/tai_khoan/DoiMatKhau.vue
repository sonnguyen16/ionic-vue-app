<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ref} from "vue";
import {Loader2} from "lucide-vue-next";
import {useUserStore} from "@/stores/user";
import {useToast} from "@/components/ui/toast";

const body = ref({
  old_password: '',
  password: '',
  password_confirmation: ''
})

const userStore = useUserStore();

const { toast } = useToast();

const loading = ref(false);

async function submit() {
  if(body.value.password !== body.value.password_confirmation){
    toast({
      title: 'Thất bại',
      description: 'Mật khẩu xác nhận không khớp',
      variant: 'destructive'
    })
    return;
  }
  loading.value = true;
  try{
    const res = await userStore.updateProfile(body.value);
    if(res.success === true){
      toast({
        title: 'Thành công',
        description: 'Đổi mật khẩu thành công',
        variant: 'default'
      })
      body.value = {
        old_password: '',
        password: '',
        password_confirmation: ''
      }
    }else {
      toast({
        title: 'Thất bại',
        description: res.message,
        variant: 'destructive'
      })
    }
  }catch (e: any) {
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
  <Container title="Đổi mật khẩu" hasBack>
    <form @submit.prevent="submit" class="mt-5 space-y-3">
      <div class="flex flex-col gap-3">
        <Label  class="text-zinc-500">Mật khẩu cũ</Label>
        <Input type="password" v-model="body.old_password"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label  class="text-zinc-500">Mật khẩu mới</Label>
        <Input type="password" v-model="body.password"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Xác nhận mật khẩu mới</Label>
        <Input type="password" v-model="body.password_confirmation"/>
      </div>
      <Button :disabled="loading" type="submit" >
        <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
        Lưu
      </Button>
    </form>
  </Container>
</template>

<style scoped>

</style>