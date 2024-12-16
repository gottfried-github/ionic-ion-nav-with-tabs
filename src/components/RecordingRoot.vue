<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button></ion-back-button>
      </ion-buttons>
      <ion-title>Recording</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content :fullscreen="true"> Recording </ion-content>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/vue'
</script>
