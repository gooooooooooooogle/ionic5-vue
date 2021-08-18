<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button color="primary" fill="outline" @Click="dismissModal()">关闭</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="layout">
        <div class="name">{{item.name}}</div>
        <div class="author">{{item.author}}</div>
        <div class="content">
          <ion-list>
            <ion-item v-for="(one, index) in item.content" :key="index">
              <ion-label>{{one.trim()}}</ion-label>
            </ion-item>
          </ion-list>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonList,
  IonContent,
  IonItem,
  IonLabel,
  modalController,
} from "@ionic/vue";

export default {
  name: "ShowAlone",
  props: {
    aloneItem: { type: Object },
  },
  data() {
    return {
      item: this.aloneItem,
    };
  },
  components: {
    IonPage,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonList,
    IonContent,
    IonItem,
    IonLabel,
  },
  created() {},
  methods: {
    dismissModal() {
      modalController.dismiss();
    },
  },
};
</script>

<style scoped>
ion-slides {
  height: 100%;
}

.layout {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: cadetblue; */
}

.name {
  /* background-color: darkcyan; */
  font-size: 1.6em;
  text-align: center;
}
.author {
  /* background-color: cadetblue; */
  font-size: 1em;
  text-align: center;
  /* padding-top: 1em; */
}
.content {
  /* background-color: darkgray; */
  text-align: center;
  overflow: scroll;
  height: 400px;
}
</style>