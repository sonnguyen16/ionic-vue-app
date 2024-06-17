<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="dark:bg-[#09090b] dark:shadow-white-xl" slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Trang chủ</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="thong-bao" href="/thong-bao">
          <ion-icon aria-hidden="true" :icon="notifications" />
          <ion-label>Thông báo</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="phan-anh" href="/phan-anh">
          <ion-icon aria-hidden="true" :icon="chatbubble" />
          <ion-label>Phản ánh</ion-label>
        </ion-tab-button>

        <ion-tab-button v-if="role == 2" tab="dich-vu" href="/dich-vu">
          <ion-icon aria-hidden="true" :icon="layers" />
          <ion-label>Dịch vụ</ion-label>
        </ion-tab-button>

        <ion-tab-button v-if="role == 1" tab="cong-viec" href="/cong-viec">
          <ion-icon aria-hidden="true" :icon="layers" />
          <ion-label>Công việc</ion-label>
        </ion-tab-button>


        <ion-tab-button v-if="role == 2" tab="phi" href="/phi">
          <ion-icon aria-hidden="true" :icon="documentText" />
          <ion-label>Phí</ion-label>
        </ion-tab-button>

        <ion-tab-button v-if="role == 1" tab="so-ghi" href="/so-ghi">
          <ion-icon aria-hidden="true" :icon="documentText" />
          <ion-label>Số ghi</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import {chatbubble, documentText, home, layers, notifications} from "ionicons/icons";
import {useUserStore} from "@/stores/user";

const { role } = useUserStore();
</script>

<style scoped>
ion-tab-bar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
ion-tab-button {
  --background: none;
  --color-selected: rgb(96,165,250);
}

</style>

