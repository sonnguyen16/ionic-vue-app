<script setup lang="ts">
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import AxiosService from "@/lib/axios";
import {useToast} from "@/components/ui/toast";
import storage from "@/lib/storage";
import { Loader2 } from 'lucide-vue-next';

const router = useRouter();
const { toast } = useToast();
const loading = ref(false);
const body = ref({
  email: '',
  password: ''
});

async function submit() {
  loading.value = true;
  const res = await AxiosService.post('/login', body.value);
  loading.value = false;
  if(res.token){
    const db = await storage.create();
    await db.set("@token", res.token);
    await router.push('/home');
  }else{
    toast({
      title: 'Đăng nhập thất bại',
      description: res.message,
      variant: 'destructive'
    })
  }
}

</script>

<template>
    <div class="flex justify-center items-center flex-col h-full bg-white">
      <img src="/smarthouse.png" class="w-3/4" alt="logo"/>
      <p class="text-center text-zinc-500 dark:text-zinc-400 text-xs">App dành cho cư dân sinh sống tại chung cư.</p>
        <form @submit.prevent="submit" class="space-y-4 w-3/4 mt-[40px]">
          <div class="flex flex-col gap-1">
            <label class="text-sm text-zinc-700">Tài khoản</label>
            <Input class="text-zinc-800" v-model="body.email" type="text" placeholder="Ví dụ: A-01-123"/>
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm text-zinc-700">Mật khẩu</label>
            <Input class="text-zinc-800 mb-3" autocomplete v-model="body.password" type="password" placeholder="Ít nhất 6 kí tự"/>
          </div>
          <Button :disabled="loading" type="submit" class="btn w-full">
            <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
            Đăng nhập
          </button>
        </form>
    </div>
</template>

<style scoped>

</style>