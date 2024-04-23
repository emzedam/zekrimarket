<template>
  <aside class="lg:col-span-3 col-span-12 border p-6 rounded-lg bg-gray-100 relative">
    <!-- <div class="break-words py-3  w-full flex items-center justify-between user-select-none border-b">
          <h3 class="grow-1 font-semibold text-xl">فروشنده</h3> -->
    <!-- <span class="text-body-2 text-cyan-500 cursor-pointer">۶
            فروشنده دیگر</span> -->
    <!-- </div> -->

    <a target="_blank" href="/seller/CVHFC/">
      <div class="w-full flex">
        <div class="py-3 grow-1 flex w-full p-2">
          <div class="ml-4 flex items-center">
            <div class="relative">
              <div class="flex items-center">
                <i class="fa-duotone fa-store text-3xl"></i>
              </div>
              <div class="flex absolute text-blue-500 -bottom-1 -left-1 mr-1 bg-white">
                <i class="fa fa-badge-check"></i>
              </div>
            </div>
          </div>
          <div class="flex w-full">
            <div>
              <div class="flex items-center mb-2 mb-1-lg">
                <span>
                  <p class="color-700 ml-2 text-subtitle font-semibold">
                    فروشگاه لوازم خانگی ذکری
                  </p>
                </span>
                <div class="py-1 flex items-center justify-center">
                  <div class="inline-flex items-center px-2">
                    <!-- <p class="inline-block  font-medium text-green-600">منتخب</p> -->
                  </div>
                </div>
              </div>
              <!-- <div class="w-full flex items-center content-center text-body-2" @mouseover="upHere = true"
                    @mouseleave="upHere = false">
                    <div class="pr-2 flex items-center">
                      <p class="color-500 ml-1">عملکرد</p>
                      <p class="text-no-wrap text-body2-strong">عالی</p>
                    </div>
                  </div> -->

              <Transition class="hidden" name="fade">
                <!-- v-show="upHere" -->
                <div
                  class="bg-white/90 hidden backdrop-blur-lg rounded-lg shadow-sm overflow-y-auto radius-sm border-200 z-10 absolute w-full right-0 max-w-xs mx-4"
                >
                  <div class="py-4 px-5 bg-000 relative z-20">
                    <div
                      class="flex justify-between items-center w-full text-xl font-semibold"
                    >
                      فروشگاه ذکری مارکت
                    </div>
                    <p class="text-gray-500 text-sm">عضو از ۲ سال و ۸ ماه</p>

                    <div class="text-center my-2">
                      <p class="font-bold text-4xl text-green-500">عالی</p>
                      <p class="text-lg py-2 font-medium">عملکرد کلی فروشنده</p>
                    </div>
                    <div
                      class="flex content-center mt-2 justify-between text-gray-400 font-semibold"
                    >
                      <div class="text-center">
                        <p class="text-h5 color-500">۹۵.۷٪</p>
                        <p class="color-500 text-caption">تامین به موقع</p>
                      </div>
                      <div class="text-center">
                        <p class="text-h5 color-500">۹۸.۲٪</p>
                        <p class="color-500 text-caption">تعهد ارسال</p>
                      </div>
                      <div class="text-center">
                        <p class="text-h5 color-500">۹۹٪</p>
                        <p class="color-500 text-caption">بدون مرجوعی</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </a>

    <div class="flex items-center justify-between pt-3 relative border-t pb-4">
      <div class="flex items-center">
        <div class="mr-1 font-semibold flex items-center text-gray-700">
          <span>قیمت کالا </span>
        </div>
      </div>
      <div class="flex items-center">
        <div>
          <div class="flex items-center justify-start">
            <span class="text-gray-700 font-semibold">
              <del v-if="productDiscount != 0" class="text-red-500">{{
                $rial_separate(productPrice)
              }}</del>
              <p v-if="productDiscount == 0">{{ $rial_separate(productPrice) }}</p>
            </span>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex mr-1 font-semibold">ریال</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="productDiscount != 0"
      class="flex items-center justify-between pt-3 relative border-t pb-4"
    >
      <div class="flex items-center">
        <div class="mr-1 font-semibold flex items-center text-gray-700">
          <span>قیمت با تخفیف </span>
        </div>
      </div>
      <div class="flex items-center">
        <div>
          <div class="flex items-center justify-start">
            <span class="text-gray-700 font-semibold">{{
              $rial_separate(
                productPrice - (parseInt(productPrice) * parseInt(productDiscount)) / 100
              )
            }}</span>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <div class="flex mr-1 font-semibold">ریال</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-3 grow-1 flex items-center border-t">
      <i class="fa-light fa-shield-check text-xl text-blue-500"></i>
      <p class="font-semibold pr-2 block">گارانتی ۲۴ ماهه گلدیران</p>
    </div>

    <div class="py-3 grow-1 flex items-center border-t">
      <i class="fa-light fa-box text-xl text-green-500"></i>
      <p class="font-semibold pr-2 block">موجود در انبار ذکری مارکت</p>
    </div>

    <div class="flex mt-2 lg:my-4" v-if="productExistState == false">
      <a
        class="relative text-center items-center justify-center rounded-lg w-full bg-red-500 p-3 text-white"
        href="javascript:void(0)"
      >
        <div v-if="isProductStock == false" class="text-white text-center">
          اتمام موجودی این محصول
        </div>
        <div
          @click="addToBasket()"
          v-if="addBasketState == false && isProductStock == true"
          class="flex items-center justify-center relative text-center"
        >
          افزودن به سبد خرید
        </div>
        <div
          v-if="addBasketState == true && isProductStock == true"
          class="flex items-center justify-center relative text-center"
        >
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </a>
    </div>
    <div class="flex items-center justify-start mt-2 lg:my-4" v-else>
      <div class="Qt border rounded-lg flex w-28 my-3">
        <button
          type="button"
          class="flex items-center justify-center w-8 h-8 p-3 border-l text-red-600"
        >
          <i class="fa fa-plus" @click="addToCountProductBasket()"></i>
        </button>
        <div class="relative">
          <input
            type="text"
            disabled
            min="1"
            v-model="countProductBasket"
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
            v-if="countProductBasket > 1"
            @click="removeFromCountProductBasket()"
          ></i>
          <i
            class="fa fa-trash-can hidden"
            @click="removeProductFromBasket()"
            v-if="countProductBasket <= 1"
          ></i>
        </button>
      </div>
      <div class="mr-3">
        <p class="text-sm">در سبد خرید شما</p>
        <p class="text-sm">
          مشاهده
          <nuxt-link to="/checkout/cart" class="text-indigo-500 mr-2">سبد خرید</nuxt-link>
        </p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const $toast = useToast();
const nuxtApp = useNuxtApp();
const store = useMarketStore();
const { basketInfo } = storeToRefs(store);
const upHere = ref(false);
const props = defineProps([
  "currentProduct",
  "productPrice",
  "productDiscount",
  "isProductStock",
  "availableProductStockCount",
]);
const countProductBasket = ref(0);
const productExistState = ref(false);

const addBasketState = ref(false);
const zekribasket = useCookie("zekri-basket");

const mainPrice = ref(0);
const discountPrice = ref(0);

onMounted(() => {
  check_exists_product_in_basket();
});

watch(
  () => props.currentProduct,
  (newVal, oldVal) => {
    props.currentProduct = newVal;
    check_exists_product_in_basket();
  }
);

const addToBasket = () => {
  addBasketState.value = true;

  setTimeout(async () => {
    addBasketState.value = false;
    if (zekribasket.value == undefined) {
      basketInfo.value.count = basketInfo.value.count + 1;

      basketInfo.value.products = [
        {
          id: props.currentProduct._id,
          count: 1,
          isFeature: props.currentProduct.product_type != "simple" ? true : false,
        },
      ];

      zekribasket.value = [
        {
          id: props.currentProduct._id,
          count: 1,
          isFeature: props.currentProduct.product_type != "simple" ? true : false,
        },
      ];
      check_exists_product_in_basket();
    } else {
      const checkExistsToBasket = zekribasket.value.filter((val, index) => {
        return val.id == props.currentProduct._id;
      });

      if (checkExistsToBasket.length != 0) {
        $toast.error("این آیتم قبلا اضافه شده", {
          position: "top-left",
        });
      } else {
        basketInfo.value.count = basketInfo.value.count + 1;

        basketInfo.value.products = [
          {
            id: props.currentProduct._id,
            count: 1,
            isFeature: props.currentProduct.product_type != "simple" ? true : false,
          },
          ...basketInfo.value.products,
        ];

        const basket_item = [
          {
            id: props.currentProduct._id,
            count: 1,
            isFeature: props.currentProduct.product_type != "simple" ? true : false,
          },
          ...zekribasket.value,
        ];

        zekribasket.value = basket_item;

        check_exists_product_in_basket();
      }
    }
  }, 500);
};

const check_exists_product_in_basket = () => {
  const product_id = props.currentProduct._id;
  if (zekribasket.value != undefined) {
    const findResult = zekribasket.value.find((product) => product.id == product_id);
    if (findResult != undefined) {
      countProductBasket.value = findResult.count;
      productExistState.value = true;
    } else {
      productExistState.value = false;
    }
  }
};

const addToCountProductBasket = () => {
  const product_id = props.currentProduct._id;
  const findResult = zekribasket.value.find((product) => product.id == product_id);

  if (findResult != null) {
    if (findResult.count >= props.availableProductStockCount) {
      $toast.error("تعداد درخواستی شما برای سفارش این محصول بیش از سقف موجودیت است", {
        position: "top-left",
      });
      return false;
    }
    basketInfo.value.count = basketInfo.value.count + 1;
    countProductBasket.value = countProductBasket.value + 1;
    findResult.count = findResult.count + 1;
  }
};

const removeFromCountProductBasket = () => {
  basketInfo.value.count = basketInfo.value.count - 1;
  countProductBasket.value = countProductBasket.value - 1;
  const product_id = props.currentProduct._id;
  const findResult = zekribasket.value.find((product) => product.id == product_id);
  findResult.count = findResult.count - 1;
};

const removeProductFromBasket = () => {
  basketInfo.value.count = basketInfo.value.count - 1;
  let productIndex;
  const product_id = props.currentProduct._id;
  zekribasket.value.forEach((val, index) => {
    if (product_id == val.id) {
      productIndex = index;
    }
  });

  zekribasket.value.splice(productIndex, 1);
  check_exists_product_in_basket();
  if (zekribasket.value.length == 0) {
    zekribasket.value = undefined;
  }
};

defineExpose({
  check_exists_product_in_basket,
});
</script>

<style>
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 24px;
}
.lds-ellipsis div {
  position: absolute;
  top: 9px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 8px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 8px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 32px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 56px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(24px, 0);
  }
}
</style>
