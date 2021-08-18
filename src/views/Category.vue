<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>选择分类</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-slides pager="true" :options="slideOpts">
        <ion-slide>
          <ion-card>
            <ion-card-header>
              <!-- <ion-card-subtitle>Card Subtitle111</ion-card-subtitle> -->
              <ion-card-title>唐诗</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <img src="../assets/img/tangshi.jpg" alt="">
            </ion-card-content>
          </ion-card>
        </ion-slide>
        <ion-slide>
          <ion-card>
            <ion-card-header>
              <!-- <ion-card-subtitle>Card Subtitle222</ion-card-subtitle> -->
              <ion-card-title>宋词</ion-card-title>
            </ion-card-header>

            <ion-card-content>
             <img src="../assets/img/songci.jpg" alt="">
            </ion-card-content>
          </ion-card>
        </ion-slide>
        <ion-slide>
          <ion-card>
            <ion-card-header>
              <!-- <ion-card-subtitle>Card Subtitle333</ion-card-subtitle> -->
              <ion-card-title>四书五经</ion-card-title>
            </ion-card-header>

            <ion-card-content>
              <img src="../assets/img/sishuwujing.jpg" alt="">
            </ion-card-content>
          </ion-card>
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonSlides,
  IonSlide,
  IonCard,
  IonCardHeader,
  IonCardContent,
  // IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";

import db from "../db/createDB.js";

export default {
  name: "Category",
  data() {
    return {
      dataList: ["123"],
      slideOpts: {
        initialslide: 0,
        speed: 400,
        // 修改 swiper 自己 或 子元素时，自动初始化 swiper
        observer: true,
        // 修改 swiper 父元素时，自动初始化 swiper
        observeParents: true,
      },
    };
  },
  components: {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonSlides,
    IonSlide,
    IonCard,
    IonCardHeader,
    IonCardContent,
    // IonCardSubtitle,
    IonCardTitle,
  },
  methods: {
    showMsg() {
      db.dbIns.transaction((tx) => {
        tx.executeSql(
          "select * from danceMoves",
          [],
          (tx, rs) => {
            this.dataList[0] = rs.rows.item(0).name;
          },
          (tx, error) => {
            alert("error!" + error.message);
          }
        );
      });
    },
  },
};
</script>

<style scoped>

ion-slides {
  background-color: black;
  color: aliceblue;
  height: 100%;
}

ion-card {
  height: 92%;
}

ion-card-content {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: stretch;
}
</style>