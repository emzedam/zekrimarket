<template>
  <div class="w-full h-full">
    <div class="spin-container" :class="loading == true ? 'show' : 'hide'">
      <!-- <div class="spin-loader" aria-hidden="true"></div> -->
      <img src="@/assets/logo.png" width="200" />
    </div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";
const { loading } = storeToRefs(useMarketStore());
</script>

<style scoped>
.spin-container {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.spin-container.show {
  visibility: visible;
  opacity: 1;
}

.spin-container.hide {
  transition: 0.3s all ease;
  visibility: hidden;
  opacity: 0;
}

.spin-loader {
  border-radius: 80%;
  display: block;
  height: 50px;
  width: 50px;
  position: relative;
  animation: spin 0.675s linear 0s infinite normal;
  background: #c64c01;
}

.spin-loader:before,
.spin-loader:after {
  content: "";
  display: block;
  position: absolute;
}

.spin-loader:before {
  border-radius: 0 90px 90px 0;
  height: 50px;
  width: 50%;
  top: 0;
  right: 0;
  z-index: 1;
  background: #993b00;
  background-image: linear-gradient(#fda766, #c64c01);
}

.spin-loader:after {
  border-radius: 80%;
  height: 40px;
  width: 40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background: #ffffff;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
