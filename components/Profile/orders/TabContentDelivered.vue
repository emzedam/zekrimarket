<template>
  <!--   جاری  -->
  <ul class="p-5 p-4-lg" v-if="delivereds.length != 0">
    <li v-for="(order, index) in delivereds" :key="index">
      <div class="flex flex-col lg:gap-y-4">
        <a
          class="bg-000 lg:rounded-md color-500 flex flex-col items-stretch lg:border border-b"
          href="javascript:void(0)"
        >
          <div class="py-5 lg:p-4 flex flex-col items-stretch gap-y-2 border-b">
            <div class="flex lg:items-start justify-between">
              <div class="flex flex-col">
                <div class="flex items-center font-semibold text-gray-700">
                  <div class="relative flex items-center lg:items-start self-stretch">
                    <div class="relative">
                      <div class="flex">
                        <i class="fa fa-circle-info text-xl text-green-500"></i>
                      </div>
                    </div>
                  </div>
                  <div class="mr-2">تحویل داده شده</div>
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
        </a>
      </div>
    </li>
  </ul>
  <!--   جاری  -->
</template>

<script setup>
const props = defineProps(["delivereds"]);
</script>
