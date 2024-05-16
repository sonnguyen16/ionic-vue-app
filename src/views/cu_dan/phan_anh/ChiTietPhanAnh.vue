<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Icon} from "@iconify/vue";
import {Badge} from "@/components/ui/badge";
import {hideTabBar} from "../../../../public/script";
import {onMounted} from "vue";

onMounted(() => {
  hideTabBar()
})
</script>

<template>
  <Container title="Góp ý về dịch vụ" hasBack>
    <div class="mt-3 relative" style="height: calc(100vh - 100px)">
      <div class="float-right flex gap-2">
        <img src="/avatar2.png" alt="avatar" class="rounded-full w-10 h-10"/>
        <div>
          <Badge variant="outline" class="font-normal p-2">
            Ban quản lý xin tiếp nhận góp ý của quý cư dân về dịch vụ bể bơi.
          </Badge>
          <label class="text-zinc-400 text-xs ml-2">08:30 01/05/2024</label>
        </div>
      </div>
      <div class="float-right mt-3">
        <div class="flex flex-col">
          <Badge variant="outline" class="font-normal p-2">
            Cảm ơn BQL.
          </Badge>
          <label class="text-zinc-400 text-xs ml-2">08:40 01/05/2024</label>
        </div>
      </div>
      <div class="flex gap-2 float-left mt-3">
        <img src="/avatar2.png" alt="avatar" class="rounded-full w-10 h-10"/>
        <div class="flex flex-col">
          <Badge variant="outline" class="font-normal p-2">
            Ban quản lý đã xử lý góp ý của quý cư dân.
          </Badge>
          <label class="text-zinc-400 text-xs ml-2">08:45 01/05/2024</label>
        </div>
      </div>
      <div class="float-right mt-3">
        <div class="flex flex-col">
          <Badge variant="outline" class="font-normal p-2">
            Tuyệt vời.
          </Badge>
          <label class="text-zinc-400 text-xs ml-2">08:50 01/05/2024</label>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0">
        <div class="relative">
          <Input placeholder="Nhập tin nhắn" class="w-full"/>
          <Button variant="ghost" class="absolute top-0 end-0">
            <Icon icon="radix-icons:paper-plane" class="h-5 w-5 rotate-0 scale-100 transition-all text-zinc-500 dark:text-white "/>
          </Button>
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped>

</style>