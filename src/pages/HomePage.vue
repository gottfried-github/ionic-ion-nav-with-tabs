<template>
  <ion-page>
    <ion-nav :root="homeRoot"></ion-nav>
  </ion-page>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { IonPage, IonNav } from '@ionic/vue'
import HomeRoot from '@/components/HomeRoot.vue'

const homeRoot = markRaw(HomeRoot)
</script>
