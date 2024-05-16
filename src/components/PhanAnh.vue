<script setup lang="ts">
import {Badge} from "./ui/badge";
import {Card, CardContent} from "./ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";

defineProps({
  pa: {
    type: Object as () => {tieu_de: string, noi_dung: string, phan_loai: string},
    required: true
  }
})
const emit = defineEmits(['showDetail'])
</script>

<template>
  <Card @click="emit('showDetail')">
    <CardContent class="p-2">
      <div class="flex gap-3 items-center">
        <div>
          <Avatar>
            <AvatarImage src="/avatar2.png" alt="@radix-vue" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div class="flex-1">
          <div class="flex justify-between">
            <label class="font-bold text-blue-400">{{ pa.tieu_de }}</label>
            <Badge variant="outline">{{ pa.phan_loai }}</Badge>
          </div>
          <p class="text-zinc-400 text-sm mt-1">
            {{ pa.noi_dung }}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>