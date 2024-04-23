<template>
  <!--   جاری  -->
  <ul class="p-5 p-4-lg" v-if="currentOrders.length != 0">
    <li v-for="(order, index) in currentOrders" :key="index">
      <div class="flex flex-col lg:gap-y-4">
        <nuxt-link
          :to="`/profile/orders/${order.order_id}`"
          class="bg-gray-50 rounded-lg lg:rounded-md color-500 flex flex-col items-stretch lg:border border-b"
        >
          <div class="py-5 px-4 lg:p-4 flex flex-col items-stretch gap-y-2 border-b">
            <div class="flex lg:items-start justify-between">
              <div class="flex flex-col">
                <div class="flex items-center font-semibold text-gray-700">
                  <div class="relative flex items-center lg:items-start self-stretch">
                    <div class="relative">
                      <div class="flex">
                        <i class="fa fa-circle-info text-xl text-orange-500"></i>
                      </div>
                    </div>
                  </div>
                  <div class="mr-2">در انتظار پرداخت</div>
                </div>
              </div>
              <div>
                <div class="flex">
                  <i class="fa fa-chevron-left text-sm"></i>
                </div>
              </div>
            </div>
            <div class="hidden lg:flex items-center justify-start gap-3 gap-y-0">
              <div class="flex items-center">
                <div class="text-body-2 color-400"></div>
                <div class="text-body1-strong color-700 mr-1">
                  <p class="text-gray-500">{{ order.created_at.split(" ")[0] }}</p>
                </div>
              </div>
              <div class="hidden lg:inline-block">
                <div class="flex">
                  <i class="fa fa-circle text-gray-200 text-[5px]"></i>
                </div>
              </div>
              <div class="flex items-center">
                <div class="text-gray-500">کد سفارش :</div>
                <div class="font-medium mr-1">{{ order.order_id }}</div>
              </div>
              <div class="hidden lg:inline-block">
                <div class="flex">
                  <i class="fa fa-circle text-gray-200 text-[5px]"></i>
                </div>
              </div>
              <div class="flex items-center">
                <div class="text-gray-500">مبلغ</div>
                <div class="font-medium text-gray-700 mr-1">
                  <div class="flex justify-start items-center">
                    <div class="ml-1 text-subtitle-strong color-800">
                      <div class="text-body1-strong">
                        {{ $rial_separate(order.amount) }}
                      </div>
                    </div>

                    <div class="flex items-center">ریال</div>
                  </div>
                </div>
              </div>

              <div class="flex items-center">
                <div class="text-gray-500">تخفیف</div>
                <div class="font-medium text-gray-700 mr-1">
                  <div class="flex justify-start items-center">
                    <div class="ml-1 text-subtitle-strong color-800">
                      <div class="text-body1-strong">
                        {{ $rial_separate(order.discount_price) }}
                      </div>
                    </div>

                    <div class="flex items-center">ریال</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="hidden lg:flex items-center justify-start gap-x-1"></div>
            <div class="flex lg:hidden items-center justify-start">
              <div class="flex items-center">
                <div class="text-body-2 color-400">کد سفارش</div>
                <div class="text-body1-strong color-700 mr-1">
                  <div class="text-body1-strong">{{ order.order_id }}</div>
                </div>
              </div>
            </div>
            <div class="flex lg:hidden items-center justify-between">
              <div class="flex items-center color-500 text-body-2">
                <div class="text-body-2 color-400">
                  {{ order.created_at.split(" ")[0] }}
                </div>
                <div class="text-body1-strong color-700 mr-1"></div>
              </div>
              <div class="flex justify-start items-center color-900">
                <div class="ml-1 text-subtitle-strong color-800">
                  <div class="text-body1-strong">
                    <span>{{ $rial_separate(order.amount) }}</span
                    ><span class="pr-2">تومان</span>
                  </div>
                </div>
                <div class="w-4 h-4">
                  <div class="flex">
                    <i class="fa fa-circle text-gray-200 text-[5px]"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="py-4 px-2 gap-y-2 lg:grid grid-cols-2">
            <div class="right">
              <div class="flex items-center gap-1 gap-y-0">
                <div class="flex items-center gap-1 justify-start hidden">
                  <span>مرسوله</span><span>۱</span><span>از</span><span>۲</span>
                </div>
                <div class="flex">
                  <i class="fa fa-circle text-gray-200 text-[5px]"></i>
                </div>
                <div class="flex flex-row items-center text-red-500">
                  <div class="ml-2">
                    <i class="fa fa-truck-fast"></i>
                  </div>

                  <p class="font-medium">ارسال عادی</p>
                </div>
              </div>
              <div class="flex items-center">
                <div class="flex items-center">
                  <div class="text-body-2 text-gray-400">طریقه پرداخت</div>
                  <div class="text-body1-strong color-700 mr-1">
                    <div class="text-body2-strong color-800 mr-1">
                      {{
                        order.payment_way == "offline"
                          ? "به صورت آفلاین"
                          : "به صورت آنلاین"
                      }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:flex lg:justify-end">
              <div class="relative rounded-md p-3 pb-4 w-full text-no-wrap pl-0">
                <div class="absolute w-full h-full rounded-md left-0 top-0 z-0"></div>
                <div class="relative">
                  <div class="flex flex-row justify-between items-center relative mb-2">
                    <h6 class="font-medium text-orange-500">
                      <div class="text-body2-strong">در انتظار پرداخت</div>
                    </h6>
                    <div class="hidden lg:block">
                      <div class="flex flex-row items-center mt-3/2 lg:mt-0 mb-1">
                        <p class="text-gray-500 font-medium">مبلغ قابل پرداخت:</p>
                        <div>
                          <div class="flex justify-start items-center mr-1">
                            <div class="ml-1 mb-0">
                              {{ $rial_separate(order.amount) }}
                            </div>
                            <div class="color-700">ریال</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-gray-200 w-full rounded-lg relative h-2">
                    <div class="rounded-lg relative right-0">
                      <div
                        class="flex justify-center items-center absolute px-2 lg:px-1 top-0 right-0 h-2 rounded-lg bg-orange-500 w-[12%]"
                      ></div>
                    </div>
                  </div>
                  <div class="mt-2 lg:hidden">
                    <div class="flex flex-row items-center mt-3/2 lg:mt-0 mb-1">
                      <p class="text-gray-400">مبلغ قابل پرداخت:</p>
                      <div>
                        <div class="flex justify-start items-center mr-1">
                          <div class="ml-1 mb-0">{{ $rial_separate(order.amount) }}</div>
                          <div class="w-4 h-4 color-700">
                            <div class="flex">ریال</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pb-5 lg:pb-0">
            <div class="mx-4 lg:block">
              <div
                class="grid grid-cols-12 py-4 gap-4 pb-4"
                v-if="order.order_products.length != 0"
              >
                <div
                  v-for="(product, key) in order.order_products"
                  :key="key"
                  class="flex col-span-2 items-center justify-center w-full border rounded-lg"
                >
                  <div class="object-contain rounded">
                    <img
                      v-if="product.is_feature == true"
                      class="w-20 inline-block object-contain"
                      :src="`https://api.zekrimarket.com/storage/products/images/${
                        product.product.galleries.length != 0
                          ? product.product.galleries[0].image
                          : ''
                      }`"
                    />
                    <img
                      v-if="product.is_feature == false"
                      class="w-20 inline-block object-contain"
                      :src="`https://api.zekrimarket.com/storage/products/images/${product.product.indexPic}`"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>

      <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between py-4">
        <div class="rounded text-orange-500 text-body-2 p-0">
          <div class="flex">
            <div class="flex mt-1">
              <i class="fa fa-info-circle"></i>
            </div>
            <span class="mr-2 text-orange-500"
              >سفارش در صورت عدم پرداخت تا ۵۴ دقیقه دیگر لغو خواهد شد.</span
            >
          </div>
        </div>
      </div>
    </li>
  </ul>
  <!--   جاری  -->
</template>

<script setup>
const props = defineProps(["currentOrders"]);
</script>
