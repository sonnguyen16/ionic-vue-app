<template>
  <Container title="Dịch vụ">
    <Tabs default-value="account" class="w-full mt-2">
      <TabsList class="w-full">
        <TabsTrigger class="w-1/2" value="account">
          Danh sách dịch vụ
        </TabsTrigger>
        <TabsTrigger class="w-1/2" value="password">
          Dịch vụ đã đăng ký
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div class="grid grid-cols-2 lg:grid-cols-8 gap-3 mt-4">
          <template  v-for="(_,index) in dich_vu" :key="index">
            <DichVu @show-detail="showDetail" class="col-span-1" :dv="dich_vu[index]" />
          </template>
        </div>
      </TabsContent>
      <TabsContent value="password">
        <template v-for="(_,index) in dang_ky_dich_vu" :key="index">
          <DangKyDichVu :dang_ky_dich_vu="dang_ky_dich_vu[index]"/>
        </template>
      </TabsContent>
    </Tabs>
    <router-view/>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import DichVu from "@/components/DichVu.vue";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import DangKyDichVu from "@/components/DangKyDichVu.vue";
import { useRouter } from "vue-router";
import {showTabBar} from "../../../../public/script";
import {onMounted} from "vue";

onMounted(() => {
  showTabBar()
})

const router = useRouter();
function showDetail() {
  router.push({
    name: "chi-tiet-dich-vu",
  });
}

const dang_ky_dich_vu:any [] = [
  {
    ngay_bat_dau: "20/5/2022",
    ngay_ket_thuc: "20/6/2022",
    thanh_toan: "Đã thanh toán",
    duyet: "Đã duyệt",
    dich_vu: {
      ten: "Bể bơi",
      gia: "Miễn phí",
      hinh_anh: "/pool.jpg",
    }
  },
  {
    ngay_bat_dau: "20/5/2022",
    ngay_ket_thuc: "20/6/2022",
    thanh_toan: "Đã thanh toán",
    duyet: "Chưa duyệt",
    dich_vu: {
      ten: "Sân tennis",
      gia: "200.000đ",
      hinh_anh: "/tennis.jpg",
    }
  },
  {
    ngay_bat_dau: "20/5/2022",
    ngay_ket_thuc: "20/6/2022",
    thanh_toan: "Chưa thanh toán",
    duyet: "Chưa duyệt",
    dich_vu: {
      ten: "Sân bóng",
      gia: "200.000đ",
      hinh_anh: "/soccer.jpg",
    }
  },
  {
    ngay_bat_dau: "20/5/2022",
    ngay_ket_thuc: "20/6/2022",
    thanh_toan: "Chưa thanh toán",
    duyet: "Chưa duyệt",
    dich_vu: {
      ten: "Sân golf",
      gia: "500.000đ",
      hinh_anh: "/golf.png",
    }
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
    gia: "500.000đ",
    hinh_anh: "/golf.png",
  },
  {
    ten: "Sân bóng",
    gia: "200.000đ",
    hinh_anh: "/soccer.jpg",
  },
  {
    ten: "Sân tennis",
    gia: "300.000đ",
    hinh_anh: "/tennis.jpg",
  },
]
</script>
