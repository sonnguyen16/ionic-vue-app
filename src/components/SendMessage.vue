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
  <div class="flex flex-col items-end">
    <Badge v-if="phan_hoi.noi_dung" variant="outline" class="font-normal p-2">
      {{ phan_hoi.noi_dung }}
    </Badge>
    <img v-if="phan_hoi.hinh_anh" :src="phan_hoi.hinh_anh" alt="avatar" class="w-40 mt-2"/>
  </div>
</template>

<style scoped>

</style>