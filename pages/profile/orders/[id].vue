<template>
  <div class="relative container-x mx-auto h-full my-10" v-if="factorData != null">
    <div class="border rounded-lg">
      <h2
        class="px-4 py-4 flex justify-between relative overflow-hidden items-center border-b"
      >
        <span class="font-semibold">جزئیات سفارش</span>
        <div class="flex items-center justify-start">
          <span
            v-if="factorData.status == 0 && loadingPayment == false"
            @click="doStartPayment()"
            class="text-red-500 ml-5 font-medium cursor-pointer p-2 transition-all rounded-lg hover:bg-red-50"
          >
            <i class="fa fa-credit-card pl-2"></i>
            <span>پرداخت سفارش</span>
          </span>
          <span
            v-if="factorData.status == 0 && loadingPayment == true"
            class="text-red-500 ml-5 font-medium cursor-pointer p-2 transition-all rounded-lg hover:bg-red-50"
          >
            <i class="fa fa-credit-card pl-2"></i>
            <span>در حال اتصال ...</span>
          </span>
          <span
            @click="exportPdfFromOrder()"
            class="text-green-500 font-medium cursor-pointer p-2 transition-all rounded-lg hover:bg-green-50"
          >
            <i class="fa fa-download pl-1"></i>
            <span>دانلود فاکتور</span>
          </span>
          <div
            @click="router.push('/profile/orders')"
            title="بازگشت به عقب"
            class="p-2 flex transition-all cursor-pointer rounded-lg items-center justify-center w-[50px] text-center h-100 hover:bg-gray-50"
          >
            <i class="fal fa-angle-left text-2xl"></i>
          </div>
        </div>
      </h2>

      <div ref="pdfSection">
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

        <ul class="grid lg:grid-cols-12 items-center last:border-b-0">
          <li
            class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l border-t"
          >
            وضعیت پرداخت
          </li>
          <li class="flex items-center p-4 lg:col-span-9 border-t text-gray-500">
            <p :class="[get_payment_state(factorData.status).color, 'font-bold']">
              {{ get_payment_state(factorData.status).text }}
            </p>
          </li>
        </ul>

        <ul class="grid lg:grid-cols-12 items-center last:border-b-0 border-t">
          <li
            class="flex items-center p-4 lg:col-span-3 font-semibold lg:border-l border-b"
          >
            هزینه حمل و نقل
          </li>
          <li class="flex items-center p-4 lg:col-span-9 border-b text-gray-500">
            {{ $rial_separate(factorData.shipping_price) }}<span>ریال</span>
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
  </div>
  <div v-else class="h-[300px] pt-[92px] text-center">داده ای یافت نشد</div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useMarketStore } from "~/store/marketStore";
import { useAuthStore } from "~/store/authStore";
import { useToast } from "vue-toast-notification";
import "vue-toast-notification/dist/theme-sugar.css";
import { storeToRefs } from "pinia";

useHead({
  script: [
    {
      src: "/js/html2pdf.bundle.min.js",
    },
  ],
});

const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const authStore = useAuthStore();
const route = useRoute();
const router = useRouter();
const $toast = useToast();
const factorData = ref(null);
const pdfSection = ref(null);
const loadingPayment = ref(false);

onMounted(async () => {
  loading.value = true;
  if (authStore.get_current_user == null) {
    router.push("/auth/login?backto=" + route.params.id);
  }

  const result = await marketStore.get_order_detail_by_id(route.params.id);
  // console.log(result);
  if (result.statusCode == 200) {
    factorData.value = result.result;
    loading.value = false;
  }
});

const get_payment_state = (status) => {
  switch (status) {
    case 0:
      return {
        text: "در انتظار پرداخت",
        color: "text-orange-500",
      };
      break;
    case 1:
      return {
        text: "پرداخت شده",
        color: "text-green-500",
      };
      break;
    case 2:
      return {
        text: "تحویل داده شده",
        color: "text-green-500",
      };
      break;
    case 3:
      return {
        text: "لغو شده",
        color: "text-red-500",
      };
      break;
    default:
      return {
        text: "وضعیت نامعلوم",
        color: "text-red-500",
      };
      break;
  }
};

const exportPdfFromOrder = () => {
  var element = pdfSection.value;
  var opt = {
    filename: "order.pdf",
    jsPDF: { format: [400, 160], orientation: "landscape" },
  };
  html2pdf().from(element).set(opt).save();
};

const printFactor = () => {
  window.print();
};

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

const doStartPayment = async () => {
  loadingPayment.value = true;

  const data = {
    order_id: factorData.value.order_id,
    amount: factorData.value.amount,
  };
  const result = await marketStore.pay_order_after_save(data);
  if (result.statusCode == 200) {
    loadingPayment.value = false;
    window.location.href = `https://bpm.shaparak.ir/pgwchannel/payment.mellat?RefId=${result.ref_id}`;
  }
};

definePageMeta({
  layout: "auth-layout",
});
</script>

<style>
html {
  padding: 0;
}
body {
  padding: 0;
  margin: 0;
}

@media print {
  @page {
    size: landscape;
  }
}
</style>
