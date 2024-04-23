<template>
  <section class="section-style-Categories">
    <div class="section-wrapper w-full">
      <div class="container-x mx-auto">
        <div class="swiper">
          <div class="grid lg:grid-cols-5 grid-cols-2 gap-4" v-if="categoryList != null">
            <div
              class="swiper-slide"
              v-for="(category, index) in categoryList.slice(0, 5)"
              :key="index"
            >
              <div
                class="el_featured_rqs el_has_text"
                :style="{
                  'background-image':
                    category.cat_image != null
                      ? `url(https://api.zekrimarket.com/storage/files_container/category_images/${category.cat_image})`
                      : '',
                }"
              >
                <nuxt-link
                  :to="`/category/${category.slug}-${category.category_id}`"
                  :title="category.title"
                  rel="nofollow"
                  class="cursor-pointer"
                >
                  <div class="el_featured_rqs_inner">
                    <span class="count">{{ category.products.length }}</span>
                    <h4>{{ category.title }}</h4>
                    <span class="el_anchor_text">نمایش</span>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
const marketStore = useMarketStore();

const categoryList = ref(null);

onMounted(() => {
  get_category_lists();
});

const get_category_lists = async () => {
  const result = await marketStore.categoryLists();
  if (result.result != null) {
    categoryList.value = result.result;
  }
};
</script>

<style scoped>
.swiper {
  overflow: hidden;
  position: relative;
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-family: swiper-icons;
  font-size: 20px;
}
</style>
