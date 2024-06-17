<script setup lang="ts">
import {Badge} from "./ui/badge";
import {Card, CardContent} from "./ui/card";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {PhanAnh} from "@/lib/types";
import {PhanAnhTypeText} from "../lib/enums";

defineProps({
  pa: {
    type: Object as () => PhanAnh,
    required: true
  }
})
const emit = defineEmits(['showDetail'])
</script>

<template>
  <Card @click="emit('showDetail', pa.id)">
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
            <Badge variant="outline">{{ PhanAnhTypeText[pa.phan_loai] }}</Badge>
          </div>
          <p class="text-zinc-400 text-sm mt-1">
            {{ pa.noi_dung.length > 100 ? pa.noi_dung.slice(0, 100) + '...' : pa.noi_dung }}
          </p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>