<template>
  <Container title="Thông báo">
    <div class="flex">
      <Input v-model="search" class="flex-1" placeholder="Tìm kiếm"/>
      <FilterButton
          @select="check"
          :options="options"
      />
    </div>
    <template v-for="(tb, index) in thong_bao" :key="index">
      <ThongBao
          @showDetail="showDetail"
          :class="[index === thong_bao.length - 1 && 'mb-10']"
          :tb="tb"/>
    </template>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import {Input} from "@/components/ui/input";
import ThongBao from "@/components/ThongBao.vue";
import FilterButton from "@/components/FilterButton.vue";
import {showTabBar} from "../../../../public/script";
import { onMounted, ref, watch} from "vue";
import {useThongBaoStore} from "@/stores/thongbao";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/user";
const thongBaoStore = useThongBaoStore();


const router = useRouter();


const thong_bao = ref(thongBaoStore.thong_bao.data);

function showDetail(id: string) {
  console.log(id)
  router.push(`/thong-bao/${id}`);
}

onMounted(async () => {
  showTabBar();
  await thongBaoStore.getThongBao();
  thong_bao.value = thongBaoStore.thong_bao.data;
});

const search = ref('');

watch(search, (value: string) => {
  if (value === '') {
    thong_bao.value = thongBaoStore.thong_bao.data;
  } else {
    thong_bao.value = thongBaoStore.thong_bao.data.filter(tb => tb.tieu_de.toLowerCase().includes(value.toLowerCase()) || tb.noi_dung.toLowerCase().includes(value.toLowerCase()));
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
      thong_bao.value = thongBaoStore.thong_bao.data;
      break;
    case 1:
      thong_bao.value = thongBaoStore.thong_bao.data.filter(tb => tb.xem_thong_bao.filter(xtb => xtb.user.id === id).length === 0);
      break;
    case 2:
      thong_bao.value = thongBaoStore.thong_bao.data.filter(tb => tb.xem_thong_bao.filter(xtb => xtb.user.id === id).length > 0);
      break;
  }
}

const { id } = useUserStore();

const options = ref([
  {label: 'Tất cả', checked: true},
  {label: 'Chưa xem', checked: false},
  {label: 'Đã xem', checked: false}
])

</script>
