<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Home</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-nav-link :component="eventRoot">
      <ion-button>Event</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNavLink } from '@ionic/vue'
import EventRoot from './EventRoot.vue'

const eventRoot = markRaw(EventRoot)
</script>
