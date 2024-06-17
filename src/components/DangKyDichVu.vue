<script setup lang="ts">

import {Card, CardContent} from "./ui/card";
import {Badge} from "./ui/badge";
import {DangKyDichVu} from "@/lib/types";
import {MEDIA_DICH_VU_ENDPOINT} from "@/lib/constants";
import {FeeStatusText} from "../lib/enums";
import {formatCurrency} from "../../public/script";

defineProps({
  dang_ky_dich_vu: {
    type: Object as () => DangKyDichVu,
    required: true
  }
})

</script>

<template>
  <Card class="mt-4">
    <CardContent class="p-0 flex">
      <img :src="MEDIA_DICH_VU_ENDPOINT + dang_ky_dich_vu.phi_dich_vu.hinh_anh" alt="dichvu1" class="w-[90px] h-[90px] object-cover rounded-l-md"/>
      <div class="p-2 flex-1">
        <div class="flex justify-between items-center">
          <p class="text-sm font-bold text-blue-400">{{ dang_ky_dich_vu.phi_dich_vu.ten }}</p>
          <Badge variant="outline" >{{ FeeStatusText[dang_ky_dich_vu.trang_thai] }}</Badge>
        </div>
        <p class="text-xs text-gray-400 mt-1">{{ new Date(dang_ky_dich_vu.ngay_bat_dau).toLocaleDateString() }} - {{ new Date(dang_ky_dich_vu.ngay_ket_thuc).toLocaleDateString() }}</p>
        <Badge variant="outline" class="mt-2">{{ dang_ky_dich_vu.tong_tien == null ? 'Miễn phí' : formatCurrency(dang_ky_dich_vu.tong_tien) }}</Badge>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>