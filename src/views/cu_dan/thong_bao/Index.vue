<template>
  <Container title="Thông báo">
    <div class="flex">
      <Input class="flex-1" placeholder="Tìm kiếm"/>
      <FilterButton
          :options="options"
      />
    </div>
    <template v-for="(tb, index) in thong_bao" :key="index">
      <ThongBao
          @showDetail="showDetail"
          :tb="tb"/>
    </template>
    <router-view/>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import {Input} from "@/components/ui/input";
import ThongBao from "@/components/ThongBao.vue";
import FilterButton from "@/components/FilterButton.vue";
import {useRouter} from "vue-router";
import {showTabBar} from "../../../../public/script";
import {onMounted} from "vue";

const router = useRouter()
function showDetail() {
  router.push({
    name: 'chi-tiet-thong-bao'
  })
}

onMounted(() => {
  showTabBar();
});

const options:any[] = [
  {label: 'Tất cả', checked: true},
  {label: 'Chưa xem', checked: false},
  {label: 'Đã xem', checked: false}
]

const thong_bao:any[] = [
  {
    title: "Thu phí tháng 5",
    content: "Hệ thống sẽ thu phí tháng 5 vào ngày 20/5/2022, quý khách vui lòng đóng phí...",
    type: "Thông báo chung",
    viewed: false
  },
  {
    title: "Thông báo cúp điện",
    content: "Tòa nhà sẽ cúp điện vào ngày 20/6/2022, quý khách vui lòng sắp xếp công việc...",
    type: "Thông báo bảo trì",
    viewed: false
  },
  {
    title: "Thông báo nghỉ lễ",
    content: "Tòa nhà sẽ nghỉ lễ vào ngày 2/9/2022, quý khách vui lòng sắp xếp công việc...",
    type: "Thông báo chung",
    viewed: false
  },
  {
    title: "Thông báo cúp nước",
    content: "Tòa nhà sẽ cúp nước vào ngày 20/8/2022, quý khách vui lòng sắp xếp công việc...",
    type: "Thông báo bảo trì",
    viewed: true
  },
  {
    title: "Thu phí tháng 4",
    content: "Hệ thống sẽ thu phí tháng 4 vào ngày 20/4/2022, quý khách vui lòng đóng phí...",
    type: "Thông báo chung",
    viewed: true
  },
  {
    title: "Thu phí tháng 3",
    content: "Hệ thống sẽ thu phí tháng 3 vào ngày 3/4/2022, quý khách vui lòng đóng phí...",
    type: "Thông báo chung",
    viewed: true
  }
]
</script>
