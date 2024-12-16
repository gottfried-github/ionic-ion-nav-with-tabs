<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Event</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-nav-link :component="eventRegisterRoot">
      <ion-button>Register in event</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue'
import EventRegisterRoot from './EventRegisterRoot.vue'

const eventRegisterRoot = markRaw(EventRegisterRoot)
</script>
