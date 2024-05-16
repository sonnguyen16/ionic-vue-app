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
  SelectValue,
} from '@/components/ui/select'
import {hideTabBar} from "../../../../public/script";
import {onMounted} from "vue";

onMounted(() => {
  hideTabBar()
})

</script>

<template>
  <Container title="Tạo phản ánh" hasBack>
    <form class="mt-5 space-y-3">
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Tiêu đề</Label>
        <Input />
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Nội dung</Label>
        <Input class="h-[100px]"/>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Phân loại</Label>
        <Select>
          <SelectTrigger class="w-full" style="border: 1px solid rgba(0,0,0,0.1)">
            <SelectValue placeholder="Chọn phân loại" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Chọn phân loại</SelectLabel>
              <SelectItem value="1">
                Góp ý
              </SelectItem>
              <SelectItem value="2">
                Hỏi đáp
              </SelectItem>
              <SelectItem value="3">
                Kỹ thuật
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div class="flex flex-col gap-3">
        <Label class="text-zinc-500">Hình ảnh</Label>
        <Input id="picture" type="file" />
      </div>
      <Button type="submit" >Gửi</Button>
    </form>
  </Container>
</template>

<style scoped>

</style>