<template>
  <div
    class="relative container-x mx-auto h-full lg:my-28 mb-28 mt-8"
    v-if="factorData != null"
  >
    <div
      class="border border-gray-300 bg-white px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8"
    >
      <span
        class="w-10 h-10 ltr:mr-3 rtl:ml-3 ltr:xl:mr-4 rtl:xl:ml-4 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0"
        ><svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="w-5 h-5 text-green-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm108.25 138.29l-134.4 160a16 16 0 01-12 5.71h-.27a16 16 0 01-11.89-5.3l-57.6-64a16 16 0 1123.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0124.5 20.58z"
          ></path></svg></span
      >با تشکر ، سفارش شما در سیستم ثبت شد
    </div>

    <ul
      class="border border-gray-300 bg-white rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10"
    >
      <li
        class="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0"
      >
        <span class="uppercase text-[15px] block text-body font-normal leading-5"
          >شماره سفارش:</span
        >
        <span class="font-en text-md">{{ factorData.order_id }}</span>
      </li>
      <li
        class="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0"
      >
        <span class="uppercase text-[15px] block text-body font-normal leading-5"
          >تاریخ سفارش:</span
        >
        <span class="text-md">{{ factorData.created_at.split(" ")[0] }}</span>
      </li>
      <li
        class="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0"
      >
        <span class="uppercase text-[15px] block text-body font-normal leading-5"
          >شماره موبایل:</span
        >
        <span class="text-lg">{{ factorData.mobile }}</span>
      </li>

      <li
        class="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0"
      >
        <span class="uppercase text-[15px] block text-body font-normal leading-5">
          نام دریافت کننده:</span
        >
        <span class="text-md font-en"> {{ factorData.name }}</span>
      </li>
      <li
        class="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0"
      >
        <span class="uppercase text-[11px] block text-body font-normal leading-5"
          >جمع کل:</span
        >{{ $rial_separate(factorData.amount) }} ریال
      </li>
      <li
        class="text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0"
      >
        <span class="uppercase text-[15px] block text-body font-normal leading-5"
          >شیوه پرداخت</span
        >
        {{
          factorData.payment_way == "online" ? "از طریق درگاه بهپرداخت" : "به صورت آفلاین"
        }}
      </li>
    </ul>

    <p
      class="text-heading text-sm leading-4 md:text-base mb-8 font-semibold items-center border p-4 rounded-lg bg-green-50 !border-green-100"
    >
      <i class="fa fa-credit-card text-green-500 block !leading-3 h-2"></i
      ><span class="pr-2 text-green-500">
        {{
          factorData.payment_way == "online"
            ? "پرداخت شده از طریق درگاه پرداخت بانک ملت"
            : "پرداخت به صورت آفلاین انجام خواهد شد"
        }}
      </span>
    </p>

    <div class="border rounded-lg">
      <h2
        class="px-4 py-4 flex justify-between relative overflow-hidden items-center border-b"
      >
        <span class="font-semibold">جزئیات سفارش</span>
        <nuxt-link
          :to="`/profile/orders/${factorData.order_id}`"
          class="text-cyan-500 font-medium cursor-pointer"
        >
          <i class="fa fa-file-invoice pl-1"></i> مشاهده فاکتور</nuxt-link
        >
      </h2>

      <ul class="lg:grid-cols-12 items-center bg-gray-50 hidden lg:grid">
        <li
          class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
        >
          محصول
        </li>
        <li
          class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
        >
          نوع محصول
        </li>
        <li
          class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
        >
          تعداد
        </li>
        <li
          class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
        >
          تخفیف
        </li>
        <li
          class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
        >
          قیمت واحد
        </li>
        <li class="flex items-center p-4 lg:col-span-2 font-semibold border-b">
          قیمت کل
        </li>
      </ul>
      <ul class="w-full" v-if="factorData.order_products != null">
        <div
          class="grid lg:grid-cols-12 items-center last:border-b-0"
          v-for="(product, index) in factorData.order_products"
          :key="index"
        >
          <li
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{
              product.is_feature == true
                ? product.product.product.fa_title.substr(0, 45) + "..."
                : product.product.fa_title.substr(0, 45) + "..."
            }}
          </li>
          <li
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{
              product.is_feature == true
                ? "برند " + product.product.variableTitle
                : "برند " + product.product.brand.title + "- محصول ساده"
            }}
          </li>
          <li
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{ product.count }} عدد
          </li>
          <li
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{ $rial_separate(discount_calc(product)) }} ریال
          </li>
          <li
            v-if="product.is_feature == true"
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{
              $rial_separate(
                product.product.product.features[product.activeFeatureIndex].mainPrice -
                  discount_calc(product) /
                    parseInt(product.count) /
                    parseInt(product.count)
              )
            }}
            ریال
          </li>
          <li
            v-else
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{
              $rial_separate(
                product.product.mainPrice -
                  discount_calc(product) /
                    parseInt(product.count) /
                    parseInt(product.count)
              )
            }}
            ریال
          </li>
          <li
            v-if="product.is_feature == true"
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{
              $rial_separate(
                product.product.product.features[product.activeFeatureIndex].mainPrice -
                  (discount_calc(product) / parseInt(product.count)) *
                    parseInt(product.count)
              )
            }}
            ریال
          </li>
          <li
            v-else
            class="flex items-center p-4 lg:col-span-2 font-semibold lg:border-l border-b"
          >
            {{
              $rial_separate(
                product.product.mainPrice -
                  (discount_calc(product) / parseInt(product.count)) *
                    parseInt(product.count)
              )
            }}
            ریال
          </li>
        </div>
      </ul>

      <ul class="grid lg:grid-cols-12 items-center last:border-b-0 bg-gray-50">
        <li class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l">
          قیمت اصلی
        </li>
        <li class="flex items-center p-4 lg:col-span-9 text-gray-500">
          {{ $rial_separate(factorData.amount_before_discount) }}<span>ریال</span>
        </li>
      </ul>

      <ul class="grid lg:grid-cols-12 items-center last:border-b-0 border-t">
        <li
          class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l border-b"
        >
          هزینه حمل و نقل
        </li>
        <li class="flex items-center p-4 lg:col-span-9 border-b text-gray-500">
          {{ $rial_separate(390000) }}<span>ریال</span>
        </li>
      </ul>

      <ul class="grid lg:grid-cols-12 items-center last:border-b-0 bg-gray-50">
        <li class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l">
          تخفیف
        </li>
        <li class="flex items-center p-4 lg:col-span-9 text-gray-500">
          {{ $rial_separate(factorData.discount_price) }}<span>ریال</span>
        </li>
      </ul>

      <ul class="grid lg:grid-cols-12 items-center last:border-b-0 border-t">
        <li
          class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l border-b"
        >
          ارزش بر افزوده
        </li>
        <li class="flex items-center p-4 lg:col-span-9 border-b text-gray-500">
          {{ $rial_separate(factorData.added_value) }}<span>ریال</span>
        </li>
      </ul>

      <ul class="grid lg:grid-cols-12 items-center last:border-b-0 border-b bg-gray-50">
        <li class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l">
          جمع کل
        </li>
        <li
          class="flex items-center p-4 lg:col-span-9 text-gray-500 md:border-t sm:border-t xs:border-t lg:border-t-0"
        >
          {{ $rial_separate(factorData.amount) }}<span>ریال</span>
        </li>
      </ul>

      <ul class="grid lg:grid-cols-12 items-center last:border-b-0">
        <li class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l">
          یادداشت
        </li>
        <li
          class="flex items-center p-4 lg:col-span-9 text-gray-500 md:border-t lg:border-t-0 sm:border-t xs:border-t"
        >
          لطفا هنگام بسته بندی داخل کارتن باشد
        </li>
      </ul>
    </div>
  </div>
  <div v-else class="h-[300px] pt-[92px] text-center">داده ای یافت نشد</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useMarketStore } from "~/store/marketStore";
import { useAuthStore } from "~/store/authStore";
import { storeToRefs } from "pinia";
import { useCookies } from "vue3-cookies";

const cookies = useCookies().cookies;
const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const factorData = ref(null);

onMounted(async () => {
  cookies.remove("zekri-basket");
  await marketStore.clear_basket_info();

  loading.value = true;
  if (authStore.get_current_user == null) {
    router.push("/auth/login");
  }

  const result = await marketStore.get_order_detail_by_id(route.params.id);
  if (result.statusCode == 200) {
    loading.value = false;
    factorData.value = result.result;
  }
});

const discount_calc = (product) => {
  if (product.is_feature == true) {
    const percent =
      product.product.product.features[product.activeFeatureIndex].discountPercent;
    const price = product.product.product.features[product.activeFeatureIndex].mainPrice;
    if (percent != 0) {
      return ((price * percent) / 100) * parseInt(product.count);
    }
    return 0;
  }
  const percent = product.product.discountPercent;
  const price = product.product.mainPrice;
  if (percent != 0) {
    return ((price * percent) / 100) * parseInt(product.count);
  }
  return 0;
};

definePageMeta({
  pageTransition: {
    mode: "default",
  },
});
</script>
