<template>
  <div>
    <img class="animation" src="../assets/img/startUp.png" />
    <div class="appName">诗词大全</div>
  </div>
</template>
<script>
export default {
  name: "startUp",
  data() {
    return {};
  },
  created() {
    setTimeout(() => {
      this.$router.push({ path: "/main/home" });
    }, 3000);
  },
};
</script>
<style scoped>
.appName {
  margin: 0 auto;
  text-align: center;
  font-size: 34px;
  width: 280px;
  height: 42px;

  margin-top: 450px;

  /* background-color: aquamarine; */
  color: rgb(231, 238, 235);
  animation: text-pop-up-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@keyframes text-pop-up-top {
  0% {
    transform: translateY(0);
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    transform: translateY(-50px);
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

img {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  /* background-color: chartreuse; */
  width: 120px;
  height: 120px;
}

.animation {
  animation: bounce-out-top 2.8s both;
}

@keyframes bounce-out-top {
  0% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }

  5% {
    transform: translateY(-30px);
    animation-timing-function: ease-in;
  }

  15% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }

  25% {
    transform: translateY(-38px);
    animation-timing-function: ease-in;
  }

  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }

  52% {
    transform: translateY(-75px);
    animation-timing-function: ease-in;
  }

  70% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }

  85% {
    opacity: 1;
  }

  100% {
    transform: translateY(-800px);
    opacity: 0;
  }
}
</style>