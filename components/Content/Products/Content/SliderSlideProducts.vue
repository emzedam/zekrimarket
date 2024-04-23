<template>
  <div class="section-style-one new-products pb-4 pt-10">
    <div class="section-wrapper w-full">
      <div class="container-x mx-auto">
        <div class="section-title flex justify-between items-center mb-5">
          <div class="block-title has_url">
            <div class="title">
              <i class="fal fa-layer-plus"></i> {{ products.title }}
            </div>
            <nuxt-link
              :to="`/more/${products.title.replace(/ /g, '-')}`"
              class="bk_view_more"
              :title="products.title"
              ><i class="fal fa-angle-left"></i>مشاهده همه
            </nuxt-link>
          </div>
        </div>

        <div class="section-content">
          <div class="products-section w-full">
            <div class="">
              <Swiper
                class="productsSlider"
                :modules="[SwiperNavigation]"
                :slides-per-view="5"
                :centered-slides="false"
                :navigation="true"
                :space-between="30"
                :grab-cursor="true"
                :breakpoints="{
                  200: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  340: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  980: {
                    slidesPerView: 4,
                  },
                  1280: {
                    slidesPerView: 5,
                  },
                }"
              >
                <SwiperSlide
                  v-for="(product, index) in products.selected_products"
                  :key="index"
                >
                  <nuxt-link
                    :to="`${product.fa_slug.replace(/\//g, '-')}-${product.productZMP}`"
                    data-aos="fade-up"
                    class="item aos-init aos-animate"
                  >
                    <div
                      class="product-card-one w-full h-full bg-white relative group overflow-hidden rounded-lg shadow-sm border border-gray-200/80"
                    >
                      <div
                        class="product-card-img w-full h-[300px] !bg-contain"
                        :style="`background: url(https://api.zekrimarket.com/storage/products/images/${product.indexPic}) center center no-repeat;`"
                      >
                        <div
                          class="px-[30px] absolute left-0 top-3 w-full hidden"
                          v-if="product.features.length == 0"
                        >
                          <div class="progress-title flex justify-between">
                            <p
                              class="text-xs text-black font-400 leading-6 pb-2"
                              v-if="product.productBuyedCount >= product.productStock"
                            >
                              اتمام موجودی
                            </p>
                            <p class="text-xs text-black font-400 leading-6 pb-2" v-else>
                              مانده
                              {{ product.productStock - product.productBuyedCount }} عدد
                            </p>
                            <span class="text-sm text-black font-600 leading-6 pb-2">{{
                              product.productStock
                            }}</span>
                          </div>
                          <div
                            class="progress w-full h-[3px] rounded-[22px] bg-gray-100 relative overflow-hidden"
                          >
                            <div
                              class="h-full absolute left-0 top-0 bg-red-500"
                              :style="{
                                width:
                                  Math.floor(
                                    (product.productBuyedCount * 100) /
                                      product.productStock
                                  ) + '%',
                              }"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="product-card-details px-[20px] pb-[60px] relative pt-4 border-t"
                      >
                        <div>
                          <p
                            class="title mb-2 text-[15px] font-600 text-qblack leading-[24px] line-clamp-2 hover:text-blue-600"
                          >
                            {{ product.fa_title }}
                          </p>
                        </div>
                        <p class="price" v-if="product.features.length == 0">
                          <span
                            :class="{ 'line-through': product.discountPercent != 0 }"
                            class="main-price text-gray-500 font-600 text-[15px]"
                            >{{ rial_separate(product.mainPrice) }} ریال</span
                          ><span
                            v-if="product.discountPercent != 0"
                            class="offer-price text-red-500 font-600 text-[15px] mr-2"
                            >{{
                              rial_separate(
                                product.mainPrice -
                                  (product.mainPrice * product.discountPercent) / 100
                              )
                            }}
                            ریال</span
                          >
                        </p>
                        <p class="price" v-else>
                          <span
                            :class="{
                              'line-through': product.features[0].discountPercent != 0,
                            }"
                            class="main-price text-gray-500 font-600 text-[15px]"
                            >{{ rial_separate(product.features[0].mainPrice) }} ریال</span
                          ><span
                            v-if="product.features[0].discountPercent != 0"
                            class="offer-price text-red-500 font-600 text-[15px] mr-2"
                            >{{
                              rial_separate(
                                product.features[0].mainPrice -
                                  (product.features[0].mainPrice *
                                    product.features[0].discountPercent) /
                                    100
                              )
                            }}
                            ریال</span
                          >
                        </p>
                      </div>

                      <div
                        class="absolute w-full px-[15px] right-0 bottom-4 transition-all duration-300 ease-in-out bg-white flex justify-start gap-3"
                      >
                        <a href="javascript:void(0)" class="hidden">
                          <span
                            class="w-8 h-8 flex justify-center items-center bg-red-500 rounded text-white"
                            ><i class="fa-light fa-plus"></i
                          ></span>
                        </a>

                        <a
                          @click.stop="add_to_favorites(product._id)"
                          href="javascript:void(0)"
                        >
                          <span
                            class="w-8 h-8 flex justify-center items-center bg-primarygray rounded"
                            ><i
                              v-if="favoritesList.length != 0"
                              class="text-2xl fa-heart"
                              :class="{
                                'fa-solid text-red-500':
                                  favoritesList.find(
                                    (favorite, index) =>
                                      favorite.product_id == product._id
                                  ) != null,
                                'fa-light':
                                  favoritesList.find(
                                    (favorite, index) =>
                                      favorite.product_id == product._id
                                  ) == null,
                              }"
                            ></i>
                            <i v-else class="fa-light text-2xl fa-heart"></i>
                          </span>
                        </a>
                        <nuxt-link :to="`${product.fa_slug.replace(/\//g, '-')}-${product.productZMP}`">
                          <span
                            class="w-8 h-8 flex justify-center items-center bg-primarygray rounded"
                            ><i class="fa-light fa-shopping-bag text-2xl"></i
                          ></span>
                        </nuxt-link>
                      </div>
                    </div>
                  </nuxt-link>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { onMounted } from "vue";

const { authuser } = storeToRefs(useAuthStore());
const marketStore = useMarketStore();
const props = defineProps(["products"]);
const $toast = useToast();
const favoritesList = ref([]);

onMounted(() => {
  if (authuser.value != null) {
    if (authuser.value.favorites.length != 0) {
      favoritesList.value = authuser.value.favorites;
    }
  }
});

const rial_separate = (Number) => {
  Number += "";
  Number = Number.replace(",", "");
  let x = Number.split(".");
  let y = x[0];
  let z = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(y)) y = y.replace(rgx, "$1" + "," + "$2");
  return y + z;
};

const add_to_favorites = async (product_id) => {
  if (product_id != null) {
    const result = await marketStore.add_product_to_user_favs(product_id);
    if (result.statusCode == 200) {
      authuser.value.favorites = result.result;
      favoritesList.value = authuser.value.favorites;
    } else {
      $toast.error(
        `${result.message} <a href="/auth/login" class="cursor-pointer underline mr-3">ورود به حساب کاربری</a>`,
        {
          position: "top-left",
        }
      );
    }
  } else {
    $toast.error("متاسفانه خطایی رخ داده!", {
      position: "top-left",
    });
  }
};
</script>

<style>
.productsSlider .swiper-pagination-bullet-active {
  background: #ff4242 !important;
}

.productsSlider .swiper-button-prev,
.productsSlider .swiper-button-next {
  color: #5f5f5f !important;
}

.productsSlider .swiper-button-prev,
.productsSlider .swiper-button-next {
  background: #f2f2f2 !important;
  padding: 17px !important;
  border-radius: 10px !important;
  height: 40px !important;
}

.productsSlider .swiper-button-prev:after,
.productsSlider .swiper-button-next:after {
  font-size: 17px !important;
}
</style>
