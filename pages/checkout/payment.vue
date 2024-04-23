<template>
  <div class="relative container-x mx-auto h-full mt-3 mb-8 lg:my-8">
    <div class="border rounded-lg py-8 bg-white mb-6 relative">
      <nuxt-link to="/" class="w-full flex justify-center pb-12">
        <img src="../../assets/logo.png" class="w-40" />
      </nuxt-link>

      <ul
        class="nav w-full flex flex-wrap text-sm font-medium text-center text-gray-500 py-5 darker:text-gray-400"
      >
        <li class="nav-item flex-grow relative">
          <nuxt-link
            to="/checkout/cart"
            class="nav-link group"
            data-tw-toggle="tab"
            data-tw-target="seller-details"
          >
            <div
              class="bg-white border border-red-500 inline-block h-14 w-14 rounded-full darker:bg-transparent darker:border-gray-1000/30 group-[.active]:border-red-500"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="سبد خرید"
            >
              <i class="fa fa-cart-shopping text-22 !leading-[2.5] text-red-500"></i>
            </div>
          </nuxt-link>
          <div
            class="after:content-[''] after:absolute after:w-[75%] after:h-[2px] after:bg-red-500 after:right-[62%] after:top-[50%] sm:block hidden after:darker:bg-zinc-700"
          ></div>
        </li>
        <li class="nav-item flex-grow relative">
          <nuxt-link
            to="/checkout/shipping"
            class="nav-link group"
            data-tw-toggle="tab"
            data-tw-target="company-document"
          >
            <div
              class="bg-white border border-red-500 inline-block h-14 w-14 rounded-full darker:bg-transparent darker:border-gray-1000/30 group-[.active]:border-red-500"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="زمان و نحوه ارسال"
            >
              <i class="fa fa-truck-fast text-22 !leading-[2.5] text-red-500"></i>
            </div>
          </nuxt-link>
          <div
            class="after:content-[''] after:absolute after:w-[75%] after:h-[2px] after:bg-red-500 after:right-[62%] after:top-[50%] sm:block hidden after:darker:bg-zinc-700"
          ></div>
        </li>
        <li class="nav-item flex-grow">
          <a
            href="javascript:void(0)"
            class="nav-link group active"
            data-tw-toggle="tab"
            data-tw-target="bank-detail"
          >
            <div
              class="bg-white border border-gray-100 inline-block h-14 w-14 rounded-full darker:bg-transparent darker:border-gray-1000/30 group-[.active]:border-red-500"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="پرداخت"
            >
              <i class="fa fa-credit-card text-22 !leading-[2.5] text-red-500"></i>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="grid lg:grid-cols-12 grid-cols-1 gap-6">
      <div class="bg-white border rounded-lg lg:col-span-9 col-span-12 py-4">
        <h2 class="px-6 py-2 font-bold flex justify-between items-center">
          <span>انتخاب روش پرداخت</span
          ><i class="fa fa-credit-card text-2xl text-gray-300"></i>
        </h2>

        <div class="border-b py-2"></div>

        <div
          class="flex flex-col justify-start items-center p-6 border lg:m-6 m-3 rounded-lg"
        >
          <div class="space-y-6 w-full font-semibold">
            <div
              @click="paymentWay = 'online'"
              :class="paymentWay == 'online' ? 'bg-gray-200' : ''"
              class="internet flex items-center justify-start border p-2 rounded-lg cursor-pointer duration-300"
            >
              <i class="fa fa-credit-card p-3 bg-cyan-500 rounded-lg ml-2 text-white"></i>
              <div class="content">
                <span>پرداخت اینترنتی</span>
                <span class="block text-gray-500 text-sm font-light"
                  >پرداخت آنلاین با تمامی کارت‌های بانکی</span
                >
              </div>
            </div>

            <div
              class="hidden Wallet flex items-center justify-start border p-2 rounded-lg cursor-pointer duration-300"
            >
              <i class="fa fa-wallet p-3 bg-pink-500 rounded-lg ml-2 text-white"></i>
              <div class="content">
                <span class="block">کیف پول</span>
                <span class="block text-gray-500 text-sm font-light"
                  >موجودی : 2000 تومان</span
                >
              </div>
            </div>

            <div
              @click="paymentWay = 'offline'"
              :class="paymentWay == 'offline' ? 'bg-gray-200' : ''"
              class="Wallet flex items-center justify-start border p-2 rounded-lg cursor-pointer duration-300"
            >
              <i
                class="fa fa-money-bill-transfer p-3 bg-orange-500 rounded-lg ml-2 text-white"
              ></i>
              <div class="content">
                <span>پرداخت آفلاین</span>
                <span class="block text-gray-500 text-sm font-light">
                  در صورتنی که از طریق کارت به کارت یا چک پرداخت می کنید این گزینه را
                  انتخاب کنید
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:m-6 m-3 py-6 px-4 lg:border-gray-200 border rounded-md hidden">
          <div
            class="flex flex-col lg:flex-row items-end lg:items-center justify-between"
          >
            <p class="text-gray-500 text-caption font-semibold">کد تخفیف کنید</p>
            <span class="text-no-wrap" data-cro-id="shipping-in-person"
              ><span
                class="inline-flex items-center cursor-pointer shrink-0 mt-4 lg:mt-0 text-cyan-500 text-sm"
                ><span>دریافت با مراجعه حضوری</span>
                <div class="flex">
                  <i class="fa-solid fa-chevron-down mr-2"></i>
                </div> </span
            ></span>
          </div>

          <div class="relative flex justify-end w-full mt-6">
            <div
              class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-cyan-500"
            >
              ثبت
            </div>
            <input
              type="text"
              class="font-normal border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-3"
              placeholder="کد تخفیف را وارد کنید"
            />
          </div>
        </div>

        <div class="flex flex-col items-center p-6 border lg:m-6 m-3 rounded-lg">
          <div class="step-2 flex items-center w-full justify-start">
            <span class="font-bold">خلاصه سفارش</span>
          </div>

          <div class="border-b py-2"></div>

          <div class="marsule w-full mb-4">
            <div class="step-2 flex items-center w-full justify-start hidden">
              <i class="fa fa-truck-fast text-red-500 pl-2 text-[1.2rem]"></i
              ><span class="text-red-500 font-bold text-[1.2rem]">
                چهار‌شنبه ۱۸ مرداد-بازه ۱۰ - ۲۳</span
              >
              <span class="bg-gray-100 rounded-lg px-3 py-1 text-sm mr-2">1 کالا</span>
            </div>
            <span class="text-sm text-gray-600">ارسال عادی-هزینه ارسال : ۳۹,۰۰۰</span>
          </div>

          <div class="grid lg:grid-cols-6 grid-cols-2 gap-4 w-full">
            <div
              class="relative border p-4 rounded-lg"
              v-for="(product, index) in basketContainer"
              :key="index"
            >
              <img
                class="w-full inline-block max-w-[150px] rounded-lg"
                :src="
                  product.isFeature == 'true'
                    ? `https://api.zekrimarket.com/storage/products/images/${product.galleries[0].image}`
                    : `https://api.zekrimarket.com/storage/products/images/${product.indexPic}`
                "
              />

              <span
                class="absolute bg-gray-100 rounded-bl-lg w-6 h-6 bottom-0 left-0 border border-t-0 border-r-0 inset-x-0 inset-y-0 text-center"
                >{{ product.count }}</span
              >
              <h5 class="color-800 text-sm mb-2">
                {{
                  product.isFeature == "true"
                    ? product.product.fa_title.substr(0, 30) + "..."
                    : product.fa_title.substr(0, 30) + "..."
                }}
              </h5>
              <span
                v-if="product.isFeature == 'true'"
                class="flex items-center mt-4 border px-2 py-1 rounded-lg"
              >
                <i
                  v-if="product.color != null"
                  :style="{ 'background-color': product.color.color }"
                  class="border p-2 rounded-full w-4 h-4 block ml-2"
                ></i>
                <span v-if="product.color != null" class="text-xs">{{
                  product.color.name
                }}</span>
                <i
                  v-if="product.pattern != null"
                  :style="{
                    'background-size': 'cover',
                    'background-image': `url(https://api.zekrimarket.com/storage/files_container/patterns/${product.pattern.image})`,
                  }"
                  class="border p-2 rounded-full w-4 h-4 block ml-2"
                ></i>
                <span v-if="product.pattern != null" class="text-xs">{{
                  product.pattern.name
                }}</span>
              </span>
            </div>
          </div>
        </div>

        <div
          class="flex items-center border lg:m-6 m-3 rounded-lg text-right justify-start p-4"
        >
          <i class="fa fa-memo-circle-info ml-2 text-gray-500"></i>
          <span
            >برای دریافت فاکتور، بعد از دریافت سفارش به حساب کاربری و صفحه جزئیات سفارش سر
            بزنید</span
          >
        </div>
      </div>
      <div class="bg-white border rounded-lg py-4 lg:col-span-3 col-span-12">
        <div class="px-5">
          <div class="flex items-center justify-between pt-3 relative border-b pb-4">
            <div class="flex items-center">
              <div class="mr-1 font-semibold flex items-center text-gray-700">
                <span>قیمت کالاها ({{ basketContainer.length }})</span>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div class="flex items-center justify-start">
                  <span class="text-gray-700 font-semibold">{{
                    $rial_separate(totalPrices)
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

          <div class="flex items-center justify-between pt-3 relative border-b pb-4">
            <div class="flex items-center">
              <div class="mr-1 font-semibold flex items-center text-gray-700">
                <span>هزینه ارسال</span>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div class="flex items-center justify-start">
                  <span class="text-gray-700 font-semibold">{{
                    $rial_separate(sendPrice)
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

          <div class="flex items-center justify-between pt-3 relative border-b pb-4">
            <div class="flex items-center">
              <div class="mr-1 font-semibold flex items-center text-gray-700">
                <span>هزینه ارزش بر افزوده</span>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div class="flex items-center justify-start">
                  <span class="text-gray-700 font-semibold">{{
                    $rial_separate(addedValuePrice)
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

          <div class="flex items-center justify-between pt-3 relative text-red-500 pb-4">
            <div class="flex items-center">
              <div class="mr-1 flex items-center font-semibold">
                <span>سود شما از خرید</span>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div class="flex items-center justify-start">
                  <span class="text-2xl font-semibold">{{
                    $rial_separate(discountsPrice)
                  }}</span>
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div class="flex mr-1 text-red-500 text-sm font-semibold">ریال</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="flex items-center justify-between relative border rounded-lg mt-4 p-4"
          >
            <div class="flex items-center">
              <div class="mr-1 flex items-center text-gray-900 font-semibold">
                <span>قابل پرداخت</span>
              </div>
            </div>
            <div class="flex items-center">
              <div>
                <div class="flex items-center justify-start">
                  <span class="text-gray-900 font-semibold">{{
                    $rial_separate(paymentPrice)
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

          <!-- زمانی نمایش داده شود که کاربر روز و ساعت ارسال کالا را انتخاب کند و هزینه حمل و نقل محاسبه شود -->
          <div class="flex mt-2 lg:my-4">
            <a
              class="relative text-center items-center justify-center rounded-lg w-full bg-red-500 p-3 text-white"
              href="javascript:void(0)"
              @click="create_user_order()"
              v-if="order_loading == false"
            >
              <div class="flex items-center justify-center relative text-center">
                پرداخت
              </div>
            </a>
            <a
              class="relative text-center items-center justify-center rounded-lg w-full bg-red-500 p-3 text-white"
              href="javascript:void(0)"
              v-if="order_loading == true"
            >
              <div class="flex items-center justify-center relative text-center">
                <div class="lds-ellipsis">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </a>
          </div>
          <!-- زمانی نمایش داده شود که کاربر روز و ساعت ارسال کالا را انتخاب کند و هزینه حمل و نقل محاسبه شود -->
        </div>
      </div>
    </div>
    <form
      ref="behpardakhtForm"
      id="subform"
      action="https://bpm.shaparak.ir/pgwchannel/startpay.mellat"
      method="POST"
    >
      <input type="hidden" id="RefId" name="RefId" :v-model="bankRefId" />
    </form>
  </div>
</template>

<script setup>
import { useMarketStore } from "~/store/marketStore";
import { useAuthStore } from "@/store/authStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { useCookies } from "vue3-cookies";

const authStore = useAuthStore();
const $toast = useToast();
const nuxtApp = useNuxtApp();
const marketStore = useMarketStore();
const { basketInfo, loading } = storeToRefs(marketStore);
const totalPrices = ref(0);
const discountsPrice = ref(0);
const paymentPrice = ref(0);
const sendPrice = ref(390000);
const addedValuePrice = ref(0);
const basketContainer = ref([]);
const paymentWay = ref("online");
const router = useRouter();
const order_loading = ref(false);
const errorMessage = ref(null);
const cookies = useCookies().cookies;
const selected_address = ref(null);
const bankRefId = ref(null);
const behpardakhtForm = ref(null);

definePageMeta({
  layout: "authLayout",
});

onMounted(async () => {
  if (authStore.get_current_user == null) {
    router.push("/auth/login");
  }
  loading.value = true;

  const basketProducts = await marketStore.get_basket_products(basketInfo.value.products);

  if (basketProducts.statusCode == 200) {
    basketContainer.value = basketProducts.result;
    console.log(basketProducts.result);
    loading.value = false;
  }

  doCalculatePrice();

  paymentPrice.value = totalPrices.value + sendPrice.value;

  if (cookies.get("user-address")) {
    selected_address.value = cookies.get("user-address");
  } else {
    router.push("/checkout/shipping");
    $toast.error("آدرس ارسالی کاربر انتخاب نشده است", {
      position: "top-left",
    });
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

const create_user_order = async () => {
  order_loading.value = true;
  if (isValidateData()) {
    let order_products = [];
    const data = {
      payment_way: paymentWay.value,
      amount: paymentPrice.value,
      discountPrice: discountsPrice.value,
      shipping_price: sendPrice.value,
      added_value: addedValuePrice.value,
      amount_before_discount: paymentPrice.value + discountsPrice.value,
      address_id: selected_address.value._id,
      is_receiver: selected_address.value.isRecieverMe,
      name: selected_address.value.name,
      mobile: selected_address.value.mobile,
      order_products: [],
    };

    basketContainer.value.forEach((val, index) => {
      order_products = [
        ...order_products,
        {
          id: val._id,
          count: val.count,
          is_feature: val.isFeature,
          top_product_id: val.isFeature == "false" ? val._id : val.product._id,
          activeFeatureIndex:
            val.isFeature == "false" ? 0 : get_active_index(val.product, val._id),
        },
      ];
    });

    data.order_products = order_products;

    const result = await marketStore.create_user_order(data);
    if (result.statusCode == 200) {
      if (paymentWay.value == "online") {
        bankRefId.value = result.ref_id;
        if (bankRefId.value != null) {
          order_loading.value = false;
          window.location.href = `https://bpm.shaparak.ir/pgwchannel/payment.mellat?RefId=${bankRefId.value}`;
        }
      } else {
        order_loading.value = false;
        $toast.success(result.message, {
          position: "top-left",
        });
        router.push("/checkout/order/" + result.result);
      }
    } else {
      order_loading.value = false;
      $toast.error(result.message, {
        position: "top-left",
      });
    }
  } else {
    order_loading.value = false;
    $toast.error(errorMessage.value, {
      position: "top-left",
    });
  }
};

const get_active_index = (product, featureId) => {
  if (product.features.length != 0) {
    return product.features.findIndex((val, index) => {
      return val._id === featureId;
    });
  } else {
    return 0;
  }
};

const isValidateData = () => {
  if (totalPrices.value == 0) {
    errorMessage.value = "پارامتر های ارسالی نامعتبر";
    return false;
  } else if (paymentPrice.value == 0) {
    errorMessage.value = "پارامتر های ارسالی نامعتبر";
    return false;
  } else if (basketContainer.value.length == 0) {
    errorMessage.value = "سبد خرید خالی میباشد";
    return false;
  } else {
    errorMessage.value = "";
    return true;
  }
};
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
