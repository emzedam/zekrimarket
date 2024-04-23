<template>
  <aside class="lg:col-span-4 col-span-12 border p-4 rounded-lg hidden lg:block">
    <div class="deal flex justify-between p-3 rounded-lg hidden">
      <div class="title text-red-500 font-semibold">پیشنهاد شگفت انگیز</div>
      <div class="count text-red-500 font-semibold">۱۰ : ۰۰ : ۰۹</div>
    </div>
    <div class="gallery">
      <ul>
        <li>
          <img
            :src="`https://api.zekrimarket.com/storage/products/images/${galleries[0].image}`"
          />
        </li>
      </ul>
    </div>
    <div class="gallery-thumbnail relative overflow-hidden">
      <ul class="flex gap-4">
        <li
          v-for="(gallery, index) in galleries.slice(0, 4)"
          :key="index"
          @click="openGalleryModal()"
          class="w-24 rounded-lg border p-2 cursor-pointer"
        >
          <img
            class="object-cover"
            :src="`https://api.zekrimarket.com/storage/products/images/${gallery.image}`"
          />
        </li>

        <li
          v-if="galleries.length >= 4"
          @click="openGalleryModal()"
          class="w-24 rounded-lg border p-2 flex items-center justify-center overflow-hidde relative bg-gray-600/500 text-center cursor-pointer"
        >
          <div class="relative w-full">
            <img
              class="object-cover w-full h-full blur absolute -z-0"
              src="https://dkstatics-public.digikala.com/digikala-products/18b874f3cc9cea64cac937f5297a74f39c2caae6_1602516150.jpg"
            />
            <i class="fa-duotone fa-ellipsis text-4xl"></i>
          </div>
        </li>
      </ul>

      <div class="note">
        <ul class="flex gap-4 py-4 px-2">
          <li
            class="report inline-flex gap-2 items-center text-sm text-gray-600 cursor-pointer"
          >
            <i class="fa-light fa-flag"></i>
            <NuxtLink to="/MODAL"> گزارش نادرستی مشخصات </NuxtLink>
          </li>

          <li class="text-sm text-gray-700 font-en">{{ product_id }}</li>
        </ul>
      </div>
    </div>

    <div
      class="gallery_modal_slider"
      @click.self="gallery_modal_state = false"
      v-show="gallery_modal_state == true"
    >
      <div class="gallery_modal_container">
        <div
          class="w-full z-[1000] border-complete-b-200 bg-white absolute top-0 right-0 px-5"
        >
          <div class="flex items-center">
            <div class="grow text-h5">
              <ul class="flex relative relative">
                <li
                  class="relative px-4 py-3 flex flex-row items-center grow justify-center lg:grow-0 text-primary-500 text-subtitle-strong cursor-pointer text-subtitle-strong styles_GalleryModalMobile__tab__B9d7Z"
                >
                  تصاویر رسمی
                  <div class="absolute bottom-0 styles_Tab__border__6fH9m"></div>
                </li>
              </ul>
            </div>
            <div class="flex cursor-pointer">
              <i class="fa fa-close text-lg" @click="gallery_modal_state = false"></i>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-4 mt-10 h-[400px] overflow-y-scroll">
          <div class="col-span-2 p-3 rounded-lg">
            <div class="w-full h-full py-5 rounded-lg">
              <Swiper
                class="h-full thumbSlider rounded-lg"
                :style="{
                  '--swiper-navigation-color': 'red',
                  '--swiper-pagination-color': 'red',
                }"
                :loop="true"
                :space-between="10"
                :modules="[
                  SwiperAutoplay,
                  SwiperNavigation,
                  SwiperFreeMode,
                  SwiperThumbs,
                ]"
                :slides-per-view="1"
                :navigation="true"
                :thumbs="{ swiper: thumbsSwiper }"
                :autoplay="{
                  delay: 8000,
                  disableOnInteraction: true,
                }"
              >
                <swiper-slide v-for="(gallery, index) in galleries" :key="index">
                  <img
                    class="rounded-lg"
                    :src="`https://api.zekrimarket.com/storage/products/images/${gallery.image}`"
                  />
                </swiper-slide>
              </Swiper>
            </div>
          </div>
          <div class="col-span-2 p-3 mt-5">
            <h3 class="pt-3 font-bold">{{ title }}</h3>
            <div class="w-full h-full mt-1">
              <Swiper
                @swiper="setThumbsSwiper"
                class="h-full thumb-swiper"
                :modules="[SwiperFreeMode, SwiperThumbs]"
                :loop="true"
                :space-between="10"
                :slides-per-view="4"
                :free-mode="true"
                :watch-slides-progress="true"
              >
                <swiper-slide v-for="(gallery, index) in galleries" :key="index">
                  <img
                    :src="`https://api.zekrimarket.com/storage/products/images/${gallery.image}`"
                  />
                </swiper-slide>
              </Swiper>
            </div>
          </div>
        </div>
        <div
          class="w-full z-[1000] border-complete-t-200 bg-white absolute bottom-0 right-0 px-5 py-2"
        >
          <div class="flex items-center">
            <div class="grow text-h5">
              <ul class="flex relative relative">
                <li
                  class="relative px-4 py-2 bg-orange-500 rounded-lg text-white flex flex-row items-center grow justify-center lg:grow-0 text-primary-500 text-subtitle-strong cursor-pointer text-subtitle-strong styles_GalleryModalMobile__tab__B9d7Z"
                >
                  افزودن به سبد
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
  <aside class="lg:col-span-4 col-span-12 border p-4 rounded-lg block lg:hidden">
    <div class="gallery h-full">
      <ul class="h-full">
        <Swiper
          class="h-full thumbSlider rounded-lg"
          :style="{
            '--swiper-navigation-color': 'red',
            '--swiper-pagination-color': 'red',
          }"
          :loop="true"
          :space-between="10"
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1"
          :navigation="false"
          :pagination="true"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
        >
          <swiper-slide v-for="(gallery, index) in galleries" :key="index">
            <img
              class="rounded-lg"
              :src="`https://api.zekrimarket.com/storage/products/images/${gallery.image}`"
            />
          </swiper-slide>
        </Swiper>
      </ul>
    </div>
  </aside>
</template>

<script setup>
const props = defineProps(["galleries", "title", "product_id"]);
const gallery_modal_state = ref(false);
const thumbsSwiper = ref(null);

const openGalleryModal = () => {
  gallery_modal_state.value = true;
};

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};
</script>

<style>
.gallery_modal_slider {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(43, 43, 43, 0.28);
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery_modal_container {
  width: 65%;
  position: relative;
  height: calc(100% - 200px);
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}

.swiper-slide-thumb-active > img {
  border: 2px solid #ff7100 !important;
  padding: 2px;
  border-radius: 5px;
}

.thumb-swiper {
  overflow: visible !important;
}

.border-complete-b-200 {
  border-bottom: 1px solid #e0e0e2;
}
.border-complete-t-200 {
  border-top: 2px solid #e0e0e2;
}

.thumb-swiper .swiper-wrapper {
  flex-wrap: wrap !important;
  height: auto !important;
}

.thumb-swiper .swiper-wrapper .swiper-slide img {
  border-radius: 10px !important;
  cursor: pointer;
  border: 2px solid #e0e0e2;
}

.thumb-swiper .swiper-wrapper .swiper-slide {
  width: 80px !important;
  margin-top: 10px;
}

.styles_Tab__border__6fH9m {
  border: 2px solid #ff6600;
  width: 100px;
}

.thumbSlider .swiper-button-prev,
.thumbSlider .swiper-button-next {
  background: #f97316 !important;
  padding: 17px !important;
  border-radius: 10px !important;
  color: #fff !important;
  height: 60px !important;
}
.thumbSlider .swiper-button-prev:after,
.thumbSlider .swiper-button-next:after {
  font-size: 22px !important;
}

.swiper-pagination-bullet-active {
  background: #f97316 !important;
}
</style>
