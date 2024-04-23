<template>
  <main class="w-full h-full">
    <Slider />
    <Categories />
    <Vitrin v-if="vitrinItems != null" :vitrinItems="vitrinItems" />
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import Slider from "@/components/Content/slider/slider.vue";
import Categories from "@/components/Content/Categories/categories.vue";
import Vitrin from "@/components/Content/Products/Vitrin.vue";

import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";
const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);

const vitrinItems = ref(null);

onMounted(async () => {
  loading.value = true;
  const result = await marketStore.get_vitrin_items();
  if (result.statusCode == 200) {
    loading.value = false;
    vitrinItems.value = result.result;
  }
});

// definePageMeta({
//   pageTransition: {
//     mode: "default",
//   },
// });
</script>
