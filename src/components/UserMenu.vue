<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useRouter } from 'vue-router'

const router = useRouter()

</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost">
        <Icon icon="radix-icons:person" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white " />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click.prevent="router.push('/tai-khoan')">
        Thông tin
      </DropdownMenuItem>
      <DropdownMenuItem @click.prevent="router.push('/doi-mat-khau')">
        Đổi mật khẩu
      </DropdownMenuItem>
      <DropdownMenuItem @click.prevent="router.push('/dang-xuat')">
        Đăng xuất
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>