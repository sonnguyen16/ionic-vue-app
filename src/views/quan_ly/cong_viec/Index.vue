<template>
  <Container title="Công việc" class="relative">
    <div class="flex">
      <Input v-model="search" placeholder="Tìm kiếm"/>
      <FilterButton @select="check" :options="options" />
    </div>
    <template v-for="(cv, index) in cong_viec" :key="index">
      <CongViec @show-detail="showDetail" :class="['my-3', index === cong_viec.length - 1 && 'mb-10']" :cv="cv"/>
    </template>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import {Input} from "@/components/ui/input";
import FilterButton from "@/components/FilterButton.vue";
import {useRouter} from "vue-router";
import {showTabBar} from "../../../../public/script";
import {onMounted, ref, watch} from "vue";
import {useUserStore} from "@/stores/user";
import CongViec from "@/components/CongViec.vue";

onMounted( async () => {
  showTabBar()
  await userStore.getProfile();
  cong_viec.value = userStore.cong_viec;
})

const router = useRouter()

const userStore = useUserStore();
function showDetail(id: string) {
  router.push(`/cong-viec/${id}`);
}

const cong_viec = ref(userStore.cong_viec);

const search = ref('');

watch(search, (value: string) => {
  if (value === '') {
    cong_viec.value = userStore.cong_viec;
  } else {
    cong_viec.value = userStore.cong_viec.filter(cv => cv.tieu_de.toLowerCase().includes(value.toLowerCase()) || cv.noi_dung.toLowerCase().includes(value.toLowerCase()));
  }
});

function check(index: number) {
  options.value = options.value.map((option, i) => {
    if (i === index) {
      option.checked = !option.checked;
    } else {
      option.checked = false;
    }
    return option;
  })

  switch (index) {
    case 0:
      cong_viec.value = userStore.cong_viec;
      break;
    case 1:
      cong_viec.value = userStore.cong_viec.filter(cv => cv.tinh_trang === 1);
      break;
    case 2:
      cong_viec.value = userStore.cong_viec.filter(cv => cv.tinh_trang === 2);
      break;
    case 3:
      cong_viec.value = userStore.cong_viec.filter(cv => cv.tinh_trang === 3);
      break;
  }
}

const options = ref([
  {label: "Tất cả", checked: true},
  {label: "Chưa giải quyết", checked: false},
  {label: "Đang giải quyết", checked: false},
  {label: "Đã giải quyết", checked: false},
])
</script>
