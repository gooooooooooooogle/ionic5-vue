<template>
  <ion-page>
    <div class="introduction">
      <div class="avatar">
        <img src="../assets/img/startUp.png" alt />
      </div>

      <div class="rightArea">
        <div class="content">
          <div class="sc">
            <div class="type">收藏</div>
            <div class="count">
              <ion-badge color="tertiary">163</ion-badge>
            </div>
          </div>
          <div class="cz">
            <div class="type">创作</div>
            <div class="count">
              <ion-badge color="success">0</ion-badge>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tabs">
      <ion-tabs>
        <ion-tab-bar slot="top">
          <ion-tab-button tab="tab31" href="/main/my/tab31">
            <ion-icon :icon="starOutline" />
            <ion-label>收藏</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="tab32" href="/main/my/tab32">
            <ion-icon :icon="createOutline" />
            <ion-label>创作</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </div>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonIcon,
  IonLabel,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonBadge
} from "@ionic/vue";

import { createOutline, starOutline } from "ionicons/icons";

export default {
  name: "My",
  components: {
    IonPage,
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonBadge
  },
  data() {
    return {
      createOutline,
      starOutline,
    };
  },
};
</script>

<style scoped>
ion-grid {
  width: 100%;
}
.introduction {
  height: 100px;
  background-color: palevioletred;
  display: flex;
}
.tabs {
  position: relative;
  background-color: rgb(122, 119, 119);
  color: aliceblue;
  height: calc(100% - 100px);
}

.avatar {
  position: relative;
  padding: 10px;
  width: 100px;
  height: 100px;
}

.avatar img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-left: 10px;
  background-color: white;
}

.rightArea {
  width: 100%;
  position: relative;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.sc {
  display: inline-block;
  border-right: 1px solid rgba(128, 128, 128, 0.6);
  padding-right: 1em;
}

.cz {
  display: inline-block;
  padding-left: 1em;
}

.type {
  text-align: center;
  padding-bottom: 8px;
  font-size: 1em;
}

.count {
  text-align: center;
  font-size: 1em;
  color: rgba(135, 206, 235, 0.6);
}
</style>