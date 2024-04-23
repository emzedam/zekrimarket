<template>
  <div class="section-style-one new-products mb-20 lg:pt-20 mt-10">
    <div class="section-wrapper w-full">
      <div class="container-x mx-auto">
        <div class="section-title flex justify-between items-center mb-5">
          <div class="block-title archive has_url" v-if="products != null">
            <div class="title">
              <i class="fal fa-layer-plus"></i> {{ products.cat_title }}
            </div>
          </div>
        </div>

        <div class="section-content">
          <div
            class="products-section w-full gap-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
            v-if="products && products.list.length != 0"
          >
            <div class="" v-for="(product, index) in products.list" :key="index">
              <nuxt-link
                :to="`/${product.fa_slug.replace(/\//g, '-')}-${product.productZMP}`"
                data-aos="fade-up"
                class="item aos-init aos-animate"
              >
                <div
                  class="product-card-one w-full h-full bg-white relative group overflow-hidden rounded-lg shadow-sm border border-gray-200/80"
                >
                  <div
                    class="product-card-img w-full h-[300px] !bg-contain"
                    :style="`background: url(https://api.zekrimarket.com/storage/products/images/${product.indexPic}) center center no-repeat;`"
                  ></div>
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
                                (favorite, index) => favorite.product_id == product._id
                              ) != null,
                            'fa-light':
                              favoritesList.find(
                                (favorite, index) => favorite.product_id == product._id
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
            </div>
          </div>
          <div
            v-if="products == null && loading == false"
            class="text-center pb-10 text-orange-500 font-bold"
          >
            <p>برای این دسته بندی محصولی ضمیمه نشده</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useMarketStore } from "@/store/marketStore";
import { onMounted } from "vue";
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const { authuser } = storeToRefs(useAuthStore());
const props = defineProps(["products"]);
const $toast = useToast();
const favoritesList = ref([]);

const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const route = useRoute();
const router = useRouter();
const products = ref(null);

onMounted(async () => {
  loading.value = true;
  if (authuser.value != null) {
    if (authuser.value.favorites.length != 0) {
      favoritesList.value = authuser.value.favorites;
    }
  }

  const cat_id = route.params.slug.split("-")[route.params.slug.split("-").length - 1];
  if (cat_id && Number.isInteger(parseInt(cat_id))) {
    const result = await marketStore.get_category_products({ id: cat_id });
    if (result && result.message == "success") {
      products.value = result.result;
      loading.value = false;
    }
  } else {
    router.push("/");
  }
});

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
</script>
