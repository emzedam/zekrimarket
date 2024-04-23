<template>
  <div class="relative container-x mx-auto h-full mt-3 mb-28 lg:my-28">
    <div class="grid lg:grid-cols-12 grid-cols-1 gap-6">
      <div
        class="bg-white border rounded-lg lg:col-span-9 col-span-12 py-4"
        v-if="basketContainer.length != 0"
      >
        <h2 class="px-6 py-2 font-bold flex justify-between items-center">
          <span>سبد خرید شما</span><i class="fa fa-ellipsis-vertical text-2xl"></i>
        </h2>
        <small class="px-6 py-2">{{ basketInfo.count }} کالا</small>
        <div class="border-b py-2"></div>

        <div
          class="grid grid-cols-12 mt-4 lg:gap-4 mx-4 border-b pb-4"
          v-for="(basket_product, index) in basketContainer"
          :key="index"
        >
          <div
            class="flex items-center justify-center lg:col-span-3 col-span-12 border rounded-lg"
          >
            <nuxt-link
              class="relative"
              :to="
                basket_product.isFeature == 'true'
                  ? `/${basket_product.product.fa_slug.replace(/\//g, '-')}-${
                      basket_product.product.productZMP
                    }`
                  : `/${basket_product.fa_slug.replace(/\//g, '-')}-${
                      basket_product.productZMP
                    }`
              "
            >
              <img
                class="w-100 inline-block max-w-[150px] rounded-lg"
                :src="
                  basket_product.isFeature == 'true'
                    ? `https://api.zekrimarket.com/storage/products/images/${basket_product.galleries[0].image}`
                    : `https://api.zekrimarket.com/storage/products/images/${basket_product.indexPic}`
                "
              />
            </nuxt-link>
          </div>
          <div class="overflow-x-hidden lg:col-span-9 p-4 col-span-12">
            <div class="">
              <h3 class="color-800 font-bold mb-2">
                {{
                  basket_product.isFeature == "true"
                    ? basket_product.product.fa_title
                    : basket_product.fa_title
                }}
              </h3>
              <p class="price" v-if="basket_product.isFeature == 'true'">
                <span
                  :class="{ 'line-through': basket_product.discountPercent != 0 }"
                  class="main-price text-gray-500 font-600 text-[15px]"
                  >{{
                    $rial_separate(basket_product.mainPrice * basket_product.count)
                  }}
                  ریال</span
                >
                <span
                  v-if="basket_product.discountPercent != 0"
                  class="offer-price text-red-500 font-600 text-[15px] mr-2"
                  >{{
                    $rial_separate(
                      (basket_product.mainPrice -
                        (parseInt(basket_product.mainPrice) *
                          parseInt(basket_product.discountPercent)) /
                          100) *
                        basket_product.count
                    )
                  }}
                  ریال</span
                >
              </p>
              <p class="price" v-else>
                <span
                  :class="{ 'line-through': basket_product.discountPercent != 0 }"
                  class="main-price text-gray-500 font-600 text-[15px]"
                  >{{
                    $rial_separate(basket_product.mainPrice * basket_product.count)
                  }}
                  ریال</span
                >
                <span
                  v-if="basket_product.discountPercent != 0"
                  class="offer-price text-red-500 font-600 text-[15px] mr-2"
                  >{{
                    $rial_separate(
                      (basket_product.mainPrice -
                        (parseInt(basket_product.mainPrice) *
                          parseInt(basket_product.discountPercent)) /
                          100) *
                        basket_product.count
                    )
                  }}
                  ریال</span
                >
              </p>
              <div class="Qt border rounded-lg flex w-28 my-3">
                <button
                  type="button"
                  @click="addToCountProductBasket(basket_product)"
                  class="flex items-center justify-center w-8 h-8 p-3 border-l text-red-600"
                >
                  <i class="fa fa-plus"></i>
                </button>
                <div class="relative">
                  <input
                    type="number"
                    readonly
                    :value="basket_product.count"
                    class="p-2 w-12 h-8 justify-center flex items-center text-center outline-none focus:outline-none border-transparent focus:border-transparent focus:ring-0 text-red-600 font-bold"
                  />
                  <!-- زمانی نمایش داده شود که محصول محدودیت حداکثر خرید مثلا 2 تا داشته باشد -->
                  <span
                    class="inset-x-2 text-xs font-medium text-red-500 absolute -bottom-2 bg-white hidden"
                    >حداکثر</span
                  >
                </div>
                <button
                  type="button"
                  class="flex items-center justify-center w-8 h-8 p-3 border-r text-red-600"
                >
                  <i
                    class="fa fa-minus"
                    v-if="parseInt(basket_product.count) > 1"
                    @click="removeFromCountProductBasket(basket_product)"
                  ></i>
                  <i
                    class="fa fa-trash-can hidden"
                    @click="removeProductFromBasket(index)"
                    v-if="parseInt(basket_product.count) <= 1"
                  ></i>
                </button>
              </div>

              <div class="flex" v-if="basket_product.isFeature == 'true'">
                <div class="flex mt-1" v-if="basket_product.color != null">
                  <i
                    class="border p-2 rounded-full w-4 h-4"
                    :style="{ 'background-color': basket_product.color.color }"
                  ></i>
                </div>
                <div class="flex mt-1" v-if="basket_product.pattern != null">
                  <i
                    class="border p-2 rounded-full w-4 h-4"
                    :style="{
                      'background-size': 'cover',
                      'background-image': `url(https://api.zekrimarket.com/storage/files_container/patterns/${basket_product.pattern.image})`,
                    }"
                  ></i>
                </div>
                <p class="text-body-2 color-600 mr-2" v-if="basket_product.color != null">
                  {{ basket_product.color.name }}
                </p>
                <p
                  class="text-body-2 color-600 mr-2"
                  v-if="basket_product.pattern != null"
                >
                  {{ basket_product.pattern.name }}
                </p>
              </div>
              <div class="flex">
                <div class="flex mt-1">
                  <i class="fa fa-shield-check text-gray-600"></i>
                </div>
                <p class="text-body-2 color-600 mr-2">تضمین کیفیت</p>
              </div>
              <div class="flex">
                <div class="flex mt-1">
                  <i class="fa fa-store text-gray-600"></i>
                </div>
                <p class="text-body-2 color-600 mr-2">ذکری مارکت</p>
              </div>
              <div class="flex flex-col w-full relative">
                <span class="flex items-center mb-1">
                  <div class="flex ml-2">
                    <i class="fa fa-box-check text-gray-600"></i>
                  </div>
                  <span class="text-body-2 color-600">
                    {{
                      basket_product.productStock <= basket_product.productBuyedCount
                        ? "اتمام موجودی"
                        : "موجود در انبار"
                    }}
                  </span>
                </span>
                <ul class="flex flex-col">
                  <li class="flex ml-3 items-center"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-else
        :class="basketContainer.length != 0 ? 'lg:col-span-9' : ''"
        class="bg-white border rounded-lg col-span-12 py-4"
      >
        <h2 class="px-6 py-2 font-bold flex justify-between items-center">
          <span>سبد خرید شما</span><i class="fa fa-ellipsis-vertical text-2xl"></i>
        </h2>
        <small class="px-6 py-2">0 کالا</small>
        <div class="border-b py-2"></div>

        <div class="flex items-center justify-center lg:gap-4 mx-4 border-b py-8">
          <div>
            <p>سبد خرید شما خالی میباشد</p>
          </div>
        </div>
      </div>
      <div
        v-if="basketContainer.length != 0"
        class="bg-white border rounded-lg py-4 lg:col-span-3 col-span-12"
      >
        <div class="px-5">
          <div class="flex items-center justify-between pt-3 relative">
            <div class="flex items-center">
              <div class="mr-1 font-medium flex items-center text-gray-900">
                <span>جمع سبد خرید</span>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div class="flex items-center justify-start">
                  <span class="text-gray-900 text-subtitle-strong">{{
                    $rial_separate(totalPrices)
                  }}</span>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex mr-1">ریال</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-between pt-3 relative text-red-500">
            <div class="flex items-center">
              <div class="mr-1 font-medium flex items-center">
                <span>تخفیف شما از سبد</span>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div class="flex items-center justify-start">
                  <span class="text-2xl">{{ $rial_separate(discountsPrice) }}</span>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex mr-1 text-red-500 text-sm">ریال</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex mt-2 lg:my-4">
            <a
              class="relative text-center items-center justify-center rounded-lg w-full bg-red-500 p-3 text-white"
              href="javascript:void(0)"
              @click="doShipping()"
            >
              <div class="flex items-center justify-center relative text-center">
                ثبت سفارش
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useMarketStore } from "@/store/marketStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const router = useRouter();
const $toast = useToast();
const marketStore = useMarketStore();
const { basketInfo, loading } = storeToRefs(marketStore);
const zekribasket = useCookie("zekri-basket");
const basketContainer = ref([]);

const totalPrices = ref(0);
const discountsPrice = ref(0);

onMounted(async () => {
  loading.value = true;
  if (basketInfo.value.products.length != 0) {
    const basketProducts = await marketStore.get_basket_products(
      basketInfo.value.products
    );

    if (basketProducts.statusCode == 200) {
      basketContainer.value = basketProducts.result;
      loading.value = false;
    }

    doCalculatePrice();
  } else {
    setTimeout(() => {
      loading.value = false;
    }, 500);
  }
});

const doCalculatePrice = () => {
  totalPrices.value = 0;
  discountsPrice.value = 0;
  basketContainer.value.forEach((product, index) => {
    if (product.discountPercent == 0) {
      const addedPrice = parseInt(product.mainPrice) * parseInt(product.count);
      totalPrices.value = totalPrices.value + addedPrice;
    } else {
      const addedPrice =
        product.mainPrice -
        ((parseInt(product.mainPrice) * parseInt(product.discountPercent)) / 100) *
          product.count;
      totalPrices.value = totalPrices.value + addedPrice;
      discountsPrice.value =
        discountsPrice.value +
        ((parseInt(product.mainPrice) * parseInt(product.discountPercent)) / 100) *
          product.count;
    }
  });
};

const addToCountProductBasket = (product) => {
  const product_id = product._id;
  const findResult = zekribasket.value.find((product) => product.id == product_id);
  if (findResult != null) {

    if (findResult.count >= product.productStock - product.productBuyedCount) {
      $toast.error("تعداد درخواستی شما برای سفارش این محصول بیش از سقف موجودیت است", {
        position: "top-left",
      });
      return false;
    }else {
      basketInfo.value.count = basketInfo.value.count + 1;
      product.count = parseInt(product.count) + 1;
      basketInfo.value.products.forEach((val , index) => {
        if (val.id == product_id) {
          val.count = val.count + 1
        }
      })

      zekribasket.value = basketInfo.value.products;
  
      
  
      doCalculatePrice();
    }

  }
};

const removeFromCountProductBasket = (product) => {
  const product_id = product._id;
  basketInfo.value.count = basketInfo.value.count - 1;

  product.count = parseInt(product.count) - 1;

  const findResult = basketInfo.value.products.find(
    (product) => product.id == product_id
  );
  findResult.count = findResult.count - 1;

  zekribasket.value = basketInfo.value.products;

  doCalculatePrice();
};

const removeProductFromBasket = (productIndex) => {
  basketInfo.value.count = basketInfo.value.count - 1;
  basketContainer.value.splice(productIndex, 1);

  basketInfo.value.products.splice(productIndex, 1);

  zekribasket.value = basketInfo.value.products;

  if (basketInfo.value.products.length == 0) {
    zekribasket.value = undefined;
  }

  doCalculatePrice();
};

const doShipping = () => {
  if (basketInfo.value.products.length != 0) {
    router.push("/checkout/shipping");
  } else {
    $toast.error("سبد خرید خالی میباشد", {
      position: "top-left",
    });
  }
};

definePageMeta({
  pageTransition: {
    mode: "default",
  },
});
</script>
