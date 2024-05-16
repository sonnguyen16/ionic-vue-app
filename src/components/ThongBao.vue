<script setup lang="ts">
  import {Badge} from "./ui/badge";
  import {Card, CardContent} from "./ui/card";
  import { defineProps } from 'vue';

  defineProps({
    tb: {
      type: Object as () => {title: string, content: string, type: string, viewed: boolean},
      required: true
    } ,
    index: {
      type: Number,
      default: 0
    }
  })

  const emit = defineEmits(['showDetail'])
</script>

<template>
  <Card @click="emit('showDetail')" :class="[tb.viewed ? '' : 'bg-zinc-100 dark:bg-zinc-700', index === -1 ? '' : 'my-3']">
    <CardContent class="p-2">
      <div class="flex justify-between">
        <label class="font-bold text-blue-400">{{ tb.title }}</label>
        <Badge variant="outline">{{ tb.type }}</Badge>
      </div>
      <p :class="[tb.viewed ? '' : 'dark:text-zinc-200','text-zinc-500 dark:text-zinc-400 text-sm mt-1']">
        {{ tb.content }}
      </p>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>