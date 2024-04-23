<template>
  <div class="max-w-[517px] w-full relative">
    <div class="w-full h-full flex items-center justify-start">
      <div class="flex-1 h-full">
        <div class="overflow-hidden rounded-lg">
          <div class="relative">
            <input
              class="block w-full appearance-none py-2.5 pr-4 pl-12 text-base text-slate-900 placeholder:text-slate-600 focus:outline-none sm:text-sm sm:leading-6 border border-gray-100 bg-[#f3f3f3] rounded-lg"
              placeholder="نام محصول مورد نظر خود را وارد کنید"
              type="search"
              v-model="searchText"
            />

            <i
              class="cursor-pointer absolute left-4 top-2.5 text-2xl h-6 w-6 text-slate-400 fa-regular fa-search"
            ></i>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showLiveSearchBoxState == true"
      class="absolute top-12 right-0 bg-white rounded-lg shadow-md w-full h-[300px] overflow-y-scroll"
    >
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
        <li class="text-center pt-10 text-orange-500">نتیجه ای یافت نشد</li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";

const marketStore = useMarketStore();
const { products_list } = storeToRefs(marketStore);
const searchText = ref(null);
const showLiveSearchBoxState = ref(false);
const searchResult = ref([]);

const reloadComponent = () => {
  showLiveSearchBoxState.value = false;
  searchText.value = "";
  searchResult.value = [];
};

watch(searchText, (newVal, oldVal) => {
  if (newVal != "" && newVal != null) {
    showLiveSearchBoxState.value = true;
    if (products_list.value.length != 0) {
      const result = products_list.value.filter((val, index) => {
        return val.fa_title.indexOf(searchText.value) > -1;
      });

      if (result && result.length != 0) {
        searchResult.value = result;
      } else {
        searchResult.value = [];
      }
    }
  } else {
    searchResult.value = [];
    showLiveSearchBoxState.value = false;
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
</script>
