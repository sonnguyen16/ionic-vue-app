<script setup lang="ts">

import Container from "@/components/Container.vue";
import { hideTabBar } from "../../../../public/script";
import {onMounted, ref} from "vue";
import {useThongBaoStore} from "@/stores/thongbao";
import {ThongBao} from "@/lib/types";
import {useUserStore} from "@/stores/user";
import {MEDIA_NOTI_ENDPOINT} from "@/lib/constants";

onMounted(() => {
  hideTabBar();
  const da_xem = tb.value.xem_thong_bao.some((xem: any) => xem.user.id == id)
  if (!da_xem) {
    thongBaoStore.xemThongBao(Number(props.id))
    thongBaoStore.thong_bao.data.find((tb: ThongBao) => tb.id == props.id)!.xem_thong_bao.push({user: {id: id}})
  }
});

const props = defineProps({
  id: {
    type: String,
    required: true
  }
})

const thongBaoStore = useThongBaoStore();

const { id } = useUserStore();

const tb = ref(thongBaoStore.thong_bao.data.find((tb: ThongBao) => tb.id == props.id) || {} as ThongBao);
</script>

<template>
  <Container hasBack title="">
    <div class="">
      <h1 class="text-xl font-bold text-blue-400">{{ tb.tieu_de }}</h1>
      <div v-html="tb.noi_dung" class="dark:text-zinc-400">

      </div>
      <a v-if="tb.file" class="mt-3 block" :href="MEDIA_NOTI_ENDPOINT + tb.file">
        Xem file đính kèm
      </a>
    </div>
  </Container>
</template>

<style scoped>

</style>