<template>
  <Container title="Phí">
    <Tabs default-value="account" class="w-full mt-2">
      <TabsList class="w-full">
        <TabsTrigger class="w-1/2" value="account">
          Phí định kỳ
        </TabsTrigger>
        <TabsTrigger class="w-1/2" value="password">
          Số ghi điện nước
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account">
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
      </TabsContent>
      <TabsContent value="password">
        <Table>
          <TableHeader>
            <TableRow class="dark:border-zinc-600">
              <TableHead>
                <label class="text-[10px]">Thời gian</label>
              </TableHead>
              <TableHead >
                <label class="text-[10px]">Điện</label>
              </TableHead>
              <TableHead >
                <label class="text-[10px]">Nước</label>
              </TableHead>
              <TableHead class="w-[100px] text-right">
                <label class="text-[10px]">Trạng thái</label>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow class="dark:border-zinc-700 " v-for="item in so_ghi" :key="item.id">
              <TableCell>
                <label class="dark:text-zinc-200 text-[10px]">{{ new Date(item.created_at).toLocaleDateString() }}</label>
              </TableCell>
              <TableCell>
                <label class="dark:text-zinc-200 text-[10px]">{{ item.chi_so_dien }}</label>
              </TableCell>
              <TableCell>
                <label class="dark:text-zinc-200 text-[10px]">{{ item.chi_so_nuoc }}</label>
              </TableCell>
              <TableCell class="text-right">
                <Badge class="bg-red-500 w-[100px] flex justify-center text-[10px] p-[1px]">Chưa thanh toán</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from "@/components/ui/badge";
import {formatCurrency} from "../../../../public/script";
import {ref} from "vue";
import {useUserStore} from "@/stores/user";

const userStore = useUserStore();

const phi = ref(userStore.phi);

const so_ghi = ref(userStore.so_ghi);
</script>
