<template>
  <div v-if="isShowText" class="mb-8">
    <div v-html="textContent"></div>
  </div>
</template>

<script setup>
const props = defineProps(["isShowText", "textContent"]);
</script>

<style scoped></style>
