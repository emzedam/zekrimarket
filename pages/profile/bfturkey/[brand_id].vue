<template>
  <div class="lg:col-span-9" v-if="brandDetail != null">
    <div class="lg:rounded-md relative mb-4 border">
      <div
        class="flex items-center justify-between gap-4 text-2xl font-semibold p-4 border-b"
      >
        <div class="title flex items-center">
          <span
            @click="goBack()"
            class="hover:bg-cyan-50 hover:text-cyan-500 cursor-pointer h-10 w-10 flex items-center justify-center border rounded-lg transition-all duration-300"
            ><i class="fa-duotone fa-arrow-right !leading-3"></i></span
          ><span class="leading-3 pr-3"> خرید از {{ brandDetail.brand.title }}</span>
        </div>
      </div>

      <div class="h-full">
        <div class="grid grid-cols-12 gap-4">
          <div class="lg:col-span-8 col-span-12 w-full">
            <div
              class="flex h-full w-full flex-col justify-between gap-x-3 lg:flex-row xl:gap-x-10 p-6"
            >
              <div
                id="product-description"
                class="top-5 flex h-fit basis-full flex-row flex-wrap items-center gap-x-5 sm:basis-1/2 sm:flex-nowrap lg:sticky lg:block"
              >
                <div
                  class="flex flex-col items-center justify-center gap-5 sm:flex-row lg:flex-col"
                >
                  <div
                    id="image-container"
                    class="relative mb-5 aspect-[1.72] w-full self-start sm:block md:mb-0 md:flex md:w-1/2 lg:w-5/6 [&amp;>*]:rounded-xl"
                  >
                    <span
                      ><img
                        class="rounded-lg"
                        :alt="brandDetail.brand.title"
                        :src="`https://api.zekrimarket.com/storage/files_container/national_market/brands/${brandDetail.brand.image}`"
                    /></span>
                  </div>
                  <div
                    class="flex flex-col"
                    v-if="
                      brandDetail.setting != null &&
                      brandDetail.setting.description_field == true
                    "
                  >
                    <h2
                      class="mb-5 sm:mt-0 lg:mt-10 font-Pelak text-sm font-bold text-primary dark:text-neon-primary"
                    >
                      شرایط و توضیحات
                    </h2>
                    <div class="mb-8 flex max-h-36 min-h-fit">
                      <p
                        class="justify-end text-justify text-[11px] leading-5 text-gray-700 dark:text-gray-300"
                      >
                        {{ brandDetail.setting.description }}
                        <i class="fa-solid fa-chevron-left pr-2 text-left block"></i>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex h-full basis-1/2 flex-col justify-between">
                <div class="flex flex-grow flex-col pb-5 [&amp;>*]:caret-primary">
                  <div>
                    <div
                      class="relative mb-3 flex flex-col justify-between font-Estedad dark:bg-transparent"
                    >
                      <label class="mb-2.5 mr-1 text-sm font-bold">لینک محصول</label
                      ><input
                        type="text"
                        class="input input-bordered dark:bg-transparent dark:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-sm focus:border-primary dark:border-gray-700 dark:focus:border-neon-primary overflow-hidden rounded-md pr-12 placeholder:text-left text-left ltr"
                        placeholder="https://www.trendyol.com/"
                        name="siteUrl"
                        v-model="nationalOrder.product_link"
                      /><small
                        class="mt-1 h-4 font-Estedad text-[10px] text-error"
                      ></small>
                    </div>
                    <div
                      id="image-container"
                      v-if="
                        brandDetail.setting != null &&
                        brandDetail.setting.image_field == true
                      "
                      class="relative mb-5 flex aspect-[1.72] w-full self-start duration-500 [&amp;>*]:rounded-xl hidden lg:block"
                    >
                      <span
                        ><img
                          :src="`https://api.zekrimarket.com/storage/files_container/national_market/setting/${brandDetail.setting.image}`"
                          class="delay-200 duration-500 ease-in-out false"
                      /></span>
                    </div>
                  </div>

                  <div
                    v-if="brandDetail.setting.sendedTime_field == true"
                    class="relative mb-3 flex flex-col justify-between font-Estedad dark:bg-transparent"
                  >
                    <label class="mb-2.5 mr-1 text-sm font-bold">مدت زمان تحویل</label
                    ><input
                      type="text"
                      class="input input-bordered dark:bg-transparent dark:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-sm focus:border-primary dark:border-gray-700 dark:focus:border-neon-primary rounded-md transition-all delay-200 duration-500"
                      name="sitePaymentDuration"
                      dir="rtl"
                      v-model="nationalOrder.sended_time"
                      disabled
                    /><small class="mt-1 h-4 font-Estedad text-[10px] text-error"></small>
                  </div>
                  <div class="relative mb-4 flex flex-col font-Estedad">
                    <label class="mb-2.5 text-sm font-bold"
                      >آدرس دقیق تحویل کالا در ایران</label
                    ><textarea
                      dir="rtl"
                      class="scrollbar h-24 w-full rounded-md border border-gray-300 px-2 pt-4 font-Estedad text-sm outline-0 focus:input-primary placeholder:font-Estedad placeholder:text-sm placeholder:font-normal placeholder:text-muted focus:border-primary focus:outline-none dark:border-gray-700 2xl:h-32"
                      placeholder=" (نوشتن آدرس دقیق ضروری می‌باشد.)"
                      v-model="nationalOrder.address"
                    ></textarea
                    ><small class="text-2sm mb-0 font-Estedad text-error"></small>
                  </div>
                  <div
                    class="relative mb-3 flex flex-col justify-between font-Estedad dark:bg-transparent"
                  >
                    <label class="mb-2.5 mr-1 text-sm font-bold">کد پستی</label
                    ><input
                      type="text"
                      class="rtl input input-bordered dark:bg-transparent dark:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-sm focus:border-primary dark:border-gray-700 dark:focus:border-neon-primary rounded-md"
                      placeholder=""
                      v-model="nationalOrder.postal_code"
                    /><small class="mt-1 h-4 font-Estedad text-[10px] text-error"></small>
                  </div>
                  <div
                    class="relative mb-3 flex flex-col justify-between font-Estedad dark:bg-transparent"
                  >
                    <label class="mb-2.5 mr-1 text-sm font-bold">توضیحات</label
                    ><input
                      type="text"
                      class="rtl input input-bordered dark:bg-transparent dark:text-gray-300 h-12 border border-gray-300 px-4 font-Estedad text-sm outline-0 placeholder:font-Estedad placeholder:text-sm focus:border-primary dark:border-gray-700 dark:focus:border-neon-primary rounded-md"
                      placeholder="رنگ، سایز یا سایر شرایط"
                      v-model="nationalOrder.order_detail_description"
                    /><small class="mt-1 h-4 font-Estedad text-[10px] text-error"></small>
                  </div>
                </div>
                <button
                  type="button"
                  v-if="registerloading == false"
                  @click="register_national_order()"
                  class="rounded-lg mt-2.5 hidden h-12 w-1/3 min-w-[188px] items-center justify-center self-end bg-primary px-4 font-Estedad text-sm font-bold text-white disabled:bg-muted xl:flex"
                >
                  <p>ثبت سفارش</p>
                </button>
                <button
                  type="button"
                  v-else
                  class="rounded-lg mt-2.5 hidden h-12 w-1/3 min-w-[188px] items-center justify-center self-end bg-primary px-4 font-Estedad text-sm font-bold text-white disabled:bg-muted xl:flex"
                >
                  <div class="custom-loader"></div>
                </button>
              </div>
            </div>
          </div>
          <div class="lg:col-span-4 p-4 bg-gray-50 col-span-12 w-full">
            <div
              class="px-5 py-10 dark:bg-gray-900 md:px-10 xl:static xl:bg-transparent xl:px-0 xl:py-0"
            >
              <h2
                class="mb-10 font-Pelak text-lg font-semibold text-black dark:text-white"
              >
                مشخصات سفارش
              </h2>
              <div
                class="flex flex-wrap items-center justify-between lg:flex-nowrap mb-10 hidden md:flex"
              >
                <div
                  class="mb-3 ml-10 flex items-center last:ml-0 md:ml-2 lg:flex-col 2xl:flex-row"
                >
                  <div
                    class="flex items-center justify-center rounded-lg text-white p-3.5 dark:bg-slate-800 md:ml-3 lg:mb-2 lg:ml-0 2xl:ml-2 bg-green-500"
                  >
                    <i class="fa-light fa-file-pen"></i>
                  </div>
                  <div class="flex flex-col items-center 2xl:items-start">
                    <span class="text-[0.719rem] font-bold dark:text-gray-300"
                      >ارسال سفارش </span
                    ><span
                      class="text-[0.719rem] font-medium dark:text-gray-300 text-primary dark:text-neon-primary"
                      >مرحله اول</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-12" v-if="authuser != null">
                <h2 class="mb-8 text-base font-extrabold dark:text-gray-300">
                  مشخصات خریدار
                </h2>
                <div class="items mb-2.5 flex justify-between text-sm">
                  <p class="font-semibold text-gray-500 dark:text-gray-300">
                    نام و نام خانوادگی
                  </p>
                  <p class="font-bold dark:text-gray-300">{{ authuser.name }}</p>
                </div>
                <div class="items mb-2.5 flex justify-between text-sm">
                  <p class="font-semibold text-gray-500 dark:text-gray-300">
                    شماره موبایل
                  </p>
                  <p class="font-bold dark:text-gray-300">{{ authuser.mobile }}</p>
                </div>
              </div>
              <div class="flex items-center justify-between dark:text-gray-300">
                <span class="text-sm font-semibold text-gray-500">هزینه محصول</span>
                <p class="text-base font-extrabold">0 ﷼</p>
              </div>
              <div class="overflow-hidden">
                <hr class="my-2" />
                <div class="flex items-center justify-between dark:text-gray-300">
                  <span class="text-sm font-semibold text-gray-500">
                    هزینه پرداختی مرحله اول</span
                  >
                  <p class="text-base font-extrabold">0 ﷼</p>
                </div>
              </div>
              <div class="flex w-full justify-center pt-5 xl:hidden">
                <button
                  type="button"
                  v-if="registerloading == false"
                  @click="register_national_order()"
                  class="rounded-lg mt-2.5 flex h-12 w-full min-w-[164px] items-center justify-center self-end bg-primary px-4 text-sm font-bold text-white disabled:bg-muted lg:flex"
                >
                  <p>ثبت سفارش</p>
                </button>
                <button
                  v-else
                  type="button"
                  class="rounded-lg mt-2.5 flex h-12 w-full min-w-[164px] items-center justify-center self-end bg-primary px-4 text-sm font-bold text-white disabled:bg-muted lg:flex"
                >
                  <div class="custom-loader"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="w-full h-[200px] flex items-center justify-center text-center">
    <p>اطلاعات یافت نشد !</p>
  </div>
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useMarketStore } from "@/store/marketStore";
import { useRouter, useRoute } from "vue-router";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";

const router = useRouter();
const route = useRoute();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);
const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const sitesList = ref([]);
const brandDetail = ref(null);
const $toast = useToast();
const registerloading = ref(false);

const nationalOrder = reactive({
  product_link: "",
  address: "",
  postal_code: "",
  order_detail_description: "",
  sended_time: "",
});

onMounted(async () => {
  loading.value = true;

  await get_informations();
});

if (authuser.value == null) {
  router.push("/auth/login");
}

const get_informations = async () => {
  const result = await marketStore.get_national_market_brand_details(
    route.params.brand_id
  );

  if (result.status == 200) {
    brandDetail.value = result.result;
    loading.value = false;
    nationalOrder.sended_time = brandDetail.value.setting.send_time;
  }
};

const register_national_order = async () => {
  if (authuser.value != null) {
    registerloading.value = true;
    const data = {
      ...nationalOrder,
      brand_id: route.params.brand_id,
      user_id: authuser.value != null ? authuser.value._id : 0,
    };
    const res = await marketStore.register_national_market_orders(data);
    if (res.status === 200) {
      clearData();
      registerloading.value = false;
      $toast.success(res.message, {
        position: "top-left",
      });
    } else {
      registerloading.value = false;
      $toast.error(res.message, {
        position: "top-left",
      });
    }
  } else {
    registerloading.value = false;
    $toast.error("شما احراز هویت نشده اید !", {
      position: "top-left",
    });
  }
};

const goBack = () => {
  router.push("/profile/bfturkey");
};

const clearData = () => {
  nationalOrder.product_link = "";
  nationalOrder.address = "";
  nationalOrder.postal_code = "";
  nationalOrder.order_detail_description = "";
};

definePageMeta({
  layout: "user-dashboard",
  pageTransition: {
    mode: "default",
  },
});
</script>

<style scoped>
.custom-loader {
  width: 20px;
  height: 20px;
  display: grid;
  border-radius: 16%;
  -webkit-mask: radial-gradient(farthest-side, #0000 40%, #000 41%);
  background: linear-gradient(0deg, #c2bcbcbf 50%, #e3e3e3 0) center/4px 100%,
    linear-gradient(90deg, #c2bcbcbf 50%, #c2bcbcbf 0) center/100% 4px;
  background-repeat: no-repeat;
  animation: s3 1s infinite steps(12);
}
.custom-loader::before,
.custom-loader::after {
  content: "";
  grid-area: 1/1;
  border-radius: 50%;
  background: inherit;
  opacity: 0.915;
  transform: rotate(30deg);
}
.custom-loader::after {
  opacity: 0.83;
  transform: rotate(60deg);
}

@keyframes s3 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
