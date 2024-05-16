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
      </TabsContent>
      <TabsContent value="password">
        <Table>
          <TableHeader>
            <TableRow class="dark:border-zinc-600">
              <TableHead>
                <label class="text-[10px]">Tháng</label>
              </TableHead>
              <TableHead >
                <label class="text-[10px]">Điện</label>
              </TableHead>
              <TableHead >
                <label class="text-[10px]">Nước</label>
              </TableHead>
              <TableHead >
                 <label class="text-[10px]">Thành tiền</label>
              </TableHead>
              <TableHead class="w-[100px] text-right">
                <label class="text-[10px]">Trạng thái</label>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow class="dark:border-zinc-700 " v-for="item in dien_nuoc" :key="item.time">
              <TableCell>
                <label class="dark:text-zinc-200 text-[10px]">{{ item.time }}</label>
              </TableCell>
              <TableCell>
                <label class="dark:text-zinc-200 text-[10px]">{{ item.dien }}</label>
              </TableCell>
              <TableCell>
                <label class="dark:text-zinc-200 text-[10px]">{{ item.nuoc }}</label>
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
      </TabsContent>
    </Tabs>
  </Container>
</template>

<script setup lang="ts">
import Container from "@/components/Container.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from "@/components/ui/badge";

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

const dien_nuoc:any[] = [
  {
    time: '5/2022',
    dien: '100kWh',
    nuoc: '10m3',
    total: '1.000.000đ'
  },
  {
    time: '4/2022',
    dien: '100kWh',
    nuoc: '10m3',
    total: '1.000.000đ'
  },
  {
    time: '3/2022',
    dien: '100kWh',
    nuoc: '10m3',
    total: '1.000.000đ'
  },
];
</script>
