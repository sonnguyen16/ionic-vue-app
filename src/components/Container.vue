<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div class="dark:bg-zinc-950 h-full overflow-y-scroll">
          <div class="p-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center ">
                <Icon v-if="hasBack" class="text-2xl dark:text-white me-5"  icon="radix-icons:arrow-left" @click="router.back()"/>
                <Label class="text-lg font-bold dark:text-zinc-200">{{ title }}</Label>
              </div>
              <div class="flex items-center">
                <UserMenu v-if="auth" />
                <DarkModeToggle />
              </div>
            </div>
            <slot/>
          </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
} from "@ionic/vue";
import UserMenu from "./UserMenu.vue";
import {Label} from "./ui/label";
import DarkModeToggle from "./DarkModeToggle.vue"
import { Icon } from '@iconify/vue'
import { defineProps } from 'vue';
import {useRouter} from "vue-router";


const router = useRouter();

defineProps({
  title: {
    type: String,
    required: true
  },
  hasBack: {
    type: Boolean,
    default: false
  },
  auth: {
    type: Boolean,
    default: true
  }
})

</script>
<style lang="scss" scoped>

</style>
