<script setup lang="ts">

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
    <a :href="link" class="block">
      Xem tất cả
    </a>
  </div>
</template>

<style scoped>

</style>