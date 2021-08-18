<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/main/home">
          <ion-icon :icon="homeOutline" />
          <ion-label>主页</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="create" href="/main/create">
          <ion-icon :icon="createOutline"/>
          <ion-label>创作</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="my" href="/main/my/tab31">
          <ion-icon :icon="personOutline" />
          <ion-label>我的</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
} from "@ionic/vue";
import { createOutline, homeOutline, personOutline } from "ionicons/icons";

export default {
  name: "Main",
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      createOutline,
      homeOutline,
      personOutline,
    };
  },
};
</script>
<style scoped>
</style>