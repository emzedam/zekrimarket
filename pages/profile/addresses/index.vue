<template>
  <div class="lg:col-span-9">
    <NewAddress
      @openMapModal="open_location_modal()"
      :userAdressList="userAdressList"
      @openEditModalAddress="(address) => openEditModalAddress(address)"
    />
    <ModalAddress
      ref="addressmodal"
      :locationModalState="openLocationModal"
      :getAddressModalState="openAddressModal"
      :openEditAddressModalStateProp="openEditAddressModalState"
      @closeMapModal="openLocationModal = false"
      @openMapModal="openLocationModal = true"
      @openAddressModal="openAddressModal = true"
      @closeAddressModal="openAddressModal = false"
      @closeEditAddressModal="openEditAddressModalState = false"
    />
  </div>
</template>

<script setup>
import NewAddress from "@/components/Profile/Address/NewAddress.vue";
import { useAuthStore } from "~/store/authStore";
import { useRouter } from "vue-router";
import { useMarketStore } from "@/store/marketStore";
import ModalAddress from "~/components/Checkout/Shipping/ModalAddress.vue";
import { storeToRefs } from "pinia";

const router = useRouter();
const marketStore = useMarketStore();
const authStore = useAuthStore();
const { userAdressList, loading } = storeToRefs(marketStore);
const { authuser } = storeToRefs(authStore);
const openLocationModal = ref(false);
const openAddressModal = ref(false);
const openEditAddressModalState = ref(false);
const addressmodal = ref(null);

useHead({
  script: [
    {
      src: "/js/mapbox-gl.js",
    },
  ],
  link: [
    {
      type: "text/css",
      rel: "stylesheet",
      href: "http://localhost:3000/css/mapbox-gl.css",
    },
  ],
});

onMounted(async () => {
  loading.value = true;
  await marketStore.get_user_addresses_list();

  if (userAdressList.value.length == 0) {
    openLocationModal.value = true;
  }

  setTimeout(() => {
    loading.value = false;
  }, 900);
});

if (authuser.value == null) {
  router.push("/auth/login");
}

const openEditModalAddress = (address) => {
  addressmodal.value.do_edit_location_list(address);
};
const open_location_modal = () => {
  addressmodal.value.do_add_new_address();
};

definePageMeta({
  layout: "user-dashboard",
});
</script>
