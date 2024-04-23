<template>
  <div class="lg:col-span-9">
    <div class="lg:rounded-md relative mb-4 border" v-if="orderDetail != null">
      <div
        class="flex items-center justify-between gap-4 text-2xl font-semibold p-4 border-b"
      >
        <div class="title flex items-center">
          <span
            class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
            ><i class="fa-duotone fa-arrow-right !leading-3"></i></span
          ><span class="leading-3 pr-3"> جزئیات سفارش</span>
        </div>
      </div>
      <div class="h-full p-6">
        <section class="w-full">
          <h4 class="font-Pelak px-2 text-blue-700 font-semibold">
            مشخصات سفارش {{ orderDetail.order_id }}
          </h4>
          <div class="py-2 px-2">
            <ul
              class="dark:mb-5 flex w-full items-center text-ss font-semibold text-gray-500 dark:text-gray-400 md:text-sm"
            >
              <li
                class="ml-2 cursor-pointer whitespace-pre border-l border-l-gray-500 pl-2 last:border-l-0 last-of-type:truncate"
              >
                <nuxt-link to="/profile"><span>پنل کاربری ذکری مارکت</span></nuxt-link>
              </li>
              <li
                class="ml-2 cursor-pointer whitespace-pre border-l border-l-gray-500 pl-2 last:border-l-0 last-of-type:truncate"
              >
                <nuxt-link to="/profile/bfturkey/orders-list"
                  ><span>پیگیری سفارشات</span></nuxt-link
                >
              </li>
              <li
                class="ml-2 cursor-pointer whitespace-pre border-l border-l-gray-500 pl-2 last:border-l-0 last-of-type:truncate"
              >
                <a href="javascript:void(0)"
                  ><span>مشخصات سفارش {{ orderDetail.order_id }}</span></a
                >
              </li>
            </ul>
          </div>
          <div class="mt-6 px-2">
            <div
              class="flex flex-col justify-between space-y-6 font-Estedad dark:text-gray-300 md:flex-row md:items-center md:space-y-0 border p-3 rounded-lg"
            >
              <div
                class="flex flex-col space-y-6 text-sm md:flex-row md:items-center md:space-x-10 md:space-y-0"
              >
                <p class="font-semibold md:ml-6" v-if="orderDetail.brand != null">
                  خرید کالا از {{ orderDetail.brand.title }}
                </p>
                <p class="flex items-center">
                  <span class="flex text-sm font-normal text-gray-600 dark:text-dark"
                    >شماره سفارش:</span
                  ><span class="mx-5 font-semibold">{{ orderDetail.order_id }}</span>
                </p>
                <p class="flex items-center">
                  <span class="font-norma flex text-sm text-gray-600 dark:text-dark"
                    >زمان سفارش:</span
                  ><span class="mx-5 font-semibold"> {{ orderDetail.created_at }}</span>
                </p>
                <p class="flex items-center" v-if="orderStatus != null">
                  <span class="font-norma flex text-sm text-gray-600 dark:text-dark"
                    >وضعیت سفارش:</span
                  ><span
                    :class="`text-${orderStatus.color}-500`"
                    class="mx-5 font-semibold flex items-center gap-1"
                  >
                    <i class="fa fa-history"></i>
                    {{ orderStatus.status }}
                  </span>
                </p>
              </div>
            </div>
            <div
              class="mt-6 flex flex-col items-center gap-y-5 space-y-6 rounded-lg border py-7 font-Estedad text-sm dark:bg-gray-900 dark:text-gray-300 md:flex-row md:flex-wrap md:space-y-0 md:px-10 2xl:flex-nowrap"
            >
              <div class="w-full p-4">
                <ul role="list">
                  <li v-for="(status, index) in statusLists" :key="index">
                    <div
                      class="relative pb-8"
                      v-if="status.status == orderDetail.tracking_state"
                    >
                      <span
                        class="absolute top-5 right-5 -mr-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                      <div class="relative flex items-center space-x-0">
                        <div
                          class="relative flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 ring-8 ring-white text-white shadow-sm"
                        >
                          <i class="fa-light fa-check text-white"></i>
                        </div>
                        <div class="min-w-0 flex-1 mr-3">
                          <div>
                            <div class="text-md mr-3">
                              <a
                                href="javascript:void(0)"
                                class="font-semibold text-gray-900"
                                >{{ status.text }}</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="relative pb-8" v-else>
                      <div class="relative flex items-center space-x-0">
                        <div
                          class="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white text-gray-400 z-10"
                        >
                          <i class="fa-light fa-lock text-white"></i>
                        </div>
                        <div class="min-w-0 flex-1 mr-3">
                          <div>
                            <div class="text-md font-semibold mr-3">
                              {{ status.text }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <span
                        class="absolute top-5 right-5 -mr-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div></div>

            <div class="mb-5 mt-3 w-full font-Estedad dark:text-gray-300">
              <div
                class="mb-3 flex flex-col justify-between space-y-6 text-sm text-gray-500 dark:text-gray-300 md:flex-row md:space-y-0 border p-4 rounded-lg bg-indigo-50"
              >
                <div class="w-full">
                  <a
                    target="_blank"
                    href="https://indiefy.net/upgrade?from=metadata_change"
                  >
                    <div
                      class="flex w-full items-center justify-between gap-x-2 font-semibold hover:text-primary dark:hover:text-neon-primary"
                    >
                      <i class="fa fa-link"></i>
                      <p class="min-w-fit">لینک محصول:</p>
                      <p
                        dir="ltr"
                        class="mr-2 w-full text-right font-en flex items-center leading-3 text-xs max-w-2/4"
                      >
                        {{ orderDetail.product_link }}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <!-- 
                                زمانی که تیک محصول خرید انجام شد زده شد این قسمت فعال باشد -->
              <div
                class="mb-6 flex flex-col items-center justify-between md:flex-row hidden"
              >
                <div class="flex h-52 w-full flex-col items-start rounded-sm border p-5">
                  <span class="text-sm font-bold">تصویر محصول خریداری شده:</span>
                  <div
                    class="h-full w-full max-w-full overflow-x-auto overflow-y-hidden [&amp;::-webkit-scrollbar-thumb]:rounded-full [&amp;::-webkit-scrollbar-thumb]:bg-muted [&amp;::-webkit-scrollbar]:h-2"
                  >
                    <div class="my-5 flex h-full w-fit gap-x-2">
                      <div class="relative mx-2 w-32 rounded">
                        <!-- <a target="_blank" href=""
                          ><span
                            ><img
                              alt="محصولات پرداخت بین المللی"
                              src="@/assets/images/trendyol.jpg"
                              class="rounded" /></span
                        ></a> -->
                      </div>
                      <div class="relative mx-2 w-32 rounded">
                        <!-- <a target="_blank" href=""
                          ><span
                            ><img
                              alt="محصولات پرداخت بین المللی"
                              src="@/assets/images/trendyol.jpg"
                              class="rounded" /></span
                        ></a> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <table
                v-if="orderDetail.total_price != null"
                class="hidden w-full border-separate border-spacing-y-3 rounded border text-center text-sm font-semibold dark:text-gray-300 md:inline-table"
              >
                <thead>
                  <tr>
                    <th class="border-b pb-3" scope="col">مجموع هزینه خدمات (ریال)</th>
                    <th class="border-b pb-3" scope="col">مجموع هزینه خدمات به حروف</th>
                    <th class="border-b pb-3" scope="col">
                      <span>مبلغ پرداخت شده (ریال)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="">{{ rial_separate(orderDetail.total_price) }}</td>
                    <td class="text-sm">
                      {{ wordifyRials(orderDetail.total_price) }}
                    </td>
                    <td class="font-bold">
                      <div class="flex items-center justify-center">
                        ‌<span>{{ rial_separate(orderDetail.total_price) }}</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="flex flex-col items-center justify-center rounded border md:hidden"
                v-if="orderDetail.total_price != null"
              >
                <div
                  class="flex w-full flex-col items-center justify-center border-b p-6 text-sm"
                >
                  <p class="pb-3 text-sm font-normal">مجموع هزینه خدمات</p>
                  <p class="font-bold">
                    {{ rial_separate(orderDetail.total_price) }} (ریال)
                  </p>
                </div>
                <div
                  class="flex w-full flex-col items-center justify-center border-b p-6 text-center text-sm"
                >
                  <p class="pb-3 text-sm font-normal">مبلغ به حروف(ریال)</p>
                  <p class="font-bold">پنج میلیون و هفتصد و سه هزار و هشتصد و ده</p>
                </div>
                <div class="flex w-full flex-col items-center justify-center p-6 text-sm">
                  <p class="pb-3 text-sm font-normal">مبلغ پرداخت شده</p>
                  <p class="font-bold">
                    {{ rial_separate(orderDetail.total_price) }} (ریال)
                  </p>
                  <div class="flex w-full justify-center">
                    <button
                      class="h-12 items-center rounded text-sm font-semibold text-blue-500"
                      type="button"
                    >
                      جزئیات
                    </button>
                  </div>
                </div>
              </div>
              <p class="mt-6 text-sm text-gray-500">
                مبلغ نهایی شامل هزینه تبدیل ارز، کارمزد و موارد دیگر است.
              </p>
            </div>
            <div class="flex w-full items-end justify-end gap-2 pt-2.5 [&amp;>*]:mx-0">
              <nuxt-link
                to="/profile/bfturkey"
                v-if="orderDetail.status != 0"
                class="btn mx-2 border-none bg-primary p-3 text-white rounded-lg"
                >سفارش جدید</nuxt-link
              >
              <button
                v-if="orderDetail.status == 0"
                class="btn mx-2 border-none bg-primary p-3 text-white rounded-lg"
              >
                پرداخت سفارش
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useMarketStore } from "@/store/marketStore";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { wordifyfa, wordifyRials } from "@/helpers/wordifyfa/wordifyfa.ts";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);
const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const orderDetail = ref([]);
const orderStatus = ref(null);

// var wf = require("wordifyfa.js");

const statusLists = ref([
  { text: "در حال بررسی و تایید", status: 0 },
  { text: "پرداخت نهایی", status: 1 },
  { text: "در حال خرید محصول", status: 2 },
  { text: "خرید انجام شد", status: 3 },
  { text: "در حال ارسال به ایران", status: 4 },
  { text: "محصول به ایران ارسال شد", status: 5 },
  { text: "محصول به انبار ذکری مارکت رسید", status: 6 },
  { text: "در حال بسته بندی و ارسال به مقصد", status: 7 },
  { text: "محصول تحویل داده شد", status: 8 },
  { text: "سفارش لغو شده", status: 9 },
]);

onMounted(async () => {
  loading.value = true;

  await get_order_detail();
});

if (authuser.value == null) {
  router.push("/auth/login");
}

const get_order_detail = async () => {
  const result = await marketStore.get_detail_national_order(route.params.order_id);
  if (result.status == 200) {
    orderDetail.value = result.result;
    statusCalc(result.result.tracking_state);
    loading.value = false;
  } else {
    loading.value = false;
  }
};

const statusCalc = (status) => {
  switch (status) {
    case 0:
      orderStatus.value = { status: "در حال بررسی و تایید", color: "orange" };
      break;
    case 1:
      orderStatus.value = { status: "پرداخت نهایی", color: "orange" };
      break;
    case 2:
      orderStatus.value = { status: "در حال خرید محصول", color: "blue" };
      break;
    case 3:
      orderStatus.value = { status: "خرید انجام شد", color: "blue" };
      break;
    case 4:
      orderStatus.value = { status: "در حال ارسال به ایران", color: "blue" };
      break;
    case 5:
      orderStatus.value = { status: "محصول به ایران ارسال شد", color: "blue" };
      break;
    case 6:
      orderStatus.value = { status: "محصول به انبار ذکری مارکت رسید", color: "blue" };
      break;
    case 7:
      orderStatus.value = { status: "در حال بسته بندی و ارسال به مقصد", color: "blue" };
      break;
    case 8:
      orderStatus.value = { status: "محصول تحویل داده شد", color: "green" };
      break;
    case 9:
      orderStatus.value = { status: "این سفارش لغو شده", color: "red" };
      break;
    default:
      break;
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

definePageMeta({
  layout: "user-dashboard",
  pageTransition: {
    mode: "default",
  },
});
</script>
