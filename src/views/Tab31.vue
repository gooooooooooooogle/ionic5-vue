<template>
  <ion-page>
    <ion-page>
      <div class="content-list">
        <div class="content" @click="showMsg()">1</div>
        <div class="content" @click="showMsg()">2</div>
        <div class="content" @click="showMsg()">3</div>
        <div class="content" @click="showMsg()">4</div>
        <div class="content" @click="showMsg()">5</div>
        <div class="content" @click="showMsg()">6</div>
        <div class="content" @click="showMsg()">7</div>
        <div class="content" @click="showMsg()">8</div>
        <div class="content" @click="showMsg()">9</div>
        <div class="content" @click="showMsg()">10</div>
      </div>
    </ion-page>
  </ion-page>
</template>

<script>
import { IonPage } from "@ionic/vue";

export default {
  name: "Tab31",
  components: {
    IonPage,
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