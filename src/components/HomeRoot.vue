<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Home</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true">
    <ion-nav-link :component="recordingRoot">
      <ion-button>Recording</ion-button>
    </ion-nav-link>
    <ion-nav-link :component="meetingRoot">
      <ion-button>Meeting</ion-button>
    </ion-nav-link>
  </ion-content>
</template>

<script setup lang="ts">
import { markRaw } from 'vue'
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonNavLink } from '@ionic/vue'
import RecordingRoot from './RecordingRoot.vue'
import MeetingRoot from './MeetingRoot.vue'

const recordingRoot = markRaw(RecordingRoot)
const meetingRoot = markRaw(MeetingRoot)
</script>
