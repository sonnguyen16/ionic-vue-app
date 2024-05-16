<script setup lang="ts">

import {Card, CardContent} from "./ui/card";
import {Badge} from "./ui/badge";

defineProps({
  dang_ky_dich_vu: {
    type: Object as () => {ngay_bat_dau: string, ngay_ket_thuc: string, thanh_toan: string, dich_vu: {ten: string, gia: string, hinh_anh: string}},
    required: true
  }
})

</script>

<template>
  <Card class="mt-4">
    <CardContent class="p-0 flex">
      <img :src="dang_ky_dich_vu.dich_vu.hinh_anh" alt="dichvu1" class="w-[90px] h-[90px] object-cover rounded-l-md"/>
      <div class="p-2 flex-1">
        <div class="flex justify-between items-center">
          <p class="text-sm font-bold text-blue-400">{{ dang_ky_dich_vu.dich_vu.ten }}</p>
          <Badge variant="outline" >{{ dang_ky_dich_vu.thanh_toan }}</Badge>
        </div>
        <p class="text-xs text-gray-400 mt-1">{{ dang_ky_dich_vu.ngay_bat_dau }} - {{ dang_ky_dich_vu.ngay_ket_thuc }}</p>
        <Badge variant="outline" class="mt-2">{{ dang_ky_dich_vu.dich_vu.gia }}</Badge>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>