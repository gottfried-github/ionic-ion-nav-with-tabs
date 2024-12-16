<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Meeting</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-nav-link :component="meetingRegisterRoot">
      <ion-button>Register in meeting</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue'
import MeetingRegisterRoot from './MeetingRegisterRoot.vue'

const meetingRegisterRoot = markRaw(MeetingRegisterRoot)
</script>
