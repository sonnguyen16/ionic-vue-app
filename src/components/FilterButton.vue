<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'


defineOptions({
  inheritAttrs: false
})

defineProps({
  options: {
    type: Object as () => { label: string; checked: string }[],
    required: true,
  }
})

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost">
        <Icon icon="radix-icons:mixer-vertical" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white " />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <template v-for="(option, index) in options" :key="index">
        <DropdownMenuItem class="flex justify-between">
          {{ option.label }} <Icon v-if="option.checked" icon="radix-icons:check" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white " />
        </DropdownMenuItem>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>