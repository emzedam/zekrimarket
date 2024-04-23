<template>
  <div class="w-full banner-wrapper py-6 lg:mt-16 rounded-lg">
    <div class="container-x mx-auto rounded-lg">
      <Swiper
        class="rounded-lg mainSlider"
        v-if="sliderList.length != 0"
        :modules="[
          SwiperAutoplay,
          SwiperNavigation,
          SwiperPagination,
          SwiperEffectCreative,
        ]"
        :slides-per-view="1"
        :navigation="true"
        :space-between="30"
        :centered-slides="true"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: false,
        }"
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }"
        @autoplay-time-left="onAutoplayTimeLeft"
      >
        <SwiperSlide class="rounded-lg" v-for="(slide, index) in sliderList" :key="index">
          <img
            :alt="slide.title"
            :title="slide.title"
            :src="`${runtimeConfig.public.appBaseUrl}/storage/files_container/header_slider/${slide.image}`"
            class="w-full rounded-lg h-[130px] lg:h-full"
          />
        </SwiperSlide>

        <template #container-end>
          <div class="autoplay-progress">
            <svg viewBox="0 0 48 48" ref="progressCircle">
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref="progressContent"></span>
          </div>
        </template>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { useMarketStore } from "@/store/marketStore";

const progressCircle = ref(null);
const progressContent = ref(null);
const marketStore = useMarketStore();
const runtimeConfig = useRuntimeConfig();
const sliderList = ref([]);

onMounted(async () => {
  await get_slider_list();
});

const get_slider_list = async () => {
  const sliderResult = await marketStore.get_slider_list();
  if (sliderResult.statusCode == 200 && sliderResult.result.length != 0) {
    sliderList.value = sliderResult.result;
  }
};

const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.value.style.setProperty("--progress", 1 - progress);
  progressContent.value.textContent = `${Math.ceil(time / 1000)}`;
};
</script>

<style>
.mainSlider .swiper-pagination-bullet-active {
  background: #fff !important;
}

.mainSlider .swiper-button-prev,
.mainSlider .swiper-button-next {
  background: transparent !important;
  color: #fff !important;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 13px;
  color: #fff;
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 2px;
  stroke: white;
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

.mainSlider .swiper-button-prev:after,
.mainSlider .swiper-button-next:after {
  font-size: 22px !important;
}

@media (max-width: 600px) {
  .autoplay-progress {
    width: 20px;
    height: 20px;
    font-size: 9px;
  }
}
</style>
