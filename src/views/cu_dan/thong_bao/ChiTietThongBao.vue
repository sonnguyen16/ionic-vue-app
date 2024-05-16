<script setup lang="ts">

import Container from "@/components/Container.vue";
import { hideTabBar } from "../../../../public/script";
import {onMounted} from "vue";

onMounted(() => {
  hideTabBar();
});
</script>

<template>
  <Container hasBack title="">
    <div class="">
      <h1 class="text-xl font-bold text-blue-400">Thông báo cúp điện</h1>
      <p class="dark:text-zinc-400">
        Tòa nhà sẽ cúp điện vào ngày 20/6/2022 từ 16h đến 17h, quý khách vui lòng sắp xếp công việc để tránh ảnh hưởng.
      </p>
    </div>
  </Container>
</template>

<style scoped>

</style>