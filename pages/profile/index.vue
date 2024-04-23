<template>
  <Main :order_info="order_info" />
</template>
<script setup>
import Main from "@/components/Profile/Account/Main.vue";
import { useAuthStore } from "~/store/authStore";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useMarketStore } from "~/store/marketStore";

const marketStore = useMarketStore();
const order_info = ref(null);
const router = useRouter();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);
const { loading } = storeToRefs(marketStore);

if (authuser.value == null) {
  router.push("/auth/login");
}

const get_init_order_info = async () => {
  const result = await marketStore.get_init_order_info();
  if (result.statusCode == 200) {
    loading.value = false;
    order_info.value = result.result;
  }
};

onMounted(async () => {
  loading.value = true;
  await get_init_order_info();
});

definePageMeta({
  layout: "user-dashboard",
  pageTransition: {
    mode: "default",
  },
});
</script>
