<template>
  <div
    class="Main lg:py-16 mx-auto wp-full px-6 lg:my-10 my-4 py-4"
    v-if="productDetails != null"
  >
    <!-- Breadcrumb -->
    <BreadCrumb :breadcrumb="productDetails.categories[0]" />

    <div class="grid lg:grid-cols-12 grid-cols-1 mt-4 w-full lg:gap-8 gap-y-4">
      <Gallery
        :title="productDetails.fa_title"
        :product_id="productId"
        v-if="galleries.length != 0"
        :galleries="galleries"
      />

      <Details
        :product="productDetails"
        @changeVariable="(feature) => do_change_variable(feature)"
      />

      <SellerDetail
        ref="seller_detail_ref"
        v-if="currentProduct != null"
        :currentProduct="currentProduct"
        :productPrice="productPrice"
        :productDiscount="productDiscount"
        :isProductStock="isProductStock"
        :availableProductStockCount="availableProductStockCount"
      />
    </div>

    <div class="section-style-one new-products mb-[20px] pb-10 mt-6">
      <div class="section-wrapper w-full">
        <nav class="bg-white border rounded-t-lg">
          <ul
            class="flex items-center gap-4 font-semibold relative overflow-hidden text-center"
          >
            <li
              :class="{ 'after:bg-red-500': activeTabIndex == 0 }"
              class="p-4 cursor-pointer text-center after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:duration-300 after:right-0 after:block after:w-w-full relative overflow-hidden"
              @click="activeTab(0)"
            >
              معرفی
            </li>
            <li
              @click="activeTab(1)"
              :class="{ 'after:bg-red-500': activeTabIndex == 1 }"
              class="p-4 cursor-pointer text-center after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:duration-300 after:right-0 after:block after:w-w-full relative overflow-hidden"
            >
              مشخصات
            </li>
            <li
              @click="activeTab(2)"
              :class="{ 'after:bg-red-500': activeTabIndex == 2 }"
              class="p-4 cursor-pointer text-center after:content-[''] after:absolute after:w-full after:h-[2px] after:bottom-0 after:duration-300 after:right-0 after:block after:w-w-full relative overflow-hidden"
            >
              دیدگاه ها
            </li>
            <li
              class="p-4 cursor-pointer text-center after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-red-500 after:bottom-0 after:duration-300 after:right-0 after:block after:w-w-full relative overflow-hidden hidden"
            >
              اطلاعات فروشنده
            </li>
          </ul>
        </nav>

        <Intro :activeTab="activeTabIndex" :description="productDetails.description" />

        <Information
          :activeTab="activeTabIndex"
          :properties="productDetails.properties"
        />

        <comments
          v-if="product_id != null"
          :productId="product_id"
          :activeTab="activeTabIndex"
          :comments="[]"
        />

        <SellerInfoSection />
      </div>
    </div>

    <SuggestProducts
      v-if="productDetails.suggests.length != 0"
      :suggests="productDetails.suggests"
    />
  </div>
  <div v-if="productDetails == null">
    <div class="flex mt-5 items-center justify-center w-full h-[200px]">
      <h4>متاسفانه محتوا یافت نشد</h4>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { useMarketStore } from "~/store/marketStore";
import { storeToRefs } from "pinia";

import BreadCrumb from "@/components/Content/Products/singlePage/BreadCrumb.vue";
import Gallery from "@/components/Content/Products/singlePage/Gallery.vue";
import Details from "@/components/Content/Products/singlePage/Details.vue";
import SellerDetail from "@/components/Content/Products/singlePage/SellerDetail.vue";
import Intro from "@/components/Content/Products/singlePage/Intro.vue";
import comments from "@/components/Content/Products/singlePage/comments.vue";
import Information from "@/components/Content/Products/singlePage/Information.vue";
import SellerInfoSection from "@/components/Content/Products/singlePage/SellerInfoSection.vue";
import SuggestProducts from "@/components/Content/Products/singlePage/SuggestProducts.vue";

const route = useRoute();
const router = useRouter();
const store = useMarketStore();
const { loading } = storeToRefs(store);
const productDetails = ref(null);
const galleries = ref([]);
const productId = ref(null);
const productPrice = ref(null);
const productDiscount = ref(null);
const activeTabIndex = ref(0);
const currentProduct = ref(null);
const seller_detail_ref = ref(null);
const product_id = ref(null);
const isProductStock = ref(false);
const availableProductStockCount = ref(0);

onMounted(async () => {
  loading.value = true;
  const slugId = route.params.slug.split("-")[route.params.slug.split("-").length - 1];
  await get_product_info(slugId);
});

const get_product_info = async (slugId) => {
  const result = await store.get_product_by_slug(slugId);
  if (result.statusCode == 200) {
    loading.value = false;
    productDetails.value = result.result;
    product_id.value = productDetails.value._id;
    if (productDetails.value.galleries.length != 0) {
      galleries.value = productDetails.value.galleries;
    }

    if (productDetails.value.features.length == 0) {
      productPrice.value = productDetails.value.mainPrice;
      productDiscount.value = productDetails.value.discountPercent;
      currentProduct.value = productDetails.value;
      isProductStock.value =
        productDetails.value.productStock > productDetails.value.productBuyedCount
          ? true
          : false;
      availableProductStockCount.value =
        productDetails.value.productStock - productDetails.value.productBuyedCount;
      productId.value = productDetails.value.productZMP;
    }

    // set comments value
    store.comments = productDetails.value.comments;
  }
};

const do_change_variable = (feature) => {
  galleries.value = feature.galleries;
  productPrice.value = feature.mainPrice;
  productDiscount.value = feature.discountPercent;
  productId.value = feature.product_id;
  isProductStock.value = feature.productStock > feature.productBuyedCount ? true : false;
  availableProductStockCount.value = feature.productStock - feature.productBuyedCount;
  currentProduct.value = feature;
};

const activeTab = (index) => {
  activeTabIndex.value = index;
};
</script>
