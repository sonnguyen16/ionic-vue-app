<script setup lang="ts">

import Container from "@/components/Container.vue";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {hideTabBar} from "../../../../public/script";
import {onMounted} from "vue";

onMounted(() => {
  hideTabBar()
})


</script>

<template>
  <Container title="Sân golf" hasBack>
    <form class="mt-5 space-y-6">
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Ngày bắt đầu</Label>
        <Input type="datetime-local" class="w-full"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Ngày kết thúc</Label>
        <Input type="datetime-local"  class="w-full"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Phương thức thanh toán</Label>
        <Select>
          <SelectTrigger class="w-full" style="border: 1px solid rgba(0,0,0,0.1)">
            <SelectValue placeholder="Phương thức thanh toán" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Phương thức thanh toán</SelectLabel>
              <SelectItem value="1">
                Tiền mặt
              </SelectItem>
              <SelectItem value="2">
                Chuyển khoản
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" >Gửi</Button>
    </form>
  </Container>
</template>

<style scoped>
input[type="datetime-local"]::-webkit-calendar-picker-indicator {
  background-color: rgba(0,0,0,0);
  opacity: 1;
}
</style>