<template>
  <div v-for="(vitrin , index) in vitrinItems" :key="index">
    <SliderSlideProducts v-if="vitrin.type == 'slider'" :products="vitrin.vitrin" />
    <Banners v-if="vitrin.type == 'banner'" :banners="vitrin" />
    <gridStyleProducts v-if="vitrin.type == 'grid'" :products="vitrin.vitrin" />
  </div>



</template>

<script setup>
import SliderSlideProducts from './Content/SliderSlideProducts.vue';
import gridStyleProducts from './Content/GridStyleProducts.vue';
import Banners from './Content/Banners.vue';
const props = defineProps(['vitrinItems'])


</script>


