<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {useRouter} from "vue-router";
import {hideTabBar} from "../../../../public/script";
import {onMounted} from "vue";

onMounted(() => {
  hideTabBar()
})

const router = useRouter();

function register() {
  router.push({
    name: "dang-ky-dich-vu"
  });
}
</script>

<template>
  <Container title="" hasBack>
    <div class="relative" style="height: calc(100vh - 100px)">
      <img src="/golf.png" alt="DV" class="rounded-xl h-[150px] w-full object-cover mt-3"/>
      <div class="mt-3 dark:text-zinc-300">
        <div class="flex justify-between">
          <p class="text-lg font-bold">Sân Golf</p>
          <Badge variant="outline" class="text-sm text-gray-400">500.000đ</Badge>
        </div>
        <p class="text-sm mt-2">
          Sân golf 18 lỗ, cung cấp dịch vụ cho cư dân chơi golf vào cuối tuần.
          Với không gian thoáng đãng, sân golf sẽ là nơi lý tưởng cho cư dân thư giãn sau những ngày làm việc căng thẳng.
        </p>
      </div>
      <Button @click.prevent="register" class="mt-3 w-full absolute bottom-0">Đăng ký ngay</Button>
    </div>
    <router-view />
  </Container>
</template>

<style scoped>

</style>