<template>
  <div class="w-full">
    <div
      :class="
        marketStore.get_user_addresses.length != 0 && basketList.length != 0
          ? ''
          : 'hidden'
      "
      class="grid lg:grid-cols-12 grid-cols-1 gap-6"
    >
      <div class="bg-white border rounded-lg lg:col-span-9 col-span-12 py-4">
        <h2 class="px-6 py-2 font-bold flex justify-between items-center">
          <span> زمان و نحوه ارسال</span>
          <i class="fa fa-truck-fast text-2xl text-gray-300"></i>
        </h2>

        <div class="border-b py-2"></div>

        <div
          class="flex flex-col justify-between items-center p-6 border lg:m-6 m-3 rounded-lg"
          v-if="marketStore.get_user_selected_address != null"
        >
          <div class="flex justify-between w-full flex-col">
            <div class="flex justify-start items-center pl-4 w-full">
              <div>
                <div class="font-semibold text-gray-700 text-sm">
                  {{ marketStore.get_user_selected_address.fullAddress }}
                </div>
                <div class="font-medium text-gray-600">
                  {{ marketStore.get_user_selected_address.name }}
                </div>
              </div>
            </div>
            <div class="flex justify-end w-unset cursor-pointer">
              <span
                @click="open_edit_address_modal()"
                class="inline-flex items-center pointer self-end self-auto-md mt-1 shrink-0 focus:outline-none font-semibold text-cyan-500 text-sm"
                ><span>تغییر یا ویرایش آدرس</span>
                <div class="flex text-xs">
                  <i class="fa-solid fa-chevron-left"></i>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col items-center p-6 border lg:m-6 m-3 rounded-lg">
          <div class="step-2 flex items-center w-full justify-start">
            <i class="fa fa-truck-fast text-red-500 pl-2 text-[1.2rem]"></i
            ><span class="text-red-500 font-bold text-[1.2rem]">ارسال عادی</span>
            <span class="bg-gray-100 rounded-lg px-3 py-1 text-sm mr-2"
              >{{ basketList.length }} کالا</span
            >
          </div>
          <small class="flex flex-col justify-start w-full hidden">موجود در انبار</small>

          <div class="border-b py-2"></div>

          <div class="grid lg:grid-cols-6 grid-cols-2 gap-4 w-full">
            <div
              class="relative border p-4 rounded-lg"
              v-for="(product, index) in basketList"
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

        <div class="lg:m-6 m-3 hidden">
          <div class="mt-3">
            <div class="flex items-center px-6 my-6 h-10">
              <i
                class="fa-light fa-calendar-clock text-xl text-gray-700 leading-6 block"
              ></i
              ><span class="pr-2 leading-10 font-semibold text-gray-700 block pt-1"
                >انتخاب زمان ارسال</span
              >
            </div>
            <div class="border rounded-lg">
              <ul class="lg:flex md:flex-1">
                <li
                  @click="openSubMenu(1)"
                  class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-0 md:border-b sm:border-b xs:border-b relative"
                >
                  <div
                    class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right sm:text-right xs:text-right text-center"
                  >
                    <span class="text-2xl block lg:text-center text-red-500">شنبه</span
                    ><span class="text-2xl block lg:text-center">۲۱</span>
                  </div>

                  <collapse-transition>
                    <li
                      class="Collapse p-4 border-t border-b block lg:hidden"
                      v-if="submenuIndex == 1"
                    >
                      <div class="flex items-center ml-4">
                        <input
                          checked
                          id="red-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                        />
                        <label
                          for="red-checkbox"
                          class="mr-2 text-xl font-medium text-gray-900"
                          ><span class="pl-2">ساعت</span> <span class="pl-2">10</span
                          ><span class="pl-2">تا</span><span class="pl-2">24</span>
                        </label>
                      </div>
                    </li>
                  </collapse-transition>
                </li>

                <li
                  @click="openSubMenu(2)"
                  class="swiper-day overflow-hidden hover:after:content-[''] hover:after:absolute hover:after:w-full hover:after:h-[2px] hover:after:bg-red-500 hover:after:bottom-0 hover:after:duration-300 lg:border-b-0 md:border-b sm:border-b xs:border-b relative"
                >
                  <div
                    class="py-2 h-full block color-600 cursor-pointer px-4 md:text-right sm:text-right xs:text-right text-center"
                  >
                    <span class="text-2xl block lg:text-center text-red-500">شنبه</span
                    ><span class="text-2xl block lg:text-center">۲۱</span>
                  </div>

                  <collapse-transition>
                    <li
                      class="Collapse p-4 border-t border-b block lg:hidden"
                      v-if="submenuIndex == 2"
                    >
                      <div class="flex items-center ml-4">
                        <input
                          checked
                          id="red-checkbox"
                          type="checkbox"
                          value=""
                          class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                        />
                        <label
                          for="red-checkbox"
                          class="mr-2 text-xl font-medium text-gray-900"
                          ><span class="pl-2">ساعت</span> <span class="pl-2">10</span
                          ><span class="pl-2">تا</span><span class="pl-2">24</span>
                        </label>
                      </div>
                    </li>
                  </collapse-transition>
                </li>
              </ul>

              <ul>
                <li class="Collapse p-4 border-t lg:block hidden">
                  <div class="flex items-center ml-4">
                    <input
                      checked
                      id="red-checkbox"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                    />
                    <label
                      for="red-checkbox"
                      class="mr-2 text-xl font-medium text-gray-900"
                      ><span class="pl-2">ساعت</span> <span class="pl-2">10</span
                      ><span class="pl-2">تا</span><span class="pl-2">24</span>
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="flex justify-between items-center lg:m-6 m-3 py-4 md:px-4 sm:px-4 xs:px-4"
        >
          <div class="space-y-4">
            <div class="mb-1 hidden">
              <span class="text-gray-500 text-body-1 ml-2">زمان ارسال</span
              ><span class="text-gray-700 font-semibold ml-1 inline-block"
                >پنج‌شنبه - ۱۰</span
              ><span class="text-gray-500 text-body-1 ml-1">تا</span
              ><span class="text-gray-700 font-semibold ml-1">۲۳</span>
            </div>
            <div class="flex items-center">
              <span class="text-gray-500 ml-3">هزینه ارسال</span
              ><span class="text-gray-700 font-semibold ml-1">
                <div>
                  <div class="flex items-center justify-start">
                    <span class="font-semibold text-gray-700">۳۹,۰۰۰</span>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center">
                        <div class="flex mr-1">تومان</div>
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div
          class="flex md:flex-wrap sm:flex-wrap xs:flex-wrap lg:flex-row items-end lg:items-center lg:justify-between lg:m-6 m-3 py-2 px-4 lg:border-gray-200 border rounded-md"
        >
          <ul class="text-gray-500 text-caption list-disc pr-3">
            <li>ارسال به شهرستان خوی ظرف 1 روز کاری</li>
            <li>ارسال به استانهای آذربایجان غربی و شرقی  ظرف 3 روز کاری</li>
            <li>ارسال به سایر استانها 3 الی 14 روز کاری</li>
          </ul>
        </div>

        <div
          class="flex md:flex-wrap sm:flex-wrap xs:flex-wrap lg:flex-row items-end lg:items-center lg:justify-between lg:m-6 m-3 py-2 px-4 lg:border-gray-200 border rounded-md"
        >
          <p class="text-gray-500 text-caption font-semibold">
            با مراجعه حضوری به فروشگاه لوازم خانگی ذکری هم می‌توانید سفارش خود را دریافت
            کنید
          </p>
          <span class="text-no-wrap justify-start pr-4"
            ><span
              class="inline-flex items-center cursor-pointer shrink-0 mt-4 lg:mt-0 text-cyan-500 text-sm"
              ><span>دریافت با مراجعه حضوری</span>
              <div class="flex">
                <i class="fa-solid fa-chevron-left"></i>
              </div> </span
          ></span>
        </div>
      </div>
      <div class="bg-white border rounded-lg py-4 lg:col-span-3 col-span-12">
        <div class="px-5">
          <div class="flex items-center justify-between pt-3 relative border-b pb-4">
            <div class="flex items-center">
              <div class="mr-1 font-semibold flex items-center text-gray-700">
                <span>قیمت کالاها ({{ basketList.length }})</span>
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
          <div class="hidden mt-2 lg:my-4">
            <a
              class="relative text-center items-center justify-center rounded-lg w-full border-2 border-red-500 p-3 text-white"
              href="/checkout/shipping/"
            >
              <div
                class="flex items-center justify-center relative text-center font-semibold text-red-500"
              >
                انتخاب زمان ارسال
              </div>
            </a>
          </div>

          <!-- زمانی نمایش داده شود که کاربر روز و ساعت ارسال کالا را انتخاب کند و هزینه حمل و نقل محاسبه شود -->
          <div class="flex mt-2 lg:my-4">
            <nuxt-link
              class="relative text-center items-center justify-center rounded-lg w-full bg-red-500 p-3 text-white"
              to="/checkout/payment/"
            >
              <div class="flex items-center justify-center relative text-center">
                ثبت سفارش
              </div>
            </nuxt-link>
          </div>
          <!-- زمانی نمایش داده شود که کاربر روز و ساعت ارسال کالا را انتخاب کند و هزینه حمل و نقل محاسبه شود -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import CollapseTransition from "@/components/CollapseTransition.vue";
import { useMarketStore } from "~/store/marketStore";
const marketStore = useMarketStore();
const submenuIndex = ref(null);
const emit = defineEmits("openEditAddressModal");
const props = defineProps(["basketList"]);

const totalPrices = ref(0);
const discountsPrice = ref(0);
const paymentPrice = ref(0);
const sendPrice = ref(390000);

onMounted(async () => {
  await marketStore.initUserSelectedAddress();
  doCalculatePrice();

  paymentPrice.value = totalPrices.value + sendPrice.value;
});

const openSubMenu = (index) => {
  if (submenuIndex.value == index) {
    submenuIndex.value = null;
  } else {
    submenuIndex.value = index;
  }
};

const open_edit_address_modal = () => {
  emit("openEditAddressModal");
};

const doCalculatePrice = () => {
  totalPrices.value = 0;
  discountsPrice.value = 0;
  props.basketList.forEach((product, index) => {
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
</script>
