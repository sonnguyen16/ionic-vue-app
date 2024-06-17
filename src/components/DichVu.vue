<script setup lang="ts">
import {Badge} from "./ui/badge";
import {Card, CardContent} from "./ui/card";
import {MEDIA_DICH_VU_ENDPOINT} from "@/lib/constants";
import { formatCurrency } from "../../public/script";
import {DichVu} from "@/lib/types";

defineProps({
  dv: {
    type: Object as () => DichVu,
    required: true,
    default: {
      id: '',
      ten: '',
      gia: 0,
      hinh_anh: ''
    }
  }
})

const emit = defineEmits(["showDetail"])
</script>

<template>
    <Card @click="emit('showDetail', dv.id)">
      <CardContent class="p-0">
        <img :src="MEDIA_DICH_VU_ENDPOINT + dv.hinh_anh" alt="dichvu1" class="w-full h-[80px] object-cover rounded-t-md"/>
        <div class="flex justify-between items-center p-2 pt-0">
          <p class="text-sm font-bold text-blue-400 mt-2 ">{{ dv.ten }}</p>
          <Badge variant="outline" class="mt-2">{{ formatCurrency(dv.gia) }}</Badge>
        </div>
      </CardContent>
    </Card>
</template>

<style scoped>

</style>