<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="end">
          <ion-button size="small" color="primary" fill="outline" @click="submit()">完成</ion-button>
        </ion-buttons>
        <ion-title>创作中心</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-item>
        <ion-label position="floating">标题</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">作者</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="floating">年份</ion-label>
        <ion-datetime cancelText="取消" done-text="确定" display-format="YYYY-MM-DD"></ion-datetime>
      </ion-item>
      <ion-item>
        <ion-label position="floating">正文</ion-label>
        <ion-textarea rows="30"></ion-textarea>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonItem, IonLabel, IonInput, IonDatetime, toastController  } from "@ionic/vue";

import db from "../db/createDB.js";

export default {
  name: "Create",
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
    IonPage,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
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
    async submit() {
      const toast = await toastController.create({
        color: "dark",
        duration: 2000,
        position: 'middle',
        message: "创作成功",
        showCloseButton: true,
      });

      await toast.present();
    },
  },
};
</script>

<style scoped>
</style>