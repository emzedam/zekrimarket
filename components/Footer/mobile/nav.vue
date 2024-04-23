<template>
  <div class="block lg:hidden">
    <div
      class="lg:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4 md:px-8"
    >
      <button
        v-on:click="mobileSidebarState = !mobileSidebarState"
        class="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none"
      >
        <i class="fa-light fa-bars text-2xl"></i>
      </button>
      <button
        @click="mobileSearchState = true"
        class="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
        aria-label="search-button"
      >
        <i class="fa-light fa-search text-2xl"></i>
      </button>

      <nuxt-link to="/" class="flex-shrink-0">
        <i class="fa-light fa-home text-2xl"></i>
      </nuxt-link>
      <nuxt-link
        to="/checkout/cart"
        class="relative flex items-center justify-center flex-shrink-0 h-auto focus:outline-none"
        ><i class="fa-light fa-bag-shopping text-2xl"></i
        ><span
          class="cart-counter-badge flex items-center justify-center bg-red-500 w-4 h-4 text-white absolute -top-2.5 xl:-top-3 rounded-full ltr:-right-2.5 ltr:xl:-right-3 rtl:-left-2.5 rtl:xl:-left-3 font-bold"
          >{{ basketInfo.count }}</span
        ></nuxt-link
      >

      <a href="javascript:void(0)" class="flex-shrink-0"
        ><i class="fa-light fa-store text-2xl"></i
      ></a>
    </div>
  </div>

  <div
    :class="mobileSearchState == true ? 'translate-x-0' : 'translate-x-[2000px]'"
    class="block lg:hidden fixed top-0 right-0 z-40 w-full h-screen overflow-y-auto transition-transform bg-white"
  >
    <div class="w-full grid grid-cols-12 h-[70px] bg-white border-b-2 border-gray">
      <div class="col-span-10 h-full">
        <input
          type="text"
          class="w-full h-full bg-white !outline-white !border-none text-xl"
          placeholder="جستجو کنید ..."
          v-model="searchText"
        />
      </div>
      <div
        @click="closeSearchModal()"
        class="col-span-2 flex items-center justify-center"
      >
        <i class="fal fa-angle-left text-2xl"></i>
      </div>
    </div>

    <ul
      class="w-full divide-y divide-gray-200 dark:divide-gray-700 p-4"
      v-if="searchResult.length != 0"
    >
      <li
        class="pb-3 sm:pb-4 pt-2 hover:bg-gray-100/50"
        v-for="(product, index) in searchResult"
        :key="index"
      >
        <nuxt-link
          @click="reloadComponent()"
          :to="`/${product.fa_slug.replace(/\//g, '-')}-${product.productZMP}`"
          class="flex items-center space-x-4 rtl:space-x-reverse"
        >
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              :src="`https://api.zekrimarket.com/storage/products/images/${product.indexPic}`"
              alt="Neil image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {{ product.fa_title }}
            </p>
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
                :class="{ 'line-through': product.features[0].discountPercent != 0 }"
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
        </nuxt-link>
      </li>
    </ul>
    <ul v-else>
      <li class="text-center pt-10 mt-16 text-xl text-gray-500">نتیجه ای یافت نشد</li>
    </ul>
  </div>

  <div
    :class="mobileSidebarState == true ? 'translate-x-0' : 'translate-x-80'"
    class="block lg:hidden fixed top-0 right-0 z-40 w-64 h-screen overflow-y-auto transition-transform bg-white"
  >
    <div
      class="relative overflow-hidden w-full flex flex-1 items-center justify-between p-4"
    >
      <a href="/" class=""><img class="w-40" src="/logo.png" alt="logo" /></a>
      <a
        href=""
        type="button"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl block"
      >
        <i class="fa-duotone fa-times"></i>
      </a>
    </div>

    <div class="py-4 overflow-y-auto p-4 border-b border-dashed border-t">
      <ul class="space-y-2 font-medium">
        <li @click="mobileSidebarState = false">
          <nuxt-link
            to="/"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <i class="fa-duotone fa-home"></i>
            <span class="mr-3">خانه</span>
          </nuxt-link>
        </li>

        <li
          v-for="(page, index) in pagesList"
          :key="index"
          @click="mobileSidebarState = false"
        >
          <nuxt-link
            :to="`/page/${page.slug_page}`"
            v-if="page.showing_header == true"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <i :class="`fa-duotone fa-${page.icon_name}`"></i>
            <span class="flex-1 mr-3 whitespace-nowrap">{{ page.page_title }}</span>
          </nuxt-link>
        </li>

        <li>
          <a
            href="javascript:void(0)"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
          >
            <i class="fa-duotone fa-store"></i>
            <span class="flex-1 mr-3 whitespace-nowrap">فروش در ذکری مارکت</span>
          </a>
        </li>
      </ul>
    </div>
  </div>

  <div
    :class="
      mobileSidebarState == true
        ? 'translate-x-0'
        : 'translate-x-full duration-300 transition-opacity opacity-0'
    "
    v-show="mobileSidebarState"
    v-on:click="mobileSidebarState = !mobileSidebarState"
    class="bg-gray-900 bg-opacity-50 transition-opacity fixed inset-0 z-30"
  ></div>
</template>

<script setup>
import { useMarketStore } from "@/store/marketStore";
import { storeToRefs } from "pinia";
const marketStore = useMarketStore();
const { basketInfo } = storeToRefs(marketStore);
const mobileSidebarState = ref(false);
const mobileSearchState = ref(false);

const { products_list } = storeToRefs(marketStore);
const searchText = ref(null);
const searchResult = ref([]);
const pagesList = ref([]);

onMounted(async () => {
  await get_pages_list();
});

const closeSearchModal = () => {
  mobileSearchState.value = false;
  searchText.value = "";
  searchResult.value = [];
};

const reloadComponent = () => {
  mobileSearchState.value = false;
  searchText.value = "";
  searchResult.value = [];
};

watch(searchText, (newVal, oldVal) => {
  if (newVal != "" && newVal != null) {
    if (products_list.value.length != 0) {
      const result = products_list.value.filter((val, index) => {
        return val.fa_title.indexOf(searchText.value) > -1;
      });

      if (result && result.length != 0) {
        searchResult.value = result;
        console.log(searchResult.value);
      } else {
        searchResult.value = [];
      }
    }
  } else {
    searchResult.value = [];
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

const get_pages_list = async () => {
  const result = await marketStore.get_pages_list();
  if (result.status == 200) {
    pagesList.value = result.result;
  }
};
</script>
