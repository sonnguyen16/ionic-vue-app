<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="dark:bg-zinc-950 h-full overflow-y-scroll">
          <div class="p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center ">
                <Icon v-if="hasBack" class="text-2xl dark:text-white me-5"  icon="radix-icons:arrow-left" @click="back"/>
                <Label class="text-lg font-bold dark:text-zinc-200">{{ title }}</Label>
              </div>
              <div class="flex items-center">
                <UserMenu v-if="auth" />
                <DarkModeToggle />
              </div>
            </div>
            <slot/>
          </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
} from "@ionic/vue";
import UserMenu from "./UserMenu.vue";
import {Label} from "./ui/label";
import DarkModeToggle from "./DarkModeToggle.vue"
import { Icon } from '@iconify/vue'
import {defineProps, h} from 'vue';
import { socket } from '/src/socket';
import {useRouter} from "vue-router";
import {showTabBar} from "../../public/script";
import {useRouteStore} from "@/stores/route";
import {useThongBaoStore} from "@/stores/thongbao";
import {useUserStore} from "@/stores/user";
import {toast} from "@/components/ui/toast";
import ButtonNotification from "@/components/ButtonNotification.vue";
import {PhanAnh} from "@/lib/types";

const router = useRouter()

const thongBaoStore = useThongBaoStore();
const userStore = useUserStore();

function back(){
  router.back();
  const { previousRoute } = useRouteStore();
  if ( previousRoute && previousRoute.name === 'chi-tiet-dich-vu') return
  showTabBar();
}


async function handleNotification(id: number){
  console.log('id', id);
  await thongBaoStore.getThongBao();
  const tb_new = thongBaoStore.thong_bao.data.find((tb) => tb.id === id);
  if (!tb_new) return;

  const t = toast({
    title: 'Bạn có thông báo mới',
    description: tb_new.tieu_de,
    variant: 'default',
    action: h(ButtonNotification, {
      onClick: () => {
        router.push(`/thong-bao/${id}`)
        t.dismiss()
      },
    }),
  })
}

async function handleJob(id: number){
  console.log('id', id);
  const role = userStore.role;
  if (role !== 1) return;
  await userStore.getProfile();
  const cv_new = userStore.cong_viec.find((cv) => cv.id === id);
  if (!cv_new) return;

  const t = toast({
    title: 'Bạn có công việc mới',
    description: cv_new.tieu_de,
    variant: 'default',
    action: h(ButtonNotification, {
      onClick: () => {
        router.push(`/cong-viec/${id}`)
        t.dismiss()
      },
    }),
  })
}

async function handleMessage(data: any){
  await userStore.getProfile()
  await userStore.getPhanAnhBQL();
}

socket.on('send-notification', handleNotification);
socket.on('send-message', handleMessage);
socket.on('send-job', handleJob);


defineProps({
  title: {
    type: String,
    required: true
  },
  hasBack: {
    type: Boolean,
    default: false
  },
  auth: {
    type: Boolean,
    default: true
  }
})

</script>
<style lang="scss" scoped>

</style>
