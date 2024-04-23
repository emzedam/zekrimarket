<template>
  <Header v-if="loading == false" />
  <slot />
  <Footer v-if="loading == false" />
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";
import Header from "@/components/Header/header.vue";
import Footer from "@/components/Footer/footer.vue";
const { loading } = storeToRefs(useMarketStore());
</script>
