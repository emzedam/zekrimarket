<template>
  <Orderhistory />
</template>

<script setup>
import { useAuthStore } from "~/store/authStore";
import Orderhistory from "@/components/Profile/orders/Orderhistory.vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const router = useRouter();
const authStore = useAuthStore();
const { authuser } = storeToRefs(authStore);

if (authuser.value == null) {
  router.push("/auth/login");
}

definePageMeta({
  layout: "user-dashboard",
});
</script>
