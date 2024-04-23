<template>
  <div class="relative container-x mx-auto h-full mt-3 mb-10 lg:my-20">
    <ModalAddress
      :locationModalState="openLocationModal"
      :getAddressModalState="openAddressModal"
      :openEditAddressModalStateProp="openEditAddressModalState"
      @closeMapModal="openLocationModal = false"
      @openMapModal="openLocationModal = true"
      @openAddressModal="openAddressModal = true"
      @closeAddressModal="openAddressModal = false"
      @closeEditAddressModal="openEditAddressModalState = false"
    />
    <Dedline />
    <Content
      v-if="basketContainer.length != 0"
      :basketList="basketContainer"
      @openEditAddressModal="openEditAddressModalState = true"
    />
  </div>
</template>

<script setup>
import { useAuthStore } from "@/store/authStore";
import { useMarketStore } from "@/store/marketStore";
import { useRouter } from "vue-router";
import Dedline from "~/components/Checkout/Shipping/Dedline.vue";
import Content from "~/components/Checkout/Shipping/Content.vue";
import ModalAddress from "~/components/Checkout/Shipping/ModalAddress.vue";
import { storeToRefs } from "pinia";

useHead({
  script: [
    {
      src: "https://zekrimarket.com/js/mapbox-gl.js",
    },
    {
      src: "http://localhost:3000/js/mapboxrtl.js",
    },
  ],
  link: [
    {
      type: "text/css",
      rel: "stylesheet",
      href: "https://zekrimarket.com/css/mapbox-gl.css",
    },
  ],
});

const marketStore = useMarketStore();
const { basketInfo, loading } = storeToRefs(marketStore);
const basketContainer = ref([]);
const openLocationModal = ref(false);
const openAddressModal = ref(false);
const openEditAddressModalState = ref(false);
const authStore = useAuthStore();
const router = useRouter();

definePageMeta({
  layout: "authLayout",
});

onMounted(async () => {
  loading.value = true;
  await marketStore.get_user_addresses_list();

  if (authStore.get_current_user == null) {
    router.push("/auth/login");
  }

  if (marketStore.get_user_addresses.length == 0) {
    openLocationModal.value = true;
  }

  const basketProducts = await marketStore.get_basket_products(basketInfo.value.products);

  if (basketProducts.statusCode == 200) {
    loading.value = false;
    basketContainer.value = basketProducts.result;
  }
});
</script>
