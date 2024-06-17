<template>
  <Container title="Số ghi" class="relative">
    <div class="flex">
      <Input v-model="search" placeholder="Tìm kiếm căn hộ"/>
      <FilterButton @select="check" :options="options" />
    </div>
    <ScrollArea class="h-[calc(100vh)]">
      <template v-for="tn in groupedApartments" :key="tn.id">
        <h2 class="text-center font-bold dark:text-white">Tòa nhà {{ tn.ten }}</h2>
        <template v-for="(apartments, floor) in tn.floors" :key="floor">
          <h3 class="text-center font-semibold dark:text-white bg-gray-200 text-zinc-800 dark:bg-zinc-900 rounded-lg p-2">Tầng {{ floor }}</h3>
          <div class="grid-cols-4 grid gap-2">
            <template v-for="ch in apartments" :key="ch.id">
              <div class="col-span-1 text-center">
                <div @click="ch.cu_dan.length > 0 && openDialog(ch.id)" :class="[ch.cu_dan.length > 0 ? 'bg-gray-200' : 'bg-gray-100 ' ,'p-2 rounded-lg text-sm font-bold dark:bg-zinc-900 dark:text-zinc-300 text-gray-900']">
                  {{ ch.so_nha }}
                </div>
              </div>
            </template>
          </div>
        </template>
      </template>
    </ScrollArea>
    <Dialog :open="isOpen">
      <DialogContent @close="isOpen = false" class="w-80 rounded">
        <DialogHeader>
          <DialogTitle class="text-black dark:text-zinc-400">Nhập số ghi</DialogTitle>
          <DialogDescription class="text-black">
            Nhập số điện và nước tháng {{ new Date().toLocaleDateString().split('/')[1] + '/' + new Date().toLocaleDateString().split('/')[2]}}
          </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="name" class="text-right text-black dark:text-zinc-400">
              Số điện
            </Label>
            <Input v-model="form.chi_so_dien" type="number" class="col-span-3 text-black dark:text-zinc-400" />
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <Label for="username" class="text-right text-black dark:text-zinc-400">
              Số nước
            </Label>
            <Input v-model="form.chi_so_nuoc" type="number" class="col-span-3 text-black dark:text-zinc-400" />
          </div>
        </div>
        <DialogFooter>
          <Button :disabled="loading" @click="submit" type="submit">
            <Loader2 v-show="loading" class="w-4 h-4 mr-2 animate-spin" />
            Lưu
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import {Input} from "@/components/ui/input";
import FilterButton from "@/components/FilterButton.vue";
import {showTabBar} from "../../../../public/script";
import {computed, onMounted, ref, watch} from "vue";
import {useCanHoStore} from "@/stores/canho";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Button} from "@/components/ui/button";
import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Dialog} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {useToast} from "@/components/ui/toast";
import {Loader2} from "lucide-vue-next";


onMounted(async () => {
  showTabBar()
})

const loading = ref(false);

const isOpen = ref(false);

function openDialog(id) {
  const canHo = canHoStore.toa_nha.flatMap(tn => tn.can_ho).find(ch => ch.id === id);
  if(canHo.so_ghi.length > 0) return;
  isOpen.value = true;
  form.value.ma_can_ho = id;
}

const form = ref({
  ma_can_ho: '',
  chi_so_dien: null as number | null,
  chi_so_nuoc: null as number | null,
  thang: new Date().toLocaleDateString().split('/')[1],
  nam: new Date().toLocaleDateString().split('/')[2]
})

const { toast } = useToast();

async function submit() {
  if (!form.value.chi_so_dien || !form.value.chi_so_nuoc) return;

  loading.value = true;

  try {
    const res = await canHoStore.soGhi(form.value);
    if (res.success === true) {
      toast({
        title: 'Thành công',
        description: 'Đã ghi số',
        variant: 'default'
      })
      const canHo = canHoStore.toa_nha.flatMap(tn => tn.can_ho).find(ch => ch.id == form.value.ma_can_ho);
      canHo.so_ghi.push({
        chi_so_dien: form.value.chi_so_dien,
        chi_so_nuoc: form.value.chi_so_nuoc,
        thang: form.value.thang,
        nam: form.value.nam
      })
    } else {
      toast({
        title: 'Thất bại',
        description: 'Có lỗi xảy ra',
        variant: 'destructive'
      })
    }
  } catch (e) {
    toast({
      title: 'Thất bại',
      description: e.toString(),
      variant: 'destructive'
    })
    console.error(e);
  } finally {
    loading.value = false;
    isOpen.value = false;
    form.value = {
      ma_can_ho: '',
      chi_so_dien: null,
      chi_so_nuoc: null,
      thang: new Date().toLocaleDateString().split('/')[1],
      nam: new Date().toLocaleDateString().split('/')[2]
    }
  }
}

const canHoStore = useCanHoStore();

const search = ref('');
const toa_nha = ref(canHoStore.toa_nha);

watch(search, (value: string) => {
  if (value === '') {
    toa_nha.value = canHoStore.toa_nha;
  } else {
    toa_nha.value = canHoStore.toa_nha.map(tn => {
      return {
        ...tn,
        can_ho: tn.can_ho.filter(ch => ch.so_nha.includes(value))
      }
    })
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

  if (options.value[index].checked && options.value[index].label !== 'Tất cả') {
    toa_nha.value = canHoStore.toa_nha.filter(tn => tn.ten === options.value[index].label);
  } else {
    toa_nha.value = canHoStore.toa_nha;
  }
}

const options = ref([{label: 'Tất cả', checked: true}, ...toa_nha.value.map(tn => ({label: tn.ten, checked: false}))]);

const groupedApartments = computed(() => {
  return toa_nha.value.map(toaNha => {
    const floors = toaNha.can_ho.reduce((acc, apartment) => {
      const floor = apartment.tang; // Assuming each apartment object has a `floor` property
      if (!acc[floor]) {
        acc[floor] = [];
      }
      acc[floor].push(apartment);
      return acc;
    }, {});
    return {
      ...toaNha,
      floors
    };
  });
});
</script>
