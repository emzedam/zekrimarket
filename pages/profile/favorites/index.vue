<template>
  <Favorites :favorite_list="authuser != null ? authuser.favorites : []" />
</template>
<script setup>
import { useAuthStore } from "~/store/authStore";
import Favorites from "@/components/Profile/Favorites/Favorites.vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useMarketStore } from "~/store/marketStore";

const marketStore = useMarketStore();
const { loading } = storeToRefs(marketStore);
const router = useRouter();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);

if (authuser.value == null) {
  router.push("/auth/login");
}

onMounted(() => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 900);
});

definePageMeta({
  layout: "user-dashboard",
  pageTransition: {
    mode: "default",
  },
});
</script>
