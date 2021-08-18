<template>
  <ion-page>
    <div class="content-list">
      <div class="content" @click="showDetail()">＋</div>
      <div class="content" @click="showDetail()">1</div>
      <div class="content" @click="showDetail()">2</div>
      <div class="content" @click="showDetail()">3</div>
      <div class="content" @click="showDetail()">4</div>
      <div class="content" @click="showDetail()">5</div>
      <div class="content" @click="showDetail()">6</div>
      <div class="content" @click="showDetail()">7</div>
      <div class="content" @click="showDetail()">8</div>
      <div class="content" @click="showDetail()">9</div>
      <div class="content" @click="showDetail()">10</div>
    </div>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";

export default {
  name: "tab32",
  components: {
    IonPage,
  },
  methods: {
    showDetail() {
      alert("123");
    },
  },
};
</script>

<style scoped>
.content-list {
  overflow: scroll;
}
.content {
  float: left;
  /* width: 125px; */
  width: 33.3%;
  height: 170px;
  background-color: teal;
  border-left: 0;
  border-top: 0;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}
</style>