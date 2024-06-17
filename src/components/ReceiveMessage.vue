<script setup lang="ts">

import {Badge} from "./ui/badge";
import {PhanHoi} from "@/lib/types";
import {MEDIA_PHAN_ANH_ENDPOINT} from "@/lib/constants";
defineProps({
  phan_hoi: {
    type: Object as () => PhanHoi,
    required: true
  }
})
</script>

<template>
  <div class="flex items-start gap-2">
    <img src="/avatar2.png" alt="avatar" class="rounded-full w-10 h-10"/>
    <div class="flex-col flex">
      <p class="text-xs text-zinc-600 mb-1">{{ phan_hoi.nguoi_tao.name }}</p>
      <Badge v-if="phan_hoi.noi_dung" variant="outline" class="font-normal p-2">
        {{ phan_hoi.noi_dung }}

      </Badge>
      <img v-if="phan_hoi.hinh_anh" :src="phan_hoi.hinh_anh" alt="avatar" class="w-40 mt-2"/>
    </div>
  </div>
</template>

<style scoped>

</style>