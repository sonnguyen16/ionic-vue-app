<template>
  <Container title="Trang chủ">
    <Input placeholder="Tìm kiếm dịch vụ, phản ánh..." />
    <HeaderSection title="Thông báo" link="/thong-bao" />
    <!--          Thông báo-->
    <Carousel class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 3" :key="index">
          <ThongBao :tb="thong_bao[index]" :index="-1"/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <!--          Thông báo-->
    <!--          Dịch vụ-->
    <HeaderSection title="Dịch vụ hot" link="/dich-vu" />
    <div class="flex gap-3">
      <Carousel class="relative w-full">
        <CarouselContent>
          <CarouselItem v-for="(_,index) in dich_vu" :key="index" class="basis-1/2">
            <DichVu :dv="dich_vu[index]" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <!--          Dịch vụ-->
    <!--          Phản ánh-->
    <HeaderSection title="Phản ánh của bạn" link="/phan-anh" />
    <Carousel class="relative w-full">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 3" :key="index">
          <PhanAnh :pa="phan_anh[index]"/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
    <!--          Phản ánh-->
    <!--          Phí chưa thanh toán-->
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
        <TableRow class="dark:border-zinc-700 " v-for="item in phi" :key="item.name">
          <TableCell >
            <label class="dark:text-zinc-200 font-bold text-[10px]" >{{ item.name }}</label>
          </TableCell>
          <TableCell>
            <label class="dark:text-zinc-200 text-[10px]">{{ item.time }}</label>
          </TableCell>
          <TableCell>
            <label class="dark:text-zinc-200 text-[10px]">{{ item.total }}</label>
          </TableCell>
          <TableCell class="text-right">
            <Badge class="bg-red-500 w-[100px] flex justify-center text-[10px] p-[1px]">Chưa thanh toán</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
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

const phi:any = [
  {
    name: 'Phí tháng 5',
    time: '20/5/2022',
    total: '1.000.000đ'
  },
  {
    name: 'Phí tháng 4',
    time: '20/4/2022',
    total: '1.000.000đ'
  },
  {
    name: 'Phí tháng 3',
    time: '20/3/2022',
    total: '1.000.000đ'
  },
];

const thong_bao:any[] = [
  {
    title: "Thu phí tháng 5",
    content: "Hệ thống sẽ thu phí tháng 5 vào ngày 20/5/2022, quý khách vui lòng đóng phí...",
    type: "Thông báo chung",
    viewed: true
  },
  {
    title: "Thông báo cúp điện",
    content: "Tòa nhà sẽ cúp điện vào ngày 20/6/2022, quý khách vui lòng sắp xếp công việc...",
    type: "Thông báo bảo trì",
    viewed: true
  },
  {
    title: "Thông báo nghỉ lễ",
    content: "Tòa nhà sẽ nghỉ lễ vào ngày 2/9/2022, quý khách vui lòng sắp xếp công việc...",
    type: "Thông báo chung",
    viewed: true
  }
]

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

const dich_vu:any [] = [
  {
    ten: "Bể bơi",
    gia: "Miễn phí",
    hinh_anh: "/pool.jpg",
  },
  {
    ten: "Sân golf",
    gia: "100.000đ",
    hinh_anh: "/golf.png",
  },
]
</script>
