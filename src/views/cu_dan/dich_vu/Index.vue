<template>
  <Container title="Dịch vụ">
    <Tabs :default-value="tab" class="w-full mt-2">
      <TabsList class="w-full">
        <TabsTrigger class="w-1/2" value="dv">
          Danh sách dịch vụ
        </TabsTrigger>
        <TabsTrigger class="w-1/2" value="dkdv">
          Dịch vụ đã đăng ký
        </TabsTrigger>
      </TabsList>
      <TabsContent value="dv">
        <div class="grid grid-cols-2 lg:grid-cols-8 gap-3 mt-4">
          <template  v-for="(_,index) in dich_vu.data" :key="index">
            <DichVu @show-detail="showDetail" class="col-span-1" :dv="dich_vu.data[index]" />
          </template>
        </div>
      </TabsContent>
      <TabsContent value="dkdv">
        <template v-for="(_,index) in dang_ky_dich_vu" :key="index">
          <DangKyDichVu :class="[index === dang_ky_dich_vu.length - 1 && 'mb-10']" :dang_ky_dich_vu="dang_ky_dich_vu[index]"/>
        </template>
      </TabsContent>
    </Tabs>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import DichVu from "@/components/DichVu.vue";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import DangKyDichVu from "@/components/DangKyDichVu.vue";
import { useRouter } from "vue-router";
import {showTabBar} from "../../../../public/script";
import {onMounted, onUpdated} from "vue";
import {useDichVuStore} from "@/stores/phidichvu";
import {useUserStore} from "@/stores/user";
import {ref} from "vue";
import {useRouteStore} from "@/stores/route";
import {onIonViewWillEnter} from "@ionic/vue";

const tab = ref('dv');
const dichvuStore = useDichVuStore();
const userStore = useUserStore();

onIonViewWillEnter( async () => {
  showTabBar()
  await userStore.getProfile();
  dang_ky_dich_vu.value = userStore.dang_ky_dich_vu;
})



const router = useRouter();

const dich_vu = ref(dichvuStore.dich_vu);

const dang_ky_dich_vu = ref(userStore.dang_ky_dich_vu);
function showDetail(id: string) {
  router.push(`/dich-vu/${id}`);
}

</script>
