<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Icon} from "@iconify/vue";


</script>

<template>
  <Container title="Thông tin cá nhân" hasBack>
   <div class="flex justify-center mt-3 relative">
     <Avatar size="lg" >
       <AvatarImage src="/avatar.png" alt="@radix-vue" />
       <AvatarFallback>CN</AvatarFallback>
     </Avatar>
     <Icon icon="akar-icons:camera" class="absolute bottom-0 right-[31vw] w-[30px] h-[30px] bg-white rounded-xl p-1 cursor-pointer"/>
   </div>
    <form class="mt-5 space-y-3">
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Họ tên</Label>
        <Input default-value="Nguyễn Văn Sơn"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Email</Label>
        <Input default-value="son@gmail.com"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Số điện thoại</Label>
        <Input default-value="0123456789"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Số nhà</Label>
        <Input default-value="A-08.01" disabled/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Tình trạng</Label>
        <Input default-value="Bán" disabled/>
      </div>
      <Button type="submit" >Lưu</Button>
    </form>
  </Container>
</template>

<style scoped>

</style>