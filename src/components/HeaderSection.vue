<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

defineProps({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
})

</script>

<template>
  <div class="flex justify-between items-center mt-3">
    <h1 class="text-lg font-bold mt-2 dark:text-zinc-200">{{ title }}</h1>
    <a @click.prevent="router.push(link)" class="block">
      Xem tất cả
    </a>
  </div>
</template>

<style scoped>

</style>