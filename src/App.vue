<template>
  <ion-app>
    <ion-router-outlet />
    <ion-footer class="main-footer">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button router-link="/home">Home</ion-button>
          <ion-button router-link="/events">Events</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-footer>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonFooter, IonToolbar, IonButtons, IonButton } from '@ionic/vue'
</script>

<style scoped>
.main-footer {
  position: fixed;
  bottom: 0px;
}
</style>
