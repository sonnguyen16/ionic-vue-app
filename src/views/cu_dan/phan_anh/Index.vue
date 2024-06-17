<template>
  <Container title="Phản ánh" class="relative">
    <div class="flex">
      <Input v-model="search" placeholder="Tìm kiếm"/>
      <FilterButton @select="check" :options="options" />
    </div>
    <template v-for="(pa, index) in phan_anh" :key="index">
      <PhanAnh @show-detail="showDetail" :class="['my-3', index === phan_anh.length - 1 && 'mb-10']" :pa="pa"/>
    </template>
    <a v-if="role == 2" @click.prevent="taoPhanAnh()" class="w-[50px] h-[50px] border border-zinc-300 bg-white dark:bg-zinc-800 dark:border-0 absolute rounded-full flex items-center bottom-20 right-5" >
      <Icon icon="radix-icons:pencil-2" class="text-zinc-600 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white m-auto" />
    </a>
    <Dialog />
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
import {onMounted, onUpdated, ref, watch} from "vue";
import {useUserStore} from "@/stores/user";
import {Dialog} from "@/components/ui/dialog";
import {onIonViewWillEnter} from "@ionic/vue";


onIonViewWillEnter( async () => {
  showTabBar()
  await userStore.getProfile();
  await userStore.getPhanAnhBQL();
  phan_anh.value = userStore.phan_anh;
})


const router = useRouter()

const userStore = useUserStore();

const role = userStore.role;
function showDetail(id: string) {
  router.push(`/phan-anh/${id}`);
}

function taoPhanAnh() {
  router.push({
    name: 'tao-phan-anh'
  })
}

const phan_anh = ref(userStore.phan_anh);

const search = ref('');

watch(search, (value: string) => {
  if (value === '') {
    phan_anh.value = userStore.phan_anh;
  } else {
    phan_anh.value = userStore.phan_anh.filter(pa => pa.tieu_de.toLowerCase().includes(value.toLowerCase()) || pa.noi_dung.toLowerCase().includes(value.toLowerCase()));
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
      phan_anh.value = userStore.phan_anh;
      break;
    case 1:
      phan_anh.value = userStore.phan_anh.filter(pa => pa.trang_thai === 3);
      break;
    case 2:
      phan_anh.value = userStore.phan_anh.filter(pa => pa.trang_thai === 1);
      break;
  }
}

const options = ref([
  {label: "Tất cả", checked: true},
  {label: "Chưa giải quyết", checked: false},
  {label: "Đã giải quyết", checked: false},
])
</script>
