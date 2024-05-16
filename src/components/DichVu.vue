<script setup lang="ts">
import {Badge} from "./ui/badge";
import {Card, CardContent} from "./ui/card";

defineProps({
  dv: {
    type: Object as () => {ten: string, gia: string, hinh_anh: string},
    required: true
  }
})

const emit = defineEmits(["showDetail"])
</script>

<template>
    <Card @click="emit('showDetail')">
      <CardContent class="p-0">
        <img :src="dv.hinh_anh" alt="dichvu1" class="w-full h-[80px] object-cover rounded-t-md"/>
        <div class="flex justify-between items-center p-2 pt-0">
          <p class="text-sm font-bold text-blue-400 mt-2 ">{{ dv.ten }}</p>
          <Badge variant="outline" class="mt-2">{{ dv.gia }}</Badge>
        </div>
      </CardContent>
    </Card>
</template>

<style scoped>

</style>