<template>
  <ion-page>
    <ion-header translucent>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/main/home"></ion-back-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <input class="search" type="text" v-model="key" placeholder="关键字……" />
          <ion-button size="small" color="primary" fill="outline" @click="search()">搜索</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen>
      <ion-list v-if="items.length">
        <ion-item v-for="item in items" :key="item.id" @click="setOpen(item, true)">
          <ion-label>{{ item.name }}</ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll
        @ionInfinite="loadData($event)"
        threshold="100px"
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content loading-spinner="bubbles" loading-text="加载更多..."></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>

    <!-- 弹框展示明细 -->
    <ion-modal :is-open="isOpen" css-class="my-custom-class" @onDidDismiss="setOpen({}, false)">
      <ShowAlone :aloneItem="alone"></ShowAlone>
    </ion-modal>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonModal,
} from "@ionic/vue";

import ShowAlone from "./ShowAlone.vue";

import db from "../db/createDB.js";

export default {
  name: "Search",
  data() {
    return {
      key: "狂风",
      items: [],
      isDisabled: false,
      isOpen: false,
      resultSet: {},
      alone: {},
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonModal,
    ShowAlone,
  },
  methods: {
    search() {
      if (this.key !== "") {
        db.dbIns.transaction((tx) => {
          let query =
            "select * from ci_song where rhythmic like '%" +
            this.key +
            "%' or author like '%" +
            this.key +
            "%' or paragraphs like '%" +
            this.key +
            "%'";
          tx.executeSql(query, [], (tx, rs) => {
            this.items = [];
            this.resultSet = rs;
            this.isDisabled = false;
            this.pushData();
          });
        });
      }
    },
    pushData() {
      const sumNum = this.resultSet.rows.length;
      let max = this.items.length + 15;
      let min = max - 15;
      if (max > sumNum) {
        max = sumNum;
      }

      for (let i = min; i < max; i++) {
        let o = {
          id: this.resultSet.rows.item(i).id,
          name: this.resultSet.rows.item(i).rhythmic,
          author: this.resultSet.rows.item(i).author,
          content: eval(this.resultSet.rows.item(i).paragraphs),
        };
        this.items.push(o);
      }
    },
    loadData(ev) {
      setTimeout(() => {
        this.pushData();
        ev.target.complete();
        if (this.items.length == this.resultSet.rows.length) {
          ev.target.disabled = true;
          this.isDisabled = true;
        } else {
          ev.target.disabled = false;
          this.isDisabled = false;
        }
      }, 500);
    },
    setOpen(item, state) {
      this.alone = item;
      this.isOpen = state;
    },
  },
};
</script>

<style scoped>
.search {
  border: 1px solid #6dcff6;
  padding: 4px 10px;
  width: 200px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  color: #ffc700; /* 光标的颜色*/
  text-shadow: 0px 0px 0px black; /* 文本颜色 */
  -webkit-text-fill-color: transparent;
}
</style>