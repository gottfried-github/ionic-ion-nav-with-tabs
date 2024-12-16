<template>
  <ion-page>
    <ion-nav :root="eventsRoot"></ion-nav>
  </ion-page>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { IonPage, IonNav } from '@ionic/vue'
import EventsRoot from '@/components/EventsRoot.vue'

const eventsRoot = markRaw(EventsRoot)
</script>
