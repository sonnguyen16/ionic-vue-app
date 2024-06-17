<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {useRouter} from "vue-router";
import {hideTabBar} from "../../../../public/script";
import {onMounted, onUpdated} from "vue";
import {defineProps, ref} from "vue";
import {DichVu} from "@/lib/types";
import {useDichVuStore} from "@/stores/phidichvu";
import {MEDIA_DICH_VU_ENDPOINT} from "@/lib/constants";
import { formatCurrency } from "../../../../public/script";
import {onIonViewDidEnter} from "@ionic/vue";


const props = defineProps({
  id: String
})

const dv = ref({} as DichVu)

onMounted(() => {
  hideTabBar()
  dv.value = useDichVuStore().dich_vu.data.find((x: DichVu) => x.id === Number(props.id)) || {} as DichVu;
})

onIonViewDidEnter(() => {
  hideTabBar()
})

const router = useRouter();

function register() {
  router.push(`/dich-vu/${props.id}/dang-ky`);
}
</script>

<template>
  <Container title="" hasBack>
    <div class="relative" style="height: calc(100vh - 100px)">
      <img :src="MEDIA_DICH_VU_ENDPOINT + dv.hinh_anh" alt="DV" class="rounded-xl h-[150px] w-full object-cover mt-3"/>
      <div class="mt-3 dark:text-zinc-300">
        <div class="flex justify-between">
          <p class="text-lg font-bold">{{ dv.ten }}</p>
          <Badge variant="outline" class="text-sm text-gray-400">{{ formatCurrency(dv.gia) }}</Badge>
        </div>
        <p class="text-sm mt-2">
          {{ dv.mo_ta }}
        </p>
      </div>
      <Button @click.prevent="register" class="mt-3 w-full absolute bottom-0">Đăng ký ngay</Button>
    </div>
  </Container>
</template>

<style scoped>

</style>