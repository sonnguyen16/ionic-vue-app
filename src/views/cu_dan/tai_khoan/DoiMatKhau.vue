<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";


</script>

<template>
  <Container title="Đổi mật khẩu" hasBack>
    <form class="mt-5 space-y-3">
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Mật khẩu cũ</Label>
        <Input />
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Mật khẩu mới</Label>
        <Input />
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Xác nhận mật khẩu mới</Label>
        <Input />
      </div>
      <Button type="submit" >Lưu</Button>
    </form>
  </Container>
</template>

<style scoped>

</style>