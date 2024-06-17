<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
  <Toaster />
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import Toaster from '@/components/ui/toast/Toaster.vue'
</script>
