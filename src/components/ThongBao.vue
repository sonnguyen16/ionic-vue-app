<script setup lang="ts">
  import {Badge} from "./ui/badge";
  import {Card, CardContent} from "./ui/card";
  import {computed, defineProps, onMounted} from 'vue';
  import { useUserStore } from '@/stores/user';
  import {ChuDeThongBaoText} from "@/lib/enums";
  import {ThongBao} from "@/lib/types";
  import {defineEmits} from "vue";
  import {useThongBaoStore} from "@/stores/thongbao";


  const props = defineProps({
    tb: {
      type: Object as () => ThongBao,
      required: true,
      default: {
        id: '',
        tieu_de: '',
        noi_dung: '',
        chu_de: 0,
        xem_thong_bao: []
      }
    } ,
    index: {
      type: Number,
      default: 0
    }
  })

  const { id } = useUserStore();



  const emit = defineEmits(['showDetail'])

  const noi_dung = computed(() => {
    const nd = props.tb.noi_dung.slice(props.tb.noi_dung.indexOf('<p>') + 3,props.tb.noi_dung.indexOf('</p>'))
    return nd.length > 100 ? nd.slice(0,100) + '...' : nd
  })


</script>

<template>
  <Card @click="emit('showDetail', tb.id)" :class="[tb.xem_thong_bao?.some(xtb => xtb.user.id === id) ? '' : 'bg-zinc-100 dark:bg-zinc-700', index === -1 ? '' : 'my-3']">
    <CardContent class="p-2">
      <div class="flex justify-between">
        <label class="font-bold text-blue-400">{{ tb.tieu_de }}</label>
        <Badge variant="outline">{{ ChuDeThongBaoText[tb.chu_de] }}</Badge>
      </div>
      <p :class="[tb.xem_thong_bao.some(xtb => xtb.user.id === id) ?  '' : 'dark:text-zinc-200','text-zinc-500 dark:text-zinc-400 text-sm mt-1']">
        {{ noi_dung }}
      </p>
    </CardContent>
  </Card>
</template>

<style scoped>

</style>