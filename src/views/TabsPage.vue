<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
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

        <ion-tab-button tab="dich-vu" href="/dich-vu">
          <ion-icon aria-hidden="true" :icon="documentText" />
          <ion-label>Dịch vụ</ion-label>
        </ion-tab-button>


        <ion-tab-button tab="tai-khoan" href="/tai-khoan">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Tài khoản</ion-label>
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
import {chatbubble, documentText, home, notifications, person} from "ionicons/icons";
</script>

<style scoped>
ion-tab-bar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>

