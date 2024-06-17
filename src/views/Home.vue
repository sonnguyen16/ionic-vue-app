<template>
  <Container title="Trang chủ">
    <Input placeholder="Tìm kiếm dịch vụ, phản ánh..." />
    <HeaderSection title="Thông báo" link="/thong-bao" />
    <!--          Thông báo-->
    <Carousel class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in thong_bao.data.length > 3 ? 3 : thong_bao.data.length" :key="index">
          <ThongBao @show-detail="showDetailThongBao" :tb="thong_bao.data[index]" :index="-1"/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <!--          Thông báo-->
    <!--          Dịch vụ-->
    <section v-if="role == 2" id="dich_vu">
      <HeaderSection title="Dịch vụ hot" link="/dich-vu" />
      <div class="flex gap-3">
        <Carousel class="relative w-full">
          <CarouselContent>
            <CarouselItem v-for="(_,index) in 4" :key="index" class="basis-1/2">
              <DichVu @show-detail="showDetailDichVu"  :dv="dich_vu.data[index]" />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </section>
    <!--          Dịch vụ-->
    <!--          Phản ánh-->
    <HeaderSection title="Phản ánh của bạn" link="/phan-anh" />
    <Carousel class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="(pa, index) in phan_anh" :key="index">
          <PhanAnh @show-detail="showDetailPhanAnh" :pa="pa"/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <!--          Phản ánh-->
    <!--          Phản ánh-->
    <HeaderSection v-if="role == 1" title="Công việc của bạn" link="/cong-viec" />
    <Carousel class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="(cv, index) in cong_viec" :key="index">
          <CongViec @show-detail="showDetailPhanAnh" :cv="cv"/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <!--          Phản ánh-->
    <!--          Phí chưa thanh toán-->
    <section v-if="role == 2" id="phi_dich_vu">
      <HeaderSection title="Phí đến hạn" link="/phi" />
      <Table>
        <TableHeader>
          <TableRow class="dark:border-zinc-600">
            <TableHead class="w-[120px]">
              <label class="text-[10px]">Tên</label>
            </TableHead>
            <TableHead>
              <label class="text-[10px]">Thời gian</label>
            </TableHead>
            <TableHead >
              <label class="text-[10px]">Tổng tiền</label>
            </TableHead>
            <TableHead class="w-[100px] text-right">
              <label class="text-[10px]">Trạng thái</label>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow class="dark:border-zinc-700 " v-for="item in phi" :key="item.id">
            <TableCell >
              <label class="dark:text-zinc-200 font-bold text-[10px]" >{{ item.ten }}</label>
            </TableCell>
            <TableCell>
              <label class="dark:text-zinc-200 text-[10px]">{{ new Date(item.created_at).toLocaleDateString() }}</label>
            </TableCell>
            <TableCell>
              <label class="dark:text-zinc-200 text-[10px]">{{ formatCurrency(item.gia) }}</label>
            </TableCell>
            <TableCell class="text-right">
              <Badge class="bg-red-500 w-[100px] flex justify-center text-[10px] p-[1px]">Chưa thanh toán</Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
    <!--          Phí chưa thanh toán-->
  </Container>
</template>

<script setup lang="ts">
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import Container from "@/components/Container.vue";
import ThongBao from "@/components/ThongBao.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import PhanAnh from "@/components/PhanAnh.vue";
import DichVu from "@/components/DichVu.vue";
import {Badge} from "@/components/ui/badge";
import {useThongBaoStore} from "@/stores/thongbao";
import {useDichVuStore} from "@/stores/phidichvu";
import {useRouter} from "vue-router";
import {useUserStore} from "@/stores/user";
import {ref} from "vue";
import CongViec from "@/components/CongViec.vue";
import {formatCurrency} from "../../public/script";

const router = useRouter();

const userStore = useUserStore();
const thongBaoStore = useThongBaoStore();
const dichVuStore = useDichVuStore();

const role = userStore.role;

const thong_bao = ref(thongBaoStore.thong_bao);
const dich_vu = ref(dichVuStore.dich_vu);
const phan_anh = ref(userStore.phan_anh);
const cong_viec = ref(userStore.cong_viec);
const phi = ref(userStore.phi);
function showDetailThongBao(id: string) {
  router.push(`/thong-bao/${id}`);
}

function showDetailPhanAnh(id: string) {
  router.push(`/phan-anh/${id}`);
}

function showDetailDichVu(id: string) {
  router.push(`/dich-vu/${id}`);
}



</script>
