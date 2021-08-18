<template>
  <ion-page>
    <div class="ion-page" id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-buttons slot="end">
            <ion-button color="primary" href="/search">
              <ion-icon :icon="search"></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title>唐诗欣赏</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-slides
          pager="false"
          @ionSlideDidChange="slideChange()"
          :options="slideOpts"
          v-if="dataList.length"
        >
          <ion-slide v-for="item in dataList" v-bind:key="item.id">
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
          </ion-slide>
        </ion-slides>
      </ion-content>
    </div>

    <ion-menu side="start" content-id="main-content">
      <ion-header>
        <ion-toolbar translucent>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>
            <ion-icon :icon="heart" slot="start"></ion-icon>
            <ion-label>{{dataList[0].name}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="heart" slot="start"></ion-icon>
            <ion-label>{{dataList[0].author}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="heart" slot="start"></ion-icon>
            <ion-label>{{dataList[0].content}}</ion-label>
          </ion-item>
          <ion-item>
            <ion-icon :icon="heart" slot="start"></ion-icon>
            <ion-button @click="change()">转换</ion-button>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonList,
  IonContent,
  IonHeader,
  IonToolbar,
  IonItem,
  IonIcon,
  IonLabel,
  IonSlides,
  IonSlide,
} from "@ionic/vue";

import { heart, search } from "ionicons/icons";

import db from "../db/createDB.js";

export default {
  name: "Home",
  data() {
    return {
      dataList: [],
      shiList: [],
      heart,
      search,
      slideOpts: {
        initialSlide: 0,
        speed: 400,
        // direction: "vertical",
        // loop : true
      },
    };
  },
  components: {
    IonPage,
    IonButtons,
    IonMenuButton,
    IonTitle,
    IonList,
    IonContent,
    IonHeader,
    IonToolbar,
    IonItem,
    IonIcon,
    IonLabel,
    IonSlides,
    IonSlide,
  },
  created() {
    db.dbIns.transaction((tx) => {
      tx.executeSql("select * from ci_song", [], (tr, rs) => {
        // alert("前-显示数组：" + this.dataList.length);
        this.dataList = [];
        for (let i = 0; i < 10; i++) {
          let o = {
            id: rs.rows.item(i).id,
            name: rs.rows.item(i).rhythmic,
            author: rs.rows.item(i).author,
            content: eval(rs.rows.item(i).paragraphs),
          };
          this.dataList.push(o);
        }
        // alert("后-显示数组：" + this.dataList.length);
      });
    });
  },
  methods: {
    showMsg() {},
    change() {
      var x = this.dataList[0].content;
      alert("数组长度：" + x.length);
      alert(x[1]);
    },
    slideChange() {
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

/* @import "../assets/css/home.css"; */
/* 通过引用的方式，页面样式会串 */
</style>