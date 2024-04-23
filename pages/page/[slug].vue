<template>
  <div
    v-if="
      pageContent != null &&
      (faqsList.length != 0 ||
        productList.length != 0 ||
        isShowForm == true ||
        isShowText == true)
    "
    class="section-style-one new-products mb-20 lg:pt-20 mt-5 bg-[#f2f3f8]"
  >
    <div class="section-wrapper w-full flex justify-center">
      <div class="container-x flex justify-center">
        <div
          class="relative flex flex-col w-full max-w-8xl transition-all duration-300 origin-top rounded-lg"
        >
          <div class="grow bg-neutral-000 flex flex-col w-full items-center shrink-0">
            <div id="base_layout_desktop_static_header" class="w-full h-[150px]">
              <div class="h-full">
                <div
                  class="w-full rounded-lg shadow-sm user-select-none flex justify-center items-center relative pb-2 styles_PromotionCenterHeader___M4N7 h-full"
                >
                  <h2 class="text-white text-3xl font-bold translate-y-[-20px]">
                    <span v-if="pageContent.icon_name != ''" class="ml-2">
                      <i class="fa-duotone" :class="`fa-${pageContent.icon_name}`"></i>
                    </span>
                    {{ pageContent.page_title }}
                  </h2>
                </div>
              </div>
            </div>

            <div
              v-if="priorityList != null"
              class="w-full max-w-7xl p-4 py-6 bg-white rounded-lg h-auto shadow-sm translate-y-[-60px]"
            >
              <div class="w-full" v-for="(el, index) in priorityList" :key="index">
                <Faqs v-if="el.en_name == 'faqs'" :faqsList="faqsList" />
                <ContactForm v-if="el.en_name == 'contactus'" :isShowForm="isShowForm" />
                <TextContent
                  v-if="el.en_name == 'text_content'"
                  :isShowText="isShowText"
                  :textContent="textContent"
                />
                <Products v-if="el.en_name == 'products'" :productList="productList" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="bg-[#f2f3f8] w-full h-[600px] flex items-center justify-center">
    <div class="order-loader"></div>
  </div>
</template>

<script setup>
import Faqs from "@/components/PageItems/Faqs.vue";
import ContactForm from "@/components/PageItems/ContactForm.vue";
import TextContent from "@/components/PageItems/TextContent.vue";
import Products from "@/components/PageItems/Products.vue";

import { useRoute } from "vue-router";
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";

const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const route = useRoute();
const pageContent = ref(null);
const priorityList = ref(null);
const faqsList = ref([]);
const productList = ref([]);
const isShowForm = ref(false);
const isShowText = ref(false);
const textContent = ref(null);

definePageMeta({});

onMounted(async () => {
  const slug = route.params.slug;
  await get_page_by_slug(slug);
});

const get_page_by_slug = async (slug) => {
  const result = await marketStore.get_page_by_slug(slug);
  if (result.status == 200) {
    pageContent.value = result.result;
    priorityList.value = JSON.parse(result.result.priorityItems);
    loading.value = false;

    if (pageContent.value.is_shown_faqs == true) {
      await get_faqs_list();
    }

    if (pageContent.value.shown_products != null) {
      let productIds = JSON.parse(pageContent.value.shown_products);
      await get_product_list_by_ids(productIds);
    }

    if (pageContent.value.is_contact_form == true) {
      isShowForm.value = true;
    }

    if (pageContent.value.page_content != null) {
      isShowText.value = true;
      textContent.value = pageContent.value.page_content;
    }
  }
};

const get_faqs_list = async () => {
  const result = await marketStore.get_question_list();
  if (result.status == 200) {
    faqsList.value = result.result;
  }
};

const get_product_list_by_ids = async (productIds) => {
  const result = await marketStore.get_product_list(productIds);
  if (result.status == 200) {
    productList.value = result.result;
  }
};
</script>

<style>
.styles_PromotionCenterHeader___M4N7 {
  background: url("@/assets/page-center-pattern.svg") no-repeat center 0,
    linear-gradient(45deg, #d94800, #ff6700);
}

.order-loader {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: radial-gradient(farthest-side, #b4b4b4 94%, #0000) top/8px 8px no-repeat,
    conic-gradient(#0000 30%, #d1d1d1);
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 3px), #000 0);
  animation: s3 1s infinite linear;
}

@keyframes s3 {
  100% {
    transform: rotate(1turn);
  }
}
</style>
