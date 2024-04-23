<template>
    <section class="section-style-one pb-10 mt-3">
    <div class="section-wrapper w-full">
      <div class="container-x mx-auto">
        <div 
        :class="{
          'lg:grid-cols-2': banners.showState == 'true',
          'lg:grid-cols-1': banners.showState == 'false'
        }"
        class="grid grid-cols-1 gap-4">
          <div class="b1" v-for="(banner , index) in banners.bannersInfo" :key="index">
            <img
              :src="`https://api.zekrimarket.com/storage/files_container/banners/${banner.file}`"
              :title="banner.title"
              :alet="banner.title"
              class="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps(['banners'])
</script>

<style></style>