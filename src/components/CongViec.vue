<script setup lang="ts">

import {Card, CardContent} from "./ui/card";
import {Badge} from "./ui/badge";
import {CongViec, DangKyDichVu} from "@/lib/types";
import {MEDIA_CONG_VIEC_ENDPOINT, MEDIA_DICH_VU_ENDPOINT} from "@/lib/constants";
import {FeeStatusText, JobStatusText} from "../lib/enums";
import {formatCurrency} from "../../public/script";

defineProps({
  cv: {
    type: Object as () => CongViec,
    required: true
  }
})

const emit = defineEmits(['showDetail']);

</script>

<template>
  <Card @click="emit('showDetail', cv.id)" class="">
    <CardContent  class="p-0 flex">
      <img :src="cv.hinh_anh ? MEDIA_CONG_VIEC_ENDPOINT + cv.hinh_anh : '/golf.png' " alt="dichvu1" class="w-[80px] h-[80px] object-cover rounded-l-md"/>
      <div class="p-2 flex-1">
        <div class="flex justify-between items-center">
          <p class="text-sm font-bold text-blue-400">{{ cv.tieu_de }}</p>
          <Badge variant="outline" >{{ JobStatusText[cv.tinh_trang] }}</Badge>
        </div>
        <p class="text-xs text-gray-400 mt-1">{{ cv.noi_dung.length > 100 ? cv.noi_dung.slice(0, 100) + '...' : cv.noi_dung }}</p>
        <p class="text-xs text-gray-400 mt-1">Thời hạn: {{ new Date(cv.thoi_han).toLocaleDateString()}}</p>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>