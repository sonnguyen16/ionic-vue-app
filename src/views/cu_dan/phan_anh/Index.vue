<template>
  <Container title="Phản ánh" class="relative">
    <div class="flex">
      <Input placeholder="Tìm kiếm"/>
      <FilterButton :options="options" />
    </div>
    <template v-for="(_, index) in 3" :key="index">
      <PhanAnh @show-detail="showDetail" class="my-3" :pa="phan_anh[index]"/>
    </template>
    <a @click.prevent="taoPhanAnh()" class="w-[50px] h-[50px] border border-zinc-300 dark:bg-zinc-800 dark:border-0 absolute rounded-full flex items-center bottom-20 right-5" >
      <Icon icon="radix-icons:pencil-2" class="text-zinc-600 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white m-auto" />
    </a>
    <router-view />
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import {Input} from "@/components/ui/input";
import PhanAnh from "@/components/PhanAnh.vue";
import { Icon } from '@iconify/vue'
import FilterButton from "@/components/FilterButton.vue";
import {useRouter} from "vue-router";
import {showTabBar} from "../../../../public/script";
import {onMounted} from "vue";

onMounted(() => {
  showTabBar()
})

const router = useRouter()
function showDetail() {
  router.push({
    name: 'chi-tiet-phan-anh'
  })
}

function taoPhanAnh() {
  router.push({
    name: 'tao-phan-anh'
  })
}

const phan_anh:any [] = [
  {
    tieu_de: "Góp ý về dịch vụ",
    noi_dung: "Dịch vụ bể bơi của tòa nhà rất tốt, nhưng mong muốn tăng cường vệ sinh hơn",
    phan_loai: "Góp ý"
  },
  {
    tieu_de: "Báo cáo sự cố",
    noi_dung: "Hệ thống cửa ra vào tòa nhà bị hỏng, mong muốn sửa chữa sớm",
    phan_loai: "Sự cố"
  },
  {
    tieu_de: "Góp ý về dịch vụ",
    noi_dung: "Dịch vụ bể bơi của tòa nhà rất tốt, nhưng mong muốn tăng cường vệ sinh hơn",
    phan_loai: "Góp ý"
  }
]

const options = [
  {label: "Tất cả", checked: true},
  {label: "Chưa giải quyết", checked: false},
  {label: "Đã giải quyết", checked: false},
]
</script>
