<script setup lang="ts">

import Container from "@/components/Container.vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";
import { hideTabBar } from "../../../../public/script";
import { onMounted, ref } from "vue";
import {useUserStore} from "@/stores/user";
import ReceiveMessage from "@/components/ReceiveMessage.vue";
import SendMessage from "@/components/SendMessage.vue";
import {CongViec, PhanAnh} from "@/lib/types";
import {ScrollArea} from "@/components/ui/scroll-area";
import { socket } from "/src/socket";
import {MEDIA_CONG_VIEC_ENDPOINT, MEDIA_PHAN_ANH_ENDPOINT} from "@/lib/constants";

onMounted(async () => {
  hideTabBar();
  scrollToBottom();
  cong_viec.value.phan_hoi = cong_viec.value.phan_hoi.map((ph) => {
    return {
      noi_dung: ph.noi_dung,
      hinh_anh: ph.hinh_anh ? MEDIA_PHAN_ANH_ENDPOINT + ph.hinh_anh : '',
      nguoi_tao: ph.nguoi_tao,
      created_at: ph.created_at
    }
  })
});

const userStore = useUserStore();

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

socket.on('send-message', async function (data: any) {
  if (data.cong_viec_id == props.id){
    await userStore.getProfile();
    cong_viec.value = userStore.cong_viec.find((pa: CongViec) => pa.id == props.id) || {} as CongViec;

    const role = userStore.role;
    if (role === 1) {
      await userStore.getPhanAnhBQL();
    }
  }
});

const cong_viec = ref(userStore.cong_viec.find((pa: CongViec) => pa.id == props.id) || {} as CongViec );

const body = ref({
  noi_dung: '',
  hinh_anh: null,
  cong_viec_id: props.id
})

const handleFileChange = (e: any) => {
  const img = document.getElementsByClassName('img');
  const divImg = document.getElementsByClassName('div-img');
  const file =  e.target.files[0];
  body.value.hinh_anh = file;
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      for (let i = 0; i < img.length; i++) {
        (img[i] as HTMLImageElement).src = e.target?.result as string;
        (divImg[i] as HTMLElement).classList.remove('hidden');
      }
    };
    reader.readAsDataURL(file);
  }
};

const removeImg = () => {
  const img = document.getElementsByClassName('img');
  const divImg = document.getElementsByClassName('div-img');
  for (let i = 0; i < img.length; i++) {
    (img[i] as HTMLImageElement).src = '';
    (divImg[i] as HTMLElement).classList.add('hidden');
  }
};

async function submit() {
  if (!body.value.noi_dung && !body.value.hinh_anh) return;
  const formData = new FormData();
  formData.append('noi_dung', body.value.noi_dung);
  formData.append('hinh_anh', body.value.hinh_anh);
  formData.append('cong_viec_id', body.value.cong_viec_id);

  try {
    await userStore.phanHoi(formData);
    socket.emit('send-message', {cong_viec_id: props.id});
    body.value.noi_dung = '';
    body.value.hinh_anh = null;
    removeImg();
  } catch (e) {
    console.log(e);
  } finally {
    await userStore.getProfile();
    cong_viec.value = userStore.cong_viec.find((pa: PhanAnh) => pa.id == props.id) || {} as PhanAnh;
  }
}

function scrollToBottom() {

}

</script>

<template>
  <Container :title="cong_viec.tieu_de" hasBack>
    <ScrollArea  class="mt-3 relative space-y-2 " style="height: calc(100vh - 90px)">
      <ReceiveMessage class="mb-5" :phan_hoi="{ noi_dung: cong_viec.noi_dung, hinh_anh: cong_viec.hinh_anh ? MEDIA_CONG_VIEC_ENDPOINT + cong_viec.hinh_anh : '', nguoi_tao: cong_viec.nguoi_tao }" />
      <template v-for="(ph, index) in cong_viec.phan_hoi" :key="index">
        <SendMessage :class="[index + 1 == cong_viec.phan_hoi.length && 'mb-20']" v-if="ph.nguoi_tao.id === userStore.id" :phan_hoi="ph" />
        <ReceiveMessage :class="[index + 1 == cong_viec.phan_hoi.length && 'mb-20']" :phan_hoi="ph" v-else />
      </template>
      <form @submit.prevent="submit" class="absolute bottom-1 left-2 right-1 flex items-center gap-2">
        <div class="relative">
          <label for="hinh_anh">
            <Icon icon="radix-icons:link-1" class="h-10 w-10 rotate-0 scale-100 transition-all text-zinc-400 dark:text-zinc-300"/>
          </label>
          <Input @change="handleFileChange($event)" type="file" class="w-10 h-10 absolute bottom-[-10px] opacity-0" id="hinh_anh" />
        </div>
        <div class="relative flex-1">
          <Input placeholder="Nhập tin nhắn" v-model="body.noi_dung" class="w-full"/>
          <div class="absolute bottom-[120%] hidden div-img">
            <img src="" alt="img" class="w-20 rounded img"/>
            <Icon @click="removeImg"  icon="radix-icons:cross-circled" class="h-5 w-5 rotate-0 scale-100 transition-all text-zinc-800 absolute top-[-5px] end-[-8px] dark:text-white"/>
          </div>
          <Button type="submit" variant="ghost" class="absolute top-0 end-0">
            <Icon icon="radix-icons:paper-plane" class="h-5 w-5 rotate-0 scale-100 transition-all text-zinc-500 dark:text-white"/>
          </Button>
        </div>
      </form>
    </ScrollArea>
  </Container>
</template>

<style scoped>
</style>
